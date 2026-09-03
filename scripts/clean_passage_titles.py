import re

with open('src/data/reading/practicePassages.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace "title": "Passage \d+: ... " -> "title": "..."
# Replace "title": "Đề \d+ • Bài \d+: ... " -> "title": "..."
def clean_title(m):
    prefix = m.group(1)
    full_title = m.group(2)
    # Strip prefixes
    clean = re.sub(r'^(?:Đề\s*\d+\s*[•·-]\s*Bài\s*\d+\s*:\s*|Passage\s*\d+\s*:\s*)', '', full_title, flags=re.IGNORECASE)
    return f'{prefix}"{clean}"'

new_content = re.sub(r'("title":\s*)"([^"]+)"', clean_title, content)

with open('src/data/reading/practicePassages.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Cleaned all passage titles in practicePassages.js!")
