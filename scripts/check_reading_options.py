import json
import re

with open('src/data/reading/practicePassages.js', 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'export const READING_PASSAGES_DATA = (\{.*\});', text, re.DOTALL)
if not m:
    print("Could not parse READING_PASSAGES_DATA")
    exit(1)

data = json.loads(m.group(1))
passages = data.get('passages', [])

print(f"Total passages: {len(passages)}")

total_questions = 0
missing_options = []
invalid_keys = []
placeholder_options = []

for p_idx, p in enumerate(passages):
    p_title = p.get('title', f"Passage {p_idx+1}")
    qs = p.get('questions', [])
    for q in qs:
        total_questions += 1
        q_id = q.get('id')
        opts = q.get('options', [])
        correct = q.get('correctAnswer')
        
        # Check option count
        if len(opts) < 4:
            missing_options.append((p_title, q_id, f"Only {len(opts)} options"))
            
        # Check option texts
        for o in opts:
            k = o.get('key')
            txt = o.get('text', '')
            if not txt or txt.strip() == '':
                missing_options.append((p_title, q_id, f"Option {k} empty"))
            elif txt.startswith('Lựa chọn') or txt.startswith('Option '):
                placeholder_options.append((p_title, q_id, f"Option {k}: '{txt}'"))
                
        # Check if correctAnswer is in options
        keys_in_opts = [o.get('key') for o in opts]
        if correct not in keys_in_opts:
            invalid_keys.append((p_title, q_id, f"Correct '{correct}' not in {keys_in_opts}"))

print(f"Total questions checked: {total_questions}")
print(f"Missing options issues: {len(missing_options)}")
for item in missing_options[:10]:
    print(" ", item)
print(f"Placeholder options (Lựa chọn A/B/C/D): {len(placeholder_options)}")
for item in placeholder_options[:15]:
    print(" ", item)
print(f"Invalid correct keys: {len(invalid_keys)}")
for item in invalid_keys[:10]:
    print(" ", item)
