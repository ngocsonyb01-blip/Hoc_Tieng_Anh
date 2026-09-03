import docx
import re
import json

def parse_docx_perfect(docx_path, test_num):
    doc = docx.Document(docx_path)
    paras = [p.text.strip() for p in doc.paragraphs if p.text.strip()]
    
    passages = []
    curr_passage = None
    curr_q = None
    
    q_counter = (test_num - 1) * 40 # for test 2: 41-80, or local 1-40
    local_q_counter = 0
    
    for i, line in enumerate(paras):
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
                'paragraphs': [],
                'questions': []
            }
            continue
            
        if not curr_passage:
            continue
            
        # Check if this line is an option A, B, C, or D
        opt_single = re.match(r'^([A-D])[\.\:\)]\s*(.*)$', line)
        opt_multi = list(re.finditer(r'([A-D])[\.\:\)]\s*(.*?)(?=\s+[A-D][\.\:\)]|$)', line))
        
        is_opt = False
        if opt_single:
            is_opt = True
            k = opt_single.group(1)
            txt = opt_single.group(2).strip()
            if curr_q:
                curr_q['options'].append({'key': k, 'text': txt})
        elif len(opt_multi) >= 2:
            is_opt = True
            if curr_q:
                for om in opt_multi:
                    curr_q['options'].append({'key': om.group(1), 'text': om.group(2).strip()})
                    
        if is_opt:
            continue
            
        # Check if line is a numbered question: e.g. "1. ...", "12. ...", "Question 1: ..."
        m_q = re.match(r'^(?:Question\s*)?(\d+)[\.\:\)]\s*(.*)$', line, re.IGNORECASE)
        if m_q:
            if curr_q:
                curr_passage['questions'].append(curr_q)
            local_q_counter += 1
            curr_q = {
                'id': int(m_q.group(1)),
                'question': m_q.group(2).strip(),
                'options': []
            }
            continue
            
        # Check if the NEXT line is "A. ..." - then this line is a question without number!
        next_is_opt = False
        if i + 1 < len(paras):
            next_line = paras[i+1]
            if re.match(r'^A[\.\:\)]\s*', next_line):
                next_is_opt = True
                
        if next_is_opt:
            if curr_q:
                curr_passage['questions'].append(curr_q)
            local_q_counter += 1
            curr_q = {
                'id': local_q_counter,
                'question': line,
                'options': []
            }
            continue
            
        # Otherwise: it's part of the passage text (or continuation of question)
        if curr_q and not curr_q['options']:
            curr_q['question'] += ' ' + line
        elif not curr_q:
            curr_passage['paragraphs'].append(line)
            
    if curr_passage:
        if curr_q:
            curr_passage['questions'].append(curr_q)
        passages.append(curr_passage)
        
    return passages

# Test on Reading 2
p2 = parse_docx_perfect('a/BỘ ĐỀ LISTENING/VSTEP LISTENING 3/READING 2 - VSTEP SV.docx', 2)
print(f"Reading 2: {len(p2)} passages")
for idx, p in enumerate(p2):
    print(f" Passage {p['passageNum']}: {len(p['paragraphs'])} paras, {len(p['questions'])} questions")
    for q in p['questions'][:3]:
        opts_summary = [f"{o['key']}: {o['text'][:20]}" for o in q['options']]
        print(f"   Q{q['id']}: '{q['question'][:40]}' -> opts: {opts_summary}")
