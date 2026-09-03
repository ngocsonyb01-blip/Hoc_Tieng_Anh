import re

with open('src/data/reading/practicePassages.js', 'r', encoding='utf-8') as f:
    text = f.read()

titles = re.findall(r'"title":\s*"([^"]+)"', text)
for t in titles:
    print('-', t)
