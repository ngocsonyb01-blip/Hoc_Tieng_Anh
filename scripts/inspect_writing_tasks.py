import re

with open("scripts/full_keys_extracted.txt", "r", encoding="utf-8") as f:
    text = f.read()

# Find all writing sections
tests = re.split(r'TEST\s*(\d+)', text)

for i in range(1, len(tests), 2):
    t_num = tests[i]
    content = tests[i+1]
    
    print(f"================ TEST {t_num} WRITING ================")
    w1 = re.search(r'C\.\s*WRITING\s*TASK\s*1(.*?)(?:C\.\s*WRITING\s*TASK\s*2|TASK\s*2|D\.\s*SPEAKING)', content, re.DOTALL | re.IGNORECASE)
    if w1:
        print("--- TASK 1 ---")
        print(w1.group(1)[:400].strip())
    
    w2 = re.search(r'(?:C\.\s*WRITING\s*TASK\s*2|TASK\s*2)(.*?)(?:D\.\s*SPEAKING|$)', content, re.DOTALL | re.IGNORECASE)
    if w2:
        print("--- TASK 2 ---")
        print(w2.group(1)[:400].strip())
