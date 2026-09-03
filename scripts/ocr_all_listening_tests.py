import zipfile
import asyncio
import winocr
from PIL import Image
import io
import json
import re

# Load answer keys from scripts/full_keys_extracted.txt
with open('scripts/full_keys_extracted.txt', 'r', encoding='utf-8') as f:
    key_text = f.read()

def get_listening_keys(test_num):
    m = re.search(rf'TEST\s*{test_num}.*?A\.\s*LISTENING(.*?)(?:B\.\s*READING|$)', key_text, re.DOTALL | re.IGNORECASE)
    if not m:
        return {}
    sec = m.group(1)
    matches = re.findall(r'(\d+)\s*[-.:]?\s*([A-D])', sec)
    return {int(q): ans.upper() for q, ans in matches}

async def ocr_docx(docx_path):
    with zipfile.ZipFile(docx_path) as z:
        media_names = sorted([n for n in z.namelist() if n.startswith('word/media')])
        full_text = ""
        for m_name in media_names:
            img_data = z.read(m_name)
            img = Image.open(io.BytesIO(img_data))
            res = await winocr.recognize_pil(img, 'en')
            full_text += "\n" + res.text
        return full_text

async def main():
    tests_meta = [
        ('a/BỘ ĐỀ LISTENING/VSTEP LISTENING 1/Btvn 5 - Nghe.docx', 1, './audio/listening/test1.mp3', 'Đề 1 (Audio Gốc ĐHQG)'),
        ('a/BỘ ĐỀ LISTENING/VSTEP LISTENING 2/VSTEP LISTENING TEST 2.docx', 2, './audio/listening/test2.mp3', 'Đề 2 (Audio Gốc ĐHQG)'),
        ('a/BỘ ĐỀ LISTENING/VSTEP LISTENING 3/VSTEP LISTENING 3.docx', 3, './audio/listening/test3.mp3', 'Đề 3 (Audio Gốc ĐHQG)')
    ]
    
    all_tests = []
    
    for doc_path, test_num, audio_url, title in tests_meta:
        print(f"Processing Test {test_num}...")
        raw_text = await ocr_docx(doc_path)
        keys = get_listening_keys(test_num)
        
        with open(f'scripts/test{test_num}_listening_ocr.txt', 'w', encoding='utf-8') as f:
            f.write(raw_text)
            
        print(f"Test {test_num} raw text length: {len(raw_text)}, keys found: {len(keys)}")

asyncio.run(main())
