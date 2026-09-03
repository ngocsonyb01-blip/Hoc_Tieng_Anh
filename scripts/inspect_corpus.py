import re
import json

with open('src/data/tests/authenticVstepExams.js', 'r', encoding='utf-8') as f:
    text = f.read()

names = re.findall(r'"name":\s*"([^"]+)"', text)
ids = re.findall(r'"id":\s*"([^"]+)"', text)
exam_ids = [i for i in ids if 'vstep-exam' in i or 'exam' in i]

print(f"Total exams in authenticVstepExams.js: {len(exam_ids)}")
for i, name in enumerate(names[:10]):
    print(f"  {i+1}: {name}")
