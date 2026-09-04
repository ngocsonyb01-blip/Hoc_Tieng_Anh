/**
 * src/data/tests/exam07.js
 * Đề Thi Chuẩn VSTEP Số 07 (Bộ Đề Thi Thật ULIS & ĐHQG Hà Nội - Format B1/B2 Mới Nhất)
 * Thiết kế chuẩn cấu trúc 4 kỹ năng VSTEP:
 * - Listening: 35 câu (có kịch bản hội thoại tự nhiên, ngữ điệu, ngắt nhịp thở, bối cảnh thực tế)
 * - Reading: 40 câu (4 bài đọc học thuật: Năng lượng tái tạo, Tâm lý thói quen, Đô thị 15 phút, San hô biển)
 * - Writing: 2 Tasks (Task 1: Thư đổi phòng KTX; Task 2: Luận thể dục đại học)
 * - Speaking: 3 Parts (Tương tác xã hội, Thảo luận giải pháp, Phát triển chủ đề)
 */

export const exam07 = {
  id: "vstep-exam-07",
  name: "Đề Thi Chuẩn VSTEP Số 07 (Đề Mới Nhất ULIS & ĐHQG)",
  badge: "Đề Thi Thật Mới Nhất",
  difficulty: "Chuẩn B1-B2 Quốc Gia",
  description: "Bộ đề thi thực chiến bám sát định dạng VSTEP mới nhất của ĐHQG Hà Nội. Phần nghe có ngữ cảnh thực tế, nhấn nhá ngữ điệu tự nhiên và phân tích chi tiết.",

  // ==========================================
  // 1. LISTENING SKILL (35 Questions - 40 Mins)
  // ==========================================
  listening: {
    time: 40,
    totalQuestions: 35,

    // ----------------------------------------
    // Part 1: 8 Short Announcements / Dialogues
    // ----------------------------------------
    part1: {
      title: "Part 1: 8 Thông Báo & Đối Thoại Ngắn (8 câu)",
      instructions: "Trong phần này, bạn sẽ nghe 8 đoạn thông báo hoặc hội thoại ngắn. Mỗi đoạn có 1 câu hỏi kèm 4 lựa chọn A, B, C, D. Hãy chọn đáp án chính xác nhất.",
      questions: [
        {
          id: "L1",
          question: "What is the main reason for flight VN245's departure change?",
          options: [
            { key: "A", text: "Technical maintenance on the aircraft engine" },
            { key: "B", text: "Severe weather conditions at the destination airport" },
            { key: "C", text: "Late arrival of the inbound flight crew" },
            { key: "D", text: "Runway inspection at the departure terminal" }
          ],
          correctAnswer: "B",
          explanation: "Thông báo tại sân bay nêu rõ: 'Due to severe thunderstorm weather conditions near Da Nang airport, our departure has been rescheduled.' -> Lý do là thời tiết xấu (B).",
          audioText: "Attention all passengers on flight VN245 to Da Nang. ... Due to severe thunderstorm weather conditions near Da Nang airport, our departure has been rescheduled from 2:15 PM to 3:45 PM. ... Please remain in the central waiting lounge near Gate 12. Refreshment vouchers will be distributed shortly."
        },
        {
          id: "L2",
          question: "When does the tenant need to collect the apartment keys?",
          options: [
            { key: "A", text: "Before 11:30 AM on Friday" },
            { key: "B", text: "Between 2:00 PM and 5:00 PM on Thursday" },
            { key: "C", text: "Right after 6:00 PM on Wednesday" },
            { key: "D", text: "On Saturday morning before noon" }
          ],
          correctAnswer: "B",
          explanation: "Người quản lý căn hộ nhắn: 'Please come by our leasing office between 2:00 PM and 5:00 PM on Thursday to sign the lease and collect your room keys.' -> Đáp án B.",
          audioText: "Hello Mr. Thanh. ... This is Sarah from Riverside Apartment Management. ... Good news! Your rental application has been approved. ... Please come by our leasing office between 2:00 PM and 5:00 PM on Thursday to sign the lease and collect your room keys. ... Don't forget your identification card."
        },
        {
          id: "L3",
          question: "How much will the customer pay for the laptop screen replacement?",
          options: [
            { key: "A", text: "Nothing, because it is under full warranty" },
            { key: "B", text: "Fifty dollars for the service fee only" },
            { key: "C", text: "One hundred and twenty dollars" },
            { key: "D", text: "Eighty dollars after warranty discount" }
          ],
          correctAnswer: "D",
          explanation: "Nhân viên kỹ thuật giải thích: 'The full screen replacement usually costs 120 dollars, but since your laptop is still covered under the standard warranty, you only pay 80 dollars.' -> Đáp án D.",
          audioText: "Hi there! I've examined your laptop. ... The internal display panel is cracked. ... Normally, a screen replacement costs 120 dollars. ... However, because your laptop is still under warranty, you only pay 80 dollars for the replacement parts. Labor is free."
        },
        {
          id: "L4",
          question: "Which route should drivers avoid due to road maintenance?",
          options: [
            { key: "A", text: "Nguyen Trai Avenue" },
            { key: "B", text: "Pham Van Dong Boulevard" },
            { key: "C", text: "Thang Long Highway" },
            { key: "D", text: "Vo Chi Cong Bridge" }
          ],
          correctAnswer: "C",
          explanation: "Bản tin giao thông phát thanh: 'Motorists are strongly advised to avoid Thang Long Highway due to emergency surface repaving work.' -> Tránh Thang Long Highway (C).",
          audioText: "Here is your morning traffic update. ... Heavy congestion is reported on multiple city roads. ... Motorists are strongly advised to avoid Thang Long Highway due to emergency surface repaving work near the tunnel. ... Please divert through Le Van Luong or Tran Duy Hung instead."
        },
        {
          id: "L5",
          question: "What is required of students attending the campus recruitment fair?",
          options: [
            { key: "A", text: "Wear formal business attire and bring printed CVs" },
            { key: "B", text: "Register online and pay an entry fee" },
            { key: "C", text: "Submit a graduation diploma at the entrance" },
            { key: "D", text: "Take an English proficiency test beforehand" }
          ],
          correctAnswer: "A",
          explanation: "Cố vấn việc làm dặn sinh viên: 'Make sure you dress in professional business attire and bring at least five copies of your updated resume.' -> Trang phục lịch sự và mang theo CV (A).",
          audioText: "Good afternoon students. ... The Annual Campus Career Fair takes place this Saturday in Hall B. ... Over forty multinational companies will conduct on-site interviews. ... Make sure you dress in professional business attire and bring at least five copies of your updated resume."
        },
        {
          id: "L6",
          question: "How should the patient take the prescribed medication?",
          options: [
            { key: "A", text: "One tablet every morning before breakfast" },
            { key: "B", text: "Two tablets twice daily after meals" },
            { key: "C", text: "One capsule three times a day with plenty of water" },
            { key: "D", text: "Only when experiencing severe headache" }
          ],
          correctAnswer: "B",
          explanation: "Dược sĩ căn dặn: 'Take two tablets twice daily, strictly after breakfast and dinner, with a full glass of water.' -> Đáp án B.",
          audioText: "Here is your prescription, Mr. Long. ... For these anti-inflammatory tablets, take two tablets twice daily, strictly after breakfast and dinner, with a full glass of water. ... Do not consume alcohol during this five-day course."
        },
        {
          id: "L7",
          question: "What should passengers traveling to the airport do?",
          options: [
            { key: "A", text: "Wait at Platform 3 for the next express train" },
            { key: "B", text: "Transfer to a shuttle bus outside Station Exit B" },
            { key: "C", text: "Request a refund at the ticket counter" },
            { key: "D", text: "Book an emergency taxi service" }
          ],
          correctAnswer: "B",
          explanation: "Thông báo tại nhà ga: 'Passengers heading toward the international airport should proceed to Exit B to board the complimentary shuttle bus.' -> Đón xe buýt trung chuyển tại Cổng B (B).",
          audioText: "Attention passengers. ... Due to track signal maintenance between Stations 4 and 6, direct train service to Terminal 2 is temporarily suspended. ... Passengers heading toward the international airport should proceed to Exit B to board the complimentary shuttle bus."
        },
        {
          id: "L8",
          question: "What service does the hotel receptionist arrange for the guest?",
          options: [
            { key: "A", text: "An airport taxi at 5:30 AM with a takeaway breakfast box" },
            { key: "B", text: "A late checkout at 2:00 PM without extra charge" },
            { key: "C", text: "A room upgrade to the executive ocean view suite" },
            { key: "D", text: "A laundry service before midnight" }
          ],
          correctAnswer: "A",
          explanation: "Lễ tân xác nhận: 'I have booked your taxi for 5:30 AM tomorrow and ordered a packed breakfast box ready at the front desk.' -> Đáp án A.",
          audioText: "Woman: Certainly, sir. ... I have booked your airport taxi for 5:30 AM tomorrow morning, and our kitchen will prepare a complimentary breakfast takeaway box ready for you at the reception desk. ... Have a restful night!"
        }
      ]
    },

    // ----------------------------------------
    // Part 2: 3 Conversations (12 Questions)
    // ----------------------------------------
    part2: {
      title: "Part 2: 3 Đoạn Hội Thoại Đời Sống & Học Thuật (12 câu)",
      instructions: "Bạn sẽ nghe 3 đoạn hội thoại. Mỗi đoạn gồm 4 câu hỏi. Các đoạn hội thoại chỉ nghe một lần duy nhất. Hãy chọn câu trả lời đúng.",
      conversations: [
        {
          id: "C1",
          title: "Hội thoại 1: Lựa chọn môn học tự chọn học kỳ mới (Academic Advising)",
          audioTranscript: "Man: Hey Lan, have you finalized your elective courses for the upcoming semester? Registration closes tomorrow midnight.\nWoman: Not yet, Tuan. I'm really torn between Advanced Data Analysis and Intercultural Business Communication.\nMan: Well, I took Data Analysis last semester with Dr. Miller. ... It was demanding with weekly coding assignments, but the analytical skills are immensely valuable for job hunting.\nWoman: That's true, but Professor Evans teaches Intercultural Communication, and her lectures focus heavily on practical teamwork, case studies, and presentation skills. ... My public speaking could definitely use improvement.\nMan: Why don't you check the exam format? ... Dr. Miller's course has a mid-term practical project and an open-book final exam, while Professor Evans requires three group presentations and a 3,000-word research paper.\nWoman: Hmm, three group presentations sound quite challenging alongside my graduation internship. ... Maybe I should take Data Analysis this term and leave the communication course for my final year.\nMan: That sounds like a smart strategy! Plus, we can study together since I'm taking the advanced lab section.",
          questions: [
            {
              id: "L9",
              question: "What is the main topic of the conversation between Tuan and Lan?",
              options: [
                { key: "A", text: "Preparing for final graduation examinations" },
                { key: "B", text: "Selecting an elective course for the new semester" },
                { key: "C", text: "Applying for an overseas student exchange program" },
                { key: "D", text: "Complaining about university tuition fees" }
              ],
              correctAnswer: "B",
              explanation: "Lan và Tuấn thảo luận việc chọn môn tự chọn cho học kỳ mới ('torn between Advanced Data Analysis and Intercultural Business Communication')."
            },
            {
              id: "L10",
              question: "What does Tuan say about Dr. Miller's Data Analysis course?",
              options: [
                { key: "A", text: "It is exceptionally easy with minimal homework" },
                { key: "B", text: "It is demanding but provides practical job-seeking skills" },
                { key: "C", text: "It requires weekly 3,000-word academic essays" },
                { key: "D", text: "It is completely theoretical without practical labs" }
              ],
              correctAnswer: "B",
              explanation: "Tuấn nhận xét: 'It was demanding with weekly coding assignments, but the analytical skills are immensely valuable for job hunting' (B)."
            },
            {
              id: "L11",
              question: "Why is Lan concerned about Professor Evans's communication course?",
              options: [
                { key: "A", text: "The tuition fee for the course is excessively high" },
                { key: "B", text: "Three group presentations may conflict with her internship" },
                { key: "C", text: "She dislikes working with other classmates" },
                { key: "D", text: "The lecture schedule is held early on Sunday mornings" }
              ],
              correctAnswer: "B",
              explanation: "Lan lo ngại: 'three group presentations sound quite challenging alongside my graduation internship' (B)."
            },
            {
              id: "L12",
              question: "What does Lan ultimately decide to do?",
              options: [
                { key: "A", text: "Enroll in Data Analysis for the upcoming semester" },
                { key: "B", text: "Drop both elective courses completely" },
                { key: "C", text: "Take Intercultural Communication with Professor Evans" },
                { key: "D", text: "Postpone her graduation internship until next year" }
              ],
              correctAnswer: "A",
              explanation: "Lan quyết định: 'Maybe I should take Data Analysis this term and leave the communication course for my final year' (A)."
            }
          ]
        },
        {
          id: "C2",
          title: "Hội thoại 2: Tổ chức chiến dịch vì môi trường khu dân cư (Community Project)",
          audioTranscript: "Woman: Good morning Mark. ... How are the preparations going for our Green Neighborhood campaign this Sunday?\nMan: Good morning Clara. ... We're making solid progress! We've recruited thirty student volunteers from the local university, and the district youth union agreed to provide fifty young saplings for tree planting.\nWoman: That's fantastic! ... What about the waste classification workshop? Have we secured a suitable venue?\nMan: Yes, the community cultural center hall has been reserved from 8:00 AM to 11:30 AM. ... However, we're still short on protective gloves and large recycling trash bins.\nWoman: Don't worry about that. ... I contacted Green Life NGO yesterday, and their coordinator agreed to sponsor fifty pairs of reusable canvas gloves and ten sets of color-coded recycling bins.\nMan: That's a huge relief! ... Should we also organize a mini-contest to motivate the neighborhood residents?\nWoman: Great idea! We can award eco-friendly gift hampers containing bamboo mugs and canvas tote bags to the families that collect the highest volume of plastic waste.\nMan: Perfect! I'll update the promotional posters and post the announcement on our residential social media group right away.",
          questions: [
            {
              id: "L13",
              question: "What is the primary objective of the community campaign?",
              options: [
                { key: "A", text: "Collecting donations for local flood victims" },
                { key: "B", text: "Promoting environmental protection and tree planting" },
                { key: "C", text: "Hosting an athletic tournament for youth volunteers" },
                { key: "D", text: "Building a new community health medical station" }
              ],
              correctAnswer: "B",
              explanation: "Chiến dịch 'Green Neighborhood' nhằm trồng cây và phân loại rác bảo vệ môi trường khu dân cư (B)."
            },
            {
              id: "L14",
              question: "Where will the waste classification workshop be held?",
              options: [
                { key: "A", text: "In the central public playground" },
                { key: "B", text: "At the community cultural center hall" },
                { key: "C", text: "In the university main auditorium" },
                { key: "D", text: "Outside the district government office" }
              ],
              correctAnswer: "B",
              explanation: "Mark xác nhận: 'the community cultural center hall has been reserved from 8:00 AM to 11:30 AM' (B)."
            },
            {
              id: "L15",
              question: "Who is sponsoring the gloves and recycling bins?",
              options: [
                { key: "A", text: "A local supermarket chain" },
                { key: "B", text: "The university student association" },
                { key: "C", text: "Green Life non-governmental organization" },
                { key: "D", text: "The city environmental sanitation company" }
              ],
              correctAnswer: "C",
              explanation: "Clara cho biết: 'I contacted Green Life NGO yesterday, and their coordinator agreed to sponsor fifty pairs of reusable canvas gloves...' (C)."
            },
            {
              id: "L16",
              question: "How will winning families in the contest be rewarded?",
              options: [
                { key: "A", text: "With cash prizes and certificate plaques" },
                { key: "B", text: "With gift hampers containing bamboo mugs and canvas bags" },
                { key: "C", text: "With free electricity vouchers for six months" },
                { key: "D", text: "With a fully sponsored trip to a national park" }
              ],
              correctAnswer: "B",
              explanation: "Clara đề xuất: 'award eco-friendly gift hampers containing bamboo mugs and canvas tote bags...' (B)."
            }
          ]
        },
        {
          id: "C3",
          title: "Hội thoại 3: Tìm thuê căn hộ và thỏa thuận chi phí (Apartment Hunting)",
          audioTranscript: "Man: Hello Ms. Kelly. ... Thank you for meeting me to view this two-bedroom apartment on Maple Street.\nWoman: Welcome Mr. Phong! ... As you can see, the unit is fully furnished with a modern kitchen, wooden flooring, and plenty of natural sunlight.\nMan: The living space is really bright and clean. ... But could you clarify the breakdown of monthly utility charges?\nWoman: Certainly. The base monthly rent is 800 dollars. ... High-speed fiber internet and water supply are included in the rental price. ... However, electricity is metered separately and charged according to government rates. The building management fee is 35 dollars per month.\nMan: That sounds quite reasonable. ... How about the lease duration and the security deposit required upon signing?\nWoman: We require a minimum twelve-month lease agreement. ... The security deposit is equal to one month's rent, which will be fully refunded at the end of the tenancy, provided the apartment remains undamaged.\nMan: Great! And how far is the nearest metro station from here? I don't own a car, so convenient public transit is crucial.\nWoman: It's just a six-minute walk down the avenue to Central Metro Station, and there is a 24-hour convenience store right on the ground floor.\nMan: Fantastic! I'd like to sign the reservation contract today.",
          questions: [
            {
              id: "L17",
              question: "Which utilities are already included in the 800-dollar base rent?",
              options: [
                { key: "A", text: "Electricity and air-conditioning maintenance" },
                { key: "B", text: "High-speed internet and water supply" },
                { key: "C", text: "Building management fee and indoor car parking" },
                { key: "D", text: "Cooking gas and weekly cleaning service" }
              ],
              correctAnswer: "B",
              explanation: "Người môi giới cho biết: 'High-speed fiber internet and water supply are included in the rental price' (B)."
            },
            {
              id: "L18",
              question: "How much is the required security deposit?",
              options: [
                { key: "A", text: "Four hundred dollars" },
                { key: "B", text: "Eight hundred dollars (equal to one month's rent)" },
                { key: "C", text: "One thousand two hundred dollars" },
                { key: "D", text: "Two months' rent plus maintenance fee" }
              ],
              correctAnswer: "B",
              explanation: "Bà Kelly nêu rõ: 'The security deposit is equal to one month's rent' = 800 dollars (B)."
            },
            {
              id: "L19",
              question: "What is the minimum lease term required by the landlord?",
              options: [
                { key: "A", text: "Six months" },
                { key: "B", text: "Nine months" },
                { key: "C", text: "Twelve months" },
                { key: "D", text: "Two years" }
              ],
              correctAnswer: "C",
              explanation: "Bà Kelly nói: 'We require a minimum twelve-month lease agreement' (C)."
            },
            {
              id: "L20",
              question: "How far is the apartment from the nearest metro station?",
              options: [
                { key: "A", text: "A six-minute walk down the avenue" },
                { key: "B", text: "A fifteen-minute bicycle ride" },
                { key: "C", text: "A thirty-minute bus commute" },
                { key: "D", text: "Directly connected to the basement exit" }
              ],
              correctAnswer: "A",
              explanation: "Người môi giới nói: 'It's just a six-minute walk down the avenue to Central Metro Station' (A)."
            }
          ]
        }
      ]
    },

    // ----------------------------------------
    // Part 3: 3 Talks / Lectures (15 Questions)
    // ----------------------------------------
    part3: {
      title: "Part 3: 3 Bài Giảng & Thuyết Trình Học Thuật (15 câu)",
      instructions: "Trong phần này, bạn sẽ nghe 3 bài giảng hoặc bài nói học thuật. Mỗi bài có 5 câu hỏi. Hãy chọn câu trả lời đúng nhất.",
      talks: [
        {
          id: "T1",
          title: "Bài giảng 1: Hướng dẫn sử dụng Trung tâm Học liệu & Thư viện Đại học (Campus Library Orientation)",
          audioTranscript: "Good morning everyone, and welcome to the Central University Library orientation. ... I am Dr. Henderson, chief librarian. ... Today, I'd like to walk you through our modernized resources designed to support your academic research.\nFirst, our physical building spans five levels. ... Levels 1 and 2 house collaborative study lounges where group discussions are encouraged. ... However, if you require absolute silence, Levels 3 and 4 are strictly designated as quiet study zones. ... Mobile phones must be switched to silent mode at all times.\nSecond, our automated book borrowing system allows each undergraduate to borrow up to ten books simultaneously for a duration of four weeks. ... You can renew books online twice through our student portal, provided no other student has placed a hold on them.\nThird, the most powerful tool at your disposal is our Digital Research Repository. ... By logging in with your university credentials, you gain free, unrestricted access to over two million peer-reviewed academic journals, including JSTOR, ScienceDirect, and IEEE Xplore. ... Even if you are studying off-campus or abroad, our secure proxy network ensures seamless connection.\nLastly, our expert reference librarians offer free one-on-one consultation sessions every weekday afternoon. ... Whether you need guidance on thesis citation styles like APA or assistance finding archival manuscripts, feel free to book an appointment at the main information desk on Level 1. ... Thank you for your attention.",
          questions: [
            {
              id: "L21",
              question: "On which levels of the library are group discussions permitted?",
              options: [
                { key: "A", text: "Levels 1 and 2 only" },
                { key: "B", text: "Levels 3 and 4" },
                { key: "C", text: "Level 5 rooftop cafe" },
                { key: "D", text: "Throughout all five floors" }
              ],
              correctAnswer: "A",
              explanation: "Tiến sĩ Henderson nói rõ: 'Levels 1 and 2 house collaborative study lounges where group discussions are encouraged' (A)."
            },
            {
              id: "L22",
              question: "How many books can an undergraduate student borrow at one time?",
              options: [
                { key: "A", text: "Up to five books" },
                { key: "B", text: "Up to ten books" },
                { key: "C", text: "Up to fifteen books" },
                { key: "D", text: "Unlimited books" }
              ],
              correctAnswer: "B",
              explanation: "Diễn giả nêu rõ: 'allows each undergraduate to borrow up to ten books simultaneously' (B)."
            },
            {
              id: "L23",
              question: "For how long can borrowed books be kept before renewal?",
              options: [
                { key: "A", text: "Two weeks" },
                { key: "B", text: "Three weeks" },
                { key: "C", text: "Four weeks" },
                { key: "D", text: "One whole semester" }
              ],
              correctAnswer: "C",
              explanation: "Thời hạn mượn: 'for a duration of four weeks' (C)."
            },
            {
              id: "L24",
              question: "What major benefit does the Digital Research Repository provide?",
              options: [
                { key: "A", text: "Free printing services across campus" },
                { key: "B", text: "Free online access to over two million peer-reviewed journals" },
                { key: "C", text: "Automatic essay writing and grading software" },
                { key: "D", text: "Discounted commercial textbooks purchase" }
              ],
              correctAnswer: "B",
              explanation: "Diễn giả nhấn mạnh: 'free, unrestricted access to over two million peer-reviewed academic journals' (B)."
            },
            {
              id: "L25",
              question: "What assistance do reference librarians offer during consultation sessions?",
              options: [
                { key: "A", text: "Directly writing essays for students" },
                { key: "B", text: "Guidance on citation styles and locating archival manuscripts" },
                { key: "C", text: "Selling university exam prep papers" },
                { key: "D", text: "Repairing students' damaged personal laptops" }
              ],
              correctAnswer: "B",
              explanation: "Thủ thư hỗ trợ: 'guidance on thesis citation styles like APA or assistance finding archival manuscripts' (B)."
            }
          ]
        },
        {
          id: "T2",
          title: "Bài giảng 2: Ô nhiễm hạt vi nhựa trong đại dương (Microplastics in Marine Ecosystems)",
          audioTranscript: "Good afternoon students. ... In today's marine ecology lecture, we examine one of the most insidious threats facing ocean life: microplastics. ... By definition, microplastics are tiny plastic particles measuring less than five millimeters across.\nThere are two primary categories of microplastics. ... Primary microplastics are manufactured directly for commercial use, such as microbeads found in cosmetic face scrubs and abrasive cleaning powders. ... Secondary microplastics, on the other hand, result from the physical fragmentation and chemical weathering of larger plastic debris, such as discarded fishing nets, beverage bottles, and synthetic clothing fibers.\nWhy are microplastics so exceptionally hazardous? ... First, due to their microscopic dimensions, they are frequently mistaken for food by small marine organisms, such as plankton, krill, and shellfish. ... Once ingested, these indigestible particles block digestive tracts, causing severe malnutrition and internal injury.\nSecond, microplastics act like sponges, absorbing toxic chemical pollutants such as pesticides and heavy metals dissolved in ocean water. ... Through a biological process known as biomagnification, these toxic compounds accumulate in higher concentrations as they move up the food chain—from tiny crustaceans to predatory fish, and ultimately to humans who consume seafood.\nTo combat this growing crisis, international scientists emphasize a three-pronged approach: ... banning non-essential primary microbeads in cosmetics, establishing advanced wastewater filtration facilities, and strictly transitioning toward biodegradable bio-based polymers. ... In our next seminar, we will examine specific legislative bans enacted in the European Union.",
          questions: [
            {
              id: "L26",
              question: "What is the official size definition of microplastic particles?",
              options: [
                { key: "A", text: "Smaller than five millimeters across" },
                { key: "B", text: "Between one and two centimeters" },
                { key: "C", text: "Exactly ten millimeters in length" },
                { key: "D", text: "Visible only under electron microscopes" }
              ],
              correctAnswer: "A",
              explanation: "Giảng viên định nghĩa: 'measuring less than five millimeters across' (A)."
            },
            {
              id: "L27",
              question: "Which of the following is an example of primary microplastics?",
              options: [
                { key: "A", text: "Degraded pieces of floating beverage bottles" },
                { key: "B", text: "Synthetic fibers shed from washed garments" },
                { key: "C", text: "Microbeads manufactured for cosmetic face scrubs" },
                { key: "D", text: "Shredded plastic fishing nets" }
              ],
              correctAnswer: "C",
              explanation: "Hạt vi nhựa nguyên sinh (primary): 'such as microbeads found in cosmetic face scrubs...' (C)."
            },
            {
              id: "L28",
              question: "Why do small marine organisms ingest microplastics?",
              options: [
                { key: "A", text: "They use plastic to build protective underwater shells" },
                { key: "B", text: "They mistake the tiny particles for natural food" },
                { key: "C", text: "They are attracted by artificial plastic odors" },
                { key: "D", text: "They seek chemical nutrients in the polymer chains" }
              ],
              correctAnswer: "B",
              explanation: "Bài giảng nêu: 'they are frequently mistaken for food by small marine organisms' (B)."
            },
            {
              id: "L29",
              question: "What is the phenomenon of 'biomagnification' described in the lecture?",
              options: [
                { key: "A", text: "Plastics dissolving completely in saltwater over time" },
                { key: "B", text: "Toxins accumulating in higher concentrations as they ascend the food chain" },
                { key: "C", text: "Ocean waves expanding the physical volume of plastic garbage" },
                { key: "D", text: "Corals producing natural shields against harmful chemicals" }
              ],
              correctAnswer: "B",
              explanation: "Biomagnification là hiện tượng chất độc tích tụ với nồng độ ngày càng cao khi di chuyển lên bậc cao hơn của chuỗi thức ăn (B)."
            },
            {
              id: "L30",
              question: "Which solution is suggested to curb the microplastic crisis?",
              options: [
                { key: "A", text: "Dumping sand into the ocean to bury plastic debris" },
                { key: "B", text: "Transitioning toward biodegradable bio-based polymers and banning cosmetic microbeads" },
                { key: "C", text: "Prohibiting all commercial fishing activities worldwide" },
                { key: "D", text: "Burning ocean surface plastics using offshore incinerators" }
              ],
              correctAnswer: "B",
              explanation: "Giải pháp gồm: cấm hạt microbeads trong mỹ phẩm và chuyển đổi sang polymer sinh học tự phân hủy (B)."
            }
          ]
        },
        {
          id: "T3",
          title: "Bài giảng 3: Cơ chế Giấc ngủ & Sự củng cố Trí nhớ (Sleep & Memory Consolidation)",
          audioTranscript: "Hello class. ... Today we explore a topic vital to every university student: the neuroscience of sleep and how it directly impacts memory consolidation.\nFor centuries, scientists believed the brain was simply dormant or resting during sleep. ... Modern neuroimaging has disproven this assumption. ... During sleep, especially during Slow-Wave Sleep and Rapid Eye Movement—known as REM sleep—the brain is intensely active, reorganizing, filing, and reinforcing data absorbed during waking hours.\nHere is how the biological mechanism functions. ... When you study for an exam, new information is initially stored temporarily in the hippocampus, a brain region that acts like a temporary USB drive. ... However, the hippocampus has finite storage capacity. ... While you sleep, neural electrical oscillations transfer these fragile short-term memories into the neocortex, our long-term hard drive.\nIf a student pulls an all-nighter before an examination, this critical neural transfer is completely interrupted. ... Studies show that sleep-deprived students experience a forty percent reduction in their ability to recall complex facts compared to well-rested peers.\nFurthermore, adequate sleep facilitates emotional equilibrium. ... The amygdala, our brain's fear and stress center, becomes up to sixty percent more hyperactive when we sleep less than six hours a night, leading to heightened test anxiety.\nTo optimize academic performance, sleep scientists advocate three straightforward rules: ... maintain a consistent bedtime, avoid bright smartphone screens at least thirty minutes before sleeping, and keep your bedroom temperature pleasantly cool around 19 degrees Celsius. ... Prioritize your sleep, and your academic outcomes will improve naturally.",
          questions: [
            {
              id: "L31",
              question: "What did historical scientists mistakenly believe about the human brain during sleep?",
              options: [
                { key: "A", text: "That it worked twice as fast as during daytime" },
                { key: "B", text: "That it was simply passive, dormant, or resting" },
                { key: "C", text: "That it generated new physical brain cells every night" },
                { key: "D", text: "That it disconnected completely from the nervous system" }
              ],
              correctAnswer: "B",
              explanation: "Trước đây các nhà khoa học lầm tưởng não bộ chỉ nghỉ ngơi thụ động ('simply dormant or resting during sleep') (B)."
            },
            {
              id: "L32",
              question: "What is the primary role of the hippocampus in learning?",
              options: [
                { key: "A", text: "Storing permanent lifetime memories" },
                { key: "B", text: "Acting as a temporary storage area for new information" },
                { key: "C", text: "Regulating breathing rhythm and body temperature" },
                { key: "D", text: "Controlling eyesight and visual coordination" }
              ],
              correctAnswer: "B",
              explanation: "Hồi hải mã (hippocampus) đóng vai trò lưu trữ tạm thời ('acts like a temporary USB drive') (B)."
            },
            {
              id: "L33",
              question: "What occurs to short-term memories during healthy sleep?",
              options: [
                { key: "A", text: "They are entirely erased to make room for new data" },
                { key: "B", text: "They are transferred from the hippocampus to the neocortex for long-term storage" },
                { key: "C", text: "They are transformed into physical motor reflexes" },
                { key: "D", text: "They remain frozen until awakened by daylight" }
              ],
              correctAnswer: "B",
              explanation: "Ký ức ngắn hạn được chuyển từ hippocampus sang neocortex để lưu trữ dài hạn (B)."
            },
            {
              id: "L34",
              question: "By how much can test recall ability decline if a student skips sleep entirely?",
              options: [
                { key: "A", text: "Around ten percent" },
                { key: "B", text: "Around twenty-five percent" },
                { key: "C", text: "Up to forty percent" },
                { key: "D", text: "Nearly seventy percent" }
              ],
              correctAnswer: "C",
              explanation: "Nghiên cứu chỉ ra sinh viên thiếu ngủ bị sụt giảm 40% khả năng nhớ lại thông tin ('forty percent reduction in their ability to recall') (C)."
            },
            {
              id: "L35",
              question: "Which habit is recommended to improve sleep quality before examinations?",
              options: [
                { key: "A", text: "Drinking hot caffeinated coffee right before bed" },
                { key: "B", text: "Studying notes on an illuminated smartphone in complete darkness" },
                { key: "C", text: "Avoiding digital screens for at least 30 minutes before sleep" },
                { key: "D", text: "Keeping the bedroom temperature above 28 degrees Celsius" }
              ],
              correctAnswer: "C",
              explanation: "Quy tắc được khuyến nghị: 'avoid bright smartphone screens at least thirty minutes before sleeping' (C)."
            }
          ]
        }
      ]
    }
  },

  // ==========================================
  // 2. READING SKILL (40 Questions - 60 Mins)
  // ==========================================
  reading: {
    time: 60,
    totalQuestions: 40,
    passages: [
      {
        id: "P1",
        title: "Passage 1: The Transition to Renewable Energy Systems",
        wordCount: 475,
        genre: "Khoa học Môi trường & Công nghệ",
        text: `The ongoing global transition toward renewable energy represents one of the most critical structural transformations in modern human history. For more than two centuries, industrial economies have functioned almost exclusively on fossil fuels—namely coal, petroleum, and natural gas. While these carbon-dense hydrocarbons catalyzed unprecedented economic prosperity and technological advancement, their continuous combustion has released billions of tons of carbon dioxide and other greenhouse gases into the atmosphere, directly driving global climate change and oceanic warming.

In response to ecological imperatives and depleting fossil reserves, nations worldwide are investing heavily in renewable alternatives, with solar photovoltaics and wind power expanding at an exponential trajectory. Over the past decade alone, technological breakthroughs in photovoltaic cell efficiency and industrial manufacturing scalability have triggered a staggering 85 percent decline in the production cost of solar electricity. Consequently, in many regions across Europe, the Americas, and Asia, constructing and operating a new utility-scale solar facility is now measurably cheaper than running an existing, fully amortized coal plant.

Nevertheless, integrating high proportions of renewable energy into legacy electrical grids poses formidable engineering challenges. The most prominent obstacle is intermittency: solar panels do not produce power during nighttime hours or overcast days, and wind turbines remain idle during calm atmospheric periods. Traditional electrical grids were constructed around centralized baseload thermal generators that produce steady, predictable output. To accommodate fluctuating clean energy, contemporary power networks require revolutionary upgrades, including grid-scale battery storage, pumped hydroelectric systems, and continent-wide transmission interconnections.

Furthermore, policy frameworks and market incentives play an indispensable role in accelerating this transition. Governments that establish ambitious carbon-neutrality targets, provide tax credits for domestic clean-tech manufacturing, and eliminate fossil fuel subsidies witness rapid deployment of clean infrastructure. Transitioning to renewable power is no longer merely an environmental concern; it has become an economic imperative and a matter of long-term national energy security.`,
        questions: [
          {
            id: "R1",
            question: "What is the primary topic of the passage?",
            options: [
              { key: "A", text: "The environmental history of coal mining in Europe" },
              { key: "B", text: "The rise, economic advantages, and grid challenges of renewable energy" },
              { key: "C", text: "The technological mechanisms of gasoline automobile engines" },
              { key: "D", text: "The diplomatic disputes surrounding offshore oil drilling" }
            ],
            correctAnswer: "B",
            explanation: "Toàn bài phân tích sự phát triển của năng lượng tái tạo, lợi thế chi phí giảm và những thách thức về mạng lưới truyền tải điện (B)."
          },
          {
            id: "R2",
            question: "According to Paragraph 1, what negative consequence resulted from burning fossil fuels?",
            options: [
              { key: "A", text: "A severe decline in global trade and manufacturing" },
              { key: "B", text: "The release of massive greenhouse gases leading to climate change" },
              { key: "C", text: "The sudden depletion of all freshwater lakes" },
              { key: "D", text: "A complete collapse of legacy electrical grids" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 1 nêu: 'released billions of tons of carbon dioxide and other greenhouse gases into the atmosphere, directly driving global climate change' (B)."
          },
          {
            id: "R3",
            question: "By how much has the cost of producing solar electricity declined over the past decade?",
            options: [
              { key: "A", text: "35 percent" },
              { key: "B", text: "50 percent" },
              { key: "C", text: "85 percent" },
              { key: "D", text: "95 percent" }
            ],
            correctAnswer: "C",
            explanation: "Đoạn 2 nêu rõ: 'have triggered a staggering 85 percent decline in the production cost of solar electricity' (C)."
          },
          {
            id: "R4",
            question: "The word 'intermittency' in Paragraph 3 most likely means:",
            options: [
              { key: "A", text: "High financial expense" },
              { key: "B", text: "Irregularity or lack of continuous availability" },
              { key: "C", text: "Extreme physical durability" },
              { key: "D", text: "Excessive electrical voltage" }
            ],
            correctAnswer: "B",
            explanation: "Intermittency có nghĩa là tính gián đoạn, chập chờn không liên tục (solar không có điện vào ban đêm, gió ngừng thổi) (B)."
          },
          {
            id: "R5",
            question: "Why were traditional electrical power grids designed around thermal generators?",
            options: [
              { key: "A", text: "Because thermal plants provide steady, predictable power output" },
              { key: "B", text: "Because thermal power generators require no maintenance" },
              { key: "C", text: "Because thermal electricity produces zero carbon emissions" },
              { key: "D", text: "Because thermal plants rely entirely on battery storage" }
            ],
            correctAnswer: "A",
            explanation: "Đoạn 3 giải thích: 'constructed around centralized baseload thermal generators that produce steady, predictable output' (A)."
          },
          {
            id: "R6",
            question: "Which of the following is mentioned as a solution to handle fluctuating renewable power?",
            options: [
              { key: "A", text: "Completely shutting down residential power at night" },
              { key: "B", text: "Grid-scale battery storage and pumped hydroelectric systems" },
              { key: "C", text: "Burning excess solar panels during winter months" },
              { key: "D", text: "Increasing consumer electricity taxes by double" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 3 liệt kê các giải pháp: 'grid-scale battery storage, pumped hydroelectric systems, and continent-wide transmission interconnections' (B)."
          },
          {
            id: "R7",
            question: "The word 'imperative' in the final paragraph is closest in meaning to:",
            options: [
              { key: "A", text: "Optional luxury" },
              { key: "B", text: "Urgent necessity" },
              { key: "C", text: "Theoretical concept" },
              { key: "D", text: "Temporary trend" }
            ],
            correctAnswer: "B",
            explanation: "Imperative mang nghĩa điều cấp bách, sự tất yếu bắt buộc phải thực hiện (urgent necessity) (B)."
          },
          {
            id: "R8",
            question: "According to Paragraph 4, what government action stimulates clean energy infrastructure?",
            options: [
              { key: "A", text: "Increasing subsidies for overseas petroleum exploration" },
              { key: "B", text: "Providing tax credits and setting ambitious carbon-neutrality targets" },
              { key: "C", text: "Banning foreign investment in renewable power projects" },
              { key: "D", text: "Nationalizing all domestic electricity retail providers" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 4 nêu: 'establish ambitious carbon-neutrality targets, provide tax credits for domestic clean-tech manufacturing...' (B)."
          },
          {
            id: "R9",
            question: "It can be inferred from the passage that operating a new utility-scale solar facility today is:",
            options: [
              { key: "A", text: "Economically competitive compared to running old coal plants" },
              { key: "B", text: "Far more expensive than nuclear fission reactors" },
              { key: "C", text: "Unlikely to expand beyond developed European countries" },
              { key: "D", text: "Dependent on imported petroleum for daily functioning" }
            ],
            correctAnswer: "A",
            explanation: "Đoạn 2 chỉ ra: 'constructing and operating a new utility-scale solar facility is now measurably cheaper than running an existing, fully amortized coal plant' (A)."
          },
          {
            id: "R10",
            question: "Which of the following would the author most likely agree with?",
            options: [
              { key: "A", text: "Fossil fuels will entirely disappear within the next twelve months" },
              { key: "B", text: "Renewable energy adoption requires technological, infrastructural, and policy support" },
              { key: "C", text: "Solar and wind energy have no engineering drawbacks whatsoever" },
              { key: "D", text: "Battery storage technology is incapable of improving any further" }
            ],
            correctAnswer: "B",
            explanation: "Tác giả kết luận việc chuyển đổi cần sự đồng bộ giữa công nghệ, nâng cấp lưới điện và chính sách quản lý (B)."
          }
        ]
      },
      {
        id: "P2",
        title: "Passage 2: The Behavioral Psychology of Habit Formation",
        wordCount: 460,
        genre: "Tâm lý học Hành vi & Phát triển bản thân",
        text: `Habits govern an astonishing portion of daily human behavior. Cognitive psychologists estimate that approximately forty to forty-five percent of the choices individuals execute every single day are not products of conscious deliberation, but rather automatic behavioral routines wired into our neural architecture. Understanding how habits are created, consolidated, and re-engineered provides profound insights into personal productivity, health, and addiction management.

At the epicenter of habit research is the concept known as the 'Habit Loop', popularized by neuroscientists and behavioral economists. The loop comprises three sequential components: the cue, the routine, and the reward. The cue acts as an environmental trigger that commands the brain to enter automatic pilot mode. Cues typically fall into five distinct categories: a specific location, a time of day, an emotional state, the presence of other people, or an immediately preceding action.

Upon perceiving the cue, the individual executes the routine, which represents the physical, mental, or emotional behavior itself. The final stage is the reward, which signals to the brain that the behavioral sequence was pleasurable or beneficial. This induces a release of dopamine in the basal ganglia—the primitive, deep structure of the brain responsible for automatic memory. Over successive repetitions, the brain begins anticipating the reward as soon as the cue is identified, creating a powerful neurological craving that locks the routine into an automatic habit.

Crucially, behavioral scientists emphasize that ingrained habits cannot simply be extinguished; rather, they must be substituted. The 'Golden Rule of Habit Change' dictates that to modify a detrimental habit, one must maintain the exact same cue and reward, while consciously replacing the routine. For instance, an office worker who reaches for a sugary snack at 3:00 PM to combat afternoon fatigue (the cue) may successfully swap the unhealthy routine with a brisk five-minute walk or a brief chat with a colleague. Both alternate behaviors satisfy the identical need for mental refreshment and sensory distraction (the reward) without sabotaging dietary health. Through consistent repetition, the newly modified loop becomes the dominant default behavior.`,
        questions: [
          {
            id: "R11",
            question: "What percentage of daily human decisions is estimated to be habitual rather than conscious?",
            options: [
              { key: "A", text: "Less than fifteen percent" },
              { key: "B", text: "Between forty and forty-five percent" },
              { key: "C", text: "Approximately seventy-five percent" },
              { key: "D", text: "Over ninety percent" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 1 nêu: 'approximately forty to forty-five percent of the choices individuals execute every single day...' (B)."
          },
          {
            id: "R12",
            question: "What are the three components of the 'Habit Loop'?",
            options: [
              { key: "A", text: "Intention, execution, and celebration" },
              { key: "B", text: "The cue, the routine, and the reward" },
              { key: "C", text: "Stimulus, reaction, and punishment" },
              { key: "D", text: "Desire, willpower, and satisfaction" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 2 nêu rõ: 'comprises three sequential components: the cue, the routine, and the reward' (B)."
          },
          {
            id: "R13",
            question: "Which of the following is NOT listed as a common category of environmental cues?",
            options: [
              { key: "A", text: "A specific physical location" },
              { key: "B", text: "A particular time of day" },
              { key: "C", text: "Genetic chromosome sequencing" },
              { key: "D", text: "An internal emotional state" }
            ],
            correctAnswer: "C",
            explanation: "Đoạn 2 liệt kê địa điểm, thời gian, trạng thái cảm xúc, người xung quanh, hành động trước đó; không có trình tự nhiễm sắc thể (C)."
          },
          {
            id: "R14",
            question: "Which brain structure is primarily responsible for storing automatic behavioral habits?",
            options: [
              { key: "A", text: "The prefrontal cortex" },
              { key: "B", text: "The basal ganglia" },
              { key: "C", text: "The auditory nerve" },
              { key: "D", text: "The spinal cord" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 3 nêu: 'release of dopamine in the basal ganglia—the primitive, deep structure of the brain responsible for automatic memory' (B)."
          },
          {
            id: "R15",
            question: "What creates the powerful neurological craving that solidifies a habit?",
            options: [
              { key: "A", text: "Anticipating the reward upon encountering the cue" },
              { key: "B", text: "Receiving monetary payment from coworkers" },
              { key: "C", text: "Exercising intense conscious willpower every minute" },
              { key: "D", text: "Experiencing physical pain or discomfort" }
            ],
            correctAnswer: "A",
            explanation: "Đoạn 3 nêu: 'the brain begins anticipating the reward as soon as the cue is identified, creating a powerful neurological craving' (A)."
          },
          {
            id: "R16",
            question: "According to behavioral scientists, how should detrimental habits be altered?",
            options: [
              { key: "A", text: "By attempting to completely erase them through force of will" },
              { key: "B", text: "By substituting the routine while keeping the cue and reward intact" },
              { key: "C", text: "By moving permanently to a different city" },
              { key: "D", text: "By avoiding all emotional feelings" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 4 chỉ ra: 'maintain the exact same cue and reward, while consciously replacing the routine' (B)."
          },
          {
            id: "R17",
            question: "The word 'extinguished' in Paragraph 4 is closest in meaning to:",
            options: [
              { key: "A", text: "Completely eliminated or wiped out" },
              { key: "B", text: "Greatly praised and rewarded" },
              { key: "C", text: "Slowly postponed" },
              { key: "D", text: "Easily multiplied" }
            ],
            correctAnswer: "A",
            explanation: "Extinguished có nghĩa là dập tắt, loại bỏ hoàn toàn (completely eliminated) (A)."
          },
          {
            id: "R18",
            question: "In the office worker example, what alternative routine replaced eating sugary snacks?",
            options: [
              { key: "A", text: "Drinking five cups of espresso" },
              { key: "B", text: "A brisk walk or brief chat with a colleague" },
              { key: "C", text: "Staying an extra hour late at work" },
              { key: "D", text: "Skipping lunch entirely" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 4 nêu: 'swap the unhealthy routine with a brisk five-minute walk or a brief chat with a colleague' (B)."
          },
          {
            id: "R19",
            question: "What fundamental human need did the alternative routine satisfy in the example?",
            options: [
              { key: "A", text: "Need for monetary compensation" },
              { key: "B", text: "Need for mental refreshment and sensory distraction" },
              { key: "C", text: "Need for intense competitive athletic training" },
              { key: "D", text: "Need for complete professional promotion" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 4 nêu: 'satisfy the identical need for mental refreshment and sensory distraction' (B)."
          },
          {
            id: "R20",
            question: "What is the author's primary intention in writing this passage?",
            options: [
              { key: "A", text: "To sell a pharmaceutical weight-loss pill" },
              { key: "B", text: "To explain the neurological mechanics of habits and how to modify them" },
              { key: "C", text: "To argue that human beings have no free will whatsoever" },
              { key: "D", text: "To criticize modern office workplaces for causing stress" }
            ],
            correctAnswer: "B",
            explanation: "Mục đích chính của bài viết là giải thích cơ chế hình thành thói quen trong não bộ và phương pháp khoa học để thay đổi chúng (B)."
          }
        ]
      },
      {
        id: "P3",
        title: "Passage 3: The 15-Minute City and Modern Urban Planning",
        wordCount: 480,
        genre: "Quy hoạch Đô thị & Xã hội",
        text: `In recent decades, urban centers worldwide have grappled with the unsustainable consequences of twentieth-century car-centric design: chronic traffic congestion, toxic air pollution, and lengthy daily commutes that degrade psychological well-being. In response to these pressing urban dilemmas, contemporary urbanists have championed an innovative residential framework known as the '15-minute city'. Conceived by urban scholar Carlos Moreno, this paradigm envisions urban neighborhoods where residents can fulfill the vast majority of their daily essential needs within a fifteen-minute journey on foot or by bicycle.

The core philosophy of the 15-minute city hinges upon six fundamental urban functions: living, working, commerce, healthcare, education, and entertainment. Rather than segmenting metropolitan areas into monocultural zones—such as isolated suburban bedroom communities separated from distant commercial downtown towers—the 15-minute framework decentralizes social services. Neighborhoods are deliberately revitalized through mixed-use zoning, encouraging ground-floor grocery stores, local clinics, green parks, and primary schools to coexist harmoniously alongside residential apartment buildings.

A cornerstone of this transformation is the aggressive reallocation of public street space. Historically, up to seventy percent of public street surfaces in major cities were prioritized for motorized vehicles and curbside automobile parking. The 15-minute model reclaims this public territory for pedestrian promenades, dedicated protected cycle lanes, outdoor cafe terraces, and micro-green spaces. In cities like Paris, which aggressively embraced this vision under its municipal 'Ville du Quart d'Heure' initiative, hundreds of kilometers of vehicle lanes have been permanently converted into bicycle thoroughfares, and school streets have been pedestrianized to ensure child safety.

Nevertheless, critics and sociologists raise significant concerns regarding social equity and implementation feasibility. One major critique contends that without vigilant governmental rent controls and affordable housing guarantees, hyper-desirable 15-minute neighborhoods risk accelerating gentrification. As neighborhoods become walkable, aesthetically pleasing, and ecologically vibrant, property values and commercial rents inevitably surge, potentially displacing lower-income families to peripheral, car-dependent outskirts. Consequently, urban planners emphasize that for the 15-minute model to succeed equitably, municipal authorities must integrate robust public housing policies, accessible community healthcare, and reliable public transit links that connect diverse socioeconomic districts.`,
        questions: [
          {
            id: "R21",
            question: "What is the central concept of the '15-minute city'?",
            options: [
              { key: "A", text: "Building highway express lanes with a 15-minute speed limit" },
              { key: "B", text: "Enabling residents to access most essential services within a 15-minute walk or bike ride" },
              { key: "C", text: "Requiring all businesses to close after 15 minutes of operation" },
              { key: "D", text: "Constructing underground train stations every 15 meters" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 1 nêu: 'residents can fulfill the vast majority of their daily essential needs within a fifteen-minute journey on foot or by bicycle' (B)."
          },
          {
            id: "R22",
            question: "Which of the following was a negative consequence of twentieth-century car-centric urban design?",
            options: [
              { key: "A", text: "Extensive bicycle lane construction" },
              { key: "B", text: "Traffic congestion, air pollution, and lengthy daily commutes" },
              { key: "C", text: "Complete elimination of private automobile ownership" },
              { key: "D", text: "A surplus of agricultural farmland in city centers" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 1 liệt kê: 'chronic traffic congestion, toxic air pollution, and lengthy daily commutes' (B)."
          },
          {
            id: "R23",
            question: "How does the 15-minute city model differ from traditional metropolitan zoning?",
            options: [
              { key: "A", text: "It isolates commercial offices hundreds of miles from homes" },
              { key: "B", text: "It decentralizes services through mixed-use zoning rather than separated monocultural zones" },
              { key: "C", text: "It eliminates all ground-floor retail shops" },
              { key: "D", text: "It bans all schools and healthcare clinics from residential quarters" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 2 nêu: 'Rather than segmenting metropolitan areas into monocultural zones... the 15-minute framework decentralizes social services' thông qua mixed-use zoning (B)."
          },
          {
            id: "R24",
            question: "Historically, up to what percentage of urban street space was devoted to cars and parking?",
            options: [
              { key: "A", text: "Twenty percent" },
              { key: "B", text: "Forty percent" },
              { key: "C", text: "Seventy percent" },
              { key: "D", text: "Ninety-five percent" }
            ],
            correctAnswer: "C",
            explanation: "Đoạn 3 nêu: 'up to seventy percent of public street surfaces in major cities were prioritized for motorized vehicles...' (C)."
          },
          {
            id: "R25",
            question: "What specific urban measure was implemented in Paris under this initiative?",
            options: [
              { key: "A", text: "Banning all pedestrian walking on major sidewalks" },
              { key: "B", text: "Converting vehicle lanes into bicycle thoroughfares and pedestrianizing school streets" },
              { key: "C", text: "Demolishing historical monuments to build underground highways" },
              { key: "D", text: "Prohibiting public transit use for teenagers" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 3 nêu: 'hundreds of kilometers of vehicle lanes have been permanently converted into bicycle thoroughfares, and school streets have been pedestrianized' (B)."
          },
          {
            id: "R26",
            question: "The word 'reclaims' in Paragraph 3 is closest in meaning to:",
            options: [
              { key: "A", text: "Destroys permanently" },
              { key: "B", text: "Recovers or takes back for productive use" },
              { key: "C", text: "Sells to private real estate developers" },
              { key: "D", text: "Abandons completely" }
            ],
            correctAnswer: "B",
            explanation: "Reclaims có nghĩa là thu hồi, tái chiếm lĩnh để phục vụ mục đích công cộng tốt hơn (takes back) (B)."
          },
          {
            id: "R27",
            question: "What primary risk do critics and sociologists raise regarding 15-minute neighborhoods?",
            options: [
              { key: "A", text: "They could trigger gentrification and displace lower-income residents" },
              { key: "B", text: "They will cause bicycle manufacturers to go bankrupt" },
              { key: "C", text: "They will make cities too cold during winter months" },
              { key: "D", text: "They completely prevent people from exercising outdoors" }
            ],
            correctAnswer: "A",
            explanation: "Đoạn 4 cảnh báo: 'risk accelerating gentrification... potentially displacing lower-income families to peripheral, car-dependent outskirts' (A)."
          },
          {
            id: "R28",
            question: "The word 'peripheral' in the final paragraph refers to:",
            options: [
              { key: "A", text: "Outer, marginal, or edge areas" },
              { key: "B", text: "Ultra-modern central districts" },
              { key: "C", text: "Underground subway tunnels" },
              { key: "D", text: "Heavily polluted industrial ports" }
            ],
            correctAnswer: "A",
            explanation: "Peripheral có nghĩa là ngoại vi, rìa ngoài của thành phố (outer/edge areas) (A)."
          },
          {
            id: "R29",
            question: "What municipal measure is deemed essential to ensure social equity in 15-minute cities?",
            options: [
              { key: "A", text: "Abolishing all public transit fares for private car drivers" },
              { key: "B", text: "Integrating public housing guarantees and affordable healthcare" },
              { key: "C", text: "Constructing multi-story parking garages in public parks" },
              { key: "D", text: "Removing street lights to save municipal electricity" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 4 nhấn mạnh: 'must integrate robust public housing policies, accessible community healthcare, and reliable public transit links' (B)."
          },
          {
            id: "R30",
            question: "What is the overall tone of the author toward the 15-minute city concept?",
            options: [
              { key: "A", text: "Entirely dismissive and hostile" },
              { key: "B", text: "Analytic and constructively balanced" },
              { key: "C", text: "Unconditionally celebratory without acknowledging any flaws" },
              { key: "D", text: "Confused and indifferent" }
            ],
            correctAnswer: "B",
            explanation: "Tác giả trình bày các ưu điểm rất rõ ràng, đồng thời chỉ ra các lo ngại xã hội (gentrification) và giải pháp khắc phục -> Thái độ phân tích khách quan, cân bằng (B)."
          }
        ]
      },
      {
        id: "P4",
        title: "Passage 4: Coral Reef Ecosystems and Restoration Science",
        wordCount: 495,
        genre: "Sinh thái học Biển & Bảo tồn",
        text: `Coral reefs are frequently referred to as the 'rainforests of the sea'. Despite covering less than one-tenth of one percent of the global ocean floor, these extraordinary biogenic structures harbor more than twenty-five percent of all marine species, including four thousand species of fish, seven hundred varieties of coral, and thousands of invertebrates. Beyond their profound biological richness, coral reefs provide vital ecosystem services: they act as natural submerged breakwaters that dissipate up to ninety-seven percent of incoming wave energy, thereby shielding vulnerable coastal communities from hurricane surges and beach erosion.

However, marine ecosystems today face an unprecedented survival crisis driven by anthropogenic global warming and ocean acidification. Corals exist in an obligate symbiotic relationship with microscopic photosynthetic algae called zooxanthellae, which reside within the coral polyp tissues. These algae provide corals with up to ninety percent of their metabolic energy through photosynthesis, while giving corals their vivid colors. When seawater temperatures elevate by as little as one to two degrees Celsius above normal summer thresholds for extended periods, the stressed corals expel the algae, turning stark white in a phenomenon known as coral bleaching. While bleached corals are not immediately dead, they are functionally starved and highly vulnerable to lethal disease.

Mass bleaching events, once regarded as rare anomalies, have accelerated with alarming frequency and geographical magnitude across the Pacific, Indian, and Atlantic oceans. Compounding this thermal stress, seawater absorbed approximately thirty percent of human carbon dioxide emissions since the Industrial Revolution, lowering oceanic pH in a process known as acidification. Acidic water reduces the concentration of carbonate ions, making it chemically arduous for corals and calcifying organisms to construct and maintain their calcium carbonate skeletons.

In response to this ecological catastrophe, marine biologists are pioneering cutting-edge coral restoration techniques. In coral nurseries across the Caribbean and the Great Barrier Reef, researchers fragment resilient coral colonies into micro-fragments, which stimulate rapid tissue regeneration up to fifty times faster than normal growth rates. Once matured, these hardy micro-colonies are transplanted onto degraded reef substrates. Simultaneously, geneticists are identifying and selectively breeding 'super corals' that possess natural thermal tolerance. While these innovative interventions offer critical breathing room, scientists universally caution that localized restoration cannot substitute for global greenhouse gas reductions.`,
        questions: [
          {
            id: "R31",
            question: "Why are coral reefs called the 'rainforests of the sea'?",
            options: [
              { key: "A", text: "Because they grow dense underwater tropical trees" },
              { key: "B", text: "Because they occupy vast land territory near the equator" },
              { key: "C", text: "Because they support immense marine biodiversity on a small ocean area" },
              { key: "D", text: "Because they receive heavy freshwater rainfall every day" }
            ],
            correctAnswer: "C",
            explanation: "Đoạn 1 nêu: chiếm chưa đầy 0.1% đáy biển nhưng nuôi dưỡng hơn 25% sinh vật biển -> Đa dạng sinh học cực kỳ phong phú (C)."
          },
          {
            id: "R32",
            question: "What critical coastal defense service do coral reefs perform?",
            options: [
              { key: "A", text: "Purifying industrial wastewater from coastal factories" },
              { key: "B", text: "Dissipating up to ninety-seven percent of wave energy to prevent erosion" },
              { key: "C", text: "Generating high-speed electrical currents along beaches" },
              { key: "D", text: "Attracting commercial tourist cruise ships" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 1 nêu rõ: 'dissipate up to ninety-seven percent of incoming wave energy, thereby shielding vulnerable coastal communities...' (B)."
          },
          {
            id: "R33",
            question: "What is the symbiotic relationship between corals and zooxanthellae?",
            options: [
              { key: "A", text: "Corals hunt and digest the algae for direct nutrition" },
              { key: "B", text: "Algae supply corals with metabolic energy through photosynthesis" },
              { key: "C", text: "Algae use coral skeletons to hide from deep-sea predators" },
              { key: "D", text: "Algae produce toxic venom to kill invasive fish" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 2 nêu: 'algae provide corals with up to ninety percent of their metabolic energy through photosynthesis' (B)."
          },
          {
            id: "R34",
            question: "What environmental trigger initiates the coral bleaching phenomenon?",
            options: [
              { key: "A", text: "Sudden drops in seawater salt concentration" },
              { key: "B", text: "Elevations in seawater temperature by 1 to 2 degrees Celsius above normal" },
              { key: "C", text: "Complete absence of sunlight for six months" },
              { key: "D", text: "Excessive consumption of corals by marine mammals" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 2 nêu: 'When seawater temperatures elevate by as little as one to two degrees Celsius above normal summer thresholds...' (B)."
          },
          {
            id: "R35",
            question: "According to Paragraph 2, are bleached corals instantly dead?",
            options: [
              { key: "A", text: "Yes, they decompose into powder within two hours" },
              { key: "B", text: "No, but they are functionally starved and vulnerable to lethal disease" },
              { key: "C", text: "Yes, because their calcium skeletons dissolve immediately" },
              { key: "D", text: "No, they immediately convert into photosynthetic plants" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 2 giải thích: 'While bleached corals are not immediately dead, they are functionally starved and highly vulnerable to lethal disease' (B)."
          },
          {
            id: "R36",
            question: "How does ocean acidification affect corals and calcifying organisms?",
            options: [
              { key: "A", text: "It causes water to boil at much lower temperatures" },
              { key: "B", text: "It reduces carbonate ions, making skeleton construction difficult" },
              { key: "C", text: "It turns all seawater into non-salty freshwater" },
              { key: "D", text: "It accelerates the reproduction rate of jellyfish" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 3 nêu: 'reduces the concentration of carbonate ions, making it chemically arduous for corals... to construct and maintain their calcium carbonate skeletons' (B)."
          },
          {
            id: "R37",
            question: "What innovative coral nursery technique is highlighted in Paragraph 4?",
            options: [
              { key: "A", text: "Submerging giant concrete blocks into volcanic trenches" },
              { key: "B", text: "Micro-fragmentation of resilient colonies to stimulate rapid tissue growth" },
              { key: "C", text: "Importing freshwater lake algae to replace zooxanthellae" },
              { key: "D", text: "Covering entire reefs with floating plastic tarpaulins" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 4 nêu: 'fragment resilient coral colonies into micro-fragments, which stimulate rapid tissue regeneration...' (B)."
          },
          {
            id: "R38",
            question: "What are 'super corals' mentioned in the final paragraph?",
            options: [
              { key: "A", text: "Corals manufactured from industrial fiberglass" },
              { key: "B", text: "Corals that possess innate thermal tolerance" },
              { key: "C", text: "Corals that grow on dry land environments" },
              { key: "D", text: "Corals capable of filtering heavy industrial plastic" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 4 giải thích: 'super corals that possess natural thermal tolerance' (B)."
          },
          {
            id: "R39",
            question: "The word 'resilient' in Paragraph 4 is closest in meaning to:",
            options: [
              { key: "A", text: "Fragile and delicate" },
              { key: "B", text: "Hardy, adaptable, and resistant to stress" },
              { key: "C", text: "Brightly fluorescent" },
              { key: "D", text: "Commercially profitable" }
            ],
            correctAnswer: "B",
            explanation: "Resilient có nghĩa là có khả năng chống chịu, phục hồi dẻo dai (hardy, adaptable) (B)."
          },
          {
            id: "R40",
            question: "What ultimate caveat do scientists emphasize in the conclusion?",
            options: [
              { key: "A", text: "All coral restoration efforts should be terminated immediately" },
              { key: "B", text: "Localized coral restoration cannot substitute for global emissions cuts" },
              { key: "C", text: "Ocean warming has stopped and is no longer a threat" },
              { key: "D", text: "Corals will naturally thrive in acidic water without human assistance" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 4 kết luận: 'localized restoration cannot substitute for global greenhouse gas reductions' (B)."
          }
        ]
      }
    ]
  },

  // ==========================================
  // 3. WRITING SKILL (2 Tasks - 60 Mins)
  // ==========================================
  writing: {
    time: 60,
    task1: {
      title: "Task 1: Thư trang trọng gửi Quản lý Ký túc xá (Room Relocation Request)",
      prompt: "You are an undergraduate student living in the university dormitory. Recently, continuous construction noise and late-night disturbances in your hallway have severely affected your sleep and examination preparation. Write a formal letter (minimum 120 words) to the Dormitory Accommodation Manager. In your letter:\n- State clearly the purpose of your letter and describe the problems you are facing.\n- Explain how these disturbances are impacting your studies and health.\n- Request to be relocated to a quieter room on an upper floor and suggest when you can complete the move.",
      sampleModel: `Dear Accommodation Manager,

I am writing this letter to formally request a room relocation from Room 204 in Building B to a quieter room within the university dormitory complex.

For the past three weeks, ongoing construction work adjacent to the east wing, combined with frequent late-night disturbances in the hallway outside my door, has created severe difficulties. Although dormitory regulations stipulate quiet hours after 10:00 PM, several residents regularly play loud music and gather in the corridor until past midnight.

Consequently, this continuous noise has significantly compromised my sleep quality and ability to concentrate on my upcoming final examinations. As an engineering student with intense laboratory projects, obtaining adequate rest is essential for my academic performance and physical health.

Under these circumstances, I would be extremely grateful if you could arrange to transfer me to a vacant single room on the fourth or fifth floor, where noise levels are much lower. I am available to complete the room inspection and move my personal belongings this coming Saturday afternoon.

Thank you very much for your understanding and prompt assistance regarding this matter. I look forward to your favorable reply.

Yours sincerely,
Nguyen Van An`,
      outline: [
        { part: "Lời chào & Mục đích", content: "Dear Accommodation Manager; nêu rõ yêu cầu chuyển từ Phòng 204 sang phòng yên tĩnh hơn." },
        { part: "Thân bài 1 (Mô tả sự cố)", content: "Tiếng ồn công trường xây dựng và tiếng ồn sinh viên tụ tập khuya sau 10:00 PM vi phạm nội quy." },
        { part: "Thân bài 2 (Tác động & Đề xuất)", content: "Ảnh hưởng nghiêm trọng đến giấc ngủ và ôn thi; xin chuyển lên tầng 4 hoặc 5; hẹn chuyển đồ vào chiều thứ Bảy." },
        { part: "Kết bài & Ký tên", content: "Cảm ơn và mong nhận phản hồi sớm; Yours sincerely, Nguyen Van An." }
      ]
    },
    task2: {
      title: "Task 2: Bài luận học thuật về Thể dục bắt buộc ở bậc Đại học (Physical Education in Universities)",
      prompt: "Some people believe that universities should make physical education and sports training mandatory for all undergraduate students throughout their academic degree. Others argue that physical activities at tertiary level should be entirely voluntary so students can prioritize academic subjects. Discuss both views and give your own opinion. (Write at least 250 words)",
      sampleModel: `In contemporary tertiary education, the question of whether universities should enforce mandatory physical education for all undergraduate students has sparked substantial debate. While some people argue that tertiary students should have the autonomy to focus exclusively on their specialized academic disciplines, I firmly believe that compulsory physical training provides indispensable benefits for both cognitive performance and long-term health.

On the one hand, opponents of mandatory sports programs present several rational arguments. First, university students often face relentless academic pressures, including heavy coursework loads, laboratory assignments, and preparation for competitive internships. Compelling them to attend compulsory physical education sessions may generate additional scheduling stress and detract from their primary scholarly pursuits. Furthermore, adult learners possess the maturity to manage their own lifestyle choices. From this perspective, physical fitness should remain an elective activity rather than a rigid graduation requirement.

On the other hand, compelling arguments substantiate the enforcement of structured physical education. First and foremost, modern undergraduate lifestyles are predominantly sedentary, characterized by prolonged hours sitting in front of computer screens in libraries or dormitories. Incorporating regular physical exercise counteracts cardiovascular ailments, boosts immune resistance, and stimulates endorphin secretion, which substantially diminishes chronic anxiety and depression. Moreover, contemporary neuroscientific research confirms that cardiovascular fitness enhances cerebral blood circulation, thereby directly improving memory consolidation, concentration, and creative problem-solving skills in academic subjects.

In conclusion, although the desire for academic autonomy is understandable, the profound physical and neurological advantages of regular physical activity are undeniable. Therefore, I believe universities should establish well-designed, flexible sports programs as a graduation prerequisite to cultivate healthy, balanced, and productive future graduates.`,
      outline: [
        { part: "Mở bài", content: "Dẫn dắt tranh luận về môn thể dục ở đại học; khẳng định quan điểm ủng hộ việc đưa thể dục thành môn bắt buộc linh hoạt." },
        { part: "Thân bài 1 (Quan điểm đối lập)", content: "Áp lực học tập chuyên ngành nặng nề; sinh viên là người trưởng thành có quyền tự chủ thời gian." },
        { part: "Thân bài 2 (Quan điểm ủng hộ)", content: "Lối sống ít vận động gây bệnh lý; tập luyện kích thích endorphin giảm stress; khoa học thần kinh chứng minh thể dục tăng tuần hoàn máu não và trí nhớ." },
        { part: "Kết bài", content: "Khẳng định lại: Giáo dục thể chất bắt buộc nhưng linh hoạt là cần thiết để đào tạo sinh viên phát triển toàn diện." }
      ]
    }
  },

  // ==========================================
  // 4. SPEAKING SKILL (3 Parts - 12 Mins)
  // ==========================================
  speaking: {
    time: 12,
    part1: {
      title: "Part 1: Tương Tác Xã Hội (Social Interaction - 3 phút)",
      topic1: "Topic 1: Daily Routines & Time Management",
      topic1Questions: [
        {
          q: "What part of your day do you find most productive for studying?",
          a: "Personally, I find the early morning between 6:30 AM and 9:00 AM to be my peak productive window. My mind is clear, there are minimal smartphone notifications, and the quiet atmosphere allows me to absorb complex academic material effortlessly."
        },
        {
          q: "Do you prefer planning your daily schedule in advance or being spontaneous?",
          a: "I definitely lean toward structured planning. Every Sunday evening, I draft a weekly schedule on my digital calendar with specific time slots for classes, assignments, and exercise. Having a roadmap reduces decision fatigue and prevents deadline panic."
        },
        {
          q: "How has your daily routine changed compared to when you were in high school?",
          a: "In high school, my schedule was strictly dictated by fixed class timetables from early morning until late afternoon. At university, I enjoy much greater autonomy, but it also requires stricter self-discipline to balance independent study and extracurricular activities."
        }
      ],
      topic2: "Topic 2: Reading Habits & Digital Media",
      topic2Questions: [
        {
          q: "Do you prefer reading printed physical books or digital e-books?",
          a: "While e-books on a tablet are undeniably convenient when commuting, I still have a deep affection for physical paper books. The tactile sensation of turning pages and the absence of eye-straining digital glare make paper books far more engaging for deep reading."
        },
        {
          q: "What genre of reading material do you read most frequently?",
          a: "I frequently read non-fiction books, especially behavioral psychology and contemporary environmental technology. I find it fascinating to understand how human decision-making works and how clean innovations are transforming modern cities."
        },
        {
          q: "Do you think social media has shortened young people's attention spans for reading long texts?",
          a: "Regrettably, yes. The prevalence of short-form videos and bite-sized social media feeds conditions the brain to seek instant dopamine rewards, making it harder for many youngsters to sustain focus on long, comprehensive academic texts."
        }
      ]
    },

    part2: {
      title: "Part 2: Thảo Luận Giải Pháp (Solution Discussion - 4 phút)",
      situation: "A local youth volunteer club is planning a weekend team-building activity for twenty members. Three options are proposed: (1) An outdoor mountain trekking expedition, (2) A community cooking and baking workshop, or (3) A coastal beach cleanup campaign. Which option is the best choice?",
      bestOption: "Option 3: A coastal beach cleanup campaign",
      sampleSpeech: `If our youth volunteer club were to select an optimal weekend activity, I would strongly advocate for Option 3: a coastal beach cleanup campaign.

First and foremost, a beach cleanup aligns perfectly with our club's core volunteer identity. Rather than merely engaging in leisure, members have the opportunity to make a tangible, positive impact on marine ecology by collecting plastic waste and raising public awareness among local residents. Working together under the sun to haul debris and categorize recyclable materials naturally fosters teamwork, solidarity, and shared pride.

Looking at the other alternatives, an outdoor mountain trekking expedition (Option 1) sounds adventurous; however, it entails considerable physical safety risks, unpredictable weather hazards, and requires specialized hiking gear that not all twenty members may possess. On the other hand, an indoor cooking and baking workshop (Option 2) is undoubtedly cozy and safe, but booking a culinary kitchen for twenty people can be financially exorbitant, and indoor cooking offers limited physical movement and teamwork dynamics.

Therefore, combining environmental contribution, minimal cost, and outdoor camaraderie, the coastal beach cleanup is undeniably the most purposeful and memorable choice for our club.`,
      tips: "Cấu trúc trả lời điểm cao B1/B2: Nêu lựa chọn tốt nhất ngay câu đầu -> Đưa ra 2 lý do ủng hộ thuyết phục -> Phân tích điểm bất lợi của 2 phương án còn lại -> Chốt lại quyết định."
    },

    part3: {
      title: "Part 3: Phát Triển Chủ Đề (Topic Development - 5 phút)",
      topic: "Learning a second language brings numerous lifelong benefits to young adults.",
      mindMap: [
        "Career Advancement (Global employment opportunities & higher earning potential)",
        "Cognitive Flexibility (Enhanced memory, multitasking, and problem-solving abilities)",
        "Cultural Empathy (Deeper cross-cultural appreciation and global citizenship)"
      ],
      sampleSpeech: `It is widely acknowledged that mastering a second language provides profound personal, intellectual, and professional benefits in our globalized era.

First and foremost, language proficiency dramatically accelerates career advancement. In today's interconnected multinational labor market, bilingual graduates possess a decisive competitive edge. They can seamlessly negotiate with international partners, navigate cross-border projects, and access higher salary brackets. Multinational corporations consistently favor professionals who can communicate across linguistic borders.

Secondly, learning an additional language enhances cognitive flexibility. Neuroscientific studies consistently demonstrate that bilingual individuals develop denser neural pathways in the brain's executive control network. Managing two distinct grammatical systems trains the brain to filter distractions, multitask efficiently, and exhibit superior creative problem-solving skills compared to monolingual peers.

Last but not least, language acquisition nurtures cultural empathy. A language is not merely a collection of vocabulary; it is a repository of cultural history, worldview, and societal values. When young adults learn another tongue, they develop open-mindedness, bridge cultural divides, and mature into empathetic global citizens.

In conclusion, the lifelong dividends of learning a second language encompass professional success, sharper intellect, and profound cultural connection.`,
      followUp: [
        {
          q: "At what age do you believe children should start learning a foreign language?",
          a: "In my opinion, early childhood around age five or six is ideal. At this stage, young children possess exceptional neural plasticity, enabling them to acquire natural pronunciation and native-like intonation effortlessly through songs, games, and playful immersion."
        },
        {
          q: "Can Artificial Intelligence language translation tools replace human language learning?",
          a: "While AI translation tools like Google Translate have achieved remarkable accuracy for factual data, they cannot replicate human emotional nuance, cultural humor, or genuine empathy. Learning a language remains an irreplaceable human experience."
        },
        {
          q: "What is the most effective way to maintain foreign language fluency after graduation?",
          a: "The most sustainable method is daily exposure. Listening to English podcasts during commutes, reading international news journals, and engaging in language exchange clubs prevent vocabulary regression and ensure continuous fluency."
        }
      ]
    }
  }
};
