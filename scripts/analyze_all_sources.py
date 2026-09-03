import os
import re
import fitz
import docx

print("=== 1. ANALYZING READING DOCX FILES ===")
for num in [1, 2, 3, 4, 5]:
    fpath = f"a/BỘ ĐỀ LISTENING/VSTEP LISTENING 3/READING {num} - VSTEP SV.docx"
    if os.path.exists(fpath):
        doc = docx.Document(fpath)
        full_text = "\n".join([p.text.strip() for p in doc.paragraphs if p.text.strip()])
        # Find passages
        passages = re.findall(r'PASSAGE\s*([0-9]+)', full_text, re.IGNORECASE)
        questions = re.findall(r'(\d+)\.\s*([A-Z][^\n]+)', full_text)
        print(f"Reading {num}: {len(full_text)} chars, Passages found: {passages}, Questions found: {len(questions)}")

print("\n=== 2. ANALYZING KEYS & SAMPLE WRITING/SPEAKING IN 5 BO DE PDF (pages 94-120) ===")
doc5 = fitz.open("a/VSTEP 5 BỘ ĐỀ B1 B2 THÁNG 5 (19-5).pdf")
for p in [93, 99, 105, 112, 118]:
    text = doc5[p].get_text('text')
    print(f"Page {p+1} Key sample: {text[:300].strip()}")
