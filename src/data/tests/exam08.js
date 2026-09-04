/**
 * src/data/tests/exam08.js
 * Đề Thi Chuẩn VSTEP Số 08 (Định Dạng ĐH Sư Phạm TP.HCM & ĐHQG)
 * Đầy đủ 4 kỹ năng:
 * - Listening: 35 câu (Hội thoại tự nhiên, ngữ cảnh thực tế, nhấn nhá ngữ điệu)
 * - Reading: 40 câu (4 bài đọc học thuật chuẩn format)
 * - Writing: 2 Tasks (Thư hỏi nhà ở thực tập + Luận trẻ em & thiết bị điện tử)
 * - Speaking: 3 Parts (Du lịch & Âm nhạc, Dự án từ thiện, Giá trị tình nguyện)
 */

export const exam08 = {
  id: "vstep-exam-08",
  name: "Đề Thi Chuẩn VSTEP Số 08 (Định Dạng ĐH Sư Phạm TP.HCM)",
  badge: "Đề Thi Chuẩn B1-B2",
  difficulty: "Chuẩn B1-B2",
  description: "Bộ đề thi thực chiến theo định dạng ĐH Sư Phạm TP.HCM. Phần nghe có ngữ điệu tự nhiên, bối cảnh phòng thi chân thực.",

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
          question: "Where is the book signing event taking place?",
          options: [
            { key: "A", text: "At the university central library" },
            { key: "B", text: "In the conference auditorium on the third floor" },
            { key: "C", text: "At the city square public park" },
            { key: "D", text: "Inside the campus bookstore" }
          ],
          correctAnswer: "B",
          explanation: "Người phát thanh nêu rõ: 'The author meet-and-greet and book signing will take place in the conference auditorium on the third floor.' -> Đáp án B.",
          audioText: "Attention all bookstore patrons. ... Professor Liam Vance has just arrived. ... The author meet-and-greet and book signing will take place in the conference auditorium on the third floor, beginning at 3:00 PM sharp. ... Seating is strictly on a first-come, first-served basis."
        },
        {
          id: "L2",
          question: "Why was the subway line temporarily suspended?",
          options: [
            { key: "A", text: "Severe electrical power failure" },
            { key: "B", text: "Scheduled track cleaning and maintenance" },
            { key: "C", text: "Heavy rain flooding the underground station" },
            { key: "D", text: "A signal communication glitch near the river tunnel" }
          ],
          correctAnswer: "D",
          explanation: "Thông báo nhà ga: 'Service on the Green Metro Line is temporarily suspended due to a signal communication glitch near the river tunnel.' -> Đáp án D.",
          audioText: "Attention passengers on Platform 2. ... Service on the Green Metro Line is temporarily suspended due to a signal communication glitch near the river tunnel. ... Technicians are actively addressing the fault. Shuttle buses are operating outside Station Gate 4."
        },
        {
          id: "L3",
          question: "How can gym members receive a twenty percent discount on personal training?",
          options: [
            { key: "A", text: "By signing up for an annual membership this weekend" },
            { key: "B", text: "By introducing two new family members" },
            { key: "C", text: "By paying in cash before 8:00 AM" },
            { key: "D", text: "By participating in the Saturday yoga workshop" }
          ],
          correctAnswer: "A",
          explanation: "Nhân viên lễ tân phòng gym thông báo: 'Members who renew or upgrade to our 12-month annual membership this weekend receive twenty percent off all personal training packages.' -> Đáp án A.",
          audioText: "Good morning fitness members! ... To celebrate our fifth anniversary, members who renew or upgrade to our 12-month annual membership this weekend receive twenty percent off all personal training packages. ... Visit our customer desk today to reserve your discount."
        },
        {
          id: "L4",
          question: "What time will the office computer network be shut down for maintenance?",
          options: [
            { key: "A", text: "At 5:00 PM today" },
            { key: "B", text: "At 8:30 PM tonight" },
            { key: "C", text: "At 11:00 PM tonight" },
            { key: "D", text: "At 6:00 AM tomorrow morning" }
          ],
          correctAnswer: "B",
          explanation: "Phòng CNTT thông báo: 'Our internal servers and database systems will be taken offline at 8:30 PM tonight for critical security updates.' -> Đáp án B.",
          audioText: "This is a reminder from the IT Support Department. ... Our internal servers and database systems will be taken offline at 8:30 PM tonight for critical security updates. ... Please save all pending documents and log off your terminals before leaving the office."
        },
        {
          id: "L5",
          question: "What is the customer looking to purchase?",
          options: [
            { key: "A", text: "A waterproof hiking jacket" },
            { key: "B", text: "A pair of lightweight leather running shoes" },
            { key: "C", text: "A thermal sleeping bag for winter camping" },
            { key: "D", text: "An aluminum mountain trekking pole" }
          ],
          correctAnswer: "A",
          explanation: "Khách hàng hỏi: 'Excuse me, I'm looking for a breathable, waterproof hiking jacket suitable for autumn rainstorms.' -> Áo khoác chống nước (A).",
          audioText: "Man: Excuse me, I'm looking for a breathable, waterproof hiking jacket suitable for autumn rainstorms. ... Do you carry size medium in navy blue?\nWoman: Yes, absolutely! ... We just received a shipment from Gore-Tex right over in our outdoor apparel section on aisle 3."
        },
        {
          id: "L6",
          question: "When should the applicant attend her job interview?",
          options: [
            { key: "A", text: "Next Monday at 9:15 AM" },
            { key: "B", text: "Next Tuesday at 10:00 AM" },
            { key: "C", text: "Next Wednesday at 2:30 PM" },
            { key: "D", text: "This Friday afternoon at 4:00 PM" }
          ],
          correctAnswer: "C",
          explanation: "Người gọi thông báo: 'We would love to invite you for an in-person interview next Wednesday at 2:30 PM at our central office.' -> Thứ Tư tuần tới lúc 2:30 PM (C).",
          audioText: "Hello Ms. Huong, this is Daniel from Human Resources at Global Media. ... We reviewed your portfolio and were thoroughly impressed. ... We would love to invite you for an in-person interview next Wednesday at 2:30 PM at our central office. ... Please reply to confirm your availability."
        },
        {
          id: "L7",
          question: "What is the weather forecast for Sunday afternoon?",
          options: [
            { key: "A", text: "Scattered thunderstorms and heavy downpours" },
            { key: "B", text: "Clear blue skies with pleasant sunshine" },
            { key: "C", text: "Dense fog and chilly winds" },
            { key: "D", text: "Continuous snowfall" }
          ],
          correctAnswer: "B",
          explanation: "Bản tin thời tiết: 'Sunday will bring clear blue skies and pleasant sunshine with mild temperatures around 24 degrees Celsius.' -> Nắng đẹp (B).",
          audioText: "And now your weekend meteorological outlook. ... While Saturday will remain cloudy with occasional morning drizzles, Sunday will bring clear blue skies and pleasant sunshine with mild temperatures around 24 degrees Celsius. ... A wonderful day for outdoor picnics."
        },
        {
          id: "L8",
          question: "What instruction does the tour guide give to visitors at the museum?",
          options: [
            { key: "A", text: "Do not use flash photography inside the historical gallery" },
            { key: "B", text: "Remain seated until the documentary film concludes" },
            { key: "C", text: "Leave all backpacks in the outdoor lockers" },
            { key: "D", text: "Wear protective plastic shoe covers" }
          ],
          correctAnswer: "A",
          explanation: "Hướng dẫn viên lưu ý: 'Please note that flash photography is strictly prohibited inside the historical gallery to protect sensitive ancient paintings.' -> Cấm chụp ảnh có đèn flash (A).",
          audioText: "Welcome to the Royal Heritage Museum. ... As we enter the ancient artifacts hall, please note that flash photography is strictly prohibited inside the historical gallery to protect sensitive ancient paintings. ... Audio guide devices are available on your left."
        }
      ]
    },

    part2: {
      title: "Part 2: 3 Đoạn Hội Thoại Đời Sống & Công Sở (12 câu)",
      instructions: "Bạn sẽ nghe 3 đoạn hội thoại. Mỗi đoạn có 4 câu hỏi. Các đoạn hội thoại chỉ nghe một lần duy nhất.",
      conversations: [
        {
          id: "C1",
          title: "Hội thoại 1: Lập kế hoạch phân bổ ngân sách du lịch (Budget Travel Planning)",
          audioTranscript: "Man: Hey Maya, I was looking over our estimated budget for the graduation backpacking trip to Da Lat next month. ... We might need to adjust our transport expenses.\nWoman: Really, Nam? ... I thought taking the overnight sleeper bus would save us hotel costs for that first night.\nMan: Well, it does save hotel fees, but round-trip sleeper bus tickets have climbed to 500,000 VND per person due to the holiday weekend. ... If we book the early morning flight on low-cost carrier Vietjet right now, it's only 650,000 VND, and we arrive in just 50 minutes instead of sitting eight hours on bumpy winding roads.\nWoman: That actually sounds like a great trade-off! Spending an extra 150,000 VND to preserve our energy is totally worthwhile. ... But where can we cut costs to balance the budget?\nMan: How about accommodation? ... Instead of booking private hotel rooms near Xuan Huong Lake, we can reserve a cozy four-bed dormitory at a friendly traveler hostel. ... It includes free morning coffee and bicycles to explore the pine hills.\nWoman: I love that idea! ... Plus, staying at a hostel gives us the chance to meet other international backpackers and exchange travel tips.\nMan: Exactly! I'll book the flight tickets this afternoon before the promotional fare expires.",
          questions: [
            {
              id: "L9",
              question: "What are Nam and Maya discussing?",
              options: [
                { key: "A", text: "Buying new trekking backpacks for an expedition" },
                { key: "B", text: "Planning transport and accommodation for a graduation trip" },
                { key: "C", text: "Applying for an overseas student scholarship" },
                { key: "D", text: "Opening a joint savings account at the bank" }
              ],
              correctAnswer: "B",
              explanation: "Nam và Maya bàn bạc việc chọn phương tiện đi lại và nơi ở cho chuyến đi tốt nghiệp tại Đà Lạt (B)."
            },
            {
              id: "L10",
              question: "Why does Nam suggest taking a flight instead of the sleeper bus?",
              options: [
                { key: "A", text: "The sleeper bus was completely sold out" },
                { key: "B", text: "The flight takes only 50 minutes and costs only slightly more" },
                { key: "C", text: "Maya suffers from extreme motion sickness on buses" },
                { key: "D", text: "The highway between cities is under construction" }
              ],
              correctAnswer: "B",
              explanation: "Nam giải thích máy bay chỉ mất 50 phút và chênh lệch có 150,000 VND so với 8 tiếng đi xe khách xóc nảy (B)."
            },
            {
              id: "L11",
              question: "How do they plan to compensate for the higher flight cost?",
              options: [
                { key: "A", text: "By skipping restaurant meals and cooking instant noodles" },
                { key: "B", text: "By staying in a cozy hostel dormitory instead of a private hotel" },
                { key: "C", text: "By shortening their trip by two full days" },
                { key: "D", text: "By asking their university for travel sponsorship" }
              ],
              correctAnswer: "B",
              explanation: "Họ quyết định bù chi phí bằng cách thuê phòng dorm ở hostel thay vì khách sạn riêng (B)."
            },
            {
              id: "L12",
              question: "What extra amenity does the chosen hostel provide?",
              options: [
                { key: "A", text: "Free laundry service and luggage storage" },
                { key: "B", text: "Free morning coffee and bicycles for sightseeing" },
                { key: "C", text: "Free airport taxi transfers" },
                { key: "D", text: "Discounted entry tickets to city museums" }
              ],
              correctAnswer: "B",
              explanation: "Nam cho biết hostel có 'free morning coffee and bicycles to explore the pine hills' (B)."
            }
          ]
        },
        {
          id: "C2",
          title: "Hội thoại 2: Chuẩn bị thuyết trình đề án khởi nghiệp (Startup Pitch Preparation)",
          audioTranscript: "Woman: Hi Brian, have you finalized our presentation slides for the Campus Innovation Challenge tomorrow?\nMan: Almost, Linh. ... I've drafted twelve slides covering market research, our eco-friendly packaging prototype, and initial revenue projections. ... But I'm concerned we might exceed our allotted eight-minute presentation limit.\nWoman: Let's do a quick timing run. ... Remember, the judging panel consists of venture capitalists, so they care much more about scalability and manufacturing costs than lengthy technical jargon.\nMan: That's a great point. ... Slide 4 has too many chemical formulas explaining our biodegradable cornstarch resin. ... I'll replace those equations with a clean comparison graphic showing decomposing times: 90 days for our container versus 400 years for traditional petroleum plastic.\nWoman: That graphic will be ten times more impactful! ... And who is handling the Q&A session at the end?\nMan: How about we split it? ... You handle questions regarding financial pricing and retail distribution, while I address questions about technical prototyping and raw material sourcing.\nWoman: Agreed. Let's practice our transitions right now so we stay synchronized under pressure.",
          questions: [
            {
              id: "L13",
              question: "What is the time limit for their presentation tomorrow?",
              options: [
                { key: "A", text: "Five minutes" },
                { key: "B", text: "Eight minutes" },
                { key: "C", text: "Twelve minutes" },
                { key: "D", text: "Fifteen minutes" }
              ],
              correctAnswer: "B",
              explanation: "Brian nhắc đến: 'our allotted eight-minute presentation limit' -> Giới hạn 8 phút (B)."
            },
            {
              id: "L14",
              question: "Who makes up the judging panel for the competition?",
              options: [
                { key: "A", text: "High school science teachers" },
                { key: "B", text: "Venture capitalists and investors" },
                { key: "C", text: "First-year university students" },
                { key: "D", text: "Government environmental inspectors" }
              ],
              correctAnswer: "B",
              explanation: "Linh lưu ý: 'the judging panel consists of venture capitalists' (B)."
            },
            {
              id: "L15",
              question: "How does Brian decide to improve Slide 4?",
              options: [
                { key: "A", text: "By adding background music" },
                { key: "B", text: "By replacing complex formulas with a clean comparison graphic of decomposing times" },
                { key: "C", text: "By removing all images completely" },
                { key: "D", text: "By reading a printed paper script verbatim" }
              ],
              correctAnswer: "B",
              explanation: "Brian thay công thức phức tạp bằng biểu đồ so sánh thời gian phân hủy (90 ngày vs 400 năm) (B)."
            },
            {
              id: "L16",
              question: "Which topic will Linh be responsible for during the Q&A session?",
              options: [
                { key: "A", text: "Chemical testing of cornstarch" },
                { key: "B", text: "Financial pricing and retail distribution" },
                { key: "C", text: "Operating the slide remote control" },
                { key: "D", text: "Designing future marketing logos" }
              ],
              correctAnswer: "B",
              explanation: "Linh phụ trách: 'questions regarding financial pricing and retail distribution' (B)."
            }
          ]
        },
        {
          id: "C3",
          title: "Hội thoại 3: Tư vấn dinh dưỡng và lối sống lành mạnh (Nutrition & Wellness Consultation)",
          audioTranscript: "Man: Good afternoon, Dr. Aris. ... Thank you for seeing me. Over the past few months, I've felt persistently fatigued during the workday, and my annual health checkup showed elevated resting cholesterol.\nWoman: Good afternoon Mr. Minh. ... Let's review your daily dietary routine. ... What does an average weekday look like for meals?\nMan: Well, I usually skip breakfast because I'm rushing for the morning train. ... For lunch, my office colleagues and I order fast-food burgers or fried chicken. ... In the evening, I cook dinner around 8:30 PM, usually red meat with white rice, followed by snacks while watching television.\nWoman: I see several immediate adjustments that will dramatically improve your energy levels. ... First, skipping breakfast forces your body into energy-saving mode, causing mid-morning lethargy. Try eating rolled oats with chia seeds and blueberries, which provides slow-burning complex carbohydrates.\nMan: That sounds simple enough to prepare the night before.\nWoman: Exactly. Second, substitute fried lunches with lean proteins like steamed salmon, tofu, or grilled chicken breast, combined with leafy greens. ... Furthermore, replace red meat three days a week with plant-based legumes like lentils or chickpeas. ... Within six weeks, your cholesterol will decrease substantially.",
          questions: [
            {
              id: "L17",
              question: "What health issues prompted Mr. Minh to consult Dr. Aris?",
              options: [
                { key: "A", text: "Persistent fatigue and elevated cholesterol" },
                { key: "B", text: "Severe back pain and muscle cramps" },
                { key: "C", text: "Chronic insomnia and coughing" },
                { key: "D", text: "Sudden weight loss and dizzy spells" }
              ],
              correctAnswer: "A",
              explanation: "Minh cho biết anh cảm thấy mệt mỏi kéo dài và mỡ máu cao ('persistently fatigued... elevated resting cholesterol') (A)."
            },
            {
              id: "L18",
              question: "What is Mr. Minh's current weekday breakfast habit?",
              options: [
                { key: "A", text: "Eating a large bowl of beef noodle soup" },
                { key: "B", text: "Drinking a vegetable smoothie" },
                { key: "C", text: "Skipping breakfast entirely due to rushing for the train" },
                { key: "D", text: "Having black coffee and sweet pastries" }
              ],
              correctAnswer: "C",
              explanation: "Minh nói: 'I usually skip breakfast because I'm rushing for the morning train' (C)."
            },
            {
              id: "L19",
              question: "What breakfast alternative does the doctor recommend?",
              options: [
                { key: "A", text: "Fried eggs with processed sausages" },
                { key: "B", text: "Rolled oats with chia seeds and blueberries" },
                { key: "C", text: "Sweetened fruit juice from concentrate" },
                { key: "D", text: "High-protein commercial milkshakes" }
              ],
              correctAnswer: "B",
              explanation: "Bác sĩ gợi ý yến mạch kèm hạt chia và quả việt quất cung cấp carbohydrate phức hợp giải phóng chậm (B)."
            },
            {
              id: "L20",
              question: "How does the doctor advise modifying dinner meals?",
              options: [
                { key: "A", text: "Eating red meat every single night" },
                { key: "B", text: "Fast completely from 5:00 PM onward" },
                { key: "C", text: "Replace red meat three days a week with plant legumes like lentils or chickpeas" },
                { key: "D", text: "Double the intake of white rice and potatoes" }
              ],
              correctAnswer: "C",
              explanation: "Bác sĩ khuyên thay thế thịt đỏ 3 ngày mỗi tuần bằng các loại đậu thực vật như đậu lăng, đậu gà (C)."
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
          title: "Bài giảng 1: Công nghệ Xe Điện & Sự Chuyển Dịch Giao Thông Đô Thị (Electric Vehicles)",
          audioTranscript: "Good morning class. ... Today we examine the global shift toward electric mobility, or e-mobility, and its profound consequences on urban planning and carbon emissions.\nHistorically, personal transportation has relied on internal combustion engines running on petroleum derivatives. ... However, transport accounts for nearly a quarter of global greenhouse gas emissions, with road vehicles contributing over seventy percent of that total.\nThe rapid rise of Electric Vehicles (EVs) over the last decade has been facilitated by three key drivers. ... First, lithium-ion battery technology has achieved exponential advancements. ... Since 2010, the cost of battery packs has fallen by nearly ninety percent, while energy density has more than tripled, effectively eliminating 'range anxiety' for average commuters.\nSecond, government policy has exerted decisive pressure. ... Major economies, including the European Union and several Asian nations, have passed binding legislation mandating that all new passenger cars sold after 2035 must be zero-emission vehicles. ... Subsidies, tax exemptions, and preferential highway lanes have accelerated consumer adoption.\nNevertheless, significant hurdles persist. ... The most critical is charging infrastructure. ... While home charging is convenient for suburban residents with private driveways, millions of apartment dwellers in high-density cities require reliable, ubiquitous public fast-charging stations. ... Furthermore, electric grids must expand renewable capacity to ensure that charging EVs does not inadvertently shift emissions back to coal-fired power plants.\nIn our next seminar, we will examine vehicle-to-grid technology, which allows parked EVs to feed power back into the municipal grid during peak demand.",
          questions: [
            {
              id: "L21",
              question: "What percentage of global transport emissions is attributed to road vehicles?",
              options: [
                { key: "A", text: "Around twenty-five percent" },
                { key: "B", text: "Around fifty percent" },
                { key: "C", text: "Over seventy percent" },
                { key: "D", text: "Nearly ninety-five percent" }
              ],
              correctAnswer: "C",
              explanation: "Giảng viên nêu: 'with road vehicles contributing over seventy percent of that total' (C)."
            },
            {
              id: "L22",
              question: "By how much has the cost of EV lithium-ion battery packs fallen since 2010?",
              options: [
                { key: "A", text: "Thirty percent" },
                { key: "B", text: "Fifty percent" },
                { key: "C", text: "Nearly ninety percent" },
                { key: "D", text: "Ninety-nine percent" }
              ],
              correctAnswer: "C",
              explanation: "Bài giảng chỉ ra: 'the cost of battery packs has fallen by nearly ninety percent' (C)."
            },
            {
              id: "L23",
              question: "What mandate have several major economies introduced for the year 2035?",
              options: [
                { key: "A", text: "All new passenger cars sold must be zero-emission vehicles" },
                { key: "B", text: "Private car ownership will be completely outlawed" },
                { key: "C", text: "Highway speed limits will be reduced by half" },
                { key: "D", text: "All fossil fuel power plants will be closed immediately" }
              ],
              correctAnswer: "A",
              explanation: "Luật quy định từ năm 2035 xe bán mới phải là phương tiện không phát thải (zero-emission vehicles) (A)."
            },
            {
              id: "L24",
              question: "Why is charging infrastructure particularly challenging for apartment dwellers in high-density cities?",
              options: [
                { key: "A", text: "They are legally banned from owning electric cars" },
                { key: "B", text: "They lack private home driveways and require ubiquitous public fast chargers" },
                { key: "C", text: "Electric vehicles cannot climb parking garage ramps" },
                { key: "D", text: "Apartment electricity meters cannot measure battery voltage" }
              ],
              correctAnswer: "B",
              explanation: "Cư dân chung cư không có sân riêng để sạc qua đêm nên cần các trạm sạc nhanh công cộng phủ khắp nơi (B)."
            },
            {
              id: "L25",
              question: "What is 'vehicle-to-grid' technology mentioned at the end of the lecture?",
              options: [
                { key: "A", text: "Cars transforming into automated trains on highways" },
                { key: "B", text: "Parked EVs feeding electrical power back into the city grid during peak demand" },
                { key: "C", text: "Recycling car tires to build asphalt road surfaces" },
                { key: "D", text: "Using satellite radar to guide driverless taxis" }
              ],
              correctAnswer: "B",
              explanation: "Công nghệ V2G cho phép xe điện xả điện ngược lại vào lưới điện thành phố trong giờ cao điểm (B)."
            }
          ]
        },
        {
          id: "T2",
          title: "Bài giảng 2: Trí Tuệ Nhân Tạo & Cách Mạng Y Tế Chính Xác (AI in Precision Healthcare)",
          audioTranscript: "Good afternoon students. ... In today's biomedical engineering lecture, we explore the integration of Artificial Intelligence in diagnostic medicine and drug discovery.\nHistorically, medical diagnoses relied solely on human physician experience, visual inspection of medical images, and population-average treatment protocols. ... However, human fatigue and perceptual bias can lead to diagnostic errors, particularly in complex radiology scans.\nToday, deep learning convolutional neural networks are revolutionizing medical imaging. ... Trained on millions of anonymized radiological datasets, AI algorithms can identify malignant tumors in mammograms and chest CT scans with an accuracy rate exceeding ninety-five percent, frequently detecting micro-calcifications months before they become visible to human eyes.\nFurthermore, AI is transforming the field of pharmaceutical drug discovery. ... Traditionally, identifying a promising new drug candidate required an average of ten to twelve years and over two billion dollars in trial-and-error laboratory experiments. ... Today, generative AI platforms like AlphaFold can predict the 3D molecular structures of over two hundred million proteins in minutes, shortening initial drug design timelines from years to merely weeks.\nNevertheless, medical ethicists highlight critical considerations: ... AI systems must be validated on diverse global demographic datasets to prevent algorithmic bias, and clinical decisions must always remain under human physician supervision. ... AI is designed to augment human medical expertise, not replace it.",
          questions: [
            {
              id: "L26",
              question: "What limitation of traditional medical diagnosis is highlighted in the lecture?",
              options: [
                { key: "A", text: "Doctors refusing to use digital computers" },
                { key: "B", text: "Human fatigue and perceptual bias leading to diagnostic errors" },
                { key: "C", text: "High cost of paper medical record folders" },
                { key: "D", text: "The complete absence of medical universities" }
              ],
              correctAnswer: "B",
              explanation: "Bài giảng nêu: 'human fatigue and perceptual bias can lead to diagnostic errors' (B)."
            },
            {
              id: "L27",
              question: "What accuracy rate can AI algorithms achieve in identifying malignant tumors on medical scans?",
              options: [
                { key: "A", text: "Around sixty percent" },
                { key: "B", text: "Around seventy-five percent" },
                { key: "C", text: "Exceeding ninety-five percent" },
                { key: "D", text: "Exactly one hundred percent with zero errors" }
              ],
              correctAnswer: "C",
              explanation: "AI đạt độ chính xác trên 95% ('exceeding ninety-five percent') (C)."
            },
            {
              id: "L28",
              question: "Traditionally, how long did it take to identify a promising drug candidate?",
              options: [
                { key: "A", text: "One to two years" },
                { key: "B", text: "Three to five years" },
                { key: "C", text: "Ten to twelve years" },
                { key: "D", text: "Over twenty-five years" }
              ],
              correctAnswer: "C",
              explanation: "Phương pháp thử nghiệm truyền thống mất trung bình 10 đến 12 năm ('ten to twelve years') (C)."
            },
            {
              id: "L29",
              question: "How has generative AI like AlphaFold accelerated drug discovery?",
              options: [
                { key: "A", text: "By replacing human clinical trials with virtual simulations" },
                { key: "B", text: "By predicting the 3D molecular structures of millions of proteins in minutes" },
                { key: "C", text: "By lowering pharmacy retail drug prices by half" },
                { key: "D", text: "By manufacturing chemical pills directly in hospital rooms" }
              ],
              correctAnswer: "B",
              explanation: "AlphaFold dự đoán cấu trúc 3D của hơn 200 triệu protein trong vài phút (B)."
            },
            {
              id: "L30",
              question: "What is the ultimate consensus of medical ethicists regarding AI in healthcare?",
              options: [
                { key: "A", text: "AI should replace human doctors entirely by 2030" },
                { key: "B", text: "AI should augment human medical expertise, with final clinical decisions supervised by physicians" },
                { key: "C", text: "AI should only be used in cosmetic dermatology" },
                { key: "D", text: "AI algorithms should never be trained on human patient data" }
              ],
              correctAnswer: "B",
              explanation: "Kết luận đạo đức y khoa: AI ra đời để bổ trợ chuyên môn của bác sĩ chứ không thay thế hoàn toàn bác sĩ (B)."
            }
          ]
        },
        {
          id: "T3",
          title: "Bài giảng 3: Tâm Lý Học Giáo Dục & Tư Duy Phát Triển (Growth Mindset in Learning)",
          audioTranscript: "Good morning students. ... Today we investigate a landmark concept in educational psychology pioneered by Stanford psychologist Dr. Carol Dweck: the distinction between a Fixed Mindset and a Growth Mindset.\nFor decades, conventional wisdom assumed that human intellectual ability and academic talent were innate traits, fixed at birth by genetic predisposition. ... According to this 'Fixed Mindset' perspective, failure in an examination is perceived as proof of permanent personal inadequacy, leading learners to avoid challenges and give up easily.\nConversely, individuals who cultivate a 'Growth Mindset' view intellect not as a static statue, but as a dynamic muscle that strengthens through disciplined effort, effective strategy, and resilience. ... Neurobiological research on neuroplasticity validates this view: ... whenever a student struggles through a challenging math problem or learns a complex language, neurons form new synaptic connections, physically enhancing brain capacity.\nIn educational environments, mindset orientation dramatically influences student outcomes. ... Studies demonstrate that when educators praise effort and process—such as 'You worked diligently on this essay structure'—rather than innate intelligence like 'You are so naturally brilliant', students develop greater perseverance and achieve significantly higher standardized test scores.\nTo develop a growth mindset, psychologists recommend a simple cognitive technique: the power of 'YET'. ... When you feel stuck, replace 'I can't master this grammar rule' with 'I haven't mastered this grammar rule YET'. ... That simple word acknowledges that mastery is an ongoing journey of practice.",
          questions: [
            {
              id: "L31",
              question: "What does the 'Fixed Mindset' assume about human intelligence?",
              options: [
                { key: "A", text: "That intelligence is an innate trait, fixed at birth by genetics" },
                { key: "B", text: "That anyone can become an expert with five minutes of practice" },
                { key: "C", text: "That intelligence depends entirely on family financial wealth" },
                { key: "D", text: "That intelligence changes according to body weight" }
              ],
              correctAnswer: "A",
              explanation: "Tư duy cố định coi trí thông minh là bẩm sinh, cố định từ khi sinh ra ('innate trait, fixed at birth') (A)."
            },
            {
              id: "L32",
              question: "How do individuals with a 'Growth Mindset' view their intellect?",
              options: [
                { key: "A", text: "As a static statue that never changes" },
                { key: "B", text: "As a dynamic muscle that strengthens through effort and strategy" },
                { key: "C", text: "As something only measurable by high school report cards" },
                { key: "D", text: "As a temporary skill that declines after age twenty" }
              ],
              correctAnswer: "B",
              explanation: "Tư duy phát triển coi trí tuệ như cơ bắp linh hoạt phát triển nhờ nỗ lực và phương pháp (B)."
            },
            {
              id: "L33",
              question: "What does neuroplasticity demonstrate about the human brain?",
              options: [
                { key: "A", text: "Brain cells die permanently whenever we make mistakes" },
                { key: "B", text: "Neurons form new synaptic connections when struggling through challenging problems" },
                { key: "C", text: "The human brain stops learning completely after adolescence" },
                { key: "D", text: "Brain size is directly proportional to body height" }
              ],
              correctAnswer: "B",
              explanation: "Khả năng uốn nắn của não bộ: nơ-ron tạo liên kết synap mới khi đối mặt và vượt qua thử thách khó (B)."
            },
            {
              id: "L34",
              question: "What type of praise from teachers fosters student resilience?",
              options: [
                { key: "A", text: "Praising innate intelligence, like 'You are naturally gifted'" },
                { key: "B", text: "Praising effort, perseverance, and learning process" },
                { key: "C", text: "Praising expensive school uniforms" },
                { key: "D", text: "Giving cash rewards for every correct answer" }
              ],
              correctAnswer: "B",
              explanation: "Khen ngợi nỗ lực và quá trình ('praise effort and process') giúp học sinh kiên trì hơn (B)."
            },
            {
              id: "L35",
              question: "What cognitive technique does the lecturer suggest using the word 'YET'?",
              options: [
                { key: "A", text: "To delay studying until the last day before the test" },
                { key: "B", text: "To reframe difficulty as an ongoing journey of learning and improvement" },
                { key: "C", text: "To cancel difficult homework assignments" },
                { key: "D", text: "To refuse teacher feedback" }
              ],
              correctAnswer: "B",
              explanation: "Sức mạnh của từ 'CHƯA' (YET) giúp tái định hình thử thách thành hành trình học tập liên tục (B)."
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
        title: "Passage 1: Electric Vehicles & The Revolution in Urban Mobility",
        wordCount: 465,
        genre: "Khoa học & Đô thị",
        text: `The worldwide acceleration toward electric vehicles (EVs) is transforming more than just the automotive manufacturing sector; it is fundamentally rewriting the paradigms of municipal infrastructure, energy distribution, and public health. For over a century, urban transportation has been dominated by internal combustion engines. While petroleum-powered vehicles provided personal mobility and economic dynamism, their exhaust emissions have blanketed metropolitan areas in toxic fine particulate matter (PM2.5), nitrogen oxides, and greenhouse gases that contribute to severe respiratory illnesses and accelerating climate warming.

The primary technological breakthrough driving this transition has occurred in energy storage chemistry. Lithium-ion battery packs, once restricted by heavy weight and prohibitive expense, have undergone revolutionary design iterations. Over the last decade, battery costs dropped by nearly ninety percent, while volumetric energy density expanded dramatically. Modern mid-priced commercial EVs now boast driving ranges exceeding four hundred kilometers on a single charge, effectively dismantling the psychological barrier of 'range anxiety' among prospective purchasers. Furthermore, the advent of ultra-fast direct-current (DC) charging stations capable of replenishing battery reserves to eighty percent within twenty minutes has made long-distance highway travel feasible.

However, the rapid influx of millions of electric cars presents significant infrastructural complications for municipal power grids. Traditional electrical distribution substations in residential neighborhoods were designed to deliver steady, predictable loads for household appliances, lighting, and air conditioning. If thousands of homeowners connect high-powered 7-kilowatt home chargers simultaneously at 6:00 PM upon returning from work, local transformers risk severe overloading. To mitigate this hazard, power utilities are pioneering 'smart charging' ecosystems that automatically throttle charging rates during peak demand hours and shift replenishment to overnight troughs when excess wind power is abundant.`,
        questions: [
          {
            id: "R1",
            question: "What is the primary topic of the passage?",
            options: [
              { key: "A", text: "The historical invention of the steam locomotive" },
              { key: "B", text: "The environmental, battery, and grid aspects of electric vehicle adoption" },
              { key: "C", text: "Methods for drilling deep offshore petroleum wells" },
              { key: "D", text: "The chemistry of manufacturing rubber bicycle tires" }
            ],
            correctAnswer: "B",
            explanation: "Bài đọc phân tích toàn diện về xe điện từ góc độ môi trường, pin và lưới điện (B)."
          },
          {
            id: "R2",
            question: "According to Paragraph 1, what negative impact is associated with petroleum vehicles?",
            options: [
              { key: "A", text: "They cause severe noise pollution only in rural valleys" },
              { key: "B", text: "Their exhaust emissions produce toxic particulate matter and respiratory illnesses" },
              { key: "C", text: "They require zero maintenance from mechanics" },
              { key: "D", text: "They completely eliminate traffic jams" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 1 nêu: 'exhaust emissions have blanketed metropolitan areas in toxic fine particulate matter... severe respiratory illnesses' (B)."
          },
          {
            id: "R3",
            question: "By how much have lithium-ion battery costs fallen over the past decade?",
            options: [
              { key: "A", text: "Twenty-five percent" },
              { key: "B", text: "Forty percent" },
              { key: "C", text: "Nearly ninety percent" },
              { key: "D", text: "Over ninety-nine percent" }
            ],
            correctAnswer: "C",
            explanation: "Đoạn 2 nêu rõ: 'battery costs dropped by nearly ninety percent' (C)."
          },
          {
            id: "R4",
            question: "What is 'range anxiety' as described in Paragraph 2?",
            options: [
              { key: "A", text: "Fear of driving on mountain bridges" },
              { key: "B", text: "Psychological concern that an EV will run out of battery before reaching a charger" },
              { key: "C", text: "Anxiety about driving at high speeds on highways" },
              { key: "D", text: "Fear of getting lost without GPS navigation" }
            ],
            correctAnswer: "B",
            explanation: "Nỗi lo về phạm vi di chuyển (range anxiety) là nỗi sợ hết pin giữa đường (B)."
          },
          {
            id: "R5",
            question: "How fast can ultra-fast direct-current (DC) chargers replenish battery capacity?",
            options: [
              { key: "A", text: "Up to eighty percent within twenty minutes" },
              { key: "B", text: "Ten percent in twelve hours" },
              { key: "C", text: "Fifty percent in four days" },
              { key: "D", text: "One hundred percent in two seconds" }
            ],
            correctAnswer: "A",
            explanation: "Đoạn 2 nêu: 'capable of replenishing battery reserves to eighty percent within twenty minutes' (A)."
          },
          {
            id: "R6",
            question: "Why do residential electrical transformers risk overloading from EVs?",
            options: [
              { key: "A", text: "Because EV chargers catch fire spontaneously" },
              { key: "B", text: "Because thousands of homeowners may plug in high-powered chargers simultaneously at peak hours" },
              { key: "C", text: "Because electric cars drain water from home pipes" },
              { key: "D", text: "Because transformers are built from outdated wood materials" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 3 giải thích: việc hàng nghìn người cùng cắm sạc công suất cao vào 6 giờ tối gây quá tải (B)."
          },
          {
            id: "R7",
            question: "The word 'mitigate' in Paragraph 3 is closest in meaning to:",
            options: [
              { key: "A", text: "Intensify or worsen" },
              { key: "B", text: "Alleviate, reduce, or lessen" },
              { key: "C", text: "Ignore completely" },
              { key: "D", text: "Officially celebrate" }
            ],
            correctAnswer: "B",
            explanation: "Mitigate có nghĩa là làm giảm thiểu, giảm nhẹ nguy cơ (alleviate, lessen) (B)."
          },
          {
            id: "R8",
            question: "How does 'smart charging' solve grid congestion?",
            options: [
              { key: "A", text: "By banning EVs from charging at all times" },
              { key: "B", text: "By shifting charging to overnight troughs when excess renewable energy is available" },
              { key: "C", text: "By requiring drivers to manually disconnect their batteries" },
              { key: "D", text: "By tripling electricity prices during the night" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 3 nêu: 'shift replenishment to overnight troughs when excess wind power is abundant' (B)."
          },
          {
            id: "R9",
            question: "It can be inferred from the passage that modern electric cars:",
            options: [
              { key: "A", text: "Have driving ranges suitable for typical daily commutes" },
              { key: "B", text: "Produce far more carbon exhaust than diesel trucks" },
              { key: "C", text: "Can only be operated on sunny days" },
              { key: "D", text: "Are universally rejected by city planners" }
            ],
            correctAnswer: "A",
            explanation: "Xe hiện đại đi được hơn 400km sau một lần sạc, hoàn toàn đáp ứng nhu cầu đi lại hàng ngày (A)."
          },
          {
            id: "R10",
            question: "What is the author's primary attitude toward the electrification of transport?",
            options: [
              { key: "A", text: "Pessimistic and hostile" },
              { key: "B", text: "Objective and constructively optimistic about solutions" },
              { key: "C", text: "Completely indifferent" },
              { key: "D", text: "Skeptical of all technological advancements" }
            ],
            correctAnswer: "B",
            explanation: "Tác giả nêu rõ lợi ích môi trường, sự phát triển pin, thách thức lưới điện và giải pháp sạc thông minh -> Khách quan và tích cực (B)."
          }
        ]
      },
      {
        id: "P2",
        title: "Passage 2: Artificial Intelligence in Modern Healthcare",
        wordCount: 470,
        genre: "Y học & Công nghệ",
        text: `Artificial Intelligence (AI) has emerged as an unprecedented catalyst in healthcare, reshaping medical diagnostics, clinical workflows, and pharmacology. In historical medical practice, physicians relied upon manual interpretation of radiological films, personal clinical experience, and broad demographic population averages to determine therapeutic regimens. While human empathy and judgment remain irreplaceable, human cognitive capacity has physiological limits: fatigue, sensory distraction, and subtle visual ambiguities can lead to missed anomalies in radiological scans.

Today, advanced machine learning architectures, specifically convolutional neural networks (CNNs), are demonstrating diagnostic precision comparable—and frequently superior—to experienced radiologists. Trained on massive, curated image repositories encompassing millions of anonymized computed tomography (CT) scans, magnetic resonance imaging (MRI) studies, and histopathological biopsies, these algorithms excel at pattern recognition. In oncology, AI algorithms can pinpoint early-stage pulmonary nodules and subtle breast micro-calcifications long before they manifest as clinically obvious masses, dramatically elevating patient survival rates through early intervention.

Beyond diagnostic imaging, AI is accelerating pharmaceutical drug development. Developing a novel therapeutic molecule conventionally required up to twelve years of painstaking laboratory experimentation and cost billions of dollars, with over ninety percent of candidate compounds failing clinical trials. Modern deep-learning predictive models can rapidly simulate molecular interactions, forecast binding affinities, and synthesize bespoke protein structures in a fraction of that timeframe.

Nonetheless, deploying algorithmic intelligence in clinical settings invokes profound ethical and regulatory dilemmas. Chief among these is algorithmic bias: if an AI system is trained predominantly on patient data from high-income urban populations, its diagnostic reliability may degrade when applied to underrepresented demographic groups. Furthermore, the 'black box' opacity of complex neural networks makes it difficult for physicians to ascertain the precise causal reasoning behind an algorithmic recommendation. Thus, regulatory agencies emphasize that AI must function as an assistive tool to augment, rather than supplant, human clinical decision-making.`,
        questions: [
          {
            id: "R11",
            question: "What is the main topic of Passage 2?",
            options: [
              { key: "A", text: "The history of hospital architecture in ancient Greece" },
              { key: "B", text: "The applications, benefits, and ethical challenges of AI in healthcare" },
              { key: "C", text: "The financial costs of manufacturing surgical bandages" },
              { key: "D", text: "Techniques for training human surgeons in operating rooms" }
            ],
            correctAnswer: "B",
            explanation: "Toàn bài phân tích ứng dụng của AI trong chẩn đoán y khoa, phát triển thuốc và các thách thức đạo đức (B)."
          },
          {
            id: "R12",
            question: "Which type of machine learning architecture is specifically highlighted for medical imaging?",
            options: [
              { key: "A", text: "Simple spreadsheet calculators" },
              { key: "B", text: "Convolutional neural networks (CNNs)" },
              { key: "C", text: "Basic mechanical word processors" },
              { key: "D", text: "Manual statistical surveys" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 2 nêu rõ: 'specifically convolutional neural networks (CNNs), are demonstrating diagnostic precision...' (B)."
          },
          {
            id: "R13",
            question: "How does AI enhance patient survival rates in oncology?",
            options: [
              { key: "A", text: "By replacing all human oncologists with robotic arms" },
              { key: "B", text: "By pinpointing early-stage nodules and micro-calcifications for early intervention" },
              { key: "C", text: "By eliminating all chemical medicines" },
              { key: "D", text: "By encouraging patients to avoid hospital checkups" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 2 nêu: 'pinpoint early-stage pulmonary nodules and subtle breast micro-calcifications long before they manifest... elevating patient survival rates' (B)."
          },
          {
            id: "R14",
            question: "Historically, what percentage of candidate pharmaceutical compounds failed clinical trials?",
            options: [
              { key: "A", text: "Less than ten percent" },
              { key: "B", text: "Approximately thirty percent" },
              { key: "C", text: "Over ninety percent" },
              { key: "D", text: "One hundred percent without exception" }
            ],
            correctAnswer: "C",
            explanation: "Đoạn 3 chỉ ra: 'with over ninety percent of candidate compounds failing clinical trials' (C)."
          },
          {
            id: "R15",
            question: "How does AI transform the pharmaceutical drug development process?",
            options: [
              { key: "A", text: "By simulating molecular interactions and predicting binding affinities rapidly" },
              { key: "B", text: "By doubling the legal duration of clinical testing" },
              { key: "C", text: "By banning computer databases from laboratories" },
              { key: "D", text: "By relying purely on random guesswork" }
            ],
            correctAnswer: "A",
            explanation: "Đoạn 3 nêu: 'simulate molecular interactions, forecast binding affinities, and synthesize bespoke protein structures' (A)."
          },
          {
            id: "R16",
            question: "What is 'algorithmic bias' as explained in Paragraph 4?",
            options: [
              { key: "A", text: "Computers refusing to turn on in cold weather" },
              { key: "B", text: "Degraded diagnostic reliability for underrepresented groups due to skewed training data" },
              { key: "C", text: "AI systems demanding higher electricity supplies" },
              { key: "D", text: "Software programs crashing during power cuts" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 4 giải thích: nếu dữ liệu huấn luyện thiên lệch về một nhóm dân số thì độ chính xác sẽ sụt giảm đối với các nhóm dân số khác (B)."
          },
          {
            id: "R17",
            question: "What does the term 'black box opacity' refer to in medical AI?",
            options: [
              { key: "A", text: "The physical color of computer monitors" },
              { key: "B", text: "The difficulty of understanding the causal reasoning behind complex neural network outputs" },
              { key: "C", text: "A locked container used to store radiological X-ray film" },
              { key: "D", text: "An electrical backup battery for ultrasound machines" }
            ],
            correctAnswer: "B",
            explanation: "Hộp đen (black box) là việc khó giải thích được chuỗi lập luận nguyên nhân - kết quả bên trong mạng nơ-ron (B)."
          },
          {
            id: "R18",
            question: "The word 'supplant' in the final sentence is closest in meaning to:",
            options: [
              { key: "A", text: "Replace, displace, or take over from" },
              { key: "B", text: "Praise enthusiastically" },
              { key: "C", text: "Finance generously" },
              { key: "D", text: "Teach patiently" }
            ],
            correctAnswer: "A",
            explanation: "Supplant có nghĩa là thay thế hoàn toàn, chiếm chỗ của (replace, displace) (A)."
          },
          {
            id: "R19",
            question: "Which of the following would the author most likely support?",
            options: [
              { key: "A", text: "Handing complete diagnostic authority to AI algorithms without human oversight" },
              { key: "B", text: "Utilizing AI as an assistive diagnostic partner supervised by medical professionals" },
              { key: "C", text: "Banning all digital technology from modern medical clinics" },
              { key: "D", text: "Restricting AI research exclusively to veterinary medicine" }
            ],
            correctAnswer: "B",
            explanation: "Tác giả ủng hộ việc coi AI là công cụ hỗ trợ dưới sự giám sát của bác sĩ (B)."
          },
          {
            id: "R20",
            question: "What is the tone of the author throughout the passage?",
            options: [
              { key: "A", text: "Emotional and alarmist" },
              { key: "B", text: "Informative, analytical, and judicious" },
              { key: "C", text: "Sarcastic and disdainful" },
              { key: "D", text: "Careless and dismissive" }
            ],
            correctAnswer: "B",
            explanation: "Giọng văn cung cấp thông tin, phân tích rõ ràng hai mặt cơ hội và thách thức (B)."
          }
        ]
      },
      {
        id: "P3",
        title: "Passage 3: Deep Sea Biology & The Mysteries of Oceanic Trenches",
        wordCount: 480,
        genre: "Sinh học Biển & Thám hiểm",
        text: `For centuries, the deepest oceanic abysses were assumed to be desolate, biological wastelands. Beneath the photic zone—the upper two hundred meters of seawater penetrated by sunlight—temperatures plummet to near freezing, ambient hydrostatic pressure reaches crushing magnitudes exceeding one thousand atmospheres, and perpetual blackness reigns. Yet, modern oceanographic expeditions utilizing autonomous submersibles and robotic landers have revealed that the hadal zone, which extends into trenches deeper than six thousand meters, teems with highly adapted, resilient biological life.

Life in the oceanic trenches has evolved astonishing biochemical adaptations to survive conditions that would instantly rupture surface organisms. At depths exceeding eight thousand meters, such as the Mariana Trench in the western Pacific, extreme hydrostatic pressure exerts destructive forces on cell membranes and denatures proteins. Deep-sea organisms counter this threat through high cellular concentrations of trimethylamine N-oxide (TMAO), an organic compound that binds water molecules tightly, stabilizing protein structures against pressure-induced distortion. Furthermore, creatures like the hadal snailfish feature pliable, uncalcified cartilage skeletons and translucent skin that withstand immense physical forces without fracturing.

In the complete absence of solar illumination, deep-sea ecosystems decouple from photosynthetic energy chains. Instead, they rely on two primary nutritional vectors: marine snow and chemosynthesis. Marine snow comprises a continuous downward drift of organic particulate matter from upper surface waters—including dead plankton, fecal matter, and decomposed tissue. More dramatically, deep-sea hydrothermal vents and methane cold seeps discharge superheated mineral-rich fluids. Specialized chemotrophic bacteria oxidize hydrogen sulfide and methane, converting inorganic chemical compounds into nourishing organic biomass, forming the foundation of food webs that support giant tube worms, vent shrimp, and deep-sea clams.

Beyond pure biological curiosity, studying hadal ecology yields critical scientific applications. Enzymes extracted from deep-sea piezophilic bacteria remain stable under extreme pressure and heat, offering breakthroughs for industrial biotechnology and molecular biology testing. However, even these remote abysses are no longer insulated from anthropogenic degradation; recent sample retrievals from the Mariana Trench identified synthetic microplastic fibers inside the digestive tracts of hadal crustaceans, underscoring the universal footprint of human contamination.`,
        questions: [
          {
            id: "R21",
            question: "What historical misconception about deep-sea trenches is refuted in the passage?",
            options: [
              { key: "A", text: "That they were filled with boiling volcanic lava" },
              { key: "B", text: "That they were completely desolate, lifeless biological wastelands" },
              { key: "C", text: "That they were warmer than tropical surface waters" },
              { key: "D", text: "That they contained massive freshwater reserves" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 1 nêu: trước đây người ta lầm tưởng đáy biển sâu là nơi hoàn toàn hoang vu không có sự sống (B)."
          },
          {
            id: "R22",
            question: "What is the 'hadal zone' defined as in the passage?",
            options: [
              { key: "A", text: "The sunny surface layer where coral reefs grow" },
              { key: "B", text: "Oceanic trenches extending deeper than six thousand meters" },
              { key: "C", text: "Freshwater coastal mangrove swamps" },
              { key: "D", text: "The atmosphere directly above ocean waves" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 1 định nghĩa hadal zone là vùng rãnh đại dương sâu hơn 6,000 mét (B)."
          },
          {
            id: "R23",
            question: "What biological role does the compound TMAO play in deep-sea creatures?",
            options: [
              { key: "A", text: "It generates bright fluorescent light to attract mates" },
              { key: "B", text: "It stabilizes protein structures against crushing hydrostatic pressure" },
              { key: "C", text: "It poisons approaching predatory sharks" },
              { key: "D", text: "It produces oxygen from dissolved salt" }
            ],
            correctAnswer: "B",
            explanation: "Hợp chất TMAO giúp bảo vệ cấu trúc protein không bị biến tính dưới áp suất nghìn atmosphere (B)."
          },
          {
            id: "R24",
            question: "How has the hadal snailfish physically adapted to deep trench pressure?",
            options: [
              { key: "A", text: "By developing thick steel-like bone armor" },
              { key: "B", text: "By possessing pliable cartilage skeletons and translucent skin" },
              { key: "C", text: "By holding its breath for several weeks" },
              { key: "D", text: "By flying above water during nighttime hours" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 2 nêu: cá hadal snailfish có khung xương sụn dẻo dai không vôi hóa và da trong suốt (B)."
          },
          {
            id: "R25",
            question: "What constitutes 'marine snow' as described in Paragraph 3?",
            options: [
              { key: "A", text: "Frozen ice crystals falling from polar glaciers" },
              { key: "B", text: "Downward drift of organic particles, dead plankton, and decomposed tissue" },
              { key: "C", text: "White sand blown from tropical desert dunes" },
              { key: "D", text: "Volcanic ash drifting through air" }
            ],
            correctAnswer: "B",
            explanation: "Tuyết biển là dòng vụn hữu cơ, xác sinh vật phù du phân hủy rơi chầm chậm từ tầng nước mặt (B)."
          },
          {
            id: "R26",
            question: "How do chemotrophic bacteria generate organic biomass at hydrothermal vents?",
            options: [
              { key: "A", text: "By absorbing green light from surface stars" },
              { key: "B", text: "By oxidizing hydrogen sulfide and methane from mineral-rich fluids" },
              { key: "C", text: "By hunting deep-sea crabs and fish" },
              { key: "D", text: "By dissolving plastic garbage" }
            ],
            correctAnswer: "B",
            explanation: "Vi khuẩn hóa dưỡng oxy hóa hydro sunfua và metan để tạo sinh khối hữu cơ nuôi dưỡng chuỗi thức ăn (B)."
          },
          {
            id: "R27",
            question: "The word 'pliable' in Paragraph 2 is closest in meaning to:",
            options: [
              { key: "A", text: "Flexible, supple, and easily bent" },
              { key: "B", text: "Extremely rigid and brittle" },
              { key: "C", text: "Deeply rusted" },
              { key: "D", text: "Heavily magnetized" }
            ],
            correctAnswer: "A",
            explanation: "Pliable có nghĩa là mềm dẻo, linh hoạt (flexible, supple) (A)."
          },
          {
            id: "R28",
            question: "What practical scientific benefit is derived from studying deep-sea bacteria?",
            options: [
              { key: "A", text: "Designing solar panels for desert space satellites" },
              { key: "B", text: "Extracting pressure- and heat-stable enzymes for biotechnology" },
              { key: "C", text: "Producing commercial drinking water from volcanic rocks" },
              { key: "D", text: "Breeding deep-sea fish for freshwater aquariums" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 4 nêu: chiết xuất enzyme chịu nhiệt và chịu áp suất cao phục vụ công nghệ sinh học (B)."
          },
          {
            id: "R29",
            question: "What alarming discovery was made in crustaceans retrieved from the Mariana Trench?",
            options: [
              { key: "A", text: "They were contaminated with radioactive uranium" },
              { key: "B", text: "They contained synthetic microplastic fibers in their digestive tracts" },
              { key: "C", text: "They had evolved eyes to look at humans" },
              { key: "D", text: "They had completely lost their ability to swim" }
            ],
            correctAnswer: "B",
            explanation: "Phát hiện sợi vi nhựa nhân tạo trong ruột của loài giáp xác ở rãnh Mariana sâu thẳm (B)."
          },
          {
            id: "R30",
            question: "What conclusion does the author draw at the end of the passage?",
            options: [
              { key: "A", text: "Ocean exploration should cease because it is too expensive" },
              { key: "B", text: "Human contamination has reached even the most remote oceanic depths" },
              { key: "C", text: "Deep trenches are entirely immune to climate change" },
              { key: "D", text: "Hadal snailfish will soon migrate to freshwater rivers" }
            ],
            correctAnswer: "B",
            explanation: "Tác giả kết luận dấu chân ô nhiễm của con người đã lan tới cả những vực thẳm sâu nhất trên trái đất (B)."
          }
        ]
      },
      {
        id: "P4",
        title: "Passage 4: Educational Psychology & The Power of Mindset",
        wordCount: 475,
        genre: "Tâm lý học & Giáo dục",
        text: `The paradigm through which students perceive their own intellectual abilities fundamentally shapes their academic trajectory, resilience against failure, and lifelong capacity for skill acquisition. For generations, traditional educational philosophy operated on the implicit assumption that academic aptitude was predominantly hardwired—an immutable cognitive ceiling determined at birth. However, groundbreaking empirical research led by cognitive psychologist Dr. Carol Dweck at Stanford University has demolished this fatalistic paradigm, categorizing cognitive orientations into two diametrically opposed frameworks: the Fixed Mindset and the Growth Mindset.

Students embodying a Fixed Mindset believe that intelligence, artistic creativity, and analytical talent are static gifts. Consequently, these learners harbor an omnipresent urge to validate their perceived brilliance while avoiding situations that might expose deficiency. When confronted with complex academic obstacles or disappointing examination scores, fixed-mindset learners interpret setback as definitive evidence of personal incompetence. They tend to disengage from challenging subjects, conceal errors, and view required effort as an embarrassing signal of low natural talent.

Conversely, learners who cultivate a Growth Mindset conceptualize intellect as a dynamic capacity capable of expansion through deliberate effort, effective pedagogical strategies, and persistence. Rather than viewing setbacks as final verdicts, growth-mindset individuals perceive academic challenges as essential friction necessary for neural development. This perspective is solidly corroborated by contemporary neuroscience. Brain plasticity, or neuroplasticity, reveals that when individuals grapple with cognitively demanding tasks, neurons fire across synapses, synthesizing new neural pathways and myelinating circuits that physically enhance computational and analytical proficiency.

Crucially, educational psychologists emphasize that pedagogical phrasing and parental feedback play a decisive role in cultivating these mindsets. When educators praise innate genius—such as 'You received an A because you are a natural genius'—they inadvertently push students toward a fragile fixed mindset. In contrast, praising the operational process—such as 'Your essay shows meticulous revision and thoughtful organization'—reinforces the causal relationship between disciplined labor and intellectual progress. Embracing the perspective that mastery is malleable empowers learners to navigate academic friction with sustained resilience.`,
        questions: [
          {
            id: "R31",
            question: "What traditional educational assumption is challenged by Dr. Carol Dweck's research?",
            options: [
              { key: "A", text: "That schools should teach computer programming to kindergarteners" },
              { key: "B", text: "That intellectual aptitude is an immutable, genetically hardwired trait" },
              { key: "C", text: "That physical exercise has no relation to mental health" },
              { key: "D", text: "That homework assignments should be abolished completely" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 1 nêu: nghiên cứu bác bỏ định kiến cũ rằng trí thông minh là thứ cố định bất biến do gen quy định (B)."
          },
          {
            id: "R32",
            question: "How do students with a Fixed Mindset interpret academic failure?",
            options: [
              { key: "A", text: "As an exciting opportunity to learn new skills" },
              { key: "B", text: "As definitive proof of their permanent personal incompetence" },
              { key: "C", text: "As a reason to change study techniques" },
              { key: "D", text: "As a simple computer grading error" }
            ],
            correctAnswer: "B",
            explanation: "Người mang tư duy cố định coi thất bại là bằng chứng cho sự kém cỏi vĩnh viễn của bản thân (B)."
          },
          {
            id: "R33",
            question: "Why do fixed-mindset learners often view required effort negatively?",
            options: [
              { key: "A", text: "Because effort is financially expensive" },
              { key: "B", text: "Because they perceive effort as an embarrassing signal of low natural talent" },
              { key: "C", text: "Because teachers strictly forbid studying after school" },
              { key: "D", text: "Because textbooks are too heavy to carry" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 2 nêu: 'view required effort as an embarrassing signal of low natural talent' (B)."
          },
          {
            id: "R34",
            question: "What is the core belief of a Growth Mindset?",
            options: [
              { key: "A", text: "Intellect can expand through deliberate effort, strategy, and persistence" },
              { key: "B", text: "No one needs to study if they believe in themselves" },
              { key: "C", text: "Grades on standardized exams are the only thing that matters in life" },
              { key: "D", text: "Natural genius cannot be surpassed under any circumstances" }
            ],
            correctAnswer: "A",
            explanation: "Đoạn 3 nêu rõ: 'intellect as a dynamic capacity capable of expansion through deliberate effort, effective pedagogical strategies, and persistence' (A)."
          },
          {
            id: "R35",
            question: "What biological process supports the reality of the Growth Mindset?",
            options: [
              { key: "A", text: "Blood cell cloning" },
              { key: "B", text: "Neuroplasticity: the brain forming and myelinating new neural circuits through effort" },
              { key: "C", text: "Muscle tissue decomposition" },
              { key: "D", text: "Skin cell pigmentation" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 3 giải thích cơ sở thần kinh: neuroplasticity giúp nơ-ron tạo liên kết synap mới khi vượt qua thử thách khó (B)."
          },
          {
            id: "R36",
            question: "The word 'malleable' in the final paragraph is closest in meaning to:",
            options: [
              { key: "A", text: "Rigid, inflexible, and unyielding" },
              { key: "B", text: "Adaptable, developable, and capable of being shaped" },
              { key: "C", text: "Extremely fragile and brittle" },
              { key: "D", text: "Scientifically unproven" }
            ],
            correctAnswer: "B",
            explanation: "Malleable có nghĩa là có thể uốn nắn, phát triển và định hình được (adaptable, developable) (B)."
          },
          {
            id: "R37",
            question: "What danger is associated with praising a child's innate genius (e.g., 'You are a natural genius')?",
            options: [
              { key: "A", text: "It causes them to become professional athletes" },
              { key: "B", text: "It inadvertently fosters a fragile fixed mindset and fear of failure" },
              { key: "C", text: "It makes them forget how to read" },
              { key: "D", text: "It causes severe physical fatigue" }
            ],
            correctAnswer: "B",
            explanation: "Đoạn 4 cảnh báo: khen ngợi tài năng bẩm sinh vô tình đẩy học sinh vào tư duy cố định mỏng manh và sợ thất bại (B)."
          },
          {
            id: "R38",
            question: "Which of the following is an example of process-oriented praise recommended by psychologists?",
            options: [
              { key: "A", text: "'You are the smartest student in this entire school!'" },
              { key: "B", text: "'Your essay shows meticulous revision and thoughtful organization.'" },
              { key: "C", text: "'You got an A without even studying, that proves your genius!'" },
              { key: "D", text: "'You are naturally superior to all other classmates.'" }
            ],
            correctAnswer: "B",
            explanation: "Khen ngợi nỗ lực chỉnh sửa và tổ chức bài viết là ví dụ điển hình của lời khen hướng vào quá trình (process praise) (B)."
          },
          {
            id: "R39",
            question: "The word 'immutable' in Paragraph 1 most nearly means:",
            options: [
              { key: "A", text: "Easily translated" },
              { key: "B", text: "Unchangeable or unalterable" },
              { key: "C", text: "Temporarily delayed" },
              { key: "D", text: "Completely invisible" }
            ],
            correctAnswer: "B",
            explanation: "Immutable có nghĩa là bất biến, không thể thay đổi được (unchangeable) (B)."
          },
          {
            id: "R40",
            question: "What is the primary message the author conveys in Passage 4?",
            options: [
              { key: "A", text: "Academic success is strictly predetermined by inherited genes" },
              { key: "B", text: "Cultivating a growth mindset through process praise fosters true resilience and mastery" },
              { key: "C", text: "Standardized examinations should replace all classroom teaching" },
              { key: "D", text: "Effort is unnecessary if teachers are friendly" }
            ],
            correctAnswer: "B",
            explanation: "Thông điệp chính: rèn luyện tư duy phát triển và khen ngợi quá trình giúp người học kiên cường và đạt tới sự tinh thông (B)."
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
      title: "Task 1: Thư hỏi thông tin chỗ ở thực tập hè (Summer Internship Housing Inquiry)",
      prompt: "You have recently been accepted for a two-month summer internship at an international consulting company in Da Nang, beginning July 1st. Write a formal letter (minimum 120 words) to the Student Affairs & Housing Office of a partner university in Da Nang. In your letter:\n- State clearly who you are and explain why you are writing.\n- Request information about short-term dormitory accommodation for interns during July and August.\n- Inquire about room amenities, rental fees, and the reservation deadline.",
      sampleModel: `Dear Housing Office Manager,

My name is Pham Minh Tuan, a third-year undergraduate student majoring in International Business at the University of Economics in Hanoi. I am writing this letter to inquire about short-term summer dormitory accommodation on your university campus.

I have recently been accepted for a two-month summer corporate internship at an international consulting firm located in Hai Chau District, Da Nang. The internship program runs from July 1st to August 31st. As my company does not provide housing, I am seeking a safe and affordable residential place during my stay.

Could you please inform me whether your university offers short-term dormitory rooms for external university interns during the summer break? Specifically, I would appreciate details regarding room amenities, such as internet connectivity, air conditioning, and laundry facilities. Furthermore, could you verify the exact monthly rental rate, security deposit requirements, and the final registration deadline?

Thank you very much for your time and kind assistance. I look forward to receiving your response at your earliest convenience.

Yours sincerely,
Pham Minh Tuan`,
      outline: [
        { part: "Lời chào & Mục đích", content: "Dear Housing Office Manager; giới thiệu bản thân là sinh viên năm 3 và lý do viết thư xin thông tin phòng KTX hè." },
        { part: "Thân bài 1 (Bối cảnh thực tập)", content: "Được nhận thực tập 2 tháng từ 1/7 đến 31/8 tại quận Hải Châu, Đà Nẵng; cần tìm chỗ ở an toàn, tiết kiệm." },
        { part: "Thân bài 2 (Các câu hỏi chi tiết)", content: "Hỏi về điều kiện nhận sinh viên ngoài trường, tiện nghi phòng (điều hòa, wifi, máy giặt), giá thuê, tiền cọc và hạn chót đăng ký." },
        { part: "Kết bài & Ký tên", content: "Cảm ơn và mong nhận phản hồi sớm; Yours sincerely, Pham Minh Tuan." }
      ]
    },
    task2: {
      title: "Task 2: Bài luận về Trẻ em & Sự phụ thuộc vào Thiết bị Điện tử (Children & Digital Entertainment)",
      prompt: "In many contemporary societies, young children spend increasing amounts of time engaged with digital entertainment devices such as smartphones, tablets, and gaming consoles. While some argue that these interactive technologies enhance digital literacy and cognitive agility, others believe excessive screen time harms physical health and social development. Discuss both views and give your own opinion. (Write at least 250 words)",
      sampleModel: `In contemporary society, the pervasive presence of digital technology has transformed childhood entertainment. While some individuals argue that early exposure to digital devices fosters technical literacy and cognitive agility, others contend that excessive screen time undermines children's physical well-being and interpersonal development. In my opinion, while digital devices offer certain educational benefits, unmonitored screen immersion poses profound risks to healthy child development.

On the one hand, proponents of digital engagement emphasize meaningful educational advantages. Interactive learning applications and puzzle-solving games stimulate cognitive agility, hand-eye coordination, and visual processing skills. Furthermore, in an increasingly digitized global economy, early familiarity with software navigation, search algorithms, and touchscreen interfaces cultivates foundational digital literacy that prepares children for modern academic environments. In moderation, curated digital content can introduce children to diverse geographical knowledge and scientific principles that traditional textbooks cannot easily replicate.

On the other hand, compelling arguments demonstrate the detrimental consequences of excessive screen exposure. First and foremost, prolonged device usage induces a sedentary lifestyle, which is directly linked to childhood obesity, poor posture, and progressive digital eye strain. More critically, excessive virtual interaction impairs the development of fundamental social-emotional skills. Real-world empathetic communication, patience, and conflict resolution are forged through authentic face-to-face peer play, whereas digital games provide instantaneous algorithmic dopamine gratification that shortens attention spans and heightens behavioral irritability.

In conclusion, although digital devices present valuable learning opportunities when used judiciously, excessive and unguided usage severely threatens children's physical vitality and emotional maturity. Therefore, I believe parents and schools must establish strict daily screen boundaries, encouraging active outdoor recreation and authentic personal interaction alongside digital education.`,
      outline: [
        { part: "Mở bài", content: "Dẫn dắt tranh luận về việc trẻ em dùng thiết bị điện tử; nêu quan điểm: công nghệ có ích nếu có chừng mực nhưng lạm dụng gây hại lớn." },
        { part: "Thân bài 1 (Mặt tích cực)", content: "Tăng phản xạ tư duy, phối hợp tay mắt; hình thành kỹ năng số từ sớm; tiếp cận kho tri thức sinh động." },
        { part: "Thân bài 2 (Mặt tiêu cực)", content: "Lối sống ít vận động gây béo phì, cận thị; thiếu hụt kỹ năng thấu cảm và giao tiếp trực tiếp ngoài đời thực; nghiện dopamine ảo." },
        { part: "Kết bài", content: "Khẳng định lại: Cần giới hạn thời gian màn hình nghiêm ngặt, kết hợp hoạt động ngoài trời và giao lưu trực tiếp." }
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
      topic1: "Topic 1: Holidays & Travel Experiences",
      topic1Questions: [
        {
          q: "What type of holiday destination do you enjoy the most?",
          a: "Personally, I find coastal beach destinations to be the most rejuvenating. The rhythmic sound of ocean waves, refreshing sea breezes, and the chance to swim outdoors allow me to unwind completely from academic pressures."
        },
        {
          q: "Do you prefer traveling alone or with a group of friends?",
          a: "I definitely prefer traveling with close friends. Sharing local street food, laughing through unexpected itinerary delays, and exploring new cultural landmarks together create cherished memories that traveling solo simply cannot replicate."
        },
        {
          q: "What is an essential item you always pack when traveling?",
          a: "A high-capacity portable power bank is my absolute non-negotiable item. When exploring unfamiliar cities, my smartphone is constantly running GPS maps, translation apps, and photography, so maintaining battery power is essential for convenience and safety."
        }
      ],
      topic2: "Topic 2: Music & Leisure Activities",
      topic2Questions: [
        {
          q: "What genre of music do you listen to most frequently?",
          a: "I mostly listen to acoustic indie-pop and instrumental classical piano. The soothing melodies and gentle acoustic guitar chords help me concentrate when studying and help me decompress before going to sleep."
        },
        {
          q: "Have you ever attended a live music concert?",
          a: "Yes, I attended an outdoor music festival in Hanoi last autumn. The electric energy of the crowd singing in unison, the vibrant stage lighting, and the raw acoustic sound were far more thrilling than listening through ordinary headphones."
        },
        {
          q: "Do you think music education should be compulsory in primary schools?",
          a: "I strongly believe so. Learning a musical instrument in early childhood enhances auditory processing, stimulates neural development, and nurtures emotional sensitivity that enriches a child's holistic personality."
        }
      ]
    },

    part2: {
      title: "Part 2: Thảo Luận Giải Pháp (Solution Discussion - 4 phút)",
      situation: "A university student charity club is organizing an annual fundraiser to support disadvantaged rural elementary schools. Three options are considered: (1) A charity sports marathon with entry ticket fees, (2) A secondhand book and handicraft flea market on campus, or (3) An online crowdfunding campaign through social media. Which option is the best choice?",
      bestOption: "Option 2: A secondhand book and handicraft flea market on campus",
      sampleSpeech: `If our university student charity club were to choose the most effective and feasible fundraiser, I would strongly champion Option 2: organizing a secondhand book and handicraft flea market right on campus.

First and foremost, a flea market directly engages our primary target audience: university students and faculty members. College students are perpetually looking for affordable academic textbooks, literature novels, and handmade accessories. By recycling pre-loved books and selling creative crafts made by club volunteers, we generate high profit margins while promoting sustainability and waste reduction on campus. The vibrant festive atmosphere also provides a wonderful platform to raise awareness about rural educational inequalities.

Examining the other alternatives, organizing a charity sports marathon (Option 1) sounds energetic; however, it requires complex municipal permits, professional medical emergency staff, road closures, and high insurance costs that our student budget cannot afford. On the other hand, an online crowdfunding campaign (Option 3) might seem easy; nevertheless, online donations frequently suffer from donor fatigue, algorithm restrictions, and a lack of tangible, personal community connection.

Therefore, balancing minimal administrative risk, high student engagement, and educational relevance, the campus book and handicraft flea market is indisputably the superior choice for our charity club.`,
      tips: "Cấu trúc trả lời điểm cao: Nêu lựa chọn tốt nhất ngay câu mở đầu -> Đưa ra 2 luận điểm ủng hộ mạnh mẽ -> Phân tích điểm hạn chế của 2 phương án còn lại -> Chốt lại quyết định cuối cùng."
    },

    part3: {
      title: "Part 3: Phát Triển Chủ Đề (Topic Development - 5 phút)",
      topic: "Volunteering brings multiple lifelong benefits to young university students.",
      mindMap: [
        "Practical Soft Skills (Communication, leadership, and crisis management)",
        "Social Empathy (Broadened worldview and deeper civic responsibility)",
        "Career Networking (Valuable contacts and enhanced resume credibility)"
      ],
      sampleSpeech: `It is undeniable that participating actively in volunteer initiatives yields invaluable dividends for university students beyond textbook academic knowledge.

First and foremost, community service serves as a practical incubator for essential soft skills. In volunteer projects, students are tasked with resolving real-world logistical friction, coordinating diverse teams, managing budgets, and communicating persuasively with local authorities. These experiential leadership and crisis-management competencies cannot be acquired from lecture halls alone, providing students with authentic self-assurance.

Secondly, volunteering cultivates profound social empathy and civic responsibility. When young adults step outside their comfortable campus bubbles to teach underprivileged children or assist disaster relief efforts, they witness socioeconomic realities firsthand. This direct human connection dismantles prejudices, inspires gratitude, and molds graduates into responsible, conscientious citizens committed to positive societal reform.

Last but not least, volunteer experience bolsters career networking and resume credibility. In today's competitive job market, employers actively look beyond grade transcripts for candidates with character, grit, and collaborative spirit. Furthermore, volunteering connects students with non-profit directors, government mentors, and like-minded peers who frequently open doors to future professional recommendations and employment opportunities.

In conclusion, volunteering equips youth with indispensable soft skills, empathetic maturity, and valuable professional networks that enrich their future lives.`,
      followUp: [
        {
          q: "Should universities make community service mandatory for graduation?",
          a: "While community service is deeply beneficial, I believe making it strictly mandatory risks turning it into a chore. Instead, universities should offer academic credit incentives and institutional recognition to motivate authentic student volunteering."
        },
        {
          q: "How can busy university students balance academic coursework and volunteer work?",
          a: "The key lies in structured time blocking and selecting micro-volunteering projects. Dedicating three hours on a Saturday morning to a local charity allows students to contribute meaningfully without compromising midterm exam preparation."
        },
        {
          q: "Do you think corporate volunteer programs genuinely help communities or are they just PR stunts?",
          a: "While corporate public relations benefits undeniably exist, well-structured programs channel vital funding, engineering skills, and logistical resources into community welfare. When executed with transparent accountability, they generate genuine societal good."
        }
      ]
    }
  }
};
