import docx

doc = docx.Document('a/BỘ ĐỀ LISTENING/VSTEP LISTENING 3/READING 2 - VSTEP SV.docx')
for p in doc.paragraphs[15:40]:
    if p.text.strip():
        print(repr(p.text.strip()))
