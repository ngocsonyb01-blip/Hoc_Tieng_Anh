/**
 * src/data/tests/exam10.js
 * Đề Thi Chuẩn VSTEP Số 10 (Bộ Đề Tổng Hợp Về Đích ĐHQG Hà Nội)
 * Đầy đủ 4 kỹ năng:
 * - Listening: 35 câu (Hội thoại tự nhiên, ngữ cảnh thực tế, nhấn nhá ngữ điệu)
 * - Reading: 40 câu (4 bài đọc học thuật chuẩn format)
 * - Writing: 2 Tasks (Thư cảm ơn & góp ý diễn giả + Luận Tăng trưởng kinh tế vs Bảo vệ môi trường)
 * - Speaking: 3 Parts (Khu dân cư & Công nghệ thông minh, Địa điểm tổ chức hội nghị thanh niên, Học tập suốt đời)
 */

export const exam10 = {
  id: "vstep-exam-10",
  name: "Đề Thi Chuẩn VSTEP Số 10 (Bộ Đề Tổng Hợp Về Đích ĐHQG Hà Nội)",
  badge: "Đề Thi Chuẩn Về Đích B1-B2",
  difficulty: "Chuẩn B1-B2 Quốc Gia",
  description: "Bộ đề thi mô phỏng hoàn chỉnh kỳ thi VSTEP bậc 3-5 theo định dạng ĐHQG Hà Nội. Hệ thống bài nghe đa dạng âm sắc, câu hỏi đọc phân tích sâu, đề viết và nói thực chiến.",

  // ==========================================
  // 1. LISTENING (35 Questions - 40 Mins)
  // ==========================================
  listening: {
    time: 40,
    totalQuestions: 35,
    part1: {
      title: "Part 1: 8 Thông Báo & Đối Thoại Ngắn (8 câu)",
      instructions: "Trong phần này, bạn sẽ nghe 8 đoạn thông báo hoặc hội thoại ngắn. Mỗi đoạn có 1 câu hỏi kèm 4 lựa chọn A, B, C, D. Hãy chọn phương án đúng nhất.",
      questions: [
        {
          id: "L1",
          question: "What should passengers traveling to Tokyo on flight VN310 do?",
          options: [
            "Proceed immediately to boarding gate 24B",
            "Collect their updated meal vouchers at counter 5",
            "Remain in the departure lounge for further gate instructions",
            "Report to the customer service desk to reschedule"
          ],
          answer: 0,
          explanation: "Thông báo tại sân bay nêu rõ: 'Passengers booked on Vietnam Airlines flight VN310 bound for Tokyo Narita please be advised that boarding has now commenced at gate 24B.' Do đó hành khách cần di chuyển ngay đến cổng 24B.",
          audio: {
            script: "Airport Announcer: Attention all passengers on Vietnam Airlines flight VN310 bound for Tokyo Narita. We are pleased to announce that boarding has now commenced at Gate 24B. Please ensure you have your boarding passes and passports ready in hand for immediate inspection.",
            text: "Attention all passengers on Vietnam Airlines flight VN310 bound for Tokyo Narita. We are pleased to announce that boarding has now commenced at Gate 24B. Please ensure you have your boarding passes and passports ready in hand for immediate inspection."
          }
        },
        {
          id: "L2",
          question: "Why is the dental clinic calling Mr. Henderson?",
          options: [
            "To remind him to settle an overdue invoice",
            "To reschedule his cleaning appointment to Friday afternoon",
            "To confirm his routine check-up for tomorrow morning",
            "To advise him about fasting before surgical treatment"
          ],
          answer: 1,
          explanation: "Nhân viên phòng khám nha khoa gọi điện để dời lịch hẹn khám từ sáng thứ Năm sang chiều thứ Sáu do bác sĩ có ca phẫu thuật khẩn cấp: 'Dr. Evans has an emergency surgery... we would like to reschedule your cleaning to Friday at 2:30 PM.'",
          audio: {
            script: "Receptionist: Good afternoon, Mr. Henderson. This is Clara from Riverside Dental Care calling regarding your appointment scheduled for tomorrow morning. Unfortunately, Dr. Evans has an emergency dental surgery, so we would like to reschedule your cleaning to Friday at 2:30 PM if that suits your schedule. Please call us back at your earliest convenience.",
            text: "Good afternoon, Mr. Henderson. This is Clara from Riverside Dental Care calling regarding your appointment scheduled for tomorrow morning. Unfortunately, Dr. Evans has an emergency dental surgery, so we would like to reschedule your cleaning to Friday at 2:30 PM if that suits your schedule. Please call us back at your earliest convenience."
          }
        },
        {
          id: "L3",
          question: "How can students receive a waiver for their overdue library fees?",
          options: [
            "By donating at least two used textbooks in good condition",
            "By volunteering three hours at the library sorting desk",
            "By returning books during the upcoming Amnesty Week",
            "By submitting an appeal form signed by their academic advisor"
          ],
          answer: 2,
          explanation: "Thủ thư thông báo: 'During our annual Library Amnesty Week starting next Monday, all outstanding overdue fines will be completely waived upon the return of borrowed items.'",
          audio: {
            script: "Librarian: Good morning students. We are happy to announce our annual Library Amnesty Week starting next Monday! All outstanding overdue fines will be completely waived as long as you return your borrowed books during this period. Take this opportunity to clear your library accounts without paying any penalty.",
            text: "Good morning students. We are happy to announce our annual Library Amnesty Week starting next Monday! All outstanding overdue fines will be completely waived as long as you return your borrowed books during this period. Take this opportunity to clear your library accounts without paying any penalty."
          }
        },
        {
          id: "L4",
          question: "Why will Route 15 buses detour through Oakridge Avenue?",
          options: [
            "A marathon race is scheduled in the downtown core",
            "Urgent water pipe replacement is blocking Main Street",
            "Heavy snowfall has made downtown roads impassable",
            "The central bus terminal is undergoing platform renovations"
          ],
          answer: 1,
          explanation: "Thông báo giao thông xe buýt cho biết: 'Due to urgent municipal water pipe repairs along Main Street, all Route 15 buses will temporarily detour via Oakridge Avenue.'",
          audio: {
            script: "Transit Dispatcher: Commuters please note: due to urgent municipal water pipe repairs along Main Street, all Route 15 outbound buses will temporarily detour via Oakridge Avenue until 6 PM today. Three central stops will be bypassed, so please utilize the temporary boarding platform near the public library.",
            text: "Commuters please note: due to urgent municipal water pipe repairs along Main Street, all Route 15 outbound buses will temporarily detour via Oakridge Avenue until 6 PM today. Three central stops will be bypassed, so please utilize the temporary boarding platform near the public library."
          }
        },
        {
          id: "L5",
          question: "What is special about the museum's new weekend exhibition?",
          options: [
            "Visitors can touch and interact with 3D replicated artifacts",
            "Admission tickets are fifty percent off for college students",
            "Original Renaissance oil paintings are displayed in Asia for the first time",
            "A renowned French curator will conduct personal guided tours"
          ],
          answer: 0,
          explanation: "Người thuyết minh giới thiệu triển lãm đặc biệt cho phép khách sờ và tương tác trực tiếp với mô hình 3D: 'Visitors of all ages are encouraged to touch, handle, and interact with full-scale 3D replicated ancient artifacts.'",
          audio: {
            script: "Museum Guide: Welcome to the City Museum's special preview! Unlike traditional silent galleries where touching displays is forbidden, our new interactive archaeology exhibit encourages visitors of all ages to touch, handle, and interact directly with tactile full-scale 3D replicated artifacts from ancient civilizations.",
            text: "Welcome to the City Museum's special preview! Unlike traditional silent galleries where touching displays is forbidden, our new interactive archaeology exhibit encourages visitors of all ages to touch, handle, and interact directly with tactile full-scale 3D replicated artifacts from ancient civilizations."
          }
        },
        {
          id: "L6",
          question: "Under what condition can electronic gadgets be returned for a full refund?",
          options: [
            "Within thirty days if accompanied by the original box and receipt",
            "Within fourteen days even if the packaging seal is broken",
            "Only if an identical replacement model is out of stock",
            "Within sixty days with a valid store membership card"
          ],
          answer: 0,
          explanation: "Quản lý cửa hàng điện máy nêu rõ chính sách hoàn tiền 100%: 'Returns for a full refund are accepted within 30 days of purchase, provided items are undamaged in their original packaging and accompanied by a valid sales receipt.'",
          audio: {
            script: "Store Manager: Hi there! Regarding our return policy on electronic goods: customers are entitled to a full refund within thirty days of purchase, provided the product remains in pristine condition inside its original packaging with all included accessories and the printed purchase receipt.",
            text: "Hi there! Regarding our return policy on electronic goods: customers are entitled to a full refund within thirty days of purchase, provided the product remains in pristine condition inside its original packaging with all included accessories and the printed purchase receipt."
          }
        },
        {
          id: "L7",
          question: "What weather advice is given to local citrus farmers tonight?",
          options: [
            "Harvest all ripe fruits before heavy rainfall begins",
            "Cover vulnerable young trees to prevent damage from severe frost",
            "Increase irrigation water levels to combat drought conditions",
            "Prune tall branches ahead of high gale-force winds"
          ],
          answer: 1,
          explanation: "Bản tin thời tiết cảnh báo nhiệt độ xuống dưới 0 độ C gây sương muối và khuyên người trồng cây che chắn: 'Temperatures will plummet below freezing tonight, so citrus farmers are strongly urged to cover vulnerable young trees to mitigate frost damage.'",
          audio: {
            script: "Meteorologist: A severe cold front is moving into the northern valleys this evening. With overnight temperatures forecast to plummet below freezing point, citrus farmers and horticulturists are strongly urged to cover sensitive young crops and activate thermal heaters to safeguard against devastating ground frost.",
            text: "A severe cold front is moving into the northern valleys this evening. With overnight temperatures forecast to plummet below freezing point, citrus farmers and horticulturists are strongly urged to cover sensitive young crops and activate thermal heaters to safeguard against devastating ground frost."
          }
        },
        {
          id: "L8",
          question: "What is included free of charge in the hotel's conference package?",
          options: [
            "Complimentary buffet dinner for all registered delegates",
            "High-speed optical Wi-Fi and high-definition projector setup",
            "Airport limousine shuttle service for VIP keynote speakers",
            "Overnight accommodation vouchers for conference organizers"
          ],
          answer: 1,
          explanation: "Nhân viên khách sạn giải thích gói hội nghị: 'All conference packages include complimentary high-speed optical fiber Wi-Fi access along with professional HD projector setups.'",
          audio: {
            script: "Hotel Sales Agent: Thank you for considering the Grand Horizon Hotel for your corporate summit. Every executive seminar package includes complimentary high-speed optical fiber Wi-Fi throughout the venue as well as full dual-screen HD projector and sound system setup at no additional cost.",
            text: "Thank you for considering the Grand Horizon Hotel for your corporate summit. Every executive seminar package includes complimentary high-speed optical fiber Wi-Fi throughout the venue as well as full dual-screen HD projector and sound system setup at no additional cost."
          }
        }
      ]
    },

    part2: {
      title: "Part 2: 3 Đoạn Hội Thoại (12 câu)",
      instructions: "Trong phần này, bạn sẽ nghe 3 đoạn hội thoại. Mỗi đoạn hội thoại có 4 câu hỏi (từ câu 9 đến câu 20).",
      conversations: [
        {
          id: "C1",
          title: "Hội thoại 1: Lựa chọn vị trí thực tập tốt nghiệp (Câu 9 - 12)",
          context: "Hai sinh viên năm cuối ngành Quản trị Kinh doanh thảo luận về việc lựa chọn giữa thực tập tại tập đoàn đa quốc gia hay công ty khởi nghiệp công nghệ.",
          audio: {
            script: `Mark: Hey Sarah, have you made up your mind about summer internships yet? The deadline for submitting our preferences to the department is this Friday.
Sarah: Honestly Mark, I'm genuinely torn between two contrasting offers. I got accepted into Global Logistics, a Fortune 500 multinational, but I also received an enthusiastic invitation from InnovateX, an AI fintech startup downtown.
Mark: Wow, that's a fantastic dilemma to have! But they offer totally different career trajectories. What draws you toward Global Logistics?
Sarah: Well, prestige and brand recognition, obviously. Having their logo on my CV will open doors worldwide. They also have structured rotational training programs where mentors guide you step by step. But here's the catch: the duties look pretty narrow and administrative. I might just end up compiling spreadsheets all day.
Mark: Exactly my concern when I interned at a big bank last summer. At InnovateX, since their team is lean, you'd probably handle substantial client-facing tasks and design marketing campaigns from week two.
Sarah: You hit the nail on the head. In my interview with InnovateX's founder, she mentioned I'd be shadowing product managers and leading user feedback sessions. It's high responsibility, but the risk is fewer established training guidelines.
Mark: If your ultimate career aspiration is entrepreneurship or dynamic leadership, the startup environment will teach you resilience and cross-functional skills ten times faster.
Sarah: You're right. Plus, they actually offer hybrid flexibility, allowing two days of remote work each week. I think I'm going to email InnovateX this afternoon and decline Global Logistics politely.`,
            text: "Mark: Hey Sarah, have you made up your mind about summer internships yet? The deadline for submitting our preferences to the department is this Friday. Sarah: Honestly Mark, I'm genuinely torn between two contrasting offers. I got accepted into Global Logistics, a Fortune 500 multinational, but I also received an enthusiastic invitation from InnovateX, an AI fintech startup downtown. Mark: Wow, that's a fantastic dilemma to have! But they offer totally different career trajectories. What draws you toward Global Logistics? Sarah: Well, prestige and brand recognition, obviously. Having their logo on my CV will open doors worldwide. They also have structured rotational training programs where mentors guide you step by step. But here's the catch: the duties look pretty narrow and administrative. I might just end up compiling spreadsheets all day. Mark: Exactly my concern when I interned at a big bank last summer. At InnovateX, since their team is lean, you'd probably handle substantial client-facing tasks and design marketing campaigns from week two. Sarah: You hit the nail on the head. In my interview with InnovateX's founder, she mentioned I'd be shadowing product managers and leading user feedback sessions. It's high responsibility, but the risk is fewer established training guidelines. Mark: If your ultimate career aspiration is entrepreneurship or dynamic leadership, the startup environment will teach you resilience and cross-functional skills ten times faster. Sarah: You're right. Plus, they actually offer hybrid flexibility, allowing two days of remote work each week. I think I'm going to email InnovateX this afternoon and decline Global Logistics politely."
          },
          questions: [
            {
              id: "L9",
              question: "What is Sarah's main concern regarding the internship at Global Logistics?",
              options: [
                "The commute time to their suburban headquarters is too long",
                "The assigned work may be overly administrative and repetitive",
                "The stipend is significantly lower than standard industry rates",
                "The company requires six months of non-negotiable commitment"
              ],
              answer: 1,
              explanation: "Sarah lo ngại: 'the duties look pretty narrow and administrative. I might just end up compiling spreadsheets all day.'",
            },
            {
              id: "L10",
              question: "What responsibility will Sarah have if she joins InnovateX?",
              options: [
                "Drafting technical patent documents for financial software",
                "Conducting user feedback sessions and shadowing product managers",
                "Managing corporate legal disputes with international investors",
                "Overseeing the financial audit of tax documentation"
              ],
              answer: 1,
              explanation: "Sarah chia sẻ: 'she mentioned I'd be shadowing product managers and leading user feedback sessions.'",
            },
            {
              id: "L11",
              question: "What did Mark highlight from his own banking internship experience?",
              options: [
                "Large corporations often limit interns to narrow administrative tasks",
                "Financial banks provide higher bonuses upon project completion",
                "Mentors in banking rarely evaluate intern performance objectively",
                "Working overtime in financial sectors is mandatory for promotions"
              ],
              answer: 0,
              explanation: "Mark đồng tình: 'Exactly my concern when I interned at a big bank last summer', ủng hộ quan sát rằng các tập đoàn lớn thường giao các việc vụn vặt, gò bó.",
            },
            {
              id: "L12",
              question: "What additional perk convinced Sarah to choose the startup?",
              options: [
                "Free catered gourmet lunches every working day",
                "A fully funded trip to an international tech summit",
                "Hybrid flexibility with two days of remote work per week",
                "Guaranteed permanent job placement without probation"
              ],
              answer: 2,
              explanation: "Sarah nhấn mạnh: 'Plus, they actually offer hybrid flexibility, allowing two days of remote work each week.'",
            }
          ]
        },
        {
          id: "C2",
          title: "Hội thoại 2: Tổ chức Ngày hội Xanh tại trường đại học (Câu 13 - 16)",
          context: "Hai thành viên ban điều hành Hội Sinh viên bàn kế hoạch triển khai Ngày hội Sống Xanh (Green Living Campus Festival).",
          audio: {
            script: `David: Amanda, let's finalize the logistics for next month's Campus Green Living Festival. The Dean has officially approved our courtyard reservation for October 15th.
Amanda: That's great news! Now we must tackle our primary obstacle: minimizing single-use plastic waste generated during the event itself. It would be thoroughly ironic if an environmental festival left heaps of plastic bottles behind!
David: Absolutely. I've already negotiated with the campus water utility department. They agreed to install four mobile purified water refill stations across the main quad.
Amanda: Brilliant! And what about food vendors? Food stalls are usually the biggest culprits with disposable styrofoam containers.
David: We are mandating a strict zero-single-use container policy. All approved food vendors must serve snacks in compostable sugarcane fiber boxes or banana leaves. Furthermore, students who bring their own reusable bowls and thermal tumblers will receive an automatic twenty percent discount at every stall.
Amanda: That discount incentive will motivate widespread student participation. What about the student workshops? Have we locked in any guest facilitators?
David: Yes, Dr. Eleanor Vance from Environmental Engineering agreed to lead an interactive electronic waste upcycling workshop in the morning. In the afternoon, a local community cooperative will teach organic balcony gardening.
Amanda: Excellent lineup! How should we handle publicity? Traditional glossy printed flyers contradict our green ethos.
David: We'll rely exclusively on digital marketing: interactive Instagram reels, QR code posters printed on recycled cardboard, and broadcast emails through the student portal.`,
            text: "David: Amanda, let's finalize the logistics for next month's Campus Green Living Festival. The Dean has officially approved our courtyard reservation for October 15th. Amanda: That's great news! Now we must tackle our primary obstacle: minimizing single-use plastic waste generated during the event itself. It would be thoroughly ironic if an environmental festival left heaps of plastic bottles behind! David: Absolutely. I've already negotiated with the campus water utility department. They agreed to install four mobile purified water refill stations across the main quad. Amanda: Brilliant! And what about food vendors? Food stalls are usually the biggest culprits with disposable styrofoam containers. David: We are mandating a strict zero-single-use container policy. All approved food vendors must serve snacks in compostable sugarcane fiber boxes or banana leaves. Furthermore, students who bring their own reusable bowls and thermal tumblers will receive an automatic twenty percent discount at every stall. Amanda: That discount incentive will motivate widespread student participation. What about the student workshops? Have we locked in any guest facilitators? David: Yes, Dr. Eleanor Vance from Environmental Engineering agreed to lead an interactive electronic waste upcycling workshop in the morning. In the afternoon, a local community cooperative will teach organic balcony gardening. Amanda: Excellent lineup! How should we handle publicity? Traditional glossy printed flyers contradict our green ethos. David: We'll rely exclusively on digital marketing: interactive Instagram reels, QR code posters printed on recycled cardboard, and broadcast emails through the student portal."
          },
          questions: [
            {
              id: "L13",
              question: "What is the primary concern raised by Amanda regarding the festival?",
              options: [
                "Securing sufficient funding from corporate corporate sponsors",
                "Preventing the festival itself from generating excessive plastic waste",
                "Overcoming potential student disinterest in academic lectures",
                "Rescheduling the event due to unpredictable autumn rain"
              ],
              answer: 1,
              explanation: "Amanda nêu rõ: 'minimizing single-use plastic waste generated during the event itself. It would be thoroughly ironic if an environmental festival left heaps of plastic bottles behind!'",
            },
            {
              id: "L14",
              question: "How will students who bring reusable food containers be rewarded?",
              options: [
                "They will receive free raffle tickets for an electric scooter",
                "They will get an automatic twenty percent discount at all food stalls",
                "They will be given free admission to the evening music concert",
                "They will earn extra academic credits for physical education"
              ],
              answer: 1,
              explanation: "David thông báo: 'students who bring their own reusable bowls and thermal tumblers will receive an automatic twenty percent discount at every stall.'",
            },
            {
              id: "L15",
              question: "What topic will Dr. Eleanor Vance cover in her morning workshop?",
              options: [
                "Upcycling and recycling electronic waste",
                "Composting organic cafeteria food scraps",
                "Constructing miniature solar energy panels",
                "Balcony horticulture and rooftop farming"
              ],
              answer: 0,
              explanation: "David nói: 'Dr. Eleanor Vance from Environmental Engineering agreed to lead an interactive electronic waste upcycling workshop in the morning.'",
            },
            {
              id: "L16",
              question: "Why will organizers avoid traditional paper flyers for promotion?",
              options: [
                "Printing costs exceed their total marketing budget allocation",
                "Campus regulations forbid distributing handbills along walkways",
                "Printed flyers contradict the environmental principles of the event",
                "Local print shops require three weeks of advance notice"
              ],
              answer: 2,
              explanation: "Amanda nhận định: 'Traditional glossy printed flyers contradict our green ethos.' Do đó họ dùng kênh truyền thông số và bìa tái chế.",
            }
          ]
        },
        {
          id: "C3",
          title: "Hội thoại 3: Đăng ký thành viên Không gian làm việc chung (Câu 17 - 20)",
          context: "Một nhân viên làm việc từ xa (freelancer) tìm hiểu về các gói thẻ thành viên tại một co-working space hiện đại.",
          audio: {
            script: `Consultant: Good morning, welcome to Nexus Co-Working Hub! How can I assist your productivity today?
Jason: Hi! I'm an independent software architect and I've been working from home for the past two years. While it was comfortable at first, the boundary between my personal life and work has completely blurred. I need a focused, professional environment.
Consultant: You've certainly come to the right place! We offer three distinct tiers designed for professionals like you: the Hot Desk Pass, the Dedicated Desk Membership, and Private Micro-Suites.
Jason: Could you elaborate on the difference between the Hot Desk and Dedicated Desk options?
Consultant: Certainly. With the Hot Desk Pass, you have access to any open ergonomic workstation in our sunlit collaborative lounge. It includes high-speed fiber internet, unlimited barista-crafted coffee, and three hours of private phone booth usage daily. However, you pack up your equipment at the end of each day.
Jason: And the Dedicated Desk?
Consultant: The Dedicated Desk gives you your own assigned personal desk with an ultra-wide monitor, lockable storage drawers, and 24/7 biometric keyless access. Plus, it includes ten monthly conference room booking credits and business mailing address registration.
Jason: The Dedicated Desk sounds ideal since I dislike packing up my dual external keyboards and monitors every evening. Are there meeting rooms if I need to conduct video calls with European clients in the evening?
Consultant: Absolutely! Our acoustic soundproof conference rooms are equipped with noise-cancelling microphones and 4K conferencing cameras. And because our Dedicated members enjoy round-the-clock access, you can book rooms easily through our mobile app at 9 PM or midnight.
Jason: That fits my schedule perfectly. Can I start with a three-month trial?
Consultant: Of course! If you enroll for three months today, we'll waive the one-time registration fee and include five additional guest day passes.`,
            text: "Consultant: Good morning, welcome to Nexus Co-Working Hub! How can I assist your productivity today? Jason: Hi! I'm an independent software architect and I've been working from home for the past two years. While it was comfortable at first, the boundary between my personal life and work has completely blurred. I need a focused, professional environment. Consultant: You've certainly come to the right place! We offer three distinct tiers designed for professionals like you: the Hot Desk Pass, the Dedicated Desk Membership, and Private Micro-Suites. Jason: Could you elaborate on the difference between the Hot Desk and Dedicated Desk options? Consultant: Certainly. With the Hot Desk Pass, you have access to any open ergonomic workstation in our sunlit collaborative lounge. It includes high-speed fiber internet, unlimited barista-crafted coffee, and three hours of private phone booth usage daily. However, you pack up your equipment at the end of each day. Jason: And the Dedicated Desk? Consultant: The Dedicated Desk gives you your own assigned personal desk with an ultra-wide monitor, lockable storage drawers, and 24/7 biometric keyless access. Plus, it includes ten monthly conference room booking credits and business mailing address registration. Jason: The Dedicated Desk sounds ideal since I dislike packing up my dual external keyboards and monitors every evening. Are there meeting rooms if I need to conduct video calls with European clients in the evening? Consultant: Absolutely! Our acoustic soundproof conference rooms are equipped with noise-cancelling microphones and 4K conferencing cameras. And because our Dedicated members enjoy round-the-clock access, you can book rooms easily through our mobile app at 9 PM or midnight. Jason: That fits my schedule perfectly. Can I start with a three-month trial? Consultant: Of course! If you enroll for three months today, we'll waive the one-time registration fee and include five additional guest day passes."
          },
          questions: [
            {
              id: "L17",
              question: "Why did Jason decide to seek out a co-working space?",
              options: [
                "His home internet connection was unreliable during video calls",
                "He felt the boundary between personal life and work had blurred",
                "His employer mandated working from a certified commercial office",
                "He wanted to recruit new junior programmers for his startup"
              ],
              answer: 1,
              explanation: "Jason giải thích lý do: 'While it was comfortable at first, the boundary between my personal life and work has completely blurred. I need a focused, professional environment.'",
            },
            {
              id: "L18",
              question: "What is one limitation of the Hot Desk Pass compared to the Dedicated Desk?",
              options: [
                "Hot desk members are restricted from using communal kitchen facilities",
                "Hot desk members must pack up their personal equipment every day",
                "Hot desk users cannot access high-speed fiber optical Wi-Fi",
                "Hot desk users are prohibited from entering on weekends"
              ],
              answer: 1,
              explanation: "Nhân viên tư vấn nêu: 'However, you pack up your equipment at the end of each day.'",
            },
            {
              id: "L19",
              question: "Why is 24/7 access important for Jason's work routine?",
              options: [
                "He frequently works overnight shifts to debug critical software bugs",
                "He needs to conduct video conferences with European clients in the evening",
                "He prefers sleeping in the hub's designated nap pods during midday",
                "He teaches coding tutorials online to Australian students at dawn"
              ],
              answer: 1,
              explanation: "Jason hỏi: 'Are there meeting rooms if I need to conduct video calls with European clients in the evening?' và nhân viên xác nhận thành viên Dedicated có quyền ra vào 24/7.",
            },
            {
              id: "L20",
              question: "What promotional incentive is offered to Jason for signing a three-month plan?",
              options: [
                "A free high-end ergonomic desk chair delivered to his home",
                "Waiver of the registration fee plus five complimentary guest passes",
                "Fifty percent discount on monthly subscription payments for six months",
                "Free catering at the rooftop bistro every Friday afternoon"
              ],
              answer: 1,
              explanation: "Tư vấn viên kết luận: 'If you enroll for three months today, we'll waive the one-time registration fee and include five additional guest day passes.'",
            }
          ]
        }
      ]
    },

    part3: {
      title: "Part 3: 3 Bài Giảng / Thuyết Trình Học Thuật (15 câu)",
      instructions: "Trong phần này, bạn sẽ nghe 3 bài thuyết trình hoặc bài giảng học thuật. Mỗi bài có 5 câu hỏi (từ câu 21 đến câu 35).",
      talks: [
        {
          id: "T1",
          title: "Bài giảng 1: Khủng hoảng nước ngọt toàn cầu & Công nghệ khử mặn (Câu 21 - 25)",
          context: "Bài giảng chuyên ngành Kỹ thuật Tài nguyên Nước về các giải pháp công nghệ khử mặn nước biển đối phó với khan hiếm nước ngọt.",
          audio: {
            script: `Professor: Good afternoon, students. Today we examine what many hydrologists describe as the defining resource challenge of the twenty-first century: global freshwater scarcity. Although water covers over seventy percent of the Earth's surface, less than three percent is freshwater, and two-thirds of that is locked in glaciers and permanent snow caps. With global population expanding and climate change exacerbating arid weather patterns, coastal nations are increasingly looking toward the world's most abundant reservoir: our oceans.
The primary technological answer to ocean water utilization is desalination—the process of extracting dissolved mineral salts from saline water. Historically, desalination relied on thermal distillation, essentially boiling seawater and condensing pure steam. While effective, thermal distillation consumes staggering quantities of fossil fuels, making it economically and environmentally prohibitive for widespread adoption.
In recent decades, however, reverse osmosis, or RO technology, has revolutionized the sector. Reverse osmosis works on a mechanical principle: high-pressure pumps force seawater against specialized semi-permeable membranes. The microscopic pores in these polymer sheets permit water molecules to pass through while physically repelling sodium, chloride, and heavy minerals. Today, reverse osmosis accounts for roughly eighty-five percent of global operational desalination plants due to its superior thermodynamic efficiency.
Nevertheless, industrial desalination is not without severe environmental drawbacks. Foremost among these is hypersaline brine disposal. For every liter of potable water produced, an equivalent volume of hyper-concentrated brine—often blended with pre-treatment chemical coagulants—is discharged back into the marine ecosystem. If dumped in shallow coastal waters without diffusion nozzles, this dense, oxygen-depleted brine sinks to the seabed, devastating benthic organisms, coral reefs, and nursery grounds for fish.
Furthermore, the energy intensity of high-pressure RO pumps remains considerable. To attain true environmental sustainability, modern engineering is pivoting toward two frontiers: integrating off-grid marine desalination facilities with renewable energy arrays—such as offshore wind and floating solar—and developing advanced biomimetic membranes lined with natural water-channel proteins called aquaporins. These emerging innovations promise to slash energy consumption by an additional thirty percent over the coming decade.`,
            text: "Professor: Good afternoon, students. Today we examine what many hydrologists describe as the defining resource challenge of the twenty-first century: global freshwater scarcity. Although water covers over seventy percent of the Earth's surface, less than three percent is freshwater, and two-thirds of that is locked in glaciers and permanent snow caps. With global population expanding and climate change exacerbating arid weather patterns, coastal nations are increasingly looking toward the world's most abundant reservoir: our oceans. The primary technological answer to ocean water utilization is desalination—the process of extracting dissolved mineral salts from saline water. Historically, desalination relied on thermal distillation, essentially boiling seawater and condensing pure steam. While effective, thermal distillation consumes staggering quantities of fossil fuels, making it economically and environmentally prohibitive for widespread adoption. In recent decades, however, reverse osmosis, or RO technology, has revolutionized the sector. Reverse osmosis works on a mechanical principle: high-pressure pumps force seawater against specialized semi-permeable membranes. The microscopic pores in these polymer sheets permit water molecules to pass through while physically repelling sodium, chloride, and heavy minerals. Today, reverse osmosis accounts for roughly eighty-five percent of global operational desalination plants due to its superior thermodynamic efficiency. Nevertheless, industrial desalination is not without severe environmental drawbacks. Foremost among these is hypersaline brine disposal. For every liter of potable water produced, an equivalent volume of hyper-concentrated brine—often blended with pre-treatment chemical coagulants—is discharged back into the marine ecosystem. If dumped in shallow coastal waters without diffusion nozzles, this dense, oxygen-depleted brine sinks to the seabed, devastating benthic organisms, coral reefs, and nursery grounds for fish. Furthermore, the energy intensity of high-pressure RO pumps remains considerable. To attain true environmental sustainability, modern engineering is pivoting toward two frontiers: integrating off-grid marine desalination facilities with renewable energy arrays—such as offshore wind and floating solar—and developing advanced biomimetic membranes lined with natural water-channel proteins called aquaporins. These emerging innovations promise to slash energy consumption by an additional thirty percent over the coming decade."
          },
          questions: [
            {
              id: "L21",
              question: "What percentage of Earth's total water reserves is readily accessible as freshwater?",
              options: [
                "Roughly ten percent across rivers and natural aquifers",
                "Less than three percent, with most locked in ice caps and glaciers",
                "Approximately twenty-five percent in underground groundwater",
                "Nearly seven percent distributed across temperate lakes"
              ],
              answer: 1,
              explanation: "Giáo sư khẳng định: 'less than three percent is freshwater, and two-thirds of that is locked in glaciers and permanent snow caps.'",
            },
            {
              id: "L22",
              question: "Why has thermal distillation been largely superseded by reverse osmosis?",
              options: [
                "Thermal distillation cannot purify water containing organic pathogens",
                "Thermal distillation requires enormous amounts of fossil fuel energy",
                "Thermal distillation machinery suffers rapid corrosion from atmospheric nitrogen",
                "Thermal distillation is legally banned under maritime conservation treaties"
              ],
              answer: 1,
              explanation: "Giáo sư giải thích: 'While effective, thermal distillation consumes staggering quantities of fossil fuels, making it economically and environmentally prohibitive.'",
            },
            {
              id: "L23",
              question: "How do reverse osmosis membranes separate salt from seawater?",
              options: [
                "By heating water until chemical salt compounds break down chemically",
                "By forcing seawater under high pressure through microscopic pore filters",
                "By introducing synthetic enzymes that consume sodium crystals",
                "By using electrostatic magnetic fields to attract dissolved chlorine ions"
              ],
              answer: 1,
              explanation: "Giáo sư mô tả: 'high-pressure pumps force seawater against specialized semi-permeable membranes. The microscopic pores... permit water molecules to pass through while physically repelling sodium, chloride...'",
            },
            {
              id: "L24",
              question: "What ecological danger is posed by the improper discharge of desalination brine?",
              options: [
                "It causes massive toxic algae blooms across open oceanic waters",
                "It sinks to the seabed and suffocates benthic marine organisms",
                "It raises coastal sea surface temperatures by several degrees",
                "It accelerates coastal land erosion along sandy shores"
              ],
              answer: 1,
              explanation: "Giáo sư nêu rõ: 'this dense, oxygen-depleted brine sinks to the seabed, devastating benthic organisms, coral reefs, and nursery grounds for fish.'",
            },
            {
              id: "L25",
              question: "What future technological breakthrough could reduce desalination energy demands by thirty percent?",
              options: [
                "Using geothermal volcanic heat exchangers in deep subsea trenches",
                "Biomimetic membranes embedded with natural aquaporin proteins",
                "Ultrasonic acoustic waves to vibrate salt ions out of suspension",
                "Chemical crystallization towers powered by tidal wave motion"
              ],
              answer: 1,
              explanation: "Giáo sư nhấn mạnh giải pháp tương lai: 'developing advanced biomimetic membranes lined with natural water-channel proteins called aquaporins. These emerging innovations promise to slash energy consumption by an additional thirty percent.'",
            }
          ]
        },
        {
          id: "T2",
          title: "Bài giảng 2: Khoa học thần kinh về chánh niệm & Não bộ (Câu 26 - 30)",
          context: "Bài giảng chuyên ngành Khoa học Thần kinh Nhận thức (Cognitive Neuroscience) về tác động sinh học của thiền chánh niệm lên cấu trúc não người.",
          audio: {
            script: `Lecturer: Good morning, class. For centuries, mindfulness and meditation were perceived primarily as esoteric spiritual practices confined to Eastern philosophical traditions. Over the past two decades, however, breakthroughs in functional magnetic resonance imaging—or fMRI—and structural neuroimaging have firmly elevated mindfulness into an empirically proven branch of cognitive neuroscience. Today, we delve into how regular mindfulness practice physically alters the anatomical architecture of the human brain—a phenomenon known as neuroplasticity.
When neuroscientists examine the brain of a chronic stress sufferer, they consistently observe hyperactivity in the amygdala. The amygdala is our primitive, almond-shaped alarm center, responsible for initiating the 'fight-or-flight' hormonal response when we encounter perceived threats. In modern urban lifestyles, constant deadlines, notifications, and interpersonal tensions can trap the amygdala in a state of chronic hyper-arousal, flooding the bloodstream with elevated cortisol.
Remarkably, longitudinal MRI studies conducted at Harvard University demonstrated that just eight weeks of structured mindfulness-based stress reduction—consisting of roughly twenty-five minutes of daily focused-attention training—yielded measurable anatomical shifts. Most notably, researchers observed a physical reduction in the gray-matter density of the right amygdala. As the amygdala decreased in volume and reactivity, participants reported substantial declines in subjective perceived stress and social anxiety.
Simultaneously, neuroimaging reveals a compensatory thickening in the prefrontal cortex—specifically the dorsolateral prefrontal cortex. This region is the brain's executive control center, overseeing rational decision-making, sustained working memory, and emotional regulation. By strengthening the neural pathways between the prefrontal cortex and the limbic system, mindfulness enables individuals to pause between an emotional trigger and an impulsive reaction. Instead of being hijacked by sudden anger or panic, one cultivates a calm cognitive space for measured, deliberate responses.
Finally, mindfulness dramatically impacts the hippocampus, a seahorse-shaped structure essential for memory consolidation and spatial navigation. Chronic elevation of cortisol is notoriously toxic to hippocampal neurons, leading to premature cognitive decline. Mindfulness practices, conversely, stimulate brain-derived neurotrophic factor, fostering neurogenesis and preserving hippocampal volume even as we age. In summary, mindfulness is not merely passive relaxation; it is active mental weightlifting that fundamentally reorganizes neural circuitry for cognitive resilience.`,
            text: "Lecturer: Good morning, class. For centuries, mindfulness and meditation were perceived primarily as esoteric spiritual practices confined to Eastern philosophical traditions. Over the past two decades, however, breakthroughs in functional magnetic resonance imaging—or fMRI—and structural neuroimaging have firmly elevated mindfulness into an empirically proven branch of cognitive neuroscience. Today, we delve into how regular mindfulness practice physically alters the anatomical architecture of the human brain—a phenomenon known as neuroplasticity. When neuroscientists examine the brain of a chronic stress sufferer, they consistently observe hyperactivity in the amygdala. The amygdala is our primitive, almond-shaped alarm center, responsible for initiating the 'fight-or-flight' hormonal response when we encounter perceived threats. In modern urban lifestyles, constant deadlines, notifications, and interpersonal tensions can trap the amygdala in a state of chronic hyper-arousal, flooding the bloodstream with elevated cortisol. Remarkably, longitudinal MRI studies conducted at Harvard University demonstrated that just eight weeks of structured mindfulness-based stress reduction—consisting of roughly twenty-five minutes of daily focused-attention training—yielded measurable anatomical shifts. Most notably, researchers observed a physical reduction in the gray-matter density of the right amygdala. As the amygdala decreased in volume and reactivity, participants reported substantial declines in subjective perceived stress and social anxiety. Simultaneously, neuroimaging reveals a compensatory thickening in the prefrontal cortex—specifically the dorsolateral prefrontal cortex. This region is the brain's executive control center, overseeing rational decision-making, sustained working memory, and emotional regulation. By strengthening the neural pathways between the prefrontal cortex and the limbic system, mindfulness enables individuals to pause between an emotional trigger and an impulsive reaction. Instead of being hijacked by sudden anger or panic, one cultivates a calm cognitive space for measured, deliberate responses. Finally, mindfulness dramatically impacts the hippocampus, a seahorse-shaped structure essential for memory consolidation and spatial navigation. Chronic elevation of cortisol is notoriously toxic to hippocampal neurons, leading to premature cognitive decline. Mindfulness practices, conversely, stimulate brain-derived neurotrophic factor, fostering neurogenesis and preserving hippocampal volume even as we age. In summary, mindfulness is not merely passive relaxation; it is active mental weightlifting that fundamentally reorganizes neural circuitry for cognitive resilience."
          },
          questions: [
            {
              id: "L26",
              question: "What neuroscientific concept explains the brain's capacity to alter its physical structure through mental practice?",
              options: [
                "Synaptic pruning",
                "Neuroplasticity",
                "Cortical blindness",
                "Cognitive dissonance"
              ],
              answer: 1,
              explanation: "Giảng viên giới thiệu hiện tượng: 'physically alters the anatomical architecture of the human brain—a phenomenon known as neuroplasticity.'",
            },
            {
              id: "L27",
              question: "What change in the amygdala was observed after eight weeks of mindfulness training?",
              options: [
                "A dramatic surge in dopamine receptor density",
                "A measurable reduction in gray-matter volume and reactivity",
                "A complete cessation of electrical neural impulses",
                "An irreversible calcification of protective glial cells"
              ],
              answer: 1,
              explanation: "Giảng viên nêu kết quả nghiên cứu của Harvard: 'researchers observed a physical reduction in the gray-matter density of the right amygdala. As the amygdala decreased in volume and reactivity...'",
            },
            {
              id: "L28",
              question: "Which cognitive capability is governed by the prefrontal cortex?",
              options: [
                "Automatic regulation of respiratory and heart rates",
                "Executive control, rational decision-making, and emotional regulation",
                "Direct perception of peripheral visual fields and balance",
                "Reflexive physical withdrawal from painful stimuli"
              ],
              answer: 1,
              explanation: "Giảng viên mô tả: 'the prefrontal cortex... overseeing rational decision-making, sustained working memory, and emotional regulation.'",
            },
            {
              id: "L29",
              question: "How does mindfulness counteract the neurotoxic impact of chronic cortisol on the hippocampus?",
              options: [
                "By blocking all bloodstream circulation to the inner ear",
                "By stimulating neurotrophic factors that encourage neurogenesis and volume preservation",
                "By inducing deep artificial comas during slow-wave sleep cycles",
                "By lowering daily caloric consumption through appetite suppression"
              ],
              answer: 1,
              explanation: "Giảng viên phân tích: 'Mindfulness practices, conversely, stimulate brain-derived neurotrophic factor, fostering neurogenesis and preserving hippocampal volume...'",
            },
            {
              id: "L30",
              question: "What metaphor did the lecturer use to summarize the nature of mindfulness practice?",
              options: [
                "A defensive fortress safeguarding fragile memories",
                "Active mental weightlifting that reorganizes neural circuitry",
                "A gentle river cleansing polluted emotional channels",
                "A mirror reflecting unfiltered sensory impressions"
              ],
              answer: 1,
              explanation: "Giảng viên kết luận: 'In summary, mindfulness is not merely passive relaxation; it is active mental weightlifting that fundamentally reorganizes neural circuitry for cognitive resilience.'",
            }
          ]
        },
        {
          id: "T3",
          title: "Bài giảng 3: Biến đổi khí hậu & Sự gián đoạn di cư của động vật hoang dã (Câu 31 - 35)",
          context: "Bài giảng môn Sinh thái học & Bảo tồn Động vật Hoang dã (Ecology & Conservation Biology) về ảnh hưởng của hiện tượng nóng lên toàn cầu tới các loài động vật di cư.",
          audio: {
            script: `Speaker: Welcome back, everyone. Today our discussion centers on ecological phenology—specifically, how anthropogenic climate disruption is uncoupling millions of years of evolutionary synchronization in migratory wildlife. Animal migration is one of nature's most magnificent spectacles, involving thousands of species traversing continents and oceans in pursuit of food, favorable weather, and breeding grounds.
For millennia, migratory journeys were reliably calibrated against environmental triggers: photoperiod—which is the length of daylight—and ambient temperature cues. However, while day length remains fixed by planetary mechanics, global temperature benchmarks are shifting unpredictably. This divergence creates what conservation biologists term 'phenological mismatch.'
Consider the pied flycatcher, an iconic small songbird that winters in tropical sub-Saharan Africa and breeds in European temperate woodlands. Historically, these birds timed their spring arrival in Europe precisely to coincide with the hatching peak of oak caterpillars—their nestlings' primary food source. With spring warming arriving two to three weeks earlier across Europe, the caterpillars now emerge and pupate weeks ahead of schedule. When the flycatchers arrive, the food abundance peak has already passed. Consequently, chick starvation rates have escalated, precipitating catastrophic population declines exceeding ninety percent in some European forest regions.
This dilemma is equally acute in marine and terrestrial megafauna. In the Arctic, caribou herds migrate hundreds of kilometers north each spring to calf on coastal tundra grasslands. Historically, maternal calving coincided with the sudden burst of high-protein arctic plants. Now, warming temperatures trigger plant emergence weeks before the herds complete their arduous journey, leaving mothers with fibrous, nutrient-depleted forage during lactation. In the oceans, North Atlantic right whales, whose migration tracks the dense blooms of calanoid copepods, find their prey shifting thousands of miles poleward into unprotected shipping corridors, causing lethal ship strikes and fishing gear entanglements.
To mitigate these compounding extinction risks, modern wildlife management must transition beyond static, isolated nature reserves. We urgently need dynamic migratory super-corridors: trans-boundary ecological networks that actively shift protections in real time as species adjust their migratory corridors in response to a rapidly changing biosphere.`,
            text: "Speaker: Welcome back, everyone. Today our discussion centers on ecological phenology—specifically, how anthropogenic climate disruption is uncoupling millions of years of evolutionary synchronization in migratory wildlife. Animal migration is one of nature's most magnificent spectacles, involving thousands of species traversing continents and oceans in pursuit of food, favorable weather, and breeding grounds. For millennia, migratory journeys were reliably calibrated against environmental triggers: photoperiod—which is the length of daylight—and ambient temperature cues. However, while day length remains fixed by planetary mechanics, global temperature benchmarks are shifting unpredictably. This divergence creates what conservation biologists term 'phenological mismatch.' Consider the pied flycatcher, an iconic small songbird that winters in tropical sub-Saharan Africa and breeds in European temperate woodlands. Historically, these birds timed their spring arrival in Europe precisely to coincide with the hatching peak of oak caterpillars—their nestlings' primary food source. With spring warming arriving two to three weeks earlier across Europe, the caterpillars now emerge and pupate weeks ahead of schedule. When the flycatchers arrive, the food abundance peak has already passed. Consequently, chick starvation rates have escalated, precipitating catastrophic population declines exceeding ninety percent in some European forest regions. This dilemma is equally acute in marine and terrestrial megafauna. In the Arctic, caribou herds migrate hundreds of kilometers north each spring to calf on coastal tundra grasslands. Historically, maternal calving coincided with the sudden burst of high-protein arctic plants. Now, warming temperatures trigger plant emergence weeks before the herds complete their arduous journey, leaving mothers with fibrous, nutrient-depleted forage during lactation. In the oceans, North Atlantic right whales, whose migration tracks the dense blooms of calanoid copepods, find their prey shifting thousands of miles poleward into unprotected shipping corridors, causing lethal ship strikes and fishing gear entanglements. To mitigate these compounding extinction risks, modern wildlife management must transition beyond static, isolated nature reserves. We urgently need dynamic migratory super-corridors: trans-boundary ecological networks that actively shift protections in real time as species adjust their migratory corridors in response to a rapidly changing biosphere."
          },
          questions: [
            {
              id: "L31",
              question: "What biological phenomenon occurs when migratory timing no longer aligns with food availability?",
              options: [
                "Sympatric speciation",
                "Phenological mismatch",
                "Bioaccumulation cascade",
                "Genetic drift breakdown"
              ],
              answer: 1,
              explanation: "Diễn giả giải thích hiện tượng này được các nhà sinh thái học gọi là 'phenological mismatch' (sự lệch pha thời kỳ sinh học).",
            },
            {
              id: "L32",
              question: "Why are daylight cues (photoperiod) unable to safeguard birds from climate mismatches?",
              options: [
                "Day length remains constant each year, whereas temperatures are warming much earlier",
                "Increasing cloud cover prevents birds from detecting the angle of the sun",
                "Artificial urban light pollution completely overrides birds' biological clocks",
                "Atmospheric ozone depletion alters the ultraviolet spectrum of daylight"
              ],
              answer: 0,
              explanation: "Diễn giả nêu: 'while day length remains fixed by planetary mechanics, global temperature benchmarks are shifting unpredictably.'",
            },
            {
              id: "L33",
              question: "What has happened to the pied flycatcher population in some European forests?",
              options: [
                "They completely ceased seasonal migration and adapted to year-round tropical living",
                "Their population declined by over ninety percent due to nestling starvation",
                "They shifted their diet entirely from oak caterpillars to pine beetle larvae",
                "They learned to lay multiple clutches of eggs throughout autumn"
              ],
              answer: 1,
              explanation: "Diễn giả nói: 'chick starvation rates have escalated, precipitating catastrophic population declines exceeding ninety percent in some European forest regions.'",
            },
            {
              id: "L34",
              question: "How are North Atlantic right whales endangered as their prey shifts northward?",
              options: [
                "They are forced into busy shipping lanes, suffering vessel collisions and net entanglements",
                "They freeze in polar waters due to lacking adequate blubber insulation",
                "They face intense predatory attacks from pods of killer whales",
                "They are exposed to heavy industrial chemical run-off from coastal refineries"
              ],
              answer: 0,
              explanation: "Diễn giả nêu rõ: 'find their prey shifting thousands of miles poleward into unprotected shipping corridors, causing lethal ship strikes and fishing gear entanglements.'",
            },
            {
              id: "L35",
              question: "What modern conservation strategy does the speaker advocate instead of static nature reserves?",
              options: [
                "Captive breeding programs in zoological bio-domes across all continents",
                "Dynamic, trans-boundary migratory super-corridors with flexible protections",
                "Complete commercial fishing bans across all international waters",
                "Artificial feeding stations deployed along historical flight routes"
              ],
              answer: 1,
              explanation: "Diễn giả đề xuất: 'We urgently need dynamic migratory super-corridors: trans-boundary ecological networks that actively shift protections in real time...'",
            }
          ]
        }
      ]
    }
  },

  // ==========================================
  // 2. READING (40 Questions - 60 Mins)
  // ==========================================
  reading: {
    time: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "Passage 1: The Economics and Technology of Urban Water Reclamation",
        wordCount: 460,
        passage: `As metropolitan areas swell under unprecedented population growth, municipal water authorities confront a severe supply-demand disparity. Historically, cities secured water by damming distant rivers or extracting groundwater from deep subterranean aquifers. However, protracted climate-induced droughts, depleted water tables, and interstate water conflicts have rendered conventional sourcing increasingly unsustainable. In response, progressive metropolises worldwide are transforming their perception of municipal sewage from a burdensome waste stream into a continuous, drought-proof commodity through advanced water reclamation—often termed 'direct potable reuse' (DPR).

The modern multi-barrier reclamation process relies on rigorous physical and chemical purification technologies that far exceed the standards of conventional drinking water treatment plants. The initial phase involves microfiltration or ultrafiltration, where microscopic hollow-fiber membranes physically sift out suspended colloidal solids, microplastics, and pathogenic bacteria. The effluent then undergoes high-pressure reverse osmosis (RO). Under immense hydraulic force, water molecules permeate dense synthetic polymers, effectively barring dissolved inorganic salts, pharmaceutical residues, and agricultural pesticides.

The crowning barrier is an Advanced Oxidation Process (AOP), typically combining high-output ultraviolet (UV) radiation with hydrogen peroxide or ozone. This stage obliterates any volatile organic compounds that may have slipped through the RO membranes and breaks down viral genetic material via powerful hydroxyl free radicals. The resulting purified water is chemically indistinguishable from—or cleaner than—pure spring water.

Despite its scientific efficacy, public acceptance remains the steepest obstacle confronting water reclamation initiatives. Coined by skeptics as the 'toilet-to-tap' phenomenon, psychological revulsion often eclipses rational chemical data. In cities where public engagement was neglected, multi-million-dollar treatment facilities were mothballed following citizen referendums. Conversely, cities like Singapore and Windhoek, Namibia, achieved profound success by pairing rigorous safety monitoring with transparent, proactive public education campaigns. In Singapore, the reclaimed water—branded affectionately as 'NEWater'—is celebrated as a cornerstone of national strategic independence, embraced by breweries, semiconductor fabrication plants, and everyday citizens alike. As water stress deepens globally, closed-loop urban reclamation will inevitably transition from an engineering novelty into an imperative municipal lifeline.`,
        questions: [
          {
            id: "R1",
            question: "What is the primary motivation for cities adopting water reclamation systems?",
            options: [
              "Reducing electrical expenditure across urban treatment facilities",
              "Mitigating water scarcity caused by climate drought and depleted aquifers",
              "Complying with international oceanic waste disposal prohibitions",
              "Generating commercial revenue through exporting bottled municipal water"
            ],
            answer: 1,
            explanation: "Đoạn 1 nêu rõ: 'protracted climate-induced droughts, depleted water tables, and interstate water conflicts have rendered conventional sourcing increasingly unsustainable. In response, progressive metropolises... are transforming... into advanced water reclamation.'",
          },
          {
            id: "R2",
            question: "The word 'protracted' in paragraph 1 is closest in meaning to:",
            options: [
              "prolonged",
              "sporadic",
              "unprecedented",
              "diminishing"
            ],
            answer: 0,
            explanation: "'Protracted' nghĩa là kéo dài dai dẳng, đồng nghĩa với 'prolonged'.",
          },
          {
            id: "R3",
            question: "Which contaminant is primarily filtered out during the initial microfiltration stage?",
            options: [
              "Dissolved volatile organic gases",
              "Suspended solids, microplastics, and bacteria",
              "Dissolved mineral salts and chlorine ions",
              "Pharmaceutical compounds and drug residues"
            ],
            answer: 1,
            explanation: "Đoạn 2 chỉ rõ: 'microscopic hollow-fiber membranes physically sift out suspended colloidal solids, microplastics, and pathogenic bacteria.'",
          },
          {
            id: "R4",
            question: "How does the Advanced Oxidation Process (AOP) eradicate resilient contaminants?",
            options: [
              "By boiling water at extreme atmospheric pressures",
              "By utilizing UV radiation and hydroxyl free radicals",
              "By introducing predatory microbial organisms to digest viruses",
              "By passing water through thick beds of activated volcanic charcoal"
            ],
            answer: 1,
            explanation: "Đoạn 3 mô tả: 'combining high-output ultraviolet (UV) radiation with hydrogen peroxide... breaks down viral genetic material via powerful hydroxyl free radicals.'",
          },
          {
            id: "R5",
            question: "The word 'obliterates' in paragraph 3 is closest in meaning to:",
            options: [
              "neutralizes and destroys completely",
              "temporarily suspends",
              "dilutes gradually",
              "chemically binds"
            ],
            answer: 0,
            explanation: "'Obliterates' nghĩa là phá hủy hoàn toàn, tiêu diệt triệt để ('destroys completely').",
          },
          {
            id: "R6",
            question: "What does the term 'toilet-to-tap' in paragraph 4 refer to?",
            options: [
              "The plumbing blueprint used in low-income housing blocks",
              "The derogatory public phrase reflecting psychological aversion to recycled sewage",
              "A specialized drainage valve preventing pipeline backflow",
              "A governmental subsidy for domestic water filtration appliances"
            ],
            answer: 1,
            explanation: "Đoạn 4 nêu: 'Coined by skeptics as the \"toilet-to-tap\" phenomenon, psychological revulsion often eclipses rational chemical data.'",
          },
          {
            id: "R7",
            question: "The word 'mothballed' in paragraph 4 is closest in meaning to:",
            options: [
              "decommissioned or put into storage indefinitely",
              "expanded into regional industrial centers",
              "converted into public recreational parks",
              "subsidized heavily by federal grants"
            ],
            answer: 0,
            explanation: "'Mothballed' có nghĩa là đóng cửa, dừng hoạt động và niêm cất vô thời hạn ('decommissioned / put out of active use').",
          },
          {
            id: "R8",
            question: "Why was Singapore successful in implementing its NEWater program?",
            options: [
              "The government banned the importation of foreign bottled beverages",
              "It combined transparent public education with rigorous quality monitoring",
              "It provided free potable water to all domestic households",
              "It relied exclusively on natural mountain filtration springs"
            ],
            answer: 1,
            explanation: "Đoạn 4 nêu rõ: 'achieved profound success by pairing rigorous safety monitoring with transparent, proactive public education campaigns.'",
          },
          {
            id: "R9",
            question: "Which of the following industries in Singapore utilizes reclaimed NEWater?",
            options: [
              "Commercial aerospace turbine manufacturing",
              "Semiconductor fabrication plants and commercial breweries",
              "Offshore deep-sea oil drilling platforms",
              "Heavy commercial copper smelting facilities"
            ],
            answer: 1,
            explanation: "Đoạn 4 chỉ rõ: 'embraced by breweries, semiconductor fabrication plants, and everyday citizens alike.'",
          },
          {
            id: "R10",
            question: "What conclusion does the author reach regarding urban water reclamation?",
            options: [
              "It will remain an expensive novelty limited to wealthy island nations",
              "It will inevitably become an essential municipal lifeline as global water stress grows",
              "It will be completely superseded by atmospheric humidity harvesting within five years",
              "It should only be utilized for agricultural irrigation, never human consumption"
            ],
            answer: 1,
            explanation: "Câu kết bài viết khẳng định: 'As water stress deepens globally, closed-loop urban reclamation will inevitably transition from an engineering novelty into an imperative municipal lifeline.'",
          }
        ]
      },
      {
        id: "P2",
        title: "Passage 2: The Cognitive Architecture of Bilingualism",
        wordCount: 475,
        passage: `For the greater part of the twentieth century, prevailing educational dogma cautioned parents and educators that exposing young children to two languages simultaneously would precipitate cognitive confusion. Traditional pedagogical theories posited that the human brain possessed a finite linguistic bandwidth; cramming multiple vocabularies into an immature mind was believed to impede syntax acquisition, induce speech delays, and diminish intellectual performance. Over the last three decades, however, a profound paradigm shift in psycholinguistics and neuroimaging has decisively debunked this deficit hypothesis, unveiling that bilingualism confers profound structural and cognitive advantages.

At the epicenter of the bilingual advantage is the executive control network—a suite of high-order cognitive faculties governed primarily by the prefrontal cortex. This system encompasses selective attention, cognitive flexibility, task switching, and working memory. When a bilingual individual communicates, both language systems remain perpetually active in the brain, even when conversing in only one. Consequently, to utter a sentence in French, a bilingual person must continuously suppress competing lexical candidates from their English repertoire. This persistent, subconscious act of selective inhibition acts as an intensive mental gym workout for the brain's executive control center.

Extensive laboratory experiments demonstrate that lifelong bilinguals consistently outperform monolingual peers on non-verbal inhibitory control tasks, such as the Stroop Test and the Simon Task. Because their brains are routinely accustomed to filtering out irrelevant linguistic interference, bilingual individuals display superior prowess in discerning salient signals amid chaotic background distraction and switching rapidly between conflicting problem-solving paradigms.

Furthermore, the structural repercussions of bilingualism manifest strikingly in neuroanatomy. Structural MRI scans demonstrate enhanced white-matter integrity connecting the frontal and parietal lobes, along with increased gray-matter volume in the anterior cingulate cortex—the neurological seat of conflict monitoring. Perhaps most remarkably, cognitive reserve research led by Dr. Ellen Bialystok indicates that lifelong bilingualism builds cognitive scaffolding that delays the clinical onset of Alzheimer's symptoms by four to five years compared to matched monolinguals. Although bilingualism does not prevent underlying neuropathological degeneration, the enhanced neural wiring enables bilingual brains to compensate for localized tissue decay, sustaining coherent functional communication far longer into old age. Thus, far from handicapping the intellect, navigating multiple tongues fortifies the architecture of human thought.`,
        questions: [
          {
            id: "R11",
            question: "What was the dominant view of childhood bilingualism during most of the twentieth century?",
            options: [
              "It was viewed as an essential prerequisite for international diplomatic careers",
              "It was believed to cause cognitive confusion, speech delays, and intellectual impairment",
              "It was promoted as the most effective method to stimulate creative abstract reasoning",
              "It was considered harmless but ineffective before adolescence"
            ],
            answer: 1,
            explanation: "Đoạn 1 nêu rõ: 'prevailing educational dogma cautioned parents... exposing young children to two languages... would precipitate cognitive confusion... impede syntax acquisition, induce speech delays...'",
          },
          {
            id: "R12",
            question: "The word 'debunked' in paragraph 1 is closest in meaning to:",
            options: [
              "disproved and exposed as false",
              "vigorously reinforced",
              "theoretically modified",
              "politically weaponized"
            ],
            answer: 0,
            explanation: "'Debunked' nghĩa là vạch trần, chứng minh là sai lầm ('disproved and exposed as false').",
          },
          {
            id: "R13",
            question: "According to paragraph 2, what happens in the brain of a bilingual person during communication?",
            options: [
              "The unused language system is completely deactivated to conserve neural energy",
              "Both language systems remain perpetually active simultaneously",
              "Neural impulses switch exclusively between left and right hemispheres every minute",
              "Memory retrieval slows down significantly due to vocabulary congestion"
            ],
            answer: 1,
            explanation: "Đoạn 2 nêu: 'When a bilingual individual communicates, both language systems remain perpetually active in the brain, even when conversing in only one.'",
          },
          {
            id: "R14",
            question: "Why does speaking a specific language strengthen a bilingual person's executive control?",
            options: [
              "They must constantly articulate difficult phonetic consonants",
              "They must continuously suppress competing words from the other language",
              "They must translate every grammatical structure through mathematical formulas",
              "They avoid speaking to individuals who do not understand both languages"
            ],
            answer: 1,
            explanation: "Đoạn 2 chỉ ra: 'must continuously suppress competing lexical candidates from their English repertoire. This persistent, subconscious act of selective inhibition acts as an intensive mental gym workout...'",
          },
          {
            id: "R15",
            question: "The word 'salient' in paragraph 3 is closest in meaning to:",
            options: [
              "prominent and important",
              "hidden and imperceptible",
              "superficial and transient",
              "rhythmical and musical"
            ],
            answer: 0,
            explanation: "'Salient' nghĩa là nổi bật, quan trọng, cốt lõi ('prominent / noticeable').",
          },
          {
            id: "R16",
            question: "Which non-verbal psychological tests are cited as evidence of bilingual superiority?",
            options: [
              "The Stanford-Binet and Wechsler Adult Intelligence Scales",
              "The Stroop Test and the Simon Task",
              "The Rorschach Inkblot Test and Myers-Briggs Type Indicator",
              "The Minnesota Multiphasic Personality Inventory"
            ],
            answer: 1,
            explanation: "Đoạn 3 nêu: 'consistently outperform monolingual peers on non-verbal inhibitory control tasks, such as the Stroop Test and the Simon Task.'",
          },
          {
            id: "R17",
            question: "What structural anatomical change has been revealed by MRI scans of bilingual brains?",
            options: [
              "Complete atrophy of the temporal speech center",
              "Enhanced white-matter connectivity and increased gray-matter volume",
              "A significant reduction in total brain circumference",
              "An asymmetrical shrinkage of the right cerebellum"
            ],
            answer: 1,
            explanation: "Đoạn 4 nêu: 'Structural MRI scans demonstrate enhanced white-matter integrity connecting the frontal and parietal lobes, along with increased gray-matter volume...'",
          },
          {
            id: "R18",
            question: "According to Dr. Ellen Bialystok, how does bilingualism influence the symptoms of Alzheimer's disease?",
            options: [
              "It completely eradicates the toxic beta-amyloid plaques from forming",
              "It delays the clinical onset of symptoms by four to five years",
              "It accelerates brain decay by overburdening neural synapses",
              "It confines memory loss solely to the secondary language"
            ],
            answer: 1,
            explanation: "Đoạn 4 khẳng định: 'Dr. Ellen Bialystok indicates that lifelong bilingualism builds cognitive scaffolding that delays the clinical onset of Alzheimer's symptoms by four to five years...'",
          },
          {
            id: "R19",
            question: "The word 'scaffolding' in paragraph 4 metaphorically refers to:",
            options: [
              "protective temporary physical frameworks for construction",
              "resilient neural backup structures that compensate for tissue damage",
              "rigid psychological boundaries that resist new learning",
              "pharmaceutical barriers blocking viral infection"
            ],
            answer: 1,
            explanation: "'Cognitive scaffolding' trong ngữ cảnh này là cấu trúc chống đỡ, mạng lưới nơ-ron bù đắp giúp não duy trì chức năng khi bị tổn thương.",
          },
          {
            id: "R20",
            question: "Which sentence best summarizes the overarching thesis of the passage?",
            options: [
              "Bilingual education is excessively difficult and should only be introduced in college",
              "Bilingualism fundamentally enhances cognitive flexibility, brain structure, and long-term mental resilience",
              "Monolingual individuals possess a superior mastery of complex literary syntax",
              "Preserving endangered native tongues requires extensive governmental subsidies"
            ],
            answer: 1,
            explanation: "Toàn bài chứng minh việc song ngữ giúp tăng cường sự linh hoạt nhận thức, cấu trúc thần kinh và khả năng phục hồi nhận thức khi về già.",
          }
        ]
      },
      {
        id: "P3",
        title: "Passage 3: Cybersecurity Vulnerabilities in the Internet of Things (IoT)",
        wordCount: 480,
        passage: `The hyper-connectivity of the modern digital landscape has been exponentially catalyzed by the proliferation of the Internet of Things (IoT). From smart home thermostats, voice-activated domestic assistants, and automated factory robotics to implantable cardiac pacemakers and municipal power grid sensors, billions of physical objects are now interfaced directly with the internet. Market projections estimate that the global ecosystem of active IoT installations will eclipse thirty billion devices within this decade. Yet, while this pervasive interconnectedness delivers remarkable logistical convenience, energy optimization, and industrial automation, it has inadvertently opened a vast, vulnerable attack vector for cyber adversaries.

Unlike enterprise servers and personal computers—which benefit from mature security protocols, frequent operating system patches, and robust cryptographic defenses—the overwhelming majority of commercial IoT devices suffer from chronic architectural vulnerabilities. To minimize manufacturing costs and maximize battery longevity, hardware producers routinely equip consumer IoT units with inexpensive microcontrollers characterized by severely constrained computational processing power and memory capacity. Consequently, these devices lack the computational muscle required to execute industry-standard cryptographic encryption or host on-device endpoint protection software.

Compounding this hardware deficiency is pervasive operational negligence among manufacturers. Countless smart cameras, internet routers, and household appliances ship from factories with hardcoded, unchangeable default passwords (such as 'admin' or '12345') permanently embedded into their firmware. Furthermore, because consumer electronics brands prioritize aggressive time-to-market schedules, millions of connected units hit store shelves without any mechanism for over-the-air (OTA) security updates. When critical zero-day vulnerabilities are unearthed by cybersecurity analysts, manufacturers frequently possess neither the technical infrastructure nor the commercial incentive to develop and distribute firmware patches for legacy devices.

The weaponization of insecure IoT hardware presents catastrophic systemic perils. Cybercrime syndicates systematically scan the public internet for vulnerable smart devices, silently compromising millions of units with automated malware scripts. Once infected, these units are conscripted into colossal distributed botnets, such as the infamous Mirai botnet. Threat actors then direct these zombie botnet armies to unleash staggering Distributed Denial of Service (DDoS) barrages, overwhelming major internet domain infrastructure and crippling global financial hubs, healthcare networks, and cloud providers.

Moreover, the encroachment of IoT into critical infrastructure—such as smart electrical grids, water treatment pumps, and hospital medical monitors—elevates cyber warfare from digital disruption to tangible physical danger. An adversary capable of compromising industrial control sensors could tamper with municipal water chlorination levels or trigger widespread blackouts across metropolitan power grids. To prevent impending catastrophe, cybersecurity experts insist that voluntary industry best practices must be superseded by enforceable international manufacturing mandates: outlawing unchangeable passwords, mandating authenticated over-the-air patching capabilities, and holding hardware vendors legally liable for neglected vulnerabilities.`,
        questions: [
          {
            id: "R21",
            question: "What is the primary topic addressed throughout the passage?",
            options: [
              "The historical evolution of personal computer microprocessors",
              "Severe cybersecurity risks and systemic vulnerabilities within the Internet of Things",
              "The logistical benefits of automated robotics in automotive assembly lines",
              "International patent disputes among global consumer electronics brands"
            ],
            answer: 1,
            explanation: "Bài đọc tập trung toàn diện vào các lỗ hổng an ninh mạng và hiểm họa mang tính hệ thống từ các thiết bị vạn vật kết nối (IoT).",
          },
          {
            id: "R22",
            question: "The word 'proliferation' in paragraph 1 is closest in meaning to:",
            options: [
              "rapid increase and spread",
              "gradual obsolescence",
              "strict regulatory oversight",
              "expensive commercial marketing"
            ],
            answer: 0,
            explanation: "'Proliferation' nghĩa là sự sinh sôi, tăng nhanh và lan rộng ('rapid increase and spread').",
          },
          {
            id: "R23",
            question: "Why do many consumer IoT devices lack robust cryptographic encryption?",
            options: [
              "International trade treaties prohibit exporting advanced encryption chips",
              "Their inexpensive microcontrollers have constrained processing power and memory",
              "Consumers strongly prefer completely unencrypted data transmission for speed",
              "Cryptographic algorithms interfere with Wi-Fi radio frequencies"
            ],
            answer: 1,
            explanation: "Đoạn 2 chỉ rõ: 'To minimize manufacturing costs... equip consumer IoT units with inexpensive microcontrollers characterized by severely constrained computational processing power and memory capacity... lack the computational muscle required to execute... encryption.'",
          },
          {
            id: "R24",
            question: "The word 'negligence' in paragraph 3 is closest in meaning to:",
            options: [
              "carelessness and lack of proper attention",
              "intentional malicious destruction",
              "meticulous quality assurance",
              "financial embezzlement"
            ],
            answer: 0,
            explanation: "'Negligence' nghĩa là sự bất cẩn, thiếu trách nhiệm, lơ là ('carelessness').",
          },
          {
            id: "R25",
            question: "What factory configuration flaw is cited regarding many smart cameras and routers?",
            options: [
              "They are programmed to automatically shut down after twelve hours of use",
              "They ship with hardcoded, unchangeable default passwords in their firmware",
              "They utilize outdated analog telephone cables instead of wireless connections",
              "They transmit customer credit card numbers across unencrypted radio channels"
            ],
            answer: 1,
            explanation: "Đoạn 3 nêu: 'ship from factories with hardcoded, unchangeable default passwords (such as \"admin\" or \"12345\") permanently embedded into their firmware.'",
          },
          {
            id: "R26",
            question: "Why do hardware manufacturers often fail to release patches for discovered vulnerabilities?",
            options: [
              "International copyright laws prohibit altering firmware post-sale",
              "They often lack the technical infrastructure and commercial incentive for legacy units",
              "Consumers regularly refuse to download free software improvements",
              "Hackers immediately disable all factory servers once a bug is discovered"
            ],
            answer: 1,
            explanation: "Đoạn 3 nêu rõ: 'manufacturers frequently possess neither the technical infrastructure nor the commercial incentive to develop and distribute firmware patches for legacy devices.'",
          },
          {
            id: "R27",
            question: "How are compromised IoT devices utilized in cyberattacks like the Mirai botnet?",
            options: [
              "They mine cryptocurrencies directly from users' electric power sockets",
              "They are conscripted into zombie botnet armies to launch massive DDoS attacks",
              "They physically short-circuit domestic electrical breakers to spark house fires",
              "They delete operating systems from connected personal desktop computers"
            ],
            answer: 1,
            explanation: "Đoạn 4 nêu: 'conscripted into colossal distributed botnets, such as the infamous Mirai botnet... to unleash staggering Distributed Denial of Service (DDoS) barrages...'",
          },
          {
            id: "R28",
            question: "The word 'encroachment' in paragraph 5 is closest in meaning to:",
            options: [
              "gradual advance into an area or territory",
              "complete retreat and withdrawal",
              "lawful commercial purchase",
              "accidental destruction of physical assets"
            ],
            answer: 0,
            explanation: "'Encroachment' nghĩa là sự xâm lấn, lấn chiếm dần dần ('gradual advance into an area').",
          },
          {
            id: "R29",
            question: "What makes IoT attacks on critical infrastructure particularly dangerous?",
            options: [
              "They cause stock markets to appreciate unpredictably",
              "They transition cyber warfare into tangible physical dangers like blackouts or water contamination",
              "They permanently erase all university scientific archives",
              "They disable global satellite television broadcasts"
            ],
            answer: 1,
            explanation: "Đoạn 5 nhấn mạnh: 'elevates cyber warfare from digital disruption to tangible physical danger... tamper with municipal water chlorination levels or trigger widespread blackouts...'",
          },
          {
            id: "R30",
            question: "What legislative remedy do cybersecurity experts recommend to safeguard IoT?",
            options: [
              "A total global prohibition on producing interconnected consumer electronics",
              "Enforceable international mandates banning default passwords and requiring update mechanisms",
              "Imposing heavy luxury taxes on households owning more than five smart appliances",
              "Relying strictly on voluntary self-regulation by consumer electronics corporations"
            ],
            answer: 1,
            explanation: "Đoạn cuối nêu rõ: 'superseded by enforceable international manufacturing mandates: outlawing unchangeable passwords, mandating authenticated over-the-air patching capabilities, and holding hardware vendors legally liable...'",
          }
        ]
      },
      {
        id: "P4",
        title: "Passage 4: Epigenetics and the Dynamic Nature of Heredity",
        wordCount: 495,
        passage: `For over a century following the rediscovery of Gregor Mendel's foundational experiments, biological orthodoxy embraced a strictly deterministic model of genetics. Under this classical paradigm, the deoxyribonucleic acid (DNA) sequence inherited at conception was perceived as an unalterable blueprint. Organisms were viewed as the direct, mechanical output of their immutable genetic code; environmental influences might affect physical well-being or behavior during an individual's lifetime, but could never rewrite or breach the impenetrable genetic code passed to successive generations. However, over the past quarter-century, the burgeoning discipline of epigenetics has upended this rigid genetic dogma, revealing that our genome is far more dynamic, responsive, and malleable than previously conceived.

The prefix 'epi'—derived from the Greek for 'above' or 'over'—aptly captures the nature of epigenetic mechanisms. Epigenetics does not alter the underlying nucleotide sequence of adenine, cytosine, guanine, and thymine. Rather, it encompasses an elaborate molecular apparatus that regulates how genes are read, expressed, or silenced. Think of the DNA sequence as the hardware or sheet music of an orchestra; epigenetic marks function as the software or conductor's annotations, dictating which instruments play loudly, which play softly, and which remain completely mute.

The two most thoroughly mapped epigenetic mechanisms are DNA methylation and histone modification. In DNA methylation, specialized cellular enzymes append tiny chemical tags called methyl groups directly onto cytosine bases. When clustered around gene promoter regions, these bulky methyl molecules physically obstruct transcriptional machinery, effectively locking that gene into an 'off' position. Histone modification, meanwhile, alters the spool-like protein cores around which our lengthy DNA strands are tightly wound. When chemical acetyl tags attach to histones, the chromatic structure loosens, allowing cellular machinery to easily access and transcribe genes. Conversely, deacetylation tightens the winding, rendering the genetic code inaccessible.

Crucially, these molecular switches do not operate in a vacuum; they are exquisitely sensitive to external environmental exposures. Nutritional intake, chronic psychological stress, environmental toxins, physical exercise, and sleep patterns all exert profound regulatory influence over epigenetic tagging. For instance, landmark animal studies conducted by Dr. Michael Meaney demonstrated that maternal nurturing in rodents alters epigenetic marks on glucocorticoid receptor genes in the pup's hippocampus. Pups receiving attentive grooming grew into adults with lowered stress reactivity and robust emotional stability, whereas neglected pups possessed heavily methylated genes, rendering them chronically anxious and hypersensitive to stress.

Perhaps the most revolutionary—and contentious—facet of epigenetic research is transgenerational epigenetic inheritance. Accumulating empirical evidence indicates that certain epigenetic alterations induced by severe environmental trauma—such as famine, systemic toxin exposure, or acute psychological shock—can bypass the standard epigenetic reprogramming that occurs during embryonic gametogenesis. Consequently, molecular scars acquired during an ancestor's lifetime can be inherited by their offspring and grandchildren. Far from being prisoners of a static, unyielding genetic lottery, living organisms possess an adaptable biological dialogue with their environment—one whose molecular echoes reverberate across generations.`,
        questions: [
          {
            id: "R31",
            question: "What traditional genetic assumption has been challenged by epigenetics?",
            options: [
              "The assumption that DNA consists of four distinct chemical nucleotide bases",
              "The belief that the inherited DNA sequence is an unalterable blueprint unaffected by environment",
              "The hypothesis that cellular division requires the duplication of chromosomes",
              "The theory that infectious viruses can insert genetic material into bacteria"
            ],
            answer: 1,
            explanation: "Đoạn 1 nêu rõ: 'biological orthodoxy embraced a strictly deterministic model... inherited at conception was perceived as an unalterable blueprint... epigenetics has upended this rigid genetic dogma.'",
          },
          {
            id: "R32",
            question: "The word 'malleable' in paragraph 1 is closest in meaning to:",
            options: [
              "pliable and capable of being changed",
              "fragile and prone to decay",
              "inflexible and permanent",
              "microscopic and invisible"
            ],
            answer: 0,
            explanation: "'Malleable' nghĩa là mềm dẻo, dễ uốn nắn, có thể thay đổi ('pliable and adaptable').",
          },
          {
            id: "R33",
            question: "According to paragraph 2, how does epigenetics alter gene behavior?",
            options: [
              "By rearranging the fundamental order of nucleotide bases (A, C, G, T)",
              "By regulating how genes are read, expressed, or silenced without changing the DNA sequence",
              "By substituting human genetic sequences with beneficial viral RNA",
              "By dissolving the outer protective nuclear membrane of cells"
            ],
            answer: 1,
            explanation: "Đoạn 2 giải thích: 'Epigenetics does not alter the underlying nucleotide sequence... Rather, it encompasses an elaborate molecular apparatus that regulates how genes are read, expressed, or silenced.'",
          },
          {
            id: "R34",
            question: "What musical metaphor does the author use to explain epigenetic mechanisms?",
            options: [
              "DNA is the sheet music, and epigenetic marks are the conductor's annotations",
              "Epigenetic marks are guitar strings, and genes are the vibrating soundboard",
              "DNA is an acoustic drum, and cellular proteins are rhythm drumsticks",
              "Epigenetics is a grand piano, and nucleotide bases are ivory keys"
            ],
            answer: 0,
            explanation: "Đoạn 2 nêu ví von: 'Think of the DNA sequence as the hardware or sheet music of an orchestra; epigenetic marks function as the software or conductor's annotations...'",
          },
          {
            id: "R35",
            question: "How does DNA methylation typically affect gene transcription?",
            options: [
              "It accelerates transcriptional speed by five hundred percent",
              "It physically obstructs transcriptional machinery, effectively silencing the gene",
              "It forces the gene to produce double the quantity of proteins",
              "It changes the gene's function into manufacturing lipids"
            ],
            answer: 1,
            explanation: "Đoạn 3 nêu: 'bulky methyl molecules physically obstruct transcriptional machinery, effectively locking that gene into an \"off\" position.'",
          },
          {
            id: "R36",
            question: "The word 'spool-like' in paragraph 3 describes histones as:",
            options: [
              "cylindrical objects around which threads or fibers are wound",
              "sharp pointed instruments used to pierce cellular walls",
              "elastic membranes that expand under intense heat",
              "liquid bubbles floating freely within the cytoplasm"
            ],
            answer: 0,
            explanation: "'Spool-like' nghĩa là có hình con suốt/ống chỉ để cuốn chỉ xung quanh ('cylindrical cores around which DNA strands are tightly wound').",
          },
          {
            id: "R37",
            question: "Which external factors are recognized as influencing epigenetic tagging?",
            options: [
              "Nutritional diet, chronic psychological stress, exercise, and toxins",
              "Solar eclipses, moon phases, and magnetic compass alignments",
              "Blood type, ocular iris pigmentation, and skeletal height",
              "Only artificial synthetic medications, never natural lifestyle factors"
            ],
            answer: 0,
            explanation: "Đoạn 4 nêu rõ: 'Nutritional intake, chronic psychological stress, environmental toxins, physical exercise, and sleep patterns all exert profound regulatory influence over epigenetic tagging.'",
          },
          {
            id: "R38",
            question: "What was demonstrated by Dr. Michael Meaney's rodent research?",
            options: [
              "Rodents deprived of sleep lost their ability to navigate mazes",
              "Maternal nurturing altered stress receptor epigenetic marks, reducing adult anxiety",
              "Excessive sugar intake caused irreversible blindness in newborn pups",
              "Rodents exposed to low temperatures developed thicker fur within hours"
            ],
            answer: 1,
            explanation: "Đoạn 4 nêu: 'maternal nurturing in rodents alters epigenetic marks on glucocorticoid receptor genes... Pups receiving attentive grooming grew into adults with lowered stress reactivity...'",
          },
          {
            id: "R39",
            question: "The word 'reverberate' in paragraph 5 is closest in meaning to:",
            options: [
              "echo and have continuing lasting effects",
              "instantly dissolve without a trace",
              "contradict established scientific dogma",
              "accelerate physical speed"
            ],
            answer: 0,
            explanation: "'Reverberate' nghĩa là dội lại, vang vọng, tiếp tục tạo ra ảnh hưởng lâu dài ('echo and have lasting effects').",
          },
          {
            id: "R40",
            question: "What is transgenerational epigenetic inheritance as described in the passage?",
            options: [
              "The legal distribution of family wealth across generations",
              "The transmission of environmentally induced epigenetic marks from ancestors to descendants",
              "The gradual mutation of mitochondrial DNA over millions of years",
              "The eradication of all inherited family diseases through gene therapy"
            ],
            answer: 1,
            explanation: "Đoạn 5 nêu: 'molecular scars acquired during an ancestor's lifetime can be inherited by their offspring and grandchildren.' (di truyền biểu sinh xuyên thế hệ).",
          }
        ]
      }
    ]
  },

  // ==========================================
  // 3. WRITING (2 Tasks - 60 Mins)
  // ==========================================
  writing: {
    time: 60,
    totalTasks: 2,
    task1: {
      title: "Task 1: Thư cảm ơn & Góp ý Diễn giả Khách mời (Letter of Appreciation & Feedback)",
      time: 20,
      wordCount: "At least 120 words",
      prompt: `You are the president of your university's Career Development Club. Last Friday, Dr. Jonathan Hayes, a senior executive from a multinational technology firm, delivered a guest lecture titled "Artificial Intelligence and Future Job Opportunities" to your club members.

Write an email to Dr. Hayes. In your email:
- Thank him for taking the time to deliver the lecture to the students.
- Mention two specific aspects of his presentation that members found particularly illuminating.
- Politely convey a suggestion from the student feedback regarding future workshops (such as more time for hands-on interactive Q&A or practical demonstrations).
- Express your hope to collaborate with him again in upcoming university events.`,
      outline: [
        "Greeting: Dear Dr. Hayes,",
        "Opening: On behalf of the Career Development Club, express sincere gratitude for his inspiring lecture last Friday.",
        "Body Paragraph 1: Highlight two specific valuable insights (e.g., pragmatic breakdown of AI-driven career shifts and practical advice on ethical AI prompt engineering).",
        "Body Paragraph 2: Graciously share student feedback suggesting extended interactive Q&A or live case demonstrations for future sessions.",
        "Closing & Call to action: Reiterate appreciation and express eagerness for future collaboration. Sign off warmly."
      ],
      sampleAnswer: `Dear Dr. Hayes,

On behalf of the Career Development Club and all attending students at Vietnam National University, I am writing to express our sincere gratitude for your insightful guest lecture, "Artificial Intelligence and Future Job Opportunities," delivered last Friday.

Our members were thoroughly captivated by your presentation. In particular, students found your breakdown of upcoming AI-driven employment shifts extraordinarily illuminating, as it demystified how emerging technologies will reshape traditional corporate roles. Furthermore, your practical advice on cultivating adaptable technical competencies and mastering ethical prompt engineering gave our graduating seniors tangible strategies to enhance their career readiness.

In reviewing the feedback questionnaires submitted by attendees, the response was overwhelmingly enthusiastic. Several students noted that the session flew by so quickly that they wished there had been additional time dedicated to interactive Q&A and live software demonstrations. We would be delighted to allocate a longer interactive breakout segment should you honor us with another workshop in the future.

Once again, thank you immensely for dedicating your valuable time and expertise to empowering our student community. We sincerely look forward to welcoming you back to our campus in upcoming academic events.

Warm regards,

Nguyen Minh Anh
President, Career Development Club
Vietnam National University`,
      keyVocab: [
        "express our sincere gratitude (bày tỏ lòng biết ơn chân thành)",
        "extraordinarily illuminating (vô cùng sáng tỏ, giàu giá trị khai phóng)",
        "demystify (làm sáng tỏ, xua tan những ngộ nhận)",
        "career readiness (sự sẵn sàng cho sự nghiệp)",
        "interactive breakout segment (phiên thảo luận tương tác chuyên sâu)"
      ]
    },

    task2: {
      title: "Task 2: Bài luận Tăng trưởng Kinh tế vs. Bảo vệ Môi trường (Economic Growth vs. Environmental Protection)",
      time: 40,
      wordCount: "At least 250 words",
      prompt: `Some people argue that developing countries should prioritize economic growth and industrialization, even if it causes environmental degradation, in order to lift populations out of poverty. Others contend that environmental protection must be safeguarded from the outset, as ecological damage is irreversible and ultimately undermines economic prosperity.

Discuss both views and give your own reasoned opinion. Provide specific reasons and relevant examples to support your response.`,
      outline: [
        "Introduction: Introduce the debate between economic acceleration and environmental sustainability in developing economies. State thesis: while industrial expansion lifts living standards, prioritizing unchecked growth over ecological integrity is short-sighted and self-defeating.",
        "Body Paragraph 1: Arguments for prioritizing economic growth (industrialization creates manufacturing jobs, finances public healthcare/education, alleviates extreme poverty rapidly).",
        "Body Paragraph 2: Arguments for safeguarding the environment (ecological collapse, air/water pollution burdens public healthcare, climate resilience is crucial for long-term food security).",
        "Body Paragraph 3 / Personal Opinion: Synthesis advocating for 'Green Growth' (developing nations can leapfrog dirty fossil technologies, investing directly in renewables and eco-tourism, proving economic prosperity and environmental preservation can reinforce each other).",
        "Conclusion: Summarize key arguments and provide a forward-looking concluding statement."
      ],
      sampleAnswer: `In the contemporary era of rapid globalization, the tension between aggressive economic development and environmental stewardship presents a profound dilemma for developing nations. While some policymakers argue that economic growth must take precedence to eradicate poverty, others insist that environmental preservation must remain paramount. In my perspective, while economic expansion is undeniably vital, sacrificing the ecological foundation is a dangerously short-sighted strategy; true long-term prosperity necessitates a green growth paradigm.

Proponents of unconstrained industrialization argue that poverty alleviation constitutes the most pressing moral imperative for developing nations. Historically, Western powers and East Asian economies achieved affluent living standards through rapid fossil-fuel-driven manufacturing and resource extraction. For millions living below the poverty threshold, factory employment provides steady wages, enabling families to secure nutritious food, access clean municipal sanitation, and afford tertiary education. From this standpoint, diverting scarce capital into stringent environmental regulations could hinder foreign direct investment, escalate production costs, and stifle fledgling domestic industries before they attain international competitiveness.

Nonetheless, compelling evidence demonstrates that prioritizing growth at the expense of ecological health is inherently self-defeating. When industrial output pollutes waterways, poisons agricultural topsoil, and blankets cities in toxic particulate smog, the resultant public health crisis severely undermines economic gains. Millions of productive working hours are lost to respiratory illnesses, and national healthcare systems become overburdened with debilitating chronic diseases. Moreover, ecological degradation is frequently irreversible. Overexploited fisheries, depleted groundwater aquifers, and deforested river basins diminish agricultural productivity and heighten vulnerability to catastrophic climate hazards, such as floods and droughts, which disproportionately devastate the impoverished populations industrialization was meant to uplift.

In my view, economic growth and environmental protection should not be treated as mutually exclusive binaries. Today's developing economies possess a unique historical opportunity to 'leapfrog' the dirty, carbon-intensive developmental pathways of the past. By investing directly into renewable energy infrastructures like solar and wind, promoting sustainable eco-tourism, and enforcing closed-loop circular manufacturing, nations can generate robust employment while safeguarding natural capital. 

In conclusion, sacrificing environmental integrity in the name of economic expediency is an unsustainable gamble that compromises future generations. Developing countries must embrace sustainable green development, recognizing that a healthy biosphere is not an impediment to prosperity, but its indispensable cornerstone.`,
      keyVocab: [
        "environmental stewardship (tinh thần quản lý và bảo vệ môi trường)",
        "moral imperative (mệnh lệnh đạo đức cấp thiết)",
        "unconstrained industrialization (công nghiệp hóa không kiểm soát)",
        "inherently self-defeating (bản chất là tự chuốc lấy thất bại)",
        "technological leapfrogging (bước nhảy vọt công nghệ, đón đầu xu thế)",
        "indispensable cornerstone (nền tảng cốt lõi không thể thiếu)"
      ]
    }
  },

  // ==========================================
  // 4. SPEAKING (3 Parts - 12 Mins)
  // ==========================================
  speaking: {
    time: 12,
    totalParts: 3,
    part1: {
      title: "Part 1: Giao Tiếp Xã Hội (Social Interaction - 3 Mins)",
      topic: "Neighborhood & Smart Technology",
      time: 3,
      questions: [
        {
          q: "Could you tell me a little about the neighborhood where you currently live?",
          a: "I currently reside in a vibrant residential district in Hanoi. What I appreciate most is the harmony between modern convenience and community warmth. Within walking distance, there are bustling traditional markets, green public parks, and cozy cafes, yet the residents maintain close-knit ties and always look out for one another."
        },
        {
          q: "How has smart technology made your daily routine more convenient?",
          a: "Smart technology has genuinely revolutionized how I manage my daily productivity. Through mobile banking apps, I can settle utility bills and transfer tuition in seconds without standing in long queues. Furthermore, smart ride-hailing and navigation tools help me bypass severe traffic congestion during peak morning hours."
        },
        {
          q: "Do you think people are becoming overly dependent on their smartphones?",
          a: "To a certain extent, yes. While smartphones offer undeniable utility, excessive reliance often erodes deep interpersonal connections and shortens attention spans. Many individuals struggle to enjoy quiet solitude without reflexively scrolling through social media notifications, which can induce subtle digital fatigue."
        }
      ]
    },

    part2: {
      title: "Part 2: Thảo Luận Giải Pháp (Solution Discussion - 4 Mins)",
      situation: "Your youth volunteer organization has been awarded a grant to host an international Youth Leadership Conference for 150 delegates. You are considering three venue options: a downtown luxury hotel conference hall, a spacious university auditorium, or an eco-resort in the countryside.",
      options: [
        "Option A: A luxury hotel conference hall in the city center",
        "Option B: A spacious university auditorium equipped with multimedia technology",
        "Option C: An eco-resort located in the countryside"
      ],
      recommendedOption: "Option B: A spacious university auditorium equipped with multimedia technology",
      outline: [
        "Introduction: State your preference clearly (Option B: university auditorium) as the most balanced, cost-effective, and academically inspiring choice.",
        "Analyze Option B strengths: Modern multimedia equipment, vast seating capacity, central academic atmosphere, and significant cost savings that can be redirected into delegate scholarships or keynote speaker hospitality.",
        "Evaluate Option A weaknesses: While luxurious, hotel halls are prohibitively expensive, and the formal corporate ambiance can feel intimidating and rigid for youthful student delegates.",
        "Evaluate Option C weaknesses: An eco-resort offers tranquility, but long travel logistics, poor emergency medical access, and potential unstable internet connectivity create substantial risks for a high-profile international summit.",
        "Conclusion: Reaffirm that the university auditorium maximizes academic value and operational safety."
      ],
      sampleResponse: `Faced with the choice among three venues for hosting an international Youth Leadership Conference for 150 delegates, I would strongly advocate for Option B—a spacious university auditorium equipped with modern multimedia technology.

First and foremost, a university setting provides the perfect intellectual atmosphere for a student leadership summit. It symbolizes education, civic empowerment, and academic rigor. Practically speaking, modern university lecture halls possess state-of-the-art audiovisual equipment, simultaneous translation booths, and high-speed Wi-Fi, which are vital for international keynote presentations. Furthermore, renting a university auditorium is substantially more economical than a commercial venue. The funds saved from venue hire can be prudently reallocated to subsidize delegate travel grants, print high-quality conference materials, or provide exquisite cultural dinners.

In contrast, while Option A—a luxury city center hotel—certainly conveys prestige and convenience, its exorbitant rental fees would consume the lion's share of our grant budget. Moreover, the excessively formal corporate atmosphere might intimidate younger delegates, discouraging spontaneous, lively debates.

As for Option C—an eco-resort in the countryside—while it offers refreshing natural scenery, the logistical obstacles are formidable. Transporting 150 international delegates over long distances poses major transportation delays, safety liabilities, and potential internet connectivity issues during live plenary broadcasts.

Taking all factors into account, the university auditorium is unequivocally the most pragmatic, inspiring, and cost-effective venue to ensure the conference's resounding success.`
    },

    part3: {
      title: "Part 3: Phát Triển Chủ Đề (Topic Development - 5 Mins)",
      topic: "Lifelong Learning and Career Agility",
      mindmap: {
        centralTopic: "Benefits of Lifelong Learning in Modern Careers",
        branches: [
          {
            idea: "Career Adaptability",
            details: "Allows professionals to acquire emerging digital skills, preventing obsolescence amid rapid AI automation."
          },
          {
            idea: "Cognitive Health",
            details: "Stimulates neuroplasticity, keeping the mind sharp, inquisitive, and resilient against age-related decline."
          },
          {
            idea: "Personal Fulfillment",
            details: "Broadens philosophical worldviews, ignites creative passions, and boosts self-confidence."
          }
        ]
      },
      followUpQuestions: [
        {
          q: "How can working adults balance full-time careers with continuous learning?",
          a: "Working professionals can leverage micro-learning platforms, dedicating fifteen to thirty minutes during commutes or lunch breaks to podcasts and structured online modules. Additionally, forward-thinking enterprises should institute corporate learning days or tuition reimbursement schemes to actively support upskilling."
        },
        {
          q: "Do you believe traditional university degrees will become less important than practical skill certificates in the future?",
          a: "While practical skill certificates offer agile, real-time proof of technical competencies, formal university degrees still hold profound value. Universities cultivate foundational critical thinking, research ethics, and interpersonal communication that narrow technical badges cannot fully replicate. A symbiotic combination of both will be the gold standard."
        }
      ]
    }
  }
};
