import docx
import re
import json

def parse_reading_docx(fpath):
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
                'num': int(m_pass.group(1)),
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
                'question': m_q.group(2),
                'options': []
            }
            continue
            
        if curr_q:
            # Check options
            opt_matches = re.findall(r'([A-D])\.\s*([^A-D\n]+)', line)
            if opt_matches:
                for key, text in opt_matches:
                    curr_q['options'].append({'key': key, 'text': text.strip()})
            else:
                # continuation
                if not curr_q['options']:
                    curr_q['question'] += ' ' + line
                else:
                    curr_q['options'][-1]['text'] += ' ' + line
        else:
            if not curr_passage['title'] and len(line) < 100 and not line.endswith('.'):
                curr_passage['title'] = line
            else:
                curr_passage['paragraphs'].append(line)
                
    if curr_passage:
        if curr_q:
            curr_passage['questions'].append(curr_q)
        passages.append(curr_passage)
        
    return passages

for i in [2, 3, 4, 5]:
    path = f'a/BỘ ĐỀ LISTENING/VSTEP LISTENING 3/READING {i} - VSTEP SV.docx'
    res = parse_reading_docx(path)
    print(f"=== Reading {i} ===")
    print(f"Passages: {len(res)}")
    for p in res:
        print(f"  Passage {p['num']}: '{p['title'][:40]}', {len(p['paragraphs'])} paragraphs, {len(p['questions'])} questions")
        if p['questions']:
            q1 = p['questions'][0]
            print(f"    Q{q1['id']}: {q1['question'][:60]} | {len(q1['options'])} options")
