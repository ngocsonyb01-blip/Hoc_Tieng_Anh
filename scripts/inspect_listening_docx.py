import docx

for doc_path in [
    'a/BỘ ĐỀ LISTENING/VSTEP LISTENING 1/Btvn 5 - Nghe.docx',
    'a/BỘ ĐỀ LISTENING/VSTEP LISTENING 2/VSTEP LISTENING TEST 2.docx',
    'a/BỘ ĐỀ LISTENING/VSTEP LISTENING 3/VSTEP LISTENING 3.docx'
]:
    doc = docx.Document(doc_path)
    paras = [p.text.strip() for p in doc.paragraphs if p.text.strip()]
    print(f"================ {doc_path} ================")
    print(f"Total paragraphs: {len(paras)}")
    for p in paras[:15]:
        print(f"  {p[:100]}")
