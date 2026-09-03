import json
import re

# Load keys
with open('scripts/full_keys_extracted.txt', 'r', encoding='utf-8') as f:
    key_text = f.read()

def get_listening_keys(test_num):
    m = re.search(rf'TEST\s*{test_num}.*?A\.\s*LISTENING(.*?)(?:B\.\s*READING|$)', key_text, re.DOTALL | re.IGNORECASE)
    if not m:
        return {}
    sec = m.group(1)
    matches = re.findall(r'(\d+)\s*[-.:]?\s*([A-D])', sec)
    return {int(q): ans.upper() for q, ans in matches}

# Load scripts
with open('scripts/full_scripts_extracted.txt', 'r', encoding='utf-8') as f:
    tapescripts = f.read()

print("Ready to construct authentic listening tests.")
