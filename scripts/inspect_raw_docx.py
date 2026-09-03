import zipfile
import xml.etree.ElementTree as ET

for doc_path in [
    'a/BỘ ĐỀ LISTENING/VSTEP LISTENING 1/Btvn 5 - Nghe.docx',
    'a/BỘ ĐỀ LISTENING/VSTEP LISTENING 2/VSTEP LISTENING TEST 2.docx',
    'a/BỘ ĐỀ LISTENING/VSTEP LISTENING 3/VSTEP LISTENING 3.docx'
]:
    with zipfile.ZipFile(doc_path) as z:
        print(f"=== {doc_path} ===")
        namelist = z.namelist()
        media_files = [n for n in namelist if n.startswith('word/media')]
        print(f"Media files in docx: {len(media_files)}")
        xml_content = z.read('word/document.xml')
        root = ET.fromstring(xml_content)
        texts = [e.text for e in root.iter() if e.text]
        print(f"Total XML text nodes: {len(texts)}")
        joined = " ".join(texts)
        print(f"Total text length: {len(joined)}")
        print(f"Snippet: {joined[:300]}")
