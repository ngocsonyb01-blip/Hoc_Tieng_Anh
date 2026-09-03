import asyncio
import fitz
import winocr
from PIL import Image
import io
import json

async def extract_test1():
    doc = fitz.open('a/Bản sao của 7-Vstep-Tests-B1-B2-C1-Full-Key.pdf')
    # Test 1 Reading is on pages 10 to 17 (0-indexed: 9 to 16)
    full_text = ""
    for p in range(9, 17):
        pix = doc[p].get_pixmap(dpi=150)
        img = Image.open(io.BytesIO(pix.tobytes('png')))
        res = await winocr.recognize_pil(img, 'en')
        full_text += f"\n=== PAGE {p+1} ===\n" + res.text
    
    with open('scripts/test1_reading_ocr.txt', 'w', encoding='utf-8') as f:
        f.write(full_text)
    print(f"Extracted {len(full_text)} characters from Test 1 Reading.")

asyncio.run(extract_test1())
