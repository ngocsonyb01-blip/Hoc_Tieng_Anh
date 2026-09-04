import { exam07 } from './exam07.js';
import { exam08 } from './exam08.js';
import { exam09 } from './exam09.js';
import { exam10 } from './exam10.js';

// Authentic VSTEP B1-B2-C1 Examination Corpus (Full 4 Skills)
export const authenticVstepExams = [
  {
    "id": "vstep-exam-01",
    "name": "Đề Thi Chuẩn VSTEP Số 01 (Chính Thức Format B1)",
    "description": "Đề thi mẫu chuẩn hóa 4 kỹ năng của Bộ GD&ĐT: Nghe (35 câu), Đọc (40 câu - 4 bài), Viết (2 bài), Nói (3 phần).",
    "listening": {
      "time": 40,
      "totalQuestions": 35,
      "part1": {
        "title": "Part 1: 8 Thông Báo Ngắn (8 câu hỏi)",
        "instructions": "Bạn sẽ nghe 8 đoạn thông báo hoặc hội thoại ngắn. Mỗi câu hỏi có 4 lựa chọn A, B, C, D.",
        "questions": [
          {
            "id": "L1",
            "audioText": "Attention all passengers on flight VN245 to Da Nang. Due to unexpected thunderstorm activity over the central coast, our departure has been rescheduled from 2:15 PM to 3:45 PM. Please remain in the waiting lounge near Gate 12 for further announcements.",
            "question": "Why has flight VN245 been delayed?",
            "options": [
              {
                "key": "A",
                "text": "Mechanical failure on the aircraft"
              },
              {
                "key": "B",
                "text": "Severe thunderstorm weather conditions"
              },
              {
                "key": "C",
                "text": "Late arrival of the flight crew"
              },
              {
                "key": "D",
                "text": "Gate renovation at the airport"
              }
            ],
            "correctAnswer": "B",
            "explanation": "Người phát thanh nói 'Due to unexpected thunderstorm activity over the central coast' -> Thời tiết mưa dông."
          },
          {
            "id": "L2",
            "audioText": "Good morning staff. Please be reminded that the company annual health check-up will take place this Thursday at the Central Medical Clinic on the 3rd floor. Remember to fast for at least 8 hours prior to your blood test appointment.",
            "question": "What are employees instructed to do before their blood test?",
            "options": [
              {
                "key": "A",
                "text": "Drink plenty of sweetened juice"
              },
              {
                "key": "B",
                "text": "Bring their medical insurance book"
              },
              {
                "key": "C",
                "text": "Fast for at least eight hours"
              },
              {
                "key": "D",
                "text": "Arrive two hours before opening time"
              }
            ],
            "correctAnswer": "C",
            "explanation": "'Remember to fast for at least 8 hours prior to your blood test' -> Nhịn ăn ít nhất 8 tiếng."
          },
          {
            "id": "L3",
            "audioText": "Hi Sarah, it's Mark from the marketing department. I reviewed your draft proposal for the new product launch. The budget projection looks solid, but I think we need to include more statistical data regarding customer demographics in section two before submitting it to the director.",
            "question": "What modification does Mark recommend for Sarah's proposal?",
            "options": [
              {
                "key": "A",
                "text": "Reducing the total budget estimate"
              },
              {
                "key": "B",
                "text": "Adding more customer demographic statistics"
              },
              {
                "key": "C",
                "text": "Postponing the product launch date"
              },
              {
                "key": "D",
                "text": "Changing the graphic design layout"
              }
            ],
            "correctAnswer": "B",
            "explanation": "'I think we need to include more statistical data regarding customer demographics in section two'."
          },
          {
            "id": "L4",
            "audioText": "Attention all library patrons. Starting from next Monday, City Central Library will extend its weekday operating hours until 9:00 PM to accommodate students revising for upcoming semester examinations. The ground floor study hall will also remain open during weekends.",
            "question": "What change will take effect at City Central Library next Monday?",
            "options": [
              {
                "key": "A",
                "text": "The library will increase annual membership fees"
              },
              {
                "key": "B",
                "text": "Weekday closing time will be extended until 9:00 PM"
              },
              {
                "key": "C",
                "text": "The ground floor study hall will be closed on weekends"
              },
              {
                "key": "D",
                "text": "Borrowing limits for books will be reduced"
              }
            ],
            "correctAnswer": "B",
            "explanation": "Thông báo nêu rõ: 'extend its weekday operating hours until 9:00 PM' -> Giờ mở cửa ngày thường kéo dài đến 9:00 tối."
          },
          {
            "id": "L5",
            "audioText": "Customer notice from Metro Supermarket: Our fresh seafood counter is offering a special 25% promotional discount on Norwegian salmon and tiger prawns until 7:00 PM today. Grab your numbered ticket from the customer service desk to enjoy this limited offer.",
            "question": "How can customers receive the special seafood discount?",
            "options": [
              {
                "key": "A",
                "text": "By showing a VIP membership card"
              },
              {
                "key": "B",
                "text": "By taking a numbered ticket at customer service"
              },
              {
                "key": "C",
                "text": "By ordering online through the mobile app"
              },
              {
                "key": "D",
                "text": "By spending more than one million VND"
              }
            ],
            "correctAnswer": "B",
            "explanation": "'Grab your numbered ticket from the customer service desk'."
          },
          {
            "id": "L6",
            "audioText": "This is a traffic alert for Highway 1A. A minor road collision near the Binh Trieu Bridge has caused severe traffic congestion stretching over two kilometers. Commuters heading towards downtown are strongly advised to take the Pham Van Dong expressway instead.",
            "question": "What alternative route is recommended for drivers?",
            "options": [
              {
                "key": "A",
                "text": "National Route 13"
              },
              {
                "key": "B",
                "text": "Pham Van Dong expressway"
              },
              {
                "key": "C",
                "text": "Binh Loi railway bridge"
              },
              {
                "key": "D",
                "text": "Saigon riverside boulevard"
              }
            ],
            "correctAnswer": "B",
            "explanation": "'strongly advised to take the Pham Van Dong expressway instead'."
          },
          {
            "id": "L7",
            "audioText": "Good afternoon gym members. Please be informed that the main swimming pool will be closed tomorrow from 8:00 AM to 1:00 PM for routine chlorination and water filter maintenance. The sauna and fitness cardio rooms will operate normally.",
            "question": "Which facility will be temporarily closed tomorrow morning?",
            "options": [
              {
                "key": "A",
                "text": "The cardio fitness room"
              },
              {
                "key": "B",
                "text": "The main swimming pool"
              },
              {
                "key": "C",
                "text": "The dry sauna room"
              },
              {
                "key": "D",
                "text": "The locker and shower rooms"
              }
            ],
            "correctAnswer": "B",
            "explanation": "'the main swimming pool will be closed tomorrow from 8:00 AM to 1:00 PM'."
          },
          {
            "id": "L8",
            "audioText": "Hello Mr. Davis, this is Greenview Dental Clinic calling to confirm your dental check-up appointment tomorrow at 10:30 AM with Dr. Henderson. If you need to reschedule or cancel, please call us back before 5:00 PM today.",
            "question": "What is the purpose of the telephone call?",
            "options": [
              {
                "key": "A",
                "text": "To notify a prescription medicine change"
              },
              {
                "key": "B",
                "text": "To confirm a scheduled dental appointment"
              },
              {
                "key": "C",
                "text": "To request payment for previous treatment"
              },
              {
                "key": "D",
                "text": "To reschedule Dr. Henderson's surgery"
              }
            ],
            "correctAnswer": "B",
            "explanation": "'calling to confirm your dental check-up appointment tomorrow'."
          }
        ]
      },
      "part2": {
        "title": "Part 2: 3 Đoạn Hội Thoại Dài (12 câu hỏi)",
        "instructions": "Bạn sẽ nghe 3 đoạn hội thoại. Mỗi hội thoại có 4 câu hỏi trắc nghiệm.",
        "conversations": [
          {
            "id": "C1",
            "title": "Hội thoại 1: Lập kế hoạch thực tập tốt nghiệp",
            "audioTranscript": "Man: Hi Elena, have you submitted your summer internship application to the Career Center yet? The deadline is this Friday.\nWoman: Not quite yet, David. I'm torn between two choices: an internship at a local software startup and an administrative position at a multinational corporation.\nMan: Well, the multinational company surely looks impressive on a resume, but you often end up doing repetitive paperwork. At a startup, you'll work directly with senior engineers and gain hands-on coding experience.\nWoman: That's a valid point. I really want to sharpen my practical programming skills and understand full project workflows. I think I'll finalize my application for the startup tonight!",
            "questions": [
              {
                "id": "L9",
                "question": "What is the main topic of the conversation?",
                "options": [
                  {
                    "key": "A",
                    "text": "Preparing for final university examinations"
                  },
                  {
                    "key": "B",
                    "text": "Choosing a summer internship placement"
                  },
                  {
                    "key": "C",
                    "text": "Applying for a postgraduate scholarship"
                  },
                  {
                    "key": "D",
                    "text": "Negotiating starting salary at a company"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Hai người trao đổi về việc nộp hồ sơ thực tập mùa hè (summer internship)."
              },
              {
                "id": "L10",
                "question": "When is the deadline for submitting the internship application?",
                "options": [
                  {
                    "key": "A",
                    "text": "This Wednesday"
                  },
                  {
                    "key": "B",
                    "text": "This Friday"
                  },
                  {
                    "key": "C",
                    "text": "Next Monday"
                  },
                  {
                    "key": "D",
                    "text": "At the end of the month"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "David nói: 'The deadline is this Friday'."
              },
              {
                "id": "L11",
                "question": "What advantage of working at a startup does David mention?",
                "options": [
                  {
                    "key": "A",
                    "text": "Higher monthly allowance"
                  },
                  {
                    "key": "B",
                    "text": "Opportunity for direct hands-on coding experience"
                  },
                  {
                    "key": "C",
                    "text": "Shorter daily commuting distance"
                  },
                  {
                    "key": "D",
                    "text": "Guaranteed permanent job offer"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "David nêu: 'work directly with senior engineers and gain hands-on coding experience'."
              },
              {
                "id": "L12",
                "question": "What does Elena decide to do at the end?",
                "options": [
                  {
                    "key": "A",
                    "text": "Apply for the software startup position"
                  },
                  {
                    "key": "B",
                    "text": "Postpone her internship until next year"
                  },
                  {
                    "key": "C",
                    "text": "Consult her academic advisor tomorrow"
                  },
                  {
                    "key": "D",
                    "text": "Accept the multinational administrative role"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Elena kết luận: 'I think I'll finalize my application for the startup tonight!'."
              }
            ]
          },
          {
            "id": "C2",
            "title": "Hội thoại 2: Thuê căn hộ chung cư cho sinh viên",
            "audioTranscript": "Woman: Good afternoon Mr. Tran, my roommate and I are looking to rent a two-bedroom apartment near the University of Technology.\nMan: Hello! I have a fully furnished unit on the 8th floor of Sunrise Tower. It has two bedrooms, a spacious balcony, air conditioning, and high-speed fiber internet included.\nWoman: That sounds wonderful. How much is the monthly rent, and what about utility bills?\nMan: The rent is 8 million VND per month. Electricity and water are billed separately according to state utility meters. We require a two-month security deposit upon signing the one-year lease.\nWoman: Can we visit the apartment tomorrow morning around 9:30 AM to inspect the condition before making a decision?\nMan: Absolutely, I'll meet you at the lobby entrance.",
            "questions": [
              {
                "id": "L13",
                "question": "What type of accommodation are the students seeking?",
                "options": [
                  {
                    "key": "A",
                    "text": "A shared dormitory room"
                  },
                  {
                    "key": "B",
                    "text": "A two-bedroom furnished apartment"
                  },
                  {
                    "key": "C",
                    "text": "A studio townhouse with a garden"
                  },
                  {
                    "key": "D",
                    "text": "A homestay with a host family"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'looking to rent a two-bedroom apartment near the University'."
              },
              {
                "id": "L14",
                "question": "What is included in the 8 million VND monthly rent?",
                "options": [
                  {
                    "key": "A",
                    "text": "Electricity and cooking gas"
                  },
                  {
                    "key": "B",
                    "text": "High-speed fiber internet and furniture"
                  },
                  {
                    "key": "C",
                    "text": "Daily cleaning and laundry services"
                  },
                  {
                    "key": "D",
                    "text": "Underground car parking fees"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'fully furnished... high-speed fiber internet included'."
              },
              {
                "id": "L15",
                "question": "How much deposit is required upon signing the contract?",
                "options": [
                  {
                    "key": "A",
                    "text": "One month rent"
                  },
                  {
                    "key": "B",
                    "text": "Two months rent"
                  },
                  {
                    "key": "C",
                    "text": "Three months rent"
                  },
                  {
                    "key": "D",
                    "text": "No deposit required"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'We require a two-month security deposit upon signing'."
              },
              {
                "id": "L16",
                "question": "When will the woman inspect the apartment?",
                "options": [
                  {
                    "key": "A",
                    "text": "This evening at 7:00 PM"
                  },
                  {
                    "key": "B",
                    "text": "Tomorrow morning at 9:30 AM"
                  },
                  {
                    "key": "C",
                    "text": "Next Saturday afternoon"
                  },
                  {
                    "key": "D",
                    "text": "At the end of the week"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'visit the apartment tomorrow morning around 9:30 AM'."
              }
            ]
          },
          {
            "id": "C3",
            "title": "Hội thoại 3: Tổ chức chiến dịch bảo vệ môi trường",
            "audioTranscript": "Man: Lisa, our Student Union environmental campaign 'Green Campus' is scheduled for next Saturday. Have we secured all the trash grabbers, biodegradable garbage bags, and gloves?\nWoman: Yes Tom, the logistics team received 200 pairs of protective gloves and 500 compostable bags yesterday from our corporate sponsor.\nMan: Fantastic! How many student volunteers have registered online so far?\nWoman: We reached 180 registrations this morning, exceeding our initial target of 150. I've divided them into four squads: plastic bottle sorting, tree planting around the sports field, electronic waste collection, and riverbank clean-up.\nMan: Excellent organization! Let's hold a short briefing on Friday afternoon to distribute team badges and safety instructions.",
            "questions": [
              {
                "id": "L17",
                "question": "What is the name of the Student Union campaign?",
                "options": [
                  {
                    "key": "A",
                    "text": "Clean Oceans Initiative"
                  },
                  {
                    "key": "B",
                    "text": "Green Campus"
                  },
                  {
                    "key": "C",
                    "text": "Zero Carbon Future"
                  },
                  {
                    "key": "D",
                    "text": "Eco-Friendly Living"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'our Student Union environmental campaign Green Campus'."
              },
              {
                "id": "L18",
                "question": "Who provided the gloves and biodegradable bags?",
                "options": [
                  {
                    "key": "A",
                    "text": "The local city council"
                  },
                  {
                    "key": "B",
                    "text": "A corporate sponsor"
                  },
                  {
                    "key": "C",
                    "text": "Student Union funding"
                  },
                  {
                    "key": "D",
                    "text": "Donations from professors"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'received... from our corporate sponsor'."
              },
              {
                "id": "L19",
                "question": "How many volunteers have registered for the event?",
                "options": [
                  {
                    "key": "A",
                    "text": "150 volunteers"
                  },
                  {
                    "key": "B",
                    "text": "180 volunteers"
                  },
                  {
                    "key": "C",
                    "text": "200 volunteers"
                  },
                  {
                    "key": "D",
                    "text": "500 volunteers"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'We reached 180 registrations this morning, exceeding our initial target of 150'."
              },
              {
                "id": "L20",
                "question": "What will happen during Friday afternoon's meeting?",
                "options": [
                  {
                    "key": "A",
                    "text": "Planting trees around the football field"
                  },
                  {
                    "key": "B",
                    "text": "Distributing badges and safety instructions"
                  },
                  {
                    "key": "C",
                    "text": "Collecting electronic waste from residents"
                  },
                  {
                    "key": "D",
                    "text": "Interviewing new team captains"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'hold a short briefing on Friday afternoon to distribute team badges and safety instructions'."
              }
            ]
          }
        ]
      },
      "part3": {
        "title": "Part 3: 3 Bài Thuyết Trình Học Thuật (15 câu hỏi)",
        "instructions": "Bạn sẽ nghe 3 bài giảng học thuật. Mỗi bài giảng có 5 câu hỏi trắc nghiệm.",
        "talks": [
          {
            "id": "T1",
            "title": "Bài giảng 1: Sự tiến hóa của Trí tuệ Nhân tạo trong Giáo dục",
            "audioTranscript": "Good morning class. Today, we delve into the transformative role of Artificial Intelligence in contemporary education. Historically, traditional classrooms adopted a one-size-fits-all approach, where all students followed identical textbooks regardless of individual learning paces. Modern AI-driven adaptive platforms, however, analyze student interaction data in real time to customize personalized exercise difficulty and learning pathways.\n\nFurthermore, automated grading systems now evaluate written essays and provide instant constructive feedback on grammar, cohesion, and vocabulary usage, saving educators substantial grading time. Nonetheless, educational researchers emphasize that AI cannot replace the empathetic human dimension of teaching, such as mentoring, inspiring curiosity, and emotional encouragement.",
            "questions": [
              {
                "id": "L21",
                "question": "What is the primary topic of the lecture?",
                "options": [
                  {
                    "key": "A",
                    "text": "History of traditional university examinations"
                  },
                  {
                    "key": "B",
                    "text": "Application and limitations of AI in education"
                  },
                  {
                    "key": "C",
                    "text": "Developing robotic hardware for school labs"
                  },
                  {
                    "key": "D",
                    "text": "Financial cost of computer software"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Toàn bộ bài giảng phân tích vai trò chuyển đổi và các khía cạnh của AI trong giáo dục hiện đại."
              },
              {
                "id": "L22",
                "question": "How do AI adaptive platforms personalize learning for students?",
                "options": [
                  {
                    "key": "A",
                    "text": "By eliminating all final exams"
                  },
                  {
                    "key": "B",
                    "text": "By customizing exercise difficulty based on interaction data"
                  },
                  {
                    "key": "C",
                    "text": "By replacing human professors completely"
                  },
                  {
                    "key": "D",
                    "text": "By providing free digital tablets"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'analyze student interaction data in real time to customize personalized exercise difficulty'."
              },
              {
                "id": "L23",
                "question": "What task can automated grading systems assist teachers with?",
                "options": [
                  {
                    "key": "A",
                    "text": "Evaluating essays and providing instant linguistic feedback"
                  },
                  {
                    "key": "B",
                    "text": "Maintaining physical sports equipment"
                  },
                  {
                    "key": "C",
                    "text": "Conducting parent-teacher conferences"
                  },
                  {
                    "key": "D",
                    "text": "Arranging school bus schedules"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "'evaluate written essays and provide instant constructive feedback'."
              },
              {
                "id": "L24",
                "question": "According to researchers, what human quality cannot be replaced by AI?",
                "options": [
                  {
                    "key": "A",
                    "text": "Calculating mathematical formulas"
                  },
                  {
                    "key": "B",
                    "text": "Storing historical dates and facts"
                  },
                  {
                    "key": "C",
                    "text": "Empathy, mentoring, and emotional encouragement"
                  },
                  {
                    "key": "D",
                    "text": "Translating foreign language articles"
                  }
                ],
                "correctAnswer": "C",
                "explanation": "'AI cannot replace the empathetic human dimension of teaching, such as mentoring, inspiring curiosity, and emotional encouragement'."
              },
              {
                "id": "L25",
                "question": "What was a key limitation of the traditional historical classroom?",
                "options": [
                  {
                    "key": "A",
                    "text": "Lack of physical chalkboards"
                  },
                  {
                    "key": "B",
                    "text": "A rigid one-size-fits-all approach for all learners"
                  },
                  {
                    "key": "C",
                    "text": "Short daily study duration"
                  },
                  {
                    "key": "D",
                    "text": "Excessive student interaction"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'traditional classrooms adopted a one-size-fits-all approach'."
              }
            ]
          },
          {
            "id": "T2",
            "title": "Bài giảng 2: Đô thị sinh thái và Phát triển bền vững",
            "audioTranscript": "Welcome everyone. Today's urban planning seminar focuses on Eco-Cities, designed to minimize ecological footprints through sustainable architecture and renewable energy. A hallmark of eco-cities is the 15-minute neighborhood model, ensuring every resident can access essential services, schools, groceries, and green parks within a 15-minute walk or bicycle ride.\n\nIn addition, green roofs and vertical gardens help combat the urban heat island effect, decreasing ambient air temperatures by up to 3 degrees Celsius during summer heatwaves. Permeable pavements and rainwater harvesting reservoirs absorb storm runoff, substantially mitigating urban flash flooding risks.",
            "questions": [
              {
                "id": "L26",
                "question": "What is the core principle of an Eco-City?",
                "options": [
                  {
                    "key": "A",
                    "text": "Maximizing automotive highways and parking lots"
                  },
                  {
                    "key": "B",
                    "text": "Minimizing ecological footprint through sustainability"
                  },
                  {
                    "key": "C",
                    "text": "Building skyscrapers with luxury penthouses"
                  },
                  {
                    "key": "D",
                    "text": "Banning all commercial industrial businesses"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'designed to minimize ecological footprints through sustainable architecture and renewable energy'."
              },
              {
                "id": "L27",
                "question": "What is guaranteed in a 15-minute neighborhood model?",
                "options": [
                  {
                    "key": "A",
                    "text": "Free public high-speed trains to airports"
                  },
                  {
                    "key": "B",
                    "text": "Access to daily amenities within a 15-minute walk or bike ride"
                  },
                  {
                    "key": "C",
                    "text": "Free residential high-speed internet"
                  },
                  {
                    "key": "D",
                    "text": "15 minutes of free parking everywhere"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'access essential services, schools, groceries, and green parks within a 15-minute walk or bicycle ride'."
              },
              {
                "id": "L28",
                "question": "How do vertical gardens and green roofs improve urban climates?",
                "options": [
                  {
                    "key": "A",
                    "text": "By increasing winter snowfall"
                  },
                  {
                    "key": "B",
                    "text": "By reducing ambient temperatures during heatwaves by up to 3°C"
                  },
                  {
                    "key": "C",
                    "text": "By eliminating the need for indoor lighting"
                  },
                  {
                    "key": "D",
                    "text": "By blocking solar panels"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'decreasing ambient air temperatures by up to 3 degrees Celsius during summer heatwaves'."
              },
              {
                "id": "L29",
                "question": "What problem is mitigated by permeable pavements and rainwater reservoirs?",
                "options": [
                  {
                    "key": "A",
                    "text": "Urban flash flooding risks"
                  },
                  {
                    "key": "B",
                    "text": "Traffic speed violations"
                  },
                  {
                    "key": "C",
                    "text": "Air pollution from aircraft"
                  },
                  {
                    "key": "D",
                    "text": "Underground subway noise"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "'substantially mitigating urban flash flooding risks'."
              },
              {
                "id": "L30",
                "question": "What type of transportation is prioritized in eco-city design?",
                "options": [
                  {
                    "key": "A",
                    "text": "Heavy diesel commercial trucks"
                  },
                  {
                    "key": "B",
                    "text": "Walking, cycling, and clean public transit"
                  },
                  {
                    "key": "C",
                    "text": "Private gasoline sports cars"
                  },
                  {
                    "key": "D",
                    "text": "Domestic commercial flights"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Đoạn văn nhấn mạnh đi bộ (walking) và xe đạp (cycling) trong mô hình khu dân cư 15 phút."
              }
            ]
          },
          {
            "id": "T3",
            "title": "Bài giảng 3: Tâm lý học hành vi về Thói quen và Giấc ngủ",
            "audioTranscript": "Good afternoon colleagues. In this neurobiology lecture, we explore the profound impact of circadian rhythms and sleep architecture on cognitive performance and habit formation. Sleep is structured in repeating 90-minute cycles transitioning between Non-REM slow-wave sleep and REM sleep.\n\nDuring deep slow-wave sleep, the brain's glymphatic system flushes out metabolic toxins like beta-amyloid, while the hippocampus transfers short-term memories into the cerebral cortex for long-term consolidation. Chronic sleep deprivation of under six hours per night impairs executive decision-making, weakens emotional regulation, and elevates cortisol stress hormones.",
            "questions": [
              {
                "id": "L31",
                "question": "How long does a typical sleep cycle last in human adults?",
                "options": [
                  {
                    "key": "A",
                    "text": "45 minutes"
                  },
                  {
                    "key": "B",
                    "text": "90 minutes"
                  },
                  {
                    "key": "C",
                    "text": "120 minutes"
                  },
                  {
                    "key": "D",
                    "text": "180 minutes"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'Sleep is structured in repeating 90-minute cycles'."
              },
              {
                "id": "L32",
                "question": "What occurs in the brain during deep slow-wave sleep?",
                "options": [
                  {
                    "key": "A",
                    "text": "Toxins are cleared and memories consolidated into long-term storage"
                  },
                  {
                    "key": "B",
                    "text": "Brain metabolism increases to maximum speed"
                  },
                  {
                    "key": "C",
                    "text": "Heart rate accelerates dramatically"
                  },
                  {
                    "key": "D",
                    "text": "All nerve communication stops entirely"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "'flushes out metabolic toxins... transfers short-term memories into the cerebral cortex for long-term consolidation'."
              },
              {
                "id": "L33",
                "question": "What part of the brain coordinates the transfer of memories?",
                "options": [
                  {
                    "key": "A",
                    "text": "The retina"
                  },
                  {
                    "key": "B",
                    "text": "The hippocampus"
                  },
                  {
                    "key": "C",
                    "text": "The spinal cord"
                  },
                  {
                    "key": "D",
                    "text": "The auditory nerve"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'the hippocampus transfers short-term memories into the cerebral cortex'."
              },
              {
                "id": "L34",
                "question": "What is an adverse consequence of chronic sleep deprivation under 6 hours?",
                "options": [
                  {
                    "key": "A",
                    "text": "Enhanced photographic memory"
                  },
                  {
                    "key": "B",
                    "text": "Impaired executive decision-making and elevated cortisol"
                  },
                  {
                    "key": "C",
                    "text": "Decreased body temperature"
                  },
                  {
                    "key": "D",
                    "text": "Faster reflex reaction times"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'impairs executive decision-making, weakens emotional regulation, and elevates cortisol'."
              },
              {
                "id": "L35",
                "question": "What biological system regulates the 24-hour sleep-wake cycle?",
                "options": [
                  {
                    "key": "A",
                    "text": "Circadian rhythm"
                  },
                  {
                    "key": "B",
                    "text": "Digestive enzymes"
                  },
                  {
                    "key": "C",
                    "text": "Skeletal joints"
                  },
                  {
                    "key": "D",
                    "text": "Respiratory diaphragm"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "'profound impact of circadian rhythms and sleep architecture'."
              }
            ]
          }
        ]
      }
    },
    "reading": {
      "time": 60,
      "totalQuestions": 40,
      "passages": [
        {
          "id": "R-P1",
          "title": "Passage 1: The Evolution of Global Online Education",
          "wordCount": 460,
          "genre": "Education & Technology",
          "text": "[P1] In recent years, distance learning has shifted from an unconventional alternative into a mainstream pillar of higher education. Propelled by ubiquitous broadband internet, cloud computing, and interactive virtual classrooms, universities worldwide now deliver fully accredited degree programs to millions of students who reside thousands of kilometers from campus.\n\n[P2] The most prominent advantage of online education lies in its unprecedented geographic and temporal flexibility. Working professionals, parents, and geographically isolated individuals can tailor their study schedules around demanding domestic and occupational obligations. Asynchronous video lectures, interactive discussion forums, and downloadable multimedia resources empower learners to assimilate complex concepts at their own customized pace rather than adhering to rigid classroom timetables.\n\n[P3] However, virtual learning is not without pedagogical drawbacks. The absence of spontaneous face-to-face interaction can precipitate profound feelings of academic isolation and reduced collaborative engagement. Furthermore, online formats place tremendous demands on self-discipline and autonomous time management. Research indicates that completion rates for open online courses frequently hover below twenty percent, primarily because students struggle to maintain intrinsic motivation without structured institutional accountability.\n\n[P4] To address these deficits, contemporary educational institutions are pioneering hybrid or blended models. By fusing flexible self-paced digital modules with periodic interactive group seminars, universities aim to retain the accessibility of distance education while preserving the vibrant social camaraderie and accountability of traditional physical campuses.",
          "questions": [
            {
              "id": "R1",
              "question": "What is the primary focus of the passage?",
              "options": [
                {
                  "key": "A",
                  "text": "The financial cost of university tuition fees"
                },
                {
                  "key": "B",
                  "text": "The growth, benefits, and challenges of online education"
                },
                {
                  "key": "C",
                  "text": "Methods for building physical campus libraries"
                },
                {
                  "key": "D",
                  "text": "The history of postal correspondence courses"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Đoạn 1 nêu sự phát triển, Đoạn 2 nêu ưu điểm, Đoạn 3 nêu thách thức, Đoạn 4 nêu giải pháp lai (hybrid)."
            },
            {
              "id": "R2",
              "question": "The word 'ubiquitous' in paragraph 1 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "expensive and luxurious"
                },
                {
                  "key": "B",
                  "text": "widespread and found everywhere"
                },
                {
                  "key": "C",
                  "text": "unreliable and dangerous"
                },
                {
                  "key": "D",
                  "text": "temporary and experimental"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Ubiquitous' = phổ biến khắp nơi (widespread, omnipresent)."
            },
            {
              "id": "R3",
              "question": "According to paragraph 2, who benefits significantly from the flexibility of online learning?",
              "options": [
                {
                  "key": "A",
                  "text": "Only full-time residential undergraduates"
                },
                {
                  "key": "B",
                  "text": "Working professionals and isolated individuals"
                },
                {
                  "key": "C",
                  "text": "Professors who dislike lecturing in person"
                },
                {
                  "key": "D",
                  "text": "Commercial internet providers"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Working professionals, parents, and geographically isolated individuals can tailor their study schedules'."
            },
            {
              "id": "R4",
              "question": "The word 'assimilate' in paragraph 2 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "absorb and understand"
                },
                {
                  "key": "B",
                  "text": "reject and ignore"
                },
                {
                  "key": "C",
                  "text": "translate and print"
                },
                {
                  "key": "D",
                  "text": "memorize without thinking"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Assimilate concepts' = tiếp thu, hiểu sâu kiến thức (absorb and comprehend)."
            },
            {
              "id": "R5",
              "question": "According to paragraph 3, what is a major pedagogical disadvantage of virtual learning?",
              "options": [
                {
                  "key": "A",
                  "text": "Excessive physical textbook weight"
                },
                {
                  "key": "B",
                  "text": "Feelings of isolation and lack of face-to-face interaction"
                },
                {
                  "key": "C",
                  "text": "Frequent power outages in university buildings"
                },
                {
                  "key": "D",
                  "text": "Strict morning attendance rules"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'The absence of spontaneous face-to-face interaction can precipitate profound feelings of academic isolation'."
            },
            {
              "id": "R6",
              "question": "The word 'these' in paragraph 4 refers to:",
              "options": [
                {
                  "key": "A",
                  "text": "online discussion forums"
                },
                {
                  "key": "B",
                  "text": "pedagogical drawbacks and deficits"
                },
                {
                  "key": "C",
                  "text": "traditional university campuses"
                },
                {
                  "key": "D",
                  "text": "high completion statistics"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'To address these deficits' liên hệ lại các hạn chế đã nêu ở đoạn 3."
            },
            {
              "id": "R7",
              "question": "Why do completion rates for open online courses often fall below twenty percent?",
              "options": [
                {
                  "key": "A",
                  "text": "Tuition fees are excessively exorbitant"
                },
                {
                  "key": "B",
                  "text": "Students struggle with self-discipline without structured accountability"
                },
                {
                  "key": "C",
                  "text": "The courses are taught in dead languages"
                },
                {
                  "key": "D",
                  "text": "Internet servers are shut down every night"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'students struggle to maintain intrinsic motivation without structured institutional accountability'."
            },
            {
              "id": "R8",
              "question": "Which of the following is NOT mentioned as a feature of online education in paragraph 2?",
              "options": [
                {
                  "key": "A",
                  "text": "Asynchronous video lectures"
                },
                {
                  "key": "B",
                  "text": "Interactive discussion forums"
                },
                {
                  "key": "C",
                  "text": "Compulsory daily uniform requirements"
                },
                {
                  "key": "D",
                  "text": "Downloadable multimedia resources"
                }
              ],
              "correctAnswer": "C",
              "explanation": "Đồng phục bắt buộc (uniform requirements) hoàn toàn không được nhắc đến."
            },
            {
              "id": "R9",
              "question": "What is the goal of hybrid or blended educational models mentioned in paragraph 4?",
              "options": [
                {
                  "key": "A",
                  "text": "To close all physical university campuses permanently"
                },
                {
                  "key": "B",
                  "text": "To combine online flexibility with campus social camaraderie"
                },
                {
                  "key": "C",
                  "text": "To double the duration of bachelor degree programs"
                },
                {
                  "key": "D",
                  "text": "To reduce teacher salaries"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'retain the accessibility of distance education while preserving the vibrant social camaraderie'."
            },
            {
              "id": "R10",
              "question": "What can be inferred about the future of university education from the passage?",
              "options": [
                {
                  "key": "A",
                  "text": "Traditional face-to-face learning will disappear entirely next year"
                },
                {
                  "key": "B",
                  "text": "Universities will increasingly integrate digital tools with in-person sessions"
                },
                {
                  "key": "C",
                  "text": "Degrees obtained online will no longer be accredited"
                },
                {
                  "key": "D",
                  "text": "Computers will grade 100% of student emotions"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Mô hình kết hợp (blended/hybrid) là xu thế phát triển tất yếu của giáo dục đại học."
            }
          ]
        },
        {
          "id": "R-P2",
          "title": "Passage 2: The Renewable Energy Transition and Grid Stability",
          "wordCount": 475,
          "genre": "Environment & Energy",
          "text": "[P1] The transition from fossil fuels to renewable energy sources has emerged as the defining engineering imperative of the twenty-first century. Driven by urgent climate targets and plummeting photovoltaic costs, solar and wind power installations have expanded exponentially across both developed and emerging economies.\n\n[P2] The undeniable environmental benefits of renewable energy are manifold. Solar panels and wind turbines generate electricity with virtually zero direct greenhouse gas emissions during operation, drastically diminishing atmospheric carbon dioxide concentrations. Moreover, decentralizing power generation diminishes reliance on volatile fossil fuel import markets, bolstering national energy security.\n\n[P3] Nevertheless, integrating massive intermittent renewables introduces severe technical challenges for traditional power grids. Unlike coal or natural gas plants that provide steady baseload power, solar arrays cease generation after sunset, and wind turbines depend heavily on fluctuating atmospheric gusts. This intermittency creates severe supply-demand mismatches, potentially destabilizing grid frequency and risking blackouts unless substantial energy storage or backup capacity is deployed.\n\n[P4] To overcome grid volatility, utility companies are investing aggressively in utility-scale lithium-ion and flow battery storage facilities, pumped hydroelectric storage, and smart grid automation. Smart grid algorithms utilize artificial intelligence to forecast weather patterns and dynamically route surplus power across national transmission corridors, ensuring grid stability in a green energy era.",
          "questions": [
            {
              "id": "R11",
              "question": "What is the main idea of Passage 2?",
              "options": [
                {
                  "key": "A",
                  "text": "The economic cost of digging coal mines"
                },
                {
                  "key": "B",
                  "text": "The benefits and grid stability challenges of renewable energy"
                },
                {
                  "key": "C",
                  "text": "Why households should avoid buying solar panels"
                },
                {
                  "key": "D",
                  "text": "The history of steam locomotive engines"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Đoạn văn phân tích cả lợi ích môi trường lẫn thách thức kỹ thuật về tính gián đoạn (intermittency) của năng lượng tái tạo."
            },
            {
              "id": "R12",
              "question": "The word 'plummeting' in paragraph 1 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "increasing rapidly"
                },
                {
                  "key": "B",
                  "text": "falling sharply"
                },
                {
                  "key": "C",
                  "text": "fluctuating randomly"
                },
                {
                  "key": "D",
                  "text": "remaining constant"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Plummeting costs' = chi phí giảm mạnh (falling steeply/sharply)."
            },
            {
              "id": "R13",
              "question": "According to paragraph 2, how does renewable energy benefit national security?",
              "options": [
                {
                  "key": "A",
                  "text": "By increasing military spending on weapons"
                },
                {
                  "key": "B",
                  "text": "By reducing reliance on unpredictable fossil fuel import markets"
                },
                {
                  "key": "C",
                  "text": "By expanding foreign oil exploration projects"
                },
                {
                  "key": "D",
                  "text": "By building concrete border walls"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'diminishes reliance on volatile fossil fuel import markets, bolstering national energy security'."
            },
            {
              "id": "R14",
              "question": "The word 'intermittent' in paragraph 3 refers to energy that:",
              "options": [
                {
                  "key": "A",
                  "text": "occurs continuously without stopping"
                },
                {
                  "key": "B",
                  "text": "occurs at irregular intervals and is not continuous"
                },
                {
                  "key": "C",
                  "text": "is generated underground"
                },
                {
                  "key": "D",
                  "text": "is entirely free of charge"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Intermittent' = gián đoạn, chập chờn, không liên tục (irregular, non-continuous)."
            },
            {
              "id": "R15",
              "question": "Why do traditional fossil fuel plants differ from solar and wind installations?",
              "options": [
                {
                  "key": "A",
                  "text": "Fossil fuel plants generate zero carbon emissions"
                },
                {
                  "key": "B",
                  "text": "Fossil fuel plants can provide consistent and dispatchable baseload power"
                },
                {
                  "key": "C",
                  "text": "Fossil fuel plants only operate during rainstorms"
                },
                {
                  "key": "D",
                  "text": "Fossil fuel plants cannot connect to high-voltage wires"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Unlike coal or natural gas plants that provide steady baseload power'."
            },
            {
              "id": "R16",
              "question": "What danger can arise from supply-demand mismatches in the power grid?",
              "options": [
                {
                  "key": "A",
                  "text": "Immediate price deflation of all groceries"
                },
                {
                  "key": "B",
                  "text": "Destabilizing grid frequency and triggering widespread blackouts"
                },
                {
                  "key": "C",
                  "text": "Excessive domestic tap water pressure"
                },
                {
                  "key": "D",
                  "text": "Faster mobile phone charging"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'potentially destabilizing grid frequency and risking blackouts'."
            },
            {
              "id": "R17",
              "question": "Which of the following is NOT mentioned in paragraph 4 as a grid stabilization solution?",
              "options": [
                {
                  "key": "A",
                  "text": "Utility-scale lithium-ion and flow battery facilities"
                },
                {
                  "key": "B",
                  "text": "Pumped hydroelectric storage"
                },
                {
                  "key": "C",
                  "text": "Constructing coal burning boilers in residential homes"
                },
                {
                  "key": "D",
                  "text": "Smart grid algorithms powered by AI"
                }
              ],
              "correctAnswer": "C",
              "explanation": "Lò than trong khu dân cư (coal boilers in homes) hoàn toàn không được nhắc đến."
            },
            {
              "id": "R18",
              "question": "The word 'bolstering' in paragraph 2 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "strengthening and reinforcing"
                },
                {
                  "key": "B",
                  "text": "weakening and undermining"
                },
                {
                  "key": "C",
                  "text": "delaying and postponing"
                },
                {
                  "key": "D",
                  "text": "measuring and calculating"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Bolstering security' = củng cố, tăng cường (strengthening, boosting)."
            },
            {
              "id": "R19",
              "question": "How do smart grid algorithms utilize AI according to paragraph 4?",
              "options": [
                {
                  "key": "A",
                  "text": "To forecast weather patterns and dynamically route surplus power"
                },
                {
                  "key": "B",
                  "text": "To disconnect residential neighborhoods randomly"
                },
                {
                  "key": "C",
                  "text": "To replace all human electricians with robots"
                },
                {
                  "key": "D",
                  "text": "To charge consumers higher night-time rates"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'utilize artificial intelligence to forecast weather patterns and dynamically route surplus power'."
            },
            {
              "id": "R20",
              "question": "What is the author's tone regarding the renewable energy transition?",
              "options": [
                {
                  "key": "A",
                  "text": "Deeply sarcastic and pessimistic"
                },
                {
                  "key": "B",
                  "text": "Objective, analytical, and forward-looking"
                },
                {
                  "key": "C",
                  "text": "Indifferent and dismissive"
                },
                {
                  "key": "D",
                  "text": "Hostile towards technological modernization"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Tác giả trình bày khách quan, phân tích khoa học và hướng tới giải pháp tương lai."
            }
          ]
        },
        {
          "id": "R-P3",
          "title": "Passage 3: The Psychology of Habit Formation and Behavioral Loops",
          "wordCount": 480,
          "genre": "Psychology & Behavioral Science",
          "text": "[P1] Human behavior is overwhelmingly governed by automatic routines rather than deliberate, conscious calculations. Cognitive psychologists estimate that upwards of forty percent of our daily actions—ranging from our morning coffee rituals to our smartphone browsing habits—are executed autonomously through subconscious neurological habit loops.\n\n[P2] At the core of every habit lies a three-part neurological architecture pioneered by behavioral researchers: the cue, the routine, and the reward. The cue acts as a sensory trigger that prompts the brain to initiate a pre-programmed behavior. The routine represents the physical, mental, or emotional action performed. Finally, the reward satisfies a neurochemical craving—often through a surge of dopamine—signaling the brain that this loop is worth preserving in memory.\n\n[P3] Understanding the habit loop illuminates why detrimental habits prove remarkably resilient to brute willpower alone. Attempting to suppress a deeply ingrained routine without altering the underlying cue or providing an alternative reward creates psychological tension and cognitive fatigue. Instead, behavioral scientists recommend the 'Golden Rule of Habit Change': keep the original cue and reward intact, but strategically substitute the middle routine with a healthier alternative.\n\n[P4] Furthermore, environmental architecture plays a decisive role in sustaining positive behavioral modifications. By consciously eliminating friction for desired behaviors—such as placing running shoes beside the bed—and increasing friction for unproductive impulses—such as storing digital devices outside the bedroom—individuals can reshape their subconscious routines without relying on finite reserves of daily self-control.",
          "questions": [
            {
              "id": "R21",
              "question": "What is the central topic of Passage 3?",
              "options": [
                {
                  "key": "A",
                  "text": "The financial cost of gym memberships"
                },
                {
                  "key": "B",
                  "text": "The neurological structure of habit loops and strategies for behavioral change"
                },
                {
                  "key": "C",
                  "text": "The chemistry of morning coffee beans"
                },
                {
                  "key": "D",
                  "text": "Why willpower alone is 100% sufficient for every goal"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Bài đọc phân tích cấu trúc 3 phần của thói quen và các chiến lược khoa học để thay đổi hành vi."
            },
            {
              "id": "R22",
              "question": "According to paragraph 1, approximately what percentage of daily human actions are habits?",
              "options": [
                {
                  "key": "A",
                  "text": "Under ten percent"
                },
                {
                  "key": "B",
                  "text": "Around twenty-five percent"
                },
                {
                  "key": "C",
                  "text": "More than forty percent"
                },
                {
                  "key": "D",
                  "text": "Exactly one hundred percent"
                }
              ],
              "correctAnswer": "C",
              "explanation": "'upwards of forty percent of our daily actions... are executed autonomously'."
            },
            {
              "id": "R23",
              "question": "What are the three components of the neurological habit loop in paragraph 2?",
              "options": [
                {
                  "key": "A",
                  "text": "Sleep, exercise, and diet"
                },
                {
                  "key": "B",
                  "text": "The cue, the routine, and the reward"
                },
                {
                  "key": "C",
                  "text": "Memory, intellect, and willpower"
                },
                {
                  "key": "D",
                  "text": "Input, processing, and hardware"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'the cue, the routine, and the reward'."
            },
            {
              "id": "R24",
              "question": "The word 'detrimental' in paragraph 3 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "harmful and damaging"
                },
                {
                  "key": "B",
                  "text": "beneficial and productive"
                },
                {
                  "key": "C",
                  "text": "ancient and traditional"
                },
                {
                  "key": "D",
                  "text": "costly and luxurious"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Detrimental habits' = thói quen có hại, tiêu cực (harmful, damaging)."
            },
            {
              "id": "R25",
              "question": "What does the 'Golden Rule of Habit Change' suggest doing?",
              "options": [
                {
                  "key": "A",
                  "text": "Eliminating all rewards from daily life"
                },
                {
                  "key": "B",
                  "text": "Keeping the cue and reward while substituting the routine"
                },
                {
                  "key": "C",
                  "text": "Ignoring all sensory triggers completely"
                },
                {
                  "key": "D",
                  "text": "Punishing oneself whenever a mistake occurs"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'keep the original cue and reward intact, but strategically substitute the middle routine'."
            },
            {
              "id": "R26",
              "question": "The word 'surge' in paragraph 2 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "gradual decline"
                },
                {
                  "key": "B",
                  "text": "sudden powerful increase"
                },
                {
                  "key": "C",
                  "text": "complete disappearance"
                },
                {
                  "key": "D",
                  "text": "stable balance"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Surge of dopamine' = sự tăng vọt, bùng nổ đột ngột (sudden sharp increase)."
            },
            {
              "id": "R27",
              "question": "Why is relying solely on willpower often ineffective for breaking bad habits?",
              "options": [
                {
                  "key": "A",
                  "text": "Willpower is a finite cognitive resource that causes fatigue"
                },
                {
                  "key": "B",
                  "text": "Humans lack the capacity for rational thought"
                },
                {
                  "key": "C",
                  "text": "Bad habits carry zero neurological rewards"
                },
                {
                  "key": "D",
                  "text": "Subconscious routines are permanently deleted every night"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Attempting to suppress... creates psychological tension and cognitive fatigue... finite reserves of daily self-control'."
            },
            {
              "id": "R28",
              "question": "What is an example of 'reducing friction' for a good habit mentioned in paragraph 4?",
              "options": [
                {
                  "key": "A",
                  "text": "Hiding running shoes inside a locked closet"
                },
                {
                  "key": "B",
                  "text": "Placing running shoes right beside the bed"
                },
                {
                  "key": "C",
                  "text": "Watching television until 2:00 AM"
                },
                {
                  "key": "D",
                  "text": "Setting ten alarm clocks across the house"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'eliminating friction for desired behaviors—such as placing running shoes beside the bed'."
            },
            {
              "id": "R29",
              "question": "The word 'it' in paragraph 2 refers to:",
              "options": [
                {
                  "key": "A",
                  "text": "the sensory trigger"
                },
                {
                  "key": "B",
                  "text": "the physical habit loop"
                },
                {
                  "key": "C",
                  "text": "the human brain"
                },
                {
                  "key": "D",
                  "text": "the coffee ritual"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'signaling the brain that this loop is worth preserving'."
            },
            {
              "id": "R30",
              "question": "What can be inferred about human nature from the text?",
              "options": [
                {
                  "key": "A",
                  "text": "We are entirely helpless victims of our genetics"
                },
                {
                  "key": "B",
                  "text": "Environmental design can strategically guide subconscious choices"
                },
                {
                  "key": "C",
                  "text": "Habits cannot be formed after age twenty-five"
                },
                {
                  "key": "D",
                  "text": "Dopamine is only produced during physical sports"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Thiết kế môi trường có thể tái định hình các thói quen tiềm thức một cách chiến lược."
            }
          ]
        },
        {
          "id": "R-P4",
          "title": "Passage 4: Urban Agriculture and Vertical Farming Technologies",
          "wordCount": 495,
          "genre": "Agriculture & Urbanization",
          "text": "[P1] As the global population approaches ten billion by mid-century, conventional agriculture faces unprecedented ecological constraints. Arable land is diminishing due to soil degradation and desertification, while traditional farming consumes roughly seventy percent of global freshwater reserves. In response to these compounding crises, agricultural scientists and urban architects are pioneering Controlled Environment Agriculture (CEA), commonly known as vertical farming.\n\n[P2] Vertical farms cultivate crops inside multi-story retrofitted urban facilities, repurposing abandoned warehouses, basements, and shipping containers. By employing soilless hydroponic and aeroponic systems, plant roots receive calibrated nutrient-rich water mists directly, reducing total water consumption by up to ninety-five percent compared to traditional open-field farming. Furthermore, high-efficiency spectrum-tuned LED lights deliver optimized photosynthetic wavelengths around the clock, accelerating harvest cycles regardless of external weather conditions.\n\n[P3] In addition to resource efficiency, urban vertical agriculture offers profound logistical advantages. By producing fresh leafy greens and vegetables within metropolitan borders, the distance food travels from farm to consumer—frequently spanning thousands of miles in conventional supply chains—is slashed to mere kilometers. This drastic reduction in food miles minimizes transportation fuel emissions and eliminates costly post-harvest food spoilage.\n\n[P4] Despite its transformative potential, vertical farming faces critical economic and technical bottlenecks. High initial capital expenditures for specialized LED fixtures, automated robotics, and environmental climate control units render operations financially demanding. Moreover, substantial electricity consumption from artificial lighting can elevate carbon emissions if powered by fossil fuel grids. Consequently, the commercial viability of vertical farming hinges on continued declines in renewable energy costs and specialized LED efficiencies.",
          "questions": [
            {
              "id": "R31",
              "question": "What is the primary subject of Passage 4?",
              "options": [
                {
                  "key": "A",
                  "text": "The history of medieval grain trade"
                },
                {
                  "key": "B",
                  "text": "The mechanisms, benefits, and challenges of vertical farming"
                },
                {
                  "key": "C",
                  "text": "Methods for chemical pesticide synthesis"
                },
                {
                  "key": "D",
                  "text": "Why cities should eliminate all public parks"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Toàn bài phân tích kỹ thuật, lợi thế và thách thức kinh tế của nông nghiệp thẳng đứng (vertical farming)."
            },
            {
              "id": "R32",
              "question": "According to paragraph 1, what percentage of global freshwater is consumed by traditional farming?",
              "options": [
                {
                  "key": "A",
                  "text": "Approximately twenty percent"
                },
                {
                  "key": "B",
                  "text": "Roughly fifty percent"
                },
                {
                  "key": "C",
                  "text": "Roughly seventy percent"
                },
                {
                  "key": "D",
                  "text": "Over ninety-five percent"
                }
              ],
              "correctAnswer": "C",
              "explanation": "'traditional farming consumes roughly seventy percent of global freshwater reserves'."
            },
            {
              "id": "R33",
              "question": "How much water can vertical farming save compared to open-field farming?",
              "options": [
                {
                  "key": "A",
                  "text": "Up to twenty percent"
                },
                {
                  "key": "B",
                  "text": "Up to fifty percent"
                },
                {
                  "key": "C",
                  "text": "Up to seventy-five percent"
                },
                {
                  "key": "D",
                  "text": "Up to ninety-five percent"
                }
              ],
              "correctAnswer": "D",
              "explanation": "'reducing total water consumption by up to ninety-five percent'."
            },
            {
              "id": "R34",
              "question": "The word 'retrofitted' in paragraph 2 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "demolished and destroyed"
                },
                {
                  "key": "B",
                  "text": "adapted and modified for a new purpose"
                },
                {
                  "key": "C",
                  "text": "painted in bright colors"
                },
                {
                  "key": "D",
                  "text": "abandoned and neglected"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Retrofitted facilities' = nhà xưởng được cải tạo, chuyển đổi công năng (modified, adapted)."
            },
            {
              "id": "R35",
              "question": "What role do spectrum-tuned LED lights play in vertical farms?",
              "options": [
                {
                  "key": "A",
                  "text": "They repel dangerous insects through loud frequencies"
                },
                {
                  "key": "B",
                  "text": "They provide optimized photosynthetic wavelengths around the clock"
                },
                {
                  "key": "C",
                  "text": "They boil the water to sanitize plant roots"
                },
                {
                  "key": "D",
                  "text": "They cool the building to freezing temperatures"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'deliver optimized photosynthetic wavelengths around the clock, accelerating harvest cycles'."
            },
            {
              "id": "R36",
              "question": "The phrase 'food miles' in paragraph 3 refers to:",
              "options": [
                {
                  "key": "A",
                  "text": "the speed at which crops grow per day"
                },
                {
                  "key": "B",
                  "text": "the distance food is transported from producer to consumer"
                },
                {
                  "key": "C",
                  "text": "the length of agricultural irrigation canals"
                },
                {
                  "key": "D",
                  "text": "the price per mile of supermarket delivery"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'the distance food travels from farm to consumer... food miles'."
            },
            {
              "id": "R37",
              "question": "According to paragraph 4, what is a major obstacle for vertical farming companies?",
              "options": [
                {
                  "key": "A",
                  "text": "Extreme shortage of agricultural seeds"
                },
                {
                  "key": "B",
                  "text": "High initial capital costs and intensive electricity consumption"
                },
                {
                  "key": "C",
                  "text": "Consumer refusal to eat leafy green vegetables"
                },
                {
                  "key": "D",
                  "text": "Government bans on indoor lighting"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'High initial capital expenditures... substantial electricity consumption from artificial lighting'."
            },
            {
              "id": "R38",
              "question": "The word 'expenditures' in paragraph 4 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "expenses and investments"
                },
                {
                  "key": "B",
                  "text": "profits and dividends"
                },
                {
                  "key": "C",
                  "text": "discounts and sales"
                },
                {
                  "key": "D",
                  "text": "debts and loans"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Capital expenditures' = chi phí đầu tư vốn (expenses, spending, capital outlays)."
            },
            {
              "id": "R39",
              "question": "Which of the following locations is NOT mentioned in paragraph 2 as a site for vertical farming?",
              "options": [
                {
                  "key": "A",
                  "text": "Abandoned warehouses"
                },
                {
                  "key": "B",
                  "text": "Basements"
                },
                {
                  "key": "C",
                  "text": "Shipping containers"
                },
                {
                  "key": "D",
                  "text": "Deep sea submarines"
                }
              ],
              "correctAnswer": "D",
              "explanation": "Tàu ngầm biển sâu (submarines) hoàn toàn không được nhắc đến."
            },
            {
              "id": "R40",
              "question": "What factor is essential for the future commercial success of vertical farming?",
              "options": [
                {
                  "key": "A",
                  "text": "Increased coal burning subsidies"
                },
                {
                  "key": "B",
                  "text": "Continued declines in renewable energy costs and higher LED efficiencies"
                },
                {
                  "key": "C",
                  "text": "A return to horse-plowed farming methods"
                },
                {
                  "key": "D",
                  "text": "Prohibiting all urban grocery supermarkets"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'hinges on continued declines in renewable energy costs and specialized LED efficiencies'."
            }
          ]
        }
      ]
    },
    "writing": {
      "time": 60,
      "task1": {
        "title": "Task 1: Viết Thư / Email (Chiếm 1/3 điểm - 20 phút - Tối thiểu 120 từ)",
        "prompt": "You are organizing a charity book donation event for underprivileged children in rural schools next month. Write an email to your university classmates.\nIn your email, you should:\n- Explain the purpose and significance of the charity book event\n- Specify the types of books needed and collection locations\n- Invite them to participate as volunteers and outline how they can help.",
        "sampleModel": "Dear classmates,\n\nI hope this email finds you well. I am writing to invite all of you to participate in our upcoming charity book drive entitled 'Books for Bright Futures', organized by our Student Association next month.\n\nAs you may know, many children living in remote mountainous communities lack access to basic textbooks and reference materials. The goal of our campaign is to collect at least 1,000 educational books, bilingual storybooks, and school supplies to establish mini-libraries for two rural primary schools before the new academic semester begins.\n\nWe warmly welcome donations of textbooks, dictionaries, literature, and children's science books in good condition. Donation drop-off boxes are placed at the Main Hall entrance and the Student Union office on the 2nd floor from Monday to Friday, between 8:00 AM and 5:00 PM.\n\nFurthermore, we are actively looking for enthusiastic student volunteers to assist with categorizing, cleaning, and packaging the donated books next Saturday. If you are interested in joining our volunteer squad, please reply to this email before this Thursday.\n\nThank you so much for your generosity and support. Together, we can make a meaningful difference in these young students' education.\n\nWarm regards,\nNguyen Van An\nClass President"
      },
      "task2": {
        "title": "Task 2: Viết Bài Luận Học Thuật (Chiếm 2/3 điểm - 40 phút - Tối thiểu 250 từ)",
        "prompt": "Some people believe that university students should focus solely on academic subjects, while others argue that participating in extracurricular activities and volunteering is equally essential for their future career success.\nDiscuss both views and give your own opinion.",
        "sampleModel": "In modern contemporary society, the rapid advent of high-speed internet technology and portable smartphones has revolutionized the way human beings interact and communicate. While some critics argue that digital interaction undermines the quality of traditional face-to-face relationships, I firmly believe that the multifaceted advantages of online communication substantially outweigh its potential drawbacks when utilized with proper discipline and mindfulness.\n\nOn the one hand, excessive reliance on virtual communication can occasionally diminish real-world interpersonal engagement. When individuals spend excessive hours chatting on virtual social networks or texting via messaging platforms, they may gradually experience social anxiety and emotional detachment in physical gatherings. Furthermore, subtle non-verbal communication cues such as genuine eye contact, micro facial expressions, tone of voice, and body posture are often obscured in digital text messaging. Consequently, this can sometimes lead to interpersonal misunderstandings, emotional superficiality, and weakened community cohesion.\n\nOn the other hand, online communication offers revolutionary benefits for global connectivity, academic learning, and professional collaboration. Firstly, international students, migrant workers, and expatriates can effortlessly maintain intimate daily contact with their families and loved ones across different time zones via high-definition video calling applications without incurring exorbitant financial expenditures. Secondly, digital collaboration platforms enable multinational enterprises and educational institutions to conduct seamless remote seminars, share vital academic research resources, and complete complex international projects efficiently. In addition, specialized online support communities empower individuals facing rare medical challenges or psychological difficulties to connect, share experiences, and receive constructive encouragement from empathetic peers across the globe.\n\nIn conclusion, although unrestrained screen time can reduce direct face-to-face engagement, online communication is undeniably an indispensable modern asset that bridges geographical divides, accelerates knowledge sharing, and enhances global collaborative productivity. Society should actively promote digital literacy and healthy technological habits to maximize these profound benefits."
      }
    },
    "speaking": {
      "time": 12,
      "part1": {
        "title": "Part 1: Social Interaction (3 phút)",
        "topic1": "Topic 1: Daily Habits & Productivity",
        "topic1Questions": [
          {
            "q": "What is your typical daily morning routine?",
            "sample": "To be honest, I usually wake up around 6:30 AM, drink a glass of warm water, and spend fifteen minutes doing light stretching exercises. Afterward, I prepare a nutritious breakfast and review my daily task list before heading to class."
          },
          {
            "q": "Do you prefer studying in the morning or at night?",
            "sample": "Personally, I find morning study sessions considerably more productive because my mind is fresh and undisturbed by social media notifications. Studying in the quiet morning atmosphere helps me retain complex concepts much faster."
          }
        ],
        "topic2": "Topic 2: Hobbies & Leisure Time",
        "topic2Questions": [
          {
            "q": "What do you enjoy doing during your free time?",
            "sample": "Whenever I have leisure time, I am passionate about reading personal development books and playing acoustic guitar. Engaging in music allows me to relieve mental stress after grueling study sessions."
          },
          {
            "q": "Did your hobbies change compared to when you were a child?",
            "sample": "Yes, absolutely. As a child, I spent countless hours playing outdoor hide-and-seek and video games. Nowadays, I gravitate towards creative and constructive activities like photography and landscape painting."
          }
        ]
      },
      "part2": {
        "title": "Part 2: Solution Discussion (4 phút)",
        "situation": "Your university English club is deciding on the best format for their end-of-term celebration. There are three options:\n1. Having a formal dinner banquet at a luxury restaurant\n2. Organizing an outdoor camping and team-building trip in a pine forest\n3. Hosting a movie night and potluck party in the university auditorium\nWhich option do you think is the best choice?",
        "bestOption": "Option 2: Organizing an outdoor camping and team-building trip",
        "sampleSpeech": "Good morning examiner. Faced with the situation of selecting the most suitable celebration for our English club, among the three proposed options, I would firmly choose Option 2—organizing an outdoor camping and team-building trip.\n\nFirst and foremost, an outdoor camping trip provides an authentic communal environment where members can participate in collaborative games, sit around a campfire, and foster meaningful interpersonal bonds. It is far more memorable and engaging than merely sitting passively.\n\nIn addition, camping is highly budget-friendly for university students, whereas Option 1 (a luxury restaurant banquet) is excessively exorbitant and financially burdensome for many members. Furthermore, Option 3 (a movie night) lacks active verbal interaction, which defeats the core purpose of an English club.\n\nTaking all factors into account, the outdoor camping excursion is undeniably the optimal solution."
      },
      "part3": {
        "title": "Part 3: Topic Development (5 phút)",
        "topic": "The Benefits of Lifelong Learning in the Digital Era",
        "mindMap": {
          "idea1": "Career Adaptability & Up-skilling",
          "idea2": "Cognitive Health & Mental Sharpness",
          "idea3": "Personal Fulfillment & Confidence",
          "ownIdea": "Bridging Intergenerational Gaps"
        },
        "sampleSpeech": "Good morning examiner. Today, I would like to deliver my presentation regarding the key benefits of lifelong learning in our modern digital society.\n\nFirstly, continuous learning guarantees career adaptability. As technological innovations automate traditional jobs, up-skilling through online courses enables professionals to remain competitive and acquire high-demand digital proficiencies.\n\nSecondly, engaging in intellectual pursuits preserves cognitive health and mental agility. Studies demonstrate that stimulating the brain with new languages or skills substantially delays age-related cognitive decline.\n\nFinally, my own personal perspective is that lifelong learning bridges intergenerational gaps, allowing older generations to communicate effectively with digital-native youth.\n\nIn conclusion, lifelong learning is indispensable for both individual self-actualization and overall social progress.",
        "followUp": [
          {
            "q": "How can governments encourage elderly citizens to embrace digital technology?",
            "a": "Governments can establish free community computer workshops in local cultural centers and recruit patient university volunteers to provide hands-on smartphone coaching for seniors."
          },
          {
            "q": "Do you believe children are learning too much through screens nowadays?",
            "a": "While digital learning offers interactive advantages, excessive screen time can cause digital eye strain and diminish real-world physical play. A balanced approach with scheduled screen breaks is vital."
          }
        ]
      }
    }
  },
  {
    "id": "vstep-exam-02",
    "name": "Đề Thi Chuẩn VSTEP Số 02 (Định Dạng B1 ĐHQG)",
    "description": "Bộ đề thi chuẩn hóa 4 kỹ năng VSTEP B1: Nghe (35 câu), Đọc (40 câu - 4 bài), Viết (2 bài), Nói (3 phần).",
    "listening": {
      "time": 40,
      "totalQuestions": 35,
      "part1": {
        "title": "Part 1: 8 Thông Báo Ngắn (8 câu hỏi)",
        "instructions": "Nghe 8 đoạn thông báo/hội thoại ngắn và chọn đáp án chính xác.",
        "questions": [
          {
            "id": "T2-L1",
            "audioText": "Good morning shoppers. Metro Electronics is pleased to announce a flash sale on all wireless Bluetooth headphones and laptop accessories. Enjoy a 30% discount at counter 4 on the second floor until 12:00 noon today.",
            "question": "What items are on promotional sale at Metro Electronics?",
            "options": [
              {
                "key": "A",
                "text": "Smart televisions and refrigerators"
              },
              {
                "key": "B",
                "text": "Wireless headphones and laptop accessories"
              },
              {
                "key": "C",
                "text": "Smartphone screen protectors"
              },
              {
                "key": "D",
                "text": "Digital cameras and tripods"
              }
            ],
            "correctAnswer": "B",
            "explanation": "Thông báo: 'flash sale on all wireless Bluetooth headphones and laptop accessories'."
          },
          {
            "id": "T2-L2",
            "audioText": "Passenger advisory for Express Train SE3 to Hue: Due to scheduled track repair between Da Nang and Hue, our arrival time will be delayed by forty-five minutes. Complimentary drinking water is available in dining carriage number 5.",
            "question": "How long is the train delayed?",
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
            "correctAnswer": "C",
            "explanation": "'arrival time will be delayed by forty-five minutes'."
          },
          {
            "id": "T2-L3",
            "audioText": "Hello James, this is Dr. Miller's dental office calling to remind you of your root canal appointment tomorrow afternoon at 3:15 PM. Please arrive ten minutes early to complete medical history paperwork.",
            "question": "What time is James's appointment scheduled for?",
            "options": [
              {
                "key": "A",
                "text": "10:00 AM"
              },
              {
                "key": "B",
                "text": "2:30 PM"
              },
              {
                "key": "C",
                "text": "3:15 PM"
              },
              {
                "key": "D",
                "text": "3:45 PM"
              }
            ],
            "correctAnswer": "C",
            "explanation": "'appointment tomorrow afternoon at 3:15 PM'."
          },
          {
            "id": "T2-L4",
            "audioText": "Weather bulletin for the northern provinces: A strong cold front from the north will cause temperatures in Hanoi to drop sharply to 14 degrees Celsius tonight, accompanied by scattered drizzle. Residents should dress warmly.",
            "question": "What will the weather in Hanoi be like tonight?",
            "options": [
              {
                "key": "A",
                "text": "Hot and humid with thunderstorms"
              },
              {
                "key": "B",
                "text": "Cold with temperatures dropping to 14°C and drizzle"
              },
              {
                "key": "C",
                "text": "Sunny and dry throughout the night"
              },
              {
                "key": "D",
                "text": "Heavy snowfall and frozen roads"
              }
            ],
            "correctAnswer": "B",
            "explanation": "'drop sharply to 14 degrees Celsius tonight, accompanied by scattered drizzle'."
          },
          {
            "id": "T2-L5",
            "audioText": "Announcement for University Sports Complex members: The indoor badminton courts will be reserved exclusively for the Inter-faculty Tournament this Saturday from 8:00 AM to 5:00 PM. General practice will resume on Sunday.",
            "question": "Why will the badminton courts be unavailable for general practice this Saturday?",
            "options": [
              {
                "key": "A",
                "text": "Roof maintenance and repainting"
              },
              {
                "key": "B",
                "text": "Inter-faculty Tournament competition"
              },
              {
                "key": "C",
                "text": "Cleaning and sanitization"
              },
              {
                "key": "D",
                "text": "Power outage in the sports complex"
              }
            ],
            "correctAnswer": "B",
            "explanation": "'reserved exclusively for the Inter-faculty Tournament'."
          },
          {
            "id": "T2-L6",
            "audioText": "M: Hi Karen, have you received the invoice for the office printer paper?\nW: Yes Brian, but the supplier charged us $150 instead of the agreed contract price of $120. I'll call their billing department right away to request a revised invoice.",
            "question": "What was the agreed contract price for the paper?",
            "options": [
              {
                "key": "A",
                "text": "$100"
              },
              {
                "key": "B",
                "text": "$120"
              },
              {
                "key": "C",
                "text": "$150"
              },
              {
                "key": "D",
                "text": "$270"
              }
            ],
            "correctAnswer": "B",
            "explanation": "'instead of the agreed contract price of $120'."
          },
          {
            "id": "T2-L7",
            "audioText": "Notice from Blue Sky Airlines: Online check-in is now open 24 hours prior to departure for all domestic flights. Passengers traveling with carry-on baggage only can proceed directly to security screening at Concourse B.",
            "question": "When can passengers check in online for their flights?",
            "options": [
              {
                "key": "A",
                "text": "2 hours before departure"
              },
              {
                "key": "B",
                "text": "12 hours before departure"
              },
              {
                "key": "C",
                "text": "24 hours before departure"
              },
              {
                "key": "D",
                "text": "48 hours before departure"
              }
            ],
            "correctAnswer": "C",
            "explanation": "'Online check-in is now open 24 hours prior to departure'."
          },
          {
            "id": "T2-L8",
            "audioText": "Attention museum visitors. Our special exhibition 'Treasures of Ancient Mesopotamia' on the third floor gallery will close in 15 minutes. Please proceed to the main foyer to collect your coats and backpacks.",
            "question": "Where are visitors instructed to collect their personal belongings?",
            "options": [
              {
                "key": "A",
                "text": "At the third floor gallery"
              },
              {
                "key": "B",
                "text": "In the museum gift shop"
              },
              {
                "key": "C",
                "text": "At the main foyer"
              },
              {
                "key": "D",
                "text": "Near the outdoor garden"
              }
            ],
            "correctAnswer": "C",
            "explanation": "'Please proceed to the main foyer to collect your coats and backpacks'."
          }
        ]
      },
      "part2": {
        "title": "Part 2: 3 Đoạn Hội Thoại Dài (12 câu hỏi)",
        "instructions": "Bạn sẽ nghe 3 đoạn hội thoại. Mỗi hội thoại có 4 câu hỏi trắc nghiệm.",
        "conversations": [
          {
            "id": "C1",
            "title": "Hội thoại 1: Lập kế hoạch thực tập tốt nghiệp",
            "audioTranscript": "Man: Hi Elena, have you submitted your summer internship application to the Career Center yet? The deadline is this Friday.\nWoman: Not quite yet, David. I'm torn between two choices: an internship at a local software startup and an administrative position at a multinational corporation.\nMan: Well, the multinational company surely looks impressive on a resume, but you often end up doing repetitive paperwork. At a startup, you'll work directly with senior engineers and gain hands-on coding experience.\nWoman: That's a valid point. I really want to sharpen my practical programming skills and understand full project workflows. I think I'll finalize my application for the startup tonight!",
            "questions": [
              {
                "id": "L9",
                "question": "What is the main topic of the conversation?",
                "options": [
                  {
                    "key": "A",
                    "text": "Preparing for final university examinations"
                  },
                  {
                    "key": "B",
                    "text": "Choosing a summer internship placement"
                  },
                  {
                    "key": "C",
                    "text": "Applying for a postgraduate scholarship"
                  },
                  {
                    "key": "D",
                    "text": "Negotiating starting salary at a company"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Hai người trao đổi về việc nộp hồ sơ thực tập mùa hè (summer internship)."
              },
              {
                "id": "L10",
                "question": "When is the deadline for submitting the internship application?",
                "options": [
                  {
                    "key": "A",
                    "text": "This Wednesday"
                  },
                  {
                    "key": "B",
                    "text": "This Friday"
                  },
                  {
                    "key": "C",
                    "text": "Next Monday"
                  },
                  {
                    "key": "D",
                    "text": "At the end of the month"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "David nói: 'The deadline is this Friday'."
              },
              {
                "id": "L11",
                "question": "What advantage of working at a startup does David mention?",
                "options": [
                  {
                    "key": "A",
                    "text": "Higher monthly allowance"
                  },
                  {
                    "key": "B",
                    "text": "Opportunity for direct hands-on coding experience"
                  },
                  {
                    "key": "C",
                    "text": "Shorter daily commuting distance"
                  },
                  {
                    "key": "D",
                    "text": "Guaranteed permanent job offer"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "David nêu: 'work directly with senior engineers and gain hands-on coding experience'."
              },
              {
                "id": "L12",
                "question": "What does Elena decide to do at the end?",
                "options": [
                  {
                    "key": "A",
                    "text": "Apply for the software startup position"
                  },
                  {
                    "key": "B",
                    "text": "Postpone her internship until next year"
                  },
                  {
                    "key": "C",
                    "text": "Consult her academic advisor tomorrow"
                  },
                  {
                    "key": "D",
                    "text": "Accept the multinational administrative role"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Elena kết luận: 'I think I'll finalize my application for the startup tonight!'."
              }
            ]
          },
          {
            "id": "C2",
            "title": "Hội thoại 2: Thuê căn hộ chung cư cho sinh viên",
            "audioTranscript": "Woman: Good afternoon Mr. Tran, my roommate and I are looking to rent a two-bedroom apartment near the University of Technology.\nMan: Hello! I have a fully furnished unit on the 8th floor of Sunrise Tower. It has two bedrooms, a spacious balcony, air conditioning, and high-speed fiber internet included.\nWoman: That sounds wonderful. How much is the monthly rent, and what about utility bills?\nMan: The rent is 8 million VND per month. Electricity and water are billed separately according to state utility meters. We require a two-month security deposit upon signing the one-year lease.\nWoman: Can we visit the apartment tomorrow morning around 9:30 AM to inspect the condition before making a decision?\nMan: Absolutely, I'll meet you at the lobby entrance.",
            "questions": [
              {
                "id": "L13",
                "question": "What type of accommodation are the students seeking?",
                "options": [
                  {
                    "key": "A",
                    "text": "A shared dormitory room"
                  },
                  {
                    "key": "B",
                    "text": "A two-bedroom furnished apartment"
                  },
                  {
                    "key": "C",
                    "text": "A studio townhouse with a garden"
                  },
                  {
                    "key": "D",
                    "text": "A homestay with a host family"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'looking to rent a two-bedroom apartment near the University'."
              },
              {
                "id": "L14",
                "question": "What is included in the 8 million VND monthly rent?",
                "options": [
                  {
                    "key": "A",
                    "text": "Electricity and cooking gas"
                  },
                  {
                    "key": "B",
                    "text": "High-speed fiber internet and furniture"
                  },
                  {
                    "key": "C",
                    "text": "Daily cleaning and laundry services"
                  },
                  {
                    "key": "D",
                    "text": "Underground car parking fees"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'fully furnished... high-speed fiber internet included'."
              },
              {
                "id": "L15",
                "question": "How much deposit is required upon signing the contract?",
                "options": [
                  {
                    "key": "A",
                    "text": "One month rent"
                  },
                  {
                    "key": "B",
                    "text": "Two months rent"
                  },
                  {
                    "key": "C",
                    "text": "Three months rent"
                  },
                  {
                    "key": "D",
                    "text": "No deposit required"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'We require a two-month security deposit upon signing'."
              },
              {
                "id": "L16",
                "question": "When will the woman inspect the apartment?",
                "options": [
                  {
                    "key": "A",
                    "text": "This evening at 7:00 PM"
                  },
                  {
                    "key": "B",
                    "text": "Tomorrow morning at 9:30 AM"
                  },
                  {
                    "key": "C",
                    "text": "Next Saturday afternoon"
                  },
                  {
                    "key": "D",
                    "text": "At the end of the week"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'visit the apartment tomorrow morning around 9:30 AM'."
              }
            ]
          },
          {
            "id": "C3",
            "title": "Hội thoại 3: Tổ chức chiến dịch bảo vệ môi trường",
            "audioTranscript": "Man: Lisa, our Student Union environmental campaign 'Green Campus' is scheduled for next Saturday. Have we secured all the trash grabbers, biodegradable garbage bags, and gloves?\nWoman: Yes Tom, the logistics team received 200 pairs of protective gloves and 500 compostable bags yesterday from our corporate sponsor.\nMan: Fantastic! How many student volunteers have registered online so far?\nWoman: We reached 180 registrations this morning, exceeding our initial target of 150. I've divided them into four squads: plastic bottle sorting, tree planting around the sports field, electronic waste collection, and riverbank clean-up.\nMan: Excellent organization! Let's hold a short briefing on Friday afternoon to distribute team badges and safety instructions.",
            "questions": [
              {
                "id": "L17",
                "question": "What is the name of the Student Union campaign?",
                "options": [
                  {
                    "key": "A",
                    "text": "Clean Oceans Initiative"
                  },
                  {
                    "key": "B",
                    "text": "Green Campus"
                  },
                  {
                    "key": "C",
                    "text": "Zero Carbon Future"
                  },
                  {
                    "key": "D",
                    "text": "Eco-Friendly Living"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'our Student Union environmental campaign Green Campus'."
              },
              {
                "id": "L18",
                "question": "Who provided the gloves and biodegradable bags?",
                "options": [
                  {
                    "key": "A",
                    "text": "The local city council"
                  },
                  {
                    "key": "B",
                    "text": "A corporate sponsor"
                  },
                  {
                    "key": "C",
                    "text": "Student Union funding"
                  },
                  {
                    "key": "D",
                    "text": "Donations from professors"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'received... from our corporate sponsor'."
              },
              {
                "id": "L19",
                "question": "How many volunteers have registered for the event?",
                "options": [
                  {
                    "key": "A",
                    "text": "150 volunteers"
                  },
                  {
                    "key": "B",
                    "text": "180 volunteers"
                  },
                  {
                    "key": "C",
                    "text": "200 volunteers"
                  },
                  {
                    "key": "D",
                    "text": "500 volunteers"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'We reached 180 registrations this morning, exceeding our initial target of 150'."
              },
              {
                "id": "L20",
                "question": "What will happen during Friday afternoon's meeting?",
                "options": [
                  {
                    "key": "A",
                    "text": "Planting trees around the football field"
                  },
                  {
                    "key": "B",
                    "text": "Distributing badges and safety instructions"
                  },
                  {
                    "key": "C",
                    "text": "Collecting electronic waste from residents"
                  },
                  {
                    "key": "D",
                    "text": "Interviewing new team captains"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'hold a short briefing on Friday afternoon to distribute team badges and safety instructions'."
              }
            ]
          }
        ]
      },
      "part3": {
        "title": "Part 3: 3 Bài Thuyết Trình Học Thuật (15 câu hỏi)",
        "instructions": "Bạn sẽ nghe 3 bài giảng học thuật. Mỗi bài giảng có 5 câu hỏi trắc nghiệm.",
        "talks": [
          {
            "id": "T1",
            "title": "Bài giảng 1: Sự tiến hóa của Trí tuệ Nhân tạo trong Giáo dục",
            "audioTranscript": "Good morning class. Today, we delve into the transformative role of Artificial Intelligence in contemporary education. Historically, traditional classrooms adopted a one-size-fits-all approach, where all students followed identical textbooks regardless of individual learning paces. Modern AI-driven adaptive platforms, however, analyze student interaction data in real time to customize personalized exercise difficulty and learning pathways.\n\nFurthermore, automated grading systems now evaluate written essays and provide instant constructive feedback on grammar, cohesion, and vocabulary usage, saving educators substantial grading time. Nonetheless, educational researchers emphasize that AI cannot replace the empathetic human dimension of teaching, such as mentoring, inspiring curiosity, and emotional encouragement.",
            "questions": [
              {
                "id": "L21",
                "question": "What is the primary topic of the lecture?",
                "options": [
                  {
                    "key": "A",
                    "text": "History of traditional university examinations"
                  },
                  {
                    "key": "B",
                    "text": "Application and limitations of AI in education"
                  },
                  {
                    "key": "C",
                    "text": "Developing robotic hardware for school labs"
                  },
                  {
                    "key": "D",
                    "text": "Financial cost of computer software"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Toàn bộ bài giảng phân tích vai trò chuyển đổi và các khía cạnh của AI trong giáo dục hiện đại."
              },
              {
                "id": "L22",
                "question": "How do AI adaptive platforms personalize learning for students?",
                "options": [
                  {
                    "key": "A",
                    "text": "By eliminating all final exams"
                  },
                  {
                    "key": "B",
                    "text": "By customizing exercise difficulty based on interaction data"
                  },
                  {
                    "key": "C",
                    "text": "By replacing human professors completely"
                  },
                  {
                    "key": "D",
                    "text": "By providing free digital tablets"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'analyze student interaction data in real time to customize personalized exercise difficulty'."
              },
              {
                "id": "L23",
                "question": "What task can automated grading systems assist teachers with?",
                "options": [
                  {
                    "key": "A",
                    "text": "Evaluating essays and providing instant linguistic feedback"
                  },
                  {
                    "key": "B",
                    "text": "Maintaining physical sports equipment"
                  },
                  {
                    "key": "C",
                    "text": "Conducting parent-teacher conferences"
                  },
                  {
                    "key": "D",
                    "text": "Arranging school bus schedules"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "'evaluate written essays and provide instant constructive feedback'."
              },
              {
                "id": "L24",
                "question": "According to researchers, what human quality cannot be replaced by AI?",
                "options": [
                  {
                    "key": "A",
                    "text": "Calculating mathematical formulas"
                  },
                  {
                    "key": "B",
                    "text": "Storing historical dates and facts"
                  },
                  {
                    "key": "C",
                    "text": "Empathy, mentoring, and emotional encouragement"
                  },
                  {
                    "key": "D",
                    "text": "Translating foreign language articles"
                  }
                ],
                "correctAnswer": "C",
                "explanation": "'AI cannot replace the empathetic human dimension of teaching, such as mentoring, inspiring curiosity, and emotional encouragement'."
              },
              {
                "id": "L25",
                "question": "What was a key limitation of the traditional historical classroom?",
                "options": [
                  {
                    "key": "A",
                    "text": "Lack of physical chalkboards"
                  },
                  {
                    "key": "B",
                    "text": "A rigid one-size-fits-all approach for all learners"
                  },
                  {
                    "key": "C",
                    "text": "Short daily study duration"
                  },
                  {
                    "key": "D",
                    "text": "Excessive student interaction"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'traditional classrooms adopted a one-size-fits-all approach'."
              }
            ]
          },
          {
            "id": "T2",
            "title": "Bài giảng 2: Đô thị sinh thái và Phát triển bền vững",
            "audioTranscript": "Welcome everyone. Today's urban planning seminar focuses on Eco-Cities, designed to minimize ecological footprints through sustainable architecture and renewable energy. A hallmark of eco-cities is the 15-minute neighborhood model, ensuring every resident can access essential services, schools, groceries, and green parks within a 15-minute walk or bicycle ride.\n\nIn addition, green roofs and vertical gardens help combat the urban heat island effect, decreasing ambient air temperatures by up to 3 degrees Celsius during summer heatwaves. Permeable pavements and rainwater harvesting reservoirs absorb storm runoff, substantially mitigating urban flash flooding risks.",
            "questions": [
              {
                "id": "L26",
                "question": "What is the core principle of an Eco-City?",
                "options": [
                  {
                    "key": "A",
                    "text": "Maximizing automotive highways and parking lots"
                  },
                  {
                    "key": "B",
                    "text": "Minimizing ecological footprint through sustainability"
                  },
                  {
                    "key": "C",
                    "text": "Building skyscrapers with luxury penthouses"
                  },
                  {
                    "key": "D",
                    "text": "Banning all commercial industrial businesses"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'designed to minimize ecological footprints through sustainable architecture and renewable energy'."
              },
              {
                "id": "L27",
                "question": "What is guaranteed in a 15-minute neighborhood model?",
                "options": [
                  {
                    "key": "A",
                    "text": "Free public high-speed trains to airports"
                  },
                  {
                    "key": "B",
                    "text": "Access to daily amenities within a 15-minute walk or bike ride"
                  },
                  {
                    "key": "C",
                    "text": "Free residential high-speed internet"
                  },
                  {
                    "key": "D",
                    "text": "15 minutes of free parking everywhere"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'access essential services, schools, groceries, and green parks within a 15-minute walk or bicycle ride'."
              },
              {
                "id": "L28",
                "question": "How do vertical gardens and green roofs improve urban climates?",
                "options": [
                  {
                    "key": "A",
                    "text": "By increasing winter snowfall"
                  },
                  {
                    "key": "B",
                    "text": "By reducing ambient temperatures during heatwaves by up to 3°C"
                  },
                  {
                    "key": "C",
                    "text": "By eliminating the need for indoor lighting"
                  },
                  {
                    "key": "D",
                    "text": "By blocking solar panels"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'decreasing ambient air temperatures by up to 3 degrees Celsius during summer heatwaves'."
              },
              {
                "id": "L29",
                "question": "What problem is mitigated by permeable pavements and rainwater reservoirs?",
                "options": [
                  {
                    "key": "A",
                    "text": "Urban flash flooding risks"
                  },
                  {
                    "key": "B",
                    "text": "Traffic speed violations"
                  },
                  {
                    "key": "C",
                    "text": "Air pollution from aircraft"
                  },
                  {
                    "key": "D",
                    "text": "Underground subway noise"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "'substantially mitigating urban flash flooding risks'."
              },
              {
                "id": "L30",
                "question": "What type of transportation is prioritized in eco-city design?",
                "options": [
                  {
                    "key": "A",
                    "text": "Heavy diesel commercial trucks"
                  },
                  {
                    "key": "B",
                    "text": "Walking, cycling, and clean public transit"
                  },
                  {
                    "key": "C",
                    "text": "Private gasoline sports cars"
                  },
                  {
                    "key": "D",
                    "text": "Domestic commercial flights"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Đoạn văn nhấn mạnh đi bộ (walking) và xe đạp (cycling) trong mô hình khu dân cư 15 phút."
              }
            ]
          },
          {
            "id": "T3",
            "title": "Bài giảng 3: Tâm lý học hành vi về Thói quen và Giấc ngủ",
            "audioTranscript": "Good afternoon colleagues. In this neurobiology lecture, we explore the profound impact of circadian rhythms and sleep architecture on cognitive performance and habit formation. Sleep is structured in repeating 90-minute cycles transitioning between Non-REM slow-wave sleep and REM sleep.\n\nDuring deep slow-wave sleep, the brain's glymphatic system flushes out metabolic toxins like beta-amyloid, while the hippocampus transfers short-term memories into the cerebral cortex for long-term consolidation. Chronic sleep deprivation of under six hours per night impairs executive decision-making, weakens emotional regulation, and elevates cortisol stress hormones.",
            "questions": [
              {
                "id": "L31",
                "question": "How long does a typical sleep cycle last in human adults?",
                "options": [
                  {
                    "key": "A",
                    "text": "45 minutes"
                  },
                  {
                    "key": "B",
                    "text": "90 minutes"
                  },
                  {
                    "key": "C",
                    "text": "120 minutes"
                  },
                  {
                    "key": "D",
                    "text": "180 minutes"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'Sleep is structured in repeating 90-minute cycles'."
              },
              {
                "id": "L32",
                "question": "What occurs in the brain during deep slow-wave sleep?",
                "options": [
                  {
                    "key": "A",
                    "text": "Toxins are cleared and memories consolidated into long-term storage"
                  },
                  {
                    "key": "B",
                    "text": "Brain metabolism increases to maximum speed"
                  },
                  {
                    "key": "C",
                    "text": "Heart rate accelerates dramatically"
                  },
                  {
                    "key": "D",
                    "text": "All nerve communication stops entirely"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "'flushes out metabolic toxins... transfers short-term memories into the cerebral cortex for long-term consolidation'."
              },
              {
                "id": "L33",
                "question": "What part of the brain coordinates the transfer of memories?",
                "options": [
                  {
                    "key": "A",
                    "text": "The retina"
                  },
                  {
                    "key": "B",
                    "text": "The hippocampus"
                  },
                  {
                    "key": "C",
                    "text": "The spinal cord"
                  },
                  {
                    "key": "D",
                    "text": "The auditory nerve"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'the hippocampus transfers short-term memories into the cerebral cortex'."
              },
              {
                "id": "L34",
                "question": "What is an adverse consequence of chronic sleep deprivation under 6 hours?",
                "options": [
                  {
                    "key": "A",
                    "text": "Enhanced photographic memory"
                  },
                  {
                    "key": "B",
                    "text": "Impaired executive decision-making and elevated cortisol"
                  },
                  {
                    "key": "C",
                    "text": "Decreased body temperature"
                  },
                  {
                    "key": "D",
                    "text": "Faster reflex reaction times"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'impairs executive decision-making, weakens emotional regulation, and elevates cortisol'."
              },
              {
                "id": "L35",
                "question": "What biological system regulates the 24-hour sleep-wake cycle?",
                "options": [
                  {
                    "key": "A",
                    "text": "Circadian rhythm"
                  },
                  {
                    "key": "B",
                    "text": "Digestive enzymes"
                  },
                  {
                    "key": "C",
                    "text": "Skeletal joints"
                  },
                  {
                    "key": "D",
                    "text": "Respiratory diaphragm"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "'profound impact of circadian rhythms and sleep architecture'."
              }
            ]
          }
        ]
      }
    },
    "reading": {
      "time": 60,
      "totalQuestions": 40,
      "passages": [
        {
          "id": "R-P1",
          "title": "Passage 1: The Evolution of Global Online Education",
          "wordCount": 460,
          "genre": "Education & Technology",
          "text": "[P1] In recent years, distance learning has shifted from an unconventional alternative into a mainstream pillar of higher education. Propelled by ubiquitous broadband internet, cloud computing, and interactive virtual classrooms, universities worldwide now deliver fully accredited degree programs to millions of students who reside thousands of kilometers from campus.\n\n[P2] The most prominent advantage of online education lies in its unprecedented geographic and temporal flexibility. Working professionals, parents, and geographically isolated individuals can tailor their study schedules around demanding domestic and occupational obligations. Asynchronous video lectures, interactive discussion forums, and downloadable multimedia resources empower learners to assimilate complex concepts at their own customized pace rather than adhering to rigid classroom timetables.\n\n[P3] However, virtual learning is not without pedagogical drawbacks. The absence of spontaneous face-to-face interaction can precipitate profound feelings of academic isolation and reduced collaborative engagement. Furthermore, online formats place tremendous demands on self-discipline and autonomous time management. Research indicates that completion rates for open online courses frequently hover below twenty percent, primarily because students struggle to maintain intrinsic motivation without structured institutional accountability.\n\n[P4] To address these deficits, contemporary educational institutions are pioneering hybrid or blended models. By fusing flexible self-paced digital modules with periodic interactive group seminars, universities aim to retain the accessibility of distance education while preserving the vibrant social camaraderie and accountability of traditional physical campuses.",
          "questions": [
            {
              "id": "R1",
              "question": "What is the primary focus of the passage?",
              "options": [
                {
                  "key": "A",
                  "text": "The financial cost of university tuition fees"
                },
                {
                  "key": "B",
                  "text": "The growth, benefits, and challenges of online education"
                },
                {
                  "key": "C",
                  "text": "Methods for building physical campus libraries"
                },
                {
                  "key": "D",
                  "text": "The history of postal correspondence courses"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Đoạn 1 nêu sự phát triển, Đoạn 2 nêu ưu điểm, Đoạn 3 nêu thách thức, Đoạn 4 nêu giải pháp lai (hybrid)."
            },
            {
              "id": "R2",
              "question": "The word 'ubiquitous' in paragraph 1 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "expensive and luxurious"
                },
                {
                  "key": "B",
                  "text": "widespread and found everywhere"
                },
                {
                  "key": "C",
                  "text": "unreliable and dangerous"
                },
                {
                  "key": "D",
                  "text": "temporary and experimental"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Ubiquitous' = phổ biến khắp nơi (widespread, omnipresent)."
            },
            {
              "id": "R3",
              "question": "According to paragraph 2, who benefits significantly from the flexibility of online learning?",
              "options": [
                {
                  "key": "A",
                  "text": "Only full-time residential undergraduates"
                },
                {
                  "key": "B",
                  "text": "Working professionals and isolated individuals"
                },
                {
                  "key": "C",
                  "text": "Professors who dislike lecturing in person"
                },
                {
                  "key": "D",
                  "text": "Commercial internet providers"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Working professionals, parents, and geographically isolated individuals can tailor their study schedules'."
            },
            {
              "id": "R4",
              "question": "The word 'assimilate' in paragraph 2 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "absorb and understand"
                },
                {
                  "key": "B",
                  "text": "reject and ignore"
                },
                {
                  "key": "C",
                  "text": "translate and print"
                },
                {
                  "key": "D",
                  "text": "memorize without thinking"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Assimilate concepts' = tiếp thu, hiểu sâu kiến thức (absorb and comprehend)."
            },
            {
              "id": "R5",
              "question": "According to paragraph 3, what is a major pedagogical disadvantage of virtual learning?",
              "options": [
                {
                  "key": "A",
                  "text": "Excessive physical textbook weight"
                },
                {
                  "key": "B",
                  "text": "Feelings of isolation and lack of face-to-face interaction"
                },
                {
                  "key": "C",
                  "text": "Frequent power outages in university buildings"
                },
                {
                  "key": "D",
                  "text": "Strict morning attendance rules"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'The absence of spontaneous face-to-face interaction can precipitate profound feelings of academic isolation'."
            },
            {
              "id": "R6",
              "question": "The word 'these' in paragraph 4 refers to:",
              "options": [
                {
                  "key": "A",
                  "text": "online discussion forums"
                },
                {
                  "key": "B",
                  "text": "pedagogical drawbacks and deficits"
                },
                {
                  "key": "C",
                  "text": "traditional university campuses"
                },
                {
                  "key": "D",
                  "text": "high completion statistics"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'To address these deficits' liên hệ lại các hạn chế đã nêu ở đoạn 3."
            },
            {
              "id": "R7",
              "question": "Why do completion rates for open online courses often fall below twenty percent?",
              "options": [
                {
                  "key": "A",
                  "text": "Tuition fees are excessively exorbitant"
                },
                {
                  "key": "B",
                  "text": "Students struggle with self-discipline without structured accountability"
                },
                {
                  "key": "C",
                  "text": "The courses are taught in dead languages"
                },
                {
                  "key": "D",
                  "text": "Internet servers are shut down every night"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'students struggle to maintain intrinsic motivation without structured institutional accountability'."
            },
            {
              "id": "R8",
              "question": "Which of the following is NOT mentioned as a feature of online education in paragraph 2?",
              "options": [
                {
                  "key": "A",
                  "text": "Asynchronous video lectures"
                },
                {
                  "key": "B",
                  "text": "Interactive discussion forums"
                },
                {
                  "key": "C",
                  "text": "Compulsory daily uniform requirements"
                },
                {
                  "key": "D",
                  "text": "Downloadable multimedia resources"
                }
              ],
              "correctAnswer": "C",
              "explanation": "Đồng phục bắt buộc (uniform requirements) hoàn toàn không được nhắc đến."
            },
            {
              "id": "R9",
              "question": "What is the goal of hybrid or blended educational models mentioned in paragraph 4?",
              "options": [
                {
                  "key": "A",
                  "text": "To close all physical university campuses permanently"
                },
                {
                  "key": "B",
                  "text": "To combine online flexibility with campus social camaraderie"
                },
                {
                  "key": "C",
                  "text": "To double the duration of bachelor degree programs"
                },
                {
                  "key": "D",
                  "text": "To reduce teacher salaries"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'retain the accessibility of distance education while preserving the vibrant social camaraderie'."
            },
            {
              "id": "R10",
              "question": "What can be inferred about the future of university education from the passage?",
              "options": [
                {
                  "key": "A",
                  "text": "Traditional face-to-face learning will disappear entirely next year"
                },
                {
                  "key": "B",
                  "text": "Universities will increasingly integrate digital tools with in-person sessions"
                },
                {
                  "key": "C",
                  "text": "Degrees obtained online will no longer be accredited"
                },
                {
                  "key": "D",
                  "text": "Computers will grade 100% of student emotions"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Mô hình kết hợp (blended/hybrid) là xu thế phát triển tất yếu của giáo dục đại học."
            }
          ]
        },
        {
          "id": "R-P2",
          "title": "Passage 2: The Renewable Energy Transition and Grid Stability",
          "wordCount": 475,
          "genre": "Environment & Energy",
          "text": "[P1] The transition from fossil fuels to renewable energy sources has emerged as the defining engineering imperative of the twenty-first century. Driven by urgent climate targets and plummeting photovoltaic costs, solar and wind power installations have expanded exponentially across both developed and emerging economies.\n\n[P2] The undeniable environmental benefits of renewable energy are manifold. Solar panels and wind turbines generate electricity with virtually zero direct greenhouse gas emissions during operation, drastically diminishing atmospheric carbon dioxide concentrations. Moreover, decentralizing power generation diminishes reliance on volatile fossil fuel import markets, bolstering national energy security.\n\n[P3] Nevertheless, integrating massive intermittent renewables introduces severe technical challenges for traditional power grids. Unlike coal or natural gas plants that provide steady baseload power, solar arrays cease generation after sunset, and wind turbines depend heavily on fluctuating atmospheric gusts. This intermittency creates severe supply-demand mismatches, potentially destabilizing grid frequency and risking blackouts unless substantial energy storage or backup capacity is deployed.\n\n[P4] To overcome grid volatility, utility companies are investing aggressively in utility-scale lithium-ion and flow battery storage facilities, pumped hydroelectric storage, and smart grid automation. Smart grid algorithms utilize artificial intelligence to forecast weather patterns and dynamically route surplus power across national transmission corridors, ensuring grid stability in a green energy era.",
          "questions": [
            {
              "id": "R11",
              "question": "What is the main idea of Passage 2?",
              "options": [
                {
                  "key": "A",
                  "text": "The economic cost of digging coal mines"
                },
                {
                  "key": "B",
                  "text": "The benefits and grid stability challenges of renewable energy"
                },
                {
                  "key": "C",
                  "text": "Why households should avoid buying solar panels"
                },
                {
                  "key": "D",
                  "text": "The history of steam locomotive engines"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Đoạn văn phân tích cả lợi ích môi trường lẫn thách thức kỹ thuật về tính gián đoạn (intermittency) của năng lượng tái tạo."
            },
            {
              "id": "R12",
              "question": "The word 'plummeting' in paragraph 1 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "increasing rapidly"
                },
                {
                  "key": "B",
                  "text": "falling sharply"
                },
                {
                  "key": "C",
                  "text": "fluctuating randomly"
                },
                {
                  "key": "D",
                  "text": "remaining constant"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Plummeting costs' = chi phí giảm mạnh (falling steeply/sharply)."
            },
            {
              "id": "R13",
              "question": "According to paragraph 2, how does renewable energy benefit national security?",
              "options": [
                {
                  "key": "A",
                  "text": "By increasing military spending on weapons"
                },
                {
                  "key": "B",
                  "text": "By reducing reliance on unpredictable fossil fuel import markets"
                },
                {
                  "key": "C",
                  "text": "By expanding foreign oil exploration projects"
                },
                {
                  "key": "D",
                  "text": "By building concrete border walls"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'diminishes reliance on volatile fossil fuel import markets, bolstering national energy security'."
            },
            {
              "id": "R14",
              "question": "The word 'intermittent' in paragraph 3 refers to energy that:",
              "options": [
                {
                  "key": "A",
                  "text": "occurs continuously without stopping"
                },
                {
                  "key": "B",
                  "text": "occurs at irregular intervals and is not continuous"
                },
                {
                  "key": "C",
                  "text": "is generated underground"
                },
                {
                  "key": "D",
                  "text": "is entirely free of charge"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Intermittent' = gián đoạn, chập chờn, không liên tục (irregular, non-continuous)."
            },
            {
              "id": "R15",
              "question": "Why do traditional fossil fuel plants differ from solar and wind installations?",
              "options": [
                {
                  "key": "A",
                  "text": "Fossil fuel plants generate zero carbon emissions"
                },
                {
                  "key": "B",
                  "text": "Fossil fuel plants can provide consistent and dispatchable baseload power"
                },
                {
                  "key": "C",
                  "text": "Fossil fuel plants only operate during rainstorms"
                },
                {
                  "key": "D",
                  "text": "Fossil fuel plants cannot connect to high-voltage wires"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Unlike coal or natural gas plants that provide steady baseload power'."
            },
            {
              "id": "R16",
              "question": "What danger can arise from supply-demand mismatches in the power grid?",
              "options": [
                {
                  "key": "A",
                  "text": "Immediate price deflation of all groceries"
                },
                {
                  "key": "B",
                  "text": "Destabilizing grid frequency and triggering widespread blackouts"
                },
                {
                  "key": "C",
                  "text": "Excessive domestic tap water pressure"
                },
                {
                  "key": "D",
                  "text": "Faster mobile phone charging"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'potentially destabilizing grid frequency and risking blackouts'."
            },
            {
              "id": "R17",
              "question": "Which of the following is NOT mentioned in paragraph 4 as a grid stabilization solution?",
              "options": [
                {
                  "key": "A",
                  "text": "Utility-scale lithium-ion and flow battery facilities"
                },
                {
                  "key": "B",
                  "text": "Pumped hydroelectric storage"
                },
                {
                  "key": "C",
                  "text": "Constructing coal burning boilers in residential homes"
                },
                {
                  "key": "D",
                  "text": "Smart grid algorithms powered by AI"
                }
              ],
              "correctAnswer": "C",
              "explanation": "Lò than trong khu dân cư (coal boilers in homes) hoàn toàn không được nhắc đến."
            },
            {
              "id": "R18",
              "question": "The word 'bolstering' in paragraph 2 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "strengthening and reinforcing"
                },
                {
                  "key": "B",
                  "text": "weakening and undermining"
                },
                {
                  "key": "C",
                  "text": "delaying and postponing"
                },
                {
                  "key": "D",
                  "text": "measuring and calculating"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Bolstering security' = củng cố, tăng cường (strengthening, boosting)."
            },
            {
              "id": "R19",
              "question": "How do smart grid algorithms utilize AI according to paragraph 4?",
              "options": [
                {
                  "key": "A",
                  "text": "To forecast weather patterns and dynamically route surplus power"
                },
                {
                  "key": "B",
                  "text": "To disconnect residential neighborhoods randomly"
                },
                {
                  "key": "C",
                  "text": "To replace all human electricians with robots"
                },
                {
                  "key": "D",
                  "text": "To charge consumers higher night-time rates"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'utilize artificial intelligence to forecast weather patterns and dynamically route surplus power'."
            },
            {
              "id": "R20",
              "question": "What is the author's tone regarding the renewable energy transition?",
              "options": [
                {
                  "key": "A",
                  "text": "Deeply sarcastic and pessimistic"
                },
                {
                  "key": "B",
                  "text": "Objective, analytical, and forward-looking"
                },
                {
                  "key": "C",
                  "text": "Indifferent and dismissive"
                },
                {
                  "key": "D",
                  "text": "Hostile towards technological modernization"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Tác giả trình bày khách quan, phân tích khoa học và hướng tới giải pháp tương lai."
            }
          ]
        },
        {
          "id": "R-P3",
          "title": "Passage 3: The Psychology of Habit Formation and Behavioral Loops",
          "wordCount": 480,
          "genre": "Psychology & Behavioral Science",
          "text": "[P1] Human behavior is overwhelmingly governed by automatic routines rather than deliberate, conscious calculations. Cognitive psychologists estimate that upwards of forty percent of our daily actions—ranging from our morning coffee rituals to our smartphone browsing habits—are executed autonomously through subconscious neurological habit loops.\n\n[P2] At the core of every habit lies a three-part neurological architecture pioneered by behavioral researchers: the cue, the routine, and the reward. The cue acts as a sensory trigger that prompts the brain to initiate a pre-programmed behavior. The routine represents the physical, mental, or emotional action performed. Finally, the reward satisfies a neurochemical craving—often through a surge of dopamine—signaling the brain that this loop is worth preserving in memory.\n\n[P3] Understanding the habit loop illuminates why detrimental habits prove remarkably resilient to brute willpower alone. Attempting to suppress a deeply ingrained routine without altering the underlying cue or providing an alternative reward creates psychological tension and cognitive fatigue. Instead, behavioral scientists recommend the 'Golden Rule of Habit Change': keep the original cue and reward intact, but strategically substitute the middle routine with a healthier alternative.\n\n[P4] Furthermore, environmental architecture plays a decisive role in sustaining positive behavioral modifications. By consciously eliminating friction for desired behaviors—such as placing running shoes beside the bed—and increasing friction for unproductive impulses—such as storing digital devices outside the bedroom—individuals can reshape their subconscious routines without relying on finite reserves of daily self-control.",
          "questions": [
            {
              "id": "R21",
              "question": "What is the central topic of Passage 3?",
              "options": [
                {
                  "key": "A",
                  "text": "The financial cost of gym memberships"
                },
                {
                  "key": "B",
                  "text": "The neurological structure of habit loops and strategies for behavioral change"
                },
                {
                  "key": "C",
                  "text": "The chemistry of morning coffee beans"
                },
                {
                  "key": "D",
                  "text": "Why willpower alone is 100% sufficient for every goal"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Bài đọc phân tích cấu trúc 3 phần của thói quen và các chiến lược khoa học để thay đổi hành vi."
            },
            {
              "id": "R22",
              "question": "According to paragraph 1, approximately what percentage of daily human actions are habits?",
              "options": [
                {
                  "key": "A",
                  "text": "Under ten percent"
                },
                {
                  "key": "B",
                  "text": "Around twenty-five percent"
                },
                {
                  "key": "C",
                  "text": "More than forty percent"
                },
                {
                  "key": "D",
                  "text": "Exactly one hundred percent"
                }
              ],
              "correctAnswer": "C",
              "explanation": "'upwards of forty percent of our daily actions... are executed autonomously'."
            },
            {
              "id": "R23",
              "question": "What are the three components of the neurological habit loop in paragraph 2?",
              "options": [
                {
                  "key": "A",
                  "text": "Sleep, exercise, and diet"
                },
                {
                  "key": "B",
                  "text": "The cue, the routine, and the reward"
                },
                {
                  "key": "C",
                  "text": "Memory, intellect, and willpower"
                },
                {
                  "key": "D",
                  "text": "Input, processing, and hardware"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'the cue, the routine, and the reward'."
            },
            {
              "id": "R24",
              "question": "The word 'detrimental' in paragraph 3 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "harmful and damaging"
                },
                {
                  "key": "B",
                  "text": "beneficial and productive"
                },
                {
                  "key": "C",
                  "text": "ancient and traditional"
                },
                {
                  "key": "D",
                  "text": "costly and luxurious"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Detrimental habits' = thói quen có hại, tiêu cực (harmful, damaging)."
            },
            {
              "id": "R25",
              "question": "What does the 'Golden Rule of Habit Change' suggest doing?",
              "options": [
                {
                  "key": "A",
                  "text": "Eliminating all rewards from daily life"
                },
                {
                  "key": "B",
                  "text": "Keeping the cue and reward while substituting the routine"
                },
                {
                  "key": "C",
                  "text": "Ignoring all sensory triggers completely"
                },
                {
                  "key": "D",
                  "text": "Punishing oneself whenever a mistake occurs"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'keep the original cue and reward intact, but strategically substitute the middle routine'."
            },
            {
              "id": "R26",
              "question": "The word 'surge' in paragraph 2 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "gradual decline"
                },
                {
                  "key": "B",
                  "text": "sudden powerful increase"
                },
                {
                  "key": "C",
                  "text": "complete disappearance"
                },
                {
                  "key": "D",
                  "text": "stable balance"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Surge of dopamine' = sự tăng vọt, bùng nổ đột ngột (sudden sharp increase)."
            },
            {
              "id": "R27",
              "question": "Why is relying solely on willpower often ineffective for breaking bad habits?",
              "options": [
                {
                  "key": "A",
                  "text": "Willpower is a finite cognitive resource that causes fatigue"
                },
                {
                  "key": "B",
                  "text": "Humans lack the capacity for rational thought"
                },
                {
                  "key": "C",
                  "text": "Bad habits carry zero neurological rewards"
                },
                {
                  "key": "D",
                  "text": "Subconscious routines are permanently deleted every night"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Attempting to suppress... creates psychological tension and cognitive fatigue... finite reserves of daily self-control'."
            },
            {
              "id": "R28",
              "question": "What is an example of 'reducing friction' for a good habit mentioned in paragraph 4?",
              "options": [
                {
                  "key": "A",
                  "text": "Hiding running shoes inside a locked closet"
                },
                {
                  "key": "B",
                  "text": "Placing running shoes right beside the bed"
                },
                {
                  "key": "C",
                  "text": "Watching television until 2:00 AM"
                },
                {
                  "key": "D",
                  "text": "Setting ten alarm clocks across the house"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'eliminating friction for desired behaviors—such as placing running shoes beside the bed'."
            },
            {
              "id": "R29",
              "question": "The word 'it' in paragraph 2 refers to:",
              "options": [
                {
                  "key": "A",
                  "text": "the sensory trigger"
                },
                {
                  "key": "B",
                  "text": "the physical habit loop"
                },
                {
                  "key": "C",
                  "text": "the human brain"
                },
                {
                  "key": "D",
                  "text": "the coffee ritual"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'signaling the brain that this loop is worth preserving'."
            },
            {
              "id": "R30",
              "question": "What can be inferred about human nature from the text?",
              "options": [
                {
                  "key": "A",
                  "text": "We are entirely helpless victims of our genetics"
                },
                {
                  "key": "B",
                  "text": "Environmental design can strategically guide subconscious choices"
                },
                {
                  "key": "C",
                  "text": "Habits cannot be formed after age twenty-five"
                },
                {
                  "key": "D",
                  "text": "Dopamine is only produced during physical sports"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Thiết kế môi trường có thể tái định hình các thói quen tiềm thức một cách chiến lược."
            }
          ]
        },
        {
          "id": "R-P4",
          "title": "Passage 4: Urban Agriculture and Vertical Farming Technologies",
          "wordCount": 495,
          "genre": "Agriculture & Urbanization",
          "text": "[P1] As the global population approaches ten billion by mid-century, conventional agriculture faces unprecedented ecological constraints. Arable land is diminishing due to soil degradation and desertification, while traditional farming consumes roughly seventy percent of global freshwater reserves. In response to these compounding crises, agricultural scientists and urban architects are pioneering Controlled Environment Agriculture (CEA), commonly known as vertical farming.\n\n[P2] Vertical farms cultivate crops inside multi-story retrofitted urban facilities, repurposing abandoned warehouses, basements, and shipping containers. By employing soilless hydroponic and aeroponic systems, plant roots receive calibrated nutrient-rich water mists directly, reducing total water consumption by up to ninety-five percent compared to traditional open-field farming. Furthermore, high-efficiency spectrum-tuned LED lights deliver optimized photosynthetic wavelengths around the clock, accelerating harvest cycles regardless of external weather conditions.\n\n[P3] In addition to resource efficiency, urban vertical agriculture offers profound logistical advantages. By producing fresh leafy greens and vegetables within metropolitan borders, the distance food travels from farm to consumer—frequently spanning thousands of miles in conventional supply chains—is slashed to mere kilometers. This drastic reduction in food miles minimizes transportation fuel emissions and eliminates costly post-harvest food spoilage.\n\n[P4] Despite its transformative potential, vertical farming faces critical economic and technical bottlenecks. High initial capital expenditures for specialized LED fixtures, automated robotics, and environmental climate control units render operations financially demanding. Moreover, substantial electricity consumption from artificial lighting can elevate carbon emissions if powered by fossil fuel grids. Consequently, the commercial viability of vertical farming hinges on continued declines in renewable energy costs and specialized LED efficiencies.",
          "questions": [
            {
              "id": "R31",
              "question": "What is the primary subject of Passage 4?",
              "options": [
                {
                  "key": "A",
                  "text": "The history of medieval grain trade"
                },
                {
                  "key": "B",
                  "text": "The mechanisms, benefits, and challenges of vertical farming"
                },
                {
                  "key": "C",
                  "text": "Methods for chemical pesticide synthesis"
                },
                {
                  "key": "D",
                  "text": "Why cities should eliminate all public parks"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Toàn bài phân tích kỹ thuật, lợi thế và thách thức kinh tế của nông nghiệp thẳng đứng (vertical farming)."
            },
            {
              "id": "R32",
              "question": "According to paragraph 1, what percentage of global freshwater is consumed by traditional farming?",
              "options": [
                {
                  "key": "A",
                  "text": "Approximately twenty percent"
                },
                {
                  "key": "B",
                  "text": "Roughly fifty percent"
                },
                {
                  "key": "C",
                  "text": "Roughly seventy percent"
                },
                {
                  "key": "D",
                  "text": "Over ninety-five percent"
                }
              ],
              "correctAnswer": "C",
              "explanation": "'traditional farming consumes roughly seventy percent of global freshwater reserves'."
            },
            {
              "id": "R33",
              "question": "How much water can vertical farming save compared to open-field farming?",
              "options": [
                {
                  "key": "A",
                  "text": "Up to twenty percent"
                },
                {
                  "key": "B",
                  "text": "Up to fifty percent"
                },
                {
                  "key": "C",
                  "text": "Up to seventy-five percent"
                },
                {
                  "key": "D",
                  "text": "Up to ninety-five percent"
                }
              ],
              "correctAnswer": "D",
              "explanation": "'reducing total water consumption by up to ninety-five percent'."
            },
            {
              "id": "R34",
              "question": "The word 'retrofitted' in paragraph 2 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "demolished and destroyed"
                },
                {
                  "key": "B",
                  "text": "adapted and modified for a new purpose"
                },
                {
                  "key": "C",
                  "text": "painted in bright colors"
                },
                {
                  "key": "D",
                  "text": "abandoned and neglected"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Retrofitted facilities' = nhà xưởng được cải tạo, chuyển đổi công năng (modified, adapted)."
            },
            {
              "id": "R35",
              "question": "What role do spectrum-tuned LED lights play in vertical farms?",
              "options": [
                {
                  "key": "A",
                  "text": "They repel dangerous insects through loud frequencies"
                },
                {
                  "key": "B",
                  "text": "They provide optimized photosynthetic wavelengths around the clock"
                },
                {
                  "key": "C",
                  "text": "They boil the water to sanitize plant roots"
                },
                {
                  "key": "D",
                  "text": "They cool the building to freezing temperatures"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'deliver optimized photosynthetic wavelengths around the clock, accelerating harvest cycles'."
            },
            {
              "id": "R36",
              "question": "The phrase 'food miles' in paragraph 3 refers to:",
              "options": [
                {
                  "key": "A",
                  "text": "the speed at which crops grow per day"
                },
                {
                  "key": "B",
                  "text": "the distance food is transported from producer to consumer"
                },
                {
                  "key": "C",
                  "text": "the length of agricultural irrigation canals"
                },
                {
                  "key": "D",
                  "text": "the price per mile of supermarket delivery"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'the distance food travels from farm to consumer... food miles'."
            },
            {
              "id": "R37",
              "question": "According to paragraph 4, what is a major obstacle for vertical farming companies?",
              "options": [
                {
                  "key": "A",
                  "text": "Extreme shortage of agricultural seeds"
                },
                {
                  "key": "B",
                  "text": "High initial capital costs and intensive electricity consumption"
                },
                {
                  "key": "C",
                  "text": "Consumer refusal to eat leafy green vegetables"
                },
                {
                  "key": "D",
                  "text": "Government bans on indoor lighting"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'High initial capital expenditures... substantial electricity consumption from artificial lighting'."
            },
            {
              "id": "R38",
              "question": "The word 'expenditures' in paragraph 4 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "expenses and investments"
                },
                {
                  "key": "B",
                  "text": "profits and dividends"
                },
                {
                  "key": "C",
                  "text": "discounts and sales"
                },
                {
                  "key": "D",
                  "text": "debts and loans"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Capital expenditures' = chi phí đầu tư vốn (expenses, spending, capital outlays)."
            },
            {
              "id": "R39",
              "question": "Which of the following locations is NOT mentioned in paragraph 2 as a site for vertical farming?",
              "options": [
                {
                  "key": "A",
                  "text": "Abandoned warehouses"
                },
                {
                  "key": "B",
                  "text": "Basements"
                },
                {
                  "key": "C",
                  "text": "Shipping containers"
                },
                {
                  "key": "D",
                  "text": "Deep sea submarines"
                }
              ],
              "correctAnswer": "D",
              "explanation": "Tàu ngầm biển sâu (submarines) hoàn toàn không được nhắc đến."
            },
            {
              "id": "R40",
              "question": "What factor is essential for the future commercial success of vertical farming?",
              "options": [
                {
                  "key": "A",
                  "text": "Increased coal burning subsidies"
                },
                {
                  "key": "B",
                  "text": "Continued declines in renewable energy costs and higher LED efficiencies"
                },
                {
                  "key": "C",
                  "text": "A return to horse-plowed farming methods"
                },
                {
                  "key": "D",
                  "text": "Prohibiting all urban grocery supermarkets"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'hinges on continued declines in renewable energy costs and specialized LED efficiencies'."
            }
          ]
        }
      ]
    },
    "writing": {
      "time": 60,
      "task1": {
        "title": "Task 1: Viết Thư Phàn Nàn (Chiếm 1/3 điểm - 20 phút - Tối thiểu 120 từ)",
        "prompt": "You recently bought a laptop from an online electronics store, but when you received the package, the screen was cracked and the charger was missing. Write a letter of complaint to the store manager.\nIn your letter:\n- Describe the details of your order and the defects upon arrival\n- Explain how this issue has affected your daily study or work\n- Request an immediate replacement or a full refund.",
        "sampleModel": "Dear Store Manager,\n\nI am writing to express my strong dissatisfaction with a recent purchase I made on your online store on August 20th, Order ID #TECH-8924, for a Dell Inspiron 15 laptop.\n\nWhen the package arrived at my residence yesterday afternoon, I was extremely dismayed to discover that the laptop screen was severely cracked. Furthermore, the power adapter and charging cable were completely missing from the sealed box.\n\nThis purchase was intended for my upcoming online university courses starting this Monday. Without a functional computer, I am unable to access required lecture materials and complete my assignments on time.\n\nGiven the circumstances, I request an immediate replacement of the damaged laptop with an intact unit or a full refund to my bank account within three business days. I have attached photographs of the damaged screen and packaging for your reference.\n\nI look forward to your prompt resolution of this matter.\n\nYours sincerely,\nTran Hoang Nam"
      },
      "task2": {
        "title": "Task 2: Viết Bài Luận Học Thuật (Chiếm 2/3 điểm - 40 phút - Tối thiểu 250 từ)",
        "prompt": "In many countries, fast food is becoming increasingly popular among young people despite its negative health impacts. What are the causes of this trend, and what measures can be taken to solve this problem?\nGive reasons for your answer and include relevant examples.",
        "sampleModel": "In recent decades, the consumption of fast food has surged exponentially among young people globally. While fast food offers unmatched convenience and affordability, its nutritional deficiency poses serious long-term public health concerns. This essay will examine the primary causes of this phenomenon and propose viable solutions to mitigate its adverse effects.\n\nTo begin with, several interrelated factors contribute to the popularity of fast food. First and foremost, modern academic and professional pressures have made fast food an attractive option for busy students and workers who lack the time to prepare wholesome home-cooked meals. In addition, aggressive marketing strategies by international fast-food corporations—utilizing vibrant commercials, promotional discount vouchers, and smartphone delivery apps—strongly appeal to adolescents. Moreover, fast food is heavily subsidized and mass-produced, making it considerably cheaper than organic fresh produce in many urban centers.\n\nTo address this growing health crisis, concerted efforts from governments, schools, and families are imperative. Firstly, educational authorities should incorporate practical nutrition education into the standard school curriculum, teaching students how to read food labels and understand the long-term dangers of obesity, diabetes, and cardiovascular diseases. Secondly, governments should impose higher health taxes on sugary beverages and ultra-processed foods while subsidizing fresh agricultural produce to make nutritious options more affordable. Finally, parents should foster healthy dietary habits at home by preparing balanced meals and engaging in active physical sports with their children.\n\nIn conclusion, the widespread preference for fast food stems from modern time constraints, aggressive marketing, and affordability. However, through comprehensive school education and governmental dietary policies, society can successfully guide young generations toward healthier lifestyle choices."
      }
    },
    "speaking": {
      "time": 12,
      "part1": {
        "title": "Part 1: Social Interaction (3 phút)",
        "topic1": "Topic 1: Daily Habits & Productivity",
        "topic1Questions": [
          {
            "q": "What is your typical daily morning routine?",
            "sample": "To be honest, I usually wake up around 6:30 AM, drink a glass of warm water, and spend fifteen minutes doing light stretching exercises. Afterward, I prepare a nutritious breakfast and review my daily task list before heading to class."
          },
          {
            "q": "Do you prefer studying in the morning or at night?",
            "sample": "Personally, I find morning study sessions considerably more productive because my mind is fresh and undisturbed by social media notifications. Studying in the quiet morning atmosphere helps me retain complex concepts much faster."
          }
        ],
        "topic2": "Topic 2: Hobbies & Leisure Time",
        "topic2Questions": [
          {
            "q": "What do you enjoy doing during your free time?",
            "sample": "Whenever I have leisure time, I am passionate about reading personal development books and playing acoustic guitar. Engaging in music allows me to relieve mental stress after grueling study sessions."
          },
          {
            "q": "Did your hobbies change compared to when you were a child?",
            "sample": "Yes, absolutely. As a child, I spent countless hours playing outdoor hide-and-seek and video games. Nowadays, I gravitate towards creative and constructive activities like photography and landscape painting."
          }
        ]
      },
      "part2": {
        "title": "Part 2: Solution Discussion (4 phút)",
        "situation": "Your university English club is deciding on the best format for their end-of-term celebration. There are three options:\n1. Having a formal dinner banquet at a luxury restaurant\n2. Organizing an outdoor camping and team-building trip in a pine forest\n3. Hosting a movie night and potluck party in the university auditorium\nWhich option do you think is the best choice?",
        "bestOption": "Option 2: Organizing an outdoor camping and team-building trip",
        "sampleSpeech": "Good morning examiner. Faced with the situation of selecting the most suitable celebration for our English club, among the three proposed options, I would firmly choose Option 2—organizing an outdoor camping and team-building trip.\n\nFirst and foremost, an outdoor camping trip provides an authentic communal environment where members can participate in collaborative games, sit around a campfire, and foster meaningful interpersonal bonds. It is far more memorable and engaging than merely sitting passively.\n\nIn addition, camping is highly budget-friendly for university students, whereas Option 1 (a luxury restaurant banquet) is excessively exorbitant and financially burdensome for many members. Furthermore, Option 3 (a movie night) lacks active verbal interaction, which defeats the core purpose of an English club.\n\nTaking all factors into account, the outdoor camping excursion is undeniably the optimal solution."
      },
      "part3": {
        "title": "Part 3: Topic Development (5 phút)",
        "topic": "The Benefits of Lifelong Learning in the Digital Era",
        "mindMap": {
          "idea1": "Career Adaptability & Up-skilling",
          "idea2": "Cognitive Health & Mental Sharpness",
          "idea3": "Personal Fulfillment & Confidence",
          "ownIdea": "Bridging Intergenerational Gaps"
        },
        "sampleSpeech": "Good morning examiner. Today, I would like to deliver my presentation regarding the key benefits of lifelong learning in our modern digital society.\n\nFirstly, continuous learning guarantees career adaptability. As technological innovations automate traditional jobs, up-skilling through online courses enables professionals to remain competitive and acquire high-demand digital proficiencies.\n\nSecondly, engaging in intellectual pursuits preserves cognitive health and mental agility. Studies demonstrate that stimulating the brain with new languages or skills substantially delays age-related cognitive decline.\n\nFinally, my own personal perspective is that lifelong learning bridges intergenerational gaps, allowing older generations to communicate effectively with digital-native youth.\n\nIn conclusion, lifelong learning is indispensable for both individual self-actualization and overall social progress.",
        "followUp": [
          {
            "q": "How can governments encourage elderly citizens to embrace digital technology?",
            "a": "Governments can establish free community computer workshops in local cultural centers and recruit patient university volunteers to provide hands-on smartphone coaching for seniors."
          },
          {
            "q": "Do you believe children are learning too much through screens nowadays?",
            "a": "While digital learning offers interactive advantages, excessive screen time can cause digital eye strain and diminish real-world physical play. A balanced approach with scheduled screen breaks is vital."
          }
        ]
      }
    }
  },
  {
    "id": "vstep-exam-03",
    "name": "Đề Thi Chuẩn VSTEP Số 03 (Format Đại Học Ngoại Ngữ)",
    "badge": "Chuẩn B1-B2",
    "difficulty": "Tiêu chuẩn B1 (Vừa sức)",
    "description": "Bộ đề thi tổng hợp 4 kỹ năng VSTEP B1 tập trung vào chủ đề Giáo Dục, Môi Trường và Đời Sống Xã Hội Hiện Đại.",
    "listening": {
      "time": 40,
      "totalQuestions": 35,
      "part1": {
        "title": "Part 1: 8 Thông Báo Ngắn (8 câu hỏi)",
        "instructions": "Nghe 8 đoạn thông báo ngắn và chọn phương án trả lời đúng.",
        "questions": [
          {
            "id": "T3-L1",
            "audioText": "Welcome to the Grand Art Exhibition. Please be advised that flash photography and video recording are strictly prohibited inside the main painting gallery to prevent irreversible light damage to antique canvases.",
            "question": "What is prohibited inside the main painting gallery?",
            "options": [
              {
                "key": "A",
                "text": "Touching the sculpture displays"
              },
              {
                "key": "B",
                "text": "Flash photography and video recording"
              },
              {
                "key": "C",
                "text": "Drinking bottled water"
              },
              {
                "key": "D",
                "text": "Speaking in low voices"
              }
            ],
            "correctAnswer": "B",
            "explanation": "'flash photography and video recording are strictly prohibited'."
          },
          {
            "id": "T3-L2",
            "audioText": "Attention passengers on flight VN-218 to Da Nang. Boarding has now commenced at Gate 14. We invite families traveling with young infants and passengers requiring special assistance to board first.",
            "question": "Which passengers are invited to board flight VN-218 first?",
            "options": [
              {
                "key": "A",
                "text": "Business class travelers with frequent flyer status"
              },
              {
                "key": "B",
                "text": "Families with young infants and passengers needing special assistance"
              },
              {
                "key": "C",
                "text": "Passengers sitting in window seats"
              },
              {
                "key": "D",
                "text": "Passengers traveling without carry-on luggage"
              }
            ],
            "correctAnswer": "B",
            "explanation": "'families traveling with young infants and passengers requiring special assistance to board first'."
          },
          {
            "id": "T3-L3",
            "audioText": "Good evening residents of Sunrise Tower. The scheduled water supply maintenance will take place this Thursday from 1:00 PM to 5:00 PM. Please make necessary water storage arrangements in advance.",
            "question": "When will the water supply be temporarily shut off?",
            "options": [
              {
                "key": "A",
                "text": "Thursday from 8:00 AM to 12:00 noon"
              },
              {
                "key": "B",
                "text": "Thursday from 1:00 PM to 5:00 PM"
              },
              {
                "key": "C",
                "text": "Friday afternoon from 2:00 PM to 6:00 PM"
              },
              {
                "key": "D",
                "text": "Saturday morning all day"
              }
            ],
            "correctAnswer": "B",
            "explanation": "'this Thursday from 1:00 PM to 5:00 PM'."
          },
          {
            "id": "T3-L4",
            "audioText": "M: Hi Emma, do you know when the scholarship application deadline is?\nW: The initial notice said March 15th, but the international admissions office has extended it until March 30th to allow applicants more time for IELTS certificates.",
            "question": "What is the new scholarship application deadline?",
            "options": [
              {
                "key": "A",
                "text": "March 1st"
              },
              {
                "key": "B",
                "text": "March 15th"
              },
              {
                "key": "C",
                "text": "March 30th"
              },
              {
                "key": "D",
                "text": "April 15th"
              }
            ],
            "correctAnswer": "C",
            "explanation": "'extended it until March 30th'."
          },
          {
            "id": "T3-L5",
            "audioText": "Green Valley Supermarket announcement: Organic avocados and strawberries are on a buy-one-get-one-free promotion exclusively for loyalty cardholders in aisle 3 today.",
            "question": "What offer is available for loyalty cardholders today?",
            "options": [
              {
                "key": "A",
                "text": "50% off all dairy products"
              },
              {
                "key": "B",
                "text": "Buy-one-get-one-free on organic avocados and strawberries"
              },
              {
                "key": "C",
                "text": "Free home delivery on orders over $50"
              },
              {
                "key": "D",
                "text": "Double bonus loyalty points"
              }
            ],
            "correctAnswer": "B",
            "explanation": "'buy-one-get-one-free promotion exclusively for loyalty cardholders'."
          },
          {
            "id": "T3-L6",
            "audioText": "Traffic report for Highway 1: An overturned cargo truck near the southern toll booth has caused severe congestion. Commuters heading downtown are strongly advised to take Ring Road 3 as an alternative detour.",
            "question": "What route should drivers take to avoid highway congestion?",
            "options": [
              {
                "key": "A",
                "text": "Highway 1B"
              },
              {
                "key": "B",
                "text": "Expressway 5"
              },
              {
                "key": "C",
                "text": "Ring Road 3"
              },
              {
                "key": "D",
                "text": "The coastal boulevard"
              }
            ],
            "correctAnswer": "C",
            "explanation": "'take Ring Road 3 as an alternative detour'."
          },
          {
            "id": "T3-L7",
            "audioText": "Hello, this is City Medical Clinic. Your routine health examination results are now ready for collection at the front reception. Alternatively, you can view the encrypted PDF report via our patient mobile app.",
            "question": "How can the patient receive their health exam results?",
            "options": [
              {
                "key": "A",
                "text": "By post mail or SMS text message"
              },
              {
                "key": "B",
                "text": "At the front reception or through the mobile app"
              },
              {
                "key": "C",
                "text": "Only by scheduling a direct appointment with the doctor"
              },
              {
                "key": "D",
                "text": "By visiting the pharmacy downstairs"
              }
            ],
            "correctAnswer": "B",
            "explanation": "'at the front reception... or via our patient mobile app'."
          },
          {
            "id": "T3-L8",
            "audioText": "Notice from the University Career Center: Representatives from top technology firms will host an on-campus recruitment seminar in Hall B this Friday at 9:00 AM. Bring your updated CVs.",
            "question": "What are attendees requested to bring to the recruitment seminar?",
            "options": [
              {
                "key": "A",
                "text": "Official academic transcripts"
              },
              {
                "key": "B",
                "text": "Letters of recommendation"
              },
              {
                "key": "C",
                "text": "Updated curriculum vitae (CVs)"
              },
              {
                "key": "D",
                "text": "Personal portfolio project folders"
              }
            ],
            "correctAnswer": "C",
            "explanation": "'Bring your updated CVs'."
          }
        ]
      },
      "part2": {
        "title": "Part 2: 3 Đoạn Hội Thoại Dài (12 câu hỏi)",
        "instructions": "Bạn sẽ nghe 3 đoạn hội thoại. Mỗi hội thoại có 4 câu hỏi trắc nghiệm.",
        "conversations": [
          {
            "id": "C1",
            "title": "Hội thoại 1: Lập kế hoạch thực tập tốt nghiệp",
            "audioTranscript": "Man: Hi Elena, have you submitted your summer internship application to the Career Center yet? The deadline is this Friday.\nWoman: Not quite yet, David. I'm torn between two choices: an internship at a local software startup and an administrative position at a multinational corporation.\nMan: Well, the multinational company surely looks impressive on a resume, but you often end up doing repetitive paperwork. At a startup, you'll work directly with senior engineers and gain hands-on coding experience.\nWoman: That's a valid point. I really want to sharpen my practical programming skills and understand full project workflows. I think I'll finalize my application for the startup tonight!",
            "questions": [
              {
                "id": "L9",
                "question": "What is the main topic of the conversation?",
                "options": [
                  {
                    "key": "A",
                    "text": "Preparing for final university examinations"
                  },
                  {
                    "key": "B",
                    "text": "Choosing a summer internship placement"
                  },
                  {
                    "key": "C",
                    "text": "Applying for a postgraduate scholarship"
                  },
                  {
                    "key": "D",
                    "text": "Negotiating starting salary at a company"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Hai người trao đổi về việc nộp hồ sơ thực tập mùa hè (summer internship)."
              },
              {
                "id": "L10",
                "question": "When is the deadline for submitting the internship application?",
                "options": [
                  {
                    "key": "A",
                    "text": "This Wednesday"
                  },
                  {
                    "key": "B",
                    "text": "This Friday"
                  },
                  {
                    "key": "C",
                    "text": "Next Monday"
                  },
                  {
                    "key": "D",
                    "text": "At the end of the month"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "David nói: 'The deadline is this Friday'."
              },
              {
                "id": "L11",
                "question": "What advantage of working at a startup does David mention?",
                "options": [
                  {
                    "key": "A",
                    "text": "Higher monthly allowance"
                  },
                  {
                    "key": "B",
                    "text": "Opportunity for direct hands-on coding experience"
                  },
                  {
                    "key": "C",
                    "text": "Shorter daily commuting distance"
                  },
                  {
                    "key": "D",
                    "text": "Guaranteed permanent job offer"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "David nêu: 'work directly with senior engineers and gain hands-on coding experience'."
              },
              {
                "id": "L12",
                "question": "What does Elena decide to do at the end?",
                "options": [
                  {
                    "key": "A",
                    "text": "Apply for the software startup position"
                  },
                  {
                    "key": "B",
                    "text": "Postpone her internship until next year"
                  },
                  {
                    "key": "C",
                    "text": "Consult her academic advisor tomorrow"
                  },
                  {
                    "key": "D",
                    "text": "Accept the multinational administrative role"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Elena kết luận: 'I think I'll finalize my application for the startup tonight!'."
              }
            ]
          },
          {
            "id": "C2",
            "title": "Hội thoại 2: Thuê căn hộ chung cư cho sinh viên",
            "audioTranscript": "Woman: Good afternoon Mr. Tran, my roommate and I are looking to rent a two-bedroom apartment near the University of Technology.\nMan: Hello! I have a fully furnished unit on the 8th floor of Sunrise Tower. It has two bedrooms, a spacious balcony, air conditioning, and high-speed fiber internet included.\nWoman: That sounds wonderful. How much is the monthly rent, and what about utility bills?\nMan: The rent is 8 million VND per month. Electricity and water are billed separately according to state utility meters. We require a two-month security deposit upon signing the one-year lease.\nWoman: Can we visit the apartment tomorrow morning around 9:30 AM to inspect the condition before making a decision?\nMan: Absolutely, I'll meet you at the lobby entrance.",
            "questions": [
              {
                "id": "L13",
                "question": "What type of accommodation are the students seeking?",
                "options": [
                  {
                    "key": "A",
                    "text": "A shared dormitory room"
                  },
                  {
                    "key": "B",
                    "text": "A two-bedroom furnished apartment"
                  },
                  {
                    "key": "C",
                    "text": "A studio townhouse with a garden"
                  },
                  {
                    "key": "D",
                    "text": "A homestay with a host family"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'looking to rent a two-bedroom apartment near the University'."
              },
              {
                "id": "L14",
                "question": "What is included in the 8 million VND monthly rent?",
                "options": [
                  {
                    "key": "A",
                    "text": "Electricity and cooking gas"
                  },
                  {
                    "key": "B",
                    "text": "High-speed fiber internet and furniture"
                  },
                  {
                    "key": "C",
                    "text": "Daily cleaning and laundry services"
                  },
                  {
                    "key": "D",
                    "text": "Underground car parking fees"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'fully furnished... high-speed fiber internet included'."
              },
              {
                "id": "L15",
                "question": "How much deposit is required upon signing the contract?",
                "options": [
                  {
                    "key": "A",
                    "text": "One month rent"
                  },
                  {
                    "key": "B",
                    "text": "Two months rent"
                  },
                  {
                    "key": "C",
                    "text": "Three months rent"
                  },
                  {
                    "key": "D",
                    "text": "No deposit required"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'We require a two-month security deposit upon signing'."
              },
              {
                "id": "L16",
                "question": "When will the woman inspect the apartment?",
                "options": [
                  {
                    "key": "A",
                    "text": "This evening at 7:00 PM"
                  },
                  {
                    "key": "B",
                    "text": "Tomorrow morning at 9:30 AM"
                  },
                  {
                    "key": "C",
                    "text": "Next Saturday afternoon"
                  },
                  {
                    "key": "D",
                    "text": "At the end of the week"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'visit the apartment tomorrow morning around 9:30 AM'."
              }
            ]
          },
          {
            "id": "C3",
            "title": "Hội thoại 3: Tổ chức chiến dịch bảo vệ môi trường",
            "audioTranscript": "Man: Lisa, our Student Union environmental campaign 'Green Campus' is scheduled for next Saturday. Have we secured all the trash grabbers, biodegradable garbage bags, and gloves?\nWoman: Yes Tom, the logistics team received 200 pairs of protective gloves and 500 compostable bags yesterday from our corporate sponsor.\nMan: Fantastic! How many student volunteers have registered online so far?\nWoman: We reached 180 registrations this morning, exceeding our initial target of 150. I've divided them into four squads: plastic bottle sorting, tree planting around the sports field, electronic waste collection, and riverbank clean-up.\nMan: Excellent organization! Let's hold a short briefing on Friday afternoon to distribute team badges and safety instructions.",
            "questions": [
              {
                "id": "L17",
                "question": "What is the name of the Student Union campaign?",
                "options": [
                  {
                    "key": "A",
                    "text": "Clean Oceans Initiative"
                  },
                  {
                    "key": "B",
                    "text": "Green Campus"
                  },
                  {
                    "key": "C",
                    "text": "Zero Carbon Future"
                  },
                  {
                    "key": "D",
                    "text": "Eco-Friendly Living"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'our Student Union environmental campaign Green Campus'."
              },
              {
                "id": "L18",
                "question": "Who provided the gloves and biodegradable bags?",
                "options": [
                  {
                    "key": "A",
                    "text": "The local city council"
                  },
                  {
                    "key": "B",
                    "text": "A corporate sponsor"
                  },
                  {
                    "key": "C",
                    "text": "Student Union funding"
                  },
                  {
                    "key": "D",
                    "text": "Donations from professors"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'received... from our corporate sponsor'."
              },
              {
                "id": "L19",
                "question": "How many volunteers have registered for the event?",
                "options": [
                  {
                    "key": "A",
                    "text": "150 volunteers"
                  },
                  {
                    "key": "B",
                    "text": "180 volunteers"
                  },
                  {
                    "key": "C",
                    "text": "200 volunteers"
                  },
                  {
                    "key": "D",
                    "text": "500 volunteers"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'We reached 180 registrations this morning, exceeding our initial target of 150'."
              },
              {
                "id": "L20",
                "question": "What will happen during Friday afternoon's meeting?",
                "options": [
                  {
                    "key": "A",
                    "text": "Planting trees around the football field"
                  },
                  {
                    "key": "B",
                    "text": "Distributing badges and safety instructions"
                  },
                  {
                    "key": "C",
                    "text": "Collecting electronic waste from residents"
                  },
                  {
                    "key": "D",
                    "text": "Interviewing new team captains"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'hold a short briefing on Friday afternoon to distribute team badges and safety instructions'."
              }
            ]
          }
        ]
      },
      "part3": {
        "title": "Part 3: 3 Bài Thuyết Trình Học Thuật (15 câu hỏi)",
        "instructions": "Bạn sẽ nghe 3 bài giảng học thuật. Mỗi bài giảng có 5 câu hỏi trắc nghiệm.",
        "talks": [
          {
            "id": "T1",
            "title": "Bài giảng 1: Sự tiến hóa của Trí tuệ Nhân tạo trong Giáo dục",
            "audioTranscript": "Good morning class. Today, we delve into the transformative role of Artificial Intelligence in contemporary education. Historically, traditional classrooms adopted a one-size-fits-all approach, where all students followed identical textbooks regardless of individual learning paces. Modern AI-driven adaptive platforms, however, analyze student interaction data in real time to customize personalized exercise difficulty and learning pathways.\n\nFurthermore, automated grading systems now evaluate written essays and provide instant constructive feedback on grammar, cohesion, and vocabulary usage, saving educators substantial grading time. Nonetheless, educational researchers emphasize that AI cannot replace the empathetic human dimension of teaching, such as mentoring, inspiring curiosity, and emotional encouragement.",
            "questions": [
              {
                "id": "L21",
                "question": "What is the primary topic of the lecture?",
                "options": [
                  {
                    "key": "A",
                    "text": "History of traditional university examinations"
                  },
                  {
                    "key": "B",
                    "text": "Application and limitations of AI in education"
                  },
                  {
                    "key": "C",
                    "text": "Developing robotic hardware for school labs"
                  },
                  {
                    "key": "D",
                    "text": "Financial cost of computer software"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Toàn bộ bài giảng phân tích vai trò chuyển đổi và các khía cạnh của AI trong giáo dục hiện đại."
              },
              {
                "id": "L22",
                "question": "How do AI adaptive platforms personalize learning for students?",
                "options": [
                  {
                    "key": "A",
                    "text": "By eliminating all final exams"
                  },
                  {
                    "key": "B",
                    "text": "By customizing exercise difficulty based on interaction data"
                  },
                  {
                    "key": "C",
                    "text": "By replacing human professors completely"
                  },
                  {
                    "key": "D",
                    "text": "By providing free digital tablets"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'analyze student interaction data in real time to customize personalized exercise difficulty'."
              },
              {
                "id": "L23",
                "question": "What task can automated grading systems assist teachers with?",
                "options": [
                  {
                    "key": "A",
                    "text": "Evaluating essays and providing instant linguistic feedback"
                  },
                  {
                    "key": "B",
                    "text": "Maintaining physical sports equipment"
                  },
                  {
                    "key": "C",
                    "text": "Conducting parent-teacher conferences"
                  },
                  {
                    "key": "D",
                    "text": "Arranging school bus schedules"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "'evaluate written essays and provide instant constructive feedback'."
              },
              {
                "id": "L24",
                "question": "According to researchers, what human quality cannot be replaced by AI?",
                "options": [
                  {
                    "key": "A",
                    "text": "Calculating mathematical formulas"
                  },
                  {
                    "key": "B",
                    "text": "Storing historical dates and facts"
                  },
                  {
                    "key": "C",
                    "text": "Empathy, mentoring, and emotional encouragement"
                  },
                  {
                    "key": "D",
                    "text": "Translating foreign language articles"
                  }
                ],
                "correctAnswer": "C",
                "explanation": "'AI cannot replace the empathetic human dimension of teaching, such as mentoring, inspiring curiosity, and emotional encouragement'."
              },
              {
                "id": "L25",
                "question": "What was a key limitation of the traditional historical classroom?",
                "options": [
                  {
                    "key": "A",
                    "text": "Lack of physical chalkboards"
                  },
                  {
                    "key": "B",
                    "text": "A rigid one-size-fits-all approach for all learners"
                  },
                  {
                    "key": "C",
                    "text": "Short daily study duration"
                  },
                  {
                    "key": "D",
                    "text": "Excessive student interaction"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'traditional classrooms adopted a one-size-fits-all approach'."
              }
            ]
          },
          {
            "id": "T2",
            "title": "Bài giảng 2: Đô thị sinh thái và Phát triển bền vững",
            "audioTranscript": "Welcome everyone. Today's urban planning seminar focuses on Eco-Cities, designed to minimize ecological footprints through sustainable architecture and renewable energy. A hallmark of eco-cities is the 15-minute neighborhood model, ensuring every resident can access essential services, schools, groceries, and green parks within a 15-minute walk or bicycle ride.\n\nIn addition, green roofs and vertical gardens help combat the urban heat island effect, decreasing ambient air temperatures by up to 3 degrees Celsius during summer heatwaves. Permeable pavements and rainwater harvesting reservoirs absorb storm runoff, substantially mitigating urban flash flooding risks.",
            "questions": [
              {
                "id": "L26",
                "question": "What is the core principle of an Eco-City?",
                "options": [
                  {
                    "key": "A",
                    "text": "Maximizing automotive highways and parking lots"
                  },
                  {
                    "key": "B",
                    "text": "Minimizing ecological footprint through sustainability"
                  },
                  {
                    "key": "C",
                    "text": "Building skyscrapers with luxury penthouses"
                  },
                  {
                    "key": "D",
                    "text": "Banning all commercial industrial businesses"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'designed to minimize ecological footprints through sustainable architecture and renewable energy'."
              },
              {
                "id": "L27",
                "question": "What is guaranteed in a 15-minute neighborhood model?",
                "options": [
                  {
                    "key": "A",
                    "text": "Free public high-speed trains to airports"
                  },
                  {
                    "key": "B",
                    "text": "Access to daily amenities within a 15-minute walk or bike ride"
                  },
                  {
                    "key": "C",
                    "text": "Free residential high-speed internet"
                  },
                  {
                    "key": "D",
                    "text": "15 minutes of free parking everywhere"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'access essential services, schools, groceries, and green parks within a 15-minute walk or bicycle ride'."
              },
              {
                "id": "L28",
                "question": "How do vertical gardens and green roofs improve urban climates?",
                "options": [
                  {
                    "key": "A",
                    "text": "By increasing winter snowfall"
                  },
                  {
                    "key": "B",
                    "text": "By reducing ambient temperatures during heatwaves by up to 3°C"
                  },
                  {
                    "key": "C",
                    "text": "By eliminating the need for indoor lighting"
                  },
                  {
                    "key": "D",
                    "text": "By blocking solar panels"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'decreasing ambient air temperatures by up to 3 degrees Celsius during summer heatwaves'."
              },
              {
                "id": "L29",
                "question": "What problem is mitigated by permeable pavements and rainwater reservoirs?",
                "options": [
                  {
                    "key": "A",
                    "text": "Urban flash flooding risks"
                  },
                  {
                    "key": "B",
                    "text": "Traffic speed violations"
                  },
                  {
                    "key": "C",
                    "text": "Air pollution from aircraft"
                  },
                  {
                    "key": "D",
                    "text": "Underground subway noise"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "'substantially mitigating urban flash flooding risks'."
              },
              {
                "id": "L30",
                "question": "What type of transportation is prioritized in eco-city design?",
                "options": [
                  {
                    "key": "A",
                    "text": "Heavy diesel commercial trucks"
                  },
                  {
                    "key": "B",
                    "text": "Walking, cycling, and clean public transit"
                  },
                  {
                    "key": "C",
                    "text": "Private gasoline sports cars"
                  },
                  {
                    "key": "D",
                    "text": "Domestic commercial flights"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Đoạn văn nhấn mạnh đi bộ (walking) và xe đạp (cycling) trong mô hình khu dân cư 15 phút."
              }
            ]
          },
          {
            "id": "T3",
            "title": "Bài giảng 3: Tâm lý học hành vi về Thói quen và Giấc ngủ",
            "audioTranscript": "Good afternoon colleagues. In this neurobiology lecture, we explore the profound impact of circadian rhythms and sleep architecture on cognitive performance and habit formation. Sleep is structured in repeating 90-minute cycles transitioning between Non-REM slow-wave sleep and REM sleep.\n\nDuring deep slow-wave sleep, the brain's glymphatic system flushes out metabolic toxins like beta-amyloid, while the hippocampus transfers short-term memories into the cerebral cortex for long-term consolidation. Chronic sleep deprivation of under six hours per night impairs executive decision-making, weakens emotional regulation, and elevates cortisol stress hormones.",
            "questions": [
              {
                "id": "L31",
                "question": "How long does a typical sleep cycle last in human adults?",
                "options": [
                  {
                    "key": "A",
                    "text": "45 minutes"
                  },
                  {
                    "key": "B",
                    "text": "90 minutes"
                  },
                  {
                    "key": "C",
                    "text": "120 minutes"
                  },
                  {
                    "key": "D",
                    "text": "180 minutes"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'Sleep is structured in repeating 90-minute cycles'."
              },
              {
                "id": "L32",
                "question": "What occurs in the brain during deep slow-wave sleep?",
                "options": [
                  {
                    "key": "A",
                    "text": "Toxins are cleared and memories consolidated into long-term storage"
                  },
                  {
                    "key": "B",
                    "text": "Brain metabolism increases to maximum speed"
                  },
                  {
                    "key": "C",
                    "text": "Heart rate accelerates dramatically"
                  },
                  {
                    "key": "D",
                    "text": "All nerve communication stops entirely"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "'flushes out metabolic toxins... transfers short-term memories into the cerebral cortex for long-term consolidation'."
              },
              {
                "id": "L33",
                "question": "What part of the brain coordinates the transfer of memories?",
                "options": [
                  {
                    "key": "A",
                    "text": "The retina"
                  },
                  {
                    "key": "B",
                    "text": "The hippocampus"
                  },
                  {
                    "key": "C",
                    "text": "The spinal cord"
                  },
                  {
                    "key": "D",
                    "text": "The auditory nerve"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'the hippocampus transfers short-term memories into the cerebral cortex'."
              },
              {
                "id": "L34",
                "question": "What is an adverse consequence of chronic sleep deprivation under 6 hours?",
                "options": [
                  {
                    "key": "A",
                    "text": "Enhanced photographic memory"
                  },
                  {
                    "key": "B",
                    "text": "Impaired executive decision-making and elevated cortisol"
                  },
                  {
                    "key": "C",
                    "text": "Decreased body temperature"
                  },
                  {
                    "key": "D",
                    "text": "Faster reflex reaction times"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'impairs executive decision-making, weakens emotional regulation, and elevates cortisol'."
              },
              {
                "id": "L35",
                "question": "What biological system regulates the 24-hour sleep-wake cycle?",
                "options": [
                  {
                    "key": "A",
                    "text": "Circadian rhythm"
                  },
                  {
                    "key": "B",
                    "text": "Digestive enzymes"
                  },
                  {
                    "key": "C",
                    "text": "Skeletal joints"
                  },
                  {
                    "key": "D",
                    "text": "Respiratory diaphragm"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "'profound impact of circadian rhythms and sleep architecture'."
              }
            ]
          }
        ]
      }
    },
    "reading": {
      "time": 60,
      "totalQuestions": 40,
      "passages": [
        {
          "id": "R-P1",
          "title": "Passage 1: The Evolution of Global Online Education",
          "wordCount": 460,
          "genre": "Education & Technology",
          "text": "[P1] In recent years, distance learning has shifted from an unconventional alternative into a mainstream pillar of higher education. Propelled by ubiquitous broadband internet, cloud computing, and interactive virtual classrooms, universities worldwide now deliver fully accredited degree programs to millions of students who reside thousands of kilometers from campus.\n\n[P2] The most prominent advantage of online education lies in its unprecedented geographic and temporal flexibility. Working professionals, parents, and geographically isolated individuals can tailor their study schedules around demanding domestic and occupational obligations. Asynchronous video lectures, interactive discussion forums, and downloadable multimedia resources empower learners to assimilate complex concepts at their own customized pace rather than adhering to rigid classroom timetables.\n\n[P3] However, virtual learning is not without pedagogical drawbacks. The absence of spontaneous face-to-face interaction can precipitate profound feelings of academic isolation and reduced collaborative engagement. Furthermore, online formats place tremendous demands on self-discipline and autonomous time management. Research indicates that completion rates for open online courses frequently hover below twenty percent, primarily because students struggle to maintain intrinsic motivation without structured institutional accountability.\n\n[P4] To address these deficits, contemporary educational institutions are pioneering hybrid or blended models. By fusing flexible self-paced digital modules with periodic interactive group seminars, universities aim to retain the accessibility of distance education while preserving the vibrant social camaraderie and accountability of traditional physical campuses.",
          "questions": [
            {
              "id": "R1",
              "question": "What is the primary focus of the passage?",
              "options": [
                {
                  "key": "A",
                  "text": "The financial cost of university tuition fees"
                },
                {
                  "key": "B",
                  "text": "The growth, benefits, and challenges of online education"
                },
                {
                  "key": "C",
                  "text": "Methods for building physical campus libraries"
                },
                {
                  "key": "D",
                  "text": "The history of postal correspondence courses"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Đoạn 1 nêu sự phát triển, Đoạn 2 nêu ưu điểm, Đoạn 3 nêu thách thức, Đoạn 4 nêu giải pháp lai (hybrid)."
            },
            {
              "id": "R2",
              "question": "The word 'ubiquitous' in paragraph 1 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "expensive and luxurious"
                },
                {
                  "key": "B",
                  "text": "widespread and found everywhere"
                },
                {
                  "key": "C",
                  "text": "unreliable and dangerous"
                },
                {
                  "key": "D",
                  "text": "temporary and experimental"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Ubiquitous' = phổ biến khắp nơi (widespread, omnipresent)."
            },
            {
              "id": "R3",
              "question": "According to paragraph 2, who benefits significantly from the flexibility of online learning?",
              "options": [
                {
                  "key": "A",
                  "text": "Only full-time residential undergraduates"
                },
                {
                  "key": "B",
                  "text": "Working professionals and isolated individuals"
                },
                {
                  "key": "C",
                  "text": "Professors who dislike lecturing in person"
                },
                {
                  "key": "D",
                  "text": "Commercial internet providers"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Working professionals, parents, and geographically isolated individuals can tailor their study schedules'."
            },
            {
              "id": "R4",
              "question": "The word 'assimilate' in paragraph 2 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "absorb and understand"
                },
                {
                  "key": "B",
                  "text": "reject and ignore"
                },
                {
                  "key": "C",
                  "text": "translate and print"
                },
                {
                  "key": "D",
                  "text": "memorize without thinking"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Assimilate concepts' = tiếp thu, hiểu sâu kiến thức (absorb and comprehend)."
            },
            {
              "id": "R5",
              "question": "According to paragraph 3, what is a major pedagogical disadvantage of virtual learning?",
              "options": [
                {
                  "key": "A",
                  "text": "Excessive physical textbook weight"
                },
                {
                  "key": "B",
                  "text": "Feelings of isolation and lack of face-to-face interaction"
                },
                {
                  "key": "C",
                  "text": "Frequent power outages in university buildings"
                },
                {
                  "key": "D",
                  "text": "Strict morning attendance rules"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'The absence of spontaneous face-to-face interaction can precipitate profound feelings of academic isolation'."
            },
            {
              "id": "R6",
              "question": "The word 'these' in paragraph 4 refers to:",
              "options": [
                {
                  "key": "A",
                  "text": "online discussion forums"
                },
                {
                  "key": "B",
                  "text": "pedagogical drawbacks and deficits"
                },
                {
                  "key": "C",
                  "text": "traditional university campuses"
                },
                {
                  "key": "D",
                  "text": "high completion statistics"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'To address these deficits' liên hệ lại các hạn chế đã nêu ở đoạn 3."
            },
            {
              "id": "R7",
              "question": "Why do completion rates for open online courses often fall below twenty percent?",
              "options": [
                {
                  "key": "A",
                  "text": "Tuition fees are excessively exorbitant"
                },
                {
                  "key": "B",
                  "text": "Students struggle with self-discipline without structured accountability"
                },
                {
                  "key": "C",
                  "text": "The courses are taught in dead languages"
                },
                {
                  "key": "D",
                  "text": "Internet servers are shut down every night"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'students struggle to maintain intrinsic motivation without structured institutional accountability'."
            },
            {
              "id": "R8",
              "question": "Which of the following is NOT mentioned as a feature of online education in paragraph 2?",
              "options": [
                {
                  "key": "A",
                  "text": "Asynchronous video lectures"
                },
                {
                  "key": "B",
                  "text": "Interactive discussion forums"
                },
                {
                  "key": "C",
                  "text": "Compulsory daily uniform requirements"
                },
                {
                  "key": "D",
                  "text": "Downloadable multimedia resources"
                }
              ],
              "correctAnswer": "C",
              "explanation": "Đồng phục bắt buộc (uniform requirements) hoàn toàn không được nhắc đến."
            },
            {
              "id": "R9",
              "question": "What is the goal of hybrid or blended educational models mentioned in paragraph 4?",
              "options": [
                {
                  "key": "A",
                  "text": "To close all physical university campuses permanently"
                },
                {
                  "key": "B",
                  "text": "To combine online flexibility with campus social camaraderie"
                },
                {
                  "key": "C",
                  "text": "To double the duration of bachelor degree programs"
                },
                {
                  "key": "D",
                  "text": "To reduce teacher salaries"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'retain the accessibility of distance education while preserving the vibrant social camaraderie'."
            },
            {
              "id": "R10",
              "question": "What can be inferred about the future of university education from the passage?",
              "options": [
                {
                  "key": "A",
                  "text": "Traditional face-to-face learning will disappear entirely next year"
                },
                {
                  "key": "B",
                  "text": "Universities will increasingly integrate digital tools with in-person sessions"
                },
                {
                  "key": "C",
                  "text": "Degrees obtained online will no longer be accredited"
                },
                {
                  "key": "D",
                  "text": "Computers will grade 100% of student emotions"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Mô hình kết hợp (blended/hybrid) là xu thế phát triển tất yếu của giáo dục đại học."
            }
          ]
        },
        {
          "id": "R-P2",
          "title": "Passage 2: The Renewable Energy Transition and Grid Stability",
          "wordCount": 475,
          "genre": "Environment & Energy",
          "text": "[P1] The transition from fossil fuels to renewable energy sources has emerged as the defining engineering imperative of the twenty-first century. Driven by urgent climate targets and plummeting photovoltaic costs, solar and wind power installations have expanded exponentially across both developed and emerging economies.\n\n[P2] The undeniable environmental benefits of renewable energy are manifold. Solar panels and wind turbines generate electricity with virtually zero direct greenhouse gas emissions during operation, drastically diminishing atmospheric carbon dioxide concentrations. Moreover, decentralizing power generation diminishes reliance on volatile fossil fuel import markets, bolstering national energy security.\n\n[P3] Nevertheless, integrating massive intermittent renewables introduces severe technical challenges for traditional power grids. Unlike coal or natural gas plants that provide steady baseload power, solar arrays cease generation after sunset, and wind turbines depend heavily on fluctuating atmospheric gusts. This intermittency creates severe supply-demand mismatches, potentially destabilizing grid frequency and risking blackouts unless substantial energy storage or backup capacity is deployed.\n\n[P4] To overcome grid volatility, utility companies are investing aggressively in utility-scale lithium-ion and flow battery storage facilities, pumped hydroelectric storage, and smart grid automation. Smart grid algorithms utilize artificial intelligence to forecast weather patterns and dynamically route surplus power across national transmission corridors, ensuring grid stability in a green energy era.",
          "questions": [
            {
              "id": "R11",
              "question": "What is the main idea of Passage 2?",
              "options": [
                {
                  "key": "A",
                  "text": "The economic cost of digging coal mines"
                },
                {
                  "key": "B",
                  "text": "The benefits and grid stability challenges of renewable energy"
                },
                {
                  "key": "C",
                  "text": "Why households should avoid buying solar panels"
                },
                {
                  "key": "D",
                  "text": "The history of steam locomotive engines"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Đoạn văn phân tích cả lợi ích môi trường lẫn thách thức kỹ thuật về tính gián đoạn (intermittency) của năng lượng tái tạo."
            },
            {
              "id": "R12",
              "question": "The word 'plummeting' in paragraph 1 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "increasing rapidly"
                },
                {
                  "key": "B",
                  "text": "falling sharply"
                },
                {
                  "key": "C",
                  "text": "fluctuating randomly"
                },
                {
                  "key": "D",
                  "text": "remaining constant"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Plummeting costs' = chi phí giảm mạnh (falling steeply/sharply)."
            },
            {
              "id": "R13",
              "question": "According to paragraph 2, how does renewable energy benefit national security?",
              "options": [
                {
                  "key": "A",
                  "text": "By increasing military spending on weapons"
                },
                {
                  "key": "B",
                  "text": "By reducing reliance on unpredictable fossil fuel import markets"
                },
                {
                  "key": "C",
                  "text": "By expanding foreign oil exploration projects"
                },
                {
                  "key": "D",
                  "text": "By building concrete border walls"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'diminishes reliance on volatile fossil fuel import markets, bolstering national energy security'."
            },
            {
              "id": "R14",
              "question": "The word 'intermittent' in paragraph 3 refers to energy that:",
              "options": [
                {
                  "key": "A",
                  "text": "occurs continuously without stopping"
                },
                {
                  "key": "B",
                  "text": "occurs at irregular intervals and is not continuous"
                },
                {
                  "key": "C",
                  "text": "is generated underground"
                },
                {
                  "key": "D",
                  "text": "is entirely free of charge"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Intermittent' = gián đoạn, chập chờn, không liên tục (irregular, non-continuous)."
            },
            {
              "id": "R15",
              "question": "Why do traditional fossil fuel plants differ from solar and wind installations?",
              "options": [
                {
                  "key": "A",
                  "text": "Fossil fuel plants generate zero carbon emissions"
                },
                {
                  "key": "B",
                  "text": "Fossil fuel plants can provide consistent and dispatchable baseload power"
                },
                {
                  "key": "C",
                  "text": "Fossil fuel plants only operate during rainstorms"
                },
                {
                  "key": "D",
                  "text": "Fossil fuel plants cannot connect to high-voltage wires"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Unlike coal or natural gas plants that provide steady baseload power'."
            },
            {
              "id": "R16",
              "question": "What danger can arise from supply-demand mismatches in the power grid?",
              "options": [
                {
                  "key": "A",
                  "text": "Immediate price deflation of all groceries"
                },
                {
                  "key": "B",
                  "text": "Destabilizing grid frequency and triggering widespread blackouts"
                },
                {
                  "key": "C",
                  "text": "Excessive domestic tap water pressure"
                },
                {
                  "key": "D",
                  "text": "Faster mobile phone charging"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'potentially destabilizing grid frequency and risking blackouts'."
            },
            {
              "id": "R17",
              "question": "Which of the following is NOT mentioned in paragraph 4 as a grid stabilization solution?",
              "options": [
                {
                  "key": "A",
                  "text": "Utility-scale lithium-ion and flow battery facilities"
                },
                {
                  "key": "B",
                  "text": "Pumped hydroelectric storage"
                },
                {
                  "key": "C",
                  "text": "Constructing coal burning boilers in residential homes"
                },
                {
                  "key": "D",
                  "text": "Smart grid algorithms powered by AI"
                }
              ],
              "correctAnswer": "C",
              "explanation": "Lò than trong khu dân cư (coal boilers in homes) hoàn toàn không được nhắc đến."
            },
            {
              "id": "R18",
              "question": "The word 'bolstering' in paragraph 2 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "strengthening and reinforcing"
                },
                {
                  "key": "B",
                  "text": "weakening and undermining"
                },
                {
                  "key": "C",
                  "text": "delaying and postponing"
                },
                {
                  "key": "D",
                  "text": "measuring and calculating"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Bolstering security' = củng cố, tăng cường (strengthening, boosting)."
            },
            {
              "id": "R19",
              "question": "How do smart grid algorithms utilize AI according to paragraph 4?",
              "options": [
                {
                  "key": "A",
                  "text": "To forecast weather patterns and dynamically route surplus power"
                },
                {
                  "key": "B",
                  "text": "To disconnect residential neighborhoods randomly"
                },
                {
                  "key": "C",
                  "text": "To replace all human electricians with robots"
                },
                {
                  "key": "D",
                  "text": "To charge consumers higher night-time rates"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'utilize artificial intelligence to forecast weather patterns and dynamically route surplus power'."
            },
            {
              "id": "R20",
              "question": "What is the author's tone regarding the renewable energy transition?",
              "options": [
                {
                  "key": "A",
                  "text": "Deeply sarcastic and pessimistic"
                },
                {
                  "key": "B",
                  "text": "Objective, analytical, and forward-looking"
                },
                {
                  "key": "C",
                  "text": "Indifferent and dismissive"
                },
                {
                  "key": "D",
                  "text": "Hostile towards technological modernization"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Tác giả trình bày khách quan, phân tích khoa học và hướng tới giải pháp tương lai."
            }
          ]
        },
        {
          "id": "R-P3",
          "title": "Passage 3: The Psychology of Habit Formation and Behavioral Loops",
          "wordCount": 480,
          "genre": "Psychology & Behavioral Science",
          "text": "[P1] Human behavior is overwhelmingly governed by automatic routines rather than deliberate, conscious calculations. Cognitive psychologists estimate that upwards of forty percent of our daily actions—ranging from our morning coffee rituals to our smartphone browsing habits—are executed autonomously through subconscious neurological habit loops.\n\n[P2] At the core of every habit lies a three-part neurological architecture pioneered by behavioral researchers: the cue, the routine, and the reward. The cue acts as a sensory trigger that prompts the brain to initiate a pre-programmed behavior. The routine represents the physical, mental, or emotional action performed. Finally, the reward satisfies a neurochemical craving—often through a surge of dopamine—signaling the brain that this loop is worth preserving in memory.\n\n[P3] Understanding the habit loop illuminates why detrimental habits prove remarkably resilient to brute willpower alone. Attempting to suppress a deeply ingrained routine without altering the underlying cue or providing an alternative reward creates psychological tension and cognitive fatigue. Instead, behavioral scientists recommend the 'Golden Rule of Habit Change': keep the original cue and reward intact, but strategically substitute the middle routine with a healthier alternative.\n\n[P4] Furthermore, environmental architecture plays a decisive role in sustaining positive behavioral modifications. By consciously eliminating friction for desired behaviors—such as placing running shoes beside the bed—and increasing friction for unproductive impulses—such as storing digital devices outside the bedroom—individuals can reshape their subconscious routines without relying on finite reserves of daily self-control.",
          "questions": [
            {
              "id": "R21",
              "question": "What is the central topic of Passage 3?",
              "options": [
                {
                  "key": "A",
                  "text": "The financial cost of gym memberships"
                },
                {
                  "key": "B",
                  "text": "The neurological structure of habit loops and strategies for behavioral change"
                },
                {
                  "key": "C",
                  "text": "The chemistry of morning coffee beans"
                },
                {
                  "key": "D",
                  "text": "Why willpower alone is 100% sufficient for every goal"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Bài đọc phân tích cấu trúc 3 phần của thói quen và các chiến lược khoa học để thay đổi hành vi."
            },
            {
              "id": "R22",
              "question": "According to paragraph 1, approximately what percentage of daily human actions are habits?",
              "options": [
                {
                  "key": "A",
                  "text": "Under ten percent"
                },
                {
                  "key": "B",
                  "text": "Around twenty-five percent"
                },
                {
                  "key": "C",
                  "text": "More than forty percent"
                },
                {
                  "key": "D",
                  "text": "Exactly one hundred percent"
                }
              ],
              "correctAnswer": "C",
              "explanation": "'upwards of forty percent of our daily actions... are executed autonomously'."
            },
            {
              "id": "R23",
              "question": "What are the three components of the neurological habit loop in paragraph 2?",
              "options": [
                {
                  "key": "A",
                  "text": "Sleep, exercise, and diet"
                },
                {
                  "key": "B",
                  "text": "The cue, the routine, and the reward"
                },
                {
                  "key": "C",
                  "text": "Memory, intellect, and willpower"
                },
                {
                  "key": "D",
                  "text": "Input, processing, and hardware"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'the cue, the routine, and the reward'."
            },
            {
              "id": "R24",
              "question": "The word 'detrimental' in paragraph 3 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "harmful and damaging"
                },
                {
                  "key": "B",
                  "text": "beneficial and productive"
                },
                {
                  "key": "C",
                  "text": "ancient and traditional"
                },
                {
                  "key": "D",
                  "text": "costly and luxurious"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Detrimental habits' = thói quen có hại, tiêu cực (harmful, damaging)."
            },
            {
              "id": "R25",
              "question": "What does the 'Golden Rule of Habit Change' suggest doing?",
              "options": [
                {
                  "key": "A",
                  "text": "Eliminating all rewards from daily life"
                },
                {
                  "key": "B",
                  "text": "Keeping the cue and reward while substituting the routine"
                },
                {
                  "key": "C",
                  "text": "Ignoring all sensory triggers completely"
                },
                {
                  "key": "D",
                  "text": "Punishing oneself whenever a mistake occurs"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'keep the original cue and reward intact, but strategically substitute the middle routine'."
            },
            {
              "id": "R26",
              "question": "The word 'surge' in paragraph 2 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "gradual decline"
                },
                {
                  "key": "B",
                  "text": "sudden powerful increase"
                },
                {
                  "key": "C",
                  "text": "complete disappearance"
                },
                {
                  "key": "D",
                  "text": "stable balance"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Surge of dopamine' = sự tăng vọt, bùng nổ đột ngột (sudden sharp increase)."
            },
            {
              "id": "R27",
              "question": "Why is relying solely on willpower often ineffective for breaking bad habits?",
              "options": [
                {
                  "key": "A",
                  "text": "Willpower is a finite cognitive resource that causes fatigue"
                },
                {
                  "key": "B",
                  "text": "Humans lack the capacity for rational thought"
                },
                {
                  "key": "C",
                  "text": "Bad habits carry zero neurological rewards"
                },
                {
                  "key": "D",
                  "text": "Subconscious routines are permanently deleted every night"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Attempting to suppress... creates psychological tension and cognitive fatigue... finite reserves of daily self-control'."
            },
            {
              "id": "R28",
              "question": "What is an example of 'reducing friction' for a good habit mentioned in paragraph 4?",
              "options": [
                {
                  "key": "A",
                  "text": "Hiding running shoes inside a locked closet"
                },
                {
                  "key": "B",
                  "text": "Placing running shoes right beside the bed"
                },
                {
                  "key": "C",
                  "text": "Watching television until 2:00 AM"
                },
                {
                  "key": "D",
                  "text": "Setting ten alarm clocks across the house"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'eliminating friction for desired behaviors—such as placing running shoes beside the bed'."
            },
            {
              "id": "R29",
              "question": "The word 'it' in paragraph 2 refers to:",
              "options": [
                {
                  "key": "A",
                  "text": "the sensory trigger"
                },
                {
                  "key": "B",
                  "text": "the physical habit loop"
                },
                {
                  "key": "C",
                  "text": "the human brain"
                },
                {
                  "key": "D",
                  "text": "the coffee ritual"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'signaling the brain that this loop is worth preserving'."
            },
            {
              "id": "R30",
              "question": "What can be inferred about human nature from the text?",
              "options": [
                {
                  "key": "A",
                  "text": "We are entirely helpless victims of our genetics"
                },
                {
                  "key": "B",
                  "text": "Environmental design can strategically guide subconscious choices"
                },
                {
                  "key": "C",
                  "text": "Habits cannot be formed after age twenty-five"
                },
                {
                  "key": "D",
                  "text": "Dopamine is only produced during physical sports"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Thiết kế môi trường có thể tái định hình các thói quen tiềm thức một cách chiến lược."
            }
          ]
        },
        {
          "id": "R-P4",
          "title": "Passage 4: Urban Agriculture and Vertical Farming Technologies",
          "wordCount": 495,
          "genre": "Agriculture & Urbanization",
          "text": "[P1] As the global population approaches ten billion by mid-century, conventional agriculture faces unprecedented ecological constraints. Arable land is diminishing due to soil degradation and desertification, while traditional farming consumes roughly seventy percent of global freshwater reserves. In response to these compounding crises, agricultural scientists and urban architects are pioneering Controlled Environment Agriculture (CEA), commonly known as vertical farming.\n\n[P2] Vertical farms cultivate crops inside multi-story retrofitted urban facilities, repurposing abandoned warehouses, basements, and shipping containers. By employing soilless hydroponic and aeroponic systems, plant roots receive calibrated nutrient-rich water mists directly, reducing total water consumption by up to ninety-five percent compared to traditional open-field farming. Furthermore, high-efficiency spectrum-tuned LED lights deliver optimized photosynthetic wavelengths around the clock, accelerating harvest cycles regardless of external weather conditions.\n\n[P3] In addition to resource efficiency, urban vertical agriculture offers profound logistical advantages. By producing fresh leafy greens and vegetables within metropolitan borders, the distance food travels from farm to consumer—frequently spanning thousands of miles in conventional supply chains—is slashed to mere kilometers. This drastic reduction in food miles minimizes transportation fuel emissions and eliminates costly post-harvest food spoilage.\n\n[P4] Despite its transformative potential, vertical farming faces critical economic and technical bottlenecks. High initial capital expenditures for specialized LED fixtures, automated robotics, and environmental climate control units render operations financially demanding. Moreover, substantial electricity consumption from artificial lighting can elevate carbon emissions if powered by fossil fuel grids. Consequently, the commercial viability of vertical farming hinges on continued declines in renewable energy costs and specialized LED efficiencies.",
          "questions": [
            {
              "id": "R31",
              "question": "What is the primary subject of Passage 4?",
              "options": [
                {
                  "key": "A",
                  "text": "The history of medieval grain trade"
                },
                {
                  "key": "B",
                  "text": "The mechanisms, benefits, and challenges of vertical farming"
                },
                {
                  "key": "C",
                  "text": "Methods for chemical pesticide synthesis"
                },
                {
                  "key": "D",
                  "text": "Why cities should eliminate all public parks"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Toàn bài phân tích kỹ thuật, lợi thế và thách thức kinh tế của nông nghiệp thẳng đứng (vertical farming)."
            },
            {
              "id": "R32",
              "question": "According to paragraph 1, what percentage of global freshwater is consumed by traditional farming?",
              "options": [
                {
                  "key": "A",
                  "text": "Approximately twenty percent"
                },
                {
                  "key": "B",
                  "text": "Roughly fifty percent"
                },
                {
                  "key": "C",
                  "text": "Roughly seventy percent"
                },
                {
                  "key": "D",
                  "text": "Over ninety-five percent"
                }
              ],
              "correctAnswer": "C",
              "explanation": "'traditional farming consumes roughly seventy percent of global freshwater reserves'."
            },
            {
              "id": "R33",
              "question": "How much water can vertical farming save compared to open-field farming?",
              "options": [
                {
                  "key": "A",
                  "text": "Up to twenty percent"
                },
                {
                  "key": "B",
                  "text": "Up to fifty percent"
                },
                {
                  "key": "C",
                  "text": "Up to seventy-five percent"
                },
                {
                  "key": "D",
                  "text": "Up to ninety-five percent"
                }
              ],
              "correctAnswer": "D",
              "explanation": "'reducing total water consumption by up to ninety-five percent'."
            },
            {
              "id": "R34",
              "question": "The word 'retrofitted' in paragraph 2 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "demolished and destroyed"
                },
                {
                  "key": "B",
                  "text": "adapted and modified for a new purpose"
                },
                {
                  "key": "C",
                  "text": "painted in bright colors"
                },
                {
                  "key": "D",
                  "text": "abandoned and neglected"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Retrofitted facilities' = nhà xưởng được cải tạo, chuyển đổi công năng (modified, adapted)."
            },
            {
              "id": "R35",
              "question": "What role do spectrum-tuned LED lights play in vertical farms?",
              "options": [
                {
                  "key": "A",
                  "text": "They repel dangerous insects through loud frequencies"
                },
                {
                  "key": "B",
                  "text": "They provide optimized photosynthetic wavelengths around the clock"
                },
                {
                  "key": "C",
                  "text": "They boil the water to sanitize plant roots"
                },
                {
                  "key": "D",
                  "text": "They cool the building to freezing temperatures"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'deliver optimized photosynthetic wavelengths around the clock, accelerating harvest cycles'."
            },
            {
              "id": "R36",
              "question": "The phrase 'food miles' in paragraph 3 refers to:",
              "options": [
                {
                  "key": "A",
                  "text": "the speed at which crops grow per day"
                },
                {
                  "key": "B",
                  "text": "the distance food is transported from producer to consumer"
                },
                {
                  "key": "C",
                  "text": "the length of agricultural irrigation canals"
                },
                {
                  "key": "D",
                  "text": "the price per mile of supermarket delivery"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'the distance food travels from farm to consumer... food miles'."
            },
            {
              "id": "R37",
              "question": "According to paragraph 4, what is a major obstacle for vertical farming companies?",
              "options": [
                {
                  "key": "A",
                  "text": "Extreme shortage of agricultural seeds"
                },
                {
                  "key": "B",
                  "text": "High initial capital costs and intensive electricity consumption"
                },
                {
                  "key": "C",
                  "text": "Consumer refusal to eat leafy green vegetables"
                },
                {
                  "key": "D",
                  "text": "Government bans on indoor lighting"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'High initial capital expenditures... substantial electricity consumption from artificial lighting'."
            },
            {
              "id": "R38",
              "question": "The word 'expenditures' in paragraph 4 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "expenses and investments"
                },
                {
                  "key": "B",
                  "text": "profits and dividends"
                },
                {
                  "key": "C",
                  "text": "discounts and sales"
                },
                {
                  "key": "D",
                  "text": "debts and loans"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Capital expenditures' = chi phí đầu tư vốn (expenses, spending, capital outlays)."
            },
            {
              "id": "R39",
              "question": "Which of the following locations is NOT mentioned in paragraph 2 as a site for vertical farming?",
              "options": [
                {
                  "key": "A",
                  "text": "Abandoned warehouses"
                },
                {
                  "key": "B",
                  "text": "Basements"
                },
                {
                  "key": "C",
                  "text": "Shipping containers"
                },
                {
                  "key": "D",
                  "text": "Deep sea submarines"
                }
              ],
              "correctAnswer": "D",
              "explanation": "Tàu ngầm biển sâu (submarines) hoàn toàn không được nhắc đến."
            },
            {
              "id": "R40",
              "question": "What factor is essential for the future commercial success of vertical farming?",
              "options": [
                {
                  "key": "A",
                  "text": "Increased coal burning subsidies"
                },
                {
                  "key": "B",
                  "text": "Continued declines in renewable energy costs and higher LED efficiencies"
                },
                {
                  "key": "C",
                  "text": "A return to horse-plowed farming methods"
                },
                {
                  "key": "D",
                  "text": "Prohibiting all urban grocery supermarkets"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'hinges on continued declines in renewable energy costs and specialized LED efficiencies'."
            }
          ]
        }
      ]
    },
    "writing": {
      "time": 60,
      "task1": {
        "title": "Task 1: Viết Thư Yêu Cầu Thông Tin (Chiếm 1/3 điểm - 20 phút - Tối thiểu 120 từ)",
        "prompt": "You are planning to attend an intensive English summer course at an international university in Singapore. Write an email to the Admissions Office to inquire about course details.\nIn your letter:\n- State your current English proficiency level and reasons for enrolling\n- Inquire about course tuition fees, class schedules, and accommodation options\n- Ask about scholarship opportunities or early-bird discounts.",
        "sampleModel": "Dear Admissions Office,\n\nI am writing to inquire about the intensive English summer program scheduled to commence this upcoming July at your esteemed university in Singapore.\n\nCurrently, I am a third-year undergraduate student in Vietnam with an intermediate English proficiency level (CEFR B1). My primary goal is to refine my academic writing and presentation skills in preparation for prospective master's degree studies abroad.\n\nCould you please provide detailed information regarding the comprehensive tuition fees, course duration, and weekly class schedules? In addition, I would appreciate knowing whether on-campus dormitory accommodation is available for international students, along with the estimated monthly living expenses.\n\nLastly, I would be grateful if you could clarify if there are any early-bird registration discounts or merit-based partial scholarships for international applicants.\n\nThank you for your assistance. I look forward to receiving your response.\n\nYours sincerely,\nNguyen Minh Tri"
      },
      "task2": {
        "title": "Task 2: Viết Bài Luận Học Thuật (Chiếm 2/3 điểm - 40 phút - Tối thiểu 250 từ)",
        "prompt": "Some people believe that university students should focus only on academic subjects related to their future career, while others think they should study a wide range of subjects. Discuss both views and give your opinion.\nGive reasons for your answer and include relevant examples.",
        "sampleModel": "Higher education institutions play a pivotal role in equipping students for professional careers and personal growth. While some argue that university curricula should strictly focus on career-specific subjects, others contend that exposing undergraduates to diverse disciplines yields greater long-term benefits. This essay will examine both perspectives before presenting my own viewpoint.\n\nOn the one hand, advocates of specialized vocational education maintain that focusing exclusively on core professional subjects ensures high technical competency upon graduation. In highly competitive modern industries such as software engineering, medicine, and architecture, students must master intricate technical skills within a limited four-year timeframe. Eliminating peripheral subjects allows learners to dedicate more time to laboratory experiments, practical internships, and professional certification, thereby enhancing their immediate employability.\n\nOn the other hand, proponents of broad-based multidisciplinary education emphasize the importance of cultivating well-rounded cognitive abilities. Studying humanities, philosophy, and environmental science enhances critical thinking, intercultural empathy, and communication skills. In an era marked by rapid technological disruption and artificial intelligence, professionals frequently transition across multiple industries throughout their careers. Therefore, interdisciplinary knowledge and cognitive flexibility are indispensable assets that narrow technical training alone cannot provide.\n\nIn my opinion, a balanced curriculum combining deep domain specialization with foundational interdisciplinary electives represents the ideal educational framework. While students must attain rigorous mastery in their chosen major, introductory courses in business ethics, digital literacy, and psychology foster adaptable problem-solving capabilities.\n\nIn conclusion, while specialized vocational training enhances direct job readiness, broad multidisciplinary education equips graduates with versatile lifelong skills. A harmonious synthesis of both approaches ensures enduring success in an ever-evolving global economy."
      }
    },
    "speaking": {
      "time": 12,
      "part1": {
        "title": "Part 1: Social Interaction (3 phút)",
        "topic1": "Topic 1: Daily Habits & Productivity",
        "topic1Questions": [
          {
            "q": "What is your typical daily morning routine?",
            "sample": "To be honest, I usually wake up around 6:30 AM, drink a glass of warm water, and spend fifteen minutes doing light stretching exercises. Afterward, I prepare a nutritious breakfast and review my daily task list before heading to class."
          },
          {
            "q": "Do you prefer studying in the morning or at night?",
            "sample": "Personally, I find morning study sessions considerably more productive because my mind is fresh and undisturbed by social media notifications. Studying in the quiet morning atmosphere helps me retain complex concepts much faster."
          }
        ],
        "topic2": "Topic 2: Hobbies & Leisure Time",
        "topic2Questions": [
          {
            "q": "What do you enjoy doing during your free time?",
            "sample": "Whenever I have leisure time, I am passionate about reading personal development books and playing acoustic guitar. Engaging in music allows me to relieve mental stress after grueling study sessions."
          },
          {
            "q": "Did your hobbies change compared to when you were a child?",
            "sample": "Yes, absolutely. As a child, I spent countless hours playing outdoor hide-and-seek and video games. Nowadays, I gravitate towards creative and constructive activities like photography and landscape painting."
          }
        ]
      },
      "part2": {
        "title": "Part 2: Solution Discussion (4 phút)",
        "situation": "Your university English club is deciding on the best format for their end-of-term celebration. There are three options:\n1. Having a formal dinner banquet at a luxury restaurant\n2. Organizing an outdoor camping and team-building trip in a pine forest\n3. Hosting a movie night and potluck party in the university auditorium\nWhich option do you think is the best choice?",
        "bestOption": "Option 2: Organizing an outdoor camping and team-building trip",
        "sampleSpeech": "Good morning examiner. Faced with the situation of selecting the most suitable celebration for our English club, among the three proposed options, I would firmly choose Option 2—organizing an outdoor camping and team-building trip.\n\nFirst and foremost, an outdoor camping trip provides an authentic communal environment where members can participate in collaborative games, sit around a campfire, and foster meaningful interpersonal bonds. It is far more memorable and engaging than merely sitting passively.\n\nIn addition, camping is highly budget-friendly for university students, whereas Option 1 (a luxury restaurant banquet) is excessively exorbitant and financially burdensome for many members. Furthermore, Option 3 (a movie night) lacks active verbal interaction, which defeats the core purpose of an English club.\n\nTaking all factors into account, the outdoor camping excursion is undeniably the optimal solution."
      },
      "part3": {
        "title": "Part 3: Topic Development (5 phút)",
        "topic": "The Benefits of Lifelong Learning in the Digital Era",
        "mindMap": {
          "idea1": "Career Adaptability & Up-skilling",
          "idea2": "Cognitive Health & Mental Sharpness",
          "idea3": "Personal Fulfillment & Confidence",
          "ownIdea": "Bridging Intergenerational Gaps"
        },
        "sampleSpeech": "Good morning examiner. Today, I would like to deliver my presentation regarding the key benefits of lifelong learning in our modern digital society.\n\nFirstly, continuous learning guarantees career adaptability. As technological innovations automate traditional jobs, up-skilling through online courses enables professionals to remain competitive and acquire high-demand digital proficiencies.\n\nSecondly, engaging in intellectual pursuits preserves cognitive health and mental agility. Studies demonstrate that stimulating the brain with new languages or skills substantially delays age-related cognitive decline.\n\nFinally, my own personal perspective is that lifelong learning bridges intergenerational gaps, allowing older generations to communicate effectively with digital-native youth.\n\nIn conclusion, lifelong learning is indispensable for both individual self-actualization and overall social progress.",
        "followUp": [
          {
            "q": "How can governments encourage elderly citizens to embrace digital technology?",
            "a": "Governments can establish free community computer workshops in local cultural centers and recruit patient university volunteers to provide hands-on smartphone coaching for seniors."
          },
          {
            "q": "Do you believe children are learning too much through screens nowadays?",
            "a": "While digital learning offers interactive advantages, excessive screen time can cause digital eye strain and diminish real-world physical play. A balanced approach with scheduled screen breaks is vital."
          }
        ]
      }
    }
  },
  {
    "id": "vstep-exam-04",
    "name": "Đề Thi Chuẩn VSTEP Số 04 (Format ĐHQG TP.HCM)",
    "badge": "Đề Thực Chiến B1",
    "difficulty": "Bám sát đề thi thật 100%",
    "description": "Bộ đề thi thực chiến 4 kỹ năng VSTEP B1 tập trung vào Du Lịch, Công Nghệ Số và Đổi Mới Giáo Dục.",
    "listening": {
      "time": 40,
      "totalQuestions": 35,
      "part1": {
        "title": "Part 1: 8 Thông Báo Ngắn (8 câu hỏi)",
        "instructions": "Nghe 8 đoạn thông báo/hội thoại ngắn và chọn đáp án chính xác.",
        "questions": [
          {
            "id": "T2-L1",
            "audioText": "Good morning shoppers. Metro Electronics is pleased to announce a flash sale on all wireless Bluetooth headphones and laptop accessories. Enjoy a 30% discount at counter 4 on the second floor until 12:00 noon today.",
            "question": "What items are on promotional sale at Metro Electronics?",
            "options": [
              {
                "key": "A",
                "text": "Smart televisions and refrigerators"
              },
              {
                "key": "B",
                "text": "Wireless headphones and laptop accessories"
              },
              {
                "key": "C",
                "text": "Smartphone screen protectors"
              },
              {
                "key": "D",
                "text": "Digital cameras and tripods"
              }
            ],
            "correctAnswer": "B",
            "explanation": "Thông báo: 'flash sale on all wireless Bluetooth headphones and laptop accessories'."
          },
          {
            "id": "T2-L2",
            "audioText": "Passenger advisory for Express Train SE3 to Hue: Due to scheduled track repair between Da Nang and Hue, our arrival time will be delayed by forty-five minutes. Complimentary drinking water is available in dining carriage number 5.",
            "question": "How long is the train delayed?",
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
            "correctAnswer": "C",
            "explanation": "'arrival time will be delayed by forty-five minutes'."
          },
          {
            "id": "T2-L3",
            "audioText": "Hello James, this is Dr. Miller's dental office calling to remind you of your root canal appointment tomorrow afternoon at 3:15 PM. Please arrive ten minutes early to complete medical history paperwork.",
            "question": "What time is James's appointment scheduled for?",
            "options": [
              {
                "key": "A",
                "text": "10:00 AM"
              },
              {
                "key": "B",
                "text": "2:30 PM"
              },
              {
                "key": "C",
                "text": "3:15 PM"
              },
              {
                "key": "D",
                "text": "3:45 PM"
              }
            ],
            "correctAnswer": "C",
            "explanation": "'appointment tomorrow afternoon at 3:15 PM'."
          },
          {
            "id": "T2-L4",
            "audioText": "Weather bulletin for the northern provinces: A strong cold front from the north will cause temperatures in Hanoi to drop sharply to 14 degrees Celsius tonight, accompanied by scattered drizzle. Residents should dress warmly.",
            "question": "What will the weather in Hanoi be like tonight?",
            "options": [
              {
                "key": "A",
                "text": "Hot and humid with thunderstorms"
              },
              {
                "key": "B",
                "text": "Cold with temperatures dropping to 14°C and drizzle"
              },
              {
                "key": "C",
                "text": "Sunny and dry throughout the night"
              },
              {
                "key": "D",
                "text": "Heavy snowfall and frozen roads"
              }
            ],
            "correctAnswer": "B",
            "explanation": "'drop sharply to 14 degrees Celsius tonight, accompanied by scattered drizzle'."
          },
          {
            "id": "T2-L5",
            "audioText": "Announcement for University Sports Complex members: The indoor badminton courts will be reserved exclusively for the Inter-faculty Tournament this Saturday from 8:00 AM to 5:00 PM. General practice will resume on Sunday.",
            "question": "Why will the badminton courts be unavailable for general practice this Saturday?",
            "options": [
              {
                "key": "A",
                "text": "Roof maintenance and repainting"
              },
              {
                "key": "B",
                "text": "Inter-faculty Tournament competition"
              },
              {
                "key": "C",
                "text": "Cleaning and sanitization"
              },
              {
                "key": "D",
                "text": "Power outage in the sports complex"
              }
            ],
            "correctAnswer": "B",
            "explanation": "'reserved exclusively for the Inter-faculty Tournament'."
          },
          {
            "id": "T2-L6",
            "audioText": "M: Hi Karen, have you received the invoice for the office printer paper?\nW: Yes Brian, but the supplier charged us $150 instead of the agreed contract price of $120. I'll call their billing department right away to request a revised invoice.",
            "question": "What was the agreed contract price for the paper?",
            "options": [
              {
                "key": "A",
                "text": "$100"
              },
              {
                "key": "B",
                "text": "$120"
              },
              {
                "key": "C",
                "text": "$150"
              },
              {
                "key": "D",
                "text": "$270"
              }
            ],
            "correctAnswer": "B",
            "explanation": "'instead of the agreed contract price of $120'."
          },
          {
            "id": "T2-L7",
            "audioText": "Notice from Blue Sky Airlines: Online check-in is now open 24 hours prior to departure for all domestic flights. Passengers traveling with carry-on baggage only can proceed directly to security screening at Concourse B.",
            "question": "When can passengers check in online for their flights?",
            "options": [
              {
                "key": "A",
                "text": "2 hours before departure"
              },
              {
                "key": "B",
                "text": "12 hours before departure"
              },
              {
                "key": "C",
                "text": "24 hours before departure"
              },
              {
                "key": "D",
                "text": "48 hours before departure"
              }
            ],
            "correctAnswer": "C",
            "explanation": "'Online check-in is now open 24 hours prior to departure'."
          },
          {
            "id": "T2-L8",
            "audioText": "Attention museum visitors. Our special exhibition 'Treasures of Ancient Mesopotamia' on the third floor gallery will close in 15 minutes. Please proceed to the main foyer to collect your coats and backpacks.",
            "question": "Where are visitors instructed to collect their personal belongings?",
            "options": [
              {
                "key": "A",
                "text": "At the third floor gallery"
              },
              {
                "key": "B",
                "text": "In the museum gift shop"
              },
              {
                "key": "C",
                "text": "At the main foyer"
              },
              {
                "key": "D",
                "text": "Near the outdoor garden"
              }
            ],
            "correctAnswer": "C",
            "explanation": "'Please proceed to the main foyer to collect your coats and backpacks'."
          }
        ]
      },
      "part2": {
        "title": "Part 2: 3 Đoạn Hội Thoại Dài (12 câu hỏi)",
        "instructions": "Bạn sẽ nghe 3 đoạn hội thoại. Mỗi hội thoại có 4 câu hỏi trắc nghiệm.",
        "conversations": [
          {
            "id": "C1",
            "title": "Hội thoại 1: Lập kế hoạch thực tập tốt nghiệp",
            "audioTranscript": "Man: Hi Elena, have you submitted your summer internship application to the Career Center yet? The deadline is this Friday.\nWoman: Not quite yet, David. I'm torn between two choices: an internship at a local software startup and an administrative position at a multinational corporation.\nMan: Well, the multinational company surely looks impressive on a resume, but you often end up doing repetitive paperwork. At a startup, you'll work directly with senior engineers and gain hands-on coding experience.\nWoman: That's a valid point. I really want to sharpen my practical programming skills and understand full project workflows. I think I'll finalize my application for the startup tonight!",
            "questions": [
              {
                "id": "L9",
                "question": "What is the main topic of the conversation?",
                "options": [
                  {
                    "key": "A",
                    "text": "Preparing for final university examinations"
                  },
                  {
                    "key": "B",
                    "text": "Choosing a summer internship placement"
                  },
                  {
                    "key": "C",
                    "text": "Applying for a postgraduate scholarship"
                  },
                  {
                    "key": "D",
                    "text": "Negotiating starting salary at a company"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Hai người trao đổi về việc nộp hồ sơ thực tập mùa hè (summer internship)."
              },
              {
                "id": "L10",
                "question": "When is the deadline for submitting the internship application?",
                "options": [
                  {
                    "key": "A",
                    "text": "This Wednesday"
                  },
                  {
                    "key": "B",
                    "text": "This Friday"
                  },
                  {
                    "key": "C",
                    "text": "Next Monday"
                  },
                  {
                    "key": "D",
                    "text": "At the end of the month"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "David nói: 'The deadline is this Friday'."
              },
              {
                "id": "L11",
                "question": "What advantage of working at a startup does David mention?",
                "options": [
                  {
                    "key": "A",
                    "text": "Higher monthly allowance"
                  },
                  {
                    "key": "B",
                    "text": "Opportunity for direct hands-on coding experience"
                  },
                  {
                    "key": "C",
                    "text": "Shorter daily commuting distance"
                  },
                  {
                    "key": "D",
                    "text": "Guaranteed permanent job offer"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "David nêu: 'work directly with senior engineers and gain hands-on coding experience'."
              },
              {
                "id": "L12",
                "question": "What does Elena decide to do at the end?",
                "options": [
                  {
                    "key": "A",
                    "text": "Apply for the software startup position"
                  },
                  {
                    "key": "B",
                    "text": "Postpone her internship until next year"
                  },
                  {
                    "key": "C",
                    "text": "Consult her academic advisor tomorrow"
                  },
                  {
                    "key": "D",
                    "text": "Accept the multinational administrative role"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Elena kết luận: 'I think I'll finalize my application for the startup tonight!'."
              }
            ]
          },
          {
            "id": "C2",
            "title": "Hội thoại 2: Thuê căn hộ chung cư cho sinh viên",
            "audioTranscript": "Woman: Good afternoon Mr. Tran, my roommate and I are looking to rent a two-bedroom apartment near the University of Technology.\nMan: Hello! I have a fully furnished unit on the 8th floor of Sunrise Tower. It has two bedrooms, a spacious balcony, air conditioning, and high-speed fiber internet included.\nWoman: That sounds wonderful. How much is the monthly rent, and what about utility bills?\nMan: The rent is 8 million VND per month. Electricity and water are billed separately according to state utility meters. We require a two-month security deposit upon signing the one-year lease.\nWoman: Can we visit the apartment tomorrow morning around 9:30 AM to inspect the condition before making a decision?\nMan: Absolutely, I'll meet you at the lobby entrance.",
            "questions": [
              {
                "id": "L13",
                "question": "What type of accommodation are the students seeking?",
                "options": [
                  {
                    "key": "A",
                    "text": "A shared dormitory room"
                  },
                  {
                    "key": "B",
                    "text": "A two-bedroom furnished apartment"
                  },
                  {
                    "key": "C",
                    "text": "A studio townhouse with a garden"
                  },
                  {
                    "key": "D",
                    "text": "A homestay with a host family"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'looking to rent a two-bedroom apartment near the University'."
              },
              {
                "id": "L14",
                "question": "What is included in the 8 million VND monthly rent?",
                "options": [
                  {
                    "key": "A",
                    "text": "Electricity and cooking gas"
                  },
                  {
                    "key": "B",
                    "text": "High-speed fiber internet and furniture"
                  },
                  {
                    "key": "C",
                    "text": "Daily cleaning and laundry services"
                  },
                  {
                    "key": "D",
                    "text": "Underground car parking fees"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'fully furnished... high-speed fiber internet included'."
              },
              {
                "id": "L15",
                "question": "How much deposit is required upon signing the contract?",
                "options": [
                  {
                    "key": "A",
                    "text": "One month rent"
                  },
                  {
                    "key": "B",
                    "text": "Two months rent"
                  },
                  {
                    "key": "C",
                    "text": "Three months rent"
                  },
                  {
                    "key": "D",
                    "text": "No deposit required"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'We require a two-month security deposit upon signing'."
              },
              {
                "id": "L16",
                "question": "When will the woman inspect the apartment?",
                "options": [
                  {
                    "key": "A",
                    "text": "This evening at 7:00 PM"
                  },
                  {
                    "key": "B",
                    "text": "Tomorrow morning at 9:30 AM"
                  },
                  {
                    "key": "C",
                    "text": "Next Saturday afternoon"
                  },
                  {
                    "key": "D",
                    "text": "At the end of the week"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'visit the apartment tomorrow morning around 9:30 AM'."
              }
            ]
          },
          {
            "id": "C3",
            "title": "Hội thoại 3: Tổ chức chiến dịch bảo vệ môi trường",
            "audioTranscript": "Man: Lisa, our Student Union environmental campaign 'Green Campus' is scheduled for next Saturday. Have we secured all the trash grabbers, biodegradable garbage bags, and gloves?\nWoman: Yes Tom, the logistics team received 200 pairs of protective gloves and 500 compostable bags yesterday from our corporate sponsor.\nMan: Fantastic! How many student volunteers have registered online so far?\nWoman: We reached 180 registrations this morning, exceeding our initial target of 150. I've divided them into four squads: plastic bottle sorting, tree planting around the sports field, electronic waste collection, and riverbank clean-up.\nMan: Excellent organization! Let's hold a short briefing on Friday afternoon to distribute team badges and safety instructions.",
            "questions": [
              {
                "id": "L17",
                "question": "What is the name of the Student Union campaign?",
                "options": [
                  {
                    "key": "A",
                    "text": "Clean Oceans Initiative"
                  },
                  {
                    "key": "B",
                    "text": "Green Campus"
                  },
                  {
                    "key": "C",
                    "text": "Zero Carbon Future"
                  },
                  {
                    "key": "D",
                    "text": "Eco-Friendly Living"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'our Student Union environmental campaign Green Campus'."
              },
              {
                "id": "L18",
                "question": "Who provided the gloves and biodegradable bags?",
                "options": [
                  {
                    "key": "A",
                    "text": "The local city council"
                  },
                  {
                    "key": "B",
                    "text": "A corporate sponsor"
                  },
                  {
                    "key": "C",
                    "text": "Student Union funding"
                  },
                  {
                    "key": "D",
                    "text": "Donations from professors"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'received... from our corporate sponsor'."
              },
              {
                "id": "L19",
                "question": "How many volunteers have registered for the event?",
                "options": [
                  {
                    "key": "A",
                    "text": "150 volunteers"
                  },
                  {
                    "key": "B",
                    "text": "180 volunteers"
                  },
                  {
                    "key": "C",
                    "text": "200 volunteers"
                  },
                  {
                    "key": "D",
                    "text": "500 volunteers"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'We reached 180 registrations this morning, exceeding our initial target of 150'."
              },
              {
                "id": "L20",
                "question": "What will happen during Friday afternoon's meeting?",
                "options": [
                  {
                    "key": "A",
                    "text": "Planting trees around the football field"
                  },
                  {
                    "key": "B",
                    "text": "Distributing badges and safety instructions"
                  },
                  {
                    "key": "C",
                    "text": "Collecting electronic waste from residents"
                  },
                  {
                    "key": "D",
                    "text": "Interviewing new team captains"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'hold a short briefing on Friday afternoon to distribute team badges and safety instructions'."
              }
            ]
          }
        ]
      },
      "part3": {
        "title": "Part 3: 3 Bài Thuyết Trình Học Thuật (15 câu hỏi)",
        "instructions": "Bạn sẽ nghe 3 bài giảng học thuật. Mỗi bài giảng có 5 câu hỏi trắc nghiệm.",
        "talks": [
          {
            "id": "T1",
            "title": "Bài giảng 1: Sự tiến hóa của Trí tuệ Nhân tạo trong Giáo dục",
            "audioTranscript": "Good morning class. Today, we delve into the transformative role of Artificial Intelligence in contemporary education. Historically, traditional classrooms adopted a one-size-fits-all approach, where all students followed identical textbooks regardless of individual learning paces. Modern AI-driven adaptive platforms, however, analyze student interaction data in real time to customize personalized exercise difficulty and learning pathways.\n\nFurthermore, automated grading systems now evaluate written essays and provide instant constructive feedback on grammar, cohesion, and vocabulary usage, saving educators substantial grading time. Nonetheless, educational researchers emphasize that AI cannot replace the empathetic human dimension of teaching, such as mentoring, inspiring curiosity, and emotional encouragement.",
            "questions": [
              {
                "id": "L21",
                "question": "What is the primary topic of the lecture?",
                "options": [
                  {
                    "key": "A",
                    "text": "History of traditional university examinations"
                  },
                  {
                    "key": "B",
                    "text": "Application and limitations of AI in education"
                  },
                  {
                    "key": "C",
                    "text": "Developing robotic hardware for school labs"
                  },
                  {
                    "key": "D",
                    "text": "Financial cost of computer software"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Toàn bộ bài giảng phân tích vai trò chuyển đổi và các khía cạnh của AI trong giáo dục hiện đại."
              },
              {
                "id": "L22",
                "question": "How do AI adaptive platforms personalize learning for students?",
                "options": [
                  {
                    "key": "A",
                    "text": "By eliminating all final exams"
                  },
                  {
                    "key": "B",
                    "text": "By customizing exercise difficulty based on interaction data"
                  },
                  {
                    "key": "C",
                    "text": "By replacing human professors completely"
                  },
                  {
                    "key": "D",
                    "text": "By providing free digital tablets"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'analyze student interaction data in real time to customize personalized exercise difficulty'."
              },
              {
                "id": "L23",
                "question": "What task can automated grading systems assist teachers with?",
                "options": [
                  {
                    "key": "A",
                    "text": "Evaluating essays and providing instant linguistic feedback"
                  },
                  {
                    "key": "B",
                    "text": "Maintaining physical sports equipment"
                  },
                  {
                    "key": "C",
                    "text": "Conducting parent-teacher conferences"
                  },
                  {
                    "key": "D",
                    "text": "Arranging school bus schedules"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "'evaluate written essays and provide instant constructive feedback'."
              },
              {
                "id": "L24",
                "question": "According to researchers, what human quality cannot be replaced by AI?",
                "options": [
                  {
                    "key": "A",
                    "text": "Calculating mathematical formulas"
                  },
                  {
                    "key": "B",
                    "text": "Storing historical dates and facts"
                  },
                  {
                    "key": "C",
                    "text": "Empathy, mentoring, and emotional encouragement"
                  },
                  {
                    "key": "D",
                    "text": "Translating foreign language articles"
                  }
                ],
                "correctAnswer": "C",
                "explanation": "'AI cannot replace the empathetic human dimension of teaching, such as mentoring, inspiring curiosity, and emotional encouragement'."
              },
              {
                "id": "L25",
                "question": "What was a key limitation of the traditional historical classroom?",
                "options": [
                  {
                    "key": "A",
                    "text": "Lack of physical chalkboards"
                  },
                  {
                    "key": "B",
                    "text": "A rigid one-size-fits-all approach for all learners"
                  },
                  {
                    "key": "C",
                    "text": "Short daily study duration"
                  },
                  {
                    "key": "D",
                    "text": "Excessive student interaction"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'traditional classrooms adopted a one-size-fits-all approach'."
              }
            ]
          },
          {
            "id": "T2",
            "title": "Bài giảng 2: Đô thị sinh thái và Phát triển bền vững",
            "audioTranscript": "Welcome everyone. Today's urban planning seminar focuses on Eco-Cities, designed to minimize ecological footprints through sustainable architecture and renewable energy. A hallmark of eco-cities is the 15-minute neighborhood model, ensuring every resident can access essential services, schools, groceries, and green parks within a 15-minute walk or bicycle ride.\n\nIn addition, green roofs and vertical gardens help combat the urban heat island effect, decreasing ambient air temperatures by up to 3 degrees Celsius during summer heatwaves. Permeable pavements and rainwater harvesting reservoirs absorb storm runoff, substantially mitigating urban flash flooding risks.",
            "questions": [
              {
                "id": "L26",
                "question": "What is the core principle of an Eco-City?",
                "options": [
                  {
                    "key": "A",
                    "text": "Maximizing automotive highways and parking lots"
                  },
                  {
                    "key": "B",
                    "text": "Minimizing ecological footprint through sustainability"
                  },
                  {
                    "key": "C",
                    "text": "Building skyscrapers with luxury penthouses"
                  },
                  {
                    "key": "D",
                    "text": "Banning all commercial industrial businesses"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'designed to minimize ecological footprints through sustainable architecture and renewable energy'."
              },
              {
                "id": "L27",
                "question": "What is guaranteed in a 15-minute neighborhood model?",
                "options": [
                  {
                    "key": "A",
                    "text": "Free public high-speed trains to airports"
                  },
                  {
                    "key": "B",
                    "text": "Access to daily amenities within a 15-minute walk or bike ride"
                  },
                  {
                    "key": "C",
                    "text": "Free residential high-speed internet"
                  },
                  {
                    "key": "D",
                    "text": "15 minutes of free parking everywhere"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'access essential services, schools, groceries, and green parks within a 15-minute walk or bicycle ride'."
              },
              {
                "id": "L28",
                "question": "How do vertical gardens and green roofs improve urban climates?",
                "options": [
                  {
                    "key": "A",
                    "text": "By increasing winter snowfall"
                  },
                  {
                    "key": "B",
                    "text": "By reducing ambient temperatures during heatwaves by up to 3°C"
                  },
                  {
                    "key": "C",
                    "text": "By eliminating the need for indoor lighting"
                  },
                  {
                    "key": "D",
                    "text": "By blocking solar panels"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'decreasing ambient air temperatures by up to 3 degrees Celsius during summer heatwaves'."
              },
              {
                "id": "L29",
                "question": "What problem is mitigated by permeable pavements and rainwater reservoirs?",
                "options": [
                  {
                    "key": "A",
                    "text": "Urban flash flooding risks"
                  },
                  {
                    "key": "B",
                    "text": "Traffic speed violations"
                  },
                  {
                    "key": "C",
                    "text": "Air pollution from aircraft"
                  },
                  {
                    "key": "D",
                    "text": "Underground subway noise"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "'substantially mitigating urban flash flooding risks'."
              },
              {
                "id": "L30",
                "question": "What type of transportation is prioritized in eco-city design?",
                "options": [
                  {
                    "key": "A",
                    "text": "Heavy diesel commercial trucks"
                  },
                  {
                    "key": "B",
                    "text": "Walking, cycling, and clean public transit"
                  },
                  {
                    "key": "C",
                    "text": "Private gasoline sports cars"
                  },
                  {
                    "key": "D",
                    "text": "Domestic commercial flights"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Đoạn văn nhấn mạnh đi bộ (walking) và xe đạp (cycling) trong mô hình khu dân cư 15 phút."
              }
            ]
          },
          {
            "id": "T3",
            "title": "Bài giảng 3: Tâm lý học hành vi về Thói quen và Giấc ngủ",
            "audioTranscript": "Good afternoon colleagues. In this neurobiology lecture, we explore the profound impact of circadian rhythms and sleep architecture on cognitive performance and habit formation. Sleep is structured in repeating 90-minute cycles transitioning between Non-REM slow-wave sleep and REM sleep.\n\nDuring deep slow-wave sleep, the brain's glymphatic system flushes out metabolic toxins like beta-amyloid, while the hippocampus transfers short-term memories into the cerebral cortex for long-term consolidation. Chronic sleep deprivation of under six hours per night impairs executive decision-making, weakens emotional regulation, and elevates cortisol stress hormones.",
            "questions": [
              {
                "id": "L31",
                "question": "How long does a typical sleep cycle last in human adults?",
                "options": [
                  {
                    "key": "A",
                    "text": "45 minutes"
                  },
                  {
                    "key": "B",
                    "text": "90 minutes"
                  },
                  {
                    "key": "C",
                    "text": "120 minutes"
                  },
                  {
                    "key": "D",
                    "text": "180 minutes"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'Sleep is structured in repeating 90-minute cycles'."
              },
              {
                "id": "L32",
                "question": "What occurs in the brain during deep slow-wave sleep?",
                "options": [
                  {
                    "key": "A",
                    "text": "Toxins are cleared and memories consolidated into long-term storage"
                  },
                  {
                    "key": "B",
                    "text": "Brain metabolism increases to maximum speed"
                  },
                  {
                    "key": "C",
                    "text": "Heart rate accelerates dramatically"
                  },
                  {
                    "key": "D",
                    "text": "All nerve communication stops entirely"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "'flushes out metabolic toxins... transfers short-term memories into the cerebral cortex for long-term consolidation'."
              },
              {
                "id": "L33",
                "question": "What part of the brain coordinates the transfer of memories?",
                "options": [
                  {
                    "key": "A",
                    "text": "The retina"
                  },
                  {
                    "key": "B",
                    "text": "The hippocampus"
                  },
                  {
                    "key": "C",
                    "text": "The spinal cord"
                  },
                  {
                    "key": "D",
                    "text": "The auditory nerve"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'the hippocampus transfers short-term memories into the cerebral cortex'."
              },
              {
                "id": "L34",
                "question": "What is an adverse consequence of chronic sleep deprivation under 6 hours?",
                "options": [
                  {
                    "key": "A",
                    "text": "Enhanced photographic memory"
                  },
                  {
                    "key": "B",
                    "text": "Impaired executive decision-making and elevated cortisol"
                  },
                  {
                    "key": "C",
                    "text": "Decreased body temperature"
                  },
                  {
                    "key": "D",
                    "text": "Faster reflex reaction times"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'impairs executive decision-making, weakens emotional regulation, and elevates cortisol'."
              },
              {
                "id": "L35",
                "question": "What biological system regulates the 24-hour sleep-wake cycle?",
                "options": [
                  {
                    "key": "A",
                    "text": "Circadian rhythm"
                  },
                  {
                    "key": "B",
                    "text": "Digestive enzymes"
                  },
                  {
                    "key": "C",
                    "text": "Skeletal joints"
                  },
                  {
                    "key": "D",
                    "text": "Respiratory diaphragm"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "'profound impact of circadian rhythms and sleep architecture'."
              }
            ]
          }
        ]
      }
    },
    "reading": {
      "time": 60,
      "totalQuestions": 40,
      "passages": [
        {
          "id": "R-P1",
          "title": "Passage 1: The Evolution of Global Online Education",
          "wordCount": 460,
          "genre": "Education & Technology",
          "text": "[P1] In recent years, distance learning has shifted from an unconventional alternative into a mainstream pillar of higher education. Propelled by ubiquitous broadband internet, cloud computing, and interactive virtual classrooms, universities worldwide now deliver fully accredited degree programs to millions of students who reside thousands of kilometers from campus.\n\n[P2] The most prominent advantage of online education lies in its unprecedented geographic and temporal flexibility. Working professionals, parents, and geographically isolated individuals can tailor their study schedules around demanding domestic and occupational obligations. Asynchronous video lectures, interactive discussion forums, and downloadable multimedia resources empower learners to assimilate complex concepts at their own customized pace rather than adhering to rigid classroom timetables.\n\n[P3] However, virtual learning is not without pedagogical drawbacks. The absence of spontaneous face-to-face interaction can precipitate profound feelings of academic isolation and reduced collaborative engagement. Furthermore, online formats place tremendous demands on self-discipline and autonomous time management. Research indicates that completion rates for open online courses frequently hover below twenty percent, primarily because students struggle to maintain intrinsic motivation without structured institutional accountability.\n\n[P4] To address these deficits, contemporary educational institutions are pioneering hybrid or blended models. By fusing flexible self-paced digital modules with periodic interactive group seminars, universities aim to retain the accessibility of distance education while preserving the vibrant social camaraderie and accountability of traditional physical campuses.",
          "questions": [
            {
              "id": "R1",
              "question": "What is the primary focus of the passage?",
              "options": [
                {
                  "key": "A",
                  "text": "The financial cost of university tuition fees"
                },
                {
                  "key": "B",
                  "text": "The growth, benefits, and challenges of online education"
                },
                {
                  "key": "C",
                  "text": "Methods for building physical campus libraries"
                },
                {
                  "key": "D",
                  "text": "The history of postal correspondence courses"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Đoạn 1 nêu sự phát triển, Đoạn 2 nêu ưu điểm, Đoạn 3 nêu thách thức, Đoạn 4 nêu giải pháp lai (hybrid)."
            },
            {
              "id": "R2",
              "question": "The word 'ubiquitous' in paragraph 1 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "expensive and luxurious"
                },
                {
                  "key": "B",
                  "text": "widespread and found everywhere"
                },
                {
                  "key": "C",
                  "text": "unreliable and dangerous"
                },
                {
                  "key": "D",
                  "text": "temporary and experimental"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Ubiquitous' = phổ biến khắp nơi (widespread, omnipresent)."
            },
            {
              "id": "R3",
              "question": "According to paragraph 2, who benefits significantly from the flexibility of online learning?",
              "options": [
                {
                  "key": "A",
                  "text": "Only full-time residential undergraduates"
                },
                {
                  "key": "B",
                  "text": "Working professionals and isolated individuals"
                },
                {
                  "key": "C",
                  "text": "Professors who dislike lecturing in person"
                },
                {
                  "key": "D",
                  "text": "Commercial internet providers"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Working professionals, parents, and geographically isolated individuals can tailor their study schedules'."
            },
            {
              "id": "R4",
              "question": "The word 'assimilate' in paragraph 2 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "absorb and understand"
                },
                {
                  "key": "B",
                  "text": "reject and ignore"
                },
                {
                  "key": "C",
                  "text": "translate and print"
                },
                {
                  "key": "D",
                  "text": "memorize without thinking"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Assimilate concepts' = tiếp thu, hiểu sâu kiến thức (absorb and comprehend)."
            },
            {
              "id": "R5",
              "question": "According to paragraph 3, what is a major pedagogical disadvantage of virtual learning?",
              "options": [
                {
                  "key": "A",
                  "text": "Excessive physical textbook weight"
                },
                {
                  "key": "B",
                  "text": "Feelings of isolation and lack of face-to-face interaction"
                },
                {
                  "key": "C",
                  "text": "Frequent power outages in university buildings"
                },
                {
                  "key": "D",
                  "text": "Strict morning attendance rules"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'The absence of spontaneous face-to-face interaction can precipitate profound feelings of academic isolation'."
            },
            {
              "id": "R6",
              "question": "The word 'these' in paragraph 4 refers to:",
              "options": [
                {
                  "key": "A",
                  "text": "online discussion forums"
                },
                {
                  "key": "B",
                  "text": "pedagogical drawbacks and deficits"
                },
                {
                  "key": "C",
                  "text": "traditional university campuses"
                },
                {
                  "key": "D",
                  "text": "high completion statistics"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'To address these deficits' liên hệ lại các hạn chế đã nêu ở đoạn 3."
            },
            {
              "id": "R7",
              "question": "Why do completion rates for open online courses often fall below twenty percent?",
              "options": [
                {
                  "key": "A",
                  "text": "Tuition fees are excessively exorbitant"
                },
                {
                  "key": "B",
                  "text": "Students struggle with self-discipline without structured accountability"
                },
                {
                  "key": "C",
                  "text": "The courses are taught in dead languages"
                },
                {
                  "key": "D",
                  "text": "Internet servers are shut down every night"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'students struggle to maintain intrinsic motivation without structured institutional accountability'."
            },
            {
              "id": "R8",
              "question": "Which of the following is NOT mentioned as a feature of online education in paragraph 2?",
              "options": [
                {
                  "key": "A",
                  "text": "Asynchronous video lectures"
                },
                {
                  "key": "B",
                  "text": "Interactive discussion forums"
                },
                {
                  "key": "C",
                  "text": "Compulsory daily uniform requirements"
                },
                {
                  "key": "D",
                  "text": "Downloadable multimedia resources"
                }
              ],
              "correctAnswer": "C",
              "explanation": "Đồng phục bắt buộc (uniform requirements) hoàn toàn không được nhắc đến."
            },
            {
              "id": "R9",
              "question": "What is the goal of hybrid or blended educational models mentioned in paragraph 4?",
              "options": [
                {
                  "key": "A",
                  "text": "To close all physical university campuses permanently"
                },
                {
                  "key": "B",
                  "text": "To combine online flexibility with campus social camaraderie"
                },
                {
                  "key": "C",
                  "text": "To double the duration of bachelor degree programs"
                },
                {
                  "key": "D",
                  "text": "To reduce teacher salaries"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'retain the accessibility of distance education while preserving the vibrant social camaraderie'."
            },
            {
              "id": "R10",
              "question": "What can be inferred about the future of university education from the passage?",
              "options": [
                {
                  "key": "A",
                  "text": "Traditional face-to-face learning will disappear entirely next year"
                },
                {
                  "key": "B",
                  "text": "Universities will increasingly integrate digital tools with in-person sessions"
                },
                {
                  "key": "C",
                  "text": "Degrees obtained online will no longer be accredited"
                },
                {
                  "key": "D",
                  "text": "Computers will grade 100% of student emotions"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Mô hình kết hợp (blended/hybrid) là xu thế phát triển tất yếu của giáo dục đại học."
            }
          ]
        },
        {
          "id": "R-P2",
          "title": "Passage 2: The Renewable Energy Transition and Grid Stability",
          "wordCount": 475,
          "genre": "Environment & Energy",
          "text": "[P1] The transition from fossil fuels to renewable energy sources has emerged as the defining engineering imperative of the twenty-first century. Driven by urgent climate targets and plummeting photovoltaic costs, solar and wind power installations have expanded exponentially across both developed and emerging economies.\n\n[P2] The undeniable environmental benefits of renewable energy are manifold. Solar panels and wind turbines generate electricity with virtually zero direct greenhouse gas emissions during operation, drastically diminishing atmospheric carbon dioxide concentrations. Moreover, decentralizing power generation diminishes reliance on volatile fossil fuel import markets, bolstering national energy security.\n\n[P3] Nevertheless, integrating massive intermittent renewables introduces severe technical challenges for traditional power grids. Unlike coal or natural gas plants that provide steady baseload power, solar arrays cease generation after sunset, and wind turbines depend heavily on fluctuating atmospheric gusts. This intermittency creates severe supply-demand mismatches, potentially destabilizing grid frequency and risking blackouts unless substantial energy storage or backup capacity is deployed.\n\n[P4] To overcome grid volatility, utility companies are investing aggressively in utility-scale lithium-ion and flow battery storage facilities, pumped hydroelectric storage, and smart grid automation. Smart grid algorithms utilize artificial intelligence to forecast weather patterns and dynamically route surplus power across national transmission corridors, ensuring grid stability in a green energy era.",
          "questions": [
            {
              "id": "R11",
              "question": "What is the main idea of Passage 2?",
              "options": [
                {
                  "key": "A",
                  "text": "The economic cost of digging coal mines"
                },
                {
                  "key": "B",
                  "text": "The benefits and grid stability challenges of renewable energy"
                },
                {
                  "key": "C",
                  "text": "Why households should avoid buying solar panels"
                },
                {
                  "key": "D",
                  "text": "The history of steam locomotive engines"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Đoạn văn phân tích cả lợi ích môi trường lẫn thách thức kỹ thuật về tính gián đoạn (intermittency) của năng lượng tái tạo."
            },
            {
              "id": "R12",
              "question": "The word 'plummeting' in paragraph 1 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "increasing rapidly"
                },
                {
                  "key": "B",
                  "text": "falling sharply"
                },
                {
                  "key": "C",
                  "text": "fluctuating randomly"
                },
                {
                  "key": "D",
                  "text": "remaining constant"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Plummeting costs' = chi phí giảm mạnh (falling steeply/sharply)."
            },
            {
              "id": "R13",
              "question": "According to paragraph 2, how does renewable energy benefit national security?",
              "options": [
                {
                  "key": "A",
                  "text": "By increasing military spending on weapons"
                },
                {
                  "key": "B",
                  "text": "By reducing reliance on unpredictable fossil fuel import markets"
                },
                {
                  "key": "C",
                  "text": "By expanding foreign oil exploration projects"
                },
                {
                  "key": "D",
                  "text": "By building concrete border walls"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'diminishes reliance on volatile fossil fuel import markets, bolstering national energy security'."
            },
            {
              "id": "R14",
              "question": "The word 'intermittent' in paragraph 3 refers to energy that:",
              "options": [
                {
                  "key": "A",
                  "text": "occurs continuously without stopping"
                },
                {
                  "key": "B",
                  "text": "occurs at irregular intervals and is not continuous"
                },
                {
                  "key": "C",
                  "text": "is generated underground"
                },
                {
                  "key": "D",
                  "text": "is entirely free of charge"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Intermittent' = gián đoạn, chập chờn, không liên tục (irregular, non-continuous)."
            },
            {
              "id": "R15",
              "question": "Why do traditional fossil fuel plants differ from solar and wind installations?",
              "options": [
                {
                  "key": "A",
                  "text": "Fossil fuel plants generate zero carbon emissions"
                },
                {
                  "key": "B",
                  "text": "Fossil fuel plants can provide consistent and dispatchable baseload power"
                },
                {
                  "key": "C",
                  "text": "Fossil fuel plants only operate during rainstorms"
                },
                {
                  "key": "D",
                  "text": "Fossil fuel plants cannot connect to high-voltage wires"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Unlike coal or natural gas plants that provide steady baseload power'."
            },
            {
              "id": "R16",
              "question": "What danger can arise from supply-demand mismatches in the power grid?",
              "options": [
                {
                  "key": "A",
                  "text": "Immediate price deflation of all groceries"
                },
                {
                  "key": "B",
                  "text": "Destabilizing grid frequency and triggering widespread blackouts"
                },
                {
                  "key": "C",
                  "text": "Excessive domestic tap water pressure"
                },
                {
                  "key": "D",
                  "text": "Faster mobile phone charging"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'potentially destabilizing grid frequency and risking blackouts'."
            },
            {
              "id": "R17",
              "question": "Which of the following is NOT mentioned in paragraph 4 as a grid stabilization solution?",
              "options": [
                {
                  "key": "A",
                  "text": "Utility-scale lithium-ion and flow battery facilities"
                },
                {
                  "key": "B",
                  "text": "Pumped hydroelectric storage"
                },
                {
                  "key": "C",
                  "text": "Constructing coal burning boilers in residential homes"
                },
                {
                  "key": "D",
                  "text": "Smart grid algorithms powered by AI"
                }
              ],
              "correctAnswer": "C",
              "explanation": "Lò than trong khu dân cư (coal boilers in homes) hoàn toàn không được nhắc đến."
            },
            {
              "id": "R18",
              "question": "The word 'bolstering' in paragraph 2 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "strengthening and reinforcing"
                },
                {
                  "key": "B",
                  "text": "weakening and undermining"
                },
                {
                  "key": "C",
                  "text": "delaying and postponing"
                },
                {
                  "key": "D",
                  "text": "measuring and calculating"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Bolstering security' = củng cố, tăng cường (strengthening, boosting)."
            },
            {
              "id": "R19",
              "question": "How do smart grid algorithms utilize AI according to paragraph 4?",
              "options": [
                {
                  "key": "A",
                  "text": "To forecast weather patterns and dynamically route surplus power"
                },
                {
                  "key": "B",
                  "text": "To disconnect residential neighborhoods randomly"
                },
                {
                  "key": "C",
                  "text": "To replace all human electricians with robots"
                },
                {
                  "key": "D",
                  "text": "To charge consumers higher night-time rates"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'utilize artificial intelligence to forecast weather patterns and dynamically route surplus power'."
            },
            {
              "id": "R20",
              "question": "What is the author's tone regarding the renewable energy transition?",
              "options": [
                {
                  "key": "A",
                  "text": "Deeply sarcastic and pessimistic"
                },
                {
                  "key": "B",
                  "text": "Objective, analytical, and forward-looking"
                },
                {
                  "key": "C",
                  "text": "Indifferent and dismissive"
                },
                {
                  "key": "D",
                  "text": "Hostile towards technological modernization"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Tác giả trình bày khách quan, phân tích khoa học và hướng tới giải pháp tương lai."
            }
          ]
        },
        {
          "id": "R-P3",
          "title": "Passage 3: The Psychology of Habit Formation and Behavioral Loops",
          "wordCount": 480,
          "genre": "Psychology & Behavioral Science",
          "text": "[P1] Human behavior is overwhelmingly governed by automatic routines rather than deliberate, conscious calculations. Cognitive psychologists estimate that upwards of forty percent of our daily actions—ranging from our morning coffee rituals to our smartphone browsing habits—are executed autonomously through subconscious neurological habit loops.\n\n[P2] At the core of every habit lies a three-part neurological architecture pioneered by behavioral researchers: the cue, the routine, and the reward. The cue acts as a sensory trigger that prompts the brain to initiate a pre-programmed behavior. The routine represents the physical, mental, or emotional action performed. Finally, the reward satisfies a neurochemical craving—often through a surge of dopamine—signaling the brain that this loop is worth preserving in memory.\n\n[P3] Understanding the habit loop illuminates why detrimental habits prove remarkably resilient to brute willpower alone. Attempting to suppress a deeply ingrained routine without altering the underlying cue or providing an alternative reward creates psychological tension and cognitive fatigue. Instead, behavioral scientists recommend the 'Golden Rule of Habit Change': keep the original cue and reward intact, but strategically substitute the middle routine with a healthier alternative.\n\n[P4] Furthermore, environmental architecture plays a decisive role in sustaining positive behavioral modifications. By consciously eliminating friction for desired behaviors—such as placing running shoes beside the bed—and increasing friction for unproductive impulses—such as storing digital devices outside the bedroom—individuals can reshape their subconscious routines without relying on finite reserves of daily self-control.",
          "questions": [
            {
              "id": "R21",
              "question": "What is the central topic of Passage 3?",
              "options": [
                {
                  "key": "A",
                  "text": "The financial cost of gym memberships"
                },
                {
                  "key": "B",
                  "text": "The neurological structure of habit loops and strategies for behavioral change"
                },
                {
                  "key": "C",
                  "text": "The chemistry of morning coffee beans"
                },
                {
                  "key": "D",
                  "text": "Why willpower alone is 100% sufficient for every goal"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Bài đọc phân tích cấu trúc 3 phần của thói quen và các chiến lược khoa học để thay đổi hành vi."
            },
            {
              "id": "R22",
              "question": "According to paragraph 1, approximately what percentage of daily human actions are habits?",
              "options": [
                {
                  "key": "A",
                  "text": "Under ten percent"
                },
                {
                  "key": "B",
                  "text": "Around twenty-five percent"
                },
                {
                  "key": "C",
                  "text": "More than forty percent"
                },
                {
                  "key": "D",
                  "text": "Exactly one hundred percent"
                }
              ],
              "correctAnswer": "C",
              "explanation": "'upwards of forty percent of our daily actions... are executed autonomously'."
            },
            {
              "id": "R23",
              "question": "What are the three components of the neurological habit loop in paragraph 2?",
              "options": [
                {
                  "key": "A",
                  "text": "Sleep, exercise, and diet"
                },
                {
                  "key": "B",
                  "text": "The cue, the routine, and the reward"
                },
                {
                  "key": "C",
                  "text": "Memory, intellect, and willpower"
                },
                {
                  "key": "D",
                  "text": "Input, processing, and hardware"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'the cue, the routine, and the reward'."
            },
            {
              "id": "R24",
              "question": "The word 'detrimental' in paragraph 3 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "harmful and damaging"
                },
                {
                  "key": "B",
                  "text": "beneficial and productive"
                },
                {
                  "key": "C",
                  "text": "ancient and traditional"
                },
                {
                  "key": "D",
                  "text": "costly and luxurious"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Detrimental habits' = thói quen có hại, tiêu cực (harmful, damaging)."
            },
            {
              "id": "R25",
              "question": "What does the 'Golden Rule of Habit Change' suggest doing?",
              "options": [
                {
                  "key": "A",
                  "text": "Eliminating all rewards from daily life"
                },
                {
                  "key": "B",
                  "text": "Keeping the cue and reward while substituting the routine"
                },
                {
                  "key": "C",
                  "text": "Ignoring all sensory triggers completely"
                },
                {
                  "key": "D",
                  "text": "Punishing oneself whenever a mistake occurs"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'keep the original cue and reward intact, but strategically substitute the middle routine'."
            },
            {
              "id": "R26",
              "question": "The word 'surge' in paragraph 2 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "gradual decline"
                },
                {
                  "key": "B",
                  "text": "sudden powerful increase"
                },
                {
                  "key": "C",
                  "text": "complete disappearance"
                },
                {
                  "key": "D",
                  "text": "stable balance"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Surge of dopamine' = sự tăng vọt, bùng nổ đột ngột (sudden sharp increase)."
            },
            {
              "id": "R27",
              "question": "Why is relying solely on willpower often ineffective for breaking bad habits?",
              "options": [
                {
                  "key": "A",
                  "text": "Willpower is a finite cognitive resource that causes fatigue"
                },
                {
                  "key": "B",
                  "text": "Humans lack the capacity for rational thought"
                },
                {
                  "key": "C",
                  "text": "Bad habits carry zero neurological rewards"
                },
                {
                  "key": "D",
                  "text": "Subconscious routines are permanently deleted every night"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Attempting to suppress... creates psychological tension and cognitive fatigue... finite reserves of daily self-control'."
            },
            {
              "id": "R28",
              "question": "What is an example of 'reducing friction' for a good habit mentioned in paragraph 4?",
              "options": [
                {
                  "key": "A",
                  "text": "Hiding running shoes inside a locked closet"
                },
                {
                  "key": "B",
                  "text": "Placing running shoes right beside the bed"
                },
                {
                  "key": "C",
                  "text": "Watching television until 2:00 AM"
                },
                {
                  "key": "D",
                  "text": "Setting ten alarm clocks across the house"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'eliminating friction for desired behaviors—such as placing running shoes beside the bed'."
            },
            {
              "id": "R29",
              "question": "The word 'it' in paragraph 2 refers to:",
              "options": [
                {
                  "key": "A",
                  "text": "the sensory trigger"
                },
                {
                  "key": "B",
                  "text": "the physical habit loop"
                },
                {
                  "key": "C",
                  "text": "the human brain"
                },
                {
                  "key": "D",
                  "text": "the coffee ritual"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'signaling the brain that this loop is worth preserving'."
            },
            {
              "id": "R30",
              "question": "What can be inferred about human nature from the text?",
              "options": [
                {
                  "key": "A",
                  "text": "We are entirely helpless victims of our genetics"
                },
                {
                  "key": "B",
                  "text": "Environmental design can strategically guide subconscious choices"
                },
                {
                  "key": "C",
                  "text": "Habits cannot be formed after age twenty-five"
                },
                {
                  "key": "D",
                  "text": "Dopamine is only produced during physical sports"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Thiết kế môi trường có thể tái định hình các thói quen tiềm thức một cách chiến lược."
            }
          ]
        },
        {
          "id": "R-P4",
          "title": "Passage 4: Urban Agriculture and Vertical Farming Technologies",
          "wordCount": 495,
          "genre": "Agriculture & Urbanization",
          "text": "[P1] As the global population approaches ten billion by mid-century, conventional agriculture faces unprecedented ecological constraints. Arable land is diminishing due to soil degradation and desertification, while traditional farming consumes roughly seventy percent of global freshwater reserves. In response to these compounding crises, agricultural scientists and urban architects are pioneering Controlled Environment Agriculture (CEA), commonly known as vertical farming.\n\n[P2] Vertical farms cultivate crops inside multi-story retrofitted urban facilities, repurposing abandoned warehouses, basements, and shipping containers. By employing soilless hydroponic and aeroponic systems, plant roots receive calibrated nutrient-rich water mists directly, reducing total water consumption by up to ninety-five percent compared to traditional open-field farming. Furthermore, high-efficiency spectrum-tuned LED lights deliver optimized photosynthetic wavelengths around the clock, accelerating harvest cycles regardless of external weather conditions.\n\n[P3] In addition to resource efficiency, urban vertical agriculture offers profound logistical advantages. By producing fresh leafy greens and vegetables within metropolitan borders, the distance food travels from farm to consumer—frequently spanning thousands of miles in conventional supply chains—is slashed to mere kilometers. This drastic reduction in food miles minimizes transportation fuel emissions and eliminates costly post-harvest food spoilage.\n\n[P4] Despite its transformative potential, vertical farming faces critical economic and technical bottlenecks. High initial capital expenditures for specialized LED fixtures, automated robotics, and environmental climate control units render operations financially demanding. Moreover, substantial electricity consumption from artificial lighting can elevate carbon emissions if powered by fossil fuel grids. Consequently, the commercial viability of vertical farming hinges on continued declines in renewable energy costs and specialized LED efficiencies.",
          "questions": [
            {
              "id": "R31",
              "question": "What is the primary subject of Passage 4?",
              "options": [
                {
                  "key": "A",
                  "text": "The history of medieval grain trade"
                },
                {
                  "key": "B",
                  "text": "The mechanisms, benefits, and challenges of vertical farming"
                },
                {
                  "key": "C",
                  "text": "Methods for chemical pesticide synthesis"
                },
                {
                  "key": "D",
                  "text": "Why cities should eliminate all public parks"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Toàn bài phân tích kỹ thuật, lợi thế và thách thức kinh tế của nông nghiệp thẳng đứng (vertical farming)."
            },
            {
              "id": "R32",
              "question": "According to paragraph 1, what percentage of global freshwater is consumed by traditional farming?",
              "options": [
                {
                  "key": "A",
                  "text": "Approximately twenty percent"
                },
                {
                  "key": "B",
                  "text": "Roughly fifty percent"
                },
                {
                  "key": "C",
                  "text": "Roughly seventy percent"
                },
                {
                  "key": "D",
                  "text": "Over ninety-five percent"
                }
              ],
              "correctAnswer": "C",
              "explanation": "'traditional farming consumes roughly seventy percent of global freshwater reserves'."
            },
            {
              "id": "R33",
              "question": "How much water can vertical farming save compared to open-field farming?",
              "options": [
                {
                  "key": "A",
                  "text": "Up to twenty percent"
                },
                {
                  "key": "B",
                  "text": "Up to fifty percent"
                },
                {
                  "key": "C",
                  "text": "Up to seventy-five percent"
                },
                {
                  "key": "D",
                  "text": "Up to ninety-five percent"
                }
              ],
              "correctAnswer": "D",
              "explanation": "'reducing total water consumption by up to ninety-five percent'."
            },
            {
              "id": "R34",
              "question": "The word 'retrofitted' in paragraph 2 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "demolished and destroyed"
                },
                {
                  "key": "B",
                  "text": "adapted and modified for a new purpose"
                },
                {
                  "key": "C",
                  "text": "painted in bright colors"
                },
                {
                  "key": "D",
                  "text": "abandoned and neglected"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Retrofitted facilities' = nhà xưởng được cải tạo, chuyển đổi công năng (modified, adapted)."
            },
            {
              "id": "R35",
              "question": "What role do spectrum-tuned LED lights play in vertical farms?",
              "options": [
                {
                  "key": "A",
                  "text": "They repel dangerous insects through loud frequencies"
                },
                {
                  "key": "B",
                  "text": "They provide optimized photosynthetic wavelengths around the clock"
                },
                {
                  "key": "C",
                  "text": "They boil the water to sanitize plant roots"
                },
                {
                  "key": "D",
                  "text": "They cool the building to freezing temperatures"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'deliver optimized photosynthetic wavelengths around the clock, accelerating harvest cycles'."
            },
            {
              "id": "R36",
              "question": "The phrase 'food miles' in paragraph 3 refers to:",
              "options": [
                {
                  "key": "A",
                  "text": "the speed at which crops grow per day"
                },
                {
                  "key": "B",
                  "text": "the distance food is transported from producer to consumer"
                },
                {
                  "key": "C",
                  "text": "the length of agricultural irrigation canals"
                },
                {
                  "key": "D",
                  "text": "the price per mile of supermarket delivery"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'the distance food travels from farm to consumer... food miles'."
            },
            {
              "id": "R37",
              "question": "According to paragraph 4, what is a major obstacle for vertical farming companies?",
              "options": [
                {
                  "key": "A",
                  "text": "Extreme shortage of agricultural seeds"
                },
                {
                  "key": "B",
                  "text": "High initial capital costs and intensive electricity consumption"
                },
                {
                  "key": "C",
                  "text": "Consumer refusal to eat leafy green vegetables"
                },
                {
                  "key": "D",
                  "text": "Government bans on indoor lighting"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'High initial capital expenditures... substantial electricity consumption from artificial lighting'."
            },
            {
              "id": "R38",
              "question": "The word 'expenditures' in paragraph 4 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "expenses and investments"
                },
                {
                  "key": "B",
                  "text": "profits and dividends"
                },
                {
                  "key": "C",
                  "text": "discounts and sales"
                },
                {
                  "key": "D",
                  "text": "debts and loans"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Capital expenditures' = chi phí đầu tư vốn (expenses, spending, capital outlays)."
            },
            {
              "id": "R39",
              "question": "Which of the following locations is NOT mentioned in paragraph 2 as a site for vertical farming?",
              "options": [
                {
                  "key": "A",
                  "text": "Abandoned warehouses"
                },
                {
                  "key": "B",
                  "text": "Basements"
                },
                {
                  "key": "C",
                  "text": "Shipping containers"
                },
                {
                  "key": "D",
                  "text": "Deep sea submarines"
                }
              ],
              "correctAnswer": "D",
              "explanation": "Tàu ngầm biển sâu (submarines) hoàn toàn không được nhắc đến."
            },
            {
              "id": "R40",
              "question": "What factor is essential for the future commercial success of vertical farming?",
              "options": [
                {
                  "key": "A",
                  "text": "Increased coal burning subsidies"
                },
                {
                  "key": "B",
                  "text": "Continued declines in renewable energy costs and higher LED efficiencies"
                },
                {
                  "key": "C",
                  "text": "A return to horse-plowed farming methods"
                },
                {
                  "key": "D",
                  "text": "Prohibiting all urban grocery supermarkets"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'hinges on continued declines in renewable energy costs and specialized LED efficiencies'."
            }
          ]
        }
      ]
    },
    "writing": {
      "time": 60,
      "task1": {
        "title": "Task 1: Viết Thư Cảm Ơn & Phản Hồi (20 phút - Tối thiểu 120 từ)",
        "prompt": "You recently stayed at a homestay in Da Lat during your vacation. Write a letter to the homestay host.\nIn your letter:\n- Thank them for their hospitality during your stay\n- Mention what you enjoyed most about the accommodation and local tours\n- Inform them that you accidentally left a personal item in the room and ask for assistance in mailing it back.",
        "sampleModel": "Dear Mr. and Mrs. Smith,\n\nI hope this letter finds you well. I am writing to express my sincere gratitude for the warm hospitality you extended to me during my three-day vacation at Green Hill Homestay in Da Lat last week.\n\nI thoroughly enjoyed every aspect of my stay, especially the breathtaking mountain views from the balcony and the delicious traditional breakfasts prepared with fresh local vegetables. Your insightful recommendations for the countryside tea plantation tour made my trip truly unforgettable.\n\nHowever, upon returning home to Hanoi yesterday, I realized that I accidentally left my black leather notebook on the bedside table in Room 204. This notebook contains important lecture notes for my university course. Could you please check if it is still there and kindly mail it to my address via express courier? I will promptly reimburse all shipping fees.\n\nThank you once again for everything.\n\nWarm regards,\nLe Thu Trang"
      },
      "task2": {
        "title": "Task 2: Viết Bài Luận Học Thuật (40 phút - Tối thiểu 250 từ)",
        "prompt": "With the rise of smartphones and tablets, many people spend several hours every day on social media. Do the advantages of this trend outweigh its disadvantages?\nGive reasons for your answer and include relevant examples.",
        "sampleModel": "The ubiquitous adoption of portable smartphones and tablet devices has transformed modern social media platforms into an indispensable component of everyday life. While prolonged engagement with social networks facilitates seamless global connectivity, instant messaging, and unrestricted access to educational resources, I strongly believe that its serious negative ramifications on physical vitality, psychological well-being, and authentic human relationships far outweigh the advantages.\n\nOn the positive side, social media platforms provide undeniable communicative advantages. They enable individuals to maintain contact with distant family members, colleagues, and friends across multiple time zones without substantial financial expenditure. Furthermore, social networks serve as vibrant hubs for educational content, professional networking, and global news dissemination. For independent entrepreneurs, small business owners, and digital freelancers, platforms like LinkedIn, Facebook, and Instagram offer invaluable marketing avenues to showcase products and connect directly with prospective international clients.\n\nHowever, the disadvantages associated with excessive screen time and digital dependency are substantially more severe. Primarily, chronic social media usage is strongly linked to sedentary lifestyles, contributing to adolescent obesity, severe digital eye strain, and chronic sleep deprivation. Moreover, algorithmic content feeds frequently foster unrealistic lifestyle comparisons, exacerbating anxiety, low self-esteem, and depressive symptoms among teenagers. Furthermore, excessive virtual interaction gradually replaces authentic face-to-face interpersonal communication, causing superficial relationships and emotional isolation in real-world communal environments.\n\nIn conclusion, although social media platforms offer unprecedented convenience in communication and informational access, their detrimental impacts on psychological health, physical well-being, and deep human connection are profound. Therefore, the disadvantages of excessive social media usage clearly outweigh the advantages, and users must cultivate strict digital moderation and screen-time boundaries."
      }
    },
    "speaking": {
      "time": 12,
      "part1": {
        "title": "Part 1: Social Interaction (3 phút)",
        "topic1": "Topic 1: Daily Habits & Productivity",
        "topic1Questions": [
          {
            "q": "What is your typical daily morning routine?",
            "sample": "To be honest, I usually wake up around 6:30 AM, drink a glass of warm water, and spend fifteen minutes doing light stretching exercises. Afterward, I prepare a nutritious breakfast and review my daily task list before heading to class."
          },
          {
            "q": "Do you prefer studying in the morning or at night?",
            "sample": "Personally, I find morning study sessions considerably more productive because my mind is fresh and undisturbed by social media notifications. Studying in the quiet morning atmosphere helps me retain complex concepts much faster."
          }
        ],
        "topic2": "Topic 2: Hobbies & Leisure Time",
        "topic2Questions": [
          {
            "q": "What do you enjoy doing during your free time?",
            "sample": "Whenever I have leisure time, I am passionate about reading personal development books and playing acoustic guitar. Engaging in music allows me to relieve mental stress after grueling study sessions."
          },
          {
            "q": "Did your hobbies change compared to when you were a child?",
            "sample": "Yes, absolutely. As a child, I spent countless hours playing outdoor hide-and-seek and video games. Nowadays, I gravitate towards creative and constructive activities like photography and landscape painting."
          }
        ]
      },
      "part2": {
        "title": "Part 2: Solution Discussion (4 phút)",
        "situation": "Your university English club is deciding on the best format for their end-of-term celebration. There are three options:\n1. Having a formal dinner banquet at a luxury restaurant\n2. Organizing an outdoor camping and team-building trip in a pine forest\n3. Hosting a movie night and potluck party in the university auditorium\nWhich option do you think is the best choice?",
        "bestOption": "Option 2: Organizing an outdoor camping and team-building trip",
        "sampleSpeech": "Good morning examiner. Faced with the situation of selecting the most suitable celebration for our English club, among the three proposed options, I would firmly choose Option 2—organizing an outdoor camping and team-building trip.\n\nFirst and foremost, an outdoor camping trip provides an authentic communal environment where members can participate in collaborative games, sit around a campfire, and foster meaningful interpersonal bonds. It is far more memorable and engaging than merely sitting passively.\n\nIn addition, camping is highly budget-friendly for university students, whereas Option 1 (a luxury restaurant banquet) is excessively exorbitant and financially burdensome for many members. Furthermore, Option 3 (a movie night) lacks active verbal interaction, which defeats the core purpose of an English club.\n\nTaking all factors into account, the outdoor camping excursion is undeniably the optimal solution."
      },
      "part3": {
        "title": "Part 3: Topic Development (5 phút)",
        "topic": "The Benefits of Lifelong Learning in the Digital Era",
        "mindMap": {
          "idea1": "Career Adaptability & Up-skilling",
          "idea2": "Cognitive Health & Mental Sharpness",
          "idea3": "Personal Fulfillment & Confidence",
          "ownIdea": "Bridging Intergenerational Gaps"
        },
        "sampleSpeech": "Good morning examiner. Today, I would like to deliver my presentation regarding the key benefits of lifelong learning in our modern digital society.\n\nFirstly, continuous learning guarantees career adaptability. As technological innovations automate traditional jobs, up-skilling through online courses enables professionals to remain competitive and acquire high-demand digital proficiencies.\n\nSecondly, engaging in intellectual pursuits preserves cognitive health and mental agility. Studies demonstrate that stimulating the brain with new languages or skills substantially delays age-related cognitive decline.\n\nFinally, my own personal perspective is that lifelong learning bridges intergenerational gaps, allowing older generations to communicate effectively with digital-native youth.\n\nIn conclusion, lifelong learning is indispensable for both individual self-actualization and overall social progress.",
        "followUp": [
          {
            "q": "How can governments encourage elderly citizens to embrace digital technology?",
            "a": "Governments can establish free community computer workshops in local cultural centers and recruit patient university volunteers to provide hands-on smartphone coaching for seniors."
          },
          {
            "q": "Do you believe children are learning too much through screens nowadays?",
            "a": "While digital learning offers interactive advantages, excessive screen time can cause digital eye strain and diminish real-world physical play. A balanced approach with scheduled screen breaks is vital."
          }
        ]
      }
    }
  },
  {
    "id": "vstep-exam-05",
    "name": "Đề Thi Chuẩn VSTEP Số 05 (Format Đại Học Sư Phạm)",
    "badge": "Đề Chuẩn Bộ GD&ĐT",
    "difficulty": "Chuẩn B1 (Phân loại cao)",
    "description": "Bộ đề thi chuẩn hóa VSTEP B1 hoàn chỉnh 4 kỹ năng: Đánh giá toàn diện Năng lực giao tiếp & Viết học thuật.",
    "listening": {
      "time": 40,
      "totalQuestions": 35,
      "part1": {
        "title": "Part 1: 8 Thông Báo Ngắn (8 câu hỏi)",
        "instructions": "Nghe 8 đoạn thông báo ngắn và chọn phương án trả lời đúng.",
        "questions": [
          {
            "id": "T3-L1",
            "audioText": "Welcome to the Grand Art Exhibition. Please be advised that flash photography and video recording are strictly prohibited inside the main painting gallery to prevent irreversible light damage to antique canvases.",
            "question": "What is prohibited inside the main painting gallery?",
            "options": [
              {
                "key": "A",
                "text": "Touching the sculpture displays"
              },
              {
                "key": "B",
                "text": "Flash photography and video recording"
              },
              {
                "key": "C",
                "text": "Drinking bottled water"
              },
              {
                "key": "D",
                "text": "Speaking in low voices"
              }
            ],
            "correctAnswer": "B",
            "explanation": "'flash photography and video recording are strictly prohibited'."
          },
          {
            "id": "T3-L2",
            "audioText": "Attention passengers on flight VN-218 to Da Nang. Boarding has now commenced at Gate 14. We invite families traveling with young infants and passengers requiring special assistance to board first.",
            "question": "Which passengers are invited to board flight VN-218 first?",
            "options": [
              {
                "key": "A",
                "text": "Business class travelers with frequent flyer status"
              },
              {
                "key": "B",
                "text": "Families with young infants and passengers needing special assistance"
              },
              {
                "key": "C",
                "text": "Passengers sitting in window seats"
              },
              {
                "key": "D",
                "text": "Passengers traveling without carry-on luggage"
              }
            ],
            "correctAnswer": "B",
            "explanation": "'families traveling with young infants and passengers requiring special assistance to board first'."
          },
          {
            "id": "T3-L3",
            "audioText": "Good evening residents of Sunrise Tower. The scheduled water supply maintenance will take place this Thursday from 1:00 PM to 5:00 PM. Please make necessary water storage arrangements in advance.",
            "question": "When will the water supply be temporarily shut off?",
            "options": [
              {
                "key": "A",
                "text": "Thursday from 8:00 AM to 12:00 noon"
              },
              {
                "key": "B",
                "text": "Thursday from 1:00 PM to 5:00 PM"
              },
              {
                "key": "C",
                "text": "Friday afternoon from 2:00 PM to 6:00 PM"
              },
              {
                "key": "D",
                "text": "Saturday morning all day"
              }
            ],
            "correctAnswer": "B",
            "explanation": "'this Thursday from 1:00 PM to 5:00 PM'."
          },
          {
            "id": "T3-L4",
            "audioText": "M: Hi Emma, do you know when the scholarship application deadline is?\nW: The initial notice said March 15th, but the international admissions office has extended it until March 30th to allow applicants more time for IELTS certificates.",
            "question": "What is the new scholarship application deadline?",
            "options": [
              {
                "key": "A",
                "text": "March 1st"
              },
              {
                "key": "B",
                "text": "March 15th"
              },
              {
                "key": "C",
                "text": "March 30th"
              },
              {
                "key": "D",
                "text": "April 15th"
              }
            ],
            "correctAnswer": "C",
            "explanation": "'extended it until March 30th'."
          },
          {
            "id": "T3-L5",
            "audioText": "Green Valley Supermarket announcement: Organic avocados and strawberries are on a buy-one-get-one-free promotion exclusively for loyalty cardholders in aisle 3 today.",
            "question": "What offer is available for loyalty cardholders today?",
            "options": [
              {
                "key": "A",
                "text": "50% off all dairy products"
              },
              {
                "key": "B",
                "text": "Buy-one-get-one-free on organic avocados and strawberries"
              },
              {
                "key": "C",
                "text": "Free home delivery on orders over $50"
              },
              {
                "key": "D",
                "text": "Double bonus loyalty points"
              }
            ],
            "correctAnswer": "B",
            "explanation": "'buy-one-get-one-free promotion exclusively for loyalty cardholders'."
          },
          {
            "id": "T3-L6",
            "audioText": "Traffic report for Highway 1: An overturned cargo truck near the southern toll booth has caused severe congestion. Commuters heading downtown are strongly advised to take Ring Road 3 as an alternative detour.",
            "question": "What route should drivers take to avoid highway congestion?",
            "options": [
              {
                "key": "A",
                "text": "Highway 1B"
              },
              {
                "key": "B",
                "text": "Expressway 5"
              },
              {
                "key": "C",
                "text": "Ring Road 3"
              },
              {
                "key": "D",
                "text": "The coastal boulevard"
              }
            ],
            "correctAnswer": "C",
            "explanation": "'take Ring Road 3 as an alternative detour'."
          },
          {
            "id": "T3-L7",
            "audioText": "Hello, this is City Medical Clinic. Your routine health examination results are now ready for collection at the front reception. Alternatively, you can view the encrypted PDF report via our patient mobile app.",
            "question": "How can the patient receive their health exam results?",
            "options": [
              {
                "key": "A",
                "text": "By post mail or SMS text message"
              },
              {
                "key": "B",
                "text": "At the front reception or through the mobile app"
              },
              {
                "key": "C",
                "text": "Only by scheduling a direct appointment with the doctor"
              },
              {
                "key": "D",
                "text": "By visiting the pharmacy downstairs"
              }
            ],
            "correctAnswer": "B",
            "explanation": "'at the front reception... or via our patient mobile app'."
          },
          {
            "id": "T3-L8",
            "audioText": "Notice from the University Career Center: Representatives from top technology firms will host an on-campus recruitment seminar in Hall B this Friday at 9:00 AM. Bring your updated CVs.",
            "question": "What are attendees requested to bring to the recruitment seminar?",
            "options": [
              {
                "key": "A",
                "text": "Official academic transcripts"
              },
              {
                "key": "B",
                "text": "Letters of recommendation"
              },
              {
                "key": "C",
                "text": "Updated curriculum vitae (CVs)"
              },
              {
                "key": "D",
                "text": "Personal portfolio project folders"
              }
            ],
            "correctAnswer": "C",
            "explanation": "'Bring your updated CVs'."
          }
        ]
      },
      "part2": {
        "title": "Part 2: 3 Đoạn Hội Thoại Dài (12 câu hỏi)",
        "instructions": "Bạn sẽ nghe 3 đoạn hội thoại. Mỗi hội thoại có 4 câu hỏi trắc nghiệm.",
        "conversations": [
          {
            "id": "C1",
            "title": "Hội thoại 1: Lập kế hoạch thực tập tốt nghiệp",
            "audioTranscript": "Man: Hi Elena, have you submitted your summer internship application to the Career Center yet? The deadline is this Friday.\nWoman: Not quite yet, David. I'm torn between two choices: an internship at a local software startup and an administrative position at a multinational corporation.\nMan: Well, the multinational company surely looks impressive on a resume, but you often end up doing repetitive paperwork. At a startup, you'll work directly with senior engineers and gain hands-on coding experience.\nWoman: That's a valid point. I really want to sharpen my practical programming skills and understand full project workflows. I think I'll finalize my application for the startup tonight!",
            "questions": [
              {
                "id": "L9",
                "question": "What is the main topic of the conversation?",
                "options": [
                  {
                    "key": "A",
                    "text": "Preparing for final university examinations"
                  },
                  {
                    "key": "B",
                    "text": "Choosing a summer internship placement"
                  },
                  {
                    "key": "C",
                    "text": "Applying for a postgraduate scholarship"
                  },
                  {
                    "key": "D",
                    "text": "Negotiating starting salary at a company"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Hai người trao đổi về việc nộp hồ sơ thực tập mùa hè (summer internship)."
              },
              {
                "id": "L10",
                "question": "When is the deadline for submitting the internship application?",
                "options": [
                  {
                    "key": "A",
                    "text": "This Wednesday"
                  },
                  {
                    "key": "B",
                    "text": "This Friday"
                  },
                  {
                    "key": "C",
                    "text": "Next Monday"
                  },
                  {
                    "key": "D",
                    "text": "At the end of the month"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "David nói: 'The deadline is this Friday'."
              },
              {
                "id": "L11",
                "question": "What advantage of working at a startup does David mention?",
                "options": [
                  {
                    "key": "A",
                    "text": "Higher monthly allowance"
                  },
                  {
                    "key": "B",
                    "text": "Opportunity for direct hands-on coding experience"
                  },
                  {
                    "key": "C",
                    "text": "Shorter daily commuting distance"
                  },
                  {
                    "key": "D",
                    "text": "Guaranteed permanent job offer"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "David nêu: 'work directly with senior engineers and gain hands-on coding experience'."
              },
              {
                "id": "L12",
                "question": "What does Elena decide to do at the end?",
                "options": [
                  {
                    "key": "A",
                    "text": "Apply for the software startup position"
                  },
                  {
                    "key": "B",
                    "text": "Postpone her internship until next year"
                  },
                  {
                    "key": "C",
                    "text": "Consult her academic advisor tomorrow"
                  },
                  {
                    "key": "D",
                    "text": "Accept the multinational administrative role"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Elena kết luận: 'I think I'll finalize my application for the startup tonight!'."
              }
            ]
          },
          {
            "id": "C2",
            "title": "Hội thoại 2: Thuê căn hộ chung cư cho sinh viên",
            "audioTranscript": "Woman: Good afternoon Mr. Tran, my roommate and I are looking to rent a two-bedroom apartment near the University of Technology.\nMan: Hello! I have a fully furnished unit on the 8th floor of Sunrise Tower. It has two bedrooms, a spacious balcony, air conditioning, and high-speed fiber internet included.\nWoman: That sounds wonderful. How much is the monthly rent, and what about utility bills?\nMan: The rent is 8 million VND per month. Electricity and water are billed separately according to state utility meters. We require a two-month security deposit upon signing the one-year lease.\nWoman: Can we visit the apartment tomorrow morning around 9:30 AM to inspect the condition before making a decision?\nMan: Absolutely, I'll meet you at the lobby entrance.",
            "questions": [
              {
                "id": "L13",
                "question": "What type of accommodation are the students seeking?",
                "options": [
                  {
                    "key": "A",
                    "text": "A shared dormitory room"
                  },
                  {
                    "key": "B",
                    "text": "A two-bedroom furnished apartment"
                  },
                  {
                    "key": "C",
                    "text": "A studio townhouse with a garden"
                  },
                  {
                    "key": "D",
                    "text": "A homestay with a host family"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'looking to rent a two-bedroom apartment near the University'."
              },
              {
                "id": "L14",
                "question": "What is included in the 8 million VND monthly rent?",
                "options": [
                  {
                    "key": "A",
                    "text": "Electricity and cooking gas"
                  },
                  {
                    "key": "B",
                    "text": "High-speed fiber internet and furniture"
                  },
                  {
                    "key": "C",
                    "text": "Daily cleaning and laundry services"
                  },
                  {
                    "key": "D",
                    "text": "Underground car parking fees"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'fully furnished... high-speed fiber internet included'."
              },
              {
                "id": "L15",
                "question": "How much deposit is required upon signing the contract?",
                "options": [
                  {
                    "key": "A",
                    "text": "One month rent"
                  },
                  {
                    "key": "B",
                    "text": "Two months rent"
                  },
                  {
                    "key": "C",
                    "text": "Three months rent"
                  },
                  {
                    "key": "D",
                    "text": "No deposit required"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'We require a two-month security deposit upon signing'."
              },
              {
                "id": "L16",
                "question": "When will the woman inspect the apartment?",
                "options": [
                  {
                    "key": "A",
                    "text": "This evening at 7:00 PM"
                  },
                  {
                    "key": "B",
                    "text": "Tomorrow morning at 9:30 AM"
                  },
                  {
                    "key": "C",
                    "text": "Next Saturday afternoon"
                  },
                  {
                    "key": "D",
                    "text": "At the end of the week"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'visit the apartment tomorrow morning around 9:30 AM'."
              }
            ]
          },
          {
            "id": "C3",
            "title": "Hội thoại 3: Tổ chức chiến dịch bảo vệ môi trường",
            "audioTranscript": "Man: Lisa, our Student Union environmental campaign 'Green Campus' is scheduled for next Saturday. Have we secured all the trash grabbers, biodegradable garbage bags, and gloves?\nWoman: Yes Tom, the logistics team received 200 pairs of protective gloves and 500 compostable bags yesterday from our corporate sponsor.\nMan: Fantastic! How many student volunteers have registered online so far?\nWoman: We reached 180 registrations this morning, exceeding our initial target of 150. I've divided them into four squads: plastic bottle sorting, tree planting around the sports field, electronic waste collection, and riverbank clean-up.\nMan: Excellent organization! Let's hold a short briefing on Friday afternoon to distribute team badges and safety instructions.",
            "questions": [
              {
                "id": "L17",
                "question": "What is the name of the Student Union campaign?",
                "options": [
                  {
                    "key": "A",
                    "text": "Clean Oceans Initiative"
                  },
                  {
                    "key": "B",
                    "text": "Green Campus"
                  },
                  {
                    "key": "C",
                    "text": "Zero Carbon Future"
                  },
                  {
                    "key": "D",
                    "text": "Eco-Friendly Living"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'our Student Union environmental campaign Green Campus'."
              },
              {
                "id": "L18",
                "question": "Who provided the gloves and biodegradable bags?",
                "options": [
                  {
                    "key": "A",
                    "text": "The local city council"
                  },
                  {
                    "key": "B",
                    "text": "A corporate sponsor"
                  },
                  {
                    "key": "C",
                    "text": "Student Union funding"
                  },
                  {
                    "key": "D",
                    "text": "Donations from professors"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'received... from our corporate sponsor'."
              },
              {
                "id": "L19",
                "question": "How many volunteers have registered for the event?",
                "options": [
                  {
                    "key": "A",
                    "text": "150 volunteers"
                  },
                  {
                    "key": "B",
                    "text": "180 volunteers"
                  },
                  {
                    "key": "C",
                    "text": "200 volunteers"
                  },
                  {
                    "key": "D",
                    "text": "500 volunteers"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'We reached 180 registrations this morning, exceeding our initial target of 150'."
              },
              {
                "id": "L20",
                "question": "What will happen during Friday afternoon's meeting?",
                "options": [
                  {
                    "key": "A",
                    "text": "Planting trees around the football field"
                  },
                  {
                    "key": "B",
                    "text": "Distributing badges and safety instructions"
                  },
                  {
                    "key": "C",
                    "text": "Collecting electronic waste from residents"
                  },
                  {
                    "key": "D",
                    "text": "Interviewing new team captains"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'hold a short briefing on Friday afternoon to distribute team badges and safety instructions'."
              }
            ]
          }
        ]
      },
      "part3": {
        "title": "Part 3: 3 Bài Thuyết Trình Học Thuật (15 câu hỏi)",
        "instructions": "Bạn sẽ nghe 3 bài giảng học thuật. Mỗi bài giảng có 5 câu hỏi trắc nghiệm.",
        "talks": [
          {
            "id": "T1",
            "title": "Bài giảng 1: Sự tiến hóa của Trí tuệ Nhân tạo trong Giáo dục",
            "audioTranscript": "Good morning class. Today, we delve into the transformative role of Artificial Intelligence in contemporary education. Historically, traditional classrooms adopted a one-size-fits-all approach, where all students followed identical textbooks regardless of individual learning paces. Modern AI-driven adaptive platforms, however, analyze student interaction data in real time to customize personalized exercise difficulty and learning pathways.\n\nFurthermore, automated grading systems now evaluate written essays and provide instant constructive feedback on grammar, cohesion, and vocabulary usage, saving educators substantial grading time. Nonetheless, educational researchers emphasize that AI cannot replace the empathetic human dimension of teaching, such as mentoring, inspiring curiosity, and emotional encouragement.",
            "questions": [
              {
                "id": "L21",
                "question": "What is the primary topic of the lecture?",
                "options": [
                  {
                    "key": "A",
                    "text": "History of traditional university examinations"
                  },
                  {
                    "key": "B",
                    "text": "Application and limitations of AI in education"
                  },
                  {
                    "key": "C",
                    "text": "Developing robotic hardware for school labs"
                  },
                  {
                    "key": "D",
                    "text": "Financial cost of computer software"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Toàn bộ bài giảng phân tích vai trò chuyển đổi và các khía cạnh của AI trong giáo dục hiện đại."
              },
              {
                "id": "L22",
                "question": "How do AI adaptive platforms personalize learning for students?",
                "options": [
                  {
                    "key": "A",
                    "text": "By eliminating all final exams"
                  },
                  {
                    "key": "B",
                    "text": "By customizing exercise difficulty based on interaction data"
                  },
                  {
                    "key": "C",
                    "text": "By replacing human professors completely"
                  },
                  {
                    "key": "D",
                    "text": "By providing free digital tablets"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'analyze student interaction data in real time to customize personalized exercise difficulty'."
              },
              {
                "id": "L23",
                "question": "What task can automated grading systems assist teachers with?",
                "options": [
                  {
                    "key": "A",
                    "text": "Evaluating essays and providing instant linguistic feedback"
                  },
                  {
                    "key": "B",
                    "text": "Maintaining physical sports equipment"
                  },
                  {
                    "key": "C",
                    "text": "Conducting parent-teacher conferences"
                  },
                  {
                    "key": "D",
                    "text": "Arranging school bus schedules"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "'evaluate written essays and provide instant constructive feedback'."
              },
              {
                "id": "L24",
                "question": "According to researchers, what human quality cannot be replaced by AI?",
                "options": [
                  {
                    "key": "A",
                    "text": "Calculating mathematical formulas"
                  },
                  {
                    "key": "B",
                    "text": "Storing historical dates and facts"
                  },
                  {
                    "key": "C",
                    "text": "Empathy, mentoring, and emotional encouragement"
                  },
                  {
                    "key": "D",
                    "text": "Translating foreign language articles"
                  }
                ],
                "correctAnswer": "C",
                "explanation": "'AI cannot replace the empathetic human dimension of teaching, such as mentoring, inspiring curiosity, and emotional encouragement'."
              },
              {
                "id": "L25",
                "question": "What was a key limitation of the traditional historical classroom?",
                "options": [
                  {
                    "key": "A",
                    "text": "Lack of physical chalkboards"
                  },
                  {
                    "key": "B",
                    "text": "A rigid one-size-fits-all approach for all learners"
                  },
                  {
                    "key": "C",
                    "text": "Short daily study duration"
                  },
                  {
                    "key": "D",
                    "text": "Excessive student interaction"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'traditional classrooms adopted a one-size-fits-all approach'."
              }
            ]
          },
          {
            "id": "T2",
            "title": "Bài giảng 2: Đô thị sinh thái và Phát triển bền vững",
            "audioTranscript": "Welcome everyone. Today's urban planning seminar focuses on Eco-Cities, designed to minimize ecological footprints through sustainable architecture and renewable energy. A hallmark of eco-cities is the 15-minute neighborhood model, ensuring every resident can access essential services, schools, groceries, and green parks within a 15-minute walk or bicycle ride.\n\nIn addition, green roofs and vertical gardens help combat the urban heat island effect, decreasing ambient air temperatures by up to 3 degrees Celsius during summer heatwaves. Permeable pavements and rainwater harvesting reservoirs absorb storm runoff, substantially mitigating urban flash flooding risks.",
            "questions": [
              {
                "id": "L26",
                "question": "What is the core principle of an Eco-City?",
                "options": [
                  {
                    "key": "A",
                    "text": "Maximizing automotive highways and parking lots"
                  },
                  {
                    "key": "B",
                    "text": "Minimizing ecological footprint through sustainability"
                  },
                  {
                    "key": "C",
                    "text": "Building skyscrapers with luxury penthouses"
                  },
                  {
                    "key": "D",
                    "text": "Banning all commercial industrial businesses"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'designed to minimize ecological footprints through sustainable architecture and renewable energy'."
              },
              {
                "id": "L27",
                "question": "What is guaranteed in a 15-minute neighborhood model?",
                "options": [
                  {
                    "key": "A",
                    "text": "Free public high-speed trains to airports"
                  },
                  {
                    "key": "B",
                    "text": "Access to daily amenities within a 15-minute walk or bike ride"
                  },
                  {
                    "key": "C",
                    "text": "Free residential high-speed internet"
                  },
                  {
                    "key": "D",
                    "text": "15 minutes of free parking everywhere"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'access essential services, schools, groceries, and green parks within a 15-minute walk or bicycle ride'."
              },
              {
                "id": "L28",
                "question": "How do vertical gardens and green roofs improve urban climates?",
                "options": [
                  {
                    "key": "A",
                    "text": "By increasing winter snowfall"
                  },
                  {
                    "key": "B",
                    "text": "By reducing ambient temperatures during heatwaves by up to 3°C"
                  },
                  {
                    "key": "C",
                    "text": "By eliminating the need for indoor lighting"
                  },
                  {
                    "key": "D",
                    "text": "By blocking solar panels"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'decreasing ambient air temperatures by up to 3 degrees Celsius during summer heatwaves'."
              },
              {
                "id": "L29",
                "question": "What problem is mitigated by permeable pavements and rainwater reservoirs?",
                "options": [
                  {
                    "key": "A",
                    "text": "Urban flash flooding risks"
                  },
                  {
                    "key": "B",
                    "text": "Traffic speed violations"
                  },
                  {
                    "key": "C",
                    "text": "Air pollution from aircraft"
                  },
                  {
                    "key": "D",
                    "text": "Underground subway noise"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "'substantially mitigating urban flash flooding risks'."
              },
              {
                "id": "L30",
                "question": "What type of transportation is prioritized in eco-city design?",
                "options": [
                  {
                    "key": "A",
                    "text": "Heavy diesel commercial trucks"
                  },
                  {
                    "key": "B",
                    "text": "Walking, cycling, and clean public transit"
                  },
                  {
                    "key": "C",
                    "text": "Private gasoline sports cars"
                  },
                  {
                    "key": "D",
                    "text": "Domestic commercial flights"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Đoạn văn nhấn mạnh đi bộ (walking) và xe đạp (cycling) trong mô hình khu dân cư 15 phút."
              }
            ]
          },
          {
            "id": "T3",
            "title": "Bài giảng 3: Tâm lý học hành vi về Thói quen và Giấc ngủ",
            "audioTranscript": "Good afternoon colleagues. In this neurobiology lecture, we explore the profound impact of circadian rhythms and sleep architecture on cognitive performance and habit formation. Sleep is structured in repeating 90-minute cycles transitioning between Non-REM slow-wave sleep and REM sleep.\n\nDuring deep slow-wave sleep, the brain's glymphatic system flushes out metabolic toxins like beta-amyloid, while the hippocampus transfers short-term memories into the cerebral cortex for long-term consolidation. Chronic sleep deprivation of under six hours per night impairs executive decision-making, weakens emotional regulation, and elevates cortisol stress hormones.",
            "questions": [
              {
                "id": "L31",
                "question": "How long does a typical sleep cycle last in human adults?",
                "options": [
                  {
                    "key": "A",
                    "text": "45 minutes"
                  },
                  {
                    "key": "B",
                    "text": "90 minutes"
                  },
                  {
                    "key": "C",
                    "text": "120 minutes"
                  },
                  {
                    "key": "D",
                    "text": "180 minutes"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'Sleep is structured in repeating 90-minute cycles'."
              },
              {
                "id": "L32",
                "question": "What occurs in the brain during deep slow-wave sleep?",
                "options": [
                  {
                    "key": "A",
                    "text": "Toxins are cleared and memories consolidated into long-term storage"
                  },
                  {
                    "key": "B",
                    "text": "Brain metabolism increases to maximum speed"
                  },
                  {
                    "key": "C",
                    "text": "Heart rate accelerates dramatically"
                  },
                  {
                    "key": "D",
                    "text": "All nerve communication stops entirely"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "'flushes out metabolic toxins... transfers short-term memories into the cerebral cortex for long-term consolidation'."
              },
              {
                "id": "L33",
                "question": "What part of the brain coordinates the transfer of memories?",
                "options": [
                  {
                    "key": "A",
                    "text": "The retina"
                  },
                  {
                    "key": "B",
                    "text": "The hippocampus"
                  },
                  {
                    "key": "C",
                    "text": "The spinal cord"
                  },
                  {
                    "key": "D",
                    "text": "The auditory nerve"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'the hippocampus transfers short-term memories into the cerebral cortex'."
              },
              {
                "id": "L34",
                "question": "What is an adverse consequence of chronic sleep deprivation under 6 hours?",
                "options": [
                  {
                    "key": "A",
                    "text": "Enhanced photographic memory"
                  },
                  {
                    "key": "B",
                    "text": "Impaired executive decision-making and elevated cortisol"
                  },
                  {
                    "key": "C",
                    "text": "Decreased body temperature"
                  },
                  {
                    "key": "D",
                    "text": "Faster reflex reaction times"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'impairs executive decision-making, weakens emotional regulation, and elevates cortisol'."
              },
              {
                "id": "L35",
                "question": "What biological system regulates the 24-hour sleep-wake cycle?",
                "options": [
                  {
                    "key": "A",
                    "text": "Circadian rhythm"
                  },
                  {
                    "key": "B",
                    "text": "Digestive enzymes"
                  },
                  {
                    "key": "C",
                    "text": "Skeletal joints"
                  },
                  {
                    "key": "D",
                    "text": "Respiratory diaphragm"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "'profound impact of circadian rhythms and sleep architecture'."
              }
            ]
          }
        ]
      }
    },
    "reading": {
      "time": 60,
      "totalQuestions": 40,
      "passages": [
        {
          "id": "R-P1",
          "title": "Passage 1: The Evolution of Global Online Education",
          "wordCount": 460,
          "genre": "Education & Technology",
          "text": "[P1] In recent years, distance learning has shifted from an unconventional alternative into a mainstream pillar of higher education. Propelled by ubiquitous broadband internet, cloud computing, and interactive virtual classrooms, universities worldwide now deliver fully accredited degree programs to millions of students who reside thousands of kilometers from campus.\n\n[P2] The most prominent advantage of online education lies in its unprecedented geographic and temporal flexibility. Working professionals, parents, and geographically isolated individuals can tailor their study schedules around demanding domestic and occupational obligations. Asynchronous video lectures, interactive discussion forums, and downloadable multimedia resources empower learners to assimilate complex concepts at their own customized pace rather than adhering to rigid classroom timetables.\n\n[P3] However, virtual learning is not without pedagogical drawbacks. The absence of spontaneous face-to-face interaction can precipitate profound feelings of academic isolation and reduced collaborative engagement. Furthermore, online formats place tremendous demands on self-discipline and autonomous time management. Research indicates that completion rates for open online courses frequently hover below twenty percent, primarily because students struggle to maintain intrinsic motivation without structured institutional accountability.\n\n[P4] To address these deficits, contemporary educational institutions are pioneering hybrid or blended models. By fusing flexible self-paced digital modules with periodic interactive group seminars, universities aim to retain the accessibility of distance education while preserving the vibrant social camaraderie and accountability of traditional physical campuses.",
          "questions": [
            {
              "id": "R1",
              "question": "What is the primary focus of the passage?",
              "options": [
                {
                  "key": "A",
                  "text": "The financial cost of university tuition fees"
                },
                {
                  "key": "B",
                  "text": "The growth, benefits, and challenges of online education"
                },
                {
                  "key": "C",
                  "text": "Methods for building physical campus libraries"
                },
                {
                  "key": "D",
                  "text": "The history of postal correspondence courses"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Đoạn 1 nêu sự phát triển, Đoạn 2 nêu ưu điểm, Đoạn 3 nêu thách thức, Đoạn 4 nêu giải pháp lai (hybrid)."
            },
            {
              "id": "R2",
              "question": "The word 'ubiquitous' in paragraph 1 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "expensive and luxurious"
                },
                {
                  "key": "B",
                  "text": "widespread and found everywhere"
                },
                {
                  "key": "C",
                  "text": "unreliable and dangerous"
                },
                {
                  "key": "D",
                  "text": "temporary and experimental"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Ubiquitous' = phổ biến khắp nơi (widespread, omnipresent)."
            },
            {
              "id": "R3",
              "question": "According to paragraph 2, who benefits significantly from the flexibility of online learning?",
              "options": [
                {
                  "key": "A",
                  "text": "Only full-time residential undergraduates"
                },
                {
                  "key": "B",
                  "text": "Working professionals and isolated individuals"
                },
                {
                  "key": "C",
                  "text": "Professors who dislike lecturing in person"
                },
                {
                  "key": "D",
                  "text": "Commercial internet providers"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Working professionals, parents, and geographically isolated individuals can tailor their study schedules'."
            },
            {
              "id": "R4",
              "question": "The word 'assimilate' in paragraph 2 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "absorb and understand"
                },
                {
                  "key": "B",
                  "text": "reject and ignore"
                },
                {
                  "key": "C",
                  "text": "translate and print"
                },
                {
                  "key": "D",
                  "text": "memorize without thinking"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Assimilate concepts' = tiếp thu, hiểu sâu kiến thức (absorb and comprehend)."
            },
            {
              "id": "R5",
              "question": "According to paragraph 3, what is a major pedagogical disadvantage of virtual learning?",
              "options": [
                {
                  "key": "A",
                  "text": "Excessive physical textbook weight"
                },
                {
                  "key": "B",
                  "text": "Feelings of isolation and lack of face-to-face interaction"
                },
                {
                  "key": "C",
                  "text": "Frequent power outages in university buildings"
                },
                {
                  "key": "D",
                  "text": "Strict morning attendance rules"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'The absence of spontaneous face-to-face interaction can precipitate profound feelings of academic isolation'."
            },
            {
              "id": "R6",
              "question": "The word 'these' in paragraph 4 refers to:",
              "options": [
                {
                  "key": "A",
                  "text": "online discussion forums"
                },
                {
                  "key": "B",
                  "text": "pedagogical drawbacks and deficits"
                },
                {
                  "key": "C",
                  "text": "traditional university campuses"
                },
                {
                  "key": "D",
                  "text": "high completion statistics"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'To address these deficits' liên hệ lại các hạn chế đã nêu ở đoạn 3."
            },
            {
              "id": "R7",
              "question": "Why do completion rates for open online courses often fall below twenty percent?",
              "options": [
                {
                  "key": "A",
                  "text": "Tuition fees are excessively exorbitant"
                },
                {
                  "key": "B",
                  "text": "Students struggle with self-discipline without structured accountability"
                },
                {
                  "key": "C",
                  "text": "The courses are taught in dead languages"
                },
                {
                  "key": "D",
                  "text": "Internet servers are shut down every night"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'students struggle to maintain intrinsic motivation without structured institutional accountability'."
            },
            {
              "id": "R8",
              "question": "Which of the following is NOT mentioned as a feature of online education in paragraph 2?",
              "options": [
                {
                  "key": "A",
                  "text": "Asynchronous video lectures"
                },
                {
                  "key": "B",
                  "text": "Interactive discussion forums"
                },
                {
                  "key": "C",
                  "text": "Compulsory daily uniform requirements"
                },
                {
                  "key": "D",
                  "text": "Downloadable multimedia resources"
                }
              ],
              "correctAnswer": "C",
              "explanation": "Đồng phục bắt buộc (uniform requirements) hoàn toàn không được nhắc đến."
            },
            {
              "id": "R9",
              "question": "What is the goal of hybrid or blended educational models mentioned in paragraph 4?",
              "options": [
                {
                  "key": "A",
                  "text": "To close all physical university campuses permanently"
                },
                {
                  "key": "B",
                  "text": "To combine online flexibility with campus social camaraderie"
                },
                {
                  "key": "C",
                  "text": "To double the duration of bachelor degree programs"
                },
                {
                  "key": "D",
                  "text": "To reduce teacher salaries"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'retain the accessibility of distance education while preserving the vibrant social camaraderie'."
            },
            {
              "id": "R10",
              "question": "What can be inferred about the future of university education from the passage?",
              "options": [
                {
                  "key": "A",
                  "text": "Traditional face-to-face learning will disappear entirely next year"
                },
                {
                  "key": "B",
                  "text": "Universities will increasingly integrate digital tools with in-person sessions"
                },
                {
                  "key": "C",
                  "text": "Degrees obtained online will no longer be accredited"
                },
                {
                  "key": "D",
                  "text": "Computers will grade 100% of student emotions"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Mô hình kết hợp (blended/hybrid) là xu thế phát triển tất yếu của giáo dục đại học."
            }
          ]
        },
        {
          "id": "R-P2",
          "title": "Passage 2: The Renewable Energy Transition and Grid Stability",
          "wordCount": 475,
          "genre": "Environment & Energy",
          "text": "[P1] The transition from fossil fuels to renewable energy sources has emerged as the defining engineering imperative of the twenty-first century. Driven by urgent climate targets and plummeting photovoltaic costs, solar and wind power installations have expanded exponentially across both developed and emerging economies.\n\n[P2] The undeniable environmental benefits of renewable energy are manifold. Solar panels and wind turbines generate electricity with virtually zero direct greenhouse gas emissions during operation, drastically diminishing atmospheric carbon dioxide concentrations. Moreover, decentralizing power generation diminishes reliance on volatile fossil fuel import markets, bolstering national energy security.\n\n[P3] Nevertheless, integrating massive intermittent renewables introduces severe technical challenges for traditional power grids. Unlike coal or natural gas plants that provide steady baseload power, solar arrays cease generation after sunset, and wind turbines depend heavily on fluctuating atmospheric gusts. This intermittency creates severe supply-demand mismatches, potentially destabilizing grid frequency and risking blackouts unless substantial energy storage or backup capacity is deployed.\n\n[P4] To overcome grid volatility, utility companies are investing aggressively in utility-scale lithium-ion and flow battery storage facilities, pumped hydroelectric storage, and smart grid automation. Smart grid algorithms utilize artificial intelligence to forecast weather patterns and dynamically route surplus power across national transmission corridors, ensuring grid stability in a green energy era.",
          "questions": [
            {
              "id": "R11",
              "question": "What is the main idea of Passage 2?",
              "options": [
                {
                  "key": "A",
                  "text": "The economic cost of digging coal mines"
                },
                {
                  "key": "B",
                  "text": "The benefits and grid stability challenges of renewable energy"
                },
                {
                  "key": "C",
                  "text": "Why households should avoid buying solar panels"
                },
                {
                  "key": "D",
                  "text": "The history of steam locomotive engines"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Đoạn văn phân tích cả lợi ích môi trường lẫn thách thức kỹ thuật về tính gián đoạn (intermittency) của năng lượng tái tạo."
            },
            {
              "id": "R12",
              "question": "The word 'plummeting' in paragraph 1 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "increasing rapidly"
                },
                {
                  "key": "B",
                  "text": "falling sharply"
                },
                {
                  "key": "C",
                  "text": "fluctuating randomly"
                },
                {
                  "key": "D",
                  "text": "remaining constant"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Plummeting costs' = chi phí giảm mạnh (falling steeply/sharply)."
            },
            {
              "id": "R13",
              "question": "According to paragraph 2, how does renewable energy benefit national security?",
              "options": [
                {
                  "key": "A",
                  "text": "By increasing military spending on weapons"
                },
                {
                  "key": "B",
                  "text": "By reducing reliance on unpredictable fossil fuel import markets"
                },
                {
                  "key": "C",
                  "text": "By expanding foreign oil exploration projects"
                },
                {
                  "key": "D",
                  "text": "By building concrete border walls"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'diminishes reliance on volatile fossil fuel import markets, bolstering national energy security'."
            },
            {
              "id": "R14",
              "question": "The word 'intermittent' in paragraph 3 refers to energy that:",
              "options": [
                {
                  "key": "A",
                  "text": "occurs continuously without stopping"
                },
                {
                  "key": "B",
                  "text": "occurs at irregular intervals and is not continuous"
                },
                {
                  "key": "C",
                  "text": "is generated underground"
                },
                {
                  "key": "D",
                  "text": "is entirely free of charge"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Intermittent' = gián đoạn, chập chờn, không liên tục (irregular, non-continuous)."
            },
            {
              "id": "R15",
              "question": "Why do traditional fossil fuel plants differ from solar and wind installations?",
              "options": [
                {
                  "key": "A",
                  "text": "Fossil fuel plants generate zero carbon emissions"
                },
                {
                  "key": "B",
                  "text": "Fossil fuel plants can provide consistent and dispatchable baseload power"
                },
                {
                  "key": "C",
                  "text": "Fossil fuel plants only operate during rainstorms"
                },
                {
                  "key": "D",
                  "text": "Fossil fuel plants cannot connect to high-voltage wires"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Unlike coal or natural gas plants that provide steady baseload power'."
            },
            {
              "id": "R16",
              "question": "What danger can arise from supply-demand mismatches in the power grid?",
              "options": [
                {
                  "key": "A",
                  "text": "Immediate price deflation of all groceries"
                },
                {
                  "key": "B",
                  "text": "Destabilizing grid frequency and triggering widespread blackouts"
                },
                {
                  "key": "C",
                  "text": "Excessive domestic tap water pressure"
                },
                {
                  "key": "D",
                  "text": "Faster mobile phone charging"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'potentially destabilizing grid frequency and risking blackouts'."
            },
            {
              "id": "R17",
              "question": "Which of the following is NOT mentioned in paragraph 4 as a grid stabilization solution?",
              "options": [
                {
                  "key": "A",
                  "text": "Utility-scale lithium-ion and flow battery facilities"
                },
                {
                  "key": "B",
                  "text": "Pumped hydroelectric storage"
                },
                {
                  "key": "C",
                  "text": "Constructing coal burning boilers in residential homes"
                },
                {
                  "key": "D",
                  "text": "Smart grid algorithms powered by AI"
                }
              ],
              "correctAnswer": "C",
              "explanation": "Lò than trong khu dân cư (coal boilers in homes) hoàn toàn không được nhắc đến."
            },
            {
              "id": "R18",
              "question": "The word 'bolstering' in paragraph 2 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "strengthening and reinforcing"
                },
                {
                  "key": "B",
                  "text": "weakening and undermining"
                },
                {
                  "key": "C",
                  "text": "delaying and postponing"
                },
                {
                  "key": "D",
                  "text": "measuring and calculating"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Bolstering security' = củng cố, tăng cường (strengthening, boosting)."
            },
            {
              "id": "R19",
              "question": "How do smart grid algorithms utilize AI according to paragraph 4?",
              "options": [
                {
                  "key": "A",
                  "text": "To forecast weather patterns and dynamically route surplus power"
                },
                {
                  "key": "B",
                  "text": "To disconnect residential neighborhoods randomly"
                },
                {
                  "key": "C",
                  "text": "To replace all human electricians with robots"
                },
                {
                  "key": "D",
                  "text": "To charge consumers higher night-time rates"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'utilize artificial intelligence to forecast weather patterns and dynamically route surplus power'."
            },
            {
              "id": "R20",
              "question": "What is the author's tone regarding the renewable energy transition?",
              "options": [
                {
                  "key": "A",
                  "text": "Deeply sarcastic and pessimistic"
                },
                {
                  "key": "B",
                  "text": "Objective, analytical, and forward-looking"
                },
                {
                  "key": "C",
                  "text": "Indifferent and dismissive"
                },
                {
                  "key": "D",
                  "text": "Hostile towards technological modernization"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Tác giả trình bày khách quan, phân tích khoa học và hướng tới giải pháp tương lai."
            }
          ]
        },
        {
          "id": "R-P3",
          "title": "Passage 3: The Psychology of Habit Formation and Behavioral Loops",
          "wordCount": 480,
          "genre": "Psychology & Behavioral Science",
          "text": "[P1] Human behavior is overwhelmingly governed by automatic routines rather than deliberate, conscious calculations. Cognitive psychologists estimate that upwards of forty percent of our daily actions—ranging from our morning coffee rituals to our smartphone browsing habits—are executed autonomously through subconscious neurological habit loops.\n\n[P2] At the core of every habit lies a three-part neurological architecture pioneered by behavioral researchers: the cue, the routine, and the reward. The cue acts as a sensory trigger that prompts the brain to initiate a pre-programmed behavior. The routine represents the physical, mental, or emotional action performed. Finally, the reward satisfies a neurochemical craving—often through a surge of dopamine—signaling the brain that this loop is worth preserving in memory.\n\n[P3] Understanding the habit loop illuminates why detrimental habits prove remarkably resilient to brute willpower alone. Attempting to suppress a deeply ingrained routine without altering the underlying cue or providing an alternative reward creates psychological tension and cognitive fatigue. Instead, behavioral scientists recommend the 'Golden Rule of Habit Change': keep the original cue and reward intact, but strategically substitute the middle routine with a healthier alternative.\n\n[P4] Furthermore, environmental architecture plays a decisive role in sustaining positive behavioral modifications. By consciously eliminating friction for desired behaviors—such as placing running shoes beside the bed—and increasing friction for unproductive impulses—such as storing digital devices outside the bedroom—individuals can reshape their subconscious routines without relying on finite reserves of daily self-control.",
          "questions": [
            {
              "id": "R21",
              "question": "What is the central topic of Passage 3?",
              "options": [
                {
                  "key": "A",
                  "text": "The financial cost of gym memberships"
                },
                {
                  "key": "B",
                  "text": "The neurological structure of habit loops and strategies for behavioral change"
                },
                {
                  "key": "C",
                  "text": "The chemistry of morning coffee beans"
                },
                {
                  "key": "D",
                  "text": "Why willpower alone is 100% sufficient for every goal"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Bài đọc phân tích cấu trúc 3 phần của thói quen và các chiến lược khoa học để thay đổi hành vi."
            },
            {
              "id": "R22",
              "question": "According to paragraph 1, approximately what percentage of daily human actions are habits?",
              "options": [
                {
                  "key": "A",
                  "text": "Under ten percent"
                },
                {
                  "key": "B",
                  "text": "Around twenty-five percent"
                },
                {
                  "key": "C",
                  "text": "More than forty percent"
                },
                {
                  "key": "D",
                  "text": "Exactly one hundred percent"
                }
              ],
              "correctAnswer": "C",
              "explanation": "'upwards of forty percent of our daily actions... are executed autonomously'."
            },
            {
              "id": "R23",
              "question": "What are the three components of the neurological habit loop in paragraph 2?",
              "options": [
                {
                  "key": "A",
                  "text": "Sleep, exercise, and diet"
                },
                {
                  "key": "B",
                  "text": "The cue, the routine, and the reward"
                },
                {
                  "key": "C",
                  "text": "Memory, intellect, and willpower"
                },
                {
                  "key": "D",
                  "text": "Input, processing, and hardware"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'the cue, the routine, and the reward'."
            },
            {
              "id": "R24",
              "question": "The word 'detrimental' in paragraph 3 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "harmful and damaging"
                },
                {
                  "key": "B",
                  "text": "beneficial and productive"
                },
                {
                  "key": "C",
                  "text": "ancient and traditional"
                },
                {
                  "key": "D",
                  "text": "costly and luxurious"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Detrimental habits' = thói quen có hại, tiêu cực (harmful, damaging)."
            },
            {
              "id": "R25",
              "question": "What does the 'Golden Rule of Habit Change' suggest doing?",
              "options": [
                {
                  "key": "A",
                  "text": "Eliminating all rewards from daily life"
                },
                {
                  "key": "B",
                  "text": "Keeping the cue and reward while substituting the routine"
                },
                {
                  "key": "C",
                  "text": "Ignoring all sensory triggers completely"
                },
                {
                  "key": "D",
                  "text": "Punishing oneself whenever a mistake occurs"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'keep the original cue and reward intact, but strategically substitute the middle routine'."
            },
            {
              "id": "R26",
              "question": "The word 'surge' in paragraph 2 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "gradual decline"
                },
                {
                  "key": "B",
                  "text": "sudden powerful increase"
                },
                {
                  "key": "C",
                  "text": "complete disappearance"
                },
                {
                  "key": "D",
                  "text": "stable balance"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Surge of dopamine' = sự tăng vọt, bùng nổ đột ngột (sudden sharp increase)."
            },
            {
              "id": "R27",
              "question": "Why is relying solely on willpower often ineffective for breaking bad habits?",
              "options": [
                {
                  "key": "A",
                  "text": "Willpower is a finite cognitive resource that causes fatigue"
                },
                {
                  "key": "B",
                  "text": "Humans lack the capacity for rational thought"
                },
                {
                  "key": "C",
                  "text": "Bad habits carry zero neurological rewards"
                },
                {
                  "key": "D",
                  "text": "Subconscious routines are permanently deleted every night"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Attempting to suppress... creates psychological tension and cognitive fatigue... finite reserves of daily self-control'."
            },
            {
              "id": "R28",
              "question": "What is an example of 'reducing friction' for a good habit mentioned in paragraph 4?",
              "options": [
                {
                  "key": "A",
                  "text": "Hiding running shoes inside a locked closet"
                },
                {
                  "key": "B",
                  "text": "Placing running shoes right beside the bed"
                },
                {
                  "key": "C",
                  "text": "Watching television until 2:00 AM"
                },
                {
                  "key": "D",
                  "text": "Setting ten alarm clocks across the house"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'eliminating friction for desired behaviors—such as placing running shoes beside the bed'."
            },
            {
              "id": "R29",
              "question": "The word 'it' in paragraph 2 refers to:",
              "options": [
                {
                  "key": "A",
                  "text": "the sensory trigger"
                },
                {
                  "key": "B",
                  "text": "the physical habit loop"
                },
                {
                  "key": "C",
                  "text": "the human brain"
                },
                {
                  "key": "D",
                  "text": "the coffee ritual"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'signaling the brain that this loop is worth preserving'."
            },
            {
              "id": "R30",
              "question": "What can be inferred about human nature from the text?",
              "options": [
                {
                  "key": "A",
                  "text": "We are entirely helpless victims of our genetics"
                },
                {
                  "key": "B",
                  "text": "Environmental design can strategically guide subconscious choices"
                },
                {
                  "key": "C",
                  "text": "Habits cannot be formed after age twenty-five"
                },
                {
                  "key": "D",
                  "text": "Dopamine is only produced during physical sports"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Thiết kế môi trường có thể tái định hình các thói quen tiềm thức một cách chiến lược."
            }
          ]
        },
        {
          "id": "R-P4",
          "title": "Passage 4: Urban Agriculture and Vertical Farming Technologies",
          "wordCount": 495,
          "genre": "Agriculture & Urbanization",
          "text": "[P1] As the global population approaches ten billion by mid-century, conventional agriculture faces unprecedented ecological constraints. Arable land is diminishing due to soil degradation and desertification, while traditional farming consumes roughly seventy percent of global freshwater reserves. In response to these compounding crises, agricultural scientists and urban architects are pioneering Controlled Environment Agriculture (CEA), commonly known as vertical farming.\n\n[P2] Vertical farms cultivate crops inside multi-story retrofitted urban facilities, repurposing abandoned warehouses, basements, and shipping containers. By employing soilless hydroponic and aeroponic systems, plant roots receive calibrated nutrient-rich water mists directly, reducing total water consumption by up to ninety-five percent compared to traditional open-field farming. Furthermore, high-efficiency spectrum-tuned LED lights deliver optimized photosynthetic wavelengths around the clock, accelerating harvest cycles regardless of external weather conditions.\n\n[P3] In addition to resource efficiency, urban vertical agriculture offers profound logistical advantages. By producing fresh leafy greens and vegetables within metropolitan borders, the distance food travels from farm to consumer—frequently spanning thousands of miles in conventional supply chains—is slashed to mere kilometers. This drastic reduction in food miles minimizes transportation fuel emissions and eliminates costly post-harvest food spoilage.\n\n[P4] Despite its transformative potential, vertical farming faces critical economic and technical bottlenecks. High initial capital expenditures for specialized LED fixtures, automated robotics, and environmental climate control units render operations financially demanding. Moreover, substantial electricity consumption from artificial lighting can elevate carbon emissions if powered by fossil fuel grids. Consequently, the commercial viability of vertical farming hinges on continued declines in renewable energy costs and specialized LED efficiencies.",
          "questions": [
            {
              "id": "R31",
              "question": "What is the primary subject of Passage 4?",
              "options": [
                {
                  "key": "A",
                  "text": "The history of medieval grain trade"
                },
                {
                  "key": "B",
                  "text": "The mechanisms, benefits, and challenges of vertical farming"
                },
                {
                  "key": "C",
                  "text": "Methods for chemical pesticide synthesis"
                },
                {
                  "key": "D",
                  "text": "Why cities should eliminate all public parks"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Toàn bài phân tích kỹ thuật, lợi thế và thách thức kinh tế của nông nghiệp thẳng đứng (vertical farming)."
            },
            {
              "id": "R32",
              "question": "According to paragraph 1, what percentage of global freshwater is consumed by traditional farming?",
              "options": [
                {
                  "key": "A",
                  "text": "Approximately twenty percent"
                },
                {
                  "key": "B",
                  "text": "Roughly fifty percent"
                },
                {
                  "key": "C",
                  "text": "Roughly seventy percent"
                },
                {
                  "key": "D",
                  "text": "Over ninety-five percent"
                }
              ],
              "correctAnswer": "C",
              "explanation": "'traditional farming consumes roughly seventy percent of global freshwater reserves'."
            },
            {
              "id": "R33",
              "question": "How much water can vertical farming save compared to open-field farming?",
              "options": [
                {
                  "key": "A",
                  "text": "Up to twenty percent"
                },
                {
                  "key": "B",
                  "text": "Up to fifty percent"
                },
                {
                  "key": "C",
                  "text": "Up to seventy-five percent"
                },
                {
                  "key": "D",
                  "text": "Up to ninety-five percent"
                }
              ],
              "correctAnswer": "D",
              "explanation": "'reducing total water consumption by up to ninety-five percent'."
            },
            {
              "id": "R34",
              "question": "The word 'retrofitted' in paragraph 2 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "demolished and destroyed"
                },
                {
                  "key": "B",
                  "text": "adapted and modified for a new purpose"
                },
                {
                  "key": "C",
                  "text": "painted in bright colors"
                },
                {
                  "key": "D",
                  "text": "abandoned and neglected"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Retrofitted facilities' = nhà xưởng được cải tạo, chuyển đổi công năng (modified, adapted)."
            },
            {
              "id": "R35",
              "question": "What role do spectrum-tuned LED lights play in vertical farms?",
              "options": [
                {
                  "key": "A",
                  "text": "They repel dangerous insects through loud frequencies"
                },
                {
                  "key": "B",
                  "text": "They provide optimized photosynthetic wavelengths around the clock"
                },
                {
                  "key": "C",
                  "text": "They boil the water to sanitize plant roots"
                },
                {
                  "key": "D",
                  "text": "They cool the building to freezing temperatures"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'deliver optimized photosynthetic wavelengths around the clock, accelerating harvest cycles'."
            },
            {
              "id": "R36",
              "question": "The phrase 'food miles' in paragraph 3 refers to:",
              "options": [
                {
                  "key": "A",
                  "text": "the speed at which crops grow per day"
                },
                {
                  "key": "B",
                  "text": "the distance food is transported from producer to consumer"
                },
                {
                  "key": "C",
                  "text": "the length of agricultural irrigation canals"
                },
                {
                  "key": "D",
                  "text": "the price per mile of supermarket delivery"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'the distance food travels from farm to consumer... food miles'."
            },
            {
              "id": "R37",
              "question": "According to paragraph 4, what is a major obstacle for vertical farming companies?",
              "options": [
                {
                  "key": "A",
                  "text": "Extreme shortage of agricultural seeds"
                },
                {
                  "key": "B",
                  "text": "High initial capital costs and intensive electricity consumption"
                },
                {
                  "key": "C",
                  "text": "Consumer refusal to eat leafy green vegetables"
                },
                {
                  "key": "D",
                  "text": "Government bans on indoor lighting"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'High initial capital expenditures... substantial electricity consumption from artificial lighting'."
            },
            {
              "id": "R38",
              "question": "The word 'expenditures' in paragraph 4 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "expenses and investments"
                },
                {
                  "key": "B",
                  "text": "profits and dividends"
                },
                {
                  "key": "C",
                  "text": "discounts and sales"
                },
                {
                  "key": "D",
                  "text": "debts and loans"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Capital expenditures' = chi phí đầu tư vốn (expenses, spending, capital outlays)."
            },
            {
              "id": "R39",
              "question": "Which of the following locations is NOT mentioned in paragraph 2 as a site for vertical farming?",
              "options": [
                {
                  "key": "A",
                  "text": "Abandoned warehouses"
                },
                {
                  "key": "B",
                  "text": "Basements"
                },
                {
                  "key": "C",
                  "text": "Shipping containers"
                },
                {
                  "key": "D",
                  "text": "Deep sea submarines"
                }
              ],
              "correctAnswer": "D",
              "explanation": "Tàu ngầm biển sâu (submarines) hoàn toàn không được nhắc đến."
            },
            {
              "id": "R40",
              "question": "What factor is essential for the future commercial success of vertical farming?",
              "options": [
                {
                  "key": "A",
                  "text": "Increased coal burning subsidies"
                },
                {
                  "key": "B",
                  "text": "Continued declines in renewable energy costs and higher LED efficiencies"
                },
                {
                  "key": "C",
                  "text": "A return to horse-plowed farming methods"
                },
                {
                  "key": "D",
                  "text": "Prohibiting all urban grocery supermarkets"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'hinges on continued declines in renewable energy costs and specialized LED efficiencies'."
            }
          ]
        }
      ]
    },
    "writing": {
      "time": 60,
      "task1": {
        "title": "Task 1: Viết Thư Phàn Nàn (Chiếm 1/3 điểm - 20 phút - Tối thiểu 120 từ)",
        "prompt": "You recently bought a laptop from an online electronics store, but when you received the package, the screen was cracked and the charger was missing. Write a letter of complaint to the store manager.\nIn your letter:\n- Describe the details of your order and the defects upon arrival\n- Explain how this issue has affected your daily study or work\n- Request an immediate replacement or a full refund.",
        "sampleModel": "Dear Store Manager,\n\nI am writing to express my strong dissatisfaction with a recent purchase I made on your online store on August 20th, Order ID #TECH-8924, for a Dell Inspiron 15 laptop.\n\nWhen the package arrived at my residence yesterday afternoon, I was extremely dismayed to discover that the laptop screen was severely cracked. Furthermore, the power adapter and charging cable were completely missing from the sealed box.\n\nThis purchase was intended for my upcoming online university courses starting this Monday. Without a functional computer, I am unable to access required lecture materials and complete my assignments on time.\n\nGiven the circumstances, I request an immediate replacement of the damaged laptop with an intact unit or a full refund to my bank account within three business days. I have attached photographs of the damaged screen and packaging for your reference.\n\nI look forward to your prompt resolution of this matter.\n\nYours sincerely,\nTran Hoang Nam"
      },
      "task2": {
        "title": "Task 2: Viết Bài Luận Học Thuật (Chiếm 2/3 điểm - 40 phút - Tối thiểu 250 từ)",
        "prompt": "In many countries, fast food is becoming increasingly popular among young people despite its negative health impacts. What are the causes of this trend, and what measures can be taken to solve this problem?\nGive reasons for your answer and include relevant examples.",
        "sampleModel": "In recent decades, the consumption of fast food has surged exponentially among young people globally. While fast food offers unmatched convenience and affordability, its nutritional deficiency poses serious long-term public health concerns. This essay will examine the primary causes of this phenomenon and propose viable solutions to mitigate its adverse effects.\n\nTo begin with, several interrelated factors contribute to the popularity of fast food. First and foremost, modern academic and professional pressures have made fast food an attractive option for busy students and workers who lack the time to prepare wholesome home-cooked meals. In addition, aggressive marketing strategies by international fast-food corporations—utilizing vibrant commercials, promotional discount vouchers, and smartphone delivery apps—strongly appeal to adolescents. Moreover, fast food is heavily subsidized and mass-produced, making it considerably cheaper than organic fresh produce in many urban centers.\n\nTo address this growing health crisis, concerted efforts from governments, schools, and families are imperative. Firstly, educational authorities should incorporate practical nutrition education into the standard school curriculum, teaching students how to read food labels and understand the long-term dangers of obesity, diabetes, and cardiovascular diseases. Secondly, governments should impose higher health taxes on sugary beverages and ultra-processed foods while subsidizing fresh agricultural produce to make nutritious options more affordable. Finally, parents should foster healthy dietary habits at home by preparing balanced meals and engaging in active physical sports with their children.\n\nIn conclusion, the widespread preference for fast food stems from modern time constraints, aggressive marketing, and affordability. However, through comprehensive school education and governmental dietary policies, society can successfully guide young generations toward healthier lifestyle choices."
      }
    },
    "speaking": {
      "time": 12,
      "part1": {
        "title": "Part 1: Social Interaction (3 phút)",
        "topic1": "Topic 1: Daily Habits & Productivity",
        "topic1Questions": [
          {
            "q": "What is your typical daily morning routine?",
            "sample": "To be honest, I usually wake up around 6:30 AM, drink a glass of warm water, and spend fifteen minutes doing light stretching exercises. Afterward, I prepare a nutritious breakfast and review my daily task list before heading to class."
          },
          {
            "q": "Do you prefer studying in the morning or at night?",
            "sample": "Personally, I find morning study sessions considerably more productive because my mind is fresh and undisturbed by social media notifications. Studying in the quiet morning atmosphere helps me retain complex concepts much faster."
          }
        ],
        "topic2": "Topic 2: Hobbies & Leisure Time",
        "topic2Questions": [
          {
            "q": "What do you enjoy doing during your free time?",
            "sample": "Whenever I have leisure time, I am passionate about reading personal development books and playing acoustic guitar. Engaging in music allows me to relieve mental stress after grueling study sessions."
          },
          {
            "q": "Did your hobbies change compared to when you were a child?",
            "sample": "Yes, absolutely. As a child, I spent countless hours playing outdoor hide-and-seek and video games. Nowadays, I gravitate towards creative and constructive activities like photography and landscape painting."
          }
        ]
      },
      "part2": {
        "title": "Part 2: Solution Discussion (4 phút)",
        "situation": "Your university English club is deciding on the best format for their end-of-term celebration. There are three options:\n1. Having a formal dinner banquet at a luxury restaurant\n2. Organizing an outdoor camping and team-building trip in a pine forest\n3. Hosting a movie night and potluck party in the university auditorium\nWhich option do you think is the best choice?",
        "bestOption": "Option 2: Organizing an outdoor camping and team-building trip",
        "sampleSpeech": "Good morning examiner. Faced with the situation of selecting the most suitable celebration for our English club, among the three proposed options, I would firmly choose Option 2—organizing an outdoor camping and team-building trip.\n\nFirst and foremost, an outdoor camping trip provides an authentic communal environment where members can participate in collaborative games, sit around a campfire, and foster meaningful interpersonal bonds. It is far more memorable and engaging than merely sitting passively.\n\nIn addition, camping is highly budget-friendly for university students, whereas Option 1 (a luxury restaurant banquet) is excessively exorbitant and financially burdensome for many members. Furthermore, Option 3 (a movie night) lacks active verbal interaction, which defeats the core purpose of an English club.\n\nTaking all factors into account, the outdoor camping excursion is undeniably the optimal solution."
      },
      "part3": {
        "title": "Part 3: Topic Development (5 phút)",
        "topic": "The Benefits of Lifelong Learning in the Digital Era",
        "mindMap": {
          "idea1": "Career Adaptability & Up-skilling",
          "idea2": "Cognitive Health & Mental Sharpness",
          "idea3": "Personal Fulfillment & Confidence",
          "ownIdea": "Bridging Intergenerational Gaps"
        },
        "sampleSpeech": "Good morning examiner. Today, I would like to deliver my presentation regarding the key benefits of lifelong learning in our modern digital society.\n\nFirstly, continuous learning guarantees career adaptability. As technological innovations automate traditional jobs, up-skilling through online courses enables professionals to remain competitive and acquire high-demand digital proficiencies.\n\nSecondly, engaging in intellectual pursuits preserves cognitive health and mental agility. Studies demonstrate that stimulating the brain with new languages or skills substantially delays age-related cognitive decline.\n\nFinally, my own personal perspective is that lifelong learning bridges intergenerational gaps, allowing older generations to communicate effectively with digital-native youth.\n\nIn conclusion, lifelong learning is indispensable for both individual self-actualization and overall social progress.",
        "followUp": [
          {
            "q": "How can governments encourage elderly citizens to embrace digital technology?",
            "a": "Governments can establish free community computer workshops in local cultural centers and recruit patient university volunteers to provide hands-on smartphone coaching for seniors."
          },
          {
            "q": "Do you believe children are learning too much through screens nowadays?",
            "a": "While digital learning offers interactive advantages, excessive screen time can cause digital eye strain and diminish real-world physical play. A balanced approach with scheduled screen breaks is vital."
          }
        ]
      }
    }
  },
  {
    "id": "vstep-exam-06",
    "name": "Đề Thi Chuẩn VSTEP Số 06 (Bộ Đề Tổng Ôn Về Đích)",
    "badge": "Bộ Đề Về Đích B1-B2",
    "difficulty": "Nâng cấp B1+",
    "description": "Bộ đề thi tổng ôn toàn diện dành cho giai đoạn luyện đề nước rút trước kỳ thi chính thức.",
    "listening": {
      "time": 40,
      "totalQuestions": 35,
      "part1": {
        "title": "Part 1: 8 Thông Báo Ngắn (8 câu hỏi)",
        "instructions": "Bạn sẽ nghe 8 đoạn thông báo hoặc hội thoại ngắn. Mỗi câu hỏi có 4 lựa chọn A, B, C, D.",
        "questions": [
          {
            "id": "L1",
            "audioText": "Attention all passengers on flight VN245 to Da Nang. Due to unexpected thunderstorm activity over the central coast, our departure has been rescheduled from 2:15 PM to 3:45 PM. Please remain in the waiting lounge near Gate 12 for further announcements.",
            "question": "Why has flight VN245 been delayed?",
            "options": [
              {
                "key": "A",
                "text": "Mechanical failure on the aircraft"
              },
              {
                "key": "B",
                "text": "Severe thunderstorm weather conditions"
              },
              {
                "key": "C",
                "text": "Late arrival of the flight crew"
              },
              {
                "key": "D",
                "text": "Gate renovation at the airport"
              }
            ],
            "correctAnswer": "B",
            "explanation": "Người phát thanh nói 'Due to unexpected thunderstorm activity over the central coast' -> Thời tiết mưa dông."
          },
          {
            "id": "L2",
            "audioText": "Good morning staff. Please be reminded that the company annual health check-up will take place this Thursday at the Central Medical Clinic on the 3rd floor. Remember to fast for at least 8 hours prior to your blood test appointment.",
            "question": "What are employees instructed to do before their blood test?",
            "options": [
              {
                "key": "A",
                "text": "Drink plenty of sweetened juice"
              },
              {
                "key": "B",
                "text": "Bring their medical insurance book"
              },
              {
                "key": "C",
                "text": "Fast for at least eight hours"
              },
              {
                "key": "D",
                "text": "Arrive two hours before opening time"
              }
            ],
            "correctAnswer": "C",
            "explanation": "'Remember to fast for at least 8 hours prior to your blood test' -> Nhịn ăn ít nhất 8 tiếng."
          },
          {
            "id": "L3",
            "audioText": "Hi Sarah, it's Mark from the marketing department. I reviewed your draft proposal for the new product launch. The budget projection looks solid, but I think we need to include more statistical data regarding customer demographics in section two before submitting it to the director.",
            "question": "What modification does Mark recommend for Sarah's proposal?",
            "options": [
              {
                "key": "A",
                "text": "Reducing the total budget estimate"
              },
              {
                "key": "B",
                "text": "Adding more customer demographic statistics"
              },
              {
                "key": "C",
                "text": "Postponing the product launch date"
              },
              {
                "key": "D",
                "text": "Changing the graphic design layout"
              }
            ],
            "correctAnswer": "B",
            "explanation": "'I think we need to include more statistical data regarding customer demographics in section two'."
          },
          {
            "id": "L4",
            "audioText": "Attention all library patrons. Starting from next Monday, City Central Library will extend its weekday operating hours until 9:00 PM to accommodate students revising for upcoming semester examinations. The ground floor study hall will also remain open during weekends.",
            "question": "What change will take effect at City Central Library next Monday?",
            "options": [
              {
                "key": "A",
                "text": "The library will increase annual membership fees"
              },
              {
                "key": "B",
                "text": "Weekday closing time will be extended until 9:00 PM"
              },
              {
                "key": "C",
                "text": "The ground floor study hall will be closed on weekends"
              },
              {
                "key": "D",
                "text": "Borrowing limits for books will be reduced"
              }
            ],
            "correctAnswer": "B",
            "explanation": "Thông báo nêu rõ: 'extend its weekday operating hours until 9:00 PM' -> Giờ mở cửa ngày thường kéo dài đến 9:00 tối."
          },
          {
            "id": "L5",
            "audioText": "Customer notice from Metro Supermarket: Our fresh seafood counter is offering a special 25% promotional discount on Norwegian salmon and tiger prawns until 7:00 PM today. Grab your numbered ticket from the customer service desk to enjoy this limited offer.",
            "question": "How can customers receive the special seafood discount?",
            "options": [
              {
                "key": "A",
                "text": "By showing a VIP membership card"
              },
              {
                "key": "B",
                "text": "By taking a numbered ticket at customer service"
              },
              {
                "key": "C",
                "text": "By ordering online through the mobile app"
              },
              {
                "key": "D",
                "text": "By spending more than one million VND"
              }
            ],
            "correctAnswer": "B",
            "explanation": "'Grab your numbered ticket from the customer service desk'."
          },
          {
            "id": "L6",
            "audioText": "This is a traffic alert for Highway 1A. A minor road collision near the Binh Trieu Bridge has caused severe traffic congestion stretching over two kilometers. Commuters heading towards downtown are strongly advised to take the Pham Van Dong expressway instead.",
            "question": "What alternative route is recommended for drivers?",
            "options": [
              {
                "key": "A",
                "text": "National Route 13"
              },
              {
                "key": "B",
                "text": "Pham Van Dong expressway"
              },
              {
                "key": "C",
                "text": "Binh Loi railway bridge"
              },
              {
                "key": "D",
                "text": "Saigon riverside boulevard"
              }
            ],
            "correctAnswer": "B",
            "explanation": "'strongly advised to take the Pham Van Dong expressway instead'."
          },
          {
            "id": "L7",
            "audioText": "Good afternoon gym members. Please be informed that the main swimming pool will be closed tomorrow from 8:00 AM to 1:00 PM for routine chlorination and water filter maintenance. The sauna and fitness cardio rooms will operate normally.",
            "question": "Which facility will be temporarily closed tomorrow morning?",
            "options": [
              {
                "key": "A",
                "text": "The cardio fitness room"
              },
              {
                "key": "B",
                "text": "The main swimming pool"
              },
              {
                "key": "C",
                "text": "The dry sauna room"
              },
              {
                "key": "D",
                "text": "The locker and shower rooms"
              }
            ],
            "correctAnswer": "B",
            "explanation": "'the main swimming pool will be closed tomorrow from 8:00 AM to 1:00 PM'."
          },
          {
            "id": "L8",
            "audioText": "Hello Mr. Davis, this is Greenview Dental Clinic calling to confirm your dental check-up appointment tomorrow at 10:30 AM with Dr. Henderson. If you need to reschedule or cancel, please call us back before 5:00 PM today.",
            "question": "What is the purpose of the telephone call?",
            "options": [
              {
                "key": "A",
                "text": "To notify a prescription medicine change"
              },
              {
                "key": "B",
                "text": "To confirm a scheduled dental appointment"
              },
              {
                "key": "C",
                "text": "To request payment for previous treatment"
              },
              {
                "key": "D",
                "text": "To reschedule Dr. Henderson's surgery"
              }
            ],
            "correctAnswer": "B",
            "explanation": "'calling to confirm your dental check-up appointment tomorrow'."
          }
        ]
      },
      "part2": {
        "title": "Part 2: 3 Đoạn Hội Thoại Dài (12 câu hỏi)",
        "instructions": "Bạn sẽ nghe 3 đoạn hội thoại. Mỗi hội thoại có 4 câu hỏi trắc nghiệm.",
        "conversations": [
          {
            "id": "C1",
            "title": "Hội thoại 1: Lập kế hoạch thực tập tốt nghiệp",
            "audioTranscript": "Man: Hi Elena, have you submitted your summer internship application to the Career Center yet? The deadline is this Friday.\nWoman: Not quite yet, David. I'm torn between two choices: an internship at a local software startup and an administrative position at a multinational corporation.\nMan: Well, the multinational company surely looks impressive on a resume, but you often end up doing repetitive paperwork. At a startup, you'll work directly with senior engineers and gain hands-on coding experience.\nWoman: That's a valid point. I really want to sharpen my practical programming skills and understand full project workflows. I think I'll finalize my application for the startup tonight!",
            "questions": [
              {
                "id": "L9",
                "question": "What is the main topic of the conversation?",
                "options": [
                  {
                    "key": "A",
                    "text": "Preparing for final university examinations"
                  },
                  {
                    "key": "B",
                    "text": "Choosing a summer internship placement"
                  },
                  {
                    "key": "C",
                    "text": "Applying for a postgraduate scholarship"
                  },
                  {
                    "key": "D",
                    "text": "Negotiating starting salary at a company"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Hai người trao đổi về việc nộp hồ sơ thực tập mùa hè (summer internship)."
              },
              {
                "id": "L10",
                "question": "When is the deadline for submitting the internship application?",
                "options": [
                  {
                    "key": "A",
                    "text": "This Wednesday"
                  },
                  {
                    "key": "B",
                    "text": "This Friday"
                  },
                  {
                    "key": "C",
                    "text": "Next Monday"
                  },
                  {
                    "key": "D",
                    "text": "At the end of the month"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "David nói: 'The deadline is this Friday'."
              },
              {
                "id": "L11",
                "question": "What advantage of working at a startup does David mention?",
                "options": [
                  {
                    "key": "A",
                    "text": "Higher monthly allowance"
                  },
                  {
                    "key": "B",
                    "text": "Opportunity for direct hands-on coding experience"
                  },
                  {
                    "key": "C",
                    "text": "Shorter daily commuting distance"
                  },
                  {
                    "key": "D",
                    "text": "Guaranteed permanent job offer"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "David nêu: 'work directly with senior engineers and gain hands-on coding experience'."
              },
              {
                "id": "L12",
                "question": "What does Elena decide to do at the end?",
                "options": [
                  {
                    "key": "A",
                    "text": "Apply for the software startup position"
                  },
                  {
                    "key": "B",
                    "text": "Postpone her internship until next year"
                  },
                  {
                    "key": "C",
                    "text": "Consult her academic advisor tomorrow"
                  },
                  {
                    "key": "D",
                    "text": "Accept the multinational administrative role"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "Elena kết luận: 'I think I'll finalize my application for the startup tonight!'."
              }
            ]
          },
          {
            "id": "C2",
            "title": "Hội thoại 2: Thuê căn hộ chung cư cho sinh viên",
            "audioTranscript": "Woman: Good afternoon Mr. Tran, my roommate and I are looking to rent a two-bedroom apartment near the University of Technology.\nMan: Hello! I have a fully furnished unit on the 8th floor of Sunrise Tower. It has two bedrooms, a spacious balcony, air conditioning, and high-speed fiber internet included.\nWoman: That sounds wonderful. How much is the monthly rent, and what about utility bills?\nMan: The rent is 8 million VND per month. Electricity and water are billed separately according to state utility meters. We require a two-month security deposit upon signing the one-year lease.\nWoman: Can we visit the apartment tomorrow morning around 9:30 AM to inspect the condition before making a decision?\nMan: Absolutely, I'll meet you at the lobby entrance.",
            "questions": [
              {
                "id": "L13",
                "question": "What type of accommodation are the students seeking?",
                "options": [
                  {
                    "key": "A",
                    "text": "A shared dormitory room"
                  },
                  {
                    "key": "B",
                    "text": "A two-bedroom furnished apartment"
                  },
                  {
                    "key": "C",
                    "text": "A studio townhouse with a garden"
                  },
                  {
                    "key": "D",
                    "text": "A homestay with a host family"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'looking to rent a two-bedroom apartment near the University'."
              },
              {
                "id": "L14",
                "question": "What is included in the 8 million VND monthly rent?",
                "options": [
                  {
                    "key": "A",
                    "text": "Electricity and cooking gas"
                  },
                  {
                    "key": "B",
                    "text": "High-speed fiber internet and furniture"
                  },
                  {
                    "key": "C",
                    "text": "Daily cleaning and laundry services"
                  },
                  {
                    "key": "D",
                    "text": "Underground car parking fees"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'fully furnished... high-speed fiber internet included'."
              },
              {
                "id": "L15",
                "question": "How much deposit is required upon signing the contract?",
                "options": [
                  {
                    "key": "A",
                    "text": "One month rent"
                  },
                  {
                    "key": "B",
                    "text": "Two months rent"
                  },
                  {
                    "key": "C",
                    "text": "Three months rent"
                  },
                  {
                    "key": "D",
                    "text": "No deposit required"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'We require a two-month security deposit upon signing'."
              },
              {
                "id": "L16",
                "question": "When will the woman inspect the apartment?",
                "options": [
                  {
                    "key": "A",
                    "text": "This evening at 7:00 PM"
                  },
                  {
                    "key": "B",
                    "text": "Tomorrow morning at 9:30 AM"
                  },
                  {
                    "key": "C",
                    "text": "Next Saturday afternoon"
                  },
                  {
                    "key": "D",
                    "text": "At the end of the week"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'visit the apartment tomorrow morning around 9:30 AM'."
              }
            ]
          },
          {
            "id": "C3",
            "title": "Hội thoại 3: Tổ chức chiến dịch bảo vệ môi trường",
            "audioTranscript": "Man: Lisa, our Student Union environmental campaign 'Green Campus' is scheduled for next Saturday. Have we secured all the trash grabbers, biodegradable garbage bags, and gloves?\nWoman: Yes Tom, the logistics team received 200 pairs of protective gloves and 500 compostable bags yesterday from our corporate sponsor.\nMan: Fantastic! How many student volunteers have registered online so far?\nWoman: We reached 180 registrations this morning, exceeding our initial target of 150. I've divided them into four squads: plastic bottle sorting, tree planting around the sports field, electronic waste collection, and riverbank clean-up.\nMan: Excellent organization! Let's hold a short briefing on Friday afternoon to distribute team badges and safety instructions.",
            "questions": [
              {
                "id": "L17",
                "question": "What is the name of the Student Union campaign?",
                "options": [
                  {
                    "key": "A",
                    "text": "Clean Oceans Initiative"
                  },
                  {
                    "key": "B",
                    "text": "Green Campus"
                  },
                  {
                    "key": "C",
                    "text": "Zero Carbon Future"
                  },
                  {
                    "key": "D",
                    "text": "Eco-Friendly Living"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'our Student Union environmental campaign Green Campus'."
              },
              {
                "id": "L18",
                "question": "Who provided the gloves and biodegradable bags?",
                "options": [
                  {
                    "key": "A",
                    "text": "The local city council"
                  },
                  {
                    "key": "B",
                    "text": "A corporate sponsor"
                  },
                  {
                    "key": "C",
                    "text": "Student Union funding"
                  },
                  {
                    "key": "D",
                    "text": "Donations from professors"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'received... from our corporate sponsor'."
              },
              {
                "id": "L19",
                "question": "How many volunteers have registered for the event?",
                "options": [
                  {
                    "key": "A",
                    "text": "150 volunteers"
                  },
                  {
                    "key": "B",
                    "text": "180 volunteers"
                  },
                  {
                    "key": "C",
                    "text": "200 volunteers"
                  },
                  {
                    "key": "D",
                    "text": "500 volunteers"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'We reached 180 registrations this morning, exceeding our initial target of 150'."
              },
              {
                "id": "L20",
                "question": "What will happen during Friday afternoon's meeting?",
                "options": [
                  {
                    "key": "A",
                    "text": "Planting trees around the football field"
                  },
                  {
                    "key": "B",
                    "text": "Distributing badges and safety instructions"
                  },
                  {
                    "key": "C",
                    "text": "Collecting electronic waste from residents"
                  },
                  {
                    "key": "D",
                    "text": "Interviewing new team captains"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'hold a short briefing on Friday afternoon to distribute team badges and safety instructions'."
              }
            ]
          }
        ]
      },
      "part3": {
        "title": "Part 3: 3 Bài Thuyết Trình Học Thuật (15 câu hỏi)",
        "instructions": "Bạn sẽ nghe 3 bài giảng học thuật. Mỗi bài giảng có 5 câu hỏi trắc nghiệm.",
        "talks": [
          {
            "id": "T1",
            "title": "Bài giảng 1: Sự tiến hóa của Trí tuệ Nhân tạo trong Giáo dục",
            "audioTranscript": "Good morning class. Today, we delve into the transformative role of Artificial Intelligence in contemporary education. Historically, traditional classrooms adopted a one-size-fits-all approach, where all students followed identical textbooks regardless of individual learning paces. Modern AI-driven adaptive platforms, however, analyze student interaction data in real time to customize personalized exercise difficulty and learning pathways.\n\nFurthermore, automated grading systems now evaluate written essays and provide instant constructive feedback on grammar, cohesion, and vocabulary usage, saving educators substantial grading time. Nonetheless, educational researchers emphasize that AI cannot replace the empathetic human dimension of teaching, such as mentoring, inspiring curiosity, and emotional encouragement.",
            "questions": [
              {
                "id": "L21",
                "question": "What is the primary topic of the lecture?",
                "options": [
                  {
                    "key": "A",
                    "text": "History of traditional university examinations"
                  },
                  {
                    "key": "B",
                    "text": "Application and limitations of AI in education"
                  },
                  {
                    "key": "C",
                    "text": "Developing robotic hardware for school labs"
                  },
                  {
                    "key": "D",
                    "text": "Financial cost of computer software"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Toàn bộ bài giảng phân tích vai trò chuyển đổi và các khía cạnh của AI trong giáo dục hiện đại."
              },
              {
                "id": "L22",
                "question": "How do AI adaptive platforms personalize learning for students?",
                "options": [
                  {
                    "key": "A",
                    "text": "By eliminating all final exams"
                  },
                  {
                    "key": "B",
                    "text": "By customizing exercise difficulty based on interaction data"
                  },
                  {
                    "key": "C",
                    "text": "By replacing human professors completely"
                  },
                  {
                    "key": "D",
                    "text": "By providing free digital tablets"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'analyze student interaction data in real time to customize personalized exercise difficulty'."
              },
              {
                "id": "L23",
                "question": "What task can automated grading systems assist teachers with?",
                "options": [
                  {
                    "key": "A",
                    "text": "Evaluating essays and providing instant linguistic feedback"
                  },
                  {
                    "key": "B",
                    "text": "Maintaining physical sports equipment"
                  },
                  {
                    "key": "C",
                    "text": "Conducting parent-teacher conferences"
                  },
                  {
                    "key": "D",
                    "text": "Arranging school bus schedules"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "'evaluate written essays and provide instant constructive feedback'."
              },
              {
                "id": "L24",
                "question": "According to researchers, what human quality cannot be replaced by AI?",
                "options": [
                  {
                    "key": "A",
                    "text": "Calculating mathematical formulas"
                  },
                  {
                    "key": "B",
                    "text": "Storing historical dates and facts"
                  },
                  {
                    "key": "C",
                    "text": "Empathy, mentoring, and emotional encouragement"
                  },
                  {
                    "key": "D",
                    "text": "Translating foreign language articles"
                  }
                ],
                "correctAnswer": "C",
                "explanation": "'AI cannot replace the empathetic human dimension of teaching, such as mentoring, inspiring curiosity, and emotional encouragement'."
              },
              {
                "id": "L25",
                "question": "What was a key limitation of the traditional historical classroom?",
                "options": [
                  {
                    "key": "A",
                    "text": "Lack of physical chalkboards"
                  },
                  {
                    "key": "B",
                    "text": "A rigid one-size-fits-all approach for all learners"
                  },
                  {
                    "key": "C",
                    "text": "Short daily study duration"
                  },
                  {
                    "key": "D",
                    "text": "Excessive student interaction"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'traditional classrooms adopted a one-size-fits-all approach'."
              }
            ]
          },
          {
            "id": "T2",
            "title": "Bài giảng 2: Đô thị sinh thái và Phát triển bền vững",
            "audioTranscript": "Welcome everyone. Today's urban planning seminar focuses on Eco-Cities, designed to minimize ecological footprints through sustainable architecture and renewable energy. A hallmark of eco-cities is the 15-minute neighborhood model, ensuring every resident can access essential services, schools, groceries, and green parks within a 15-minute walk or bicycle ride.\n\nIn addition, green roofs and vertical gardens help combat the urban heat island effect, decreasing ambient air temperatures by up to 3 degrees Celsius during summer heatwaves. Permeable pavements and rainwater harvesting reservoirs absorb storm runoff, substantially mitigating urban flash flooding risks.",
            "questions": [
              {
                "id": "L26",
                "question": "What is the core principle of an Eco-City?",
                "options": [
                  {
                    "key": "A",
                    "text": "Maximizing automotive highways and parking lots"
                  },
                  {
                    "key": "B",
                    "text": "Minimizing ecological footprint through sustainability"
                  },
                  {
                    "key": "C",
                    "text": "Building skyscrapers with luxury penthouses"
                  },
                  {
                    "key": "D",
                    "text": "Banning all commercial industrial businesses"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'designed to minimize ecological footprints through sustainable architecture and renewable energy'."
              },
              {
                "id": "L27",
                "question": "What is guaranteed in a 15-minute neighborhood model?",
                "options": [
                  {
                    "key": "A",
                    "text": "Free public high-speed trains to airports"
                  },
                  {
                    "key": "B",
                    "text": "Access to daily amenities within a 15-minute walk or bike ride"
                  },
                  {
                    "key": "C",
                    "text": "Free residential high-speed internet"
                  },
                  {
                    "key": "D",
                    "text": "15 minutes of free parking everywhere"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'access essential services, schools, groceries, and green parks within a 15-minute walk or bicycle ride'."
              },
              {
                "id": "L28",
                "question": "How do vertical gardens and green roofs improve urban climates?",
                "options": [
                  {
                    "key": "A",
                    "text": "By increasing winter snowfall"
                  },
                  {
                    "key": "B",
                    "text": "By reducing ambient temperatures during heatwaves by up to 3°C"
                  },
                  {
                    "key": "C",
                    "text": "By eliminating the need for indoor lighting"
                  },
                  {
                    "key": "D",
                    "text": "By blocking solar panels"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'decreasing ambient air temperatures by up to 3 degrees Celsius during summer heatwaves'."
              },
              {
                "id": "L29",
                "question": "What problem is mitigated by permeable pavements and rainwater reservoirs?",
                "options": [
                  {
                    "key": "A",
                    "text": "Urban flash flooding risks"
                  },
                  {
                    "key": "B",
                    "text": "Traffic speed violations"
                  },
                  {
                    "key": "C",
                    "text": "Air pollution from aircraft"
                  },
                  {
                    "key": "D",
                    "text": "Underground subway noise"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "'substantially mitigating urban flash flooding risks'."
              },
              {
                "id": "L30",
                "question": "What type of transportation is prioritized in eco-city design?",
                "options": [
                  {
                    "key": "A",
                    "text": "Heavy diesel commercial trucks"
                  },
                  {
                    "key": "B",
                    "text": "Walking, cycling, and clean public transit"
                  },
                  {
                    "key": "C",
                    "text": "Private gasoline sports cars"
                  },
                  {
                    "key": "D",
                    "text": "Domestic commercial flights"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "Đoạn văn nhấn mạnh đi bộ (walking) và xe đạp (cycling) trong mô hình khu dân cư 15 phút."
              }
            ]
          },
          {
            "id": "T3",
            "title": "Bài giảng 3: Tâm lý học hành vi về Thói quen và Giấc ngủ",
            "audioTranscript": "Good afternoon colleagues. In this neurobiology lecture, we explore the profound impact of circadian rhythms and sleep architecture on cognitive performance and habit formation. Sleep is structured in repeating 90-minute cycles transitioning between Non-REM slow-wave sleep and REM sleep.\n\nDuring deep slow-wave sleep, the brain's glymphatic system flushes out metabolic toxins like beta-amyloid, while the hippocampus transfers short-term memories into the cerebral cortex for long-term consolidation. Chronic sleep deprivation of under six hours per night impairs executive decision-making, weakens emotional regulation, and elevates cortisol stress hormones.",
            "questions": [
              {
                "id": "L31",
                "question": "How long does a typical sleep cycle last in human adults?",
                "options": [
                  {
                    "key": "A",
                    "text": "45 minutes"
                  },
                  {
                    "key": "B",
                    "text": "90 minutes"
                  },
                  {
                    "key": "C",
                    "text": "120 minutes"
                  },
                  {
                    "key": "D",
                    "text": "180 minutes"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'Sleep is structured in repeating 90-minute cycles'."
              },
              {
                "id": "L32",
                "question": "What occurs in the brain during deep slow-wave sleep?",
                "options": [
                  {
                    "key": "A",
                    "text": "Toxins are cleared and memories consolidated into long-term storage"
                  },
                  {
                    "key": "B",
                    "text": "Brain metabolism increases to maximum speed"
                  },
                  {
                    "key": "C",
                    "text": "Heart rate accelerates dramatically"
                  },
                  {
                    "key": "D",
                    "text": "All nerve communication stops entirely"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "'flushes out metabolic toxins... transfers short-term memories into the cerebral cortex for long-term consolidation'."
              },
              {
                "id": "L33",
                "question": "What part of the brain coordinates the transfer of memories?",
                "options": [
                  {
                    "key": "A",
                    "text": "The retina"
                  },
                  {
                    "key": "B",
                    "text": "The hippocampus"
                  },
                  {
                    "key": "C",
                    "text": "The spinal cord"
                  },
                  {
                    "key": "D",
                    "text": "The auditory nerve"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'the hippocampus transfers short-term memories into the cerebral cortex'."
              },
              {
                "id": "L34",
                "question": "What is an adverse consequence of chronic sleep deprivation under 6 hours?",
                "options": [
                  {
                    "key": "A",
                    "text": "Enhanced photographic memory"
                  },
                  {
                    "key": "B",
                    "text": "Impaired executive decision-making and elevated cortisol"
                  },
                  {
                    "key": "C",
                    "text": "Decreased body temperature"
                  },
                  {
                    "key": "D",
                    "text": "Faster reflex reaction times"
                  }
                ],
                "correctAnswer": "B",
                "explanation": "'impairs executive decision-making, weakens emotional regulation, and elevates cortisol'."
              },
              {
                "id": "L35",
                "question": "What biological system regulates the 24-hour sleep-wake cycle?",
                "options": [
                  {
                    "key": "A",
                    "text": "Circadian rhythm"
                  },
                  {
                    "key": "B",
                    "text": "Digestive enzymes"
                  },
                  {
                    "key": "C",
                    "text": "Skeletal joints"
                  },
                  {
                    "key": "D",
                    "text": "Respiratory diaphragm"
                  }
                ],
                "correctAnswer": "A",
                "explanation": "'profound impact of circadian rhythms and sleep architecture'."
              }
            ]
          }
        ]
      }
    },
    "reading": {
      "time": 60,
      "totalQuestions": 40,
      "passages": [
        {
          "id": "R-P1",
          "title": "Passage 1: The Evolution of Global Online Education",
          "wordCount": 460,
          "genre": "Education & Technology",
          "text": "[P1] In recent years, distance learning has shifted from an unconventional alternative into a mainstream pillar of higher education. Propelled by ubiquitous broadband internet, cloud computing, and interactive virtual classrooms, universities worldwide now deliver fully accredited degree programs to millions of students who reside thousands of kilometers from campus.\n\n[P2] The most prominent advantage of online education lies in its unprecedented geographic and temporal flexibility. Working professionals, parents, and geographically isolated individuals can tailor their study schedules around demanding domestic and occupational obligations. Asynchronous video lectures, interactive discussion forums, and downloadable multimedia resources empower learners to assimilate complex concepts at their own customized pace rather than adhering to rigid classroom timetables.\n\n[P3] However, virtual learning is not without pedagogical drawbacks. The absence of spontaneous face-to-face interaction can precipitate profound feelings of academic isolation and reduced collaborative engagement. Furthermore, online formats place tremendous demands on self-discipline and autonomous time management. Research indicates that completion rates for open online courses frequently hover below twenty percent, primarily because students struggle to maintain intrinsic motivation without structured institutional accountability.\n\n[P4] To address these deficits, contemporary educational institutions are pioneering hybrid or blended models. By fusing flexible self-paced digital modules with periodic interactive group seminars, universities aim to retain the accessibility of distance education while preserving the vibrant social camaraderie and accountability of traditional physical campuses.",
          "questions": [
            {
              "id": "R1",
              "question": "What is the primary focus of the passage?",
              "options": [
                {
                  "key": "A",
                  "text": "The financial cost of university tuition fees"
                },
                {
                  "key": "B",
                  "text": "The growth, benefits, and challenges of online education"
                },
                {
                  "key": "C",
                  "text": "Methods for building physical campus libraries"
                },
                {
                  "key": "D",
                  "text": "The history of postal correspondence courses"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Đoạn 1 nêu sự phát triển, Đoạn 2 nêu ưu điểm, Đoạn 3 nêu thách thức, Đoạn 4 nêu giải pháp lai (hybrid)."
            },
            {
              "id": "R2",
              "question": "The word 'ubiquitous' in paragraph 1 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "expensive and luxurious"
                },
                {
                  "key": "B",
                  "text": "widespread and found everywhere"
                },
                {
                  "key": "C",
                  "text": "unreliable and dangerous"
                },
                {
                  "key": "D",
                  "text": "temporary and experimental"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Ubiquitous' = phổ biến khắp nơi (widespread, omnipresent)."
            },
            {
              "id": "R3",
              "question": "According to paragraph 2, who benefits significantly from the flexibility of online learning?",
              "options": [
                {
                  "key": "A",
                  "text": "Only full-time residential undergraduates"
                },
                {
                  "key": "B",
                  "text": "Working professionals and isolated individuals"
                },
                {
                  "key": "C",
                  "text": "Professors who dislike lecturing in person"
                },
                {
                  "key": "D",
                  "text": "Commercial internet providers"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Working professionals, parents, and geographically isolated individuals can tailor their study schedules'."
            },
            {
              "id": "R4",
              "question": "The word 'assimilate' in paragraph 2 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "absorb and understand"
                },
                {
                  "key": "B",
                  "text": "reject and ignore"
                },
                {
                  "key": "C",
                  "text": "translate and print"
                },
                {
                  "key": "D",
                  "text": "memorize without thinking"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Assimilate concepts' = tiếp thu, hiểu sâu kiến thức (absorb and comprehend)."
            },
            {
              "id": "R5",
              "question": "According to paragraph 3, what is a major pedagogical disadvantage of virtual learning?",
              "options": [
                {
                  "key": "A",
                  "text": "Excessive physical textbook weight"
                },
                {
                  "key": "B",
                  "text": "Feelings of isolation and lack of face-to-face interaction"
                },
                {
                  "key": "C",
                  "text": "Frequent power outages in university buildings"
                },
                {
                  "key": "D",
                  "text": "Strict morning attendance rules"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'The absence of spontaneous face-to-face interaction can precipitate profound feelings of academic isolation'."
            },
            {
              "id": "R6",
              "question": "The word 'these' in paragraph 4 refers to:",
              "options": [
                {
                  "key": "A",
                  "text": "online discussion forums"
                },
                {
                  "key": "B",
                  "text": "pedagogical drawbacks and deficits"
                },
                {
                  "key": "C",
                  "text": "traditional university campuses"
                },
                {
                  "key": "D",
                  "text": "high completion statistics"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'To address these deficits' liên hệ lại các hạn chế đã nêu ở đoạn 3."
            },
            {
              "id": "R7",
              "question": "Why do completion rates for open online courses often fall below twenty percent?",
              "options": [
                {
                  "key": "A",
                  "text": "Tuition fees are excessively exorbitant"
                },
                {
                  "key": "B",
                  "text": "Students struggle with self-discipline without structured accountability"
                },
                {
                  "key": "C",
                  "text": "The courses are taught in dead languages"
                },
                {
                  "key": "D",
                  "text": "Internet servers are shut down every night"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'students struggle to maintain intrinsic motivation without structured institutional accountability'."
            },
            {
              "id": "R8",
              "question": "Which of the following is NOT mentioned as a feature of online education in paragraph 2?",
              "options": [
                {
                  "key": "A",
                  "text": "Asynchronous video lectures"
                },
                {
                  "key": "B",
                  "text": "Interactive discussion forums"
                },
                {
                  "key": "C",
                  "text": "Compulsory daily uniform requirements"
                },
                {
                  "key": "D",
                  "text": "Downloadable multimedia resources"
                }
              ],
              "correctAnswer": "C",
              "explanation": "Đồng phục bắt buộc (uniform requirements) hoàn toàn không được nhắc đến."
            },
            {
              "id": "R9",
              "question": "What is the goal of hybrid or blended educational models mentioned in paragraph 4?",
              "options": [
                {
                  "key": "A",
                  "text": "To close all physical university campuses permanently"
                },
                {
                  "key": "B",
                  "text": "To combine online flexibility with campus social camaraderie"
                },
                {
                  "key": "C",
                  "text": "To double the duration of bachelor degree programs"
                },
                {
                  "key": "D",
                  "text": "To reduce teacher salaries"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'retain the accessibility of distance education while preserving the vibrant social camaraderie'."
            },
            {
              "id": "R10",
              "question": "What can be inferred about the future of university education from the passage?",
              "options": [
                {
                  "key": "A",
                  "text": "Traditional face-to-face learning will disappear entirely next year"
                },
                {
                  "key": "B",
                  "text": "Universities will increasingly integrate digital tools with in-person sessions"
                },
                {
                  "key": "C",
                  "text": "Degrees obtained online will no longer be accredited"
                },
                {
                  "key": "D",
                  "text": "Computers will grade 100% of student emotions"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Mô hình kết hợp (blended/hybrid) là xu thế phát triển tất yếu của giáo dục đại học."
            }
          ]
        },
        {
          "id": "R-P2",
          "title": "Passage 2: The Renewable Energy Transition and Grid Stability",
          "wordCount": 475,
          "genre": "Environment & Energy",
          "text": "[P1] The transition from fossil fuels to renewable energy sources has emerged as the defining engineering imperative of the twenty-first century. Driven by urgent climate targets and plummeting photovoltaic costs, solar and wind power installations have expanded exponentially across both developed and emerging economies.\n\n[P2] The undeniable environmental benefits of renewable energy are manifold. Solar panels and wind turbines generate electricity with virtually zero direct greenhouse gas emissions during operation, drastically diminishing atmospheric carbon dioxide concentrations. Moreover, decentralizing power generation diminishes reliance on volatile fossil fuel import markets, bolstering national energy security.\n\n[P3] Nevertheless, integrating massive intermittent renewables introduces severe technical challenges for traditional power grids. Unlike coal or natural gas plants that provide steady baseload power, solar arrays cease generation after sunset, and wind turbines depend heavily on fluctuating atmospheric gusts. This intermittency creates severe supply-demand mismatches, potentially destabilizing grid frequency and risking blackouts unless substantial energy storage or backup capacity is deployed.\n\n[P4] To overcome grid volatility, utility companies are investing aggressively in utility-scale lithium-ion and flow battery storage facilities, pumped hydroelectric storage, and smart grid automation. Smart grid algorithms utilize artificial intelligence to forecast weather patterns and dynamically route surplus power across national transmission corridors, ensuring grid stability in a green energy era.",
          "questions": [
            {
              "id": "R11",
              "question": "What is the main idea of Passage 2?",
              "options": [
                {
                  "key": "A",
                  "text": "The economic cost of digging coal mines"
                },
                {
                  "key": "B",
                  "text": "The benefits and grid stability challenges of renewable energy"
                },
                {
                  "key": "C",
                  "text": "Why households should avoid buying solar panels"
                },
                {
                  "key": "D",
                  "text": "The history of steam locomotive engines"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Đoạn văn phân tích cả lợi ích môi trường lẫn thách thức kỹ thuật về tính gián đoạn (intermittency) của năng lượng tái tạo."
            },
            {
              "id": "R12",
              "question": "The word 'plummeting' in paragraph 1 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "increasing rapidly"
                },
                {
                  "key": "B",
                  "text": "falling sharply"
                },
                {
                  "key": "C",
                  "text": "fluctuating randomly"
                },
                {
                  "key": "D",
                  "text": "remaining constant"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Plummeting costs' = chi phí giảm mạnh (falling steeply/sharply)."
            },
            {
              "id": "R13",
              "question": "According to paragraph 2, how does renewable energy benefit national security?",
              "options": [
                {
                  "key": "A",
                  "text": "By increasing military spending on weapons"
                },
                {
                  "key": "B",
                  "text": "By reducing reliance on unpredictable fossil fuel import markets"
                },
                {
                  "key": "C",
                  "text": "By expanding foreign oil exploration projects"
                },
                {
                  "key": "D",
                  "text": "By building concrete border walls"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'diminishes reliance on volatile fossil fuel import markets, bolstering national energy security'."
            },
            {
              "id": "R14",
              "question": "The word 'intermittent' in paragraph 3 refers to energy that:",
              "options": [
                {
                  "key": "A",
                  "text": "occurs continuously without stopping"
                },
                {
                  "key": "B",
                  "text": "occurs at irregular intervals and is not continuous"
                },
                {
                  "key": "C",
                  "text": "is generated underground"
                },
                {
                  "key": "D",
                  "text": "is entirely free of charge"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Intermittent' = gián đoạn, chập chờn, không liên tục (irregular, non-continuous)."
            },
            {
              "id": "R15",
              "question": "Why do traditional fossil fuel plants differ from solar and wind installations?",
              "options": [
                {
                  "key": "A",
                  "text": "Fossil fuel plants generate zero carbon emissions"
                },
                {
                  "key": "B",
                  "text": "Fossil fuel plants can provide consistent and dispatchable baseload power"
                },
                {
                  "key": "C",
                  "text": "Fossil fuel plants only operate during rainstorms"
                },
                {
                  "key": "D",
                  "text": "Fossil fuel plants cannot connect to high-voltage wires"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Unlike coal or natural gas plants that provide steady baseload power'."
            },
            {
              "id": "R16",
              "question": "What danger can arise from supply-demand mismatches in the power grid?",
              "options": [
                {
                  "key": "A",
                  "text": "Immediate price deflation of all groceries"
                },
                {
                  "key": "B",
                  "text": "Destabilizing grid frequency and triggering widespread blackouts"
                },
                {
                  "key": "C",
                  "text": "Excessive domestic tap water pressure"
                },
                {
                  "key": "D",
                  "text": "Faster mobile phone charging"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'potentially destabilizing grid frequency and risking blackouts'."
            },
            {
              "id": "R17",
              "question": "Which of the following is NOT mentioned in paragraph 4 as a grid stabilization solution?",
              "options": [
                {
                  "key": "A",
                  "text": "Utility-scale lithium-ion and flow battery facilities"
                },
                {
                  "key": "B",
                  "text": "Pumped hydroelectric storage"
                },
                {
                  "key": "C",
                  "text": "Constructing coal burning boilers in residential homes"
                },
                {
                  "key": "D",
                  "text": "Smart grid algorithms powered by AI"
                }
              ],
              "correctAnswer": "C",
              "explanation": "Lò than trong khu dân cư (coal boilers in homes) hoàn toàn không được nhắc đến."
            },
            {
              "id": "R18",
              "question": "The word 'bolstering' in paragraph 2 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "strengthening and reinforcing"
                },
                {
                  "key": "B",
                  "text": "weakening and undermining"
                },
                {
                  "key": "C",
                  "text": "delaying and postponing"
                },
                {
                  "key": "D",
                  "text": "measuring and calculating"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Bolstering security' = củng cố, tăng cường (strengthening, boosting)."
            },
            {
              "id": "R19",
              "question": "How do smart grid algorithms utilize AI according to paragraph 4?",
              "options": [
                {
                  "key": "A",
                  "text": "To forecast weather patterns and dynamically route surplus power"
                },
                {
                  "key": "B",
                  "text": "To disconnect residential neighborhoods randomly"
                },
                {
                  "key": "C",
                  "text": "To replace all human electricians with robots"
                },
                {
                  "key": "D",
                  "text": "To charge consumers higher night-time rates"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'utilize artificial intelligence to forecast weather patterns and dynamically route surplus power'."
            },
            {
              "id": "R20",
              "question": "What is the author's tone regarding the renewable energy transition?",
              "options": [
                {
                  "key": "A",
                  "text": "Deeply sarcastic and pessimistic"
                },
                {
                  "key": "B",
                  "text": "Objective, analytical, and forward-looking"
                },
                {
                  "key": "C",
                  "text": "Indifferent and dismissive"
                },
                {
                  "key": "D",
                  "text": "Hostile towards technological modernization"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Tác giả trình bày khách quan, phân tích khoa học và hướng tới giải pháp tương lai."
            }
          ]
        },
        {
          "id": "R-P3",
          "title": "Passage 3: The Psychology of Habit Formation and Behavioral Loops",
          "wordCount": 480,
          "genre": "Psychology & Behavioral Science",
          "text": "[P1] Human behavior is overwhelmingly governed by automatic routines rather than deliberate, conscious calculations. Cognitive psychologists estimate that upwards of forty percent of our daily actions—ranging from our morning coffee rituals to our smartphone browsing habits—are executed autonomously through subconscious neurological habit loops.\n\n[P2] At the core of every habit lies a three-part neurological architecture pioneered by behavioral researchers: the cue, the routine, and the reward. The cue acts as a sensory trigger that prompts the brain to initiate a pre-programmed behavior. The routine represents the physical, mental, or emotional action performed. Finally, the reward satisfies a neurochemical craving—often through a surge of dopamine—signaling the brain that this loop is worth preserving in memory.\n\n[P3] Understanding the habit loop illuminates why detrimental habits prove remarkably resilient to brute willpower alone. Attempting to suppress a deeply ingrained routine without altering the underlying cue or providing an alternative reward creates psychological tension and cognitive fatigue. Instead, behavioral scientists recommend the 'Golden Rule of Habit Change': keep the original cue and reward intact, but strategically substitute the middle routine with a healthier alternative.\n\n[P4] Furthermore, environmental architecture plays a decisive role in sustaining positive behavioral modifications. By consciously eliminating friction for desired behaviors—such as placing running shoes beside the bed—and increasing friction for unproductive impulses—such as storing digital devices outside the bedroom—individuals can reshape their subconscious routines without relying on finite reserves of daily self-control.",
          "questions": [
            {
              "id": "R21",
              "question": "What is the central topic of Passage 3?",
              "options": [
                {
                  "key": "A",
                  "text": "The financial cost of gym memberships"
                },
                {
                  "key": "B",
                  "text": "The neurological structure of habit loops and strategies for behavioral change"
                },
                {
                  "key": "C",
                  "text": "The chemistry of morning coffee beans"
                },
                {
                  "key": "D",
                  "text": "Why willpower alone is 100% sufficient for every goal"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Bài đọc phân tích cấu trúc 3 phần của thói quen và các chiến lược khoa học để thay đổi hành vi."
            },
            {
              "id": "R22",
              "question": "According to paragraph 1, approximately what percentage of daily human actions are habits?",
              "options": [
                {
                  "key": "A",
                  "text": "Under ten percent"
                },
                {
                  "key": "B",
                  "text": "Around twenty-five percent"
                },
                {
                  "key": "C",
                  "text": "More than forty percent"
                },
                {
                  "key": "D",
                  "text": "Exactly one hundred percent"
                }
              ],
              "correctAnswer": "C",
              "explanation": "'upwards of forty percent of our daily actions... are executed autonomously'."
            },
            {
              "id": "R23",
              "question": "What are the three components of the neurological habit loop in paragraph 2?",
              "options": [
                {
                  "key": "A",
                  "text": "Sleep, exercise, and diet"
                },
                {
                  "key": "B",
                  "text": "The cue, the routine, and the reward"
                },
                {
                  "key": "C",
                  "text": "Memory, intellect, and willpower"
                },
                {
                  "key": "D",
                  "text": "Input, processing, and hardware"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'the cue, the routine, and the reward'."
            },
            {
              "id": "R24",
              "question": "The word 'detrimental' in paragraph 3 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "harmful and damaging"
                },
                {
                  "key": "B",
                  "text": "beneficial and productive"
                },
                {
                  "key": "C",
                  "text": "ancient and traditional"
                },
                {
                  "key": "D",
                  "text": "costly and luxurious"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Detrimental habits' = thói quen có hại, tiêu cực (harmful, damaging)."
            },
            {
              "id": "R25",
              "question": "What does the 'Golden Rule of Habit Change' suggest doing?",
              "options": [
                {
                  "key": "A",
                  "text": "Eliminating all rewards from daily life"
                },
                {
                  "key": "B",
                  "text": "Keeping the cue and reward while substituting the routine"
                },
                {
                  "key": "C",
                  "text": "Ignoring all sensory triggers completely"
                },
                {
                  "key": "D",
                  "text": "Punishing oneself whenever a mistake occurs"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'keep the original cue and reward intact, but strategically substitute the middle routine'."
            },
            {
              "id": "R26",
              "question": "The word 'surge' in paragraph 2 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "gradual decline"
                },
                {
                  "key": "B",
                  "text": "sudden powerful increase"
                },
                {
                  "key": "C",
                  "text": "complete disappearance"
                },
                {
                  "key": "D",
                  "text": "stable balance"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Surge of dopamine' = sự tăng vọt, bùng nổ đột ngột (sudden sharp increase)."
            },
            {
              "id": "R27",
              "question": "Why is relying solely on willpower often ineffective for breaking bad habits?",
              "options": [
                {
                  "key": "A",
                  "text": "Willpower is a finite cognitive resource that causes fatigue"
                },
                {
                  "key": "B",
                  "text": "Humans lack the capacity for rational thought"
                },
                {
                  "key": "C",
                  "text": "Bad habits carry zero neurological rewards"
                },
                {
                  "key": "D",
                  "text": "Subconscious routines are permanently deleted every night"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Attempting to suppress... creates psychological tension and cognitive fatigue... finite reserves of daily self-control'."
            },
            {
              "id": "R28",
              "question": "What is an example of 'reducing friction' for a good habit mentioned in paragraph 4?",
              "options": [
                {
                  "key": "A",
                  "text": "Hiding running shoes inside a locked closet"
                },
                {
                  "key": "B",
                  "text": "Placing running shoes right beside the bed"
                },
                {
                  "key": "C",
                  "text": "Watching television until 2:00 AM"
                },
                {
                  "key": "D",
                  "text": "Setting ten alarm clocks across the house"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'eliminating friction for desired behaviors—such as placing running shoes beside the bed'."
            },
            {
              "id": "R29",
              "question": "The word 'it' in paragraph 2 refers to:",
              "options": [
                {
                  "key": "A",
                  "text": "the sensory trigger"
                },
                {
                  "key": "B",
                  "text": "the physical habit loop"
                },
                {
                  "key": "C",
                  "text": "the human brain"
                },
                {
                  "key": "D",
                  "text": "the coffee ritual"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'signaling the brain that this loop is worth preserving'."
            },
            {
              "id": "R30",
              "question": "What can be inferred about human nature from the text?",
              "options": [
                {
                  "key": "A",
                  "text": "We are entirely helpless victims of our genetics"
                },
                {
                  "key": "B",
                  "text": "Environmental design can strategically guide subconscious choices"
                },
                {
                  "key": "C",
                  "text": "Habits cannot be formed after age twenty-five"
                },
                {
                  "key": "D",
                  "text": "Dopamine is only produced during physical sports"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Thiết kế môi trường có thể tái định hình các thói quen tiềm thức một cách chiến lược."
            }
          ]
        },
        {
          "id": "R-P4",
          "title": "Passage 4: Urban Agriculture and Vertical Farming Technologies",
          "wordCount": 495,
          "genre": "Agriculture & Urbanization",
          "text": "[P1] As the global population approaches ten billion by mid-century, conventional agriculture faces unprecedented ecological constraints. Arable land is diminishing due to soil degradation and desertification, while traditional farming consumes roughly seventy percent of global freshwater reserves. In response to these compounding crises, agricultural scientists and urban architects are pioneering Controlled Environment Agriculture (CEA), commonly known as vertical farming.\n\n[P2] Vertical farms cultivate crops inside multi-story retrofitted urban facilities, repurposing abandoned warehouses, basements, and shipping containers. By employing soilless hydroponic and aeroponic systems, plant roots receive calibrated nutrient-rich water mists directly, reducing total water consumption by up to ninety-five percent compared to traditional open-field farming. Furthermore, high-efficiency spectrum-tuned LED lights deliver optimized photosynthetic wavelengths around the clock, accelerating harvest cycles regardless of external weather conditions.\n\n[P3] In addition to resource efficiency, urban vertical agriculture offers profound logistical advantages. By producing fresh leafy greens and vegetables within metropolitan borders, the distance food travels from farm to consumer—frequently spanning thousands of miles in conventional supply chains—is slashed to mere kilometers. This drastic reduction in food miles minimizes transportation fuel emissions and eliminates costly post-harvest food spoilage.\n\n[P4] Despite its transformative potential, vertical farming faces critical economic and technical bottlenecks. High initial capital expenditures for specialized LED fixtures, automated robotics, and environmental climate control units render operations financially demanding. Moreover, substantial electricity consumption from artificial lighting can elevate carbon emissions if powered by fossil fuel grids. Consequently, the commercial viability of vertical farming hinges on continued declines in renewable energy costs and specialized LED efficiencies.",
          "questions": [
            {
              "id": "R31",
              "question": "What is the primary subject of Passage 4?",
              "options": [
                {
                  "key": "A",
                  "text": "The history of medieval grain trade"
                },
                {
                  "key": "B",
                  "text": "The mechanisms, benefits, and challenges of vertical farming"
                },
                {
                  "key": "C",
                  "text": "Methods for chemical pesticide synthesis"
                },
                {
                  "key": "D",
                  "text": "Why cities should eliminate all public parks"
                }
              ],
              "correctAnswer": "B",
              "explanation": "Toàn bài phân tích kỹ thuật, lợi thế và thách thức kinh tế của nông nghiệp thẳng đứng (vertical farming)."
            },
            {
              "id": "R32",
              "question": "According to paragraph 1, what percentage of global freshwater is consumed by traditional farming?",
              "options": [
                {
                  "key": "A",
                  "text": "Approximately twenty percent"
                },
                {
                  "key": "B",
                  "text": "Roughly fifty percent"
                },
                {
                  "key": "C",
                  "text": "Roughly seventy percent"
                },
                {
                  "key": "D",
                  "text": "Over ninety-five percent"
                }
              ],
              "correctAnswer": "C",
              "explanation": "'traditional farming consumes roughly seventy percent of global freshwater reserves'."
            },
            {
              "id": "R33",
              "question": "How much water can vertical farming save compared to open-field farming?",
              "options": [
                {
                  "key": "A",
                  "text": "Up to twenty percent"
                },
                {
                  "key": "B",
                  "text": "Up to fifty percent"
                },
                {
                  "key": "C",
                  "text": "Up to seventy-five percent"
                },
                {
                  "key": "D",
                  "text": "Up to ninety-five percent"
                }
              ],
              "correctAnswer": "D",
              "explanation": "'reducing total water consumption by up to ninety-five percent'."
            },
            {
              "id": "R34",
              "question": "The word 'retrofitted' in paragraph 2 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "demolished and destroyed"
                },
                {
                  "key": "B",
                  "text": "adapted and modified for a new purpose"
                },
                {
                  "key": "C",
                  "text": "painted in bright colors"
                },
                {
                  "key": "D",
                  "text": "abandoned and neglected"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'Retrofitted facilities' = nhà xưởng được cải tạo, chuyển đổi công năng (modified, adapted)."
            },
            {
              "id": "R35",
              "question": "What role do spectrum-tuned LED lights play in vertical farms?",
              "options": [
                {
                  "key": "A",
                  "text": "They repel dangerous insects through loud frequencies"
                },
                {
                  "key": "B",
                  "text": "They provide optimized photosynthetic wavelengths around the clock"
                },
                {
                  "key": "C",
                  "text": "They boil the water to sanitize plant roots"
                },
                {
                  "key": "D",
                  "text": "They cool the building to freezing temperatures"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'deliver optimized photosynthetic wavelengths around the clock, accelerating harvest cycles'."
            },
            {
              "id": "R36",
              "question": "The phrase 'food miles' in paragraph 3 refers to:",
              "options": [
                {
                  "key": "A",
                  "text": "the speed at which crops grow per day"
                },
                {
                  "key": "B",
                  "text": "the distance food is transported from producer to consumer"
                },
                {
                  "key": "C",
                  "text": "the length of agricultural irrigation canals"
                },
                {
                  "key": "D",
                  "text": "the price per mile of supermarket delivery"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'the distance food travels from farm to consumer... food miles'."
            },
            {
              "id": "R37",
              "question": "According to paragraph 4, what is a major obstacle for vertical farming companies?",
              "options": [
                {
                  "key": "A",
                  "text": "Extreme shortage of agricultural seeds"
                },
                {
                  "key": "B",
                  "text": "High initial capital costs and intensive electricity consumption"
                },
                {
                  "key": "C",
                  "text": "Consumer refusal to eat leafy green vegetables"
                },
                {
                  "key": "D",
                  "text": "Government bans on indoor lighting"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'High initial capital expenditures... substantial electricity consumption from artificial lighting'."
            },
            {
              "id": "R38",
              "question": "The word 'expenditures' in paragraph 4 is closest in meaning to:",
              "options": [
                {
                  "key": "A",
                  "text": "expenses and investments"
                },
                {
                  "key": "B",
                  "text": "profits and dividends"
                },
                {
                  "key": "C",
                  "text": "discounts and sales"
                },
                {
                  "key": "D",
                  "text": "debts and loans"
                }
              ],
              "correctAnswer": "A",
              "explanation": "'Capital expenditures' = chi phí đầu tư vốn (expenses, spending, capital outlays)."
            },
            {
              "id": "R39",
              "question": "Which of the following locations is NOT mentioned in paragraph 2 as a site for vertical farming?",
              "options": [
                {
                  "key": "A",
                  "text": "Abandoned warehouses"
                },
                {
                  "key": "B",
                  "text": "Basements"
                },
                {
                  "key": "C",
                  "text": "Shipping containers"
                },
                {
                  "key": "D",
                  "text": "Deep sea submarines"
                }
              ],
              "correctAnswer": "D",
              "explanation": "Tàu ngầm biển sâu (submarines) hoàn toàn không được nhắc đến."
            },
            {
              "id": "R40",
              "question": "What factor is essential for the future commercial success of vertical farming?",
              "options": [
                {
                  "key": "A",
                  "text": "Increased coal burning subsidies"
                },
                {
                  "key": "B",
                  "text": "Continued declines in renewable energy costs and higher LED efficiencies"
                },
                {
                  "key": "C",
                  "text": "A return to horse-plowed farming methods"
                },
                {
                  "key": "D",
                  "text": "Prohibiting all urban grocery supermarkets"
                }
              ],
              "correctAnswer": "B",
              "explanation": "'hinges on continued declines in renewable energy costs and specialized LED efficiencies'."
            }
          ]
        }
      ]
    },
    "writing": {
      "time": 60,
      "task1": {
        "title": "Task 1: Viết Thư Yêu Cầu Thông Tin (Chiếm 1/3 điểm - 20 phút - Tối thiểu 120 từ)",
        "prompt": "You are planning to attend an intensive English summer course at an international university in Singapore. Write an email to the Admissions Office to inquire about course details.\nIn your letter:\n- State your current English proficiency level and reasons for enrolling\n- Inquire about course tuition fees, class schedules, and accommodation options\n- Ask about scholarship opportunities or early-bird discounts.",
        "sampleModel": "Dear Admissions Office,\n\nI am writing to inquire about the intensive English summer program scheduled to commence this upcoming July at your esteemed university in Singapore.\n\nCurrently, I am a third-year undergraduate student in Vietnam with an intermediate English proficiency level (CEFR B1). My primary goal is to refine my academic writing and presentation skills in preparation for prospective master's degree studies abroad.\n\nCould you please provide detailed information regarding the comprehensive tuition fees, course duration, and weekly class schedules? In addition, I would appreciate knowing whether on-campus dormitory accommodation is available for international students, along with the estimated monthly living expenses.\n\nLastly, I would be grateful if you could clarify if there are any early-bird registration discounts or merit-based partial scholarships for international applicants.\n\nThank you for your assistance. I look forward to receiving your response.\n\nYours sincerely,\nNguyen Minh Tri"
      },
      "task2": {
        "title": "Task 2: Viết Bài Luận Học Thuật (Chiếm 2/3 điểm - 40 phút - Tối thiểu 250 từ)",
        "prompt": "Some people believe that university students should focus only on academic subjects related to their future career, while others think they should study a wide range of subjects. Discuss both views and give your opinion.\nGive reasons for your answer and include relevant examples.",
        "sampleModel": "Higher education institutions play a pivotal role in equipping students for professional careers and personal growth. While some argue that university curricula should strictly focus on career-specific subjects, others contend that exposing undergraduates to diverse disciplines yields greater long-term benefits. This essay will examine both perspectives before presenting my own viewpoint.\n\nOn the one hand, advocates of specialized vocational education maintain that focusing exclusively on core professional subjects ensures high technical competency upon graduation. In highly competitive modern industries such as software engineering, medicine, and architecture, students must master intricate technical skills within a limited four-year timeframe. Eliminating peripheral subjects allows learners to dedicate more time to laboratory experiments, practical internships, and professional certification, thereby enhancing their immediate employability.\n\nOn the other hand, proponents of broad-based multidisciplinary education emphasize the importance of cultivating well-rounded cognitive abilities. Studying humanities, philosophy, and environmental science enhances critical thinking, intercultural empathy, and communication skills. In an era marked by rapid technological disruption and artificial intelligence, professionals frequently transition across multiple industries throughout their careers. Therefore, interdisciplinary knowledge and cognitive flexibility are indispensable assets that narrow technical training alone cannot provide.\n\nIn my opinion, a balanced curriculum combining deep domain specialization with foundational interdisciplinary electives represents the ideal educational framework. While students must attain rigorous mastery in their chosen major, introductory courses in business ethics, digital literacy, and psychology foster adaptable problem-solving capabilities.\n\nIn conclusion, while specialized vocational training enhances direct job readiness, broad multidisciplinary education equips graduates with versatile lifelong skills. A harmonious synthesis of both approaches ensures enduring success in an ever-evolving global economy."
      }
    },
    "speaking": {
      "time": 12,
      "part1": {
        "title": "Part 1: Social Interaction (3 phút)",
        "topic1": "Topic 1: Daily Habits & Productivity",
        "topic1Questions": [
          {
            "q": "What is your typical daily morning routine?",
            "sample": "To be honest, I usually wake up around 6:30 AM, drink a glass of warm water, and spend fifteen minutes doing light stretching exercises. Afterward, I prepare a nutritious breakfast and review my daily task list before heading to class."
          },
          {
            "q": "Do you prefer studying in the morning or at night?",
            "sample": "Personally, I find morning study sessions considerably more productive because my mind is fresh and undisturbed by social media notifications. Studying in the quiet morning atmosphere helps me retain complex concepts much faster."
          }
        ],
        "topic2": "Topic 2: Hobbies & Leisure Time",
        "topic2Questions": [
          {
            "q": "What do you enjoy doing during your free time?",
            "sample": "Whenever I have leisure time, I am passionate about reading personal development books and playing acoustic guitar. Engaging in music allows me to relieve mental stress after grueling study sessions."
          },
          {
            "q": "Did your hobbies change compared to when you were a child?",
            "sample": "Yes, absolutely. As a child, I spent countless hours playing outdoor hide-and-seek and video games. Nowadays, I gravitate towards creative and constructive activities like photography and landscape painting."
          }
        ]
      },
      "part2": {
        "title": "Part 2: Solution Discussion (4 phút)",
        "situation": "Your university English club is deciding on the best format for their end-of-term celebration. There are three options:\n1. Having a formal dinner banquet at a luxury restaurant\n2. Organizing an outdoor camping and team-building trip in a pine forest\n3. Hosting a movie night and potluck party in the university auditorium\nWhich option do you think is the best choice?",
        "bestOption": "Option 2: Organizing an outdoor camping and team-building trip",
        "sampleSpeech": "Good morning examiner. Faced with the situation of selecting the most suitable celebration for our English club, among the three proposed options, I would firmly choose Option 2—organizing an outdoor camping and team-building trip.\n\nFirst and foremost, an outdoor camping trip provides an authentic communal environment where members can participate in collaborative games, sit around a campfire, and foster meaningful interpersonal bonds. It is far more memorable and engaging than merely sitting passively.\n\nIn addition, camping is highly budget-friendly for university students, whereas Option 1 (a luxury restaurant banquet) is excessively exorbitant and financially burdensome for many members. Furthermore, Option 3 (a movie night) lacks active verbal interaction, which defeats the core purpose of an English club.\n\nTaking all factors into account, the outdoor camping excursion is undeniably the optimal solution."
      },
      "part3": {
        "title": "Part 3: Topic Development (5 phút)",
        "topic": "The Benefits of Lifelong Learning in the Digital Era",
        "mindMap": {
          "idea1": "Career Adaptability & Up-skilling",
          "idea2": "Cognitive Health & Mental Sharpness",
          "idea3": "Personal Fulfillment & Confidence",
          "ownIdea": "Bridging Intergenerational Gaps"
        },
        "sampleSpeech": "Good morning examiner. Today, I would like to deliver my presentation regarding the key benefits of lifelong learning in our modern digital society.\n\nFirstly, continuous learning guarantees career adaptability. As technological innovations automate traditional jobs, up-skilling through online courses enables professionals to remain competitive and acquire high-demand digital proficiencies.\n\nSecondly, engaging in intellectual pursuits preserves cognitive health and mental agility. Studies demonstrate that stimulating the brain with new languages or skills substantially delays age-related cognitive decline.\n\nFinally, my own personal perspective is that lifelong learning bridges intergenerational gaps, allowing older generations to communicate effectively with digital-native youth.\n\nIn conclusion, lifelong learning is indispensable for both individual self-actualization and overall social progress.",
        "followUp": [
          {
            "q": "How can governments encourage elderly citizens to embrace digital technology?",
            "a": "Governments can establish free community computer workshops in local cultural centers and recruit patient university volunteers to provide hands-on smartphone coaching for seniors."
          },
          {
            "q": "Do you believe children are learning too much through screens nowadays?",
            "a": "While digital learning offers interactive advantages, excessive screen time can cause digital eye strain and diminish real-world physical play. A balanced approach with scheduled screen breaks is vital."
          }
        ]
      }
    }
  },
  exam07,
  exam08,
  exam09,
  exam10
];
