import json
import re

with open('src/data/listening/practiceTests.js', 'r', encoding='utf-8') as f:
    text = f.read()

prefix = 'export const LISTENING_PRACTICE_DATA = '
if text.startswith(prefix):
    js_data = text[len(prefix):].rstrip(';\n ')
    data = json.loads(js_data)
    print('Total sets in LISTENING_PRACTICE_DATA:', len(data.get('testSets', [])))
    for s in data.get('testSets', []):
        s_json = json.dumps(s, ensure_ascii=False)
        matches = re.findall(r'Lựa chọn [A-D]', s_json)
        print(f"Set '{s.get('id')}' - '{s.get('title')}': {len(matches)} placeholder options")
