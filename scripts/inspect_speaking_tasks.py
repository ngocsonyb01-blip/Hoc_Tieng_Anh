import re

with open("scripts/full_keys_extracted.txt", "r", encoding="utf-8") as f:
    text = f.read()

tests = re.split(r'TEST\s*(\d+)', text)

for i in range(1, len(tests), 2):
    t_num = tests[i]
    content = tests[i+1]
    sp = re.search(r'D\.\s*SPEAKING(.*?)(?:TEST\s*\d+|$)', content, re.DOTALL | re.IGNORECASE)
    if sp:
        print(f"================ TEST {t_num} SPEAKING ================")
        print(sp.group(1)[:500].strip())
