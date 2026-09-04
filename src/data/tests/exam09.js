/**
 * src/data/tests/exam09.js
 * Đề Thi Chuẩn VSTEP Số 09 (Định Dạng Đại Học Hà Nội - HANU)
 * Đầy đủ 4 kỹ năng:
 * - Listening: 35 câu (Hội thoại tự nhiên, ngữ cảnh thực tế, nhấn nhá ngữ điệu)
 * - Reading: 40 câu (4 bài đọc học thuật chuẩn format)
 * - Writing: 2 Tasks (Thư khiếu nại sách rách + Luận thư viện công cộng vs Hạ tầng số)
 * - Speaking: 3 Parts (Ẩm thực & Thể thao, Quà tốt nghiệp, Lợi ích du học)
 */

export const exam09 = {
  id: "vstep-exam-09",
  name: "Đề Thi Chuẩn VSTEP Số 09 (Định Dạng Đại Học Hà Nội - HANU)",
  badge: "Chuẩn Format B1-B2",
  difficulty: "Chuẩn B1-B2 Quốc Gia",
  description: "Bộ đề thi thực chiến bám sát định dạng Đại học Hà Nội (HANU). Hệ thống câu hỏi phân hóa rõ nét, bài nghe có ngữ điệu tự nhiên.",

  // ==========================================
  // 1. LISTENING (35 Questions - 40 Mins)
  // ==========================================
  listening: {
    time: 40,
    totalQuestions: 35,
    part1: {
      title: "Part 1: 8 Thông Báo & Đối Thoại Ngắn (8 câu)",
      instructions: "Trong phần này, bạn sẽ nghe 8 đoạn thông báo hoặc hội thoại ngắn. Mỗi đoạn có 1 câu hỏi kèm 4 lựa chọn A, B, C, D.",
      questions: [
        {
          id: "L1",
          question: "Why is the university registration deadline extended?",
          options: [
            { key: "A", text: "Due to unexpected server maintenance issues" },
            { key: "B", text: "Because several professors requested more time" },
            { key: "C", text: "Due to a nationwide public holiday" },
            { key: "D", text: "Because students submitted paper forms instead" }
          ],
          correctAnswer: "A",
          explanation: "Thông báo phòng đào tạo: 'Due to unexpected server maintenance on our student portal yesterday, the course registration deadline has been extended to Friday 5:00 PM.' -> Do lỗi bảo trì máy chủ (A).",
          audioText: "Attention all undergraduate students. ... Due to unexpected server maintenance on our student portal yesterday, the course registration deadline has been extended to Friday 5:00 PM. ... Please ensure all elective course selections are finalized before the system closes."
        },
        {
          id: "L2",
          question: "How much does a student ticket cost for the weekend classical concert?",
          options: [
            { key: "A", text: "Ten dollars" },
            { key: "B", text: "Fifteen dollars with a valid student ID card" },
            { key: "C", text: "Twenty-five dollars" },
            { key: "D", text: "Thirty dollars" }
          ],
          correctAnswer: "B",
          explanation: "Nhân viên bán vé thông báo: 'Standard adult tickets are 25 dollars, but with a valid student ID card, student tickets are discounted to just 15 dollars.' -> Đáp án B.",
          audioText: "Welcome to the City Symphony Hall box office. ... For this Saturday's Mozart concert, standard adult tickets are 25 dollars, but with a valid student ID card, student tickets are discounted to just 15 dollars. ... Seats in the balcony tier are filling quickly."
        },
        {
          id: "L3",
          question: "What service does the banking representative recommend to the caller?",
          options: [
            { key: "A", text: "Opening a high-risk commercial investment fund" },
            { key: "B", text: "Enrolling in automated monthly utility bill payments through mobile banking" },
            { key: "C", text: "Applying for an immediate home mortgage loan" },
            { key: "D", text: "Visiting the branch in person to withdraw cash" }
          ],
          correctAnswer: "B",
          explanation: "Nhân viên ngân hàng tư vấn: 'I recommend setting up automated recurring bill payments directly in our mobile banking application to avoid late fees.' -> Đáp án B.",
          audioText: "Hello Mr. Tu. ... To ensure you never miss an electricity or internet bill again, I recommend setting up automated recurring bill payments directly in our mobile banking application. ... It takes just two minutes to configure and is completely free of transaction fees."
        },
        {
          id: "L4",
          question: "Where should passengers on flight QR970 claim their checked baggage?",
          options: [
            { key: "A", text: "Carousel 3 in the domestic terminal" },
            { key: "B", text: "Carousel 7 in the international arrival hall" },
            { key: "C", text: "At the oversize luggage counter near Exit E" },
            { key: "D", text: "At the customs inspection desk" }
          ],
          correctAnswer: "B",
          explanation: "Phát thanh tại sân bay: 'Passengers arriving on flight QR970 from Doha may collect their checked luggage from Baggage Carousel 7 in the international arrival hall.' -> Băng chuyền số 7 (B).",
          audioText: "Attention passengers arriving on flight QR970 from Doha. ... Your checked baggage is now arriving on Baggage Carousel 7 in the central international arrival hall. ... If you require baggage assistance, please contact ground staff at counter C."
        },
        {
          id: "L5",
          question: "What time does the university cafeteria stop serving hot breakfast?",
          options: [
            { key: "A", text: "At 7:30 AM" },
            { key: "B", text: "At 9:30 AM" },
            { key: "C", text: "At 11:00 AM" },
            { key: "D", text: "At 1:00 PM" }
          ],
          correctAnswer: "B",
          explanation: "Nhân viên nhà ăn thông báo: 'Please note that our hot breakfast menu, including noodle soups and pancakes, concludes at 9:30 AM.' -> 9:30 AM (B).",
          audioText: "Good morning campus diners! ... Please note that our hot breakfast menu, including noodle soups and pancakes, concludes at 9:30 AM sharp. ... After that time, only grab-and-go sandwiches, fruit cups, and hot beverages will be available until lunchtime."
        },
        {
          id: "L6",
          question: "What is the primary requirement for entering the university language lab?",
          options: [
            { key: "A", text: "Bringing an external USB flash drive and headphones" },
            { key: "B", text: "Paying five thousand dong per hour" },
            { key: "C", text: "Completing a paper registration form each visit" },
            { key: "D", text: "Wearing formal business suits" }
          ],
          correctAnswer: "A",
          explanation: "Cán bộ phòng máy hướng dẫn: 'All students must bring their own standard 3.5mm headphones and a USB flash drive to save pronunciation practice files.' -> Tai nghe và USB (A).",
          audioText: "Welcome to Language Laboratory 201. ... All students must bring their own standard 3.5mm headphones and a USB flash drive to save pronunciation practice files. ... Food and sweetened beverages are strictly prohibited inside the lab room."
        },
        {
          id: "L7",
          question: "Which highway section is closed for repaving this Friday night?",
          options: [
            { key: "A", text: "Ring Road 3 between My Dinh and Linh Dam" },
            { key: "B", text: "The Red River bridge access ramp" },
            { key: "C", text: "The downtown shopping boulevard" },
            { key: "D", text: "The airport express tunnel" }
          ],
          correctAnswer: "A",
          explanation: "Bản tin giao thông: 'Ring Road 3 elevated highway between My Dinh and Linh Dam will be completely closed for road repaving from 10:00 PM Friday to 5:00 AM Saturday.' -> Đáp án A.",
          audioText: "City highway advisory: ... Ring Road 3 elevated highway between My Dinh and Linh Dam will be completely closed for road repaving from 10:00 PM Friday to 5:00 AM Saturday. ... Commuters heading south should detour along Pham Hung and Giai Phong avenues."
        },
        {
          id: "L8",
          question: "What free amenity does the boutique hotel offer to all guests?",
          options: [
            { key: "A", text: "Free laundry service for five shirts" },
            { key: "B", text: "Free traditional afternoon tea from 3:00 PM to 5:00 PM" },
            { key: "C", text: "Free bicycle rentals for three days" },
            { key: "D", text: "Free helicopter city tours" }
          ],
          correctAnswer: "B",
          explanation: "Lễ tân khách sạn giới thiệu: 'We invite you to enjoy our complimentary traditional afternoon tea served daily in the courtyard garden between 3:00 PM and 5:00 PM.' -> Trà chiều miễn phí (B).",
          audioText: "Welcome to Old Quarter Boutique Hotel, Ms. Rachel! ... As our resident guest, we invite you to enjoy our complimentary traditional afternoon tea served daily in the courtyard garden between 3:00 PM and 5:00 PM. ... Fresh lotus tea and local pastries are included."
        }
      ]
    },

    part2: {
      title: "Part 2: 3 Đoạn Hội Thoại Đời Sống & Du Lịch (12 câu)",
      instructions: "Bạn sẽ nghe 3 đoạn hội thoại. Mỗi đoạn có 4 câu hỏi. Các đoạn hội thoại chỉ nghe một lần duy nhất.",
      conversations: [
        {
          id: "C1",
          title: "Hội thoại 1: Đổi vé máy bay do lịch thi thay đổi (Flight Ticket Rescheduling)",
          audioTranscript: "Woman: Good morning, Skyline Airways Customer Support. My name is Jenny, how may I assist you today?\nMan: Hello Jenny. ... I booked a round-trip ticket from Hanoi to Ho Chi Minh City for next Friday on flight SK312. ... However, my university has rescheduled my final graduation exam to that exact Friday morning, so I urgently need to change my departure flight to Saturday.\nWoman: I certainly understand your situation, sir. ... May I please have your six-character booking reference code and full name?\nMan: Yes, the booking code is H-N-7-8-X-K, under the name Nguyen Quoc Viet.\nWoman: Thank you, Mr. Viet. ... Let me check our flight schedule for Saturday, July 15th. ... We have a departure at 8:15 AM on flight SK314, and another at 2:45 PM on flight SK318. ... Both flights have available economy seats.\nMan: The 8:15 AM flight would be ideal! ... Could you tell me what fees will apply for the change?\nWoman: Since you hold a Flexible Economy ticket, the itinerary change fee is completely waived. ... You only need to pay the fare difference of 180,000 VND because the Saturday morning flight is slightly higher in demand.\nMan: That is wonderful news! I'll pay the fare difference by credit card right now.",
          questions: [
            {
              id: "L9",
              question: "Why does Mr. Viet need to change his flight departure date?",
              options: [
                { key: "A", text: "He caught a severe cold" },
                { key: "B", text: "His university rescheduled his final graduation examination to Friday" },
                { key: "C", text: "His hotel reservation in Ho Chi Minh City was canceled" },
                { key: "D", text: "He lost his national identification card" }
              ],
              correctAnswer: "B",
              explanation: "Việt cần đổi vé vì trường đại học dời lịch thi tốt nghiệp sang đúng sáng thứ Sáu (B)."
            },
            {
              id: "L10",
              question: "Which new flight does Mr. Viet choose?",
              options: [
                { key: "A", text: "The 8:15 AM flight on Saturday" },
                { key: "B", text: "The 2:45 PM flight on Saturday" },
                { key: "C", text: "A late-night flight on Sunday" },
                { key: "D", text: "A red-eye flight on Friday midnight" }
              ],
              correctAnswer: "A",
              explanation: "Việt chọn chuyến bay lúc 8:15 sáng thứ Bảy ('The 8:15 AM flight would be ideal') (A)."
            },
            {
              id: "L11",
              question: "Why is the ticket change fee waived for Mr. Viet?",
              options: [
                { key: "A", text: "Because he is a university student" },
                { key: "B", text: "Because he purchased a Flexible Economy ticket" },
                { key: "C", text: "Because the airline had canceled his previous flight" },
                { key: "D", text: "Because he is flying on his birthday" }
              ],
              correctAnswer: "B",
              explanation: "Nhân viên giải thích: do anh sở hữu vé hạng Phổ thông Linh hoạt (Flexible Economy) nên được miễn phí đổi ngày (B)."
            },
            {
              id: "L12",
              question: "How much fare difference does Mr. Viet have to pay?",
              options: [
                { key: "A", text: "50,000 VND" },
                { key: "B", text: "180,000 VND" },
                { key: "C", text: "350,000 VND" },
                { key: "D", text: "500,000 VND" }
              ],
              correctAnswer: "B",
              explanation: "Khách hàng chỉ cần trả tiền chênh lệch giá vé là 180,000 VND (B)."
            }
          ]
        },
        {
          id: "C2",
          title: "Hội thoại 2: Thuê nhà trọ sinh viên và tìm bạn cùng phòng (Flatmate & Dorm Hunting)",
          audioTranscript: "Man: Hey An, have you found a new shared apartment near the foreign languages campus yet? The lease on our current place expires in three weeks.\nWoman: Hi Duc! ... Yes, I visited two properties yesterday near Chua Lang Street. ... One is a newly renovated three-bedroom apartment, and the other is a traditional private townhouse.\nMan: Which one looked more promising in terms of budget and living conditions?\nWoman: Definitely the three-bedroom apartment! ... It's on the sixth floor of a quiet residential building with an elevator. ... The living room is spacious, each bedroom has its own private balcony, and it's only an eight-minute walk to our university lecture halls.\nMan: That sounds fantastic! What's the total monthly rent, and how would we divide the costs?\nWoman: The total rent is nine million VND per month. ... If we invite our classmate Linh to take the third bedroom, each person would only pay three million VND. ... The landlord also agreed to include high-speed fiber internet in the base rent.\nMan: That's well within our student budget! Three million each is very reasonable for that location. ... Did the landlord mention anything about the electricity rate?\nWoman: Yes, it's calculated using the standard household government tariff, not commercial business rates, so utility bills won't be high.\nMan: Excellent! Let's arrange a time for all three of us to sign the deposit contract this Saturday.",
          questions: [
            {
              id: "L13",
              question: "Where is the three-bedroom apartment located?",
              options: [
                { key: "A", text: "Near Chua Lang Street, an 8-minute walk to university" },
                { key: "B", text: "Ten kilometers outside the city center" },
                { key: "C", text: "Opposite the national airport" },
                { key: "D", text: "Above a noisy highway gas station" }
              ],
              correctAnswer: "A",
              explanation: "Căn hộ nằm gần phố Chùa Láng, cách trường đại học 8 phút đi bộ (A)."
            },
            {
              id: "L14",
              question: "How much will each person pay if three people share the apartment?",
              options: [
                { key: "A", text: "Two million VND" },
                { key: "B", text: "Three million VND" },
                { key: "C", text: "Four million five hundred thousand VND" },
                { key: "D", text: "Nine million VND" }
              ],
              correctAnswer: "B",
              explanation: "Tổng tiền thuê là 9 triệu, chia 3 người mỗi người 3 triệu VND ('each person would only pay three million VND') (B)."
            },
            {
              id: "L15",
              question: "Which utility is already included in the monthly rent by the landlord?",
              options: [
                { key: "A", text: "Daily laundry service" },
                { key: "B", text: "High-speed fiber internet" },
                { key: "C", text: "Cooking gas tanks" },
                { key: "D", text: "Motorcycle underground parking fees" }
              ],
              correctAnswer: "B",
              explanation: "Chủ nhà đồng ý miễn phí internet cáp quang tốc độ cao (B)."
            },
            {
              id: "L16",
              question: "When do Duc, An, and Linh plan to sign the deposit contract?",
              options: [
                { key: "A", text: "Immediately this evening" },
                { key: "B", text: "This coming Saturday" },
                { key: "C", text: "Next month after exams" },
                { key: "D", text: "On Sunday afternoon" }
              ],
              correctAnswer: "B",
              explanation: "Đức chốt: 'Let's arrange a time for all three of us to sign the deposit contract this Saturday' (B)."
            }
          ]
        },
        {
          id: "C3",
          title: "Hội thoại 3: Tư vấn mở thẻ tín dụng sinh viên (Student Credit Card Advisory)",
          audioTranscript: "Woman: Good morning sir. Welcome to VietinBank. How can I help you today?\nMan: Good morning. ... I'm a senior student graduating this year, and I'd like to ask about applying for my first credit card to build my personal credit history.\nWoman: That's a very wise financial step, sir! ... We offer our specialized 'Youth Starter' Visa Card designed specifically for university students and young professionals. ... It has zero annual fee for the first two years and requires no proof of collateral.\nMan: That sounds great! ... What is the credit limit on this card, and what are the interest terms?\nWoman: The introductory credit limit is ten million VND, which can be increased once you secure full-time employment. ... We provide a 45-day interest-free grace period on all purchases. ... That means if you pay your monthly statement balance in full before the due date, you pay zero interest.\nMan: That's very clear. ... What documentation do I need to provide for the application?\nWoman: You simply need your valid Citizen ID card, your official student card, and a certified copy of your university transcript or certificate of enrollment.\nMan: Perfect! I brought all those documents in my backpack. Can we start the application now?\nWoman: Absolutely! Please take a seat right here, and I will prepare the application form.",
          questions: [
            {
              id: "L17",
              question: "Why does the student want to open his first credit card?",
              options: [
                { key: "A", text: "To buy an expensive sports motorcycle" },
                { key: "B", text: "To start building his personal credit history" },
                { key: "C", text: "To transfer money overseas to his parents" },
                { key: "D", text: "To borrow cash for tuition debt" }
              ],
              correctAnswer: "B",
              explanation: "Sinh viên muốn mở thẻ để bắt đầu xây dựng lịch sử tín dụng cá nhân ('build my personal credit history') (B)."
            },
            {
              id: "L18",
              question: "What is an attractive feature of the 'Youth Starter' card?",
              options: [
                { key: "A", text: "Free international airline tickets every month" },
                { key: "B", text: "Zero annual fee for the first two years and no collateral needed" },
                { key: "C", text: "Cash back of fifty percent on all electronics" },
                { key: "D", text: "Unlimited credit limit from day one" }
              ],
              correctAnswer: "B",
              explanation: "Thẻ miễn phí thường niên 2 năm đầu và không cần tài sản thế chấp (B)."
            },
            {
              id: "L19",
              question: "How long is the interest-free grace period on purchases?",
              options: [
                { key: "A", text: "Fifteen days" },
                { key: "B", text: "Thirty days" },
                { key: "C", text: "Forty-five days" },
                { key: "D", text: "Sixty days" }
              ],
              correctAnswer: "C",
              explanation: "Thời gian miễn lãi là 45 ngày nếu thanh toán toàn bộ dư nợ đúng hạn ('45-day interest-free grace period') (C)."
            },
            {
              id: "L20",
              question: "Which document does the applicant NOT need to provide?",
              options: [
                { key: "A", text: "His valid Citizen ID card" },
                { key: "B", text: "His official student card" },
                { key: "C", text: "A home land ownership deed" },
                { key: "D", text: "A certified university enrollment certificate" }
              ],
              correctAnswer: "C",
              explanation: "Hồ sơ chỉ cần CCCD, thẻ sinh viên và giấy xác nhận sinh viên; không yêu cầu sổ đỏ nhà đất (C)."
            }
          ]
        }
      ]
    },

    part3: {
      title: "Part 3: 3 Bài Giảng & Thuyết Trình Học Thuật (15 câu)",
      instructions: "Trong phần này, bạn sẽ nghe 3 bài giảng học thuật. Mỗi bài có 5 câu hỏi. Hãy chọn câu trả lời đúng nhất.",
      talks: [
        {
          id: "T1",
          title: "Bài giảng 1: Kiến Trúc Bền Vững & Công Trình Xanh (Sustainable Green Architecture)",
          audioTranscript: "Good morning class. ... Today we examine Sustainable Architecture, a transformative design paradigm revolutionizing modern civil engineering.\nHistorically, buildings have been voracious consumers of energy and raw materials. ... In fact, the commercial and residential building sector accounts for nearly forty percent of global carbon emissions and over thirty percent of worldwide raw material consumption, primarily through energy-intensive concrete manufacturing, air conditioning, and artificial illumination.\nSustainable architecture seeks to minimize this ecological footprint through passive design principles. ... First, architects optimize building orientation relative to the sun's trajectory. ... In tropical climates, placing major glazed windows toward the north and south while shading east- and west-facing facades drastically reduces solar thermal absorption, slashing cooling electricity demand by up to thirty-five percent.\nSecond, natural cross-ventilation is integrated through thermal chimneys and central lightwells, encouraging cooling breezes without mechanical fans. ... Third, green architects utilize sustainable materials such as cross-laminated timber, recycled industrial steel, and permeable paving that replenishes underground groundwater.\nFurthermore, the integration of living green walls and rooftop gardens provides vital urban insulation while mitigating the urban heat island effect. ... In our next seminar, we will examine the international LEED certification rating system.",
          questions: [
            {
              id: "L21",
              question: "What percentage of global carbon emissions is attributed to the building sector?",
              options: [
                { key: "A", text: "Ten percent" },
                { key: "B", text: "Twenty percent" },
                { key: "C", text: "Nearly forty percent" },
                { key: "D", text: "Over seventy percent" }
              ],
              correctAnswer: "C",
              explanation: "Ngành xây dựng và vận hành nhà cửa chiếm gần 40% lượng phát thải carbon toàn cầu ('nearly forty percent') (C)."
            },
            {
              id: "L22",
              question: "How does optimizing building orientation reduce cooling demand in tropical climates?",
              options: [
                { key: "A", text: "By placing large windows toward the east" },
                { key: "B", text: "By placing major windows north and south and shading east-west facades" },
                { key: "C", text: "By eliminating all windows from the entire structure" },
                { key: "D", text: "By painting walls with black industrial varnish" }
              ],
              correctAnswer: "B",
              explanation: "Đoạn 2 nêu: bố trí cửa sổ lớn hướng Bắc - Nam và che chắn hướng Đông - Tây giúp giảm 35% điện năng làm mát (B)."
            },
            {
              id: "L23",
              question: "By how much can passive solar orientation reduce air conditioning energy usage?",
              options: [
                { key: "A", text: "Up to ten percent" },
                { key: "B", text: "Up to thirty-five percent" },
                { key: "C", text: "Fifty percent" },
                { key: "D", text: "Ninety percent" }
              ],
              correctAnswer: "B",
              explanation: "Thiết kế thụ động có thể cắt giảm tới 35% nhu cầu làm mát ('slashing cooling electricity demand by up to thirty-five percent') (B)."
            },
            {
              id: "L24",
              question: "Which building material is highlighted as an eco-friendly alternative in green architecture?",
              options: [
                { key: "A", text: "Non-biodegradable synthetic foam" },
                { key: "B", text: "Cross-laminated timber and recycled industrial steel" },
                { key: "C", text: "Solid lead plates" },
                { key: "D", text: "Toxic chemical sealants" }
              ],
              correctAnswer: "B",
              explanation: "Gỗ dán nhiều lớp (cross-laminated timber) và thép tái chế là các vật liệu xanh tiêu biểu (B)."
            },
            {
              id: "L25",
              question: "What environmental benefit do rooftop gardens and living green walls provide?",
              options: [
                { key: "A", text: "They attract commercial airplane flights" },
                { key: "B", text: "They provide thermal insulation and mitigate the urban heat island effect" },
                { key: "C", text: "They make buildings completely fireproof" },
                { key: "D", text: "They generate commercial petroleum fuel" }
              ],
              correctAnswer: "B",
              explanation: "Vườn trên mái giúp cách nhiệt tự nhiên và giảm thiểu hiệu ứng đảo nhiệt đô thị (B)."
            }
          ]
        },
        {
          id: "T2",
          title: "Bài giảng 2: Tiến Hóa Ngôn Ngữ Loài Người & Giao Tiếp Xã Hội (Evolution of Human Language)",
          audioTranscript: "Good afternoon class. ... Today in evolutionary anthropology, we investigate one of the defining characteristics of our species: the origin and evolution of complex human language.\nUnlike animal communication systems, which rely on a finite set of fixed acoustic calls for specific stimuli like warning of a predator, human language possesses open-ended combinatorial syntax. ... With a limited inventory of approximately forty basic phonemes, human speakers can generate an infinite variety of novel sentences expressing abstract ideas, past memories, and hypothetical futures.\nWhen did this revolutionary capacity emerge? ... Fossil skull morphology suggests that our hominin ancestors underwent critical anatomical adaptations around two hundred thousand years ago. ... The human larynx descended into the throat, and the tongue developed precise motor coordination, creating a vocal tract capable of producing nuanced speech sounds.\nSimultaneously, the FOXP2 gene underwent critical mutations associated with rapid oral-facial motor control. ... However, evolutionary psychologists emphasize that vocal anatomy was only one part of the puzzle. ... Language evolved primarily as a social grooming tool to maintain cooperation and trust within expanding tribal communities that were becoming too large for physical grooming.\nLanguage allowed our ancestors to gossip, negotiate alliances, transmit complex hunting techniques across generations, and establish collective cultural mythologies that bound thousands of strangers into collaborative societies.",
          questions: [
            {
              id: "L26",
              question: "What distinguishes human language from animal communication systems?",
              options: [
                { key: "A", text: "Animals have more complex grammar rules than humans" },
                { key: "B", text: "Human language has open-ended syntax capable of generating infinite novel sentences" },
                { key: "C", text: "Human language consists of only two basic vocal calls" },
                { key: "D", text: "Animals communicate only using written symbols" }
              ],
              correctAnswer: "B",
              explanation: "Ngôn ngữ loài người có cú pháp kết hợp mở (open-ended syntax) giúp tạo ra vô số câu diễn đạt ý niệm trừu tượng (B)."
            },
            {
              id: "L27",
              question: "What anatomical adaptation occurred in human ancestors around 200,000 years ago?",
              options: [
                { key: "A", text: "The development of sharp predatory claws" },
                { key: "B", text: "The descent of the larynx and precise tongue motor control" },
                { key: "C", text: "The loss of hearing ability in old age" },
                { key: "D", text: "The shrinking of brain volume by half" }
              ],
              correctAnswer: "B",
              explanation: "Hầu họng hạ thấp và lưỡi phát triển điều khiển cơ tinh vi giúp phát ra các âm sắc đa dạng (B)."
            },
            {
              id: "L28",
              question: "Which specific gene mutation is linked to oral-facial motor coordination for speech?",
              options: [
                { key: "A", text: "The BRCA1 gene" },
                { key: "B", text: "The FOXP2 gene" },
                { key: "C", text: "The APOE4 gene" },
                { key: "D", text: "The COVID-19 RNA strand" }
              ],
              correctAnswer: "B",
              explanation: "Gen FOXP2 liên quan mật thiết đến điều khiển vận động cơ mặt và phát âm (B)."
            },
            {
              id: "L29",
              question: "According to evolutionary psychologists, why did human language primarily evolve?",
              options: [
                { key: "A", text: "To win musical singing competitions" },
                { key: "B", text: "As a social tool to maintain trust and cooperation in expanding communities" },
                { key: "C", text: "To write mathematical formulas on cave walls" },
                { key: "D", text: "To replace physical eyesight during dark nights" }
              ],
              correctAnswer: "B",
              explanation: "Ngôn ngữ tiến hóa như công cụ xã hội để duy trì niềm tin và hợp tác khi cộng đồng ngày càng đông (B)."
            },
            {
              id: "L30",
              question: "How did language help ancient human tribes survive and thrive?",
              options: [
                { key: "A", text: "By allowing them to sleep underwater" },
                { key: "B", text: "By negotiating alliances, transmitting hunting skills, and creating shared cultures" },
                { key: "C", text: "By eliminating the need to eat food" },
                { key: "D", text: "By stopping all physical warfare forever" }
              ],
              correctAnswer: "B",
              explanation: "Ngôn ngữ giúp đàm phán liên minh, truyền dạy kỹ năng săn bắn qua nhiều thế hệ và tạo ra thần thoại văn hóa chung (B)."
            }
          ]
        },
        {
          id: "T3",
          title: "Bài giảng 3: Bảo Tồn Di Sản Văn Hóa Trong Kỷ Nguyên Số (Digital Cultural Heritage)",
          audioTranscript: "Good morning class. ... Today we examine the intersection of digital technology and cultural heritage preservation.\nThroughout human history, physical cultural monuments, ancient manuscripts, and historical temples have been exceptionally vulnerable to catastrophic perils: ... natural disasters like earthquakes and floods, armed warfare, atmospheric pollution, and the silent wear of mass tourism.\nIn recent years, 3D laser scanning technology, known as LiDAR, and high-resolution photogrammetry have pioneered a digital renaissance in preservation. ... By capturing billions of spatial coordinate measurements called point clouds, conservators can construct ultra-accurate millimeter-scale digital twins of historical architecture.\nWhen the Notre-Dame Cathedral in Paris suffered its devastating fire in 2019, architects relied heavily on precise millimeter-accurate 3D laser scans recorded by the late art historian Andrew Tallon to reconstruct the fallen timber spire and vaulted stone ceilings.\nFurthermore, digital technologies democratize cultural access. ... Virtual Reality (VR) and interactive digital museum archives allow students in Vietnam to explore the tomb of Tutankhamun in Egypt or examine delicate ancient calligraphy scrolls housed in London, without subjecting fragile physical artifacts to environmental degradation.\nHowever, digital conservation presents its own preservation dilemmas: ... digital data formats degrade quickly as software becomes obsolete, requiring regular cloud migration and cybersecurity protection against digital vandalism. ... In our upcoming session, we will examine international protocols for digital archiving.",
          questions: [
            {
              id: "L31",
              question: "What threats have historically endangered physical cultural heritage sites?",
              options: [
                { key: "A", text: "Excessive smartphone usage among schoolchildren" },
                { key: "B", text: "Natural disasters, warfare, atmospheric pollution, and mass tourism" },
                { key: "C", text: "Lack of commercial gift shops" },
                { key: "D", text: "High cost of airplane tickets" }
              ],
              correctAnswer: "B",
              explanation: "Di sản vật thể thường bị đe dọa bởi thiên tai, chiến tranh, ô nhiễm và du lịch đại chúng (B)."
            },
            {
              id: "L32",
              question: "How does LiDAR laser scanning assist heritage conservators?",
              options: [
                { key: "A", text: "By chemically cleaning old stones with acids" },
                { key: "B", text: "By capturing billions of spatial points to create millimeter-accurate digital twins" },
                { key: "C", text: "By painting modern murals over ancient carvings" },
                { key: "D", text: "By melting down metallic statues for scrap" }
              ],
              correctAnswer: "B",
              explanation: "Công nghệ quét laser LiDAR thu thập hàng tỷ tọa độ điểm để tạo bản sao kỹ thuật số chính xác tới từng milimet (B)."
            },
            {
              id: "L33",
              question: "How did 3D laser scans aid the reconstruction of Notre-Dame Cathedral in Paris?",
              options: [
                { key: "A", text: "They predicted the exact time of the fire" },
                { key: "B", text: "They provided accurate millimeter measurements to rebuild the timber spire and ceilings" },
                { key: "C", text: "They were used to extinguish the flames" },
                { key: "D", text: "They replaced the church with an office skyscraper" }
              ],
              correctAnswer: "B",
              explanation: "Bản quét 3D của Andrew Tallon giúp các kiến trúc sư tái thiết chính xác ngọn tháp gỗ và vòm đá bị sập (B)."
            },
            {
              id: "L34",
              question: "How does Virtual Reality (VR) democratize cultural access for students worldwide?",
              options: [
                { key: "A", text: "By paying students cash to visit museums" },
                { key: "B", text: "By enabling remote exploration of global monuments without degrading fragile artifacts" },
                { key: "C", text: "By replacing all university classroom lectures permanently" },
                { key: "D", text: "By banning real-world international travel" }
              ],
              correctAnswer: "B",
              explanation: "VR giúp sinh viên ở bất cứ đâu tham quan di tích thế giới từ xa mà không làm tổn hại hiện vật gốc (B)."
            },
            {
              id: "L35",
              question: "What technical challenge is associated with digital archiving?",
              options: [
                { key: "A", text: "Computers running out of plastic components" },
                { key: "B", text: "Digital data formats becoming obsolete and requiring regular migration" },
                { key: "C", text: "Laser scanners causing historic buildings to crack" },
                { key: "D", text: "Virtual reality headsets being illegal in schools" }
              ],
              correctAnswer: "B",
              explanation: "Thách thức của lưu trữ số: định dạng phần mềm nhanh lỗi thời, đòi hỏi liên tục chuyển đổi và bảo mật dữ liệu (B)."
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
        title: "Passage 1: Sustainable Architecture & Green Building Technologies",
        wordCount: 470,
        genre: "Kỹ thuật Xây dựng & Môi trường",
        text: `In contemporary urban civil engineering, the discipline of sustainable architecture has evolved from a niche specialty into an imperative global design philosophy. The construction and daily operation of traditional buildings exert an enormous ecological strain: globally, the built environment accounts for nearly forty percent of all energy-related carbon dioxide emissions, thirty-six percent of final energy consumption, and twelve percent of global freshwater withdrawal. From energy-intensive cement manufacturing to continuous indoor air-conditioning, buildings are primary drivers of resource depletion.

In response, green architects employ passive solar design as a foundational strategy. Passive design harnesses natural climatic elements to achieve thermal comfort without relying heavily on mechanical equipment. In temperate and tropical zones alike, the orientation of a building relative to the sun is paramount. By aligning major window facades along north-south axes and incorporating exterior horizontal louvers, architects prevent excessive solar heat gain during intense daylight hours, dramatically reducing electrical air-conditioning loads by up to thirty-five percent. Furthermore, strategically placed operable windows and interior ventilation shafts create convective airflow, continuously circulating fresh air through rooms via natural buoyancy.

Complementing passive design is the innovative deployment of sustainable building materials. Conventional reinforced concrete is notorious for its carbon-intensive footprint, generating roughly eight percent of global greenhouse gas emissions during cement clinker production. Today, engineers are replacing traditional concrete with cross-laminated timber (CLT)—an engineered wood product manufactured from sustainably harvested timber. CLT possesses structural strength comparable to steel, yet acts as a carbon sink by sequestering atmospheric carbon within building walls for decades.

Finally, integrating vegetative ecosystems into architectural envelopes has revolutionized urban biophilia. Extensive rooftop gardens and living vertical walls act as natural thermal blankets, providing substantial insulation that lowers interior temperature fluctuations. On an urban scale, wide adoption of green roofs mitigates the severe 'urban heat island' phenomenon, where asphalt and concrete surfaces trap solar radiation and elevate city temperatures. Through these holistic interventions, sustainable architecture proves that high-density modern living can harmoniously coexist with ecological equilibrium.`,
        questions: [
          {
            id: "R1",
            question: "What is the primary topic of Passage 1?",
            options: [
              { key: "A", text: "The historical origins of Roman marble temples" },
              { key: "B", text: "The principles, materials, and urban benefits of sustainable architecture" },
              { key: "C", text: "The chemistry of petroleum-based plastic paints" },
              { key: "D", text: "Methods for digging underground metro tunnels" }
            ],
            correctAnswer: "B",
            explanation: "Bài viết trình bày toàn diện về nguyên lý thiết kế thụ động, vật liệu xanh và lợi ích đô thị của kiến trúc bền vững (B)."
          },
          {
            id: "R2",
            question: "According to Paragraph 1, what percentage of global energy-related carbon emissions comes from buildings?",
            options: [
              { key: "A", text: "Ten percent" },
              { key: "B", text: "Nearly forty percent" },
              { key: "C", text: "Sixty-five percent" },
              { key: "D", text: "Eighty-five percent" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 1 nêu: 'built environment accounts for nearly forty percent of all energy-related carbon dioxide emissions' (B)."
          },
          {
            id: "R3",
            question: "How does passive solar design reduce cooling loads?",
            options: [
              { key: "A", text: "By installing giant diesel air conditioners in basements" },
              { key: "B", text: "By aligning major windows north-south and using exterior louvers to prevent heat gain" },
              { key: "C", text: "By painting all windows with opaque black paint" },
              { key: "D", text: "By removing all interior ceilings" }
            ],
            correctAnswer: "B",
            explanation: "Bố trí cửa sổ lớn hướng Bắc - Nam và dùng lam chắn nắng giúp ngăn nhiệt lượng mặt trời xâm nhập (B)."
          },
          {
            id: "R4",
            question: "By how much can passive orientation reduce air-conditioning electricity usage?",
            options: [
              { key: "A", text: "Five percent" },
              { key: "B", text: "Up to thirty-five percent" },
              { key: "C", text: "Fifty percent" },
              { key: "D", text: "Over eighty percent" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 2 nêu rõ: 'slashing cooling electricity demand by up to thirty-five percent' (B)."
          },
          {
            id: "R5",
            question: "What is highlighted as an eco-friendly structural replacement for conventional concrete?",
            options: [
              { key: "A", text: "Non-biodegradable synthetic foam" },
              { key: "B", text: "Cross-laminated timber (CLT)" },
              { key: "C", text: "Industrial fiberglass sheets" },
              { key: "D", text: "Crushed plastic bottles" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 3 chỉ ra: 'replacing traditional concrete with cross-laminated timber (CLT)' (B)."
          },
          {
            id: "R6",
            question: "Why is cross-laminated timber (CLT) considered environmentally beneficial?",
            options: [
              { key: "A", text: "It dissolves naturally when it rains" },
              { key: "B", text: "It possesses high structural strength and sequesters carbon within building walls" },
              { key: "C", text: "It produces electrical energy from sunlight" },
              { key: "D", text: "It requires zero nails or screws during construction" }
            ],
            correctAnswer: "B",
            explanation: "CLT có độ bền tương đương thép và đóng vai trò như bể chứa cô lập carbon trong nhiều thập kỷ (B)."
          },
          {
            id: "R7",
            question: "The word 'paramount' in Paragraph 2 is closest in meaning to:",
            options: [
              { key: "A", text: "Of supreme importance or vital significance" },
              { key: "B", text: "Extremely cheap and trivial" },
              { key: "C", text: "Completely optional" },
              { key: "D", text: "Temporarily delayed" }
            ],
            correctAnswer: "A",
            explanation: "Paramount có nghĩa là tối quan trọng, có ý nghĩa quyết định (supreme importance) (A)."
          },
          {
            id: "R8",
            question: "How do rooftop gardens help mitigate the 'urban heat island' phenomenon?",
            options: [
              { key: "A", text: "By absorbing heat and providing thermal insulation" },
              { key: "B", text: "By generating artificial sea breezes" },
              { key: "C", text: "By reflecting laser beams into space" },
              { key: "D", text: "By pumping cold water into city sewers" }
            ],
            correctAnswer: "A",
            explanation: "Đoạn 4 giải thích: vườn mái hoạt động như tấm chăn cách nhiệt tự nhiên, giảm nhiệt độ hấp thụ của bê tông và nhựa đường (A)."
          },
          {
            id: "R9",
            question: "It can be inferred from the passage that traditional concrete:",
            options: [
              { key: "A", text: "Is an energy-intensive material with a significant carbon footprint" },
              { key: "B", text: "Will be completely banned across the globe next year" },
              { key: "C", text: "Produces zero carbon emissions during manufacturing" },
              { key: "D", text: "Has no structural strength whatsoever" }
            ],
            correctAnswer: "A",
            explanation: "Đoạn 3 nêu bê tông xi măng tạo ra khoảng 8% lượng khí nhà kính toàn cầu -> lượng carbon footprint rất lớn (A)."
          },
          {
            id: "R10",
            question: "What is the author's primary intention in this passage?",
            options: [
              { key: "A", text: "To persuade readers to abandon city living entirely" },
              { key: "B", text: "To explain how sustainable architectural techniques reduce environmental impacts" },
              { key: "C", text: "To promote commercial timber sales for logging companies" },
              { key: "D", text: "To criticize modern skyscrapers for aesthetic flaws" }
            ],
            correctAnswer: "B",
            explanation: "Mục đích là giải thích các phương pháp kiến trúc xanh giúp giảm thiểu tác động tiêu cực đến môi trường (B)."
          }
        ]
      },
      {
        id: "P2",
        title: "Passage 2: The Evolution of Human Language & Cognitive Modernity",
        wordCount: 460,
        genre: "Nhân chủng học & Ngôn ngữ học",
        text: `Among all the cognitive attributes that distinguish Homo sapiens from other primates, none is more profound or pervasive than human language. While various non-human species exhibit sophisticated communicative signaling—such as the alarm calls of vervet monkeys distinguishing aerial eagles from terrestrial leopards, or the intricate waggle dance of honeybees signaling flower coordinates—these animal systems remain stimulus-bound and non-productive. In contrast, human language possesses recursive syntax: using a finite inventory of discrete phonemes, humans can formulate an infinite continuum of structured expressions conveying abstract ideas, counterfactual conditions, and distant chronological events.

Evolutionary anthropologists and linguists have long debated the precise timeframe and neurological mechanisms underpinning this cognitive leap. Paleoneurological examinations of fossil hominin crania indicate that significant anatomical adaptations materialized roughly two hundred thousand years ago. The gradual descent of the human larynx into the throat cavity, coupled with nuanced motor innervation of the tongue and vocal tract, enabled Homo sapiens to articulate distinct phonetic vowels and consonants with extraordinary speed and precision.

Concurrently, geneticists have identified key evolutionary modifications in the FOXP2 gene. Individuals possessing mutations in this transcription factor suffer from severe verbal dyspraxia, characterized by an inability to execute coordinated oral-facial muscular sequences required for fluid speech. This indicates that while vocal tract anatomy established the acoustic hardware, neural mutations wired the computational software of articulation.

Yet, cognitive scientists emphasize that physiological speech capacity was fundamentally driven by social imperatives. According to the 'social grooming' hypothesis championed by anthropologist Robin Dunbar, language evolved as an efficient mechanism for social cohesion. In expanding hominin bands that surpassed the threshold of fifty to one hundred individuals, manual physical grooming became mathematically impossible to sustain. Language emerged as vocal grooming, allowing early humans to bond, exchange social intelligence, establish binding moral pacts, and construct shared cultural mythologies that united thousands of unrelated individuals into cohesive collaborative networks.`,
        questions: [
          {
            id: "R11",
            question: "What is the primary distinction between animal communication and human language?",
            options: [
              { key: "A", text: "Animal communication is louder than human speech" },
              { key: "B", text: "Human language has recursive syntax that produces infinite novel expressions" },
              { key: "C", text: "Animals only communicate using written symbols" },
              { key: "D", text: "Human speech relies entirely on fixed genetic alarm calls" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 1 nêu: ngôn ngữ loài người có cú pháp đệ quy (recursive syntax), tạo ra vô số câu mới từ số lượng âm vị hữu hạn (B)."
          },
          {
            id: "R12",
            question: "What anatomical adaptation occurred in human ancestors around 200,000 years ago?",
            options: [
              { key: "A", text: "The descent of the larynx into the throat and precise tongue motor innervation" },
              { key: "B", text: "The evolution of feathered wings for flight" },
              { key: "C", text: "The permanent loss of all molar teeth" },
              { key: "D", text: "The shrinking of the cerebral cortex" }
            ],
            correctAnswer: "A",
            explanation: "Hầu họng hạ thấp và lưỡi được phân bố thần kinh vận động tinh xảo giúp phát âm nguyên âm/phụ âm rõ ràng (A)."
          },
          {
            id: "R13",
            question: "What disability occurs in individuals with mutations in the FOXP2 gene?",
            options: [
              { key: "A", text: "Complete blindness in daylight" },
              { key: "B", text: "Verbal dyspraxia and inability to coordinate oral-facial muscles for speech" },
              { key: "C", text: "Severe memory loss regarding geometric shapes" },
              { key: "D", text: "Physical inability to walk upright" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 3 nêu: đột biến gen FOXP2 dẫn đến chứng khó phối hợp động tác phát âm (verbal dyspraxia) (B)."
          },
          {
            id: "R14",
            question: "The word 'innervation' in Paragraph 2 refers to:",
            options: [
              { key: "A", text: "The supply of nerves to a body organ or tissue" },
              { key: "B", text: "The chemical decay of bones" },
              { key: "C", text: "The physical weight of muscle" },
              { key: "D", text: "The removal of teeth" }
            ],
            correctAnswer: "A",
            explanation: "Innervation là sự phân bố thần kinh, cung cấp dây thần kinh vận động tới cơ quan (supply of nerves) (A)."
          },
          {
            id: "R15",
            question: "What is the core premise of Robin Dunbar's 'social grooming' hypothesis?",
            options: [
              { key: "A", text: "Humans invented speech to sing religious hymns" },
              { key: "B", text: "Language evolved as vocal grooming to maintain social cohesion in expanding tribal groups" },
              { key: "C", text: "Physical grooming became illegal under ancient tribal laws" },
              { key: "D", text: "Language was designed solely for military combat commands" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 4 nêu: ngôn ngữ ra đời như hình thức chải chuốt bằng giọng nói (vocal grooming) để duy trì sự gắn kết khi bầy đàn quá đông (B)."
          },
          {
            id: "R16",
            question: "Why did physical grooming become insufficient in expanding early human bands?",
            options: [
              { key: "A", text: "Because early humans developed thick fur coats" },
              { key: "B", text: "Because as group size exceeded 50-100 individuals, physical grooming took too much time" },
              { key: "C", text: "Because water became completely unavailable" },
              { key: "D", text: "Because ancient tribes strictly prohibited physical touch" }
            ],
            correctAnswer: "B",
            explanation: "Khi quy mô bầy đàn vượt quá 50-100 người, chải chuốt cơ học trở nên bất khả thi về mặt thời gian (B)."
          },
          {
            id: "R17",
            question: "The word 'cohesion' in Paragraph 4 is closest in meaning to:",
            options: [
              { key: "A", text: "Unity, solidarity, and bonding" },
              { key: "B", text: "Violent civil fragmentation" },
              { key: "C", text: "Financial bankruptcy" },
              { key: "D", text: "Physical exhaustion" }
            ],
            correctAnswer: "A",
            explanation: "Cohesion có nghĩa là sự gắn kết, đoàn kết chặt chẽ (unity, solidarity) (A)."
          },
          {
            id: "R18",
            question: "How did language facilitate large-scale human cooperation?",
            options: [
              { key: "A", text: "By enabling people to live without eating meals" },
              { key: "B", text: "By allowing the exchange of social intelligence, moral pacts, and shared mythologies" },
              { key: "C", text: "By turning all humans into identical physical clones" },
              { key: "D", text: "By preventing any disagreements from ever occurring" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 4 nêu: ngôn ngữ giúp chia sẻ thông tin, thiết lập khế ước đạo đức và các huyền thoại văn hóa chung (B)."
          },
          {
            id: "R19",
            question: "It can be inferred from the passage that vervet monkey calls:",
            options: [
              { key: "A", text: "Are capable of discussing ancient history" },
              { key: "B", text: "Are fixed reactions to specific immediate predator stimuli" },
              { key: "C", text: "Are identical to human grammar syntax" },
              { key: "D", text: "Can create infinite novel poetic verses" }
            ],
            correctAnswer: "B",
            explanation: "Tiếng kêu của khỉ vervet là phản ứng cố định trước các kích thích cụ thể (báo gấm hay đại bàng), không có ngữ pháp đệ quy (B)."
          },
          {
            id: "R20",
            question: "Which field of study is NOT referenced in the text's explanation of language?",
            options: [
              { key: "A", text: "Paleoneurology" },
              { key: "B", text: "Genetics" },
              { key: "C", text: "Evolutionary anthropology" },
              { key: "D", text: "Modern nuclear physics" }
            ],
            correctAnswer: "D",
            explanation: "Bài đọc trích dẫn giải phẫu thần kinh cổ sinh, di truyền học và nhân chủng học; không có vật lý hạt nhân (D)."
          }
        ]
      },
      {
        id: "P3",
        title: "Passage 3: Space Exploration & Satellite Remote Sensing",
        wordCount: 475,
        genre: "Công nghệ Vũ trụ & Địa lý",
        text: `The advent of satellite remote sensing has inaugurated a golden era in Earth observation, planetary stewardship, and climatological monitoring. Ever since the launch of the earliest civilian orbital observation satellites in the early 1970s, technology has evolved from grain-heavy analog photographic film canisters dropped by parachutes into hyper-spectral digital sensors continuously broadcasting terabytes of analytical data to Earth stations. Today, hundreds of Earth-observing satellites orbit thousands of kilometers above our heads, operating as ceaseless planetary guardians.

Remote sensing functions through the systematic detection and measurement of electromagnetic radiation emitted or reflected from the Earth's surface. Optical sensors capture visible and infrared spectra, revealing subtle changes in chlorophyll levels within vegetative ecosystems. For instance, the Normalized Difference Vegetation Index (NDVI) enables agricultural scientists to forecast crop yields, detect drought stress weeks before crops wither, and track deforestation across tropical basins. Meanwhile, synthetic aperture radar (SAR) satellites utilize active microwave pulses capable of penetrating cloud cover, dense forest canopies, and nocturnal darkness, mapping topography and ground subsidence with sub-millimeter precision.

Beyond environmental conservation, satellite remote sensing provides indispensable intelligence for global disaster response. When catastrophic tsunamis, earthquakes, or volcanic eruptions strike remote regions, ground infrastructure—including telephone lines, cellular towers, and roadways—is frequently obliterated. High-resolution satellite imagery delivers immediate situational awareness to emergency relief coordinators, pinpointing collapsed bridges, identifying inundated villages, and guiding humanitarian supply convoys to surviving populations.

Looking toward the future, the commercialization of space, often termed 'NewSpace', is driving unprecedented democratization in satellite accessibility. Constellations of miniaturized cube-satellites, launched at a fraction of traditional aerospace budgets by commercial rocketry, provide near-real-time revisit rates over every square kilometer of Earth. Integrated with automated artificial intelligence analysis, orbital sensing empowers humanity to manage freshwater aquifers, monitor illegal offshore fishing, and model climate change with extraordinary fidelity.`,
        questions: [
          {
            id: "R21",
            question: "What is the primary topic of Passage 3?",
            options: [
              { key: "A", text: "The history of manned lunar landings" },
              { key: "B", text: "The mechanisms, applications, and evolution of satellite remote sensing" },
              { key: "C", text: "The chemical engineering of liquid rocket propellants" },
              { key: "D", text: "The search for extraterrestrial life on Mars" }
            ],
            correctAnswer: "B",
            explanation: "Bài đọc phân tích cơ chế, các ứng dụng (nông nghiệp, thảm họa, môi trường) và sự phát triển của công nghệ viễn thám vệ tinh (B)."
          },
          {
            id: "R22",
            question: "How do optical remote sensing sensors detect changes in vegetation health?",
            options: [
              { key: "A", text: "By measuring sounds made by growing trees" },
              { key: "B", text: "By capturing visible and infrared radiation to monitor chlorophyll levels" },
              { key: "C", text: "By collecting soil samples with robotic claws" },
              { key: "D", text: "By dropping chemical fertilizers from space" }
            ],
            correctAnswer: "B",
            explanation: "Cảm biến quang học đo bức xạ khả kiến và hồng ngoại để theo dõi diệp lục (NDVI) (B)."
          },
          {
            id: "R23",
            question: "What unique capability distinguishes synthetic aperture radar (SAR) satellites?",
            options: [
              { key: "A", text: "They can only operate on sunny mornings" },
              { key: "B", text: "They use active microwaves that penetrate clouds, forest canopies, and darkness" },
              { key: "C", text: "They are made completely of edible biological materials" },
              { key: "D", text: "They fly below commercial passenger planes" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 2 nêu: radar SAR phát xung vi sóng chủ động có khả năng xuyên qua mây mù, tán rừng và màn đêm (B)."
          },
          {
            id: "R24",
            question: "Why is satellite imagery crucial during natural disaster emergencies?",
            options: [
              { key: "A", text: "Because it instantly rebuilds collapsed homes" },
              { key: "B", text: "Because ground communication infrastructure is often destroyed, making satellite imagery vital for rescue routes" },
              { key: "C", text: "Because satellites can extinguish volcanic lava directly" },
              { key: "D", text: "Because it makes earthquakes stop shaking" }
            ],
            correctAnswer: "B",
            explanation: "Khi đường sá và cột sóng mặt đất bị phá hủy, ảnh vệ tinh cung cấp bức tranh toàn cảnh để định vị người sống sót và dẫn đường cứu trợ (B)."
          },
          {
            id: "R25",
            question: "What does the term 'NewSpace' refer to in Paragraph 4?",
            options: [
              { key: "A", text: "A brand-new galaxy discovered by astronomers" },
              { key: "B", text: "The commercialization of space exploration using low-cost rockets and miniaturized satellites" },
              { key: "C", text: "An international treaty banning all space satellites" },
              { key: "D", text: "A video game simulator for astronauts" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 4 giải thích NewSpace là làn sóng thương mại hóa không gian với tên lửa giá rẻ và chùm vệ tinh mini (CubeSats) (B)."
          },
          {
            id: "R26",
            question: "The word 'obliterated' in Paragraph 3 is closest in meaning to:",
            options: [
              { key: "A", text: "Completely destroyed, wiped out, or demolished" },
              { key: "B", text: "Newly constructed" },
              { key: "C", text: "Carefully protected" },
              { key: "D", text: "Slowly painted" }
            ],
            correctAnswer: "A",
            explanation: "Obliterated có nghĩa là bị xóa sổ, phá hủy hoàn toàn (completely destroyed) (A)."
          },
          {
            id: "R27",
            question: "What benefit do constellations of miniaturized cube-satellites provide?",
            options: [
              { key: "A", text: "Near-real-time revisit rates over every area on Earth at lower costs" },
              { key: "B", text: "Free high-speed internet for outer space aliens" },
              { key: "C", text: "They replace the moon's gravity" },
              { key: "D", text: "They require zero launch rockets" }
            ],
            correctAnswer: "A",
            explanation: "Chùm vệ tinh siêu nhỏ giúp quét lại bề mặt trái đất gần như theo thời gian thực với chi phí rất thấp (A)."
          },
          {
            id: "R28",
            question: "Which of the following is NOT listed as a practical application of satellite sensing?",
            options: [
              { key: "A", text: "Managing freshwater aquifers" },
              { key: "B", text: "Monitoring illegal offshore fishing" },
              { key: "C", text: "Directly transporting human passengers to Mars in seconds" },
              { key: "D", text: "Forecasting agricultural crop yields" }
            ],
            correctAnswer: "C",
            explanation: "Viễn thám không có chức năng dịch chuyển tức thời con người lên sao Hỏa (C)."
          },
          {
            id: "R29",
            question: "The word 'fidelity' in the final sentence most nearly means:",
            options: [
              { key: "A", text: "Accuracy, precision, and faithfulness to detail" },
              { key: "B", text: "Financial debt" },
              { key: "C", text: "Complete confusion" },
              { key: "D", text: "Emotional anger" }
            ],
            correctAnswer: "A",
            explanation: "Fidelity mang nghĩa độ chính xác, độ trung thực cao của dữ liệu mô phỏng (accuracy, precision) (A)."
          },
          {
            id: "R30",
            question: "What is the overall tone of the author regarding remote sensing technology?",
            options: [
              { key: "A", text: "Appreciative and optimistic about its planetary utility" },
              { key: "B", text: "Deeply alarmed and fearful of satellite spying" },
              { key: "C", text: "Bored and indifferent" },
              { key: "D", text: "Hostile toward commercial space companies" }
            ],
            correctAnswer: "A",
            explanation: "Tác giả đánh giá cao vai trò bảo vệ hành tinh và ứng dụng nhân đạo của công nghệ viễn thám (A)."
          }
        ]
      },
      {
        id: "P4",
        title: "Passage 4: Digital Cultural Heritage & Preservation Technologies",
        wordCount: 485,
        genre: "Bảo tồn Văn hóa & Công nghệ Số",
        text: `Throughout human history, physical cultural heritage—from stone monuments and subterranean tombs to ancient fragile parchment scrolls—has faced an unrelenting battle against environmental and anthropogenic decay. Natural catastrophes such as earthquakes, floods, and coastal typhoons can pulverize millennia of history in minutes. Concurrently, acid precipitation, temperature swings, atmospheric pollution, and the mechanical erosion of over-tourism inflict steady, irreversible degradation. In worst-case scenarios, armed conflicts lead to deliberate iconoclasm and looting.

To insulate human collective memory from these catastrophic perils, conservators and cultural historians are turning to high-resolution digital preservation. Chief among these technologies is terrestrial and airborne LiDAR (Light Detection and Ranging). By projecting millions of infrared laser pulses per second toward a historical structure and measuring the nanosecond time-of-flight of the reflected light, LiDAR scanners record billions of spatial coordinates, creating an ultra-dense 'point cloud'. When synthesized with high-resolution photographic photogrammetry, this generates a photorealistic, millimeter-accurate 'digital twin' of the monument.

The indispensable efficacy of this digital safeguard was dramatically demonstrated during the tragic 2019 fire that gutted the medieval Notre-Dame Cathedral in Paris. Decades of craftsmanship were incinerated in hours as the timber roof collapsed. Fortunately, the late architectural historian Andrew Tallon had completed exhaustive laser scans of the cathedral in 2010. Tallon's spatial dataset provided structural restoration architects with exact coordinates for every ribbed stone vault, rose window frame, and curved masonry pillar, enabling an authentic architectural reconstruction that would otherwise have been impossible.

Moreover, digitization democratizes public engagement. Fragile artifacts locked within vault archives can be rendered into interactive 3D digital models accessible to global students, eliminating physical wear while allowing global scholars to examine minute tool marks under virtual lighting. Nonetheless, digital conservation introduces its own vulnerabilities: digital file formats face rapid obsolescence as operating software evolves, and cloud archives require continuous cybersecurity defenses against digital corruption. Hence, digital archives must be treated not as static digital museums, but as living repositories requiring perpetual migration and stewardship.`,
        questions: [
          {
            id: "R31",
            question: "What is the main idea of Passage 4?",
            options: [
              { key: "A", text: "The construction methods of the Eiffel Tower in Paris" },
              { key: "B", text: "How digital technologies preserve, reconstruct, and democratize cultural heritage" },
              { key: "C", text: "Why all physical museums should be permanently closed" },
              { key: "D", text: "The chemistry of oil painting pigments" }
            ],
            correctAnswer: "B",
            explanation: "Bài đọc nêu bật vai trò của công nghệ số (LiDAR, 3D) trong việc bảo tồn, phục dựng và phổ cập di sản văn hóa (B)."
          },
          {
            id: "R32",
            question: "Which of the following is NOT listed as a threat to physical heritage sites?",
            options: [
              { key: "A", text: "Earthquakes and typhoons" },
              { key: "B", text: "Acid precipitation and atmospheric pollution" },
              { key: "C", text: "Over-tourism and armed conflict" },
              { key: "D", text: "Excessive reading of history books by students" }
            ],
            correctAnswer: "D",
            explanation: "Việc sinh viên đọc sách lịch sử không phải là mối đe dọa đối với di sản (D)."
          },
          {
            id: "R33",
            question: "How does LiDAR technology create a 3D digital model of a monument?",
            options: [
              { key: "A", text: "By melting stone samples with high-heat torches" },
              { key: "B", text: "By projecting laser pulses and calculating flight time to generate dense point clouds" },
              { key: "C", text: "By hand-drawing blueprints with colored pencils" },
              { key: "D", text: "By photographing paintings through magnifying lenses" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 2 nêu: phát hàng triệu xung laser và đo thời gian phản hồi để lập đám mây điểm 3D chính xác tới từng milimet (B)."
          },
          {
            id: "R34",
            question: "What is a 'digital twin' as defined in Paragraph 2?",
            options: [
              { key: "A", text: "A second physical museum built across the street" },
              { key: "B", text: "A photorealistic, millimeter-accurate 3D digital replica of a structure" },
              { key: "C", text: "A robot security guard patrolling historical tombs" },
              { key: "D", text: "A twin brother of an archaeologist" }
            ],
            correctAnswer: "B",
            explanation: "Bản sao kỹ thuật số (digital twin) là mô hình 3D chân thực, chính xác từng milimet mô phỏng công trình thật (B)."
          },
          {
            id: "R35",
            question: "How did Andrew Tallon's scans aid the Notre-Dame Cathedral reconstruction?",
            options: [
              { key: "A", text: "They extinguished the roof fire with digital water" },
              { key: "B", text: "They provided exact structural measurements to rebuild the timber roof and stone vaults" },
              { key: "C", text: "They paid for all reconstruction expenses" },
              { key: "D", text: "They proved the cathedral was built in 1950" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 3 nêu: dữ liệu không gian của Tallon cung cấp tọa độ chính xác cho từng vòm đá và khung gỗ để phục dựng chính xác (B)."
          },
          {
            id: "R36",
            question: "The word 'pulverize' in Paragraph 1 most nearly means:",
            options: [
              { key: "A", text: "Crush, demolish, or grind into dust" },
              { key: "B", text: "Carefully polish and clean" },
              { key: "C", text: "Discover for the first time" },
              { key: "D", text: "Paint in bright colors" }
            ],
            correctAnswer: "A",
            explanation: "Pulverize có nghĩa là nghiền nát, phá hủy thành tro bụi (crush, demolish) (A)."
          },
          {
            id: "R37",
            question: "How does digital heritage technology benefit global students and researchers?",
            options: [
              { key: "A", text: "By allowing remote interactive exploration without subjecting fragile artifacts to physical wear" },
              { key: "B", text: "By selling rare museum artifacts online" },
              { key: "C", text: "By replacing all school exams with video games" },
              { key: "D", text: "By forbidding anyone from visiting physical museums" }
            ],
            correctAnswer: "A",
            explanation: "Đoạn 4 nêu: cho phép sinh viên toàn cầu tương tác nghiên cứu mô hình 3D mà không làm hao mòn hiện vật gốc (A)."
          },
          {
            id: "R38",
            question: "What vulnerability unique to digital conservation is highlighted in the final paragraph?",
            options: [
              { key: "A", text: "Digital files getting wet from rain" },
              { key: "B", text: "Software obsolescence and the need for continuous cybersecurity and migration" },
              { key: "C", text: "Computer screens running out of electricity" },
              { key: "D", text: "Laser beams fading away permanently" }
            ],
            correctAnswer: "B",
            explanation: "Định dạng file nhanh chóng lỗi thời theo đà phát triển của phần mềm và nguy cơ tấn công mạng (B)."
          },
          {
            id: "R39",
            question: "The word 'obsolescence' in Paragraph 4 refers to:",
            options: [
              { key: "A", text: "The state of becoming outdated or no longer usable" },
              { key: "B", text: "Extreme physical popularity" },
              { key: "C", text: "Rapid financial profit" },
              { key: "D", text: "Complete water resistance" }
            ],
            correctAnswer: "A",
            explanation: "Obsolescence có nghĩa là sự lỗi thời, không còn tương thích để sử dụng (becoming outdated) (A)."
          },
          {
            id: "R40",
            question: "What conclusion does the author emphasize regarding digital cultural archives?",
            options: [
              { key: "A", text: "They require perpetual migration and active stewardship" },
              { key: "B", text: "They should be deleted every five years" },
              { key: "C", text: "They will soon replace all living human beings" },
              { key: "D", text: "They are completely useless for real-world architecture" }
            ],
            correctAnswer: "A",
            explanation: "Tác giả kết luận kho lưu trữ số không phải là bảo tàng tĩnh mà cần liên tục nâng cấp và quản trị thường xuyên (A)."
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
    task1: {
      title: "Task 1: Thư khiếu nại về đơn hàng sách học thuật bị hư hỏng (Damaged Book Order Complaint)",
      prompt: "Two weeks ago, you ordered an expensive set of three English academic reference textbooks from an online bookstore. Yesterday, the package arrived, but the delivery box was crushed and soaked with water, rendering the book pages severely wrinkled and torn. Write a formal complaint letter (minimum 120 words) to the Customer Support Manager of the bookstore. In your letter:\n- State clearly who you are, your order number, and the purpose of your letter.\n- Describe in detail the damage to the package and the books inside.\n- Request either an immediate replacement set or a full financial refund, and state what documentation you have attached.",
      sampleModel: `Dear Customer Support Manager,

My name is Tran Hoang Nam, and I am writing to formally express my dissatisfaction regarding my recent book purchase (Order #BK-98421), placed on your online store on August 20th.

Yesterday afternoon, your courier delivered the parcel containing my three-volume reference set, "Advanced Academic English Collocations." To my immense dismay, the outer cardboard packaging was severely crushed and soaked through with rainwater. Upon unboxing the parcel, I discovered that all three volumes were water-damaged, with numerous pages heavily wrinkled, glued together, and torn, rendering the textbooks completely unusable for my upcoming examination preparation.

Given that I paid 850,000 VND for brand-new reference materials, this condition is entirely unacceptable. Under these circumstances, I insist on an immediate replacement set delivered by expedited courier, or alternatively, a full refund to my original payment card. I have attached high-resolution photographs of the damaged shipping carton, the destroyed book pages, and the courier delivery receipt as evidence.

I look forward to your prompt response and a satisfactory resolution within three business days.

Yours sincerely,
Tran Hoang Nam`,
      outline: [
        { part: "Lời chào & Mục đích", content: "Dear Customer Support Manager; nêu rõ mã đơn hàng #BK-98421 và mục đích khiếu nại sách bị hư hại." },
        { part: "Thân bài 1 (Mô tả sự cố)", content: "Hộp các tông bị móp và ướt nước mưa; 3 cuốn sách bị dính trang, rách và nhăn nhúm không thể sử dụng để ôn thi." },
        { part: "Thân bài 2 (Yêu cầu giải quyết)", content: "Số tiền 850,000 VND; yêu cầu đổi bộ sách mới chuyển phát nhanh hoặc hoàn tiền 100%; đính kèm ảnh chụp làm bằng chứng." },
        { part: "Kết bài & Ký tên", content: "Yêu cầu giải quyết trong 3 ngày làm việc; Yours sincerely, Tran Hoang Nam." }
      ]
    },
    task2: {
      title: "Task 2: Bài luận về Đầu tư Thư viện Công cộng vs Hạ tầng Số (Public Libraries vs. Digital Infrastructure)",
      prompt: "Some people argue that in the digital age, governments should cease funding physical public libraries and divert all resources toward building high-speed public internet and digital libraries. Others maintain that physical public libraries remain irreplaceable community spaces. Discuss both views and give your own opinion. (Write at least 250 words)",
      sampleModel: `In an era dominated by rapid digital proliferation, the utility of traditional brick-and-mortar public libraries has sparked intense debate. While some argue that municipal authorities should terminate investments in physical libraries to fund high-speed public internet and online repositories, others contend that physical libraries remain indispensable pillars of community equity. In my view, while digital infrastructure expansion is essential, physical libraries fulfill vital societal roles that virtual platforms cannot replicate.

On the one hand, proponents of prioritizing digital investments present pragmatic arguments. First, digital archives and online e-libraries offer unparalleled convenience and scalability. Rather than commuting to a physical facility during restricted operating hours, citizens can access millions of digitized texts, journals, and educational software instantly from smartphones or home computers. Furthermore, maintaining physical municipal libraries entails exorbitant recurrent expenditures, including building leases, air conditioning, custodial staff, and physical book repair. Diverting these substantial public funds toward high-speed universal broadband directly bridges the digital divide and empowers economic productivity.

On the other hand, physical public libraries provide profound social value that extends far beyond book borrowing. First and foremost, libraries serve as egalitarian sanctuaries for vulnerable citizens, including low-income families, elderly individuals, and students living in overcrowded households. They offer quiet, climate-controlled study desks, free computer terminals, and knowledgeable reference librarians who guide citizens through civic and academic research. Moreover, libraries function as vital community anchors, hosting early childhood literacy programs, free language workshops, and author seminars that foster authentic human connection and civic engagement.

In conclusion, while expanding high-speed digital networks is an undeniable modern necessity, defunding physical public libraries would severely degrade community cohesion and social equity. Therefore, governments should adopt a hybrid model, modernizing physical libraries into dynamic digital-learning community hubs that democratize access for all citizens.`,
      outline: [
        { part: "Mở bài", content: "Dẫn dắt tranh luận về việc duy trì thư viện truyền thống hay dồn tiền cho hạ tầng số; khẳng định quan điểm: cần cả hai nhưng thư viện vật lý không thể bị thay thế." },
        { part: "Thân bài 1 (Ưu điểm đầu tư số)", content: "Tiện lợi truy cập mọi lúc mọi nơi; tiết kiệm chi phí vận hành toà nhà, nhân sự; phổ cập internet giúp thu hẹp khoảng cách số." },
        { part: "Thân bài 2 (Giá trị của thư viện vật lý)", content: "Không gian học tập bình đẳng cho người nghèo, sinh viên và người cao tuổi; trung tâm kết nối cộng đồng với các lớp học miễn phí và sự hỗ trợ trực tiếp từ thủ thư." },
        { part: "Kết bài", content: "Khẳng định lại: Mô hình lai (hybrid) - hiện đại hóa thư viện truyền thống thành trung tâm học tập số của cộng đồng." }
      ]
    }
  },

  // ==========================================
  // 4. SPEAKING (3 Parts - 12 Mins)
  // ==========================================
  speaking: {
    time: 12,
    part1: {
      title: "Part 1: Tương Tác Xã Hội (Social Interaction - 3 phút)",
      topic1: "Topic 1: Food & Culinary Habits",
      topic1Questions: [
        {
          q: "Do you prefer eating home-cooked meals or dining at restaurants?",
          a: "I generally prefer home-cooked meals. Preparing meals at home allows me to control ingredients like sodium and sugar, and it gives me a relaxing creative break after hours of intense study."
        },
        {
          q: "What is your favorite traditional Vietnamese dish?",
          a: "My absolute favorite is traditional Pho Bo. The aromatic beef broth simmered for hours with star anise and cinnamon, combined with tender flat rice noodles and fresh herbs, is pure comfort food."
        },
        {
          q: "Do you enjoy trying unfamiliar foreign cuisines?",
          a: "Yes, I am quite adventurous with food. Last month I tried authentic Indian curries for the first time; the rich blend of turmeric, cumin, and spicy naan bread was an eye-opening sensory experience."
        }
      ],
      topic2: "Topic 2: Sports & Physical Exercise",
      topic2Questions: [
        {
          q: "What physical exercise do you do to stay healthy?",
          a: "I jog around the university athletic track four evenings a week for about thirty minutes. Running outdoors helps clear my head, boosts cardiovascular endurance, and relieves academic fatigue."
        },
        {
          q: "Did you participate in sports when you were in secondary school?",
          a: "Yes, I played badminton on my high school team. We practiced doubles matches twice a week, which taught me quick footwork reflexes and the importance of communicative teamwork."
        },
        {
          q: "Do you think watching professional sports on television inspires people to exercise?",
          a: "Definitely. Watching world-class athletes demonstrate discipline, stamina, and graceful skill on screen inspires many viewers to put on sneakers and start jogging or joining sports clubs."
        }
      ]
    },

    part2: {
      title: "Part 2: Thảo Luận Giải Pháp (Solution Discussion - 4 phút)",
      situation: "A close university friend is graduating with highest academic honors. Three friends want to pool money to buy him a meaningful graduation gift: (1) A high-end leather briefcase for his upcoming corporate job, (2) A smart wristwatch that tracks health and notifications, or (3) A weekend spa resort retreat voucher. Which gift is the best choice?",
      bestOption: "Option 2: A smart wristwatch that tracks health and notifications",
      sampleSpeech: `If we were to select the most thoughtful and versatile graduation gift for our high-achieving friend, I would strongly advocate for Option 2: a sleek smart wristwatch.

First and foremost, a smartwatch combines professional elegance with exceptional daily functionality. As our friend transitions into a high-intensity corporate career, managing time efficiently is paramount. A smartwatch allows him to discreetly check calendar reminders and urgent client emails right on his wrist during business meetings without glancing rudely at his smartphone. Furthermore, the integrated health sensors track heart rate, sleep quality, and daily steps, gently reminding him to stand and stretch during long sedentary office hours.

Looking at the other options, a high-end leather briefcase (Option 1) is undeniably traditional; however, many modern tech companies embrace casual backpacks and paperless digital workflows, so a formal briefcase may sit unused in his closet. On the other hand, a weekend spa resort voucher (Option 2) offers wonderful temporary relaxation, but the experience evaporates in two days, whereas a smartwatch serves as a practical, durable companion every single day for years.

Therefore, balancing aesthetic professionalism, health monitoring, and long-term utility, the smart wristwatch is indisputably the superior graduation gift for our friend.`,
      tips: "Cấu trúc trả lời B1/B2: Mở bài chọn phương án tốt nhất -> Đưa ra 2 lý do ủng hộ (công việc & sức khỏe) -> Phân tích điểm hạn chế của 2 phương án còn lại -> Chốt lại quyết định."
    },

    part3: {
      title: "Part 3: Phát Triển Chủ Đề (Topic Development - 5 phút)",
      topic: "Studying abroad offers transformative lifelong advantages for university students.",
      mindMap: [
        "Academic Excellence (World-class laboratories and diverse research curricula)",
        "Intercultural Adaptability (Language immersion and global perspectives)",
        "Personal Independence (Self-reliance, financial budgeting, and problem-solving)"
      ],
      sampleSpeech: `It is widely recognized that pursuing higher education abroad represents a transformative milestone that shapes a student's worldview, intellect, and character.

First and foremost, studying abroad grants access to cutting-edge academic excellence. Many foreign universities boast advanced research laboratories, multidisciplinary curricula, and distinguished professors who are pioneers in their academic fields. Students are exposed to interactive seminar discussions and independent critical inquiry, which stimulates intellectual curiosity and rigorous analytical thinking.

Secondly, living in an overseas environment fosters profound intercultural adaptability. Daily immersion forces students to communicate in a foreign tongue, decipher cultural subtleties, and navigate multicultural group projects. Experiencing diverse viewpoints dismantles parochial biases, nurtures empathetic diplomacy, and equips graduates with the cross-cultural competencies essential for succeeding in global multinational organizations.

Last but not least, studying abroad serves as an intensive incubator for personal independence. Living thousands of miles away from family support systems requires young adults to master practical life skills: managing personal household budgets, preparing meals, navigating foreign legal systems, and overcoming emotional homesickness. Graduates return home with unshakeable resilience and mature self-reliance.

In conclusion, studying abroad provides top-tier academic training, cultural versatility, and personal maturity that enrich a graduate's entire professional journey.`,
      followUp: [
        {
          q: "What is the biggest initial obstacle international students face when studying abroad?",
          a: "The most formidable challenge is usually cultural homesickness combined with language communication barriers. Overcoming initial conversational anxiety requires patience, actively joining student clubs, and maintaining an open-minded mindset."
        },
        {
          q: "Do you think students who study abroad have a higher chance of being hired by multinational corporations?",
          a: "Yes, significantly higher. Employers recognize that graduates who thrived in foreign academic environments possess strong language fluency, resilience, adaptability, and global perspectives that are invaluable for cross-border projects."
        },
        {
          q: "Should developing countries fear 'brain drain' when talented students study abroad?",
          a: "While brain drain is a valid concern, many overseas scholars eventually return home as 'brain gain', bringing advanced technological expertise, international investment networks, and innovative entrepreneurial startups that drive domestic progress."
        }
      ]
    }
  }
};
