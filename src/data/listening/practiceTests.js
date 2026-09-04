import { exam07 } from '../tests/exam07.js';
import { authenticVstepExams } from '../tests/authenticVstepExams.js';

export const LISTENING_PRACTICE_DATA = {
  "title": "Kho Đề Luyện Nghe VSTEP B1 Chuẩn (Comprehensive Listening Arena)",
  "testSets": [
    {
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
              {
                "key": "A",
                "text": "Wednesday"
              },
              {
                "key": "B",
                "text": "Thursday"
              },
              {
                "key": "C",
                "text": "Friday"
              },
              {
                "key": "D",
                "text": "Tuesday"
              }
            ],
            "correctAnswer": "B",
            "explanation": "Căn cứ theo băng ghi âm gốc và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
            "keyVocab": [
              "appointment (cuộc hẹn)",
              "schedule (lịch trình)"
            ]
          },
          {
            "id": 2,
            "audioText": "VSTEP Authentic Audio Track - Question 2",
            "question": "Which is the aunt's postcard?",
            "options": [
              {
                "key": "A",
                "text": "a pretty village right by the sea"
              },
              {
                "key": "B",
                "text": "a pretty village with big trees"
              },
              {
                "key": "C",
                "text": "a pretty village behind the tall trees"
              },
              {
                "key": "D",
                "text": "a pretty village on the hills"
              }
            ],
            "correctAnswer": "C",
            "explanation": "Căn cứ theo băng ghi âm gốc và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
            "keyVocab": [
              "postcard (bưu thiếp)",
              "village (ngôi làng)"
            ]
          },
          {
            "id": 3,
            "audioText": "VSTEP Authentic Audio Track - Question 3",
            "question": "What time will the plane to Milan leave?",
            "options": [
              {
                "key": "A",
                "text": "01:00"
              },
              {
                "key": "B",
                "text": "07:15"
              },
              {
                "key": "C",
                "text": "08:15"
              },
              {
                "key": "D",
                "text": "06:15"
              }
            ],
            "correctAnswer": "C",
            "explanation": "Căn cứ theo băng ghi âm gốc và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
            "keyVocab": [
              "departure time (giờ khởi hành)",
              "flight to Milan (chuyến bay đến Milan)"
            ]
          },
          {
            "id": 4,
            "audioText": "VSTEP Authentic Audio Track - Question 4",
            "question": "Which present has the girl bought her mother?",
            "options": [
              {
                "key": "A",
                "text": "earrings"
              },
              {
                "key": "B",
                "text": "music CD"
              },
              {
                "key": "C",
                "text": "pen"
              },
              {
                "key": "D",
                "text": "notebook"
              }
            ],
            "correctAnswer": "C",
            "explanation": "Căn cứ theo băng ghi âm gốc và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C (pen).",
            "keyVocab": [
              "present (món quà)",
              "bought (đã mua)"
            ]
          },
          {
            "id": 5,
            "audioText": "VSTEP Authentic Audio Track - Question 5",
            "question": "What time will the pie be ready?",
            "options": [
              {
                "key": "A",
                "text": "four fifteen"
              },
              {
                "key": "B",
                "text": "five o'clock"
              },
              {
                "key": "C",
                "text": "twenty past five"
              },
              {
                "key": "D",
                "text": "fifty past four"
              }
            ],
            "correctAnswer": "C",
            "explanation": "Căn cứ theo băng ghi âm gốc và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
            "keyVocab": [
              "baking (nướng bánh)",
              "twenty past five (5 giờ 20)"
            ]
          },
          {
            "id": 6,
            "audioText": "VSTEP Authentic Audio Track - Question 6",
            "question": "What time is the swimming lesson today?",
            "options": [
              {
                "key": "A",
                "text": "half past four"
              },
              {
                "key": "B",
                "text": "fifteen to five"
              },
              {
                "key": "C",
                "text": "fifteen past five"
              },
              {
                "key": "D",
                "text": "four thirty"
              }
            ],
            "correctAnswer": "B",
            "explanation": "Căn cứ theo băng ghi âm gốc và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
            "keyVocab": [
              "swimming lesson (buổi học bơi)",
              "fifteen to five (5 giờ kém 15)"
            ]
          },
          {
            "id": 7,
            "audioText": "VSTEP Authentic Audio Track - Question 7",
            "question": "Which subject does the boy like best?",
            "options": [
              {
                "key": "A",
                "text": "information technology"
              },
              {
                "key": "B",
                "text": "geography"
              },
              {
                "key": "C",
                "text": "sports"
              },
              {
                "key": "D",
                "text": "design"
              }
            ],
            "correctAnswer": "C",
            "explanation": "Căn cứ theo băng ghi âm gốc và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
            "keyVocab": [
              "favorite subject (môn học yêu thích)",
              "sports (thể thao)"
            ]
          },
          {
            "id": 8,
            "audioText": "VSTEP Authentic Audio Track - Question 8",
            "question": "Which T-shirt does the boy decide to buy?",
            "options": [
              {
                "key": "A",
                "text": "a short-sleeved T-shirt with round neck"
              },
              {
                "key": "B",
                "text": "a V-neck black T-shirt"
              },
              {
                "key": "C",
                "text": "a long-sleeved T-shirt"
              },
              {
                "key": "D",
                "text": "a sleeveless white T-shirt"
              }
            ],
            "correctAnswer": "A",
            "explanation": "Căn cứ theo băng ghi âm gốc và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
            "keyVocab": [
              "short-sleeved (ngắn tay)",
              "round neck (cổ tròn)"
            ]
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
                  {
                    "key": "A",
                    "text": "She has coughs."
                  },
                  {
                    "key": "B",
                    "text": "She has headache."
                  },
                  {
                    "key": "C",
                    "text": "She has toothache."
                  },
                  {
                    "key": "D",
                    "text": "She has stomach ache."
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Căn cứ theo băng ghi âm gốc. Đáp án đúng là A.",
                "keyVocab": [
                  "coughs (bị ho)",
                  "health problem (vấn đề sức khỏe)"
                ]
              },
              {
                "id": 10,
                "audioText": "VSTEP Authentic Audio Track - Question 10",
                "question": "How does Kate's problem affect her classmates?",
                "options": [
                  {
                    "key": "A",
                    "text": "It makes them funny."
                  },
                  {
                    "key": "B",
                    "text": "It makes them annoyed."
                  },
                  {
                    "key": "C",
                    "text": "It makes them happy."
                  },
                  {
                    "key": "D",
                    "text": "It makes them excited."
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ theo băng ghi âm gốc. Đáp án đúng là B.",
                "keyVocab": [
                  "annoyed (bực mình, khó chịu)",
                  "affect (ảnh hưởng)"
                ]
              },
              {
                "id": 11,
                "audioText": "VSTEP Authentic Audio Track - Question 11",
                "question": "What did Kate have last year?",
                "options": [
                  {
                    "key": "A",
                    "text": "She had coughs."
                  },
                  {
                    "key": "B",
                    "text": "She had headache."
                  },
                  {
                    "key": "C",
                    "text": "She had a fall off her bike."
                  },
                  {
                    "key": "D",
                    "text": "She had stomach ache."
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Căn cứ theo băng ghi âm gốc. Đáp án đúng là C.",
                "keyVocab": [
                  "fall off bike (ngã xe đạp)",
                  "injury (chấn thương)"
                ]
              },
              {
                "id": 12,
                "audioText": "VSTEP Authentic Audio Track - Question 12",
                "question": "What does Kate have now, too?",
                "options": [
                  {
                    "key": "A",
                    "text": "She has backache."
                  },
                  {
                    "key": "B",
                    "text": "She has headache."
                  },
                  {
                    "key": "C",
                    "text": "She has toothache."
                  },
                  {
                    "key": "D",
                    "text": "She has temperature."
                  }
                ],
                "correctAnswer": "D",
                "explanation": "Căn cứ theo băng ghi âm gốc. Đáp án đúng là D.",
                "keyVocab": [
                  "temperature / fever (bị sốt)",
                  "symptoms (triệu chứng)"
                ]
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
                  {
                    "key": "A",
                    "text": "Because he feels bored staying at home."
                  },
                  {
                    "key": "B",
                    "text": "Because he feels safe staying at home."
                  },
                  {
                    "key": "C",
                    "text": "Because he feels cold staying at home."
                  },
                  {
                    "key": "D",
                    "text": "Because he feels hot staying at home."
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Căn cứ theo băng ghi âm gốc. Đáp án đúng là A.",
                "keyVocab": [
                  "bored (buồn chán)",
                  "stay at home (ở nhà)"
                ]
              },
              {
                "id": 14,
                "audioText": "VSTEP Authentic Audio Track - Question 14",
                "question": "Why does the woman want to stay at home?",
                "options": [
                  {
                    "key": "A",
                    "text": "Because she has coughs."
                  },
                  {
                    "key": "B",
                    "text": "Because she feels tired."
                  },
                  {
                    "key": "C",
                    "text": "Because she has toothache."
                  },
                  {
                    "key": "D",
                    "text": "Because she has stomach ache."
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ theo băng ghi âm gốc. Đáp án đúng là B.",
                "keyVocab": [
                  "tired (mệt mỏi)",
                  "rest (nghỉ ngơi)"
                ]
              },
              {
                "id": 15,
                "audioText": "VSTEP Authentic Audio Track - Question 15",
                "question": "Why doesn't the woman want to watch an Italian film?",
                "options": [
                  {
                    "key": "A",
                    "text": "Because she is short of money."
                  },
                  {
                    "key": "B",
                    "text": "Because she is serious about it."
                  },
                  {
                    "key": "C",
                    "text": "Because she's afraid she will fall asleep watching it."
                  },
                  {
                    "key": "D",
                    "text": "Because she has stomach ache."
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Căn cứ theo băng ghi âm gốc. Đáp án đúng là C.",
                "keyVocab": [
                  "fall asleep (ngủ quên)",
                  "subtitles (phụ đề)"
                ]
              },
              {
                "id": 16,
                "audioText": "VSTEP Authentic Audio Track - Question 16",
                "question": "Why doesn't the woman want to watch a Robert de Niro?",
                "options": [
                  {
                    "key": "A",
                    "text": "Because she feels too busy to watch it."
                  },
                  {
                    "key": "B",
                    "text": "Because she feels too serious to watch it."
                  },
                  {
                    "key": "C",
                    "text": "Because she doesn't want to watch it the third time."
                  },
                  {
                    "key": "D",
                    "text": "Because she doesn't want to watch it the second time."
                  }
                ],
                "correctAnswer": "D",
                "explanation": "Căn cứ theo băng ghi âm gốc. Đáp án đúng là D.",
                "keyVocab": [
                  "watch again (xem lại)",
                  "second time (lần thứ hai)"
                ]
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
                  {
                    "key": "A",
                    "text": "It may be cheap."
                  },
                  {
                    "key": "B",
                    "text": "It may be very cheap."
                  },
                  {
                    "key": "C",
                    "text": "It may be expensive."
                  },
                  {
                    "key": "D",
                    "text": "It may be very expensive."
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Căn cứ theo băng ghi âm gốc. Đáp án đúng là A.",
                "keyVocab": [
                  "good holiday (kỳ nghỉ tuyệt vời)",
                  "cheap (chi phí rẻ)"
                ]
              },
              {
                "id": 18,
                "audioText": "VSTEP Authentic Audio Track - Question 18",
                "question": "Why doesn't the boy want to walk?",
                "options": [
                  {
                    "key": "A",
                    "text": "Because he feels too hot to do it."
                  },
                  {
                    "key": "B",
                    "text": "Because he finds it hard to do it."
                  },
                  {
                    "key": "C",
                    "text": "Because he doesn't like hard work."
                  },
                  {
                    "key": "D",
                    "text": "Because she doesn't like the sounds of people walking."
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ theo băng ghi âm gốc. Đáp án đúng là B.",
                "keyVocab": [
                  "hard to do (khó thực hiện)",
                  "exhausting (kiệt sức)"
                ]
              },
              {
                "id": 19,
                "audioText": "VSTEP Authentic Audio Track - Question 19",
                "question": "What does the girl think about the food in Youth Hostels?",
                "options": [
                  {
                    "key": "A",
                    "text": "It is comfortable."
                  },
                  {
                    "key": "B",
                    "text": "It is good."
                  },
                  {
                    "key": "C",
                    "text": "It is not good."
                  },
                  {
                    "key": "D",
                    "text": "It is clean and cheap."
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Căn cứ theo băng ghi âm gốc. Đáp án đúng là C.",
                "keyVocab": [
                  "Youth Hostels (nhà trọ thanh niên)",
                  "food quality (chất lượng đồ ăn)"
                ]
              },
              {
                "id": 20,
                "audioText": "VSTEP Authentic Audio Track - Question 20",
                "question": "What does the boy decide to do in the end?",
                "options": [
                  {
                    "key": "A",
                    "text": "go home"
                  },
                  {
                    "key": "B",
                    "text": "leave home"
                  },
                  {
                    "key": "C",
                    "text": "sell his home"
                  },
                  {
                    "key": "D",
                    "text": "enjoy his holiday home"
                  }
                ],
                "correctAnswer": "D",
                "explanation": "Căn cứ theo băng ghi âm gốc. Đáp án đúng là D.",
                "keyVocab": [
                  "holiday at home (nghỉ dưỡng tại nhà)",
                  "decision (quyết định)"
                ]
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
                  {
                    "key": "A",
                    "text": "There were no Vietnamese people living near her."
                  },
                  {
                    "key": "B",
                    "text": "There were no Vietnamese working in the stores."
                  },
                  {
                    "key": "C",
                    "text": "There wasn't always someone to go shopping with her."
                  },
                  {
                    "key": "D",
                    "text": "Her mother could speak a little English."
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": [
                  "shopping assistance (hỗ trợ mua sắm)",
                  "language barrier (rào cản ngôn ngữ)"
                ]
              },
              {
                "id": 22,
                "audioText": "VSTEP Authentic Audio Track - Question 22",
                "question": "Why did her father find working in a factory difficult?",
                "options": [
                  {
                    "key": "A",
                    "text": "He couldn't speak any English."
                  },
                  {
                    "key": "B",
                    "text": "He didn't have many friends there."
                  },
                  {
                    "key": "C",
                    "text": "He had had a much better job in Vietnam."
                  },
                  {
                    "key": "D",
                    "text": "He couldn't get used to the working style."
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                "keyVocab": [
                  "factory job (công việc nhà máy)",
                  "qualification (trình độ chuyên môn)"
                ]
              },
              {
                "id": 23,
                "audioText": "VSTEP Authentic Audio Track - Question 23",
                "question": "Why are the speaker and her brother more fortunate than their sisters?",
                "options": [
                  {
                    "key": "A",
                    "text": "They did not need extra English lessons."
                  },
                  {
                    "key": "B",
                    "text": "They look more American."
                  },
                  {
                    "key": "C",
                    "text": "They speak with American accents."
                  },
                  {
                    "key": "D",
                    "text": "They quickly adopted the way of life."
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                "keyVocab": [
                  "American accent (giọng Mỹ)",
                  "fortunate (may mắn hơn)"
                ]
              },
              {
                "id": 24,
                "audioText": "VSTEP Authentic Audio Track - Question 24",
                "question": "What has the speaker forgotten about life in Vietnam?",
                "options": [
                  {
                    "key": "A",
                    "text": "Living close to other people"
                  },
                  {
                    "key": "B",
                    "text": "The warm weather"
                  },
                  {
                    "key": "C",
                    "text": "Wearing traditional clothes"
                  },
                  {
                    "key": "D",
                    "text": "Traditional food"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                "keyVocab": [
                  "forgotten (lãng quên)",
                  "community connection (gắn kết cộng đồng)"
                ]
              },
              {
                "id": 25,
                "audioText": "VSTEP Authentic Audio Track - Question 25",
                "question": "Why does she find it difficult to invite friends to her home?",
                "options": [
                  {
                    "key": "A",
                    "text": "Her parents do not have much money."
                  },
                  {
                    "key": "B",
                    "text": "Her parents haven't adopted an American way of life."
                  },
                  {
                    "key": "C",
                    "text": "Her parents only know how to cook Vietnamese food."
                  },
                  {
                    "key": "D",
                    "text": "Her parents do not speak English well."
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": [
                  "cultural difference (khác biệt văn hóa)",
                  "lifestyle (lối sống)"
                ]
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
                  {
                    "key": "A",
                    "text": "Girls didn't go to school."
                  },
                  {
                    "key": "B",
                    "text": "Every classroom was a mix of boys and girls."
                  },
                  {
                    "key": "C",
                    "text": "Boys could learn what they wanted."
                  },
                  {
                    "key": "D",
                    "text": "They didn't teach girls some subjects."
                  }
                ],
                "correctAnswer": "D",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                "keyVocab": [
                  "gender segregation (phân tách giới tính)",
                  "curriculum restriction (hạn chế môn học)"
                ]
              },
              {
                "id": 27,
                "audioText": "VSTEP Authentic Audio Track - Question 27",
                "question": "What is the reason that most American schools have mixed classes?",
                "options": [
                  {
                    "key": "A",
                    "text": "Scientists said that it was the best thing."
                  },
                  {
                    "key": "B",
                    "text": "Teachers did not want to teach single-gender classes."
                  },
                  {
                    "key": "C",
                    "text": "A law gave girls an equal chance to learn."
                  },
                  {
                    "key": "D",
                    "text": "Boys and girls behave better in such classes."
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                "keyVocab": [
                  "equal chance (cơ hội bình đẳng)",
                  "educational law (luật giáo dục)"
                ]
              },
              {
                "id": 28,
                "audioText": "VSTEP Authentic Audio Track - Question 28",
                "question": "Why might girls not get a chance to talk much in a class with boys?",
                "options": [
                  {
                    "key": "A",
                    "text": "Because the teacher doesn't ask them questions"
                  },
                  {
                    "key": "B",
                    "text": "Because boys are louder and often talk first"
                  },
                  {
                    "key": "C",
                    "text": "Because boys know the correct answers"
                  },
                  {
                    "key": "D",
                    "text": "Because girls are often shy."
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": [
                  "classroom dynamics (tương tác lớp học)",
                  "participation (sự tham gia phát biểu)"
                ]
              },
              {
                "id": 29,
                "audioText": "VSTEP Authentic Audio Track - Question 29",
                "question": "What is NOT the reason that some schools are reconsidering separating classes?",
                "options": [
                  {
                    "key": "A",
                    "text": "They prefer the old teaching styles."
                  },
                  {
                    "key": "B",
                    "text": "Boys learn differently than girls."
                  },
                  {
                    "key": "C",
                    "text": "Boys and girls can bother each other."
                  },
                  {
                    "key": "D",
                    "text": "Boys and girls like different things."
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                "keyVocab": [
                  "reconsidering (xem xét lại)",
                  "separating classes (tách lớp học)"
                ]
              },
              {
                "id": 30,
                "audioText": "VSTEP Authentic Audio Track - Question 30",
                "question": "Which is one class that is not mentioned as being separated?",
                "options": [
                  {
                    "key": "A",
                    "text": "Math"
                  },
                  {
                    "key": "B",
                    "text": "Social Studies"
                  },
                  {
                    "key": "C",
                    "text": "Science"
                  },
                  {
                    "key": "D",
                    "text": "Physical Education"
                  }
                ],
                "correctAnswer": "D",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                "keyVocab": [
                  "Physical Education (thể dục)",
                  "academic subjects (môn học thuật)"
                ]
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
                  {
                    "key": "A",
                    "text": "the director of international students"
                  },
                  {
                    "key": "B",
                    "text": "new international students"
                  },
                  {
                    "key": "C",
                    "text": "the teachers of international department"
                  },
                  {
                    "key": "D",
                    "text": "all first-year students in the college"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": [
                  "orientation talk (buổi định hướng)",
                  "international students (sinh viên quốc tế)"
                ]
              },
              {
                "id": 32,
                "audioText": "VSTEP Authentic Audio Track - Question 32",
                "question": "What is the purpose of this talk?",
                "options": [
                  {
                    "key": "A",
                    "text": "to introduce the director for international student affairs"
                  },
                  {
                    "key": "B",
                    "text": "to deal with all international students' problems."
                  },
                  {
                    "key": "C",
                    "text": "to inform the importance of using English in class."
                  },
                  {
                    "key": "D",
                    "text": "to introduce common problems in non-verbal communication."
                  }
                ],
                "correctAnswer": "D",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                "keyVocab": [
                  "non-verbal communication (giao tiếp phi ngôn ngữ)",
                  "cultural adaptation (thích nghi văn hóa)"
                ]
              },
              {
                "id": 33,
                "audioText": "VSTEP Authentic Audio Track - Question 33",
                "question": "According to the speaker, what is body language?",
                "options": [
                  {
                    "key": "A",
                    "text": "It's the use of verb tenses and modals."
                  },
                  {
                    "key": "B",
                    "text": "It's the way to ask for directions"
                  },
                  {
                    "key": "C",
                    "text": "It's the language used in class only."
                  },
                  {
                    "key": "D",
                    "text": "It's the language of movements and facial expressions."
                  }
                ],
                "correctAnswer": "D",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                "keyVocab": [
                  "body language (ngôn ngữ cơ thể)",
                  "movements and facial expressions (cử chỉ và biểu cảm gương mặt)"
                ]
              },
              {
                "id": 34,
                "audioText": "VSTEP Authentic Audio Track - Question 34",
                "question": "In American culture,",
                "options": [
                  {
                    "key": "A",
                    "text": "Eye contact is the same as most cultures."
                  },
                  {
                    "key": "B",
                    "text": "Making eye contact is a sign of disrespect."
                  },
                  {
                    "key": "C",
                    "text": "People don't look in others' eyes while talking."
                  },
                  {
                    "key": "D",
                    "text": "Eye contact is considered as a sign of honesty."
                  }
                ],
                "correctAnswer": "D",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                "keyVocab": [
                  "eye contact (giao tiếp bằng mắt)",
                  "sign of honesty (dấu hiệu của sự trung thực)"
                ]
              },
              {
                "id": 35,
                "audioText": "VSTEP Authentic Audio Track - Question 35",
                "question": "According to the speaker, what is TRUE about handshakes in American Culture?",
                "options": [
                  {
                    "key": "A",
                    "text": "A handshake shouldn't be too strong."
                  },
                  {
                    "key": "B",
                    "text": "Handshakes are not common."
                  },
                  {
                    "key": "C",
                    "text": "Handshakes need to be firm."
                  },
                  {
                    "key": "D",
                    "text": "Shaking hands is not important."
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                "keyVocab": [
                  "firm handshake (cái bắt tay chặt, dứt khoát)",
                  "etiquette (phép lịch sự)"
                ]
              }
            ]
          }
        ]
      }
    },
    {
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
              {
                "key": "A",
                "text": "yellow"
              },
              {
                "key": "B",
                "text": "blue"
              },
              {
                "key": "C",
                "text": "brown"
              },
              {
                "key": "D",
                "text": "black"
              }
            ],
            "correctAnswer": "A",
            "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
            "keyVocab": [
              "coat (áo khoác)",
              "yellow (màu vàng)"
            ]
          },
          {
            "id": 2,
            "audioText": "VSTEP Authentic Audio Track - Question 2",
            "question": "What did the woman repair?",
            "options": [
              {
                "key": "A",
                "text": "chair"
              },
              {
                "key": "B",
                "text": "shelf"
              },
              {
                "key": "C",
                "text": "desk"
              },
              {
                "key": "D",
                "text": "bed"
              }
            ],
            "correctAnswer": "B",
            "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
            "keyVocab": [
              "repair / fix (sửa chữa)",
              "shelf (giá sách, kệ)"
            ]
          },
          {
            "id": 3,
            "audioText": "VSTEP Authentic Audio Track - Question 3",
            "question": "What are they going to buy for Pam?",
            "options": [
              {
                "key": "A",
                "text": "a book"
              },
              {
                "key": "B",
                "text": "a plant"
              },
              {
                "key": "C",
                "text": "some chocolates"
              },
              {
                "key": "D",
                "text": "candies"
              }
            ],
            "correctAnswer": "B",
            "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
            "keyVocab": [
              "buy present (mua quà tặng)",
              "plant (chậu cây)"
            ]
          },
          {
            "id": 4,
            "audioText": "VSTEP Authentic Audio Track - Question 4",
            "question": "What has the girl lost?",
            "options": [
              {
                "key": "A",
                "text": "mobile phone"
              },
              {
                "key": "B",
                "text": "purse"
              },
              {
                "key": "C",
                "text": "pen"
              },
              {
                "key": "D",
                "text": "bag"
              }
            ],
            "correctAnswer": "B",
            "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
            "keyVocab": [
              "lost item (đồ bị mất)",
              "purse (ví tiền)"
            ]
          },
          {
            "id": 5,
            "audioText": "VSTEP Authentic Audio Track - Question 5",
            "question": "Which sport will the boy do soon at the centre?",
            "options": [
              {
                "key": "A",
                "text": "waterskiing"
              },
              {
                "key": "B",
                "text": "diving"
              },
              {
                "key": "C",
                "text": "sailing"
              },
              {
                "key": "D",
                "text": "swimming"
              }
            ],
            "correctAnswer": "C",
            "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
            "keyVocab": [
              "sports centre (trung tâm thể thao)",
              "sailing (chèo thuyền buồm)"
            ]
          },
          {
            "id": 6,
            "audioText": "VSTEP Authentic Audio Track - Question 6",
            "question": "Who lives with Josh in his house?",
            "options": [
              {
                "key": "A",
                "text": "his grandmother"
              },
              {
                "key": "B",
                "text": "his father"
              },
              {
                "key": "C",
                "text": "his sister"
              },
              {
                "key": "D",
                "text": "his mother"
              }
            ],
            "correctAnswer": "A",
            "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
            "keyVocab": [
              "live with (sống cùng)",
              "grandmother (bà)"
            ]
          },
          {
            "id": 7,
            "audioText": "VSTEP Authentic Audio Track - Question 7",
            "question": "What will the girl take with her on holiday?",
            "options": [
              {
                "key": "A",
                "text": "suitcase"
              },
              {
                "key": "B",
                "text": "sports bag"
              },
              {
                "key": "C",
                "text": "backpack"
              },
              {
                "key": "D",
                "text": "overhead bag"
              }
            ],
            "correctAnswer": "B",
            "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
            "keyVocab": [
              "holiday luggage (hành lý du lịch)",
              "sports bag (túi thể thao)"
            ]
          },
          {
            "id": 8,
            "audioText": "VSTEP Authentic Audio Track - Question 8",
            "question": "Where do the boys decide to go?",
            "options": [
              {
                "key": "A",
                "text": "cinema"
              },
              {
                "key": "B",
                "text": "game store"
              },
              {
                "key": "C",
                "text": "park"
              },
              {
                "key": "D",
                "text": "library"
              }
            ],
            "correctAnswer": "A",
            "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
            "keyVocab": [
              "destination (điểm đến)",
              "cinema (rạp chiếu phim)"
            ]
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
                  {
                    "key": "A",
                    "text": "In London."
                  },
                  {
                    "key": "B",
                    "text": "In the North of England."
                  },
                  {
                    "key": "C",
                    "text": "In the South of London."
                  },
                  {
                    "key": "D",
                    "text": "In Britain."
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": [
                  "birthplace (nơi sinh)",
                  "North of England (miền bắc nước Anh)"
                ]
              },
              {
                "id": 10,
                "audioText": "VSTEP Authentic Audio Track - Question 10",
                "question": "How did he know about karate?",
                "options": [
                  {
                    "key": "A",
                    "text": "He discovered karate by himself."
                  },
                  {
                    "key": "B",
                    "text": "He's interested in karate owing to a sports center during a school visit."
                  },
                  {
                    "key": "C",
                    "text": "His friend introduced it to him."
                  },
                  {
                    "key": "D",
                    "text": "He knew it when moving to London."
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": [
                  "sports center (trung tâm thể thao)",
                  "school visit (chuyến đi dã ngoại trường học)"
                ]
              },
              {
                "id": 11,
                "audioText": "VSTEP Authentic Audio Track - Question 11",
                "question": "When did he take part in the World Championships in Taiwan?",
                "options": [
                  {
                    "key": "A",
                    "text": "In 1972."
                  },
                  {
                    "key": "B",
                    "text": "In 1980."
                  },
                  {
                    "key": "C",
                    "text": "In 1982."
                  },
                  {
                    "key": "D",
                    "text": "After starting training with a British coach."
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                "keyVocab": [
                  "World Championships (giải vô địch thế giới)",
                  "competition year (năm thi đấu)"
                ]
              },
              {
                "id": 12,
                "audioText": "VSTEP Authentic Audio Track - Question 12",
                "question": "How many times has he got the World Champion?",
                "options": [
                  {
                    "key": "A",
                    "text": "Two times."
                  },
                  {
                    "key": "B",
                    "text": "Three times."
                  },
                  {
                    "key": "C",
                    "text": "Four times."
                  },
                  {
                    "key": "D",
                    "text": "Five times."
                  }
                ],
                "correctAnswer": "D",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                "keyVocab": [
                  "World Champion title (danh hiệu vô địch thế giới)",
                  "five times (5 lần)"
                ]
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
                  {
                    "key": "A",
                    "text": "A temporary staff."
                  },
                  {
                    "key": "B",
                    "text": "A stable staff."
                  },
                  {
                    "key": "C",
                    "text": "A part-time receptionist."
                  },
                  {
                    "key": "D",
                    "text": "A full-time waiter."
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                "keyVocab": [
                  "temporary staff (nhân viên thời vụ)",
                  "job position (vị trí tuyển dụng)"
                ]
              },
              {
                "id": 14,
                "audioText": "VSTEP Authentic Audio Track - Question 14",
                "question": "What about the hour of work?",
                "options": [
                  {
                    "key": "A",
                    "text": "There are two shifts and two days off."
                  },
                  {
                    "key": "B",
                    "text": "There are two shifts and one day off."
                  },
                  {
                    "key": "C",
                    "text": "There's a day shift from 7 to 2 and a late shift from 4 till 11."
                  },
                  {
                    "key": "D",
                    "text": "There is only afternoon shift."
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": [
                  "working shifts (ca làm việc)",
                  "day off (ngày nghỉ)"
                ]
              },
              {
                "id": 15,
                "audioText": "VSTEP Authentic Audio Track - Question 15",
                "question": "What does the woman mention about the uniform?",
                "options": [
                  {
                    "key": "A",
                    "text": "It's prepared by the hotel."
                  },
                  {
                    "key": "B",
                    "text": "He needs to wear dark clothes."
                  },
                  {
                    "key": "C",
                    "text": "He needs a white shirt and dark trousers."
                  },
                  {
                    "key": "D",
                    "text": "He needs wear uniform five days a week."
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                "keyVocab": [
                  "uniform requirement (quy định đồng phục)",
                  "white shirt and dark trousers (áo sơ mi trắng, quần tối màu)"
                ]
              },
              {
                "id": 16,
                "audioText": "VSTEP Authentic Audio Track - Question 16",
                "question": "When does he start his job?",
                "options": [
                  {
                    "key": "A",
                    "text": "At the end of May."
                  },
                  {
                    "key": "B",
                    "text": "On the 10th of May."
                  },
                  {
                    "key": "C",
                    "text": "On the 10th of June."
                  },
                  {
                    "key": "D",
                    "text": "On the 28th of June."
                  }
                ],
                "correctAnswer": "D",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                "keyVocab": [
                  "start date (ngày bắt đầu đi làm)",
                  "28th of June (ngày 28 tháng 6)"
                ]
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
                  {
                    "key": "A",
                    "text": "The preservation of old books."
                  },
                  {
                    "key": "B",
                    "text": "The local coal industry."
                  },
                  {
                    "key": "C",
                    "text": "The famous archives librarian."
                  },
                  {
                    "key": "D",
                    "text": "The collection of rare books."
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": [
                  "research paper (bài nghiên cứu)",
                  "coal industry (ngành công nghiệp than đá)"
                ]
              },
              {
                "id": 18,
                "audioText": "VSTEP Authentic Audio Track - Question 18",
                "question": "What security procedures does the librarian tell the man he must follow?",
                "options": [
                  {
                    "key": "A",
                    "text": "Show her his note cards before leaving."
                  },
                  {
                    "key": "B",
                    "text": "Show her his ID card."
                  },
                  {
                    "key": "C",
                    "text": "Pay a fee."
                  },
                  {
                    "key": "D",
                    "text": "Allow his ID card to be copied; sign in and out of the archives room."
                  }
                ],
                "correctAnswer": "D",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                "keyVocab": [
                  "security procedures (thủ tục bảo an)",
                  "archives room (phòng lưu trữ tư liệu)"
                ]
              },
              {
                "id": 19,
                "audioText": "VSTEP Authentic Audio Track - Question 19",
                "question": "Why did the librarian mention the age of the books?",
                "options": [
                  {
                    "key": "A",
                    "text": "They need to be handled with gloves."
                  },
                  {
                    "key": "B",
                    "text": "The man can only look at photographs of them."
                  },
                  {
                    "key": "C",
                    "text": "They were added to the collection recently."
                  },
                  {
                    "key": "D",
                    "text": "They are valuable books."
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                "keyVocab": [
                  "handle with gloves (cầm bằng găng tay bảo vệ)",
                  "fragile pages (trang sách dễ rách)"
                ]
              },
              {
                "id": 20,
                "audioText": "VSTEP Authentic Audio Track - Question 20",
                "question": "How did the man collect his needed information about his paper?",
                "options": [
                  {
                    "key": "A",
                    "text": "He took a picture."
                  },
                  {
                    "key": "B",
                    "text": "He scanned these images."
                  },
                  {
                    "key": "C",
                    "text": "He could just look them."
                  },
                  {
                    "key": "D",
                    "text": "He photocopied these books."
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                "keyVocab": [
                  "take a picture (chụp ảnh tài liệu)",
                  "gather data (thu thập số liệu)"
                ]
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
                  {
                    "key": "A",
                    "text": "He is not an important person."
                  },
                  {
                    "key": "B",
                    "text": "He wants to talk about different fashion trends."
                  },
                  {
                    "key": "C",
                    "text": "The presentation is not formal."
                  },
                  {
                    "key": "D",
                    "text": "He works for a fashion company."
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                "keyVocab": [
                  "suit (bộ com-lê)",
                  "informal presentation (bài thuyết trình không trang trọng)"
                ]
              },
              {
                "id": 22,
                "audioText": "VSTEP Authentic Audio Track - Question 22",
                "question": "According to the speaker, which statement is TRUE?",
                "options": [
                  {
                    "key": "A",
                    "text": "It's important to look casually-dressed in public."
                  },
                  {
                    "key": "B",
                    "text": "A suit is necessary when meeting clients."
                  },
                  {
                    "key": "C",
                    "text": "Wearing shorts is OK, sometimes."
                  },
                  {
                    "key": "D",
                    "text": "Nobody can describe the way he's dressed."
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": [
                  "meeting clients (gặp gỡ khách hàng)",
                  "professional attire (trang phục chuyên nghiệp)"
                ]
              },
              {
                "id": 23,
                "audioText": "VSTEP Authentic Audio Track - Question 23",
                "question": "What does the phrase \"Dress-down Fridays\" mean?",
                "options": [
                  {
                    "key": "A",
                    "text": "Employees must wear fashionable clothes on Fridays."
                  },
                  {
                    "key": "B",
                    "text": "Employees can wear anything they want on Fridays."
                  },
                  {
                    "key": "C",
                    "text": "Employees are allowed to wear informally on Fridays."
                  },
                  {
                    "key": "D",
                    "text": "Employees are required to wear special clothes on Fridays."
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                "keyVocab": [
                  "Dress-down Fridays (thứ sáu mặc trang phục thoải mái)",
                  "informal attire (trang phục thường nhật)"
                ]
              },
              {
                "id": 24,
                "audioText": "VSTEP Authentic Audio Track - Question 24",
                "question": "According to the speaker, who may be the most informal dressers?",
                "options": [
                  {
                    "key": "A",
                    "text": "People working in IT"
                  },
                  {
                    "key": "B",
                    "text": "People working in banks."
                  },
                  {
                    "key": "C",
                    "text": "People working in customer services."
                  },
                  {
                    "key": "D",
                    "text": "People working with clients."
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                "keyVocab": [
                  "IT workers (dân công nghệ thông tin)",
                  "casual style (phong cách thoải mái)"
                ]
              },
              {
                "id": 25,
                "audioText": "VSTEP Authentic Audio Track - Question 25",
                "question": "What does a customer feel about a man in uniform?",
                "options": [
                  {
                    "key": "A",
                    "text": "reliable"
                  },
                  {
                    "key": "B",
                    "text": "recognized"
                  },
                  {
                    "key": "C",
                    "text": "expertised"
                  },
                  {
                    "key": "D",
                    "text": "reassured"
                  }
                ],
                "correctAnswer": "D",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                "keyVocab": [
                  "reassured (cảm thấy an tâm, tin tưởng)",
                  "uniform impact (tác động của đồng phục)"
                ]
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
                  {
                    "key": "A",
                    "text": "Ten"
                  },
                  {
                    "key": "B",
                    "text": "About fifteen"
                  },
                  {
                    "key": "C",
                    "text": "1,400"
                  },
                  {
                    "key": "D",
                    "text": "70"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                "keyVocab": [
                  "sleep recommendation (khuyến nghị thời lượng ngủ)",
                  "ten hours (10 tiếng)"
                ]
              },
              {
                "id": 27,
                "audioText": "VSTEP Authentic Audio Track - Question 27",
                "question": "According to the speaker, why is sleep important for the brain?",
                "options": [
                  {
                    "key": "A",
                    "text": "Sleep generates dreams so brain can relax."
                  },
                  {
                    "key": "B",
                    "text": "Brain can rest in a sleep."
                  },
                  {
                    "key": "C",
                    "text": "Sleep can save energy for the brain."
                  },
                  {
                    "key": "D",
                    "text": "Sleep improves the effectiveness of the brain."
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": [
                  "brain recovery (sự hồi phục của não bộ)",
                  "rest in sleep (nghỉ ngơi trong giấc ngủ)"
                ]
              },
              {
                "id": 28,
                "audioText": "VSTEP Authentic Audio Track - Question 28",
                "question": "Why don't the students learn well when they are tired?",
                "options": [
                  {
                    "key": "A",
                    "text": "They can't finish their homework."
                  },
                  {
                    "key": "B",
                    "text": "They can't deal with troubles in class."
                  },
                  {
                    "key": "C",
                    "text": "They get very excited."
                  },
                  {
                    "key": "D",
                    "text": "They can't pay attention very well."
                  }
                ],
                "correctAnswer": "D",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                "keyVocab": [
                  "lack of focus (thiếu tập trung)",
                  "pay attention (chú ý lắng nghe)"
                ]
              },
              {
                "id": 29,
                "audioText": "VSTEP Authentic Audio Track - Question 29",
                "question": "Which is NOT a reason for poor sleep?",
                "options": [
                  {
                    "key": "A",
                    "text": "drinking soda"
                  },
                  {
                    "key": "B",
                    "text": "playing computer games"
                  },
                  {
                    "key": "C",
                    "text": "staying up late"
                  },
                  {
                    "key": "D",
                    "text": "exercising before sleep"
                  }
                ],
                "correctAnswer": "D",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                "keyVocab": [
                  "poor sleep causes (nguyên nhân gây mất ngủ)",
                  "exercise (tập thể dục)"
                ]
              },
              {
                "id": 30,
                "audioText": "VSTEP Authentic Audio Track - Question 30",
                "question": "What should students try to do each night?",
                "options": [
                  {
                    "key": "A",
                    "text": "Watch a scary movie"
                  },
                  {
                    "key": "B",
                    "text": "Drink some hot tea"
                  },
                  {
                    "key": "C",
                    "text": "Go to bed at a regular time"
                  },
                  {
                    "key": "D",
                    "text": "Relax with a TV show"
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                "keyVocab": [
                  "regular sleep schedule (lịch ngủ điều độ)",
                  "routine (thói quen nhất quán)"
                ]
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
                  {
                    "key": "A",
                    "text": "a straight line"
                  },
                  {
                    "key": "B",
                    "text": "a curved line"
                  },
                  {
                    "key": "C",
                    "text": "a round shape"
                  },
                  {
                    "key": "D",
                    "text": "an oval shape"
                  }
                ],
                "correctAnswer": "D",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                "keyVocab": [
                  "aurora shape (hình dạng dải cực quang)",
                  "oval shape (hình bầu dục)"
                ]
              },
              {
                "id": 32,
                "audioText": "VSTEP Authentic Audio Track - Question 32",
                "question": "What does \"aurora borealis\" exactly mean?",
                "options": [
                  {
                    "key": "A",
                    "text": "northern lights"
                  },
                  {
                    "key": "B",
                    "text": "northern dawn"
                  },
                  {
                    "key": "C",
                    "text": "northern sky"
                  },
                  {
                    "key": "D",
                    "text": "early morning lights"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": [
                  "aurora borealis (bình minh phương bắc - northern dawn)",
                  "Latin origin (nguồn gốc tiếng La-tinh)"
                ]
              },
              {
                "id": 33,
                "audioText": "VSTEP Authentic Audio Track - Question 33",
                "question": "Where is the best place to see the northern lights?",
                "options": [
                  {
                    "key": "A",
                    "text": "The northernmost point of Earth"
                  },
                  {
                    "key": "B",
                    "text": "The north of Poland"
                  },
                  {
                    "key": "C",
                    "text": "Anywhere in Scandinavian countries"
                  },
                  {
                    "key": "D",
                    "text": "Most parts of the world"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                "keyVocab": [
                  "northernmost point (điểm cực bắc Trái Đất)",
                  "observation spot (địa điểm ngắm cảnh)"
                ]
              },
              {
                "id": 34,
                "audioText": "VSTEP Authentic Audio Track - Question 34",
                "question": "What is one of the stories developed by people before modern science?",
                "options": [
                  {
                    "key": "A",
                    "text": "The lights were caused by foxes."
                  },
                  {
                    "key": "B",
                    "text": "The lights were the dance of animals."
                  },
                  {
                    "key": "C",
                    "text": "The lights appeared when people died."
                  },
                  {
                    "key": "D",
                    "text": "The lights came from fires of northern gods."
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                "keyVocab": [
                  "folklore and myth (thần thoại dân gian)",
                  "foxes (loài cáo phát sáng)"
                ]
              },
              {
                "id": 35,
                "audioText": "VSTEP Authentic Audio Track - Question 35",
                "question": "Which of the following is NOT mentioned in this talk?",
                "options": [
                  {
                    "key": "A",
                    "text": "A description of the lights"
                  },
                  {
                    "key": "B",
                    "text": "The scientific explanation for the lights"
                  },
                  {
                    "key": "C",
                    "text": "The discovery of the lights"
                  },
                  {
                    "key": "D",
                    "text": "Beliefs about the lights"
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                "keyVocab": [
                  "unmentioned detail (chi tiết không được nhắc đến)",
                  "scientific explanation (giải thích khoa học)"
                ]
              }
            ]
          }
        ]
      }
    },
    {
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
              {
                "key": "A",
                "text": "ticket"
              },
              {
                "key": "B",
                "text": "camera"
              },
              {
                "key": "C",
                "text": "passport"
              },
              {
                "key": "D",
                "text": "bag"
              }
            ],
            "correctAnswer": "B",
            "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
            "keyVocab": [
              "forgotten item (vật phẩm bị bỏ quên)",
              "camera (máy ảnh)"
            ]
          },
          {
            "id": 2,
            "audioText": "VSTEP Authentic Audio Track - Question 2",
            "question": "What time does the train go?",
            "options": [
              {
                "key": "A",
                "text": "06.15"
              },
              {
                "key": "B",
                "text": "07.40"
              },
              {
                "key": "C",
                "text": "06.10"
              },
              {
                "key": "D",
                "text": "07.10"
              }
            ],
            "correctAnswer": "A",
            "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
            "keyVocab": [
              "train timetable (giờ tàu chạy)",
              "quarter past six (6 giờ 15)"
            ]
          },
          {
            "id": 3,
            "audioText": "VSTEP Authentic Audio Track - Question 3",
            "question": "How did the woman get to work?",
            "options": [
              {
                "key": "A",
                "text": "by bicycle"
              },
              {
                "key": "B",
                "text": "by bus"
              },
              {
                "key": "C",
                "text": "by car"
              },
              {
                "key": "D",
                "text": "by train"
              }
            ],
            "correctAnswer": "C",
            "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
            "keyVocab": [
              "means of transport (phương tiện đi lại)",
              "by car (bằng ô tô)"
            ]
          },
          {
            "id": 4,
            "audioText": "VSTEP Authentic Audio Track - Question 4",
            "question": "Where are the man's shoes?",
            "options": [
              {
                "key": "A",
                "text": "under the chair"
              },
              {
                "key": "B",
                "text": "by the television"
              },
              {
                "key": "C",
                "text": "by the door with the other rubbish"
              },
              {
                "key": "D",
                "text": "under the table"
              }
            ],
            "correctAnswer": "C",
            "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
            "keyVocab": [
              "shoes location (vị trí đôi giày)",
              "by the door (ngay cạnh cửa)"
            ]
          },
          {
            "id": 5,
            "audioText": "VSTEP Authentic Audio Track - Question 5",
            "question": "What will Paul get at the shop?",
            "options": [
              {
                "key": "A",
                "text": "mushrooms"
              },
              {
                "key": "B",
                "text": "onions"
              },
              {
                "key": "C",
                "text": "carrots"
              },
              {
                "key": "D",
                "text": "red pepper"
              }
            ],
            "correctAnswer": "C",
            "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
            "keyVocab": [
              "grocery shopping (mua đồ thực phẩm)",
              "carrots (cà rốt)"
            ]
          },
          {
            "id": 6,
            "audioText": "VSTEP Authentic Audio Track - Question 6",
            "question": "How were they told to do their homework?",
            "options": [
              {
                "key": "A",
                "text": "write it in the books"
              },
              {
                "key": "B",
                "text": "write it on paper"
              },
              {
                "key": "C",
                "text": "type it"
              },
              {
                "key": "D",
                "text": "email it"
              }
            ],
            "correctAnswer": "A",
            "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
            "keyVocab": [
              "homework submission (nộp bài tập về nhà)",
              "write in the books (viết trực tiếp vào sách)"
            ]
          },
          {
            "id": 7,
            "audioText": "VSTEP Authentic Audio Track - Question 7",
            "question": "What did Helen buy?",
            "options": [
              {
                "key": "A",
                "text": "gloves"
              },
              {
                "key": "B",
                "text": "sweater"
              },
              {
                "key": "C",
                "text": "socks"
              },
              {
                "key": "D",
                "text": "hat"
              }
            ],
            "correctAnswer": "B",
            "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
            "keyVocab": [
              "bought item (đồ đã mua)",
              "sweater (áo len)"
            ]
          },
          {
            "id": 8,
            "audioText": "VSTEP Authentic Audio Track - Question 8",
            "question": "How did the woman get to work today?",
            "options": [
              {
                "key": "A",
                "text": "by bus"
              },
              {
                "key": "B",
                "text": "a neighbour offered her a lift"
              },
              {
                "key": "C",
                "text": "by bike"
              },
              {
                "key": "D",
                "text": "walk"
              }
            ],
            "correctAnswer": "B",
            "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
            "keyVocab": [
              "offered a lift (được hàng xóm cho đi nhờ xe)",
              "commute (đi làm)"
            ]
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
                  {
                    "key": "A",
                    "text": "Noon to 6 PM"
                  },
                  {
                    "key": "B",
                    "text": "8:15 AM to 5 PM"
                  },
                  {
                    "key": "C",
                    "text": "7 AM to 12 PM"
                  },
                  {
                    "key": "D",
                    "text": "5 PM to 9 PM"
                  }
                ],
                "correctAnswer": "D",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                "keyVocab": [
                  "working schedule (lịch làm việc)",
                  "5 PM to 9 PM (5 giờ chiều đến 9 giờ tối)"
                ]
              },
              {
                "id": 10,
                "audioText": "VSTEP Authentic Audio Track - Question 10",
                "question": "On which two days does the speaker have the same schedule?",
                "options": [
                  {
                    "key": "A",
                    "text": "Monday and Tuesday"
                  },
                  {
                    "key": "B",
                    "text": "Wednesday and Thursday"
                  },
                  {
                    "key": "C",
                    "text": "Tuesday and Thursday"
                  },
                  {
                    "key": "D",
                    "text": "Thursday and Friday"
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                "keyVocab": [
                  "same schedule (trùng lịch làm việc)",
                  "Tuesday and Thursday (thứ Ba và thứ Năm)"
                ]
              },
              {
                "id": 11,
                "audioText": "VSTEP Authentic Audio Track - Question 11",
                "question": "What is the main purpose of the speaker's talk?",
                "options": [
                  {
                    "key": "A",
                    "text": "To discuss the importance of the job"
                  },
                  {
                    "key": "B",
                    "text": "To compare the work of doctors and dentists"
                  },
                  {
                    "key": "C",
                    "text": "To describe a typical week at work"
                  },
                  {
                    "key": "D",
                    "text": "To explain the details of a day at work"
                  }
                ],
                "correctAnswer": "D",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                "keyVocab": [
                  "main purpose (mục đích chính)",
                  "explain details (giải thích chi tiết)"
                ]
              },
              {
                "id": 12,
                "audioText": "VSTEP Authentic Audio Track - Question 12",
                "question": "What does the speaker think of her work?",
                "options": [
                  {
                    "key": "A",
                    "text": "She enjoys sleeping late every morning."
                  },
                  {
                    "key": "B",
                    "text": "It is difficult to describe her schedule."
                  },
                  {
                    "key": "C",
                    "text": "She enjoys helping the patients."
                  },
                  {
                    "key": "D",
                    "text": "It is too complicated to remember."
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": [
                  "opinion on work (đánh giá về công việc)",
                  "difficult to describe (khó mô tả rõ ràng)"
                ]
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
                  {
                    "key": "A",
                    "text": "a digital camera"
                  },
                  {
                    "key": "B",
                    "text": "DVD player"
                  },
                  {
                    "key": "C",
                    "text": "a TV"
                  },
                  {
                    "key": "D",
                    "text": "a stereo"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                "keyVocab": [
                  "unpurchased item (món đồ không mua)",
                  "digital camera (máy ảnh kỹ thuật số)"
                ]
              },
              {
                "id": 14,
                "audioText": "VSTEP Authentic Audio Track - Question 14",
                "question": "What is one reason to explain why the woman obtained a student credit card?",
                "options": [
                  {
                    "key": "A",
                    "text": "She wants to buy things at a discount using the card"
                  },
                  {
                    "key": "B",
                    "text": "She hopes to establish a good credit rating."
                  },
                  {
                    "key": "C",
                    "text": "She doesn't want to borrow from her parents."
                  },
                  {
                    "key": "D",
                    "text": "She can be financially independent."
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": [
                  "credit rating (điểm tín dụng)",
                  "financial record (hồ sơ tài chính)"
                ]
              },
              {
                "id": 15,
                "audioText": "VSTEP Authentic Audio Track - Question 15",
                "question": "What does the woman imply about how she plans on resolving her credit card problems?",
                "options": [
                  {
                    "key": "A",
                    "text": "She hopes that someone will give her the money."
                  },
                  {
                    "key": "B",
                    "text": "She plans on getting rid of her student credit cards."
                  },
                  {
                    "key": "C",
                    "text": "She will get a part-time job"
                  },
                  {
                    "key": "D",
                    "text": "She is going to return the items she purchased on the card."
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                "keyVocab": [
                  "debt resolution (giải quyết nợ nần)",
                  "financial relief (trợ giúp tài chính)"
                ]
              },
              {
                "id": 16,
                "audioText": "VSTEP Authentic Audio Track - Question 16",
                "question": "What is the man going to do for the woman to help her manage her money?",
                "options": [
                  {
                    "key": "A",
                    "text": "help her find a better paying job to cover her expenses"
                  },
                  {
                    "key": "B",
                    "text": "teach her how to prepare a financial management plan"
                  },
                  {
                    "key": "C",
                    "text": "show her how she can apply for low-interest student credit cards"
                  },
                  {
                    "key": "D",
                    "text": "teach her how to shop wisely."
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": [
                  "financial management plan (kế hoạch quản lý tài chính)",
                  "budgeting (lập ngân sách)"
                ]
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
                  {
                    "key": "A",
                    "text": "It is too expensive."
                  },
                  {
                    "key": "B",
                    "text": "He is not interested in ordering a burger."
                  },
                  {
                    "key": "C",
                    "text": "It is not tasty."
                  },
                  {
                    "key": "D",
                    "text": "He fears the food will make him sick."
                  }
                ],
                "correctAnswer": "D",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                "keyVocab": [
                  "fear illness (sợ bị đau bụng/ngộ độc)",
                  "refusal (từ chối món đề xuất)"
                ]
              },
              {
                "id": 18,
                "audioText": "VSTEP Authentic Audio Track - Question 18",
                "question": "How does the specialty drink get its name?",
                "options": [
                  {
                    "key": "A",
                    "text": "It contains a wide range of ingredients."
                  },
                  {
                    "key": "B",
                    "text": "It is prepared in the kitchen sink."
                  },
                  {
                    "key": "C",
                    "text": "It contains chicken soup."
                  },
                  {
                    "key": "D",
                    "text": "It comes in a very large cup."
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                "keyVocab": [
                  "specialty drink (đồ uống đặc biệt)",
                  "ingredients (nguyên liệu đa dạng)"
                ]
              },
              {
                "id": 19,
                "audioText": "VSTEP Authentic Audio Track - Question 19",
                "question": "Why was the man surprised by the price of his meal?",
                "options": [
                  {
                    "key": "A",
                    "text": "He thought the drink should have been included."
                  },
                  {
                    "key": "B",
                    "text": "He felt the meal was way overpriced."
                  },
                  {
                    "key": "C",
                    "text": "He was charged for two sandwiches instead of one."
                  },
                  {
                    "key": "D",
                    "text": "It was lower than he had expected."
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": [
                  "overpriced (quá đắt đỏ)",
                  "bill surprise (bất ngờ vì hóa đơn)"
                ]
              },
              {
                "id": 20,
                "audioText": "VSTEP Authentic Audio Track - Question 20",
                "question": "What does the customer decide to do at the end of the conversation?",
                "options": [
                  {
                    "key": "A",
                    "text": "He orders something from the restaurant menu."
                  },
                  {
                    "key": "B",
                    "text": "He plans to come back at weekend."
                  },
                  {
                    "key": "C",
                    "text": "He decides to look for another place to eat."
                  },
                  {
                    "key": "D",
                    "text": "He plans to come in a week when the prices are lower."
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                "keyVocab": [
                  "final decision (quyết định sau cùng)",
                  "order from menu (chọn món trong thực đơn)"
                ]
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
                  {
                    "key": "A",
                    "text": "a journalist"
                  },
                  {
                    "key": "B",
                    "text": "a musician"
                  },
                  {
                    "key": "C",
                    "text": "A director"
                  },
                  {
                    "key": "D",
                    "text": "A basketball player"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": [
                  "childhood dream (ước mơ thuở đi học)",
                  "musician (nhạc sĩ, nghệ sĩ biểu diễn)"
                ]
              },
              {
                "id": 22,
                "audioText": "VSTEP Authentic Audio Track - Question 22",
                "question": "What did Sandy study at university?",
                "options": [
                  {
                    "key": "A",
                    "text": "Math and Physics"
                  },
                  {
                    "key": "B",
                    "text": "film making"
                  },
                  {
                    "key": "C",
                    "text": "Technology"
                  },
                  {
                    "key": "D",
                    "text": "Art"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": [
                  "university major (chuyên ngành đại học)",
                  "film making (sản xuất phim ảnh)"
                ]
              },
              {
                "id": 23,
                "audioText": "VSTEP Authentic Audio Track - Question 23",
                "question": "How did Sandy get her first job as a video game writer?",
                "options": [
                  {
                    "key": "A",
                    "text": "She answered a job advertisement."
                  },
                  {
                    "key": "B",
                    "text": "She met someone at a conference."
                  },
                  {
                    "key": "C",
                    "text": "She sent some information about herself to a company."
                  },
                  {
                    "key": "D",
                    "text": "She was invited by a friend."
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                "keyVocab": [
                  "first job opportunity (cơ hội việc làm đầu tiên)",
                  "sent information / portfolio (gửi hồ sơ năng lực)"
                ]
              },
              {
                "id": 24,
                "audioText": "VSTEP Authentic Audio Track - Question 24",
                "question": "What does Sandy like best about being a video game writer?",
                "options": [
                  {
                    "key": "A",
                    "text": "the prizes she has won."
                  },
                  {
                    "key": "B",
                    "text": "the high salary"
                  },
                  {
                    "key": "C",
                    "text": "the people she works with"
                  },
                  {
                    "key": "D",
                    "text": "the great working condition"
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                "keyVocab": [
                  "favorite aspect (điều thích nhất)",
                  "team colleagues (đồng nghiệp cùng cộng tác)"
                ]
              },
              {
                "id": 25,
                "audioText": "VSTEP Authentic Audio Track - Question 25",
                "question": "What does Sandy dislike about being a video game writer?",
                "options": [
                  {
                    "key": "A",
                    "text": "She has to travel a lot."
                  },
                  {
                    "key": "B",
                    "text": "She has to work long hours."
                  },
                  {
                    "key": "C",
                    "text": "She often has to change her job."
                  },
                  {
                    "key": "D",
                    "text": "She has to live far from home."
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                "keyVocab": [
                  "job drawback (nhược điểm công việc)",
                  "travel a lot (phải di chuyển đi công tác nhiều)"
                ]
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
                  {
                    "key": "A",
                    "text": "a day"
                  },
                  {
                    "key": "B",
                    "text": "three days"
                  },
                  {
                    "key": "C",
                    "text": "five days"
                  },
                  {
                    "key": "D",
                    "text": "a week"
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                "keyVocab": [
                  "trek duration (thời lượng chuyến đi dã ngoại)",
                  "five days (5 ngày)"
                ]
              },
              {
                "id": 27,
                "audioText": "VSTEP Authentic Audio Track - Question 27",
                "question": "The trek aims to raise money for",
                "options": [
                  {
                    "key": "A",
                    "text": "health care"
                  },
                  {
                    "key": "B",
                    "text": "school education"
                  },
                  {
                    "key": "C",
                    "text": "hospital"
                  },
                  {
                    "key": "D",
                    "text": "the old people"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                "keyVocab": [
                  "fundraising goal (mục tiêu gây quỹ)",
                  "health care support (hỗ trợ chăm sóc sức khỏe)"
                ]
              },
              {
                "id": 28,
                "audioText": "VSTEP Authentic Audio Track - Question 28",
                "question": "The cost of the trek includes —",
                "options": [
                  {
                    "key": "A",
                    "text": "flight and airport taxes"
                  },
                  {
                    "key": "B",
                    "text": "medical provision and taxes"
                  },
                  {
                    "key": "C",
                    "text": "Foods"
                  },
                  {
                    "key": "D",
                    "text": "Food and accommodation"
                  }
                ],
                "correctAnswer": "D",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là D.",
                "keyVocab": [
                  "included expenses (chi phí bao gồm)",
                  "food and accommodation (ăn uống và chỗ ở)"
                ]
              },
              {
                "id": 29,
                "audioText": "VSTEP Authentic Audio Track - Question 29",
                "question": "Participants must",
                "options": [
                  {
                    "key": "A",
                    "text": "walk across a glacier."
                  },
                  {
                    "key": "B",
                    "text": "complete a fitness course."
                  },
                  {
                    "key": "C",
                    "text": "agree to raise funds for the charity."
                  },
                  {
                    "key": "D",
                    "text": "pay amount of money."
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là C.",
                "keyVocab": [
                  "mandatory requirement (yêu cầu bắt buộc)",
                  "agree to raise funds (cam kết quyên góp quỹ từ thiện)"
                ]
              },
              {
                "id": 30,
                "audioText": "VSTEP Authentic Audio Track - Question 30",
                "question": "The trip starts on",
                "options": [
                  {
                    "key": "A",
                    "text": "1st of November"
                  },
                  {
                    "key": "B",
                    "text": "3rd of November"
                  },
                  {
                    "key": "C",
                    "text": "13th of November"
                  },
                  {
                    "key": "D",
                    "text": "23th of November"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": [
                  "departure date (ngày khởi hành)",
                  "3rd of November (ngày 3 tháng 11)"
                ]
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
                  {
                    "key": "A",
                    "text": "next to the new road"
                  },
                  {
                    "key": "B",
                    "text": "in the cities."
                  },
                  {
                    "key": "C",
                    "text": "in the countryside."
                  },
                  {
                    "key": "D",
                    "text": "in isolated places."
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": [
                  "residential area (khu vực sinh sống)",
                  "in the cities (ở các đô thị, thành phố)"
                ]
              },
              {
                "id": 32,
                "audioText": "VSTEP Authentic Audio Track - Question 32",
                "question": "How long is the road?",
                "options": [
                  {
                    "key": "A",
                    "text": "600 kilometres"
                  },
                  {
                    "key": "B",
                    "text": "6,000 kilometers"
                  },
                  {
                    "key": "C",
                    "text": "60,000 kilometres"
                  },
                  {
                    "key": "D",
                    "text": "60 miles"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": [
                  "highway length (chiều dài tuyến đường cao tốc)",
                  "6,000 kilometers (6.000 km)"
                ]
              },
              {
                "id": 33,
                "audioText": "VSTEP Authentic Audio Track - Question 33",
                "question": "What can you see on the computers at the road's headquarters in Delhi?",
                "options": [
                  {
                    "key": "A",
                    "text": "small vehicles on the road"
                  },
                  {
                    "key": "B",
                    "text": "any vehicle and problems on the road"
                  },
                  {
                    "key": "C",
                    "text": "big vehicles on the road"
                  },
                  {
                    "key": "D",
                    "text": "serious problems on the road"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": [
                  "traffic surveillance (hệ thống giám sát giao thông)",
                  "vehicle tracking (theo dõi phương tiện và sự cố)"
                ]
              },
              {
                "id": 34,
                "audioText": "VSTEP Authentic Audio Track - Question 34",
                "question": "What types of transport can you see on the road?",
                "options": [
                  {
                    "key": "A",
                    "text": "all types"
                  },
                  {
                    "key": "B",
                    "text": "mostly cars"
                  },
                  {
                    "key": "C",
                    "text": "mostly motorbikes"
                  },
                  {
                    "key": "D",
                    "text": "the presenter doesn't say"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là A.",
                "keyVocab": [
                  "diversity of vehicles (đa dạng các loại xe)",
                  "all types (mọi loại phương tiện)"
                ]
              },
              {
                "id": 35,
                "audioText": "VSTEP Authentic Audio Track - Question 35",
                "question": "Why does the presenter describe the new road as a symbol of India's future?",
                "options": [
                  {
                    "key": "A",
                    "text": "because it's the same shape as the country of India."
                  },
                  {
                    "key": "B",
                    "text": "because it is modern, it is helping the economy grow."
                  },
                  {
                    "key": "C",
                    "text": "Because India has big population"
                  },
                  {
                    "key": "D",
                    "text": "Because India has lots of transport"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Căn cứ nội dung bài nghe và đáp án chuẩn Bộ đề thi ĐHQG. Đáp án đúng là B.",
                "keyVocab": [
                  "symbol of future (biểu tượng tương lai)",
                  "economic growth (thúc đẩy tăng trưởng kinh tế)"
                ]
              }
            ]
          }
        ]
      }
    },
    {
      "id": "set-1",
      "title": "Bộ Đề Luyện Nghe Số 01 (Toàn Diện 3 Phần - 35 Câu)",
      "badge": "Đề Tổng Hợp B1",
      "part1": {
        "title": "Part 1: 8 Thông Báo & Hướng Dẫn Ngắn",
        "description": "Nghe 8 đoạn thông báo/hướng dẫn ngắn và chọn 1 đáp án chính xác nhất.",
        "questions": [
          {
            "id": 1,
            "audioText": "Attention passengers on Flight VN 245 to Da Nang. Due to adverse weather conditions over the central region, departure has been rescheduled from 9:15 AM to 10:45 AM. Please remain in the departure lounge for further updates.",
            "question": "What is the new departure time for Flight VN 245?",
            "options": [
              {
                "key": "A",
                "text": "9:15 AM"
              },
              {
                "key": "B",
                "text": "10:00 AM"
              },
              {
                "key": "C",
                "text": "10:45 AM"
              },
              {
                "key": "D",
                "text": "11:15 AM"
              }
            ],
            "correctAnswer": "C",
            "explanation": "Thông báo nêu rõ: 'departure has been rescheduled from 9:15 AM to 10:45 AM'. 10:45 AM là giờ khởi hành mới.",
            "keyVocab": [
              "adverse weather (thời tiết xấu)",
              "rescheduled (đổi lịch)",
              "departure lounge (phòng chờ)"
            ]
          },
          {
            "id": 2,
            "audioText": "M: Hello, I'd like to sign up for the weekend swimming class. How much is the course fee?\nW: Normally it is eighty dollars per month, but if you register before this Friday, you get a twenty-dollar discount, so it will only be sixty dollars.",
            "question": "How much will the man pay if he registers before Friday?",
            "options": [
              {
                "key": "A",
                "text": "$80"
              },
              {
                "key": "B",
                "text": "$60"
              },
              {
                "key": "C",
                "text": "$20"
              },
              {
                "key": "D",
                "text": "$100"
              }
            ],
            "correctAnswer": "B",
            "explanation": "Giá gốc là $80, được giảm $20 nếu đăng ký trước thứ Sáu, nên giá phải trả là $60.",
            "keyVocab": [
              "course fee (học phí)",
              "discount (giảm giá)"
            ]
          },
          {
            "id": 3,
            "audioText": "Welcome to the Central Public Library. Please note that the second floor reference section is currently closed for ventilation repairs. Visitors seeking academic journals can access digital copies at the computer stations on the ground floor.",
            "question": "Where can visitors find academic journals today?",
            "options": [
              {
                "key": "A",
                "text": "On the second floor"
              },
              {
                "key": "B",
                "text": "In the reference section"
              },
              {
                "key": "C",
                "text": "On the ground floor computer stations"
              },
              {
                "key": "D",
                "text": "In the basement archive"
              }
            ],
            "correctAnswer": "C",
            "explanation": "Tầng 2 đang sửa chữa. Khách có thể đọc tạp chí học thuật ở các trạm máy tính tầng trệt (ground floor).",
            "keyVocab": [
              "reference section (khu tra cứu)",
              "ventilation (thông gió)",
              "ground floor (tầng trệt)"
            ]
          },
          {
            "id": 4,
            "audioText": "Good morning staff. The annual health check-up originally planned for Wednesday has been postponed to Friday morning because the medical team needs additional testing equipment. Please sign up for your preferred time slot at the reception desk.",
            "question": "When will the annual health check-up take place?",
            "options": [
              {
                "key": "A",
                "text": "On Wednesday morning"
              },
              {
                "key": "B",
                "text": "On Friday morning"
              },
              {
                "key": "C",
                "text": "Next Monday"
              },
              {
                "key": "D",
                "text": "This afternoon"
              }
            ],
            "correctAnswer": "B",
            "explanation": "Khám sức khỏe ban đầu dự định thứ Tư đã được hoãn sang sáng thứ Sáu ('postponed to Friday morning').",
            "keyVocab": [
              "health check-up (khám sức khỏe)",
              "postponed (hoãn lại)"
            ]
          },
          {
            "id": 5,
            "audioText": "M: Excuse me, does the number 14 bus stop at the City Art Museum?\nW: No, you need bus number 25 from platform B. The number 14 only goes as far as the central train station.",
            "question": "Which bus should the man take to the Art Museum?",
            "options": [
              {
                "key": "A",
                "text": "Bus number 14"
              },
              {
                "key": "B",
                "text": "Bus number 25"
              },
              {
                "key": "C",
                "text": "Bus number 40"
              },
              {
                "key": "D",
                "text": "The train"
              }
            ],
            "correctAnswer": "B",
            "explanation": "Người phụ nữ nói: 'you need bus number 25 from platform B'.",
            "keyVocab": [
              "platform (bến/sân ga)",
              "museum (bảo tàng)"
            ]
          },
          {
            "id": 6,
            "audioText": "Thank you for calling Blue Horizon Hotel. Our reservation office is open Monday through Saturday from 8:00 AM to 6:00 PM. For emergency room service inquiries during the weekend, please press 9 to speak with the front desk.",
            "question": "What should callers press for weekend emergency inquiries?",
            "options": [
              {
                "key": "A",
                "text": "Press 1"
              },
              {
                "key": "B",
                "text": "Press 6"
              },
              {
                "key": "C",
                "text": "Press 8"
              },
              {
                "key": "D",
                "text": "Press 9"
              }
            ],
            "correctAnswer": "D",
            "explanation": "Bấm số 9 để gặp lễ tân trong trường hợp khẩn cấp cuối tuần ('press 9 to speak with the front desk').",
            "keyVocab": [
              "reservation (đặt chỗ)",
              "front desk (quầy lễ tân)"
            ]
          },
          {
            "id": 7,
            "audioText": "M: Hi Sarah, are you joining us for lunch at the cafeteria?\nW: I'd love to, but I have to finish proofreading this quarterly report before the 2 PM meeting with the director.",
            "question": "Why is Sarah unable to join lunch?",
            "options": [
              {
                "key": "A",
                "text": "She is not hungry"
              },
              {
                "key": "B",
                "text": "She has to finish proofreading a report"
              },
              {
                "key": "C",
                "text": "She is meeting a client outside"
              },
              {
                "key": "D",
                "text": "She forgot her wallet"
              }
            ],
            "correctAnswer": "B",
            "explanation": "Sarah phải hoàn thành việc đọc và soát lỗi báo cáo quý trước cuộc họp lúc 2 giờ chiều.",
            "keyVocab": [
              "proofreading (đọc soát lỗi)",
              "quarterly report (báo cáo quý)"
            ]
          },
          {
            "id": 8,
            "audioText": "This is a special announcement for all park visitors. Due to scheduled maintenance on the main suspension bridge, the north hiking trail will be closed today. Visitors are advised to use the scenic lakeside path instead.",
            "question": "Which path are visitors advised to take today?",
            "options": [
              {
                "key": "A",
                "text": "The north hiking trail"
              },
              {
                "key": "B",
                "text": "The suspension bridge"
              },
              {
                "key": "C",
                "text": "The scenic lakeside path"
              },
              {
                "key": "D",
                "text": "The mountain highway"
              }
            ],
            "correctAnswer": "C",
            "explanation": "Khách được khuyên đi đường ven hồ tuyệt đẹp ('scenic lakeside path') vì đường leo núi phía bắc tạm đóng.",
            "keyVocab": [
              "suspension bridge (cầu treo)",
              "lakeside path (đường ven hồ)"
            ]
          }
        ]
      },
      "part2": {
        "title": "Part 2: 3 Đoạn Hội Thoại Đời Sống & Học Thuật (12 Câu)",
        "description": "Nghe 3 đoạn hội thoại (mỗi đoạn 4 câu hỏi) và chọn đáp án chính xác nhất.",
        "conversations": [
          {
            "id": 1,
            "title": "Hội thoại 1: Lên kế hoạch dự án nhóm tại trường đại học",
            "audioTranscript": "M: Hi Elena, have you started preparing our slides for the environmental economics presentation next Tuesday?\nW: Yes Mark, I drafted the introductory section on renewable subsidies. However, I am still waiting for the survey data from the rural solar initiative.\nM: Don't worry, David promised to email the finalized spreadsheet by tonight. He conducted interviews with sixty farming households across two provinces.\nW: That's reassuring! Once we get that data, we should structure our findings into three distinct phases: cost analysis, policy incentives, and long-term sustainability.\nM: Exactly. And let's schedule a dry run in classroom 302 on Friday afternoon so we can practice our timing within the fifteen-minute limit.",
            "questions": [
              {
                "id": 9,
                "question": "What is the main topic of the presentation?",
                "options": [
                  {
                    "key": "A",
                    "text": "Urban transportation models"
                  },
                  {
                    "key": "B",
                    "text": "Environmental economics and solar subsidies"
                  },
                  {
                    "key": "C",
                    "text": "Agricultural chemical safety"
                  },
                  {
                    "key": "D",
                    "text": "International student exchange"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Đề tài bài thuyết trình là kinh tế môi trường ('environmental economics presentation') và trợ cấp năng lượng tái tạo ('renewable subsidies')."
              },
              {
                "id": 10,
                "question": "How many farming households did David survey?",
                "options": [
                  {
                    "key": "A",
                    "text": "30 households"
                  },
                  {
                    "key": "B",
                    "text": "45 households"
                  },
                  {
                    "key": "C",
                    "text": "60 households"
                  },
                  {
                    "key": "D",
                    "text": "100 households"
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Mark nêu rõ: 'He conducted interviews with sixty farming households across two provinces'."
              },
              {
                "id": 11,
                "question": "What will the presentation structure be divided into?",
                "options": [
                  {
                    "key": "A",
                    "text": "Two sections"
                  },
                  {
                    "key": "B",
                    "text": "Three distinct phases"
                  },
                  {
                    "key": "C",
                    "text": "Four experimental groups"
                  },
                  {
                    "key": "D",
                    "text": "Five case studies"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Elena đề xuất chia thành 3 giai đoạn rõ rệt ('three distinct phases: cost analysis, policy incentives, and sustainability')."
              },
              {
                "id": 12,
                "question": "When and where will they practice their presentation?",
                "options": [
                  {
                    "key": "A",
                    "text": "Friday afternoon in classroom 302"
                  },
                  {
                    "key": "B",
                    "text": "Thursday morning in the library"
                  },
                  {
                    "key": "C",
                    "text": "Monday evening in the auditorium"
                  },
                  {
                    "key": "D",
                    "text": "Tuesday morning in room 101"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Mark đề xuất: 'let's schedule a dry run in classroom 302 on Friday afternoon'."
              }
            ]
          },
          {
            "id": 2,
            "title": "Hội thoại 2: Đăng ký câu lạc bộ thể thao & Sức khỏe",
            "audioTranscript": "W: Good afternoon, I am interested in joining the fitness center. Could you explain the different membership tiers?\nM: Certainly! We offer three main packages. The Silver package gives you access to the gym machines and locker rooms from 8 AM to 4 PM on weekdays. The Gold package includes unlimited hours plus all weekend group classes like yoga and pilates. Finally, the Platinum tier adds personal trainer sessions and spa access.\nW: The Gold package sounds ideal for my schedule since I work until 5 PM. How much is the monthly fee for Gold?\nM: It is fifty-five dollars per month on an annual contract, or sixty-five dollars if you prefer a month-to-month commitment. We also have a one-time registration fee of twenty dollars, but we waive that if you sign up today.\nW: Wonderful! I will take the annual Gold membership and pay by credit card.",
            "questions": [
              {
                "id": 13,
                "question": "What is included in the Silver membership tier?",
                "options": [
                  {
                    "key": "A",
                    "text": "Personal trainer and spa"
                  },
                  {
                    "key": "B",
                    "text": "Gym machines and locker rooms during off-peak weekday hours"
                  },
                  {
                    "key": "C",
                    "text": "Unlimited weekend yoga classes"
                  },
                  {
                    "key": "D",
                    "text": "Free protein shakes and towels"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Gói Silver cho phép dùng máy tập và phòng thay đồ từ 8h sáng đến 4h chiều các ngày trong tuần."
              },
              {
                "id": 14,
                "question": "Why does the woman choose the Gold tier instead of Silver?",
                "options": [
                  {
                    "key": "A",
                    "text": "She wants a personal trainer"
                  },
                  {
                    "key": "B",
                    "text": "She works until 5 PM and needs evening/weekend access"
                  },
                  {
                    "key": "C",
                    "text": "It is the cheapest package"
                  },
                  {
                    "key": "D",
                    "text": "Her friend recommended it"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Cô ấy làm việc đến 5 giờ chiều ('work until 5 PM') nên gói Silver đóng cửa lúc 4 PM không phù hợp."
              },
              {
                "id": 15,
                "question": "How much will the woman pay per month for her annual Gold contract?",
                "options": [
                  {
                    "key": "A",
                    "text": "$45"
                  },
                  {
                    "key": "B",
                    "text": "$55"
                  },
                  {
                    "key": "C",
                    "text": "$65"
                  },
                  {
                    "key": "D",
                    "text": "$75"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Gói Gold hợp đồng năm có giá $55/tháng ('fifty-five dollars per month on an annual contract')."
              },
              {
                "id": 16,
                "question": "What happens to the $20 registration fee if she registers today?",
                "options": [
                  {
                    "key": "A",
                    "text": "It is doubled"
                  },
                  {
                    "key": "B",
                    "text": "It is waived (free)"
                  },
                  {
                    "key": "C",
                    "text": "It must be paid in cash"
                  },
                  {
                    "key": "D",
                    "text": "It is donated to charity"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Phí đăng ký $20 được miễn phí nếu đăng ký ngay hôm nay ('we waive that if you sign up today')."
              }
            ]
          },
          {
            "id": 3,
            "title": "Hội thoại 3: Phỏng vấn xin việc vị trí Marketing Specialist",
            "audioTranscript": "M: Welcome Ms. Nguyen. Thank you for coming in today. Could you briefly summarize your experience with digital marketing campaigns?\nW: Thank you Mr. Clark. For the past three years, I have worked as a content strategist at Apex Media. My primary responsibility was managing social media advertising budgets and optimizing search engine marketing for retail clients.\nM: Impressive! Our company is currently expanding our overseas market in Southeast Asia. Have you handled cross-cultural campaigns before?\nW: Yes, in my previous role, I led a bilingual campaign targeted at English and Vietnamese speakers in Singapore, which boosted organic customer conversion by thirty-five percent.\nM: That aligns perfectly with our quarterly goals. If selected, would you be available to start next month?",
            "questions": [
              {
                "id": 17,
                "question": "How long has Ms. Nguyen worked at her previous company?",
                "options": [
                  {
                    "key": "A",
                    "text": "1 year"
                  },
                  {
                    "key": "B",
                    "text": "2 years"
                  },
                  {
                    "key": "C",
                    "text": "3 years"
                  },
                  {
                    "key": "D",
                    "text": "5 years"
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Cô Nguyễn nói: 'For the past three years, I have worked as a content strategist at Apex Media'."
              },
              {
                "id": 18,
                "question": "What was Ms. Nguyen's primary responsibility?",
                "options": [
                  {
                    "key": "A",
                    "text": "Managing accounting spreadsheets"
                  },
                  {
                    "key": "B",
                    "text": "Designing hardware components"
                  },
                  {
                    "key": "C",
                    "text": "Managing social media ads and search engine marketing"
                  },
                  {
                    "key": "D",
                    "text": "Conducting medical laboratory tests"
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Nhiệm vụ chính là quản lý quảng cáo mạng xã hội và tối ưu hóa công cụ tìm kiếm."
              },
              {
                "id": 19,
                "question": "What was the result of her bilingual campaign in Singapore?",
                "options": [
                  {
                    "key": "A",
                    "text": "It increased organic customer conversion by 35%"
                  },
                  {
                    "key": "B",
                    "text": "It caused budget deficits"
                  },
                  {
                    "key": "C",
                    "text": "It won an international design trophy"
                  },
                  {
                    "key": "D",
                    "text": "It recruited 50 new interns"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Chiến dịch giúp tăng tỷ lệ chuyển đổi khách hàng tự nhiên lên 35% ('boosted organic customer conversion by 35%')."
              },
              {
                "id": 20,
                "question": "When would the candidate be expected to start if hired?",
                "options": [
                  {
                    "key": "A",
                    "text": "Immediately today"
                  },
                  {
                    "key": "B",
                    "text": "Next month"
                  },
                  {
                    "key": "C",
                    "text": "Next year"
                  },
                  {
                    "key": "D",
                    "text": "In two weeks"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Người phỏng vấn hỏi: 'If selected, would you be available to start next month?'."
              }
            ]
          }
        ]
      },
      "part3": {
        "title": "Part 3: 3 Bài Thuyết Trình & Bài Giảng Học Thuật (15 Câu)",
        "description": "Nghe 3 bài nói chuyện học thuật (mỗi bài 5 câu hỏi) và chọn đáp án chính xác nhất.",
        "talks": [
          {
            "id": 1,
            "title": "Bài giảng 1: Tác động của Vi nhựa (Microplastics) đối với hệ sinh thái biển",
            "audioTranscript": "Good morning class. Today we will examine the escalating ecological crisis posed by microplastics in marine environments. Microplastics are synthetic polymer particles measuring less than five millimeters in diameter. They originate primarily from two sources: primary microplastics, which are deliberately manufactured for industrial abrasives and cosmetics, and secondary microplastics, which result from the mechanical breakdown and ultraviolet degradation of larger plastic debris like water bottles and synthetic fishing nets. Marine organisms, ranging from microscopic zooplankton to massive baleen whales, inadvertently ingest these buoyant particles. Recent chemical toxicology research indicates that ingested microplastics not only cause physical blockages in digestive tracts but also leach toxic additives, including phthalates and bisphenol A, directly into lipid tissues. Consequently, these persistent synthetic contaminants accumulate along the marine trophic food web, ultimately reaching human seafood consumers. Mitigating this global issue demands strict regulatory caps on single-use plastics and accelerated deployment of biodegradable polymer alternatives.",
            "questions": [
              {
                "id": 21,
                "question": "What is the maximum size of a microplastic particle?",
                "options": [
                  {
                    "key": "A",
                    "text": "Less than 1 millimeter"
                  },
                  {
                    "key": "B",
                    "text": "Less than 5 millimeters"
                  },
                  {
                    "key": "C",
                    "text": "Over 10 millimeters"
                  },
                  {
                    "key": "D",
                    "text": "Around 50 millimeters"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Bài giảng định nghĩa: 'Microplastics are synthetic polymer particles measuring less than five millimeters in diameter'."
              },
              {
                "id": 22,
                "question": "How are secondary microplastics formed?",
                "options": [
                  {
                    "key": "A",
                    "text": "Directly manufactured in cosmetic factories"
                  },
                  {
                    "key": "B",
                    "text": "Through mechanical breakdown and UV degradation of larger debris"
                  },
                  {
                    "key": "C",
                    "text": "Synthesized by deep-sea volcanic eruptions"
                  },
                  {
                    "key": "D",
                    "text": "Secreted by marine algae"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Vi nhựa thứ cấp sinh ra từ sự phân rã cơ học và tia cực tím của rác thải nhựa lớn hơn."
              },
              {
                "id": 23,
                "question": "What physical problem do ingested microplastics cause in marine organisms?",
                "options": [
                  {
                    "key": "A",
                    "text": "Vision impairment"
                  },
                  {
                    "key": "B",
                    "text": "Blockages in digestive tracts"
                  },
                  {
                    "key": "C",
                    "text": "Bone fractures"
                  },
                  {
                    "key": "D",
                    "text": "Loss of hearing"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Hạt vi nhựa gây tắc nghẽn đường tiêu hóa ('cause physical blockages in digestive tracts')."
              },
              {
                "id": 24,
                "question": "Which chemical compounds leach into the tissues of marine life?",
                "options": [
                  {
                    "key": "A",
                    "text": "Vitamin C and calcium"
                  },
                  {
                    "key": "B",
                    "text": "Phthalates and bisphenol A"
                  },
                  {
                    "key": "C",
                    "text": "Nitrogen and potassium"
                  },
                  {
                    "key": "D",
                    "text": "Natural glucose"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Vi nhựa tiết ra các chất phụ gia độc hại như phthalates và bisphenol A ('leach toxic additives including phthalates and bisphenol A')."
              },
              {
                "id": 25,
                "question": "What long-term solution does the professor recommend?",
                "options": [
                  {
                    "key": "A",
                    "text": "Banning all commercial fishing forever"
                  },
                  {
                    "key": "B",
                    "text": "Strict caps on single-use plastics and deployment of biodegradable polymers"
                  },
                  {
                    "key": "C",
                    "text": "Dumping sand into the ocean"
                  },
                  {
                    "key": "D",
                    "text": "Ignoring the issue"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Giải pháp là giới hạn đồ nhựa dùng 1 lần và thúc đẩy polime sinh học phân hủy ('strict regulatory caps on single-use plastics and deployment of biodegradable polymer alternatives')."
              }
            ]
          },
          {
            "id": 2,
            "title": "Bài thuyết trình 2: Lịch sử và Sự phát triển của Đồng hồ Đo thời gian",
            "audioTranscript": "Welcome museum visitors. In today's gallery tour, we will trace the evolution of human chronometry from rudimentary celestial tracking to modern atomic precision. Ancient civilizations initially relied on shadow sticks and sundials, which were highly effective during sunny daylight hours but useless at night or during overcast weather. To overcome this limitation, ancient Egyptians and Greeks engineered water clocks, known as clepsydras, which measured elapsed duration by the calibrated flow of liquid through a tiny orifice. The fourteenth century witnessed a monumental paradigm shift with the invention of mechanical escapement clocks in European monasteries. These devices used falling weights and oscillating balances to ring bells at fixed prayer intervals. In the seventeenth century, Christiaan Huygens patented the pendulum clock, dramatically reducing daily error margins from several minutes to just a few seconds. Today, atomic clocks utilizing the natural resonant frequency of cesium-133 atoms provide synchronization for global satellite navigation networks with an accuracy within one second every hundred million years.",
            "questions": [
              {
                "id": 26,
                "question": "What was the main drawback of ancient sundials?",
                "options": [
                  {
                    "key": "A",
                    "text": "They were too heavy to move"
                  },
                  {
                    "key": "B",
                    "text": "They could not function at night or in cloudy weather"
                  },
                  {
                    "key": "C",
                    "text": "They required electricity"
                  },
                  {
                    "key": "D",
                    "text": "They produced loud noise"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Nhược điểm của đồng hồ mặt trời là vô dụng vào ban đêm hoặc khi trời nhiều mây ('useless at night or during overcast weather')."
              },
              {
                "id": 27,
                "question": "How did water clocks (clepsydras) measure time?",
                "options": [
                  {
                    "key": "A",
                    "text": "By burning incense candles"
                  },
                  {
                    "key": "B",
                    "text": "By the calibrated flow of liquid through an opening"
                  },
                  {
                    "key": "C",
                    "text": "By tracking ocean tides"
                  },
                  {
                    "key": "D",
                    "text": "By freezing water in cups"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Đồng hồ nước đo thời gian qua dòng chảy chuẩn hóa của chất lỏng qua một lỗ nhỏ."
              },
              {
                "id": 28,
                "question": "Why were mechanical clocks originally built in medieval European monasteries?",
                "options": [
                  {
                    "key": "A",
                    "text": "To calculate bank interest rates"
                  },
                  {
                    "key": "B",
                    "text": "To ring bells at regular prayer intervals"
                  },
                  {
                    "key": "C",
                    "text": "To predict volcanic activity"
                  },
                  {
                    "key": "D",
                    "text": "To measure horse racing speeds"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Đồng hồ cơ khí thời kỳ đầu dùng để rung chuông báo giờ cầu nguyện trong tu viện ('to ring bells at fixed prayer intervals')."
              },
              {
                "id": 29,
                "question": "Who invented the pendulum clock in the seventeenth century?",
                "options": [
                  {
                    "key": "A",
                    "text": "Isaac Newton"
                  },
                  {
                    "key": "B",
                    "text": "Christiaan Huygens"
                  },
                  {
                    "key": "C",
                    "text": "Galileo Galilei"
                  },
                  {
                    "key": "D",
                    "text": "Leonardo da Vinci"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Christiaan Huygens đã được cấp bằng sáng chế cho đồng hồ con lắc ('Christiaan Huygens patented the pendulum clock')."
              },
              {
                "id": 30,
                "question": "What element is used in modern atomic clocks for satellite synchronization?",
                "options": [
                  {
                    "key": "A",
                    "text": "Uranium-235"
                  },
                  {
                    "key": "B",
                    "text": "Cesium-133"
                  },
                  {
                    "key": "C",
                    "text": "Carbon-14"
                  },
                  {
                    "key": "D",
                    "text": "Silicon-28"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Đồng hồ nguyên tử hiện đại sử dụng tần số cộng hưởng của nguyên tử Cesium-133 ('utilizing the resonant frequency of cesium-133 atoms')."
              }
            ]
          },
          {
            "id": 3,
            "title": "Bài giảng 3: Tâm lý học hành vi và Hiệu ứng Đám đông (Social Proof & Group Dynamics)",
            "audioTranscript": "In this sociology seminar, we will dissect the psychological mechanisms underlying social proof and conformity bias. Coined by behavioral researcher Robert Cialdini, social proof describes the pervasive psychological tendency where individuals look to the behaviors and choices of others to guide their own actions, especially during moments of ambiguity or perceived risk. Solomon Asch's landmark 1951 conformity experiments famously demonstrated that approximately seventy-five percent of participants conformed to an obviously incorrect group consensus at least once during visual judgment tasks. In modern consumer behavior, social proof is heavily exploited through e-commerce star ratings, influencer endorsements, and real-time popularity counters displaying phrases like 'three hundred people booked this hotel today'. While social proof serves an adaptive evolutionary purpose by facilitating rapid decision-making in complex environments, it also poses severe vulnerabilities, including financial asset bubbles, viral misinformation propagation, and the bystander apathy effect in emergency situations.",
            "questions": [
              {
                "id": 31,
                "question": "Who coined the psychological term 'social proof'?",
                "options": [
                  {
                    "key": "A",
                    "text": "Sigmund Freud"
                  },
                  {
                    "key": "B",
                    "text": "Robert Cialdini"
                  },
                  {
                    "key": "C",
                    "text": "B.F. Skinner"
                  },
                  {
                    "key": "D",
                    "text": "Ivan Pavlov"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Thuật ngữ 'social proof' do nhà nghiên cứu hành vi Robert Cialdini đặt ra ('Coined by behavioral researcher Robert Cialdini')."
              },
              {
                "id": 32,
                "question": "When are individuals most likely to rely on social proof?",
                "options": [
                  {
                    "key": "A",
                    "text": "When they are 100% certain about the facts"
                  },
                  {
                    "key": "B",
                    "text": "During moments of ambiguity or perceived risk"
                  },
                  {
                    "key": "C",
                    "text": "When they are completely alone in the forest"
                  },
                  {
                    "key": "D",
                    "text": "When doing simple basic math"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Mọi người có xu hướng nhìn theo người khác nhiều nhất trong các tình huống mơ hồ hoặc rủi ro ('during moments of ambiguity or perceived risk')."
              },
              {
                "id": 33,
                "question": "What percentage of participants conformed in Solomon Asch's experiment?",
                "options": [
                  {
                    "key": "A",
                    "text": "Around 25%"
                  },
                  {
                    "key": "B",
                    "text": "Around 50%"
                  },
                  {
                    "key": "C",
                    "text": "Approximately 75%"
                  },
                  {
                    "key": "D",
                    "text": "100%"
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Khoảng 75% người tham gia đã thuận theo ý kiến sai của nhóm ít nhất 1 lần ('approximately seventy-five percent of participants conformed')."
              },
              {
                "id": 34,
                "question": "How do e-commerce platforms utilize social proof?",
                "options": [
                  {
                    "key": "A",
                    "text": "By hiding all customer reviews"
                  },
                  {
                    "key": "B",
                    "text": "Through star ratings and popularity counters"
                  },
                  {
                    "key": "C",
                    "text": "By increasing shipping costs secretly"
                  },
                  {
                    "key": "D",
                    "text": "By closing their websites on weekends"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Các sàn thương mại điện tử dùng đánh giá sao và đếm số lượng người mua ('through e-commerce star ratings and popularity counters')."
              },
              {
                "id": 35,
                "question": "What is one negative consequence of social proof mentioned in the lecture?",
                "options": [
                  {
                    "key": "A",
                    "text": "Longer human lifespan"
                  },
                  {
                    "key": "B",
                    "text": "Faster internet connection"
                  },
                  {
                    "key": "C",
                    "text": "Financial asset bubbles and viral misinformation"
                  },
                  {
                    "key": "D",
                    "text": "Improved memory retention"
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Hậu quả tiêu cực gồm bong bóng tài chính và lan truyền tin giả ('financial asset bubbles, viral misinformation propagation')."
              }
            ]
          }
        ]
      }
    },
    {
      "id": "set-2",
      "title": "Bộ Đề Luyện Nghe Số 02 (Đời Sống & Dịch Vụ Công Cộng - 35 Câu)",
      "badge": "Đề Luyện Chuyên Đề 2",
      "part1": {
        "title": "Part 1: 8 Thông Báo Đời Sống & Thông Báo Công Cộng",
        "description": "Nghe 8 đoạn hội thoại/thông báo ngắn và chọn 1 đáp án chính xác nhất.",
        "questions": [
          {
            "id": 1,
            "audioText": "Attention shoppers at City Mart. We have a special flash sale in the organic bakery aisle. For the next thirty minutes only, all freshly baked whole wheat breads and fruit pastries are buy one get one free. Please head to aisle four.",
            "question": "How long will the flash sale last?",
            "options": [
              {
                "key": "A",
                "text": "15 minutes"
              },
              {
                "key": "B",
                "text": "30 minutes"
              },
              {
                "key": "C",
                "text": "45 minutes"
              },
              {
                "key": "D",
                "text": "60 minutes"
              }
            ],
            "correctAnswer": "B",
            "explanation": "Thông báo nêu: 'For the next thirty minutes only'.",
            "keyVocab": [
              "flash sale (giảm giá chớp nhoáng)",
              "aisle (lối đi giữa các quầy)"
            ]
          },
          {
            "id": 2,
            "audioText": "M: Hi, I'd like to book an appointment with Dr. Robert for my dental check-up.\nW: Dr. Robert is fully booked this Thursday, but he has an opening on Friday at 3:30 PM or Saturday morning at 9:00 AM.\nM: Friday at 3:30 PM works great for me.",
            "question": "When is the man's dental appointment?",
            "options": [
              {
                "key": "A",
                "text": "Thursday morning"
              },
              {
                "key": "B",
                "text": "Friday at 3:30 PM"
              },
              {
                "key": "C",
                "text": "Saturday at 9:00 AM"
              },
              {
                "key": "D",
                "text": "Sunday afternoon"
              }
            ],
            "correctAnswer": "B",
            "explanation": "Người đàn ông chọn: 'Friday at 3:30 PM works great for me'.",
            "keyVocab": [
              "appointment (cuộc hẹn)",
              "dental check-up (khám răng)"
            ]
          },
          {
            "id": 3,
            "audioText": "Good evening museum guests. The photography exhibition on the third floor will be closing in fifteen minutes. Please make your way toward the main exit on the ground level and remember to collect your belongings from the coat check.",
            "question": "What should visitors do before leaving?",
            "options": [
              {
                "key": "A",
                "text": "Purchase photography books"
              },
              {
                "key": "B",
                "text": "Collect their belongings from the coat check"
              },
              {
                "key": "C",
                "text": "Take more pictures on the third floor"
              },
              {
                "key": "D",
                "text": "Sign the visitor guestbook"
              }
            ],
            "correctAnswer": "B",
            "explanation": "Khách được nhắc lấy đồ gửi tại quầy gửi áo khoác ('collect your belongings from the coat check').",
            "keyVocab": [
              "exhibition (triển lãm)",
              "coat check (quầy gửi đồ/áo khoác)"
            ]
          },
          {
            "id": 4,
            "audioText": "M: Excuse me, can I return this jacket? The size is too small.\nW: Yes, of course. As long as you have the original receipt and the price tag is still attached, we can issue a full refund within thirty days.",
            "question": "What is required to receive a full refund?",
            "options": [
              {
                "key": "A",
                "text": "A membership card"
              },
              {
                "key": "B",
                "text": "The original receipt and attached price tag"
              },
              {
                "key": "C",
                "text": "Cash payment only"
              },
              {
                "key": "D",
                "text": "The store manager's signature"
              }
            ],
            "correctAnswer": "B",
            "explanation": "Cần có hóa đơn gốc và mác giá còn nguyên ('original receipt and price tag is still attached').",
            "keyVocab": [
              "receipt (hóa đơn)",
              "refund (hoàn tiền)"
            ]
          },
          {
            "id": 5,
            "audioText": "Passengers traveling on the Express Train to Oxford, please be advised that train number 88 will depart from Track 4 instead of Track 2 due to track maintenance. Please board through the glass doors on your right.",
            "question": "Which track will train number 88 depart from?",
            "options": [
              {
                "key": "A",
                "text": "Track 1"
              },
              {
                "key": "B",
                "text": "Track 2"
              },
              {
                "key": "C",
                "text": "Track 3"
              },
              {
                "key": "D",
                "text": "Track 4"
              }
            ],
            "correctAnswer": "D",
            "explanation": "Tàu chuyển sang khởi hành từ đường ray số 4 ('depart from Track 4 instead of Track 2').",
            "keyVocab": [
              "track (đường ray)",
              "maintenance (bảo trì)"
            ]
          },
          {
            "id": 6,
            "audioText": "Thank you for contacting Green Valley Water Company. To report a water leakage in your neighborhood, press 1. For billing and account inquiries, press 2. To speak with our customer support representative, stay on the line.",
            "question": "What should callers do to inquire about their monthly bill?",
            "options": [
              {
                "key": "A",
                "text": "Press 1"
              },
              {
                "key": "B",
                "text": "Press 2"
              },
              {
                "key": "C",
                "text": "Press 0"
              },
              {
                "key": "D",
                "text": "Stay on the line"
              }
            ],
            "correctAnswer": "B",
            "explanation": "Hỏi về hóa đơn thì bấm phím 2 ('For billing and account inquiries, press 2').",
            "keyVocab": [
              "billing (thanh toán hóa đơn)",
              "leakage (rò rỉ nước)"
            ]
          },
          {
            "id": 7,
            "audioText": "M: Linda, are you coming to the department dinner at the Italian bistro tonight?\nW: Unfortunately no. My car broke down on the highway this morning, and I have to pick it up from the auto repair shop before 6:30 PM.",
            "question": "Why can't Linda attend the dinner?",
            "options": [
              {
                "key": "A",
                "text": "She has to work late"
              },
              {
                "key": "B",
                "text": "She must pick up her repaired car"
              },
              {
                "key": "C",
                "text": "She dislikes Italian food"
              },
              {
                "key": "D",
                "text": "She is feeling sick"
              }
            ],
            "correctAnswer": "B",
            "explanation": "Xe cô bị hỏng và phải đi lấy xe tại tiệm sửa chữa ('pick it up from the auto repair shop').",
            "keyVocab": [
              "broke down (bị hỏng)",
              "auto repair shop (tiệm sửa xe)"
            ]
          },
          {
            "id": 8,
            "audioText": "This is a safety reminder from the building administration. The fire alarm system will undergo testing tomorrow between 10:00 AM and 11:30 AM. The bells may ring intermittently. No evacuation is required during this period.",
            "question": "What should tenants do when the alarm rings tomorrow morning?",
            "options": [
              {
                "key": "A",
                "text": "Evacuate the building immediately"
              },
              {
                "key": "B",
                "text": "Call the fire department"
              },
              {
                "key": "C",
                "text": "Remain inside as no evacuation is needed"
              },
              {
                "key": "D",
                "text": "Turn off the building power"
              }
            ],
            "correctAnswer": "C",
            "explanation": "Đây chỉ là kiểm tra chuông báo cháy, không cần sơ tán ('No evacuation is required').",
            "keyVocab": [
              "fire alarm (chuông báo cháy)",
              "evacuation (sơ tán)"
            ]
          }
        ]
      },
      "part2": {
        "title": "Part 2: 3 Đoạn Hội Thoại Đời Sống & Du Lịch (12 Câu)",
        "description": "Nghe 3 đoạn hội thoại (mỗi đoạn 4 câu hỏi) và chọn đáp án chính xác nhất.",
        "conversations": [
          {
            "id": 1,
            "title": "Hội thoại 1: Đặt tour du lịch sinh thái tại Hội An",
            "audioTranscript": "M: Good morning, I would like to book an eco-tour for a family of four this weekend.\nW: Welcome! We have two fantastic options. The Coconut Forest boat tour includes basket boat rowing and crab fishing for thirty dollars per person. The Countryside Cycling tour takes you through organic vegetable villages and rice paddies with a cooking class for forty-five dollars per person.\nM: My children love cooking! Does the cycling tour provide children's bicycles and safety helmets?\nW: Yes, we provide full safety gear and helmets for all ages. The tour starts at 8:00 AM from our central office and concludes at 1:30 PM with a complimentary traditional lunch.\nM: Perfect, let's book the Countryside Cycling tour for four people this Saturday.",
            "questions": [
              {
                "id": 9,
                "question": "How many people are in the man's family?",
                "options": [
                  {
                    "key": "A",
                    "text": "2 people"
                  },
                  {
                    "key": "B",
                    "text": "3 people"
                  },
                  {
                    "key": "C",
                    "text": "4 people"
                  },
                  {
                    "key": "D",
                    "text": "5 people"
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Người đàn ông nói: 'book an eco-tour for a family of four'."
              },
              {
                "id": 10,
                "question": "What activities are included in the Countryside Cycling tour?",
                "options": [
                  {
                    "key": "A",
                    "text": "Scuba diving and sailing"
                  },
                  {
                    "key": "B",
                    "text": "Visiting vegetable villages, rice paddies, and a cooking class"
                  },
                  {
                    "key": "C",
                    "text": "Mountain climbing and camping"
                  },
                  {
                    "key": "D",
                    "text": "Shopping at luxury malls"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Tour đạp xe đi qua làng rau hữu cơ, cánh đồng lúa và lớp học nấu ăn."
              },
              {
                "id": 11,
                "question": "What time does the tour conclude?",
                "options": [
                  {
                    "key": "A",
                    "text": "11:30 AM"
                  },
                  {
                    "key": "B",
                    "text": "1:30 PM"
                  },
                  {
                    "key": "C",
                    "text": "3:00 PM"
                  },
                  {
                    "key": "D",
                    "text": "5:00 PM"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Tour kết thúc lúc 1:30 chiều ('concludes at 1:30 PM with a complimentary lunch')."
              },
              {
                "id": 12,
                "question": "How much does the cycling tour cost per person?",
                "options": [
                  {
                    "key": "A",
                    "text": "$30"
                  },
                  {
                    "key": "B",
                    "text": "$45"
                  },
                  {
                    "key": "C",
                    "text": "$60"
                  },
                  {
                    "key": "D",
                    "text": "$75"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Giá tour đạp xe là $45/người ('forty-five dollars per person')."
              }
            ]
          },
          {
            "id": 2,
            "title": "Hội thoại 2: Thuê căn hộ và thảo luận hợp đồng",
            "audioTranscript": "W: Hi Mr. Davis, thank you for showing me this two-bedroom apartment. The natural light in the living room is wonderful.\nM: Thank you Ms. Peterson. As you can see, the unit has been recently renovated with new hardwood flooring and energy-efficient kitchen appliances.\nW: How much is the monthly rent, and does it include utility charges?\nM: The rent is eight hundred and fifty dollars per month. Water and high-speed internet are included, but electricity is metered separately and billed monthly.\nW: That sounds reasonable. What is the required security deposit?\nM: We require one month's rent as a refundable security deposit upon signing a twelve-month lease.",
            "questions": [
              {
                "id": 13,
                "question": "What recent renovations were made to the apartment?",
                "options": [
                  {
                    "key": "A",
                    "text": "A private swimming pool"
                  },
                  {
                    "key": "B",
                    "text": "New hardwood flooring and kitchen appliances"
                  },
                  {
                    "key": "C",
                    "text": "A rooftop helipad"
                  },
                  {
                    "key": "D",
                    "text": "Soundproof recording studio"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Căn hộ được nâng cấp sàn gỗ mới và thiết bị nhà bếp tiết kiệm điện."
              },
              {
                "id": 14,
                "question": "How much is the monthly rent?",
                "options": [
                  {
                    "key": "A",
                    "text": "$700"
                  },
                  {
                    "key": "B",
                    "text": "$850"
                  },
                  {
                    "key": "C",
                    "text": "$950"
                  },
                  {
                    "key": "D",
                    "text": "$1,000"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Tiền thuê là $850/tháng ('eight hundred and fifty dollars per month')."
              },
              {
                "id": 15,
                "question": "Which utility is NOT included in the monthly rent?",
                "options": [
                  {
                    "key": "A",
                    "text": "Water"
                  },
                  {
                    "key": "B",
                    "text": "High-speed internet"
                  },
                  {
                    "key": "C",
                    "text": "Electricity"
                  },
                  {
                    "key": "D",
                    "text": "Trash collection"
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Tiền điện tính theo công tơ riêng và không bao gồm trong tiền thuê ('electricity is metered separately')."
              },
              {
                "id": 16,
                "question": "How much is the security deposit?",
                "options": [
                  {
                    "key": "A",
                    "text": "Two months' rent"
                  },
                  {
                    "key": "B",
                    "text": "One month's rent ($850)"
                  },
                  {
                    "key": "C",
                    "text": "Half a month's rent"
                  },
                  {
                    "key": "D",
                    "text": "Free"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Tiền cọc là 1 tháng tiền thuê ('one month's rent as a refundable security deposit')."
              }
            ]
          },
          {
            "id": 3,
            "title": "Hội thoại 3: Mua sắm máy tính xách tay cho sinh viên",
            "audioTranscript": "M: Hello, I am looking for a lightweight laptop for university coursework and occasional video editing. What would you recommend?\nW: I suggest the UltraBook Pro 14. It weighs only 1.2 kilograms, features an eight-core processor, sixteen gigabytes of RAM, and has a battery life of up to fourteen hours.\nM: That sounds powerful! Does it come with pre-installed office software and a manufacturer warranty?\nW: Yes, it includes a one-year student subscription to Microsoft 365 and a two-year international hardware warranty. The standard price is nine hundred and ninety dollars, but we offer a ten percent student discount with a valid university ID card.\nM: That's a great deal. I have my student ID right here.",
            "questions": [
              {
                "id": 17,
                "question": "Why is the customer purchasing a laptop?",
                "options": [
                  {
                    "key": "A",
                    "text": "For professional cryptocurrency mining"
                  },
                  {
                    "key": "B",
                    "text": "For university coursework and video editing"
                  },
                  {
                    "key": "C",
                    "text": "To sell it to a neighbor"
                  },
                  {
                    "key": "D",
                    "text": "For store display"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Khách hàng mua máy để học đại học và chỉnh sửa video ('university coursework and occasional video editing')."
              },
              {
                "id": 18,
                "question": "How heavy is the UltraBook Pro 14?",
                "options": [
                  {
                    "key": "A",
                    "text": "1.2 kilograms"
                  },
                  {
                    "key": "B",
                    "text": "2.5 kilograms"
                  },
                  {
                    "key": "C",
                    "text": "3.0 kilograms"
                  },
                  {
                    "key": "D",
                    "text": "4.1 kilograms"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Máy nặng chỉ 1.2 kg ('weighs only 1.2 kilograms')."
              },
              {
                "id": 19,
                "question": "How long is the international hardware warranty?",
                "options": [
                  {
                    "key": "A",
                    "text": "6 months"
                  },
                  {
                    "key": "B",
                    "text": "1 year"
                  },
                  {
                    "key": "C",
                    "text": "2 years"
                  },
                  {
                    "key": "D",
                    "text": "5 years"
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Bảo hành phần cứng 2 năm ('two-year international hardware warranty')."
              },
              {
                "id": 20,
                "question": "What discount does the store offer for students?",
                "options": [
                  {
                    "key": "A",
                    "text": "5% discount"
                  },
                  {
                    "key": "B",
                    "text": "10% discount"
                  },
                  {
                    "key": "C",
                    "text": "20% discount"
                  },
                  {
                    "key": "D",
                    "text": "Free laptop bag"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Giảm giá 10% cho sinh viên có thẻ ('ten percent student discount with a valid university ID card')."
              }
            ]
          }
        ]
      },
      "part3": {
        "title": "Part 3: 3 Bài Giảng Khoa Học, Văn Hóa & Môi Trường (15 Câu)",
        "description": "Nghe 3 bài giảng khoa học (mỗi bài 5 câu hỏi) và chọn đáp án chính xác nhất.",
        "talks": [
          {
            "id": 1,
            "title": "Bài giảng 1: Sự chuyển dịch sang Năng lượng Tái tạo Toàn cầu",
            "audioTranscript": "Good morning students. Today we will analyze the global transition from fossil fuels to renewable energy infrastructure. Over the past twenty years, the levelized cost of solar photovoltaic electricity has plummeted by over eighty-five percent, making it cost-competitive with traditional coal-fired power plants. Similarly, advancements in offshore wind turbine engineering—such as taller masts and larger aerodynamic blades—have dramatically expanded capacity factors in northern Europe and East Asia. However, the primary bottleneck in achieving one hundred percent renewable penetration remains grid intermittency. Because solar and wind generation fluctuate based on diurnal and atmospheric conditions, utility companies must invest heavily in large-scale energy storage systems. Utility-scale lithium-ion battery banks, pumped hydro storage, and green hydrogen synthesis are currently the three most viable technologies being deployed to stabilize modern electrical grids during peak demand periods.",
            "questions": [
              {
                "id": 21,
                "question": "By how much has the cost of solar photovoltaic electricity decreased over the past 20 years?",
                "options": [
                  {
                    "key": "A",
                    "text": "About 25%"
                  },
                  {
                    "key": "B",
                    "text": "About 50%"
                  },
                  {
                    "key": "C",
                    "text": "Over 85%"
                  },
                  {
                    "key": "D",
                    "text": "It has doubled"
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Chi phí điện mặt trời giảm hơn 85% ('plummeted by over eighty-five percent')."
              },
              {
                "id": 22,
                "question": "What is the primary obstacle to achieving 100% renewable energy penetration?",
                "options": [
                  {
                    "key": "A",
                    "text": "Lack of sunlight in summer"
                  },
                  {
                    "key": "B",
                    "text": "Grid intermittency due to weather fluctuations"
                  },
                  {
                    "key": "C",
                    "text": "Total absence of wind worldwide"
                  },
                  {
                    "key": "D",
                    "text": "Government bans on solar panels"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Rào cản chính là tính gián đoạn của nguồn điện ('grid intermittency due to atmospheric conditions')."
              },
              {
                "id": 23,
                "question": "Which engineering advancements improved offshore wind turbine efficiency?",
                "options": [
                  {
                    "key": "A",
                    "text": "Wooden masts and plastic cables"
                  },
                  {
                    "key": "B",
                    "text": "Taller masts and larger aerodynamic blades"
                  },
                  {
                    "key": "C",
                    "text": "Small handheld generators"
                  },
                  {
                    "key": "D",
                    "text": "Diesel auxiliary engines"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Cải tiến gồm cột tháp cao hơn và cánh quạt khí động học lớn hơn."
              },
              {
                "id": 24,
                "question": "Which three storage technologies are being deployed to stabilize electrical grids?",
                "options": [
                  {
                    "key": "A",
                    "text": "Coal bins, oil barrels, and wood piles"
                  },
                  {
                    "key": "B",
                    "text": "Lithium-ion batteries, pumped hydro, and green hydrogen"
                  },
                  {
                    "key": "C",
                    "text": "AA batteries, car dynamos, and solar lanterns"
                  },
                  {
                    "key": "D",
                    "text": "Nuclear reactors, gas pipelines, and steam boilers"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "3 công nghệ là pin lithium-ion, thủy điện tích năng và hydro xanh ('lithium-ion battery banks, pumped hydro storage, and green hydrogen synthesis')."
              },
              {
                "id": 25,
                "question": "What is the overall tone of the lecturer regarding renewable energy?",
                "options": [
                  {
                    "key": "A",
                    "text": "Hopeless and pessimistic"
                  },
                  {
                    "key": "B",
                    "text": "Objective and analytical"
                  },
                  {
                    "key": "C",
                    "text": "Skeptical and dismissive"
                  },
                  {
                    "key": "D",
                    "text": "Aggressive and angry"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Giảng viên trình bày khách quan, phân tích dữ liệu khoa học ('Objective and analytical')."
              }
            ]
          },
          {
            "id": 2,
            "title": "Bài giảng 2: Đô thị hóa thông minh và Giao thông công cộng xanh (Smart Cities)",
            "audioTranscript": "Welcome to our urban planning lecture series. As urban populations continue to swell worldwide, traditional automobile-centric infrastructure is creating unsustainable traffic congestion and air pollution. Progressive municipalities are adopting the 'fifteen-minute city' model, which ensures that all essential services—such as grocery markets, healthcare clinics, schools, and recreational parks—are accessible within a fifteen-minute walk or bicycle ride from any residential zone. To complement active transit, cities like Curitiba, Bogota, and Seoul have revolutionized public transportation through Bus Rapid Transit (BRT) systems and dedicated electrified light rail corridors. By providing priority traffic signals and off-board fare collection, these green transit networks move hundreds of thousands of commuters daily while slashing greenhouse gas emissions by up to forty percent.",
            "questions": [
              {
                "id": 26,
                "question": "What is the core principle of the 'fifteen-minute city' concept?",
                "options": [
                  {
                    "key": "A",
                    "text": "Driving on highways for 15 minutes"
                  },
                  {
                    "key": "B",
                    "text": "Accessing all essential services within a 15-minute walk or bike ride"
                  },
                  {
                    "key": "C",
                    "text": "Taking 15-minute coffee breaks"
                  },
                  {
                    "key": "D",
                    "text": "Living in 15-story apartment towers"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Mọi tiện ích thiết yếu đều có thể tiếp cận trong vòng 15 phút đi bộ hoặc xe đạp."
              },
              {
                "id": 27,
                "question": "Which cities are cited as pioneers of Bus Rapid Transit (BRT)?",
                "options": [
                  {
                    "key": "A",
                    "text": "Curitiba, Bogota, and Seoul"
                  },
                  {
                    "key": "B",
                    "text": "London, Paris, and Rome"
                  },
                  {
                    "key": "C",
                    "text": "New York, Tokyo, and Sydney"
                  },
                  {
                    "key": "D",
                    "text": "Cairo, Moscow, and Berlin"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Các thành phố tiên phong là Curitiba, Bogota và Seoul."
              },
              {
                "id": 28,
                "question": "How do green transit networks reduce travel delays?",
                "options": [
                  {
                    "key": "A",
                    "text": "By eliminating all passenger seats"
                  },
                  {
                    "key": "B",
                    "text": "Through priority traffic signals and off-board fare collection"
                  },
                  {
                    "key": "C",
                    "text": "By increasing ticket prices by 50%"
                  },
                  {
                    "key": "D",
                    "text": "By driving on sidewalks"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Nhờ đèn tín hiệu ưu tiên và thu vé trước ngoài bến ('priority traffic signals and off-board fare collection')."
              },
              {
                "id": 29,
                "question": "By how much can electrified public transit reduce greenhouse gas emissions?",
                "options": [
                  {
                    "key": "A",
                    "text": "Up to 10%"
                  },
                  {
                    "key": "B",
                    "text": "Up to 25%"
                  },
                  {
                    "key": "C",
                    "text": "Up to 40%"
                  },
                  {
                    "key": "D",
                    "text": "Over 90%"
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Giảm lượng khí thải nhà kính lên tới 40% ('slashing greenhouse gas emissions by up to forty percent')."
              },
              {
                "id": 30,
                "question": "What is the primary problem with automobile-centric city design?",
                "options": [
                  {
                    "key": "A",
                    "text": "Too many bicycle lanes"
                  },
                  {
                    "key": "B",
                    "text": "Unsustainable traffic congestion and pollution"
                  },
                  {
                    "key": "C",
                    "text": "Excessive park areas"
                  },
                  {
                    "key": "D",
                    "text": "Cheap fuel prices"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Gây tắc nghẽn giao thông và ô nhiễm không khí ('traffic congestion and air pollution')."
              }
            ]
          },
          {
            "id": 3,
            "title": "Bài giảng 3: Trí tuệ Nhân tạo và Ứng dụng trong Y tế Hiện đại (AI in Healthcare)",
            "audioTranscript": "Good afternoon medical students. Today we explore the transformative role of machine learning in diagnostic radiology and precision oncology. Deep convolutional neural networks trained on millions of annotated medical imaging scans—such as digital mammograms, chest computed tomography, and magnetic resonance imaging—can now detect malignant tumors with accuracy rates exceeding ninety-four percent, often identifying subtle micro-calcifications years before human clinicians can spot them. Furthermore, in pharmaceutical pharmacology, generative AI models simulate molecular docking and protein folding pathways in hours rather than decades, drastically reducing the discovery phase for novel antiviral therapies. Nevertheless, ethical challenges around patient data privacy, algorithmic diagnostic bias, and physician accountability must be addressed before automated clinical decision systems achieve widespread regulatory approval.",
            "questions": [
              {
                "id": 31,
                "question": "What is the accuracy rate of deep neural networks in detecting malignant tumors?",
                "options": [
                  {
                    "key": "A",
                    "text": "Around 50%"
                  },
                  {
                    "key": "B",
                    "text": "Around 75%"
                  },
                  {
                    "key": "C",
                    "text": "Exceeding 94%"
                  },
                  {
                    "key": "D",
                    "text": "100% perfect"
                  }
                ],
                "correctAnswer": "C",
                "explanation": "Độ chính xác vượt quá 94% ('accuracy rates exceeding ninety-four percent')."
              },
              {
                "id": 32,
                "question": "How does generative AI accelerate pharmaceutical drug discovery?",
                "options": [
                  {
                    "key": "A",
                    "text": "By selling pills online"
                  },
                  {
                    "key": "B",
                    "text": "By simulating molecular docking and protein folding in hours"
                  },
                  {
                    "key": "C",
                    "text": "By replacing all pharmacists"
                  },
                  {
                    "key": "D",
                    "text": "By printing paper prescriptions"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Mô phỏng cấu trúc phân tử và gấp cuộn protein trong vài giờ ('simulating molecular docking and protein folding pathways in hours')."
              },
              {
                "id": 33,
                "question": "Which medical imaging scans are used to train AI diagnostic models?",
                "options": [
                  {
                    "key": "A",
                    "text": "Smartphone selfies"
                  },
                  {
                    "key": "B",
                    "text": "Mammograms, chest CT, and MRI scans"
                  },
                  {
                    "key": "C",
                    "text": "Passport photos"
                  },
                  {
                    "key": "D",
                    "text": "Handwritten doctor notes"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Ảnh chụp nhũ ảnh, CT ngực và MRI ('mammograms, chest computed tomography, and magnetic resonance imaging')."
              },
              {
                "id": 34,
                "question": "What ethical concerns are highlighted by the professor?",
                "options": [
                  {
                    "key": "A",
                    "text": "The high cost of computers"
                  },
                  {
                    "key": "B",
                    "text": "Patient data privacy, algorithmic bias, and physician accountability"
                  },
                  {
                    "key": "C",
                    "text": "Lack of hospital electricity"
                  },
                  {
                    "key": "D",
                    "text": "Shortage of medical students"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Các thách thức đạo đức gồm bảo mật dữ liệu, thiên vị thuật toán và trách nhiệm bác sĩ."
              },
              {
                "id": 35,
                "question": "What is the primary conclusion of the lecture?",
                "options": [
                  {
                    "key": "A",
                    "text": "AI should be banned from all hospitals"
                  },
                  {
                    "key": "B",
                    "text": "AI offers enormous clinical potential but requires ethical safeguards"
                  },
                  {
                    "key": "C",
                    "text": "Human doctors are no longer needed"
                  },
                  {
                    "key": "D",
                    "text": "All diseases have been cured"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "AI mang lại tiềm năng to lớn nhưng cần giải quyết các rào cản đạo đức ('ethical safeguards and regulatory approval')."
              }
            ]
          }
        ]
      }
    },
    {
      "id": "set-06",
      "title": "Bộ Đề Luyện Nghe Số 06 (Tổng Ôn Về Đích - 35 Câu)",
      "badge": "Bộ Đề Về Đích B1-B2",
      "part1": authenticVstepExams[5].listening.part1,
      "part2": authenticVstepExams[5].listening.part2,
      "part3": authenticVstepExams[5].listening.part3
    },
    {
      "id": "set-07",
      "title": "Bộ Đề Luyện Nghe Số 07 (Đề Mới Nhất ULIS & ĐHQG - 35 Câu)",
      "badge": "Đề Thi Thật Mới Nhất",
      "part1": exam07.listening.part1,
      "part2": exam07.listening.part2,
      "part3": exam07.listening.part3
    }
  ]
};
