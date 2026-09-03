import zipfile
import asyncio
import winocr
from PIL import Image
import io

async def test_ocr_docx_images():
    for doc_path, name in [
        ('a/BỘ ĐỀ LISTENING/VSTEP LISTENING 1/Btvn 5 - Nghe.docx', 'Test 1'),
        ('a/BỘ ĐỀ LISTENING/VSTEP LISTENING 2/VSTEP LISTENING TEST 2.docx', 'Test 2'),
        ('a/BỘ ĐỀ LISTENING/VSTEP LISTENING 3/VSTEP LISTENING 3.docx', 'Test 3')
    ]:
        print(f"=== OCR {name} ===")
        with zipfile.ZipFile(doc_path) as z:
            media_names = sorted([n for n in z.namelist() if n.startswith('word/media')])
            for m_name in media_names:
                img_data = z.read(m_name)
                img = Image.open(io.BytesIO(img_data))
                res = await winocr.recognize_pil(img, 'en')
                first_lines = [l.strip() for l in res.text.split('\n') if l.strip()][:3]
                print(f"  {m_name} ({img.size}): {first_lines}")

asyncio.run(test_ocr_docx_images())
