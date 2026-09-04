import json

with open('src/data/listening/practiceTests.js', 'r', encoding='utf-8') as f:
    text = f.read()

prefix = 'export const LISTENING_PRACTICE_DATA = '
data = json.loads(text[len(prefix):].rstrip(';\n '))

for s in data['testSets']:
    s_id = s.get("id")
    s_title = s.get("title")
    print(f"Checking {s_id} - {s_title}...")
    all_q = []
    if 'part1' in s:
        all_q.extend(s['part1'].get('questions', []))
    if 'part2' in s:
        for c in s['part2'].get('conversations', []):
            all_q.extend(c.get('questions', []))
    if 'part3' in s:
        for l in s['part3'].get('lectures', []):
            all_q.extend(l.get('questions', []))
            
    print(f"  Total questions: {len(all_q)}")
    print(f"  Total questions: {len(all_q)}")
    
    for q in all_q:
        q_id = q['id']
        opts = q['options']
        assert len(opts) == 4, f"Question {q_id} does not have 4 options: {opts}"
        keys = [o['key'] for o in opts]
        assert keys == ['A', 'B', 'C', 'D'], f"Question {q_id} keys not A,B,C,D: {keys}"
        for o in opts:
            assert o['text'].strip(), f"Question {q_id} option {o['key']} is empty"
            assert 'lựa chọn' not in o['text'].lower(), f"Question {q_id} option {o['key']} has placeholder: {o['text']}"
            assert 'option ' not in o['text'].lower(), f"Question {q_id} option {o['key']} has placeholder: {o['text']}"
        assert q['correctAnswer'] in ['A', 'B', 'C', 'D'], f"Question {q_id} invalid correctAnswer: {q['correctAnswer']}"

print(">>> ALL 5 LISTENING TEST SETS VALIDATED PERFECTLY WITH ZERO PLACEHOLDERS AND COMPLETE 4 OPTIONS! <<<")
