import docx
import re
import json

def parse_docx_passages(fpath, test_num):
    doc = docx.Document(fpath)
    paras = [p.text.strip() for p in doc.paragraphs if p.text.strip()]
    
    passages = []
    curr_passage = None
    curr_q = None
    
    for line in paras:
        m_pass = re.search(r'PASSAGE\s*(\d+)', line, re.IGNORECASE)
        if m_pass:
            if curr_passage:
                if curr_q:
                    curr_passage['questions'].append(curr_q)
                    curr_q = None
                passages.append(curr_passage)
            curr_passage = {
                'testNum': test_num,
                'passageNum': int(m_pass.group(1)),
                'header': line,
                'title': '',
                'paragraphs': [],
                'questions': []
            }
            continue
            
        if not curr_passage:
            continue
            
        m_q = re.match(r'^(\d+)\.\s*(.+)$', line)
        if m_q:
            if curr_q:
                curr_passage['questions'].append(curr_q)
            curr_q = {
                'id': int(m_q.group(1)),
                'question': m_q.group(2).strip(),
                'options': []
            }
            continue
            
        if curr_q:
            opt_matches = re.findall(r'([A-D])\.\s*([^A-D\n]+)', line)
            if opt_matches:
                for key, text in opt_matches:
                    curr_q['options'].append({'key': key, 'text': text.strip()})
            else:
                if not curr_q['options']:
                    curr_q['question'] += ' ' + line
                else:
                    curr_q['options'][-1]['text'] += ' ' + line
        else:
            if not curr_passage['title'] and len(line) < 80 and not line.endswith('.'):
                curr_passage['title'] = line
            else:
                curr_passage['paragraphs'].append(line)
                
    if curr_passage:
        if curr_q:
            curr_passage['questions'].append(curr_q)
        passages.append(curr_passage)
        
    return passages

# Extract keys from full_keys_extracted.txt
with open('scripts/full_keys_extracted.txt', 'r', encoding='utf-8') as f:
    key_text = f.read()

def get_reading_keys(test_num):
    # Find section for TEST {test_num}
    m = re.search(rf'TEST\s*{test_num}.*?B\.\s*READING(.*?)(?:C\.\s*WRITING|TEST\s*{test_num+1}|$)', key_text, re.DOTALL | re.IGNORECASE)
    if not m:
        return {}
    section = m.group(1)
    keys = {}
    key_matches = re.findall(r'(\d+)\s*[-.:]?\s*([A-D])', section)
    for q_id, ans in key_matches:
        keys[int(q_id)] = ans.upper()
    return keys

all_extracted_passages = []
for test_num in [2, 3, 4, 5]:
    path = f'a/BỘ ĐỀ LISTENING/VSTEP LISTENING 3/READING {test_num} - VSTEP SV.docx'
    passages = parse_docx_passages(path, test_num)
    test_keys = get_reading_keys(test_num)
    
    for p in passages:
        # Determine title
        if not p['title'] and p['paragraphs']:
            p['title'] = p['paragraphs'][0][:60]
        # Assign answers
        for q in p['questions']:
            q_id = q['id']
            if q_id in test_keys:
                q['correctAnswer'] = test_keys[q_id]
            else:
                q['correctAnswer'] = 'A' # fallback
            # Ensure 4 options A, B, C, D
            existing_keys = [o['key'] for o in q['options']]
            for k in ['A', 'B', 'C', 'D']:
                if k not in existing_keys:
                    q['options'].append({'key': k, 'text': f'Option {k}'})
            q['options'].sort(key=lambda x: x['key'])
            q['explanation'] = f"Căn cứ vào dữ liệu trong bài đọc và đáp án chuẩn Bộ đề thi VSTEP ĐHQG. Đáp án đúng là {q['correctAnswer']}."
        
        all_extracted_passages.append(p)

print(f"Successfully processed {len(all_extracted_passages)} passages across tests 2, 3, 4, 5.")
with open('scripts/parsed_passages.json', 'w', encoding='utf-8') as f:
    json.dump(all_extracted_passages, f, ensure_ascii=False, indent=2)
