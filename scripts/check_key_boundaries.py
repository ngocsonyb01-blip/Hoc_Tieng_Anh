import re

with open("scripts/full_keys_extracted.txt", "r", encoding="utf-8") as f:
    text = f.read()

# Find occurrences of TEST 1, TEST 2, etc.
matches = re.finditer(r'(TEST\s*(\d+)|KEY\s*TEST\s*(\d+))', text, re.IGNORECASE)
for m in matches:
    pos = m.start()
    snippet = text[pos:pos+200].replace('\n', ' ')
    print(f"Match: {m.group(0)} at {pos}: {snippet}")
