import fitz
import re
import json

doc = fitz.open("a/VSTEP 5 BỘ ĐỀ B1 B2 THÁNG 5 (19-5).pdf")

# Let's inspect each Test Key section
# Page 94 to 120
full_key_text = ""
for p in range(93, len(doc)):
    full_key_text += f"\n=== PAGE {p+1} ===\n" + doc[p].get_text('text')

with open("scripts/full_keys_extracted.txt", "w", encoding="utf-8") as f:
    f.write(full_key_text)

print(f"Extracted {len(full_key_text)} characters from Keys section (pages 94-120).")

# Also let's inspect Listening Tapescripts (pages 71-93)
full_script_text = ""
for p in range(70, 93):
    full_script_text += f"\n=== PAGE {p+1} ===\n" + doc[p].get_text('text')

with open("scripts/full_scripts_extracted.txt", "w", encoding="utf-8") as f:
    f.write(full_script_text)

print(f"Extracted {len(full_script_text)} characters from Tapescripts section (pages 71-93).")
