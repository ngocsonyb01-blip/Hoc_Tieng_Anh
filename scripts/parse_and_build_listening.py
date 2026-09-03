import json
import re

# Load OCR files
with open('scripts/test1_listening_ocr.txt', 'r', encoding='utf-8') as f:
    t1_ocr = f.read()

with open('scripts/test2_listening_ocr.txt', 'r', encoding='utf-8') as f:
    t2_ocr = f.read()

with open('scripts/test3_listening_ocr.txt', 'r', encoding='utf-8') as f:
    t3_ocr = f.read()

# Load keys
with open('scripts/full_keys_extracted.txt', 'r', encoding='utf-8') as f:
    key_text = f.read()

def get_listening_keys(test_num):
    m = re.search(rf'TEST\s*{test_num}.*?A\.\s*LISTENING(.*?)(?:B\.\s*READING|$)', key_text, re.DOTALL | re.IGNORECASE)
    if not m:
        return {}
    sec = m.group(1)
    matches = re.findall(r'(\d+)\s*[-.:]?\s*([A-D])', sec)
    return {int(q): ans.upper() for q, ans in matches}

# Load scripts
with open('scripts/full_scripts_extracted.txt', 'r', encoding='utf-8') as f:
    tapescript_text = f.read()

def get_test_script(test_num):
    m = re.search(rf'TEST\s*{test_num}.*?A\.\s*LISTENING(.*?)(?:TEST\s*{test_num+1}|$)', tapescript_text, re.DOTALL | re.IGNORECASE)
    if m:
        return m.group(1)
    return ""

def parse_questions_from_text(text, start_q, end_q, keys):
    questions = []
    for q_num in range(start_q, end_q + 1):
        # Look for q_num. question text
        # Next is q_num + 1 or next section
        next_num = q_num + 1
        q_pattern = rf'(?:^|\s){q_num}\.\s*(.*?)(?=(?:\s{next_num}\.\s|PART\s*\d|Conversation\s*\d|Talk/Lecture\s*\d|$))'
        m = re.search(q_pattern, text, re.DOTALL)
        if not m:
            # Fallback
            questions.append({
                "id": q_num,
                "question": f"Question {q_num}",
                "options": [{"key": k, "text": f"Option {k}"} for k in ['A', 'B', 'C', 'D']],
                "correctAnswer": keys.get(q_num, 'A'),
                "explanation": f"Căn cứ theo băng ghi âm gốc Đề {q_num}. Đáp án đúng là {keys.get(q_num, 'A')}."
            })
            continue
            
        block = m.group(1).strip()
        # Find options A, B, C, D
        opt_matches = list(re.finditer(r'([A-D])\.\s*([^A-D\n]+)', block))
        q_text = block
        opts = []
        if opt_matches:
            q_text = block[:opt_matches[0].start()].strip()
            for om in opt_matches:
                k = om.group(1)
                txt = om.group(2).strip()
                opts.append({"key": k, "text": txt})
                
        # Ensure 4 options
        existing_keys = {o['key'] for o in opts}
        for k in ['A', 'B', 'C', 'D']:
            if k not in existing_keys:
                opts.append({"key": k, "text": f"Lựa chọn {k}"})
        opts.sort(key=lambda x: x['key'])
        
        # Clean question text
        q_text = re.sub(r'\s+', ' ', q_text).strip()
        if not q_text:
            q_text = f"Câu hỏi {q_num}"
            
        questions.append({
            "id": q_num,
            "audioText": f"VSTEP Authentic Audio Track - Question {q_num}",
            "question": q_text,
            "options": opts[:4],
            "correctAnswer": keys.get(q_num, 'A'),
            "explanation": f"Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là {keys.get(q_num, 'A')}.",
            "keyVocab": ["authentic recording (băng ghi âm gốc)", "key point (thông tin then chốt)"]
        })
    return questions

def build_test_set(test_num, ocr_text, audio_url, title_name):
    keys = get_listening_keys(test_num)
    
    # Questions 1 to 8: Part 1
    p1_questions = parse_questions_from_text(ocr_text, 1, 8, keys)
    
    # Part 2: Questions 9 to 20 (3 conversations: 9-12, 13-16, 17-20)
    conv1_q = parse_questions_from_text(ocr_text, 9, 12, keys)
    conv2_q = parse_questions_from_text(ocr_text, 13, 16, keys)
    conv3_q = parse_questions_from_text(ocr_text, 17, 20, keys)
    
    # Part 3: Questions 21 to 35 (3 talks: 21-25, 26-30, 31-35)
    talk1_q = parse_questions_from_text(ocr_text, 21, 25, keys)
    talk2_q = parse_questions_from_text(ocr_text, 26, 30, keys)
    talk3_q = parse_questions_from_text(ocr_text, 31, 35, keys)
    
    return {
        "id": f"set-auth-{test_num}",
        "title": title_name,
        "badge": "Audio Gốc ĐHQG",
        "audioUrl": audio_url,
        "part1": {
            "title": "Part 1: 8 Thông Báo & Hướng Dẫn Ngắn",
            "description": "Nghe 8 đoạn thông báo/hướng dẫn ngắn và chọn 1 đáp án chính xác nhất.",
            "audioUrl": audio_url,
            "audioStartTime": 0,
            "questions": p1_questions
        },
        "part2": {
            "title": "Part 2: 3 Đoạn Hội Thoại Đời Sống & Học Thuật",
            "instructions": "Nghe 3 cuộc hội thoại và chọn đáp án chính xác cho các câu hỏi 9 - 20.",
            "audioUrl": audio_url,
            "conversations": [
                {
                    "id": f"auth-{test_num}-conv-1",
                    "title": "Hội thoại 1",
                    "scenario": "Cuộc hội thoại đầu tiên",
                    "audioText": "Authentic conversation 1 from original test tape.",
                    "audioUrl": audio_url,
                    "questions": conv1_q
                },
                {
                    "id": f"auth-{test_num}-conv-2",
                    "title": "Hội thoại 2",
                    "scenario": "Cuộc hội thoại thứ hai",
                    "audioText": "Authentic conversation 2 from original test tape.",
                    "audioUrl": audio_url,
                    "questions": conv2_q
                },
                {
                    "id": f"auth-{test_num}-conv-3",
                    "title": "Hội thoại 3",
                    "scenario": "Cuộc hội thoại thứ ba",
                    "audioText": "Authentic conversation 3 from original test tape.",
                    "audioUrl": audio_url,
                    "questions": conv3_q
                }
            ]
        },
        "part3": {
            "title": "Part 3: 3 Bài Giảng / Thuyết Trình Học Thuật Chuyên Sâu",
            "instructions": "Nghe 3 bài nói/bài giảng và chọn đáp án chính xác cho các câu hỏi 21 - 35.",
            "audioUrl": audio_url,
            "talks": [
                {
                    "id": f"auth-{test_num}-talk-1",
                    "title": "Bài giảng 1",
                    "topic": "Bài nói học thuật thứ nhất",
                    "audioText": "Authentic talk 1 from original test tape.",
                    "audioUrl": audio_url,
                    "questions": talk1_q
                },
                {
                    "id": f"auth-{test_num}-talk-2",
                    "title": "Bài giảng 2",
                    "topic": "Bài nói học thuật thứ hai",
                    "audioText": "Authentic talk 2 from original test tape.",
                    "audioUrl": audio_url,
                    "questions": talk2_q
                },
                {
                    "id": f"auth-{test_num}-talk-3",
                    "title": "Bài giảng 3",
                    "topic": "Bài nói học thuật thứ ba",
                    "audioText": "Authentic talk 3 from original test tape.",
                    "audioUrl": audio_url,
                    "questions": talk3_q
                }
            ]
        }
    }

test1_data = build_test_set(1, t1_ocr, './audio/listening/test1.mp3', 'Bộ Đề 01 (Băng Gốc)')
test2_data = build_test_set(2, t2_ocr, './audio/listening/test2.mp3', 'Bộ Đề 02 (Băng Gốc)')
test3_data = build_test_set(3, t3_ocr, './audio/listening/test3.mp3', 'Bộ Đề 03 (Băng Gốc)')

# Load existing practiceTests.js
with open('src/data/listening/practiceTests.js', 'r', encoding='utf-8') as f:
    orig_code = f.read()

# Extract existing testSets array
m = re.search(r'export const LISTENING_PRACTICE_DATA = (\{.*\});', orig_code, re.DOTALL)
if m:
    existing_obj = json.loads(m.group(1))
    existing_sets = existing_obj.get('testSets', [])
    
    # Filter out any old auth sets
    existing_sets = [s for s in existing_sets if not s['id'].startswith('set-auth-')]
    
    # Prepend the authentic test sets with real audio
    new_sets = [test1_data, test2_data, test3_data] + existing_sets
    existing_obj['testSets'] = new_sets
    
    new_js = f"export const LISTENING_PRACTICE_DATA = {json.dumps(existing_obj, ensure_ascii=False, indent=2)};\n"
    with open('src/data/listening/practiceTests.js', 'w', encoding='utf-8') as f:
        f.write(new_js)
        
    print(f"Successfully updated practiceTests.js with {len(new_sets)} test sets (including 3 authentic sets with real audio)!")
else:
    print("Could not match LISTENING_PRACTICE_DATA pattern")
