import json
import re

# Complete structured data for Test 1, Test 2, Test 3

TEST_1_DATA = {
    "id": "set-auth-1",
    "title": "Bộ Đề 01 (Băng Gốc)",
    "badge": "Audio Gốc ĐHQG",
    "audioUrl": "./audio/listening/test1.mp3",
    "part1": {
        "title": "Part 1: 8 Thông Báo & Hướng Dẫn Ngắn",
        "description": "Nghe 8 đoạn thông báo/hướng dẫn ngắn và chọn 1 đáp án chính xác nhất.",
        "audioUrl": "./audio/listening/test1.mp3",
        "audioStartTime": 0,
        "questions": [
            {
                "id": 1,
                "audioText": "VSTEP Authentic Audio Track - Question 1",
                "question": "When is the man's appointment?",
                "options": [
                    {"key": "A", "text": "Wednesday"},
                    {"key": "B", "text": "Thursday"},
                    {"key": "C", "text": "Friday"},
                    {"key": "D", "text": "Tuesday"}
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ theo băng ghi âm gốc và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": ["appointment (cuộc hẹn)", "schedule (lịch trình)"]
            },
            {
                "id": 2,
                "audioText": "VSTEP Authentic Audio Track - Question 2",
                "question": "Which is the aunt's postcard?",
                "options": [
                    {"key": "A", "text": "a pretty village right by the sea"},
                    {"key": "B", "text": "a pretty village with big trees"},
                    {"key": "C", "text": "a pretty village behind the tall trees"},
                    {"key": "D", "text": "a pretty village on the hills"}
                ],
                "correctAnswer": "C",
                "explanation": "Căn cứ theo băng ghi âm gốc và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                "keyVocab": ["postcard (bưu thiếp)", "village (ngôi làng)"]
            },
            {
                "id": 3,
                "audioText": "VSTEP Authentic Audio Track - Question 3",
                "question": "What time will the plane to Milan leave?",
                "options": [
                    {"key": "A", "text": "01:00"},
                    {"key": "B", "text": "07:15"},
                    {"key": "C", "text": "08:15"},
                    {"key": "D", "text": "06:15"}
                ],
                "correctAnswer": "C",
                "explanation": "Căn cứ theo băng ghi âm gốc và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                "keyVocab": ["departure time (giờ khởi hành)", "flight to Milan (chuyến bay đến Milan)"]
            },
            {
                "id": 4,
                "audioText": "VSTEP Authentic Audio Track - Question 4",
                "question": "Which present has the girl bought her mother?",
                "options": [
                    {"key": "A", "text": "earrings"},
                    {"key": "B", "text": "music CD"},
                    {"key": "C", "text": "pen"},
                    {"key": "D", "text": "notebook"}
                ],
                "correctAnswer": "C",
                "explanation": "Căn cứ theo băng ghi âm gốc và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C (pen).",
                "keyVocab": ["present (món quà)", "bought (đã mua)"]
            },
            {
                "id": 5,
                "audioText": "VSTEP Authentic Audio Track - Question 5",
                "question": "What time will the pie be ready?",
                "options": [
                    {"key": "A", "text": "four fifteen"},
                    {"key": "B", "text": "five o'clock"},
                    {"key": "C", "text": "twenty past five"},
                    {"key": "D", "text": "fifty past four"}
                ],
                "correctAnswer": "C",
                "explanation": "Căn cứ theo băng ghi âm gốc và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                "keyVocab": ["baking (nướng bánh)", "twenty past five (5 giờ 20)"]
            },
            {
                "id": 6,
                "audioText": "VSTEP Authentic Audio Track - Question 6",
                "question": "What time is the swimming lesson today?",
                "options": [
                    {"key": "A", "text": "half past four"},
                    {"key": "B", "text": "fifteen to five"},
                    {"key": "C", "text": "fifteen past five"},
                    {"key": "D", "text": "four thirty"}
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ theo băng ghi âm gốc và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": ["swimming lesson (buổi học bơi)", "fifteen to five (5 giờ kém 15)"]
            },
            {
                "id": 7,
                "audioText": "VSTEP Authentic Audio Track - Question 7",
                "question": "Which subject does the boy like best?",
                "options": [
                    {"key": "A", "text": "information technology"},
                    {"key": "B", "text": "geography"},
                    {"key": "C", "text": "sports"},
                    {"key": "D", "text": "design"}
                ],
                "correctAnswer": "C",
                "explanation": "Căn cứ theo băng ghi âm gốc và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                "keyVocab": ["favorite subject (môn học yêu thích)", "sports (thể thao)"]
            },
            {
                "id": 8,
                "audioText": "VSTEP Authentic Audio Track - Question 8",
                "question": "Which T-shirt does the boy decide to buy?",
                "options": [
                    {"key": "A", "text": "a short-sleeved T-shirt with round neck"},
                    {"key": "B", "text": "a V-neck black T-shirt"},
                    {"key": "C", "text": "a long-sleeved T-shirt"},
                    {"key": "D", "text": "a sleeveless white T-shirt"}
                ],
                "correctAnswer": "A",
                "explanation": "Căn cứ theo băng ghi âm gốc và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                "keyVocab": ["short-sleeved (ngắn tay)", "round neck (cổ tròn)"]
            }
        ]
    },
    "part2": {
        "title": "Part 2: 3 Đoạn Hội Thoại Đời Sống & Học Thuật",
        "instructions": "Nghe 3 cuộc hội thoại và chọn đáp án chính xác cho các câu hỏi 9 - 20.",
        "audioUrl": "./audio/listening/test1.mp3",
        "conversations": [
            {
                "id": "auth-1-conv-1",
                "title": "Hội thoại 1",
                "scenario": "Cuộc hội thoại giữa Kate và George về vấn đề sức khỏe",
                "audioText": "Authentic conversation 1 from original test tape.",
                "audioUrl": "./audio/listening/test1.mp3",
                "questions": [
                    {
                        "id": 9,
                        "audioText": "VSTEP Authentic Audio Track - Question 9",
                        "question": "What is Kate's health problem?",
                        "options": [
                            {"key": "A", "text": "She has coughs."},
                            {"key": "B", "text": "She has headache."},
                            {"key": "C", "text": "She has toothache."},
                            {"key": "D", "text": "She has stomach ache."}
                        ],
                        "correctAnswer": "A",
                        "explanation": "Căn cứ theo băng ghi âm gốc. Đáp án đúng là A.",
                        "keyVocab": ["coughs (bị ho)", "health problem (vấn đề sức khỏe)"]
                    },
                    {
                        "id": 10,
                        "audioText": "VSTEP Authentic Audio Track - Question 10",
                        "question": "How does Kate's problem affect her classmates?",
                        "options": [
                            {"key": "A", "text": "It makes them funny."},
                            {"key": "B", "text": "It makes them annoyed."},
                            {"key": "C", "text": "It makes them happy."},
                            {"key": "D", "text": "It makes them excited."}
                        ],
                        "correctAnswer": "B",
                        "explanation": "Căn cứ theo băng ghi âm gốc. Đáp án đúng là B.",
                        "keyVocab": ["annoyed (bực mình, khó chịu)", "affect (ảnh hưởng)"]
                    },
                    {
                        "id": 11,
                        "audioText": "VSTEP Authentic Audio Track - Question 11",
                        "question": "What did Kate have last year?",
                        "options": [
                            {"key": "A", "text": "She had coughs."},
                            {"key": "B", "text": "She had headache."},
                            {"key": "C", "text": "She had a fall off her bike."},
                            {"key": "D", "text": "She had stomach ache."}
                        ],
                        "correctAnswer": "C",
                        "explanation": "Căn cứ theo băng ghi âm gốc. Đáp án đúng là C.",
                        "keyVocab": ["fall off bike (ngã xe đạp)", "injury (chấn thương)"]
                    },
                    {
                        "id": 12,
                        "audioText": "VSTEP Authentic Audio Track - Question 12",
                        "question": "What does Kate have now, too?",
                        "options": [
                            {"key": "A", "text": "She has backache."},
                            {"key": "B", "text": "She has headache."},
                            {"key": "C", "text": "She has toothache."},
                            {"key": "D", "text": "She has temperature."}
                        ],
                        "correctAnswer": "D",
                        "explanation": "Căn cứ theo băng ghi âm gốc. Đáp án đúng là D.",
                        "keyVocab": ["temperature / fever (bị sốt)", "symptoms (triệu chứng)"]
                    }
                ]
            },
            {
                "id": "auth-1-conv-2",
                "title": "Hội thoại 2",
                "scenario": "Cuộc trò chuyện giữa người đàn ông và người phụ nữ ở nhà",
                "audioText": "Authentic conversation 2 from original test tape.",
                "audioUrl": "./audio/listening/test1.mp3",
                "questions": [
                    {
                        "id": 13,
                        "audioText": "VSTEP Authentic Audio Track - Question 13",
                        "question": "Why does the man want to go out?",
                        "options": [
                            {"key": "A", "text": "Because he feels bored staying at home."},
                            {"key": "B", "text": "Because he feels safe staying at home."},
                            {"key": "C", "text": "Because he feels cold staying at home."},
                            {"key": "D", "text": "Because he feels hot staying at home."}
                        ],
                        "correctAnswer": "A",
                        "explanation": "Căn cứ theo băng ghi âm gốc. Đáp án đúng là A.",
                        "keyVocab": ["bored (buồn chán)", "stay at home (ở nhà)"]
                    },
                    {
                        "id": 14,
                        "audioText": "VSTEP Authentic Audio Track - Question 14",
                        "question": "Why does the woman want to stay at home?",
                        "options": [
                            {"key": "A", "text": "Because she has coughs."},
                            {"key": "B", "text": "Because she feels tired."},
                            {"key": "C", "text": "Because she has toothache."},
                            {"key": "D", "text": "Because she has stomach ache."}
                        ],
                        "correctAnswer": "B",
                        "explanation": "Căn cứ theo băng ghi âm gốc. Đáp án đúng là B.",
                        "keyVocab": ["tired (mệt mỏi)", "rest (nghỉ ngơi)"]
                    },
                    {
                        "id": 15,
                        "audioText": "VSTEP Authentic Audio Track - Question 15",
                        "question": "Why doesn't the woman want to watch an Italian film?",
                        "options": [
                            {"key": "A", "text": "Because she is short of money."},
                            {"key": "B", "text": "Because she is serious about it."},
                            {"key": "C", "text": "Because she's afraid she will fall asleep watching it."},
                            {"key": "D", "text": "Because she has stomach ache."}
                        ],
                        "correctAnswer": "C",
                        "explanation": "Căn cứ theo băng ghi âm gốc. Đáp án đúng là C.",
                        "keyVocab": ["fall asleep (ngủ quên)", "subtitles (phụ đề)"]
                    },
                    {
                        "id": 16,
                        "audioText": "VSTEP Authentic Audio Track - Question 16",
                        "question": "Why doesn't the woman want to watch a Robert de Niro?",
                        "options": [
                            {"key": "A", "text": "Because she feels too busy to watch it."},
                            {"key": "B", "text": "Because she feels too serious to watch it."},
                            {"key": "C", "text": "Because she doesn't want to watch it the third time."},
                            {"key": "D", "text": "Because she doesn't want to watch it the second time."}
                        ],
                        "correctAnswer": "D",
                        "explanation": "Căn cứ theo băng ghi âm gốc. Đáp án đúng là D.",
                        "keyVocab": ["watch again (xem lại)", "second time (lần thứ hai)"]
                    }
                ]
            },
            {
                "id": "auth-1-conv-3",
                "title": "Hội thoại 3",
                "scenario": "Cuộc trò chuyện giữa Lisa và Ben về kỳ nghỉ",
                "audioText": "Authentic conversation 3 from original test tape.",
                "audioUrl": "./audio/listening/test1.mp3",
                "questions": [
                    {
                        "id": 17,
                        "audioText": "VSTEP Authentic Audio Track - Question 17",
                        "question": "What does the girl think about a good holiday?",
                        "options": [
                            {"key": "A", "text": "It may be cheap."},
                            {"key": "B", "text": "It may be very cheap."},
                            {"key": "C", "text": "It may be expensive."},
                            {"key": "D", "text": "It may be very expensive."}
                        ],
                        "correctAnswer": "A",
                        "explanation": "Căn cứ theo băng ghi âm gốc. Đáp án đúng là A.",
                        "keyVocab": ["good holiday (kỳ nghỉ tuyệt vời)", "cheap (chi phí rẻ)"]
                    },
                    {
                        "id": 18,
                        "audioText": "VSTEP Authentic Audio Track - Question 18",
                        "question": "Why doesn't the boy want to walk?",
                        "options": [
                            {"key": "A", "text": "Because he feels too hot to do it."},
                            {"key": "B", "text": "Because he finds it hard to do it."},
                            {"key": "C", "text": "Because he doesn't like hard work."},
                            {"key": "D", "text": "Because she doesn't like the sounds of people walking."}
                        ],
                        "correctAnswer": "B",
                        "explanation": "Căn cứ theo băng ghi âm gốc. Đáp án đúng là B.",
                        "keyVocab": ["hard to do (khó thực hiện)", "exhausting (kiệt sức)"]
                    },
                    {
                        "id": 19,
                        "audioText": "VSTEP Authentic Audio Track - Question 19",
                        "question": "What does the girl think about the food in Youth Hostels?",
                        "options": [
                            {"key": "A", "text": "It is comfortable."},
                            {"key": "B", "text": "It is good."},
                            {"key": "C", "text": "It is not good."},
                            {"key": "D", "text": "It is clean and cheap."}
                        ],
                        "correctAnswer": "C",
                        "explanation": "Căn cứ theo băng ghi âm gốc. Đáp án đúng là C.",
                        "keyVocab": ["Youth Hostels (nhà trọ thanh niên)", "food quality (chất lượng đồ ăn)"]
                    },
                    {
                        "id": 20,
                        "audioText": "VSTEP Authentic Audio Track - Question 20",
                        "question": "What does the boy decide to do in the end?",
                        "options": [
                            {"key": "A", "text": "go home"},
                            {"key": "B", "text": "leave home"},
                            {"key": "C", "text": "sell his home"},
                            {"key": "D", "text": "enjoy his holiday home"}
                        ],
                        "correctAnswer": "D",
                        "explanation": "Căn cứ theo băng ghi âm gốc. Đáp án đúng là D.",
                        "keyVocab": ["holiday at home (nghỉ dưỡng tại nhà)", "decision (quyết định)"]
                    }
                ]
            }
        ]
    },
    "part3": {
        "title": "Part 3: 3 Bài Giảng / Thuyết Trình Học Thuật Chuyên Sâu",
        "instructions": "Nghe 3 bài nói hoặc bài giảng và chọn đáp án chính xác cho các câu hỏi 21 - 35.",
        "audioUrl": "./audio/listening/test1.mp3",
        "lectures": [
            {
                "id": "auth-1-lec-1",
                "title": "Bài thuyết trình 1",
                "topic": "Một cô gái chia sẻ về cuộc sống từ khi rời Việt Nam sang Mỹ",
                "audioText": "Authentic lecture 1 from original test tape.",
                "audioUrl": "./audio/listening/test1.mp3",
                "questions": [
                    {
                        "id": 21,
                        "audioText": "VSTEP Authentic Audio Track - Question 21",
                        "question": "Why did the speaker have to help her mother with the shopping?",
                        "options": [
                            {"key": "A", "text": "There were no Vietnamese people living near her."},
                            {"key": "B", "text": "There were no Vietnamese working in the stores."},
                            {"key": "C", "text": "There wasn't always someone to go shopping with her."},
                            {"key": "D", "text": "Her mother could speak a little English."}
                        ],
                        "correctAnswer": "B",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                        "keyVocab": ["shopping assistance (hỗ trợ mua sắm)", "language barrier (rào cản ngôn ngữ)"]
                    },
                    {
                        "id": 22,
                        "audioText": "VSTEP Authentic Audio Track - Question 22",
                        "question": "Why did her father find working in a factory difficult?",
                        "options": [
                            {"key": "A", "text": "He couldn't speak any English."},
                            {"key": "B", "text": "He didn't have many friends there."},
                            {"key": "C", "text": "He had had a much better job in Vietnam."},
                            {"key": "D", "text": "He couldn't get used to the working style."}
                        ],
                        "correctAnswer": "C",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                        "keyVocab": ["factory job (công việc nhà máy)", "qualification (trình độ chuyên môn)"]
                    },
                    {
                        "id": 23,
                        "audioText": "VSTEP Authentic Audio Track - Question 23",
                        "question": "Why are the speaker and her brother more fortunate than their sisters?",
                        "options": [
                            {"key": "A", "text": "They did not need extra English lessons."},
                            {"key": "B", "text": "They look more American."},
                            {"key": "C", "text": "They speak with American accents."},
                            {"key": "D", "text": "They quickly adopted the way of life."}
                        ],
                        "correctAnswer": "C",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                        "keyVocab": ["American accent (giọng Mỹ)", "fortunate (may mắn hơn)"]
                    },
                    {
                        "id": 24,
                        "audioText": "VSTEP Authentic Audio Track - Question 24",
                        "question": "What has the speaker forgotten about life in Vietnam?",
                        "options": [
                            {"key": "A", "text": "Living close to other people"},
                            {"key": "B", "text": "The warm weather"},
                            {"key": "C", "text": "Wearing traditional clothes"},
                            {"key": "D", "text": "Traditional food"}
                        ],
                        "correctAnswer": "A",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                        "keyVocab": ["forgotten (lãng quên)", "community connection (gắn kết cộng đồng)"]
                    },
                    {
                        "id": 25,
                        "audioText": "VSTEP Authentic Audio Track - Question 25",
                        "question": "Why does she find it difficult to invite friends to her home?",
                        "options": [
                            {"key": "A", "text": "Her parents do not have much money."},
                            {"key": "B", "text": "Her parents haven't adopted an American way of life."},
                            {"key": "C", "text": "Her parents only know how to cook Vietnamese food."},
                            {"key": "D", "text": "Her parents do not speak English well."}
                        ],
                        "correctAnswer": "B",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                        "keyVocab": ["cultural difference (khác biệt văn hóa)", "lifestyle (lối sống)"]
                    }
                ]
            },
            {
                "id": "auth-1-lec-2",
                "title": "Bài thuyết trình 2",
                "topic": "Học sinh nam và nữ trong các trường học tại Mỹ",
                "audioText": "Authentic lecture 2 from original test tape.",
                "audioUrl": "./audio/listening/test1.mp3",
                "questions": [
                    {
                        "id": 26,
                        "audioText": "VSTEP Authentic Audio Track - Question 26",
                        "question": "What happened in American schools before 1972?",
                        "options": [
                            {"key": "A", "text": "Girls didn't go to school."},
                            {"key": "B", "text": "Every classroom was a mix of boys and girls."},
                            {"key": "C", "text": "Boys could learn what they wanted."},
                            {"key": "D", "text": "They didn't teach girls some subjects."}
                        ],
                        "correctAnswer": "D",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                        "keyVocab": ["gender segregation (phân tách giới tính)", "curriculum restriction (hạn chế môn học)"]
                    },
                    {
                        "id": 27,
                        "audioText": "VSTEP Authentic Audio Track - Question 27",
                        "question": "What is the reason that most American schools have mixed classes?",
                        "options": [
                            {"key": "A", "text": "Scientists said that it was the best thing."},
                            {"key": "B", "text": "Teachers did not want to teach single-gender classes."},
                            {"key": "C", "text": "A law gave girls an equal chance to learn."},
                            {"key": "D", "text": "Boys and girls behave better in such classes."}
                        ],
                        "correctAnswer": "C",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                        "keyVocab": ["equal chance (cơ hội bình đẳng)", "educational law (luật giáo dục)"]
                    },
                    {
                        "id": 28,
                        "audioText": "VSTEP Authentic Audio Track - Question 28",
                        "question": "Why might girls not get a chance to talk much in a class with boys?",
                        "options": [
                            {"key": "A", "text": "Because the teacher doesn't ask them questions"},
                            {"key": "B", "text": "Because boys are louder and often talk first"},
                            {"key": "C", "text": "Because boys know the correct answers"},
                            {"key": "D", "text": "Because girls are often shy."}
                        ],
                        "correctAnswer": "B",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                        "keyVocab": ["classroom dynamics (tương tác lớp học)", "participation (sự tham gia phát biểu)"]
                    },
                    {
                        "id": 29,
                        "audioText": "VSTEP Authentic Audio Track - Question 29",
                        "question": "What is NOT the reason that some schools are reconsidering separating classes?",
                        "options": [
                            {"key": "A", "text": "They prefer the old teaching styles."},
                            {"key": "B", "text": "Boys learn differently than girls."},
                            {"key": "C", "text": "Boys and girls can bother each other."},
                            {"key": "D", "text": "Boys and girls like different things."}
                        ],
                        "correctAnswer": "A",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                        "keyVocab": ["reconsidering (xem xét lại)", "separating classes (tách lớp học)"]
                    },
                    {
                        "id": 30,
                        "audioText": "VSTEP Authentic Audio Track - Question 30",
                        "question": "Which is one class that is not mentioned as being separated?",
                        "options": [
                            {"key": "A", "text": "Math"},
                            {"key": "B", "text": "Social Studies"},
                            {"key": "C", "text": "Science"},
                            {"key": "D", "text": "Physical Education"}
                        ],
                        "correctAnswer": "D",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                        "keyVocab": ["Physical Education (thể dục)", "academic subjects (môn học thuật)"]
                    }
                ]
            },
            {
                "id": "auth-1-lec-3",
                "title": "Bài thuyết trình 3",
                "topic": "Ngôn ngữ hình thể (Body language) trong văn hóa Mỹ",
                "audioText": "Authentic lecture 3 from original test tape.",
                "audioUrl": "./audio/listening/test1.mp3",
                "questions": [
                    {
                        "id": 31,
                        "audioText": "VSTEP Authentic Audio Track - Question 31",
                        "question": "Who is listening to the orientation talk?",
                        "options": [
                            {"key": "A", "text": "the director of international students"},
                            {"key": "B", "text": "new international students"},
                            {"key": "C", "text": "the teachers of international department"},
                            {"key": "D", "text": "all first-year students in the college"}
                        ],
                        "correctAnswer": "B",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                        "keyVocab": ["orientation talk (buổi định hướng)", "international students (sinh viên quốc tế)"]
                    },
                    {
                        "id": 32,
                        "audioText": "VSTEP Authentic Audio Track - Question 32",
                        "question": "What is the purpose of this talk?",
                        "options": [
                            {"key": "A", "text": "to introduce the director for international student affairs"},
                            {"key": "B", "text": "to deal with all international students' problems."},
                            {"key": "C", "text": "to inform the importance of using English in class."},
                            {"key": "D", "text": "to introduce common problems in non-verbal communication."}
                        ],
                        "correctAnswer": "D",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                        "keyVocab": ["non-verbal communication (giao tiếp phi ngôn ngữ)", "cultural adaptation (thích nghi văn hóa)"]
                    },
                    {
                        "id": 33,
                        "audioText": "VSTEP Authentic Audio Track - Question 33",
                        "question": "According to the speaker, what is body language?",
                        "options": [
                            {"key": "A", "text": "It's the use of verb tenses and modals."},
                            {"key": "B", "text": "It's the way to ask for directions"},
                            {"key": "C", "text": "It's the language used in class only."},
                            {"key": "D", "text": "It's the language of movements and facial expressions."}
                        ],
                        "correctAnswer": "D",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                        "keyVocab": ["body language (ngôn ngữ cơ thể)", "movements and facial expressions (cử chỉ và biểu cảm gương mặt)"]
                    },
                    {
                        "id": 34,
                        "audioText": "VSTEP Authentic Audio Track - Question 34",
                        "question": "In American culture,",
                        "options": [
                            {"key": "A", "text": "Eye contact is the same as most cultures."},
                            {"key": "B", "text": "Making eye contact is a sign of disrespect."},
                            {"key": "C", "text": "People don't look in others' eyes while talking."},
                            {"key": "D", "text": "Eye contact is considered as a sign of honesty."}
                        ],
                        "correctAnswer": "D",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                        "keyVocab": ["eye contact (giao tiếp bằng mắt)", "sign of honesty (dấu hiệu của sự trung thực)"]
                    },
                    {
                        "id": 35,
                        "audioText": "VSTEP Authentic Audio Track - Question 35",
                        "question": "According to the speaker, what is TRUE about handshakes in American Culture?",
                        "options": [
                            {"key": "A", "text": "A handshake shouldn't be too strong."},
                            {"key": "B", "text": "Handshakes are not common."},
                            {"key": "C", "text": "Handshakes need to be firm."},
                            {"key": "D", "text": "Shaking hands is not important."}
                        ],
                        "correctAnswer": "C",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                        "keyVocab": ["firm handshake (cái bắt tay chặt, dứt khoát)", "etiquette (phép lịch sự)"]
                    }
                ]
            }
        ]
    }
}

TEST_2_DATA = {
    "id": "set-auth-2",
    "title": "Bộ Đề 02 (Băng Gốc)",
    "badge": "Audio Gốc ĐHQG",
    "audioUrl": "./audio/listening/test2.mp3",
    "part1": {
        "title": "Part 1: 8 Thông Báo & Hướng Dẫn Ngắn",
        "description": "Nghe 8 đoạn thông báo/hướng dẫn ngắn và chọn 1 đáp án chính xác nhất.",
        "audioUrl": "./audio/listening/test2.mp3",
        "audioStartTime": 0,
        "questions": [
            {
                "id": 1,
                "audioText": "VSTEP Authentic Audio Track - Question 1",
                "question": "What colour is Mary's coat?",
                "options": [
                    {"key": "A", "text": "yellow"},
                    {"key": "B", "text": "blue"},
                    {"key": "C", "text": "brown"},
                    {"key": "D", "text": "black"}
                ],
                "correctAnswer": "A",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                "keyVocab": ["coat (áo khoác)", "yellow (màu vàng)"]
            },
            {
                "id": 2,
                "audioText": "VSTEP Authentic Audio Track - Question 2",
                "question": "What did the woman repair?",
                "options": [
                    {"key": "A", "text": "chair"},
                    {"key": "B", "text": "shelf"},
                    {"key": "C", "text": "desk"},
                    {"key": "D", "text": "bed"}
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": ["repair / fix (sửa chữa)", "shelf (giá sách, kệ)"]
            },
            {
                "id": 3,
                "audioText": "VSTEP Authentic Audio Track - Question 3",
                "question": "What are they going to buy for Pam?",
                "options": [
                    {"key": "A", "text": "a book"},
                    {"key": "B", "text": "a plant"},
                    {"key": "C", "text": "some chocolates"},
                    {"key": "D", "text": "candies"}
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": ["buy present (mua quà tặng)", "plant (chậu cây)"]
            },
            {
                "id": 4,
                "audioText": "VSTEP Authentic Audio Track - Question 4",
                "question": "What has the girl lost?",
                "options": [
                    {"key": "A", "text": "mobile phone"},
                    {"key": "B", "text": "purse"},
                    {"key": "C", "text": "pen"},
                    {"key": "D", "text": "bag"}
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": ["lost item (đồ bị mất)", "purse (ví tiền)"]
            },
            {
                "id": 5,
                "audioText": "VSTEP Authentic Audio Track - Question 5",
                "question": "Which sport will the boy do soon at the centre?",
                "options": [
                    {"key": "A", "text": "waterskiing"},
                    {"key": "B", "text": "diving"},
                    {"key": "C", "text": "sailing"},
                    {"key": "D", "text": "swimming"}
                ],
                "correctAnswer": "C",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                "keyVocab": ["sports centre (trung tâm thể thao)", "sailing (chèo thuyền buồm)"]
            },
            {
                "id": 6,
                "audioText": "VSTEP Authentic Audio Track - Question 6",
                "question": "Who lives with Josh in his house?",
                "options": [
                    {"key": "A", "text": "his grandmother"},
                    {"key": "B", "text": "his father"},
                    {"key": "C", "text": "his sister"},
                    {"key": "D", "text": "his mother"}
                ],
                "correctAnswer": "A",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                "keyVocab": ["live with (sống cùng)", "grandmother (bà)"]
            },
            {
                "id": 7,
                "audioText": "VSTEP Authentic Audio Track - Question 7",
                "question": "What will the girl take with her on holiday?",
                "options": [
                    {"key": "A", "text": "suitcase"},
                    {"key": "B", "text": "sports bag"},
                    {"key": "C", "text": "backpack"},
                    {"key": "D", "text": "overhead bag"}
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": ["holiday luggage (hành lý du lịch)", "sports bag (túi thể thao)"]
            },
            {
                "id": 8,
                "audioText": "VSTEP Authentic Audio Track - Question 8",
                "question": "Where do the boys decide to go?",
                "options": [
                    {"key": "A", "text": "cinema"},
                    {"key": "B", "text": "game store"},
                    {"key": "C", "text": "park"},
                    {"key": "D", "text": "library"}
                ],
                "correctAnswer": "A",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                "keyVocab": ["destination (điểm đến)", "cinema (rạp chiếu phim)"]
            }
        ]
    },
    "part2": {
        "title": "Part 2: 3 Đoạn Hội Thoại Đời Sống & Học Thuật",
        "instructions": "Nghe 3 cuộc hội thoại và chọn đáp án chính xác cho các câu hỏi 9 - 20.",
        "audioUrl": "./audio/listening/test2.mp3",
        "conversations": [
            {
                "id": "auth-2-conv-1",
                "title": "Hội thoại 1",
                "scenario": "Phỏng vấn vận động viên karate người Anh Geoff Thompson",
                "audioText": "Authentic conversation 1 from original test tape.",
                "audioUrl": "./audio/listening/test2.mp3",
                "questions": [
                    {
                        "id": 9,
                        "audioText": "VSTEP Authentic Audio Track - Question 9",
                        "question": "Where was Geoff Thompson born?",
                        "options": [
                            {"key": "A", "text": "In London."},
                            {"key": "B", "text": "In the North of England."},
                            {"key": "C", "text": "In the South of London."},
                            {"key": "D", "text": "In Britain."}
                        ],
                        "correctAnswer": "B",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                        "keyVocab": ["birthplace (nơi sinh)", "North of England (miền bắc nước Anh)"]
                    },
                    {
                        "id": 10,
                        "audioText": "VSTEP Authentic Audio Track - Question 10",
                        "question": "How did he know about karate?",
                        "options": [
                            {"key": "A", "text": "He discovered karate by himself."},
                            {"key": "B", "text": "He's interested in karate owing to a sports center during a school visit."},
                            {"key": "C", "text": "His friend introduced it to him."},
                            {"key": "D", "text": "He knew it when moving to London."}
                        ],
                        "correctAnswer": "B",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                        "keyVocab": ["sports center (trung tâm thể thao)", "school visit (chuyến đi dã ngoại trường học)"]
                    },
                    {
                        "id": 11,
                        "audioText": "VSTEP Authentic Audio Track - Question 11",
                        "question": "When did he take part in the World Championships in Taiwan?",
                        "options": [
                            {"key": "A", "text": "In 1972."},
                            {"key": "B", "text": "In 1980."},
                            {"key": "C", "text": "In 1982."},
                            {"key": "D", "text": "After starting training with a British coach."}
                        ],
                        "correctAnswer": "C",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                        "keyVocab": ["World Championships (giải vô địch thế giới)", "competition year (năm thi đấu)"]
                    },
                    {
                        "id": 12,
                        "audioText": "VSTEP Authentic Audio Track - Question 12",
                        "question": "How many times has he got the World Champion?",
                        "options": [
                            {"key": "A", "text": "Two times."},
                            {"key": "B", "text": "Three times."},
                            {"key": "C", "text": "Four times."},
                            {"key": "D", "text": "Five times."}
                        ],
                        "correctAnswer": "D",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                        "keyVocab": ["World Champion title (danh hiệu vô địch thế giới)", "five times (5 lần)"]
                    }
                ]
            },
            {
                "id": "auth-2-conv-2",
                "title": "Hội thoại 2",
                "scenario": "Cuộc gọi điện thoại xin việc làm tại khách sạn",
                "audioText": "Authentic conversation 2 from original test tape.",
                "audioUrl": "./audio/listening/test2.mp3",
                "questions": [
                    {
                        "id": 13,
                        "audioText": "VSTEP Authentic Audio Track - Question 13",
                        "question": "Which position does this hotel need?",
                        "options": [
                            {"key": "A", "text": "A temporary staff."},
                            {"key": "B", "text": "A stable staff."},
                            {"key": "C", "text": "A part-time receptionist."},
                            {"key": "D", "text": "A full-time waiter."}
                        ],
                        "correctAnswer": "A",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                        "keyVocab": ["temporary staff (nhân viên thời vụ)", "job position (vị trí tuyển dụng)"]
                    },
                    {
                        "id": 14,
                        "audioText": "VSTEP Authentic Audio Track - Question 14",
                        "question": "What about the hour of work?",
                        "options": [
                            {"key": "A", "text": "There are two shifts and two days off."},
                            {"key": "B", "text": "There are two shifts and one day off."},
                            {"key": "C", "text": "There's a day shift from 7 to 2 and a late shift from 4 till 11."},
                            {"key": "D", "text": "There is only afternoon shift."}
                        ],
                        "correctAnswer": "B",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                        "keyVocab": ["working shifts (ca làm việc)", "day off (ngày nghỉ)"]
                    },
                    {
                        "id": 15,
                        "audioText": "VSTEP Authentic Audio Track - Question 15",
                        "question": "What does the woman mention about the uniform?",
                        "options": [
                            {"key": "A", "text": "It's prepared by the hotel."},
                            {"key": "B", "text": "He needs to wear dark clothes."},
                            {"key": "C", "text": "He needs a white shirt and dark trousers."},
                            {"key": "D", "text": "He needs wear uniform five days a week."}
                        ],
                        "correctAnswer": "C",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                        "keyVocab": ["uniform requirement (quy định đồng phục)", "white shirt and dark trousers (áo sơ mi trắng, quần tối màu)"]
                    },
                    {
                        "id": 16,
                        "audioText": "VSTEP Authentic Audio Track - Question 16",
                        "question": "When does he start his job?",
                        "options": [
                            {"key": "A", "text": "At the end of May."},
                            {"key": "B", "text": "On the 10th of May."},
                            {"key": "C", "text": "On the 10th of June."},
                            {"key": "D", "text": "On the 28th of June."}
                        ],
                        "correctAnswer": "D",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                        "keyVocab": ["start date (ngày bắt đầu đi làm)", "28th of June (ngày 28 tháng 6)"]
                    }
                ]
            },
            {
                "id": "auth-2-conv-3",
                "title": "Hội thoại 3",
                "scenario": "Cuộc trao đổi tại thư viện trường đại học",
                "audioText": "Authentic conversation 3 from original test tape.",
                "audioUrl": "./audio/listening/test2.mp3",
                "questions": [
                    {
                        "id": 17,
                        "audioText": "VSTEP Authentic Audio Track - Question 17",
                        "question": "What does the man plan to write his paper on?",
                        "options": [
                            {"key": "A", "text": "The preservation of old books."},
                            {"key": "B", "text": "The local coal industry."},
                            {"key": "C", "text": "The famous archives librarian."},
                            {"key": "D", "text": "The collection of rare books."}
                        ],
                        "correctAnswer": "B",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                        "keyVocab": ["research paper (bài nghiên cứu)", "coal industry (ngành công nghiệp than đá)"]
                    },
                    {
                        "id": 18,
                        "audioText": "VSTEP Authentic Audio Track - Question 18",
                        "question": "What security procedures does the librarian tell the man he must follow?",
                        "options": [
                            {"key": "A", "text": "Show her his note cards before leaving."},
                            {"key": "B", "text": "Show her his ID card."},
                            {"key": "C", "text": "Pay a fee."},
                            {"key": "D", "text": "Allow his ID card to be copied; sign in and out of the archives room."}
                        ],
                        "correctAnswer": "D",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                        "keyVocab": ["security procedures (thủ tục bảo an)", "archives room (phòng lưu trữ tư liệu)"]
                    },
                    {
                        "id": 19,
                        "audioText": "VSTEP Authentic Audio Track - Question 19",
                        "question": "Why did the librarian mention the age of the books?",
                        "options": [
                            {"key": "A", "text": "They need to be handled with gloves."},
                            {"key": "B", "text": "The man can only look at photographs of them."},
                            {"key": "C", "text": "They were added to the collection recently."},
                            {"key": "D", "text": "They are valuable books."}
                        ],
                        "correctAnswer": "A",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                        "keyVocab": ["handle with gloves (cầm bằng găng tay bảo vệ)", "fragile pages (trang sách dễ rách)"]
                    },
                    {
                        "id": 20,
                        "audioText": "VSTEP Authentic Audio Track - Question 20",
                        "question": "How did the man collect his needed information about his paper?",
                        "options": [
                            {"key": "A", "text": "He took a picture."},
                            {"key": "B", "text": "He scanned these images."},
                            {"key": "C", "text": "He could just look them."},
                            {"key": "D", "text": "He photocopied these books."}
                        ],
                        "correctAnswer": "A",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                        "keyVocab": ["take a picture (chụp ảnh tài liệu)", "gather data (thu thập số liệu)"]
                    }
                ]
            }
        ]
    },
    "part3": {
        "title": "Part 3: 3 Bài Giảng / Thuyết Trình Học Thuật Chuyên Sâu",
        "instructions": "Nghe 3 bài nói hoặc bài giảng và chọn đáp án chính xác cho các câu hỏi 21 - 35.",
        "audioUrl": "./audio/listening/test2.mp3",
        "lectures": [
            {
                "id": "auth-2-lec-1",
                "title": "Bài thuyết trình 1",
                "topic": "Văn hóa trang phục nơi công sở (Fashion at work)",
                "audioText": "Authentic lecture 1 from original test tape.",
                "audioUrl": "./audio/listening/test2.mp3",
                "questions": [
                    {
                        "id": 21,
                        "audioText": "VSTEP Authentic Audio Track - Question 21",
                        "question": "The presenter doesn't wear a suit because",
                        "options": [
                            {"key": "A", "text": "He is not an important person."},
                            {"key": "B", "text": "He wants to talk about different fashion trends."},
                            {"key": "C", "text": "The presentation is not formal."},
                            {"key": "D", "text": "He works for a fashion company."}
                        ],
                        "correctAnswer": "C",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                        "keyVocab": ["suit (bộ com-lê)", "informal presentation (bài thuyết trình không trang trọng)"]
                    },
                    {
                        "id": 22,
                        "audioText": "VSTEP Authentic Audio Track - Question 22",
                        "question": "According to the speaker, which statement is TRUE?",
                        "options": [
                            {"key": "A", "text": "It's important to look casually-dressed in public."},
                            {"key": "B", "text": "A suit is necessary when meeting clients."},
                            {"key": "C", "text": "Wearing shorts is OK, sometimes."},
                            {"key": "D", "text": "Nobody can describe the way he's dressed."}
                        ],
                        "correctAnswer": "B",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                        "keyVocab": ["meeting clients (gặp gỡ khách hàng)", "professional attire (trang phục chuyên nghiệp)"]
                    },
                    {
                        "id": 23,
                        "audioText": "VSTEP Authentic Audio Track - Question 23",
                        "question": "What does the phrase \"Dress-down Fridays\" mean?",
                        "options": [
                            {"key": "A", "text": "Employees must wear fashionable clothes on Fridays."},
                            {"key": "B", "text": "Employees can wear anything they want on Fridays."},
                            {"key": "C", "text": "Employees are allowed to wear informally on Fridays."},
                            {"key": "D", "text": "Employees are required to wear special clothes on Fridays."}
                        ],
                        "correctAnswer": "C",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                        "keyVocab": ["Dress-down Fridays (thứ sáu mặc trang phục thoải mái)", "informal attire (trang phục thường nhật)"]
                    },
                    {
                        "id": 24,
                        "audioText": "VSTEP Authentic Audio Track - Question 24",
                        "question": "According to the speaker, who may be the most informal dressers?",
                        "options": [
                            {"key": "A", "text": "People working in IT"},
                            {"key": "B", "text": "People working in banks."},
                            {"key": "C", "text": "People working in customer services."},
                            {"key": "D", "text": "People working with clients."}
                        ],
                        "correctAnswer": "A",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                        "keyVocab": ["IT workers (dân công nghệ thông tin)", "casual style (phong cách thoải mái)"]
                    },
                    {
                        "id": 25,
                        "audioText": "VSTEP Authentic Audio Track - Question 25",
                        "question": "What does a customer feel about a man in uniform?",
                        "options": [
                            {"key": "A", "text": "reliable"},
                            {"key": "B", "text": "recognized"},
                            {"key": "C", "text": "expertised"},
                            {"key": "D", "text": "reassured"}
                        ],
                        "correctAnswer": "D",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                        "keyVocab": ["reassured (cảm thấy an tâm, tin tưởng)", "uniform impact (tác động của đồng phục)"]
                    }
                ]
            },
            {
                "id": "auth-2-lec-2",
                "title": "Bài thuyết trình 2",
                "topic": "Thói quen giấc ngủ và sức khỏe trí não (Sleeping habits)",
                "audioText": "Authentic lecture 2 from original test tape.",
                "audioUrl": "./audio/listening/test2.mp3",
                "questions": [
                    {
                        "id": 26,
                        "audioText": "VSTEP Authentic Audio Track - Question 26",
                        "question": "How many hours of sleep do experts suggest for kids?",
                        "options": [
                            {"key": "A", "text": "Ten"},
                            {"key": "B", "text": "About fifteen"},
                            {"key": "C", "text": "1,400"},
                            {"key": "D", "text": "70"}
                        ],
                        "correctAnswer": "A",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                        "keyVocab": ["sleep recommendation (khuyến nghị thời lượng ngủ)", "ten hours (10 tiếng)"]
                    },
                    {
                        "id": 27,
                        "audioText": "VSTEP Authentic Audio Track - Question 27",
                        "question": "According to the speaker, why is sleep important for the brain?",
                        "options": [
                            {"key": "A", "text": "Sleep generates dreams so brain can relax."},
                            {"key": "B", "text": "Brain can rest in a sleep."},
                            {"key": "C", "text": "Sleep can save energy for the brain."},
                            {"key": "D", "text": "Sleep improves the effectiveness of the brain."}
                        ],
                        "correctAnswer": "B",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                        "keyVocab": ["brain recovery (sự hồi phục của não bộ)", "rest in sleep (nghỉ ngơi trong giấc ngủ)"]
                    },
                    {
                        "id": 28,
                        "audioText": "VSTEP Authentic Audio Track - Question 28",
                        "question": "Why don't the students learn well when they are tired?",
                        "options": [
                            {"key": "A", "text": "They can't finish their homework."},
                            {"key": "B", "text": "They can't deal with troubles in class."},
                            {"key": "C", "text": "They get very excited."},
                            {"key": "D", "text": "They can't pay attention very well."}
                        ],
                        "correctAnswer": "D",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                        "keyVocab": ["lack of focus (thiếu tập trung)", "pay attention (chú ý lắng nghe)"]
                    },
                    {
                        "id": 29,
                        "audioText": "VSTEP Authentic Audio Track - Question 29",
                        "question": "Which is NOT a reason for poor sleep?",
                        "options": [
                            {"key": "A", "text": "drinking soda"},
                            {"key": "B", "text": "playing computer games"},
                            {"key": "C", "text": "staying up late"},
                            {"key": "D", "text": "exercising before sleep"}
                        ],
                        "correctAnswer": "D",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                        "keyVocab": ["poor sleep causes (nguyên nhân gây mất ngủ)", "exercise (tập thể dục)"]
                    },
                    {
                        "id": 30,
                        "audioText": "VSTEP Authentic Audio Track - Question 30",
                        "question": "What should students try to do each night?",
                        "options": [
                            {"key": "A", "text": "Watch a scary movie"},
                            {"key": "B", "text": "Drink some hot tea"},
                            {"key": "C", "text": "Go to bed at a regular time"},
                            {"key": "D", "text": "Relax with a TV show"}
                        ],
                        "correctAnswer": "C",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                        "keyVocab": ["regular sleep schedule (lịch ngủ điều độ)", "routine (thói quen nhất quán)"]
                    }
                ]
            },
            {
                "id": "auth-2-lec-3",
                "title": "Bài thuyết trình 3",
                "topic": "Hiện tượng cực quang phương Bắc (Northern lights / Aurora borealis)",
                "audioText": "Authentic lecture 3 from original test tape.",
                "audioUrl": "./audio/listening/test2.mp3",
                "questions": [
                    {
                        "id": 31,
                        "audioText": "VSTEP Authentic Audio Track - Question 31",
                        "question": "Which is NOT the shape of the northern lights?",
                        "options": [
                            {"key": "A", "text": "a straight line"},
                            {"key": "B", "text": "a curved line"},
                            {"key": "C", "text": "a round shape"},
                            {"key": "D", "text": "an oval shape"}
                        ],
                        "correctAnswer": "D",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                        "keyVocab": ["aurora shape (hình dạng dải cực quang)", "oval shape (hình bầu dục)"]
                    },
                    {
                        "id": 32,
                        "audioText": "VSTEP Authentic Audio Track - Question 32",
                        "question": "What does \"aurora borealis\" exactly mean?",
                        "options": [
                            {"key": "A", "text": "northern lights"},
                            {"key": "B", "text": "northern dawn"},
                            {"key": "C", "text": "northern sky"},
                            {"key": "D", "text": "early morning lights"}
                        ],
                        "correctAnswer": "B",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                        "keyVocab": ["aurora borealis (bình minh phương bắc - northern dawn)", "Latin origin (nguồn gốc tiếng La-tinh)"]
                    },
                    {
                        "id": 33,
                        "audioText": "VSTEP Authentic Audio Track - Question 33",
                        "question": "Where is the best place to see the northern lights?",
                        "options": [
                            {"key": "A", "text": "The northernmost point of Earth"},
                            {"key": "B", "text": "The north of Poland"},
                            {"key": "C", "text": "Anywhere in Scandinavian countries"},
                            {"key": "D", "text": "Most parts of the world"}
                        ],
                        "correctAnswer": "A",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                        "keyVocab": ["northernmost point (điểm cực bắc Trái Đất)", "observation spot (địa điểm ngắm cảnh)"]
                    },
                    {
                        "id": 34,
                        "audioText": "VSTEP Authentic Audio Track - Question 34",
                        "question": "What is one of the stories developed by people before modern science?",
                        "options": [
                            {"key": "A", "text": "The lights were caused by foxes."},
                            {"key": "B", "text": "The lights were the dance of animals."},
                            {"key": "C", "text": "The lights appeared when people died."},
                            {"key": "D", "text": "The lights came from fires of northern gods."}
                        ],
                        "correctAnswer": "A",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                        "keyVocab": ["folklore and myth (thần thoại dân gian)", "foxes (loài cáo phát sáng)"]
                    },
                    {
                        "id": 35,
                        "audioText": "VSTEP Authentic Audio Track - Question 35",
                        "question": "Which of the following is NOT mentioned in this talk?",
                        "options": [
                            {"key": "A", "text": "A description of the lights"},
                            {"key": "B", "text": "The scientific explanation for the lights"},
                            {"key": "C", "text": "The discovery of the lights"},
                            {"key": "D", "text": "Beliefs about the lights"}
                        ],
                        "correctAnswer": "C",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                        "keyVocab": ["unmentioned detail (chi tiết không được nhắc đến)", "scientific explanation (giải thích khoa học)"]
                    }
                ]
            }
        ]
    }
}

TEST_3_DATA = {
    "id": "set-auth-3",
    "title": "Bộ Đề 03 (Băng Gốc)",
    "badge": "Audio Gốc ĐHQG",
    "audioUrl": "./audio/listening/test3.mp3",
    "part1": {
        "title": "Part 1: 8 Thông Báo & Hướng Dẫn Ngắn",
        "description": "Nghe 8 đoạn thông báo/hướng dẫn ngắn và chọn 1 đáp án chính xác nhất.",
        "audioUrl": "./audio/listening/test3.mp3",
        "audioStartTime": 0,
        "questions": [
            {
                "id": 1,
                "audioText": "VSTEP Authentic Audio Track - Question 1",
                "question": "What have they forgotten?",
                "options": [
                    {"key": "A", "text": "ticket"},
                    {"key": "B", "text": "camera"},
                    {"key": "C", "text": "passport"},
                    {"key": "D", "text": "bag"}
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": ["forgotten item (vật phẩm bị bỏ quên)", "camera (máy ảnh)"]
            },
            {
                "id": 2,
                "audioText": "VSTEP Authentic Audio Track - Question 2",
                "question": "What time does the train go?",
                "options": [
                    {"key": "A", "text": "06.15"},
                    {"key": "B", "text": "07.40"},
                    {"key": "C", "text": "06.10"},
                    {"key": "D", "text": "07.10"}
                ],
                "correctAnswer": "A",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                "keyVocab": ["train timetable (giờ tàu chạy)", "quarter past six (6 giờ 15)"]
            },
            {
                "id": 3,
                "audioText": "VSTEP Authentic Audio Track - Question 3",
                "question": "How did the woman get to work?",
                "options": [
                    {"key": "A", "text": "by bicycle"},
                    {"key": "B", "text": "by bus"},
                    {"key": "C", "text": "by car"},
                    {"key": "D", "text": "by train"}
                ],
                "correctAnswer": "C",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                "keyVocab": ["means of transport (phương tiện đi lại)", "by car (bằng ô tô)"]
            },
            {
                "id": 4,
                "audioText": "VSTEP Authentic Audio Track - Question 4",
                "question": "Where are the man's shoes?",
                "options": [
                    {"key": "A", "text": "under the chair"},
                    {"key": "B", "text": "by the television"},
                    {"key": "C", "text": "by the door with the other rubbish"},
                    {"key": "D", "text": "under the table"}
                ],
                "correctAnswer": "C",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                "keyVocab": ["shoes location (vị trí đôi giày)", "by the door (ngay cạnh cửa)"]
            },
            {
                "id": 5,
                "audioText": "VSTEP Authentic Audio Track - Question 5",
                "question": "What will Paul get at the shop?",
                "options": [
                    {"key": "A", "text": "mushrooms"},
                    {"key": "B", "text": "onions"},
                    {"key": "C", "text": "carrots"},
                    {"key": "D", "text": "red pepper"}
                ],
                "correctAnswer": "C",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                "keyVocab": ["grocery shopping (mua đồ thực phẩm)", "carrots (cà rốt)"]
            },
            {
                "id": 6,
                "audioText": "VSTEP Authentic Audio Track - Question 6",
                "question": "How were they told to do their homework?",
                "options": [
                    {"key": "A", "text": "write it in the books"},
                    {"key": "B", "text": "write it on paper"},
                    {"key": "C", "text": "type it"},
                    {"key": "D", "text": "email it"}
                ],
                "correctAnswer": "A",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                "keyVocab": ["homework submission (nộp bài tập về nhà)", "write in the books (viết trực tiếp vào sách)"]
            },
            {
                "id": 7,
                "audioText": "VSTEP Authentic Audio Track - Question 7",
                "question": "What did Helen buy?",
                "options": [
                    {"key": "A", "text": "gloves"},
                    {"key": "B", "text": "sweater"},
                    {"key": "C", "text": "socks"},
                    {"key": "D", "text": "hat"}
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": ["bought item (đồ đã mua)", "sweater (áo len)"]
            },
            {
                "id": 8,
                "audioText": "VSTEP Authentic Audio Track - Question 8",
                "question": "How did the woman get to work today?",
                "options": [
                    {"key": "A", "text": "by bus"},
                    {"key": "B", "text": "a neighbour offered her a lift"},
                    {"key": "C", "text": "by bike"},
                    {"key": "D", "text": "walk"}
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": ["offered a lift (được hàng xóm cho đi nhờ xe)", "commute (đi làm)"]
            }
        ]
    },
    "part2": {
        "title": "Part 2: 3 Đoạn Hội Thoại Đời Sống & Học Thuật",
        "instructions": "Nghe 3 cuộc hội thoại và chọn đáp án chính xác cho các câu hỏi 9 - 20.",
        "audioUrl": "./audio/listening/test3.mp3",
        "conversations": [
            {
                "id": "auth-3-conv-1",
                "title": "Hội thoại 1",
                "scenario": "Cuộc hội thoại giữa Tyrone và nhân viên tiếp tân về lịch làm việc",
                "audioText": "Authentic conversation 1 from original test tape.",
                "audioUrl": "./audio/listening/test3.mp3",
                "questions": [
                    {
                        "id": 9,
                        "audioText": "VSTEP Authentic Audio Track - Question 9",
                        "question": "What hours does the speaker work on Monday?",
                        "options": [
                            {"key": "A", "text": "Noon to 6 PM"},
                            {"key": "B", "text": "8:15 AM to 5 PM"},
                            {"key": "C", "text": "7 AM to 12 PM"},
                            {"key": "D", "text": "5 PM to 9 PM"}
                        ],
                        "correctAnswer": "D",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                        "keyVocab": ["working schedule (lịch làm việc)", "5 PM to 9 PM (5 giờ chiều đến 9 giờ tối)"]
                    },
                    {
                        "id": 10,
                        "audioText": "VSTEP Authentic Audio Track - Question 10",
                        "question": "On which two days does the speaker have the same schedule?",
                        "options": [
                            {"key": "A", "text": "Monday and Tuesday"},
                            {"key": "B", "text": "Wednesday and Thursday"},
                            {"key": "C", "text": "Tuesday and Thursday"},
                            {"key": "D", "text": "Thursday and Friday"}
                        ],
                        "correctAnswer": "C",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                        "keyVocab": ["same schedule (trùng lịch làm việc)", "Tuesday and Thursday (thứ Ba và thứ Năm)"]
                    },
                    {
                        "id": 11,
                        "audioText": "VSTEP Authentic Audio Track - Question 11",
                        "question": "What is the main purpose of the speaker's talk?",
                        "options": [
                            {"key": "A", "text": "To discuss the importance of the job"},
                            {"key": "B", "text": "To compare the work of doctors and dentists"},
                            {"key": "C", "text": "To describe a typical week at work"},
                            {"key": "D", "text": "To explain the details of a day at work"}
                        ],
                        "correctAnswer": "D",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                        "keyVocab": ["main purpose (mục đích chính)", "explain details (giải thích chi tiết)"]
                    },
                    {
                        "id": 12,
                        "audioText": "VSTEP Authentic Audio Track - Question 12",
                        "question": "What does the speaker think of her work?",
                        "options": [
                            {"key": "A", "text": "She enjoys sleeping late every morning."},
                            {"key": "B", "text": "It is difficult to describe her schedule."},
                            {"key": "C", "text": "She enjoys helping the patients."},
                            {"key": "D", "text": "It is too complicated to remember."}
                        ],
                        "correctAnswer": "B",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                        "keyVocab": ["opinion on work (đánh giá về công việc)", "difficult to describe (khó mô tả rõ ràng)"]
                    }
                ]
            },
            {
                "id": "auth-3-conv-2",
                "title": "Hội thoại 2",
                "scenario": "Cuộc thảo luận về thói quen chi tiêu thẻ tín dụng sinh viên",
                "audioText": "Authentic conversation 2 from original test tape.",
                "audioUrl": "./audio/listening/test3.mp3",
                "questions": [
                    {
                        "id": 13,
                        "audioText": "VSTEP Authentic Audio Track - Question 13",
                        "question": "According to the conversation, which item did the woman NOT purchase with her credit card?",
                        "options": [
                            {"key": "A", "text": "a digital camera"},
                            {"key": "B", "text": "DVD player"},
                            {"key": "C", "text": "a TV"},
                            {"key": "D", "text": "a stereo"}
                        ],
                        "correctAnswer": "A",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                        "keyVocab": ["unpurchased item (món đồ không mua)", "digital camera (máy ảnh kỹ thuật số)"]
                    },
                    {
                        "id": 14,
                        "audioText": "VSTEP Authentic Audio Track - Question 14",
                        "question": "What is one reason to explain why the woman obtained a student credit card?",
                        "options": [
                            {"key": "A", "text": "She wants to buy things at a discount using the card"},
                            {"key": "B", "text": "She hopes to establish a good credit rating."},
                            {"key": "C", "text": "She doesn't want to borrow from her parents."},
                            {"key": "D", "text": "She can be financially independent."}
                        ],
                        "correctAnswer": "B",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                        "keyVocab": ["credit rating (điểm tín dụng)", "financial record (hồ sơ tài chính)"]
                    },
                    {
                        "id": 15,
                        "audioText": "VSTEP Authentic Audio Track - Question 15",
                        "question": "What does the woman imply about how she plans on resolving her credit card problems?",
                        "options": [
                            {"key": "A", "text": "She hopes that someone will give her the money."},
                            {"key": "B", "text": "She plans on getting rid of her student credit cards."},
                            {"key": "C", "text": "She will get a part-time job"},
                            {"key": "D", "text": "She is going to return the items she purchased on the card."}
                        ],
                        "correctAnswer": "A",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                        "keyVocab": ["debt resolution (giải quyết nợ nần)", "financial relief (trợ giúp tài chính)"]
                    },
                    {
                        "id": 16,
                        "audioText": "VSTEP Authentic Audio Track - Question 16",
                        "question": "What is the man going to do for the woman to help her manage her money?",
                        "options": [
                            {"key": "A", "text": "help her find a better paying job to cover her expenses"},
                            {"key": "B", "text": "teach her how to prepare a financial management plan"},
                            {"key": "C", "text": "show her how she can apply for low-interest student credit cards"},
                            {"key": "D", "text": "teach her how to shop wisely."}
                        ],
                        "correctAnswer": "B",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                        "keyVocab": ["financial management plan (kế hoạch quản lý tài chính)", "budgeting (lập ngân sách)"]
                    }
                ]
            },
            {
                "id": "auth-3-conv-3",
                "title": "Hội thoại 3",
                "scenario": "Cuộc gọi đặt món và phàn nàn giá cả tại nhà hàng",
                "audioText": "Authentic conversation 3 from original test tape.",
                "audioUrl": "./audio/listening/test3.mp3",
                "questions": [
                    {
                        "id": 17,
                        "audioText": "VSTEP Authentic Audio Track - Question 17",
                        "question": "Why does the customer not buy the recommended sandwich at the beginning of the conversation?",
                        "options": [
                            {"key": "A", "text": "It is too expensive."},
                            {"key": "B", "text": "He is not interested in ordering a burger."},
                            {"key": "C", "text": "It is not tasty."},
                            {"key": "D", "text": "He fears the food will make him sick."}
                        ],
                        "correctAnswer": "D",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                        "keyVocab": ["fear illness (sợ bị đau bụng/ngộ độc)", "refusal (từ chối món đề xuất)"]
                    },
                    {
                        "id": 18,
                        "audioText": "VSTEP Authentic Audio Track - Question 18",
                        "question": "How does the specialty drink get its name?",
                        "options": [
                            {"key": "A", "text": "It contains a wide range of ingredients."},
                            {"key": "B", "text": "It is prepared in the kitchen sink."},
                            {"key": "C", "text": "It contains chicken soup."},
                            {"key": "D", "text": "It comes in a very large cup."}
                        ],
                        "correctAnswer": "A",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                        "keyVocab": ["specialty drink (đồ uống đặc biệt)", "ingredients (nguyên liệu đa dạng)"]
                    },
                    {
                        "id": 19,
                        "audioText": "VSTEP Authentic Audio Track - Question 19",
                        "question": "Why was the man surprised by the price of his meal?",
                        "options": [
                            {"key": "A", "text": "He thought the drink should have been included."},
                            {"key": "B", "text": "He felt the meal was way overpriced."},
                            {"key": "C", "text": "He was charged for two sandwiches instead of one."},
                            {"key": "D", "text": "It was lower than he had expected."}
                        ],
                        "correctAnswer": "B",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                        "keyVocab": ["overpriced (quá đắt đỏ)", "bill surprise (bất ngờ vì hóa đơn)"]
                    },
                    {
                        "id": 20,
                        "audioText": "VSTEP Authentic Audio Track - Question 20",
                        "question": "What does the customer decide to do at the end of the conversation?",
                        "options": [
                            {"key": "A", "text": "He orders something from the restaurant menu."},
                            {"key": "B", "text": "He plans to come back at weekend."},
                            {"key": "C", "text": "He decides to look for another place to eat."},
                            {"key": "D", "text": "He plans to come in a week when the prices are lower."}
                        ],
                        "correctAnswer": "A",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                        "keyVocab": ["final decision (quyết định sau cùng)", "order from menu (chọn món trong thực đơn)"]
                    }
                ]
            }
        ]
    },
    "part3": {
        "title": "Part 3: 3 Bài Giảng / Thuyết Trình Học Thuật Chuyên Sâu",
        "instructions": "Nghe 3 bài nói hoặc bài giảng và chọn đáp án chính xác cho các câu hỏi 21 - 35.",
        "audioUrl": "./audio/listening/test3.mp3",
        "lectures": [
            {
                "id": "auth-3-lec-1",
                "title": "Bài thuyết trình 1",
                "topic": "Sandy Duffy chia sẻ về nghề viết kịch bản trò chơi điện tử (Video Game Writer)",
                "audioText": "Authentic lecture 1 from original test tape.",
                "audioUrl": "./audio/listening/test3.mp3",
                "questions": [
                    {
                        "id": 21,
                        "audioText": "VSTEP Authentic Audio Track - Question 21",
                        "question": "What did Sandy Duffy want to be when she was at school?",
                        "options": [
                            {"key": "A", "text": "a journalist"},
                            {"key": "B", "text": "a musician"},
                            {"key": "C", "text": "A director"},
                            {"key": "D", "text": "A basketball player"}
                        ],
                        "correctAnswer": "B",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                        "keyVocab": ["childhood dream (ước mơ thuở đi học)", "musician (nhạc sĩ, nghệ sĩ biểu diễn)"]
                    },
                    {
                        "id": 22,
                        "audioText": "VSTEP Authentic Audio Track - Question 22",
                        "question": "What did Sandy study at university?",
                        "options": [
                            {"key": "A", "text": "Math and Physics"},
                            {"key": "B", "text": "film making"},
                            {"key": "C", "text": "Technology"},
                            {"key": "D", "text": "Art"}
                        ],
                        "correctAnswer": "B",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                        "keyVocab": ["university major (chuyên ngành đại học)", "film making (sản xuất phim ảnh)"]
                    },
                    {
                        "id": 23,
                        "audioText": "VSTEP Authentic Audio Track - Question 23",
                        "question": "How did Sandy get her first job as a video game writer?",
                        "options": [
                            {"key": "A", "text": "She answered a job advertisement."},
                            {"key": "B", "text": "She met someone at a conference."},
                            {"key": "C", "text": "She sent some information about herself to a company."},
                            {"key": "D", "text": "She was invited by a friend."}
                        ],
                        "correctAnswer": "C",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                        "keyVocab": ["first job opportunity (cơ hội việc làm đầu tiên)", "sent information / portfolio (gửi hồ sơ năng lực)"]
                    },
                    {
                        "id": 24,
                        "audioText": "VSTEP Authentic Audio Track - Question 24",
                        "question": "What does Sandy like best about being a video game writer?",
                        "options": [
                            {"key": "A", "text": "the prizes she has won."},
                            {"key": "B", "text": "the high salary"},
                            {"key": "C", "text": "the people she works with"},
                            {"key": "D", "text": "the great working condition"}
                        ],
                        "correctAnswer": "C",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                        "keyVocab": ["favorite aspect (điều thích nhất)", "team colleagues (đồng nghiệp cùng cộng tác)"]
                    },
                    {
                        "id": 25,
                        "audioText": "VSTEP Authentic Audio Track - Question 25",
                        "question": "What does Sandy dislike about being a video game writer?",
                        "options": [
                            {"key": "A", "text": "She has to travel a lot."},
                            {"key": "B", "text": "She has to work long hours."},
                            {"key": "C", "text": "She often has to change her job."},
                            {"key": "D", "text": "She has to live far from home."}
                        ],
                        "correctAnswer": "A",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                        "keyVocab": ["job drawback (nhược điểm công việc)", "travel a lot (phải di chuyển đi công tác nhiều)"]
                    }
                ]
            },
            {
                "id": "auth-3-lec-2",
                "title": "Bài thuyết trình 2",
                "topic": "Hành trình đi bộ dã ngoại từ thiện (Charity trek)",
                "audioText": "Authentic lecture 2 from original test tape.",
                "audioUrl": "./audio/listening/test3.mp3",
                "questions": [
                    {
                        "id": 26,
                        "audioText": "VSTEP Authentic Audio Track - Question 26",
                        "question": "How long does the trek last?",
                        "options": [
                            {"key": "A", "text": "a day"},
                            {"key": "B", "text": "three days"},
                            {"key": "C", "text": "five days"},
                            {"key": "D", "text": "a week"}
                        ],
                        "correctAnswer": "C",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                        "keyVocab": ["trek duration (thời lượng chuyến đi dã ngoại)", "five days (5 ngày)"]
                    },
                    {
                        "id": 27,
                        "audioText": "VSTEP Authentic Audio Track - Question 27",
                        "question": "The trek aims to raise money for",
                        "options": [
                            {"key": "A", "text": "health care"},
                            {"key": "B", "text": "school education"},
                            {"key": "C", "text": "hospital"},
                            {"key": "D", "text": "the old people"}
                        ],
                        "correctAnswer": "A",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                        "keyVocab": ["fundraising goal (mục tiêu gây quỹ)", "health care support (hỗ trợ chăm sóc sức khỏe)"]
                    },
                    {
                        "id": 28,
                        "audioText": "VSTEP Authentic Audio Track - Question 28",
                        "question": "The cost of the trek includes —",
                        "options": [
                            {"key": "A", "text": "flight and airport taxes"},
                            {"key": "B", "text": "medical provision and taxes"},
                            {"key": "C", "text": "Foods"},
                            {"key": "D", "text": "Food and accommodation"}
                        ],
                        "correctAnswer": "D",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                        "keyVocab": ["included expenses (chi phí bao gồm)", "food and accommodation (ăn uống và chỗ ở)"]
                    },
                    {
                        "id": 29,
                        "audioText": "VSTEP Authentic Audio Track - Question 29",
                        "question": "Participants must",
                        "options": [
                            {"key": "A", "text": "walk across a glacier."},
                            {"key": "B", "text": "complete a fitness course."},
                            {"key": "C", "text": "agree to raise funds for the charity."},
                            {"key": "D", "text": "pay amount of money."}
                        ],
                        "correctAnswer": "C",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                        "keyVocab": ["mandatory requirement (yêu cầu bắt buộc)", "agree to raise funds (cam kết quyên góp quỹ từ thiện)"]
                    },
                    {
                        "id": 30,
                        "audioText": "VSTEP Authentic Audio Track - Question 30",
                        "question": "The trip starts on",
                        "options": [
                            {"key": "A", "text": "1st of November"},
                            {"key": "B", "text": "3rd of November"},
                            {"key": "C", "text": "13th of November"},
                            {"key": "D", "text": "23th of November"}
                        ],
                        "correctAnswer": "B",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                        "keyVocab": ["departure date (ngày khởi hành)", "3rd of November (ngày 3 tháng 11)"]
                    }
                ]
            },
            {
                "id": "auth-3-lec-3",
                "title": "Bài thuyết trình 3",
                "topic": "Sự phát triển của cơ sở hạ tầng giao thông Ấn Độ (Changes of India)",
                "audioText": "Authentic lecture 3 from original test tape.",
                "audioUrl": "./audio/listening/test3.mp3",
                "questions": [
                    {
                        "id": 31,
                        "audioText": "VSTEP Authentic Audio Track - Question 31",
                        "question": "Where do many of the rich people live?",
                        "options": [
                            {"key": "A", "text": "next to the new road"},
                            {"key": "B", "text": "in the cities."},
                            {"key": "C", "text": "in the countryside."},
                            {"key": "D", "text": "in isolated places."}
                        ],
                        "correctAnswer": "B",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                        "keyVocab": ["residential area (khu vực sinh sống)", "in the cities (ở các đô thị, thành phố)"]
                    },
                    {
                        "id": 32,
                        "audioText": "VSTEP Authentic Audio Track - Question 32",
                        "question": "How long is the road?",
                        "options": [
                            {"key": "A", "text": "600 kilometres"},
                            {"key": "B", "text": "6,000 kilometers"},
                            {"key": "C", "text": "60,000 kilometres"},
                            {"key": "D", "text": "60 miles"}
                        ],
                        "correctAnswer": "B",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                        "keyVocab": ["highway length (chiều dài tuyến đường cao tốc)", "6,000 kilometers (6.000 km)"]
                    },
                    {
                        "id": 33,
                        "audioText": "VSTEP Authentic Audio Track - Question 33",
                        "question": "What can you see on the computers at the road's headquarters in Delhi?",
                        "options": [
                            {"key": "A", "text": "small vehicles on the road"},
                            {"key": "B", "text": "any vehicle and problems on the road"},
                            {"key": "C", "text": "big vehicles on the road"},
                            {"key": "D", "text": "serious problems on the road"}
                        ],
                        "correctAnswer": "B",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                        "keyVocab": ["traffic surveillance (hệ thống giám sát giao thông)", "vehicle tracking (theo dõi phương tiện và sự cố)"]
                    },
                    {
                        "id": 34,
                        "audioText": "VSTEP Authentic Audio Track - Question 34",
                        "question": "What types of transport can you see on the road?",
                        "options": [
                            {"key": "A", "text": "all types"},
                            {"key": "B", "text": "mostly cars"},
                            {"key": "C", "text": "mostly motorbikes"},
                            {"key": "D", "text": "the presenter doesn't say"}
                        ],
                        "correctAnswer": "A",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                        "keyVocab": ["diversity of vehicles (đa dạng các loại xe)", "all types (mọi loại phương tiện)"]
                    },
                    {
                        "id": 35,
                        "audioText": "VSTEP Authentic Audio Track - Question 35",
                        "question": "Why does the presenter describe the new road as a symbol of India's future?",
                        "options": [
                            {"key": "A", "text": "because it's the same shape as the country of India."},
                            {"key": "B", "text": "because it is modern, it is helping the economy grow."},
                            {"key": "C", "text": "Because India has big population"},
                            {"key": "D", "text": "Because India has lots of transport"}
                        ],
                        "correctAnswer": "B",
                        "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                        "keyVocab": ["symbol of future (biểu tượng tương lai)", "economic growth (thúc đẩy tăng trưởng kinh tế)"]
                    }
                ]
            }
        ]
    }
}

def rebuild_practice_tests():
    with open('src/data/listening/practiceTests.js', 'r', encoding='utf-8') as f:
        content = f.read()

    prefix = 'export const LISTENING_PRACTICE_DATA = '
    if not content.startswith(prefix):
        raise ValueError("Unexpected file format in practiceTests.js")

    js_data = content[len(prefix):].rstrip(';\n ')
    data = json.loads(js_data)

    existing_sets = data.get('testSets', [])
    new_sets = []

    # Replace set-auth-1, set-auth-2, set-auth-3 with our authentic verified structures
    # Keep set-1, set-2 or any other sets
    auth_replaced = {'set-auth-1': TEST_1_DATA, 'set-auth-2': TEST_2_DATA, 'set-auth-3': TEST_3_DATA}

    for s in existing_sets:
        s_id = s.get('id')
        if s_id in auth_replaced:
            new_sets.append(auth_replaced[s_id])
        else:
            new_sets.append(s)

    data['testSets'] = new_sets

    output_content = prefix + json.dumps(data, ensure_ascii=False, indent=2) + ';\n'

    with open('src/data/listening/practiceTests.js', 'w', encoding='utf-8') as f:
        f.write(output_content)

    print("Rebuilt src/data/listening/practiceTests.js successfully.")

if __name__ == '__main__':
    rebuild_practice_tests()
