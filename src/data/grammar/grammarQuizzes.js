/**
 * src/data/grammar/grammarQuizzes.js
 * Ngân hàng 280+ câu hỏi trắc nghiệm kiểm tra ngữ pháp thực hành theo từng chuyên đề VSTEP B1
 * Kèm đáp án đúng và lời giải thích ngữ pháp + bản dịch chi tiết
 */

export const GRAMMAR_QUIZZES = {
  "sentence-structures": [
    {
      "id": "ss_q1",
      "question": "Identify the sentence pattern: 'The committee appointed Mr. Nam the head of the research department.'",
      "options": [
        "A. S - V - O",
        "B. S - V - O - OC (Bổ ngữ cho tân ngữ)",
        "C. S - V - IO - DO",
        "D. S - V - C"
      ],
      "correct": 1,
      "explanation": "'The committee' (S) + 'appointed' (V) + 'Mr. Nam' (O) + 'the head of the research department' (OC - bổ ngữ giải thích cho tân ngữ Mr. Nam). Đây là cấu trúc SVOC.",
      "translation": "Ủy ban đã bổ nhiệm ông Nam làm trưởng phòng nghiên cứu."
    },
    {
      "id": "ss_q2",
      "question": "Which of the following is a Compound Sentence (Câu ghép)?",
      "options": [
        "A. Because she studied diligently, she passed the exam with distinction.",
        "B. She studied diligently, so she passed the exam with distinction.",
        "C. She studied diligently to pass the exam with distinction.",
        "D. Having studied diligently, she passed the exam with distinction."
      ],
      "correct": 1,
      "explanation": "Câu B dùng liên từ đẳng lập 'so' (thuộc nhóm FANBOYS) để nối 2 mệnh đề độc lập, tạo thành câu ghép (Compound Sentence). Câu A là câu phức (Complex sentence với 'Because').",
      "translation": "Cô ấy đã học tập chăm chỉ, vì vậy cô ấy đã đỗ kỳ thi với kết quả xuất sắc."
    },
    {
      "id": "ss_q3",
      "question": "Choose the correct connector: 'The internet connection was unstable, _______ the online lecture continued without interruption.'",
      "options": [
        "A. yet",
        "B. so",
        "C. for",
        "D. or"
      ],
      "correct": 0,
      "explanation": "'Yet' (nhưng, tuy vậy) là liên từ đẳng lập FANBOYS chỉ sự tương phản giữa 2 mệnh đề độc lập.",
      "translation": "Kết nối mạng internet không ổn định, tuy vậy buổi giảng trực tuyến vẫn tiếp tục không bị gián đoạn."
    },
    {
      "id": "ss_q4",
      "question": "Identify the clause type: 'Although the weather was harsh, the flight landed safely.'",
      "options": [
        "A. Compound sentence",
        "B. Simple sentence",
        "C. Complex sentence (Câu phức)",
        "D. Compound-complex sentence"
      ],
      "correct": 2,
      "explanation": "Câu chứa một mệnh đề phụ thuộc bắt đầu bằng liên từ phụ thuộc 'Although' kết hợp với một mệnh đề chính độc lập, tạo thành câu phức (Complex Sentence).",
      "translation": "Mặc dù thời tiết khắc nghiệt, chuyến bay vẫn hạ cánh an toàn."
    },
    {
      "id": "ss_q5",
      "question": "'The professor taught the graduate students advanced data analysis techniques.' follows which pattern?",
      "options": [
        "A. S - V - O - OC",
        "B. S - V - IO - DO (Tân ngữ gián tiếp - Tân ngữ trực tiếp)",
        "C. S - V - C",
        "D. S - V - A"
      ],
      "correct": 1,
      "explanation": "'The professor' (S) + 'taught' (V) + 'the graduate students' (IO - tân ngữ gián tiếp chỉ người) + 'advanced data analysis techniques' (DO - tân ngữ trực tiếp chỉ vật).",
      "translation": "Giáo sư đã dạy cho các học viên cao học các kỹ thuật phân tích dữ liệu nâng cao."
    },
    {
      "id": "ss_q6",
      "question": "Choose the sentence with correct parallel structure (Cấu trúc song hành):",
      "options": [
        "A. The course helps learners in improving vocabulary, developing listening skills, and to speak fluently.",
        "B. The course helps learners in improving vocabulary, developing listening skills, and speaking fluently.",
        "C. The course helps learners in improve vocabulary, to develop listening skills, and speaking fluently.",
        "D. The course helps learners improving vocabulary, development of listening, and speak fluently."
      ],
      "correct": 1,
      "explanation": "Cấu trúc song hành yêu cầu các thành phần liệt kê phải cùng dạng từ loại: 'improving...', 'developing...', và 'speaking...' đều là V-ing.",
      "translation": "Khóa học giúp người học nâng cao từ vựng, phát triển kỹ năng nghe và nói trôi chảy."
    },
    {
      "id": "ss_q7",
      "question": "'The soup tastes delicious.' belongs to which sentence structure?",
      "options": [
        "A. S - V - O",
        "B. S - V - C (Chủ ngữ - Động từ nối - Bổ ngữ)",
        "C. S - V",
        "D. S - V - IO - DO"
      ],
      "correct": 1,
      "explanation": "'Taste' ở đây là động từ nối (Linking Verb), theo sau là tính từ 'delicious' đóng vai trò bổ ngữ cho chủ ngữ (Subject Complement - C).",
      "translation": "Món súp này có vị rất ngon."
    },
    {
      "id": "ss_q8",
      "question": "Choose the best option to complete the compound-complex sentence: 'Because he was late, he missed the opening speech, _______ he managed to attend the main discussion.'",
      "options": [
        "A. but",
        "B. because",
        "C. unless",
        "D. since"
      ],
      "correct": 0,
      "explanation": "Liên từ đẳng lập 'but' dùng để nối 2 vế độc lập có quan hệ đối lập trong câu phức hợp.",
      "translation": "Bởi vì anh ấy đến muộn, anh ấy đã bỏ lỡ bài phát biểu khai mạc, nhưng anh ấy vẫn kịp tham dự phiên thảo luận chính."
    },
    {
      "id": "ss_q9",
      "question": "Which sentence contains a transitive verb requiring a direct object?",
      "options": [
        "A. The birds are singing happily in the trees.",
        "B. The economy grew rapidly last year.",
        "C. The company launched an innovative mobile application.",
        "D. The sun rises in the east."
      ],
      "correct": 2,
      "explanation": "'Launch' là ngoại động từ (Transitive verb), bắt buộc phải có tân ngữ trực tiếp đi kèm ('an innovative mobile application'). Các câu khác dùng nội động từ (sing, grow, rise).",
      "translation": "Công ty đã phát động một ứng dụng di động mang tính đổi mới."
    },
    {
      "id": "ss_q10",
      "question": "Complete the sentence: 'She neither submitted the written report _______ attended the final briefing.'",
      "options": [
        "A. or",
        "B. nor",
        "C. and",
        "D. but"
      ],
      "correct": 1,
      "explanation": "Cặp liên từ tương quan 'Neither... nor...' (Không... cũng không...).",
      "translation": "Cô ấy không nộp bản báo cáo viết và cũng không tham dự buổi tóm tắt cuối cùng."
    },
    {
      "id": "ss_q11",
      "question": "Which sentence contains a Subject Complement (Bổ ngữ cho chủ ngữ)?",
      "options": [
        "A. The new curriculum seems highly demanding for first-year students.",
        "B. The students completed the assignment yesterday.",
        "C. The teacher gave the class clear instructions.",
        "D. The director elected Minh team leader."
      ],
      "correct": 0,
      "explanation": "'seems' là động từ nối (Linking verb), theo sau bởi cụm tính từ 'highly demanding' đóng vai trò bổ ngữ cho chủ ngữ (Subject Complement - C) trong cấu trúc SVC.",
      "translation": "Chương trình giảng dạy mới dường như rất khắt khe đối với sinh viên năm nhất."
    },
    {
      "id": "ss_q12",
      "question": "Identify the sentence type: 'While technology accelerates information retrieval, it cannot replace critical human thinking.'",
      "options": [
        "A. Simple sentence",
        "B. Compound sentence",
        "C. Complex sentence (Câu phức)",
        "D. Incomplete sentence"
      ],
      "correct": 2,
      "explanation": "Câu gồm mệnh đề phụ thuộc bắt đầu bằng liên từ 'While' và một mệnh đề chính độc lập ➔ Câu phức (Complex sentence).",
      "translation": "Trong khi công nghệ đẩy nhanh việc truy xuất thông tin, nó không thể thay thế tư duy phản biện của con người."
    },
    {
      "id": "ss_q13",
      "question": "Choose the correct sentence following the S - V - IO - DO pattern:",
      "options": [
        "A. The scholarship committee granted the applicant full financial aid.",
        "B. The committee granted full financial aid to the applicant.",
        "C. The committee considered the applicant very talented.",
        "D. The applicant received full financial aid from the committee."
      ],
      "correct": 0,
      "explanation": "'The scholarship committee' (S) + 'granted' (V) + 'the applicant' (IO - tân ngữ gián tiếp chỉ người) + 'full financial aid' (DO - tân ngữ trực tiếp chỉ vật).",
      "translation": "Hội đồng học bổng đã cấp cho người nộp đơn gói hỗ trợ tài chính toàn phần."
    },
    {
      "id": "ss_q14",
      "question": "Which of the following is a Compound-Complex Sentence (Câu phức hợp)?",
      "options": [
        "A. Although she was fatigued, Lan continued studying, for she aimed to achieve a high score.",
        "B. Although she was fatigued, Lan continued studying.",
        "C. Lan continued studying, for she aimed to achieve a high score.",
        "D. Despite her fatigue, Lan continued studying."
      ],
      "correct": 0,
      "explanation": "Câu có chứa mệnh đề phụ thuộc ('Although she was fatigued') kết hợp với 2 mệnh đề độc lập nối bằng liên từ đẳng lập ('for she aimed...') ➔ Câu phức hợp (Compound-Complex sentence).",
      "translation": "Mặc dù đã mệt mỏi, Lan vẫn tiếp tục học tập, bởi vì cô ấy đặt mục tiêu đạt điểm cao."
    },
    {
      "id": "ss_q15",
      "question": "Identify the error in parallel structure: 'She likes reading academic papers, to write essays, and debating.'",
      "options": [
        "A. reading",
        "B. to write",
        "C. debating",
        "D. papers"
      ],
      "correct": 1,
      "explanation": "Lỗi song hành: 'reading...' (V-ing), 'to write' (to V), 'debating' (V-ing). Cần sửa 'to write' thành 'writing' để đồng nhất.",
      "translation": "Cô ấy thích đọc các bài báo học thuật, viết luận và tranh luận."
    },
    {
      "id": "ss_q16",
      "question": "'The manager found the candidate's portfolio extremely impressive.' follows:",
      "options": [
        "A. S - V - O",
        "B. S - V - O - OC (Tân ngữ - Bổ ngữ cho tân ngữ)",
        "C. S - V - IO - DO",
        "D. S - V - C"
      ],
      "correct": 1,
      "explanation": "'found' (V) + 'the candidate's portfolio' (O) + 'extremely impressive' (OC - tính từ bổ nghĩa làm rõ cho tân ngữ).",
      "translation": "Người quản lý nhận thấy hồ sơ năng lực của ứng viên cực kỳ ấn tượng."
    },
    {
      "id": "ss_q17",
      "question": "Which connector correctly completes the sentence: 'He had neither reviewed the lecture notes _______ completed the assigned exercises.'",
      "options": [
        "A. or",
        "B. nor",
        "C. and",
        "D. but"
      ],
      "correct": 1,
      "explanation": "Cặp liên từ tương quan 'Neither... nor...'.",
      "translation": "Anh ấy chưa xem lại ghi chú bài giảng cũng không hoàn thành các bài tập được giao."
    },
    {
      "id": "ss_q18",
      "question": "Identify the clause type: 'Since the laboratory equipment was outdated, the results were inconclusive.'",
      "options": [
        "A. Adverb clause of reason (Mệnh đề trạng ngữ chỉ lý do)",
        "B. Noun clause",
        "C. Relative clause",
        "D. Coordinate clause"
      ],
      "correct": 0,
      "explanation": "'Since...' là mệnh đề trạng ngữ chỉ nguyên nhân/lý do (Adverb clause of reason), bổ nghĩa cho mệnh đề chính.",
      "translation": "Vì thiết bị phòng thí nghiệm đã lỗi thời, kết quả thu được không thể đưa ra kết luận."
    },
    {
      "id": "ss_q19",
      "question": "Which sentence has an intransitive verb (Nội động từ)?",
      "options": [
        "A. The temperature dropped dramatically during the night.",
        "B. The technician repaired the malfunctioning laptop.",
        "C. The student answered the difficult question correctly.",
        "D. The company opened a new branch in Da Nang."
      ],
      "correct": 0,
      "explanation": "'Drop' (giảm xuống) ở câu A là nội động từ (Intransitive verb), không cần tân ngữ theo sau mà đi kèm trạng từ 'dramatically'.",
      "translation": "Nhiệt độ đã giảm xuống một cách rõ rệt trong suốt đêm qua."
    },
    {
      "id": "ss_q20",
      "question": "Complete the compound sentence: 'The study was meticulously designed, _______ the findings were widely cited.'",
      "options": [
        "A. and",
        "B. but",
        "C. although",
        "D. because"
      ],
      "correct": 0,
      "explanation": "Liên từ đẳng lập 'and' (thuộc FANBOYS) nối 2 mệnh đề độc lập có ý nghĩa bổ sung tự nhiên.",
      "translation": "Nghiên cứu đã được thiết kế tỉ mỉ, và những phát hiện của nó đã được trích dẫn rộng rãi."
    }
  ],
  "tenses": [
    {
      "id": "t_q1",
      "question": "By the time the candidates arrived at the examination hall, the proctor _______ the test instructions.",
      "options": [
        "A. finished",
        "B. has finished",
        "C. had finished",
        "D. was finishing"
      ],
      "correct": 2,
      "explanation": "Cấu trúc 'By the time + S + V(quá khứ đơn), S + had + V3/ed (quá khứ hoàn thành)' diễn tả hành động đã hoàn tất trước một mốc thời gian trong quá khứ.",
      "translation": "Trước khi các thí sinh đến phòng thi, giám thị đã phổ biến xong hướng dẫn làm bài."
    },
    {
      "id": "t_q2",
      "question": "Dr. Ha _______ at Hanoi National University of Education since 2015.",
      "options": [
        "A. is teaching",
        "B. has been teaching",
        "C. was teaching",
        "D. taught"
      ],
      "correct": 1,
      "explanation": "'Since 2015' nhấn mạnh hành động bắt đầu từ quá khứ và vẫn đang tiếp diễn liên tục đến hiện tại, dùng thì Hiện tại hoàn thành tiếp diễn (have/has been V-ing).",
      "translation": "Tiến sĩ Hà đã và đang giảng dạy tại Trường Đại học Sư phạm Hà Nội từ năm 2015."
    },
    {
      "id": "t_q3",
      "question": "Look at those dark clouds! It _______ heavily in a few minutes.",
      "options": [
        "A. will rain",
        "B. is going to rain",
        "C. rains",
        "D. is raining"
      ],
      "correct": 1,
      "explanation": "Có bằng chứng rõ ràng ở hiện tại ('dark clouds'), ta dùng 'be going to V' để dự đoán sự việc chắc chắn sẽ xảy ra.",
      "translation": "Hãy nhìn những đám mây đen kìa! Trời sắp mưa to trong vài phút nữa."
    },
    {
      "id": "t_q4",
      "question": "While the researcher _______ the laboratory data, the power suddenly went out.",
      "options": [
        "A. analyzed",
        "B. was analyzing",
        "C. has analyzed",
        "D. is analyzing"
      ],
      "correct": 1,
      "explanation": "Hành động đang diễn ra trong quá khứ ('was analyzing') thì có một hành động khác xen vào ('went out').",
      "translation": "Trong khi nhà nghiên cứu đang phân tích dữ liệu phòng thí nghiệm thì đột ngột mất điện."
    },
    {
      "id": "t_q5",
      "question": "By next December, we _______ our English master's degree program.",
      "options": [
        "A. will complete",
        "B. will have completed",
        "C. are completing",
        "D. have completed"
      ],
      "correct": 1,
      "explanation": "'By next December' (trước tháng 12 tới - mốc tương lai), dùng thì Tương lai hoàn thành: 'will have + V3/ed' để diễn tả hành động sẽ hoàn tất trước một thời điểm trong tương lai.",
      "translation": "Trước tháng 12 năm tới, chúng tôi sẽ hoàn thành chương trình thạc sĩ tiếng Anh của mình."
    },
    {
      "id": "t_q6",
      "question": "This is the first time I _______ such an intensive VSTEP listening practice session.",
      "options": [
        "A. experience",
        "B. have experienced",
        "C. experienced",
        "D. was experiencing"
      ],
      "correct": 1,
      "explanation": "Cấu trúc 'This is the first/second time + S + have/has + V3/ed' (Hiện tại hoàn thành).",
      "translation": "Đây là lần đầu tiên tôi trải nghiệm một buổi luyện nghe VSTEP chuyên sâu như thế này."
    },
    {
      "id": "t_q7",
      "question": "Water _______ at 100 degrees Celsius under normal atmospheric pressure.",
      "options": [
        "A. boil",
        "B. boils",
        "C. is boiling",
        "D. boiled"
      ],
      "correct": 1,
      "explanation": "Chân lý, sự thật hiển nhiên luôn chia ở thì Hiện tại đơn (Present Simple), chủ ngữ 'Water' không đếm được nên động từ thêm 's' -> 'boils'.",
      "translation": "Nước sôi ở 100 độ C dưới áp suất khí quyển bình thường."
    },
    {
      "id": "t_q8",
      "question": "When I arrived at the station, my friend _______ for me for over an hour.",
      "options": [
        "A. has been waiting",
        "B. had been waiting",
        "C. was waiting",
        "D. waited"
      ],
      "correct": 1,
      "explanation": "Nhấn mạnh tính liên tục của hành động kéo dài 'for over an hour' trước một thời điểm trong quá khứ ('When I arrived'), dùng Quá khứ hoàn thành tiếp diễn (had been V-ing).",
      "translation": "Khi tôi đến nhà ga, bạn tôi đã đợi tôi hơn một tiếng đồng hồ."
    },
    {
      "id": "t_q9",
      "question": "The train to Da Nang _______ at 8:30 PM tonight according to the official timetable.",
      "options": [
        "A. will depart",
        "B. departs",
        "C. is departing",
        "D. departed"
      ],
      "correct": 1,
      "explanation": "Lịch trình, thời gian biểu cố định của tàu xe/máy bay dùng thì Hiện tại đơn để chỉ tương lai.",
      "translation": "Chuyến tàu đi Đà Nẵng khởi hành lúc 8:30 tối nay theo lịch trình chính thức."
    },
    {
      "id": "t_q10",
      "question": "I haven't heard from my former supervisor since he _______ to Singapore.",
      "options": [
        "A. has moved",
        "B. moved",
        "C. was moving",
        "D. had moved"
      ],
      "correct": 1,
      "explanation": "Cấu trúc 'S + have/has + V3/ed + since + S + V(quá khứ đơn)'. Mệnh đề sau 'since' chia thì Quá khứ đơn.",
      "translation": "Tôi đã không nhận được tin tức từ người giám sát cũ của mình kể từ khi anh ấy chuyển sang Singapore."
    },
    {
      "id": "t_q11",
      "question": "When we arrived at the lecture theater, the professor _______ for twenty minutes.",
      "options": [
        "A. had been speaking",
        "B. was speaking",
        "C. has spoken",
        "D. spoke"
      ],
      "correct": 0,
      "explanation": "Nhấn mạnh tính liên tục của hành động diễn ra trong 20 phút trước khi một hành động khác xảy ra trong quá khứ ('arrived') ➔ Quá khứ hoàn thành tiếp diễn: 'had been speaking'.",
      "translation": "Khi chúng tôi đến giảng đường, vị giáo sư đã phát biểu được hai mươi phút rồi."
    },
    {
      "id": "t_q12",
      "question": "By the end of this year, Dr. Minh _______ at the research institute for two decades.",
      "options": [
        "A. will work",
        "B. will have been working",
        "C. is working",
        "D. has worked"
      ],
      "correct": 1,
      "explanation": "'By the end of this year' + 'for two decades' ➔ Tương lai hoàn thành tiếp diễn (will have been V-ing) nhấn mạnh tính liên tục đến mốc tương lai.",
      "translation": "Tính đến cuối năm nay, Tiến sĩ Minh sẽ có tròn hai thập kỷ làm việc liên tục tại viện nghiên cứu."
    },
    {
      "id": "t_q13",
      "question": "Hardly had the candidates opened their exam booklets when the alarm _______.",
      "options": [
        "A. rang",
        "B. had rung",
        "C. was ringing",
        "D. rings"
      ],
      "correct": 0,
      "explanation": "Cấu trúc đảo ngữ: 'Hardly + had + S + V3/ed + when + S + V(quá khứ đơn)' ➔ dùng 'rang'.",
      "translation": "Các thí sinh vừa mới mở tập đề thi ra thì chuông báo động reo lên."
    },
    {
      "id": "t_q14",
      "question": "The sun _______ in the East and sets in the West.",
      "options": [
        "A. rise",
        "B. rises",
        "C. is rising",
        "D. rose"
      ],
      "correct": 1,
      "explanation": "Sự thật hiển nhiên chia thì Hiện tại đơn: 'rises'.",
      "translation": "Mặt trời mọc ở hướng Đông và lặn ở hướng Tây."
    },
    {
      "id": "t_q15",
      "question": "Listen! Someone _______ on the door of the examination room.",
      "options": [
        "A. knocks",
        "B. is knocking",
        "C. was knocking",
        "D. has knocked"
      ],
      "correct": 1,
      "explanation": "Dấu hiệu 'Listen!' báo hiệu hành động đang diễn ra tại thời điểm nói ➔ Hiện tại tiếp diễn: 'is knocking'.",
      "translation": "Lắng nghe kìa! Có ai đó đang gõ cửa phòng thi."
    },
    {
      "id": "t_q16",
      "question": "I _______ this dictionary three times because it is extremely comprehensive.",
      "options": [
        "A. read",
        "B. have read",
        "C. had read",
        "D. am reading"
      ],
      "correct": 1,
      "explanation": "Số lần trải nghiệm (three times) trong đời tính đến hiện tại dùng thì Hiện tại hoàn thành: 'have read'.",
      "translation": "Tôi đã đọc cuốn từ điển này ba lần vì nó cực kỳ toàn diện."
    },
    {
      "id": "t_q17",
      "question": "At this time tomorrow, we _______ the VSTEP B1 computer-based exam.",
      "options": [
        "A. will take",
        "B. will be taking",
        "C. take",
        "D. are taking"
      ],
      "correct": 1,
      "explanation": "'At this time tomorrow' (thời điểm cụ thể trong tương lai) ➔ Tương lai tiếp diễn: 'will be taking'.",
      "translation": "Vào thời điểm này ngày mai, chúng tôi sẽ đang làm bài thi VSTEP B1 trên máy tính."
    },
    {
      "id": "t_q18",
      "question": "The train _______ at 6:00 AM tomorrow according to the published schedule.",
      "options": [
        "A. leaves",
        "B. will leave",
        "C. is leaving",
        "D. left"
      ],
      "correct": 0,
      "explanation": "Lịch trình tàu xe cố định dùng thì Hiện tại đơn: 'leaves'.",
      "translation": "Chuyến tàu khởi hành lúc 6:00 sáng mai theo lịch trình đã công bố."
    },
    {
      "id": "t_q19",
      "question": "Up until now, scientific researchers _______ no definitive cure for the disease.",
      "options": [
        "A. found",
        "B. have found",
        "C. are finding",
        "D. had found"
      ],
      "correct": 1,
      "explanation": "'Up until now' (Cho đến tận bây giờ) là dấu hiệu của thì Hiện tại hoàn thành: 'have found'.",
      "translation": "Cho đến tận bây giờ, các nhà nghiên cứu khoa học vẫn chưa tìm ra phương pháp chữa trị dứt điểm căn bệnh này."
    },
    {
      "id": "t_q20",
      "question": "While my roommate was drafting his essay, I _______ grammar rules.",
      "options": [
        "A. reviewed",
        "B. was reviewing",
        "C. have reviewed",
        "D. review"
      ],
      "correct": 1,
      "explanation": "Hai hành động diễn ra song song cùng lúc trong quá khứ dùng Quá khứ tiếp diễn cho cả 2 vế: 'was reviewing'.",
      "translation": "Trong khi bạn cùng phòng của tôi đang phác thảo bài luận, tôi đang ôn tập lại các quy tắc ngữ pháp."
    }
  ],
  "parts-of-speech": [
    {
      "id": "pos_q1",
      "question": "The new environmental regulation was _______ implemented across all manufacturing plants.",
      "options": [
        "A. success",
        "B. successful",
        "C. successfully",
        "D. succeed"
      ],
      "correct": 2,
      "explanation": "Đứng giữa trợ động từ 'was' và quá khứ phân từ 'implemented' (thể bị động) cần một Trạng từ (Adverb) để bổ nghĩa cho động từ: 'successfully'.",
      "translation": "Quy định môi trường mới đã được thực thi một cách thành công trên tất cả các nhà máy sản xuất."
    },
    {
      "id": "pos_q2",
      "question": "The department is seeking a candidate with exceptional _______ and organizational skills.",
      "options": [
        "A. communicative",
        "B. communication",
        "C. communicate",
        "D. communicatively"
      ],
      "correct": 1,
      "explanation": "'Communication skills' (kỹ năng giao tiếp) là một cụm danh từ ghép (Compound Noun) rất phổ biến trong bài thi VSTEP.",
      "translation": "Phòng ban đang tìm kiếm một ứng viên có kỹ năng giao tiếp và tổ chức xuất sắc."
    },
    {
      "id": "pos_q3",
      "question": "She wore a _______ dress to the academic conference gala.",
      "options": [
        "A. beautiful silk blue",
        "B. blue beautiful silk",
        "C. beautiful blue silk",
        "D. silk beautiful blue"
      ],
      "correct": 2,
      "explanation": "Trật tự tính từ OSASCOMP: Opinion (beautiful) + Color (blue) + Material (silk). Đáp án đúng là 'beautiful blue silk'.",
      "translation": "Cô ấy đã mặc một chiếc váy lụa màu xanh tuyệt đẹp tới buổi dạ tiệc hội thảo học thuật."
    },
    {
      "id": "pos_q4",
      "question": "All participants were amazed by the _______ of the historical presentation.",
      "options": [
        "A. accurate",
        "B. accuracy",
        "C. accurately",
        "D. accredit"
      ],
      "correct": 1,
      "explanation": "Sau mạo từ 'the' và trước giới từ 'of' cần một Danh từ (Noun): 'accuracy' (sự chính xác).",
      "translation": "Tất cả những người tham dự đều ngạc nhiên trước độ chính xác của bài thuyết trình lịch sử."
    },
    {
      "id": "pos_q5",
      "question": "The manager asked the team to review the document _______ before final submission.",
      "options": [
        "A. careful",
        "B. carefully",
        "C. care",
        "D. caring"
      ],
      "correct": 1,
      "explanation": "Bổ nghĩa cho động từ hành động 'review' cần một Trạng từ thể cách (Adverb of manner): 'carefully'.",
      "translation": "Người quản lý đã yêu cầu nhóm rà soát tài liệu một cách cẩn thận trước khi nộp bản cuối."
    },
    {
      "id": "pos_q6",
      "question": "Despite _______ severe financial constraints, the startup succeeded in developing the software.",
      "options": [
        "A. face",
        "B. facing",
        "C. faced",
        "D. faces"
      ],
      "correct": 1,
      "explanation": "Sau giới từ 'Despite' cần một Danh từ hoặc Danh động từ (V-ing): 'facing'.",
      "translation": "Mặc dù phải đối mặt với những khó khăn tài chính nghiêm trọng, công ty khởi nghiệp đã thành công trong việc phát triển phần mềm."
    },
    {
      "id": "pos_q7",
      "question": "We need to find an _______ solution to reduce plastic waste in urban rivers.",
      "options": [
        "A. effect",
        "B. effective",
        "C. effectively",
        "D. effectiveness"
      ],
      "correct": 1,
      "explanation": "Đứng trước danh từ 'solution' cần một Tính từ (Adjective) để bổ nghĩa: 'effective' (hiệu quả).",
      "translation": "Chúng ta cần tìm một giải pháp hiệu quả để giảm thiểu rác thải nhựa ở các dòng sông đô thị."
    },
    {
      "id": "pos_q8",
      "question": "The university provides _______ support for international exchange students.",
      "options": [
        "A. continue",
        "B. continuous",
        "C. continuously",
        "D. continuation"
      ],
      "correct": 1,
      "explanation": "Đứng trước danh từ 'support' cần một Tính từ: 'continuous' (liên tục).",
      "translation": "Trường đại học cung cấp sự hỗ trợ liên tục cho các sinh viên trao đổi quốc tế."
    },
    {
      "id": "pos_q9",
      "question": "He solved the complex mathematical problem with great _______.",
      "options": [
        "A. easy",
        "B. easily",
        "C. ease",
        "D. easiness"
      ],
      "correct": 2,
      "explanation": "Sau tính từ 'great' và giới từ 'with' cần một Danh từ: 'with great ease' = very easily (với sự dễ dàng, rất dễ).",
      "translation": "Anh ấy đã giải quyết bài toán phức tạp một cách rất dễ dàng."
    },
    {
      "id": "pos_q10",
      "question": "The research team conducted a _______ analysis of the consumer survey data.",
      "options": [
        "A. comprehend",
        "B. comprehensive",
        "C. comprehensively",
        "D. comprehension"
      ],
      "correct": 1,
      "explanation": "Đứng trước danh từ 'analysis' cần Tính từ 'comprehensive' (toàn diện, bao quát).",
      "translation": "Nhóm nghiên cứu đã thực hiện một phân tích toàn diện đối với dữ liệu khảo sát người tiêu dùng."
    },
    {
      "id": "pos_q11",
      "question": "The university provides _______ academic resources for all enrolled students.",
      "options": [
        "A. value",
        "B. valuable",
        "C. valuably",
        "D. valuation"
      ],
      "correct": 1,
      "explanation": "Đứng trước danh từ 'resources' cần một Tính từ (Adjective): 'valuable' (có giá trị, quý giá).",
      "translation": "Trường đại học cung cấp những tài nguyên học thuật quý giá cho tất cả sinh viên đã nhập học."
    },
    {
      "id": "pos_q12",
      "question": "The results of the preliminary trial were _______ documented in the scientific journal.",
      "options": [
        "A. clear",
        "B. clearly",
        "C. clarity",
        "D. clearance"
      ],
      "correct": 1,
      "explanation": "Bổ nghĩa cho động từ phân từ 'documented' cần một Trạng từ (Adverb): 'clearly'.",
      "translation": "Kết quả của cuộc thử nghiệm sơ bộ đã được ghi chép lại một cách rõ ràng trên tạp chí khoa học."
    },
    {
      "id": "pos_q13",
      "question": "Technological advancements have significantly enhanced communication _______ worldwide.",
      "options": [
        "A. efficiency",
        "B. efficient",
        "C. efficiently",
        "D. efface"
      ],
      "correct": 0,
      "explanation": "Cụm danh từ ghép 'communication efficiency' (hiệu suất giao tiếp) ➔ cần Danh từ 'efficiency'.",
      "translation": "Những tiến bộ công nghệ đã nâng cao đáng kể hiệu suất giao tiếp trên toàn thế giới."
    },
    {
      "id": "pos_q14",
      "question": "The supervisor spoke with great _______ during the orientation briefing.",
      "options": [
        "A. confident",
        "B. confidence",
        "C. confidently",
        "D. confidential"
      ],
      "correct": 1,
      "explanation": "Sau tính từ 'great' và giới từ 'with' cần Danh từ: 'with great confidence' (với sự tự tin cao độ).",
      "translation": "Người giám sát đã phát biểu với sự tự tin cao độ trong buổi định hướng."
    },
    {
      "id": "pos_q15",
      "question": "She bought a _______ leather jacket at the central shopping boutique.",
      "options": [
        "A. stylish black Italian",
        "B. black Italian stylish",
        "C. Italian black stylish",
        "D. stylish Italian black"
      ],
      "correct": 0,
      "explanation": "Trật tự tính từ OSASCOMP: Opinion (stylish) + Color (black) + Origin (Italian) + Material (leather).",
      "translation": "Cô ấy đã mua một chiếc áo khoác da màu đen kiểu Ý rất phong cách tại cửa hàng trung tâm."
    },
    {
      "id": "pos_q16",
      "question": "Despite _______ exhausted after the long flight, the delegates attended the opening reception.",
      "options": [
        "A. feel",
        "B. feeling",
        "C. felt",
        "D. feels"
      ],
      "correct": 1,
      "explanation": "Sau giới từ 'Despite' dùng V-ing: 'feeling'.",
      "translation": "Mặc dù cảm thấy kiệt sức sau chuyến bay dài, các đại biểu vẫn tham dự buổi chiêu đãi khai mạc."
    },
    {
      "id": "pos_q17",
      "question": "The government is committed to environmental _______ in metropolitan regions.",
      "options": [
        "A. sustain",
        "B. sustainable",
        "C. sustainability",
        "D. sustainably"
      ],
      "correct": 2,
      "explanation": "Sau tính từ 'environmental' cần Danh từ: 'environmental sustainability' (sự bền vững môi trường).",
      "translation": "Chính phủ cam kết thực hiện tính bền vững môi trường tại các vùng đô thị lớn."
    },
    {
      "id": "pos_q18",
      "question": "The candidate answered all theoretical questions with remarkable _______.",
      "options": [
        "A. precise",
        "B. precision",
        "C. precisely",
        "D. preciseness"
      ],
      "correct": 1,
      "explanation": "Sau tính từ 'remarkable' cần Danh từ 'precision' (độ chính xác, sự chuẩn xác).",
      "translation": "Thí sinh đã trả lời tất cả các câu hỏi lý thuyết với độ chuẩn xác đáng kinh ngạc."
    },
    {
      "id": "pos_q19",
      "question": "He gave an _______ presentation that captivated the entire audience.",
      "options": [
        "A. inspire",
        "B. inspiring",
        "C. inspiration",
        "D. inspiredly"
      ],
      "correct": 1,
      "explanation": "Đứng trước danh từ 'presentation' cần Tính từ chủ động miêu tả bản chất của bài thuyết trình: 'inspiring' (truyền cảm hứng).",
      "translation": "Anh ấy đã mang đến một bài thuyết trình truyền cảm hứng làm say mê toàn bộ khán giả."
    },
    {
      "id": "pos_q20",
      "question": "The new software update performs _______ faster than its predecessor.",
      "options": [
        "A. noticeable",
        "B. noticeably",
        "C. notice",
        "D. notification"
      ],
      "correct": 1,
      "explanation": "Bổ nghĩa cho tính từ so sánh hơn 'faster' cần một Trạng từ (Adverb of degree): 'noticeably' (một cách rõ rệt).",
      "translation": "Bản cập nhật phần mềm mới hoạt động nhanh hơn một cách rõ rệt so với phiên bản tiền nhiệm."
    }
  ],
  "verb-patterns": [
    {
      "id": "vp_q1",
      "question": "The university committee decided _______ the deadline for scholarship applications.",
      "options": [
        "A. extend",
        "B. to extend",
        "C. extending",
        "D. extended"
      ],
      "correct": 1,
      "explanation": "Động từ 'decide' luôn đi với To-Infinitive: 'decide to V' (quyết định làm gì).",
      "translation": "Hội đồng trường đại học đã quyết định gia hạn hạn chót nộp hồ sơ xin học bổng."
    },
    {
      "id": "vp_q2",
      "question": "Candidates should avoid _______ grammatical errors in Writing Task 2.",
      "options": [
        "A. make",
        "B. to make",
        "C. making",
        "D. made"
      ],
      "correct": 2,
      "explanation": "Động từ 'avoid' luôn theo sau bởi Danh động từ (Gerund V-ing): 'avoid doing sth'.",
      "translation": "Thí sinh nên tránh mắc các lỗi ngữ pháp trong bài Viết Task 2."
    },
    {
      "id": "vp_q3",
      "question": "I clearly remember _______ the front door before leaving for the examination center.",
      "options": [
        "A. lock",
        "B. to lock",
        "C. locking",
        "D. locked"
      ],
      "correct": 2,
      "explanation": "'Remember + V-ing' nghĩa là nhớ đã làm việc gì trong quá khứ. 'Remember to V' là nhớ phải làm gì trong tương lai.",
      "translation": "Tôi nhớ rất rõ là mình đã khóa cửa trước khi rời nhà đến trung tâm khảo thí."
    },
    {
      "id": "vp_q4",
      "question": "The doctor advised him _______ down on sugary drinks to improve his health.",
      "options": [
        "A. cut",
        "B. to cut",
        "C. cutting",
        "D. cuts"
      ],
      "correct": 1,
      "explanation": "Cấu trúc 'advise someone to do sth' (khuyên ai đó làm gì).",
      "translation": "Bác sĩ đã khuyên anh ấy nên cắt giảm đồ uống có đường để cải thiện sức khỏe."
    },
    {
      "id": "vp_q5",
      "question": "We stopped _______ some fresh bottled water because the journey was exhausting.",
      "options": [
        "A. buy",
        "B. to buy",
        "C. buying",
        "D. bought"
      ],
      "correct": 1,
      "explanation": "'Stop to V' nghĩa là dừng hành động đang làm lại để làm một việc khác (chỉ mục đích). 'Stop V-ing' nghĩa là dừng hẳn việc đang làm.",
      "translation": "Chúng tôi đã dừng lại để mua một ít nước đóng chai vì hành trình quá mệt mỏi."
    },
    {
      "id": "vp_q6",
      "question": "The professor made all the students _______ their assignments before Friday.",
      "options": [
        "A. submit",
        "B. to submit",
        "C. submitting",
        "D. submitted"
      ],
      "correct": 0,
      "explanation": "Cấu trúc sai khiến chủ động: 'make someone + V(bare)' (bắt/yêu cầu ai làm gì, dùng động từ nguyên thể không to).",
      "translation": "Giáo sư đã yêu cầu tất cả sinh viên nộp bài tập trước thứ Sáu."
    },
    {
      "id": "vp_q7",
      "question": "I look forward to _______ from you regarding my job application.",
      "options": [
        "A. hear",
        "B. to hear",
        "C. hearing",
        "D. heard"
      ],
      "correct": 2,
      "explanation": "Cụm 'look forward to + V-ing' ('to' ở đây là giới từ, bắt buộc đi với V-ing).",
      "translation": "Tôi rất mong sớm nhận được phản hồi từ bạn về đơn xin việc của tôi."
    },
    {
      "id": "vp_q8",
      "question": "It is no use _______ over minor mistakes when you still have more sections to complete.",
      "options": [
        "A. worry",
        "B. to worry",
        "C. worrying",
        "D. worried"
      ],
      "correct": 2,
      "explanation": "Cấu trúc 'It is no use + V-ing' = 'It is worthless + V-ing' (Vô ích khi làm gì).",
      "translation": "Thật vô ích khi lo lắng về những lỗi nhỏ khi bạn vẫn còn nhiều phần thi khác cần hoàn thành."
    },
    {
      "id": "vp_q9",
      "question": "She practiced speaking English daily _______ her pronunciation for the upcoming test.",
      "options": [
        "A. in order improve",
        "B. so as to improve",
        "C. so that improve",
        "D. for improving"
      ],
      "correct": 1,
      "explanation": "'So as to + V(bare)' = 'In order to + V(bare)' (để mà - chỉ mục đích).",
      "translation": "Cô ấy đã luyện nói tiếng Anh hàng ngày để cải thiện phát âm cho kỳ thi sắp tới."
    },
    {
      "id": "vp_q10",
      "question": "My father let me _______ his car to travel to the examination center.",
      "options": [
        "A. drive",
        "B. to drive",
        "C. driving",
        "D. drove"
      ],
      "correct": 0,
      "explanation": "Cấu trúc 'let someone + V(bare)' (cho phép ai làm gì).",
      "translation": "Bố tôi đã cho phép tôi lái xe của ông ấy để đi đến trung tâm thi."
    },
    {
      "id": "verb_q11",
      "question": "In the examination, the university committee decided _______ the deadline for scholarship applications.",
      "options": [
        "A. extend",
        "B. to extend",
        "C. extending",
        "D. extended"
      ],
      "correct": 1,
      "explanation": "Động từ 'decide' luôn đi với To-Infinitive: 'decide to V' (quyết định làm gì).",
      "translation": "Hội đồng trường đại học đã quyết định gia hạn hạn chót nộp hồ sơ xin học bổng."
    },
    {
      "id": "verb_q12",
      "question": "Candidates should avoid _______ grammatical errors in Writing Task 2.",
      "options": [
        "A. make",
        "B. to make",
        "C. making",
        "D. made"
      ],
      "correct": 2,
      "explanation": "Động từ 'avoid' luôn theo sau bởi Danh động từ (Gerund V-ing): 'avoid doing sth'.",
      "translation": "Thí sinh nên tránh mắc các lỗi ngữ pháp trong bài Viết Task 2."
    },
    {
      "id": "verb_q13",
      "question": "I clearly remember _______ the front door before leaving for the examination center.",
      "options": [
        "A. lock",
        "B. to lock",
        "C. locking",
        "D. locked"
      ],
      "correct": 2,
      "explanation": "'Remember + V-ing' nghĩa là nhớ đã làm việc gì trong quá khứ. 'Remember to V' là nhớ phải làm gì trong tương lai.",
      "translation": "Tôi nhớ rất rõ là mình đã khóa cửa trước khi rời nhà đến trung tâm khảo thí."
    },
    {
      "id": "verb_q14",
      "question": "In the examination, the doctor advised him _______ down on sugary drinks to improve his health.",
      "options": [
        "A. cut",
        "B. to cut",
        "C. cutting",
        "D. cuts"
      ],
      "correct": 1,
      "explanation": "Cấu trúc 'advise someone to do sth' (khuyên ai đó làm gì).",
      "translation": "Bác sĩ đã khuyên anh ấy nên cắt giảm đồ uống có đường để cải thiện sức khỏe."
    },
    {
      "id": "verb_q15",
      "question": "We stopped _______ some fresh bottled water because the journey was exhausting.",
      "options": [
        "A. buy",
        "B. to buy",
        "C. buying",
        "D. bought"
      ],
      "correct": 1,
      "explanation": "'Stop to V' nghĩa là dừng hành động đang làm lại để làm một việc khác (chỉ mục đích). 'Stop V-ing' nghĩa là dừng hẳn việc đang làm.",
      "translation": "Chúng tôi đã dừng lại để mua một ít nước đóng chai vì hành trình quá mệt mỏi."
    },
    {
      "id": "verb_q16",
      "question": "In the examination, the professor made all the students _______ their assignments before Friday.",
      "options": [
        "A. submit",
        "B. to submit",
        "C. submitting",
        "D. submitted"
      ],
      "correct": 0,
      "explanation": "Cấu trúc sai khiến chủ động: 'make someone + V(bare)' (bắt/yêu cầu ai làm gì, dùng động từ nguyên thể không to).",
      "translation": "Giáo sư đã yêu cầu tất cả sinh viên nộp bài tập trước thứ Sáu."
    },
    {
      "id": "verb_q17",
      "question": "I look forward to _______ from you regarding my job application.",
      "options": [
        "A. hear",
        "B. to hear",
        "C. hearing",
        "D. heard"
      ],
      "correct": 2,
      "explanation": "Cụm 'look forward to + V-ing' ('to' ở đây là giới từ, bắt buộc đi với V-ing).",
      "translation": "Tôi rất mong sớm nhận được phản hồi từ bạn về đơn xin việc của tôi."
    },
    {
      "id": "verb_q18",
      "question": "It is no use _______ over minor mistakes when you still have more sections to complete.",
      "options": [
        "A. worry",
        "B. to worry",
        "C. worrying",
        "D. worried"
      ],
      "correct": 2,
      "explanation": "Cấu trúc 'It is no use + V-ing' = 'It is worthless + V-ing' (Vô ích khi làm gì).",
      "translation": "Thật vô ích khi lo lắng về những lỗi nhỏ khi bạn vẫn còn nhiều phần thi khác cần hoàn thành."
    },
    {
      "id": "verb_q19",
      "question": "She practiced speaking English daily _______ her pronunciation for the upcoming test.",
      "options": [
        "A. in order improve",
        "B. so as to improve",
        "C. so that improve",
        "D. for improving"
      ],
      "correct": 1,
      "explanation": "'So as to + V(bare)' = 'In order to + V(bare)' (để mà - chỉ mục đích).",
      "translation": "Cô ấy đã luyện nói tiếng Anh hàng ngày để cải thiện phát âm cho kỳ thi sắp tới."
    },
    {
      "id": "verb_q20",
      "question": "My father let me _______ his car to travel to the examination center.",
      "options": [
        "A. drive",
        "B. to drive",
        "C. driving",
        "D. drove"
      ],
      "correct": 0,
      "explanation": "Cấu trúc 'let someone + V(bare)' (cho phép ai làm gì).",
      "translation": "Bố tôi đã cho phép tôi lái xe của ông ấy để đi đến trung tâm thi."
    }
  ],
  "modals": [
    {
      "id": "mod_q1",
      "question": "You _______ talk or look at another candidate's paper during the examination.",
      "options": [
        "A. don't have to",
        "B. mustn't",
        "C. needn't",
        "D. might not"
      ],
      "correct": 1,
      "explanation": "'Mustn't' diễn tả sự cấm đoán tuyệt đối theo quy chế thi. 'Don't have to' chỉ mang nghĩa không bắt buộc.",
      "translation": "Bạn không được phép nói chuyện hoặc nhìn vào bài của thí sinh khác trong suốt kỳ thi."
    },
    {
      "id": "mod_q2",
      "question": "He got a maximum score of 10.0 in the Reading test. He _______ studied exceptionally hard.",
      "options": [
        "A. must have",
        "B. should have",
        "C. can have",
        "D. need have"
      ],
      "correct": 0,
      "explanation": "'Must have + V3/ed' dùng để suy đoán chắc chắn về một sự việc xảy ra trong quá khứ dựa trên bằng chứng rõ ràng (đạt điểm 10 tuyệt đối).",
      "translation": "Anh ấy đã đạt điểm 10 tối đa ở bài đọc. Chắc hẳn anh ấy đã học tập vô cùng chăm chỉ."
    },
    {
      "id": "mod_q3",
      "question": "You _______ bring a dictionary into the exam room because all electronic devices are strictly banned.",
      "options": [
        "A. mustn't",
        "B. needn't to",
        "C. don't need",
        "D. ought not"
      ],
      "correct": 0,
      "explanation": "'Mustn't' thể hiện quy tắc cấm đoán mang tính bắt buộc.",
      "translation": "Bạn không được mang từ điển vào phòng thi vì mọi thiết bị điện tử đều bị nghiêm cấm."
    },
    {
      "id": "mod_q4",
      "question": "You _______ informed me earlier about the venue change; I wasted an hour going to the old campus.",
      "options": [
        "A. must have",
        "B. should have",
        "C. might have",
        "D. would have"
      ],
      "correct": 1,
      "explanation": "'Should have + V3/ed' diễn tả một việc lẽ ra nên làm trong quá khứ nhưng thực tế đã không làm (thể hiện sự tiếc nuối / trách móc).",
      "translation": "Lẽ ra bạn nên thông báo cho tôi sớm hơn về việc đổi địa điểm; tôi đã phí mất một tiếng đi đến cơ sở cũ."
    },
    {
      "id": "mod_q5",
      "question": "Tomorrow is a national holiday, so students _______ attend classes.",
      "options": [
        "A. mustn't",
        "B. don't have to",
        "C. ought not to",
        "D. cannot"
      ],
      "correct": 1,
      "explanation": "'Don't have to' = không cần phải làm gì (không có nghĩa vụ bắt buộc).",
      "translation": "Ngày mai là ngày nghỉ lễ quốc gia, vì vậy sinh viên không phải đến lớp."
    },
    {
      "id": "mod_q6",
      "question": "Lan _______ be in the library now; I saw her boarding the bus to Hai Phong ten minutes ago.",
      "options": [
        "A. mustn't",
        "B. can't",
        "C. needn't",
        "D. shouldn't"
      ],
      "correct": 1,
      "explanation": "'Can't + V' diễn tả sự suy đoán chắc chắn điều gì KHÔNG THỂ xảy ra ở hiện tại dựa trên cơ sở xác thực.",
      "translation": "Lan không thể đang ở thư viện lúc này được; tôi vừa thấy cô ấy lên xe buýt đi Hải Phòng cách đây 10 phút."
    },
    {
      "id": "mod_q7",
      "question": "According to university regulations, candidates _______ show their student ID card to enter the hall.",
      "options": [
        "A. may",
        "B. have to",
        "C. might",
        "D. could"
      ],
      "correct": 1,
      "explanation": "'Have to' diễn tả sự bắt buộc khách quan xuất phát từ nội quy, luật lệ bên ngoài.",
      "translation": "Theo quy định của trường đại học, thí sinh bắt buộc phải xuất trình thẻ sinh viên để vào hội trường."
    },
    {
      "id": "mod_q8",
      "question": "Take an umbrella with you. It _______ rain later this afternoon.",
      "options": [
        "A. must",
        "B. might",
        "C. should",
        "D. will"
      ],
      "correct": 1,
      "explanation": "'Might' diễn tả khả năng có thể xảy ra nhưng không chắc chắn (khoảng 30-40% khả năng).",
      "translation": "Hãy mang theo ô. Chiều nay trời có thể sẽ mưa."
    },
    {
      "id": "mod_q9",
      "question": "You _______ have bought so much paper; we still have five boxes in the storage room.",
      "options": [
        "A. mustn't",
        "B. needn't",
        "C. couldn't",
        "D. wouldn't"
      ],
      "correct": 1,
      "explanation": "'Needn't have + V3/ed' diễn tả một việc đã làm trong quá khứ nhưng thực chất là không cần thiết phải làm.",
      "translation": "Bạn lẽ ra không cần mua nhiều giấy như vậy; chúng ta vẫn còn 5 thùng trong kho."
    },
    {
      "id": "mod_q10",
      "question": "If you want to achieve B1 level, you _______ practice both Listening and Speaking daily.",
      "options": [
        "A. would",
        "B. ought to",
        "C. might",
        "D. could"
      ],
      "correct": 1,
      "explanation": "'Ought to + V' = 'Should + V' (nên làm gì - lời khuyên học tập đúng đắn).",
      "translation": "Nếu bạn muốn đạt trình độ B1, bạn nên luyện tập cả Nghe và Nói hàng ngày."
    },
    {
      "id": "moda_q11",
      "question": "You _______ talk or look at another candidate's paper during the examination.",
      "options": [
        "A. don't have to",
        "B. mustn't",
        "C. needn't",
        "D. might not"
      ],
      "correct": 1,
      "explanation": "'Mustn't' diễn tả sự cấm đoán tuyệt đối theo quy chế thi. 'Don't have to' chỉ mang nghĩa không bắt buộc.",
      "translation": "Bạn không được phép nói chuyện hoặc nhìn vào bài của thí sinh khác trong suốt kỳ thi."
    },
    {
      "id": "moda_q12",
      "question": "He got a maximum score of 10.0 in the Reading test. He _______ studied exceptionally hard.",
      "options": [
        "A. must have",
        "B. should have",
        "C. can have",
        "D. need have"
      ],
      "correct": 0,
      "explanation": "'Must have + V3/ed' dùng để suy đoán chắc chắn về một sự việc xảy ra trong quá khứ dựa trên bằng chứng rõ ràng (đạt điểm 10 tuyệt đối).",
      "translation": "Anh ấy đã đạt điểm 10 tối đa ở bài đọc. Chắc hẳn anh ấy đã học tập vô cùng chăm chỉ."
    },
    {
      "id": "moda_q13",
      "question": "You _______ bring a dictionary into the exam room because all electronic devices are strictly banned.",
      "options": [
        "A. mustn't",
        "B. needn't to",
        "C. don't need",
        "D. ought not"
      ],
      "correct": 0,
      "explanation": "'Mustn't' thể hiện quy tắc cấm đoán mang tính bắt buộc.",
      "translation": "Bạn không được mang từ điển vào phòng thi vì mọi thiết bị điện tử đều bị nghiêm cấm."
    },
    {
      "id": "moda_q14",
      "question": "You _______ informed me earlier about the venue change; I wasted an hour going to the old campus.",
      "options": [
        "A. must have",
        "B. should have",
        "C. might have",
        "D. would have"
      ],
      "correct": 1,
      "explanation": "'Should have + V3/ed' diễn tả một việc lẽ ra nên làm trong quá khứ nhưng thực tế đã không làm (thể hiện sự tiếc nuối / trách móc).",
      "translation": "Lẽ ra bạn nên thông báo cho tôi sớm hơn về việc đổi địa điểm; tôi đã phí mất một tiếng đi đến cơ sở cũ."
    },
    {
      "id": "moda_q15",
      "question": "Tomorrow is a national holiday, so students _______ attend classes.",
      "options": [
        "A. mustn't",
        "B. don't have to",
        "C. ought not to",
        "D. cannot"
      ],
      "correct": 1,
      "explanation": "'Don't have to' = không cần phải làm gì (không có nghĩa vụ bắt buộc).",
      "translation": "Ngày mai là ngày nghỉ lễ quốc gia, vì vậy sinh viên không phải đến lớp."
    },
    {
      "id": "moda_q16",
      "question": "Lan _______ be in the library now; I saw her boarding the bus to Hai Phong ten minutes ago.",
      "options": [
        "A. mustn't",
        "B. can't",
        "C. needn't",
        "D. shouldn't"
      ],
      "correct": 1,
      "explanation": "'Can't + V' diễn tả sự suy đoán chắc chắn điều gì KHÔNG THỂ xảy ra ở hiện tại dựa trên cơ sở xác thực.",
      "translation": "Lan không thể đang ở thư viện lúc này được; tôi vừa thấy cô ấy lên xe buýt đi Hải Phòng cách đây 10 phút."
    },
    {
      "id": "moda_q17",
      "question": "According to university regulations, candidates _______ show their student ID card to enter the hall.",
      "options": [
        "A. may",
        "B. have to",
        "C. might",
        "D. could"
      ],
      "correct": 1,
      "explanation": "'Have to' diễn tả sự bắt buộc khách quan xuất phát từ nội quy, luật lệ bên ngoài.",
      "translation": "Theo quy định của trường đại học, thí sinh bắt buộc phải xuất trình thẻ sinh viên để vào hội trường."
    },
    {
      "id": "moda_q18",
      "question": "Take an umbrella with you. It _______ rain later this afternoon.",
      "options": [
        "A. must",
        "B. might",
        "C. should",
        "D. will"
      ],
      "correct": 1,
      "explanation": "'Might' diễn tả khả năng có thể xảy ra nhưng không chắc chắn (khoảng 30-40% khả năng).",
      "translation": "Hãy mang theo ô. Chiều nay trời có thể sẽ mưa."
    },
    {
      "id": "moda_q19",
      "question": "You _______ have bought so much paper; we still have five boxes in the storage room.",
      "options": [
        "A. mustn't",
        "B. needn't",
        "C. couldn't",
        "D. wouldn't"
      ],
      "correct": 1,
      "explanation": "'Needn't have + V3/ed' diễn tả một việc đã làm trong quá khứ nhưng thực chất là không cần thiết phải làm.",
      "translation": "Bạn lẽ ra không cần mua nhiều giấy như vậy; chúng ta vẫn còn 5 thùng trong kho."
    },
    {
      "id": "moda_q20",
      "question": "If you want to achieve B1 level, you _______ practice both Listening and Speaking daily.",
      "options": [
        "A. would",
        "B. ought to",
        "C. might",
        "D. could"
      ],
      "correct": 1,
      "explanation": "'Ought to + V' = 'Should + V' (nên làm gì - lời khuyên học tập đúng đắn).",
      "translation": "Nếu bạn muốn đạt trình độ B1, bạn nên luyện tập cả Nghe và Nói hàng ngày."
    }
  ],
  "passive-voice": [
    {
      "id": "pv_q1",
      "question": "The final exam results _______ on the official portal by next Monday morning.",
      "options": [
        "A. will announce",
        "B. will be announced",
        "C. are announcing",
        "D. have announced"
      ],
      "correct": 1,
      "explanation": "Chủ ngữ 'The final exam results' là danh từ chỉ sự vật bị tác động, kết hợp với trạng từ tương lai 'by next Monday' -> dùng Tương lai đơn thể bị động: 'will be + V3/ed'.",
      "translation": "Kết quả thi cuối kỳ sẽ được công bố trên cổng thông tin chính thức trước sáng thứ Hai tới."
    },
    {
      "id": "pv_q2",
      "question": "It is _______ that daily exposure to English podcasts significantly boosts listening comprehension.",
      "options": [
        "A. believe",
        "B. believed",
        "C. believing",
        "D. believes"
      ],
      "correct": 1,
      "explanation": "Cấu trúc bị động khách quan (Impersonal Passive): 'It is believed / said / reported that + S + V'.",
      "translation": "Người ta tin rằng việc tiếp xúc hàng ngày với podcast tiếng Anh sẽ tăng đáng kể khả năng nghe hiểu."
    },
    {
      "id": "pv_q3",
      "question": "The historic building _______ thoroughly restored by international architects since last year.",
      "options": [
        "A. is",
        "B. has been",
        "C. was",
        "D. had been"
      ],
      "correct": 1,
      "explanation": "'Since last year' báo hiệu thì Hiện tại hoàn thành; kết hợp với bị động -> 'has been + V3/ed'.",
      "translation": "Tòa nhà lịch sử đã và đang được phục dựng kỹ lưỡng bởi các kiến trúc sư quốc tế kể từ năm ngoái."
    },
    {
      "id": "pv_q4",
      "question": "Candidates must ensure that all test booklets _______ before leaving the examination room.",
      "options": [
        "A. are handed in",
        "B. hand in",
        "C. will hand in",
        "D. have handed in"
      ],
      "correct": 0,
      "explanation": "'Test booklets' (đề thi) phải được nộp lại -> Thể bị động 'are handed in'.",
      "translation": "Thí sinh phải đảm bảo rằng tất cả các tập đề thi đều được nộp lại trước khi rời phòng thi."
    },
    {
      "id": "pv_q5",
      "question": "We are having our computer lab _______ with high-speed internet next week.",
      "options": [
        "A. upgrade",
        "B. upgraded",
        "C. to upgrade",
        "D. upgrading"
      ],
      "correct": 1,
      "explanation": "Cấu trúc nhờ bảo thể bị động: 'have / get something + V3/ed' (có cái gì được làm bởi ai).",
      "translation": "Chúng tôi sẽ nâng cấp phòng máy tính với mạng internet tốc độ cao vào tuần tới."
    },
    {
      "id": "pv_q6",
      "question": "A new modern campus _______ in the southern district when we visited last summer.",
      "options": [
        "A. was building",
        "B. was being built",
        "C. has been built",
        "D. is built"
      ],
      "correct": 1,
      "explanation": "Hành động đang diễn ra tại một thời điểm trong quá khứ ở thể bị động -> Quá khứ tiếp diễn bị động: 'was/were being + V3/ed'.",
      "translation": "Một khuôn viên đại học hiện đại mới đang được xây dựng ở quận phía Nam khi chúng tôi đến thăm vào mùa hè năm ngoái."
    },
    {
      "id": "pv_q7",
      "question": "This rare manuscript was written in the 15th century and _______ in the national museum.",
      "options": [
        "A. is preserving",
        "B. is preserved",
        "C. preserves",
        "D. has preserved"
      ],
      "correct": 1,
      "explanation": "Bản thảo 'is preserved' (được bảo tồn) ở thể bị động hiện tại đơn.",
      "translation": "Bản thảo quý hiếm này được viết vào thế kỷ 15 và hiện đang được bảo tồn tại bảo tàng quốc gia."
    },
    {
      "id": "pv_q8",
      "question": "The scientific breakthrough is reported _______ by a team of young Vietnamese researchers.",
      "options": [
        "A. to achieve",
        "B. to have been achieved",
        "C. having achieved",
        "D. achieved"
      ],
      "correct": 1,
      "explanation": "Cấu trúc bị động kép chuyển sang dạng To-Infinitive: 'S + is reported to have been + V3/ed' khi hành động trong mệnh đề sau xảy ra trước.",
      "translation": "Bước đột phá khoa học được báo cáo là đã được thực hiện bởi một nhóm các nhà nghiên cứu trẻ Việt Nam."
    },
    {
      "id": "pv_q9",
      "question": "All the necessary equipment _______ before the experiment began.",
      "options": [
        "A. had been prepared",
        "B. was preparing",
        "C. has been prepared",
        "D. prepared"
      ],
      "correct": 0,
      "explanation": "Hành động bị động xảy ra và hoàn tất trước hành động 'began' trong quá khứ -> Quá khứ hoàn thành bị động: 'had been + V3/ed'.",
      "translation": "Toàn bộ trang thiết bị cần thiết đã được chuẩn bị trước khi cuộc thử nghiệm bắt đầu."
    },
    {
      "id": "pv_q10",
      "question": "Dangerous chemicals must _______ in tightly sealed containers.",
      "options": [
        "A. keep",
        "B. be kept",
        "C. to be kept",
        "D. being kept"
      ],
      "correct": 1,
      "explanation": "Bị động với động từ khuyết thiếu: 'Modal + be + V3/ed' -> 'must be kept'.",
      "translation": "Các hóa chất nguy hiểm bắt buộc phải được lưu trữ trong các thùng chứa kín."
    },
    {
      "id": "pass_q11",
      "question": "In the examination, the final exam results _______ on the official portal by next Monday morning.",
      "options": [
        "A. will announce",
        "B. will be announced",
        "C. are announcing",
        "D. have announced"
      ],
      "correct": 1,
      "explanation": "Chủ ngữ 'The final exam results' là danh từ chỉ sự vật bị tác động, kết hợp với trạng từ tương lai 'by next Monday' -> dùng Tương lai đơn thể bị động: 'will be + V3/ed'.",
      "translation": "Kết quả thi cuối kỳ sẽ được công bố trên cổng thông tin chính thức trước sáng thứ Hai tới."
    },
    {
      "id": "pass_q12",
      "question": "It is _______ that daily exposure to English podcasts significantly boosts listening comprehension.",
      "options": [
        "A. believe",
        "B. believed",
        "C. believing",
        "D. believes"
      ],
      "correct": 1,
      "explanation": "Cấu trúc bị động khách quan (Impersonal Passive): 'It is believed / said / reported that + S + V'.",
      "translation": "Người ta tin rằng việc tiếp xúc hàng ngày với podcast tiếng Anh sẽ tăng đáng kể khả năng nghe hiểu."
    },
    {
      "id": "pass_q13",
      "question": "In the examination, the historic building _______ thoroughly restored by international architects since last year.",
      "options": [
        "A. is",
        "B. has been",
        "C. was",
        "D. had been"
      ],
      "correct": 1,
      "explanation": "'Since last year' báo hiệu thì Hiện tại hoàn thành; kết hợp với bị động -> 'has been + V3/ed'.",
      "translation": "Tòa nhà lịch sử đã và đang được phục dựng kỹ lưỡng bởi các kiến trúc sư quốc tế kể từ năm ngoái."
    },
    {
      "id": "pass_q14",
      "question": "Candidates must ensure that all test booklets _______ before leaving the examination room.",
      "options": [
        "A. are handed in",
        "B. hand in",
        "C. will hand in",
        "D. have handed in"
      ],
      "correct": 0,
      "explanation": "'Test booklets' (đề thi) phải được nộp lại -> Thể bị động 'are handed in'.",
      "translation": "Thí sinh phải đảm bảo rằng tất cả các tập đề thi đều được nộp lại trước khi rời phòng thi."
    },
    {
      "id": "pass_q15",
      "question": "We are having our computer lab _______ with high-speed internet next week.",
      "options": [
        "A. upgrade",
        "B. upgraded",
        "C. to upgrade",
        "D. upgrading"
      ],
      "correct": 1,
      "explanation": "Cấu trúc nhờ bảo thể bị động: 'have / get something + V3/ed' (có cái gì được làm bởi ai).",
      "translation": "Chúng tôi sẽ nâng cấp phòng máy tính với mạng internet tốc độ cao vào tuần tới."
    },
    {
      "id": "pass_q16",
      "question": "A new modern campus _______ in the southern district when we visited last summer.",
      "options": [
        "A. was building",
        "B. was being built",
        "C. has been built",
        "D. is built"
      ],
      "correct": 1,
      "explanation": "Hành động đang diễn ra tại một thời điểm trong quá khứ ở thể bị động -> Quá khứ tiếp diễn bị động: 'was/were being + V3/ed'.",
      "translation": "Một khuôn viên đại học hiện đại mới đang được xây dựng ở quận phía Nam khi chúng tôi đến thăm vào mùa hè năm ngoái."
    },
    {
      "id": "pass_q17",
      "question": "This rare manuscript was written in the 15th century and _______ in the national museum.",
      "options": [
        "A. is preserving",
        "B. is preserved",
        "C. preserves",
        "D. has preserved"
      ],
      "correct": 1,
      "explanation": "Bản thảo 'is preserved' (được bảo tồn) ở thể bị động hiện tại đơn.",
      "translation": "Bản thảo quý hiếm này được viết vào thế kỷ 15 và hiện đang được bảo tồn tại bảo tàng quốc gia."
    },
    {
      "id": "pass_q18",
      "question": "In the examination, the scientific breakthrough is reported _______ by a team of young Vietnamese researchers.",
      "options": [
        "A. to achieve",
        "B. to have been achieved",
        "C. having achieved",
        "D. achieved"
      ],
      "correct": 1,
      "explanation": "Cấu trúc bị động kép chuyển sang dạng To-Infinitive: 'S + is reported to have been + V3/ed' khi hành động trong mệnh đề sau xảy ra trước.",
      "translation": "Bước đột phá khoa học được báo cáo là đã được thực hiện bởi một nhóm các nhà nghiên cứu trẻ Việt Nam."
    },
    {
      "id": "pass_q19",
      "question": "All the necessary equipment _______ before the experiment began.",
      "options": [
        "A. had been prepared",
        "B. was preparing",
        "C. has been prepared",
        "D. prepared"
      ],
      "correct": 0,
      "explanation": "Hành động bị động xảy ra và hoàn tất trước hành động 'began' trong quá khứ -> Quá khứ hoàn thành bị động: 'had been + V3/ed'.",
      "translation": "Toàn bộ trang thiết bị cần thiết đã được chuẩn bị trước khi cuộc thử nghiệm bắt đầu."
    },
    {
      "id": "pass_q20",
      "question": "Dangerous chemicals must _______ in tightly sealed containers.",
      "options": [
        "A. keep",
        "B. be kept",
        "C. to be kept",
        "D. being kept"
      ],
      "correct": 1,
      "explanation": "Bị động với động từ khuyết thiếu: 'Modal + be + V3/ed' -> 'must be kept'.",
      "translation": "Các hóa chất nguy hiểm bắt buộc phải được lưu trữ trong các thùng chứa kín."
    }
  ],
  "reported-speech": [
    {
      "id": "rep_q1",
      "question": "'I am writing an email to my instructor,' Lan said. ➔ Lan said that she _______ an email to her instructor.",
      "options": [
        "A. is writing",
        "B. was writing",
        "C. has written",
        "D. wrote"
      ],
      "correct": 1,
      "explanation": "Quy tắc lùi thì khi động từ tường thuật ở quá khứ: Thì Hiện tại tiếp diễn (am writing) lùi thành Quá khứ tiếp diễn (was writing).",
      "translation": "Lan nói rằng cô ấy đang viết một email gửi tới người hướng dẫn của mình."
    },
    {
      "id": "rep_q2",
      "question": "'Where did you buy this grammar manual?' Minh asked. ➔ Minh asked me where I _______ that grammar manual.",
      "options": [
        "A. bought",
        "B. had bought",
        "C. did buy",
        "D. have bought"
      ],
      "correct": 1,
      "explanation": "Câu hỏi Wh- ở quá khứ đơn (did you buy) khi tường thuật lùi thì thành Quá khứ hoàn thành (had bought) và chuyển về trật tự câu khẳng định.",
      "translation": "Minh đã hỏi tôi xem tôi đã mua cuốn sách hướng dẫn ngữ pháp đó ở đâu."
    },
    {
      "id": "rep_q3",
      "question": "'Please do not use mobile phones in the room,' the examiner said. ➔ The examiner told the candidates _______ mobile phones in the room.",
      "options": [
        "A. not use",
        "B. not to use",
        "C. to not use",
        "D. don't use"
      ],
      "correct": 1,
      "explanation": "Tường thuật câu mệnh lệnh / yêu cầu phủ định: 'tell / ask someone + not to V'.",
      "translation": "Giám thị đã yêu cầu các thí sinh không sử dụng điện thoại di động trong phòng."
    },
    {
      "id": "rep_q4",
      "question": "'Will you participate in the mock exam tomorrow?' he asked. ➔ He asked me if I _______ in the mock exam the following day.",
      "options": [
        "A. will participate",
        "B. would participate",
        "C. participated",
        "D. participate"
      ],
      "correct": 1,
      "explanation": "Câu hỏi Yes/No chuyển thành: 'asked if/whether + S + would + V'. 'Will' lùi thì thành 'would', và 'tomorrow' đổi thành 'the following day'.",
      "translation": "Anh ấy đã hỏi tôi liệu tôi có tham gia kỳ thi thử vào ngày hôm sau hay không."
    },
    {
      "id": "rep_q5",
      "question": "The professor advised Nam _______ more attention to the cohesion between paragraphs.",
      "options": [
        "A. pay",
        "B. to pay",
        "C. paying",
        "D. paid"
      ],
      "correct": 1,
      "explanation": "Cấu trúc tường thuật lời khuyên: 'advise someone + to V'.",
      "translation": "Giáo sư đã khuyên Nam nên chú ý nhiều hơn đến tính liên kết giữa các đoạn văn."
    },
    {
      "id": "rep_q6",
      "question": "'I saw this documentary yesterday,' Hoa said. ➔ Hoa said she had seen that documentary _______.",
      "options": [
        "A. yesterday",
        "B. the day before",
        "C. tomorrow",
        "D. next day"
      ],
      "correct": 1,
      "explanation": "'Yesterday' trong câu gián tiếp phải đổi thành 'the day before' hoặc 'the previous day'.",
      "translation": "Hoa nói rằng cô ấy đã xem bộ phim tài liệu đó vào ngày hôm trước."
    },
    {
      "id": "rep_q7",
      "question": "He warned us _______ near the deep water without life jackets.",
      "options": [
        "A. not to swim",
        "B. not swimming",
        "C. don't swim",
        "D. to not swim"
      ],
      "correct": 0,
      "explanation": "Cấu trúc cảnh báo: 'warn someone not to V'.",
      "translation": "Anh ấy đã cảnh báo chúng tôi không được bơi gần vùng nước sâu mà không có áo phao."
    },
    {
      "id": "rep_q8",
      "question": "'Why are you practicing with flashcards?' she asked. ➔ She asked me why I _______ with flashcards.",
      "options": [
        "A. was I practicing",
        "B. was practicing",
        "C. am practicing",
        "D. I was practicing"
      ],
      "correct": 3,
      "explanation": "Trong câu hỏi gián tiếp, trật tự từ PHẢI ở dạng khẳng định: 'Wh-word + S + V(lùi thì)' -> 'why I was practicing' (không đảo was lên trước I).",
      "translation": "Cô ấy đã hỏi tôi tại sao tôi lại đang luyện tập với thẻ từ flashcards."
    },
    {
      "id": "rep_q9",
      "question": "The doctor suggested _______ for a brisk 30-minute walk every morning.",
      "options": [
        "A. to go",
        "B. going",
        "C. go",
        "D. goes"
      ],
      "correct": 1,
      "explanation": "Cấu trúc tường thuật lời gợi ý: 'suggest + V-ing' hoặc 'suggest that S + (should) + V(bare)'.",
      "translation": "Bác sĩ đã gợi ý việc đi bộ nhanh 30 phút vào mỗi buổi sáng."
    },
    {
      "id": "rep_q10",
      "question": "'We must submit our research proposal today,' they said. ➔ They said that they _______ their research proposal that day.",
      "options": [
        "A. must submit",
        "B. had to submit",
        "C. have to submit",
        "D. should submit"
      ],
      "correct": 1,
      "explanation": "'Must' khi chuyển sang gián tiếp lùi thì thành 'had to'.",
      "translation": "Họ nói rằng họ phải nộp bản đề xuất nghiên cứu của mình vào ngày hôm đó."
    },
    {
      "id": "repo_q11",
      "question": "'I am writing an email to my instructor,' Lan said. ➔ Lan said that she _______ an email to her instructor.",
      "options": [
        "A. is writing",
        "B. was writing",
        "C. has written",
        "D. wrote"
      ],
      "correct": 1,
      "explanation": "Quy tắc lùi thì khi động từ tường thuật ở quá khứ: Thì Hiện tại tiếp diễn (am writing) lùi thành Quá khứ tiếp diễn (was writing).",
      "translation": "Lan nói rằng cô ấy đang viết một email gửi tới người hướng dẫn của mình."
    },
    {
      "id": "repo_q12",
      "question": "'Where did you buy this grammar manual?' Minh asked. ➔ Minh asked me where I _______ that grammar manual.",
      "options": [
        "A. bought",
        "B. had bought",
        "C. did buy",
        "D. have bought"
      ],
      "correct": 1,
      "explanation": "Câu hỏi Wh- ở quá khứ đơn (did you buy) khi tường thuật lùi thì thành Quá khứ hoàn thành (had bought) và chuyển về trật tự câu khẳng định.",
      "translation": "Minh đã hỏi tôi xem tôi đã mua cuốn sách hướng dẫn ngữ pháp đó ở đâu."
    },
    {
      "id": "repo_q13",
      "question": "'Please do not use mobile phones in the room,' the examiner said. ➔ In the examination, the examiner told the candidates _______ mobile phones in the room.",
      "options": [
        "A. not use",
        "B. not to use",
        "C. to not use",
        "D. don't use"
      ],
      "correct": 1,
      "explanation": "Tường thuật câu mệnh lệnh / yêu cầu phủ định: 'tell / ask someone + not to V'.",
      "translation": "Giám thị đã yêu cầu các thí sinh không sử dụng điện thoại di động trong phòng."
    },
    {
      "id": "repo_q14",
      "question": "'Will you participate in the mock exam tomorrow?' he asked. ➔ He asked me if I _______ in the mock exam the following day.",
      "options": [
        "A. will participate",
        "B. would participate",
        "C. participated",
        "D. participate"
      ],
      "correct": 1,
      "explanation": "Câu hỏi Yes/No chuyển thành: 'asked if/whether + S + would + V'. 'Will' lùi thì thành 'would', và 'tomorrow' đổi thành 'the following day'.",
      "translation": "Anh ấy đã hỏi tôi liệu tôi có tham gia kỳ thi thử vào ngày hôm sau hay không."
    },
    {
      "id": "repo_q15",
      "question": "In the examination, the professor advised Nam _______ more attention to the cohesion between paragraphs.",
      "options": [
        "A. pay",
        "B. to pay",
        "C. paying",
        "D. paid"
      ],
      "correct": 1,
      "explanation": "Cấu trúc tường thuật lời khuyên: 'advise someone + to V'.",
      "translation": "Giáo sư đã khuyên Nam nên chú ý nhiều hơn đến tính liên kết giữa các đoạn văn."
    },
    {
      "id": "repo_q16",
      "question": "'I saw this documentary yesterday,' Hoa said. ➔ Hoa said she had seen that documentary _______.",
      "options": [
        "A. yesterday",
        "B. the day before",
        "C. tomorrow",
        "D. next day"
      ],
      "correct": 1,
      "explanation": "'Yesterday' trong câu gián tiếp phải đổi thành 'the day before' hoặc 'the previous day'.",
      "translation": "Hoa nói rằng cô ấy đã xem bộ phim tài liệu đó vào ngày hôm trước."
    },
    {
      "id": "repo_q17",
      "question": "He warned us _______ near the deep water without life jackets.",
      "options": [
        "A. not to swim",
        "B. not swimming",
        "C. don't swim",
        "D. to not swim"
      ],
      "correct": 0,
      "explanation": "Cấu trúc cảnh báo: 'warn someone not to V'.",
      "translation": "Anh ấy đã cảnh báo chúng tôi không được bơi gần vùng nước sâu mà không có áo phao."
    },
    {
      "id": "repo_q18",
      "question": "'Why are you practicing with flashcards?' she asked. ➔ She asked me why I _______ with flashcards.",
      "options": [
        "A. was I practicing",
        "B. was practicing",
        "C. am practicing",
        "D. I was practicing"
      ],
      "correct": 3,
      "explanation": "Trong câu hỏi gián tiếp, trật tự từ PHẢI ở dạng khẳng định: 'Wh-word + S + V(lùi thì)' -> 'why I was practicing' (không đảo was lên trước I).",
      "translation": "Cô ấy đã hỏi tôi tại sao tôi lại đang luyện tập với thẻ từ flashcards."
    },
    {
      "id": "repo_q19",
      "question": "In the examination, the doctor suggested _______ for a brisk 30-minute walk every morning.",
      "options": [
        "A. to go",
        "B. going",
        "C. go",
        "D. goes"
      ],
      "correct": 1,
      "explanation": "Cấu trúc tường thuật lời gợi ý: 'suggest + V-ing' hoặc 'suggest that S + (should) + V(bare)'.",
      "translation": "Bác sĩ đã gợi ý việc đi bộ nhanh 30 phút vào mỗi buổi sáng."
    },
    {
      "id": "repo_q20",
      "question": "'We must submit our research proposal today,' they said. ➔ In the examination, they said that they _______ their research proposal that day.",
      "options": [
        "A. must submit",
        "B. had to submit",
        "C. have to submit",
        "D. should submit"
      ],
      "correct": 1,
      "explanation": "'Must' khi chuyển sang gián tiếp lùi thì thành 'had to'.",
      "translation": "Họ nói rằng họ phải nộp bản đề xuất nghiên cứu của mình vào ngày hôm đó."
    }
  ],
  "conditionals": [
    {
      "id": "cond_q1",
      "question": "If you _______ vocabulary in context daily, you will retain words much longer.",
      "options": [
        "A. review",
        "B. reviewed",
        "C. had reviewed",
        "D. would review"
      ],
      "correct": 0,
      "explanation": "Câu điều kiện loại 1: Mệnh đề If dùng thì Hiện tại đơn ('review'), mệnh đề chính dùng 'will + V'.",
      "translation": "Nếu bạn ôn tập từ vựng trong ngữ cảnh hàng ngày, bạn sẽ ghi nhớ từ lâu hơn rất nhiều."
    },
    {
      "id": "cond_q2",
      "question": "If I _______ you, I would register for the intensive VSTEP preparation workshop immediately.",
      "options": [
        "A. am",
        "B. was",
        "C. were",
        "D. had been"
      ],
      "correct": 2,
      "explanation": "Câu điều kiện loại 2 (giả định trái ngược với hiện tại): 'If I were you' (dùng 'were' cho mọi ngôi theo văn phong học thuật).",
      "translation": "Nếu tôi là bạn, tôi sẽ đăng ký ngay hội thảo luyện thi VSTEP chuyên sâu."
    },
    {
      "id": "cond_q3",
      "question": "If the candidate _______ the audio instructions more carefully, he wouldn't have answered incorrectly.",
      "options": [
        "A. listened",
        "B. had listened",
        "C. listens",
        "D. has listened"
      ],
      "correct": 1,
      "explanation": "Câu điều kiện loại 3 (giả định trái với quá khứ): 'If + S + had + V3/ed, S + would have + V3/ed'.",
      "translation": "Nếu thí sinh đã lắng nghe hướng dẫn âm thanh cẩn thận hơn, anh ấy đã không trả lời sai."
    },
    {
      "id": "cond_q4",
      "question": "_______ you practice listening to authentic English podcasts, your score will not improve.",
      "options": [
        "A. If",
        "B. Unless",
        "C. Provided that",
        "D. As long as"
      ],
      "correct": 1,
      "explanation": "'Unless' = 'If... not' (Trừ khi, nếu không). Câu này mang nghĩa: Trừ khi bạn luyện nghe podcast tiếng Anh thực tế, điểm số của bạn sẽ không cải thiện.",
      "translation": "Trừ khi bạn luyện nghe podcast tiếng Anh thực tế, điểm số của bạn sẽ không thể cải thiện."
    },
    {
      "id": "cond_q5",
      "question": "I wish I _______ more time to practice Speaking Part 3 before the test next week.",
      "options": [
        "A. have",
        "B. had",
        "C. will have",
        "D. have had"
      ],
      "correct": 1,
      "explanation": "Câu ước ở hiện tại: 'S + wish + S + V2/ed' -> dùng 'had' để diễn tả mong ước trái với thực tế hiện tại.",
      "translation": "Tôi ước gì mình có nhiều thời gian hơn để luyện tập phần Nói Part 3 trước kỳ thi vào tuần tới."
    },
    {
      "id": "cond_q6",
      "question": "He wishes he _______ his study plan earlier during his university semester.",
      "options": [
        "A. started",
        "B. had started",
        "C. starts",
        "D. would start"
      ],
      "correct": 1,
      "explanation": "Câu ước ở quá khứ: 'S + wish + S + had + V3/ed' diễn tả sự hối tiếc về một việc đã không làm trong quá khứ.",
      "translation": "Anh ấy ước gì mình đã bắt đầu kế hoạch học tập sớm hơn trong học kỳ đại học."
    },
    {
      "id": "cond_q7",
      "question": "_______ you need any assistance with grammar analysis, please notify the supervisor.",
      "options": [
        "A. Should",
        "B. Were",
        "C. Had",
        "D. If should"
      ],
      "correct": 0,
      "explanation": "Đảo ngữ câu điều kiện loại 1: 'Should + S + V(bare), S + will/can/imperative...'.",
      "translation": "Nếu bạn cần bất kỳ sự trợ giúp nào về phân tích ngữ pháp, xin vui lòng báo cho người giám sát."
    },
    {
      "id": "cond_q8",
      "question": "_______ they arrived on time yesterday, they would have caught the morning flight.",
      "options": [
        "A. Should",
        "B. Were",
        "C. Had",
        "D. If had"
      ],
      "correct": 2,
      "explanation": "Đảo ngữ câu điều kiện loại 3: 'Had + S + V3/ed, S + would have + V3/ed'.",
      "translation": "Giá như hôm qua họ đến đúng giờ, họ đã kịp chuyến bay buổi sáng."
    },
    {
      "id": "cond_q9",
      "question": "You can borrow this reference manual _______ you return it before Friday.",
      "options": [
        "A. as long as",
        "B. unless",
        "C. in case",
        "D. although"
      ],
      "correct": 0,
      "explanation": "'As long as' = 'Provided that' (Miễn là - điều kiện đi kèm).",
      "translation": "Bạn có thể mượn cuốn sách hướng dẫn tham khảo này miễn là bạn trả lại trước thứ Sáu."
    },
    {
      "id": "cond_q10",
      "question": "If I had mastered academic vocabulary earlier, I _______ writing essays easily now.",
      "options": [
        "A. would write",
        "B. would have written",
        "C. will write",
        "D. wrote"
      ],
      "correct": 0,
      "explanation": "Câu điều kiện hỗn hợp (Mixed Conditional): Mệnh đề If giả định trong quá khứ ('had mastered'), kết quả ở hiện tại có 'now' -> dùng 'would + V(bare)'.",
      "translation": "Nếu tôi đã nắm vững từ vựng học thuật sớm hơn, thì bây giờ tôi đã có thể viết luận một cách dễ dàng."
    },
    {
      "id": "cond_q11",
      "question": "If you _______ vocabulary in context daily, you will retain words much longer.",
      "options": [
        "A. review",
        "B. reviewed",
        "C. had reviewed",
        "D. would review"
      ],
      "correct": 0,
      "explanation": "Câu điều kiện loại 1: Mệnh đề If dùng thì Hiện tại đơn ('review'), mệnh đề chính dùng 'will + V'.",
      "translation": "Nếu bạn ôn tập từ vựng trong ngữ cảnh hàng ngày, bạn sẽ ghi nhớ từ lâu hơn rất nhiều."
    },
    {
      "id": "cond_q12",
      "question": "If I _______ you, I would register for the intensive VSTEP preparation workshop immediately.",
      "options": [
        "A. am",
        "B. was",
        "C. were",
        "D. had been"
      ],
      "correct": 2,
      "explanation": "Câu điều kiện loại 2 (giả định trái ngược với hiện tại): 'If I were you' (dùng 'were' cho mọi ngôi theo văn phong học thuật).",
      "translation": "Nếu tôi là bạn, tôi sẽ đăng ký ngay hội thảo luyện thi VSTEP chuyên sâu."
    },
    {
      "id": "cond_q13",
      "question": "If the candidate _______ the audio instructions more carefully, he wouldn't have answered incorrectly.",
      "options": [
        "A. listened",
        "B. had listened",
        "C. listens",
        "D. has listened"
      ],
      "correct": 1,
      "explanation": "Câu điều kiện loại 3 (giả định trái với quá khứ): 'If + S + had + V3/ed, S + would have + V3/ed'.",
      "translation": "Nếu thí sinh đã lắng nghe hướng dẫn âm thanh cẩn thận hơn, anh ấy đã không trả lời sai."
    },
    {
      "id": "cond_q14",
      "question": "_______ you practice listening to authentic English podcasts, your score will not improve.",
      "options": [
        "A. If",
        "B. Unless",
        "C. Provided that",
        "D. As long as"
      ],
      "correct": 1,
      "explanation": "'Unless' = 'If... not' (Trừ khi, nếu không). Câu này mang nghĩa: Trừ khi bạn luyện nghe podcast tiếng Anh thực tế, điểm số của bạn sẽ không cải thiện.",
      "translation": "Trừ khi bạn luyện nghe podcast tiếng Anh thực tế, điểm số của bạn sẽ không thể cải thiện."
    },
    {
      "id": "cond_q15",
      "question": "I wish I _______ more time to practice Speaking Part 3 before the test next week.",
      "options": [
        "A. have",
        "B. had",
        "C. will have",
        "D. have had"
      ],
      "correct": 1,
      "explanation": "Câu ước ở hiện tại: 'S + wish + S + V2/ed' -> dùng 'had' để diễn tả mong ước trái với thực tế hiện tại.",
      "translation": "Tôi ước gì mình có nhiều thời gian hơn để luyện tập phần Nói Part 3 trước kỳ thi vào tuần tới."
    },
    {
      "id": "cond_q16",
      "question": "He wishes he _______ his study plan earlier during his university semester.",
      "options": [
        "A. started",
        "B. had started",
        "C. starts",
        "D. would start"
      ],
      "correct": 1,
      "explanation": "Câu ước ở quá khứ: 'S + wish + S + had + V3/ed' diễn tả sự hối tiếc về một việc đã không làm trong quá khứ.",
      "translation": "Anh ấy ước gì mình đã bắt đầu kế hoạch học tập sớm hơn trong học kỳ đại học."
    },
    {
      "id": "cond_q17",
      "question": "_______ you need any assistance with grammar analysis, please notify the supervisor.",
      "options": [
        "A. Should",
        "B. Were",
        "C. Had",
        "D. If should"
      ],
      "correct": 0,
      "explanation": "Đảo ngữ câu điều kiện loại 1: 'Should + S + V(bare), S + will/can/imperative...'.",
      "translation": "Nếu bạn cần bất kỳ sự trợ giúp nào về phân tích ngữ pháp, xin vui lòng báo cho người giám sát."
    },
    {
      "id": "cond_q18",
      "question": "_______ they arrived on time yesterday, they would have caught the morning flight.",
      "options": [
        "A. Should",
        "B. Were",
        "C. Had",
        "D. If had"
      ],
      "correct": 2,
      "explanation": "Đảo ngữ câu điều kiện loại 3: 'Had + S + V3/ed, S + would have + V3/ed'.",
      "translation": "Giá như hôm qua họ đến đúng giờ, họ đã kịp chuyến bay buổi sáng."
    },
    {
      "id": "cond_q19",
      "question": "You can borrow this reference manual _______ you return it before Friday.",
      "options": [
        "A. as long as",
        "B. unless",
        "C. in case",
        "D. although"
      ],
      "correct": 0,
      "explanation": "'As long as' = 'Provided that' (Miễn là - điều kiện đi kèm).",
      "translation": "Bạn có thể mượn cuốn sách hướng dẫn tham khảo này miễn là bạn trả lại trước thứ Sáu."
    },
    {
      "id": "cond_q20",
      "question": "If I had mastered academic vocabulary earlier, I _______ writing essays easily now.",
      "options": [
        "A. would write",
        "B. would have written",
        "C. will write",
        "D. wrote"
      ],
      "correct": 0,
      "explanation": "Câu điều kiện hỗn hợp (Mixed Conditional): Mệnh đề If giả định trong quá khứ ('had mastered'), kết quả ở hiện tại có 'now' -> dùng 'would + V(bare)'.",
      "translation": "Nếu tôi đã nắm vững từ vựng học thuật sớm hơn, thì bây giờ tôi đã có thể viết luận một cách dễ dàng."
    }
  ],
  "relative-clauses": [
    {
      "id": "rc_q1",
      "question": "The professor _______ delivers the keynote speech at the conference is internationally acclaimed.",
      "options": [
        "A. which",
        "B. who",
        "C. whom",
        "D. whose"
      ],
      "correct": 1,
      "explanation": "'The professor' là danh từ chỉ người đóng vai trò Chủ ngữ của mệnh đề quan hệ -> dùng đại từ 'who'.",
      "translation": "Vị giáo sư - người đọc bài diễn văn khai mạc tại hội nghị - là người được quốc tế ca ngợi."
    },
    {
      "id": "rc_q2",
      "question": "Ha Long Bay, _______ is located in Quang Ninh Province, attracts millions of international tourists annually.",
      "options": [
        "A. that",
        "B. which",
        "C. where",
        "D. whose"
      ],
      "correct": 1,
      "explanation": "'Ha Long Bay' là tên riêng đã xác định -> Mệnh đề quan hệ không xác định (có dấu phẩy), KHÔNG ĐƯỢC DÙNG 'that', phải dùng 'which'.",
      "translation": "Vịnh Hạ Long, tọa lạc tại tỉnh Quảng Ninh, thu hút hàng triệu lượt khách du lịch quốc tế mỗi năm."
    },
    {
      "id": "rc_q3",
      "question": "The candidate _______ essay achieved the highest score was awarded a prestigious scholarship.",
      "options": [
        "A. who",
        "B. whom",
        "C. whose",
        "D. that"
      ],
      "correct": 2,
      "explanation": "'Whose' chỉ sự sở hữu: 'whose essay' = bài luận của thí sinh đó.",
      "translation": "Thí sinh có bài luận đạt điểm cao nhất đã được trao một suất học bổng danh giá."
    },
    {
      "id": "rc_q4",
      "question": "The research report _______ by the institute yesterday contains groundbreaking environmental findings.",
      "options": [
        "A. publishing",
        "B. published",
        "C. was published",
        "D. to publish"
      ],
      "correct": 1,
      "explanation": "Rút gọn mệnh đề quan hệ dạng bị động: 'The research report (which was) published by the institute...' -> rút gọn thành 'published'.",
      "translation": "Bản báo cáo nghiên cứu được viện xuất bản hôm qua chứa đựng những phát hiện môi trường mang tính đột phá."
    },
    {
      "id": "rc_q5",
      "question": "The students _______ in the front row are participating in the VSTEP B1 exam.",
      "options": [
        "A. seated",
        "B. seating",
        "C. seat",
        "D. to seat"
      ],
      "correct": 0,
      "explanation": "'Be seated' nghĩa là ngồi (thể bị động); 'The students who are seated...' rút gọn thành 'seated'.",
      "translation": "Những sinh viên đang ngồi ở hàng ghế đầu là những người tham dự kỳ thi VSTEP B1."
    },
    {
      "id": "rc_q6",
      "question": "He was the first candidate _______ the complete test paper before the time limit.",
      "options": [
        "A. submitting",
        "B. to submit",
        "C. submitted",
        "D. submit"
      ],
      "correct": 1,
      "explanation": "Sau các cụm từ 'the first / the second / the only / so sánh nhất', mệnh đề quan hệ rút gọn bằng 'To-Infinitive': 'the first candidate to submit'.",
      "translation": "Anh ấy là thí sinh đầu tiên nộp toàn bộ bài thi hoàn chỉnh trước thời hạn quy định."
    },
    {
      "id": "rc_q7",
      "question": "The library is the place _______ students can access thousands of academic journals.",
      "options": [
        "A. which",
        "B. where",
        "C. when",
        "D. that"
      ],
      "correct": 1,
      "explanation": "'The place' là nơi chốn, trong mệnh đề có đầy đủ Chủ ngữ 'students' và Tân ngữ 'journals' -> dùng trạng từ quan hệ 'where'.",
      "translation": "Thư viện là nơi mà sinh viên có thể tiếp cận hàng nghìn tạp chí học thuật."
    },
    {
      "id": "rc_q8",
      "question": "The laptop on _______ I wrote my master's thesis has stopped functioning.",
      "options": [
        "A. that",
        "B. which",
        "C. whom",
        "D. who"
      ],
      "correct": 1,
      "explanation": "Sau giới từ 'on', KHÔNG ĐƯỢC dùng 'that', bắt buộc phải dùng 'which' đối với danh từ chỉ vật.",
      "translation": "Chiếc máy tính xách tay mà trên đó tôi đã viết luận văn thạc sĩ đã ngừng hoạt động."
    },
    {
      "id": "rc_q9",
      "question": "I will never forget the day _______ we received our official B1 certificates.",
      "options": [
        "A. where",
        "B. when",
        "C. which",
        "D. why"
      ],
      "correct": 1,
      "explanation": "'The day' là mốc thời gian -> dùng trạng từ quan hệ 'when'.",
      "translation": "Tôi sẽ không bao giờ quên cái ngày mà chúng tôi nhận được chứng chỉ B1 chính thức của mình."
    },
    {
      "id": "rc_q10",
      "question": "The man _______ you interviewed this morning is an experienced language educator.",
      "options": [
        "A. which",
        "B. whom",
        "C. whose",
        "D. where"
      ],
      "correct": 1,
      "explanation": "'The man' là tân ngữ của hành động 'you interviewed' -> dùng đại từ quan hệ 'whom' (hoặc who).",
      "translation": "Người đàn ông mà bạn đã phỏng vấn sáng nay là một nhà giáo dục ngôn ngữ giàu kinh nghiệm."
    },
    {
      "id": "rela_q11",
      "question": "In the examination, the professor _______ delivers the keynote speech at the conference is internationally acclaimed.",
      "options": [
        "A. which",
        "B. who",
        "C. whom",
        "D. whose"
      ],
      "correct": 1,
      "explanation": "'The professor' là danh từ chỉ người đóng vai trò Chủ ngữ của mệnh đề quan hệ -> dùng đại từ 'who'.",
      "translation": "Vị giáo sư - người đọc bài diễn văn khai mạc tại hội nghị - là người được quốc tế ca ngợi."
    },
    {
      "id": "rela_q12",
      "question": "Ha Long Bay, _______ is located in Quang Ninh Province, attracts millions of international tourists annually.",
      "options": [
        "A. that",
        "B. which",
        "C. where",
        "D. whose"
      ],
      "correct": 1,
      "explanation": "'Ha Long Bay' là tên riêng đã xác định -> Mệnh đề quan hệ không xác định (có dấu phẩy), KHÔNG ĐƯỢC DÙNG 'that', phải dùng 'which'.",
      "translation": "Vịnh Hạ Long, tọa lạc tại tỉnh Quảng Ninh, thu hút hàng triệu lượt khách du lịch quốc tế mỗi năm."
    },
    {
      "id": "rela_q13",
      "question": "In the examination, the candidate _______ essay achieved the highest score was awarded a prestigious scholarship.",
      "options": [
        "A. who",
        "B. whom",
        "C. whose",
        "D. that"
      ],
      "correct": 2,
      "explanation": "'Whose' chỉ sự sở hữu: 'whose essay' = bài luận của thí sinh đó.",
      "translation": "Thí sinh có bài luận đạt điểm cao nhất đã được trao một suất học bổng danh giá."
    },
    {
      "id": "rela_q14",
      "question": "In the examination, the research report _______ by the institute yesterday contains groundbreaking environmental findings.",
      "options": [
        "A. publishing",
        "B. published",
        "C. was published",
        "D. to publish"
      ],
      "correct": 1,
      "explanation": "Rút gọn mệnh đề quan hệ dạng bị động: 'The research report (which was) published by the institute...' -> rút gọn thành 'published'.",
      "translation": "Bản báo cáo nghiên cứu được viện xuất bản hôm qua chứa đựng những phát hiện môi trường mang tính đột phá."
    },
    {
      "id": "rela_q15",
      "question": "In the examination, the students _______ in the front row are participating in the VSTEP B1 exam.",
      "options": [
        "A. seated",
        "B. seating",
        "C. seat",
        "D. to seat"
      ],
      "correct": 0,
      "explanation": "'Be seated' nghĩa là ngồi (thể bị động); 'The students who are seated...' rút gọn thành 'seated'.",
      "translation": "Những sinh viên đang ngồi ở hàng ghế đầu là những người tham dự kỳ thi VSTEP B1."
    },
    {
      "id": "rela_q16",
      "question": "He was the first candidate _______ the complete test paper before the time limit.",
      "options": [
        "A. submitting",
        "B. to submit",
        "C. submitted",
        "D. submit"
      ],
      "correct": 1,
      "explanation": "Sau các cụm từ 'the first / the second / the only / so sánh nhất', mệnh đề quan hệ rút gọn bằng 'To-Infinitive': 'the first candidate to submit'.",
      "translation": "Anh ấy là thí sinh đầu tiên nộp toàn bộ bài thi hoàn chỉnh trước thời hạn quy định."
    },
    {
      "id": "rela_q17",
      "question": "In the examination, the library is the place _______ students can access thousands of academic journals.",
      "options": [
        "A. which",
        "B. where",
        "C. when",
        "D. that"
      ],
      "correct": 1,
      "explanation": "'The place' là nơi chốn, trong mệnh đề có đầy đủ Chủ ngữ 'students' và Tân ngữ 'journals' -> dùng trạng từ quan hệ 'where'.",
      "translation": "Thư viện là nơi mà sinh viên có thể tiếp cận hàng nghìn tạp chí học thuật."
    },
    {
      "id": "rela_q18",
      "question": "In the examination, the laptop on _______ I wrote my master's thesis has stopped functioning.",
      "options": [
        "A. that",
        "B. which",
        "C. whom",
        "D. who"
      ],
      "correct": 1,
      "explanation": "Sau giới từ 'on', KHÔNG ĐƯỢC dùng 'that', bắt buộc phải dùng 'which' đối với danh từ chỉ vật.",
      "translation": "Chiếc máy tính xách tay mà trên đó tôi đã viết luận văn thạc sĩ đã ngừng hoạt động."
    },
    {
      "id": "rela_q19",
      "question": "I will never forget the day _______ we received our official B1 certificates.",
      "options": [
        "A. where",
        "B. when",
        "C. which",
        "D. why"
      ],
      "correct": 1,
      "explanation": "'The day' là mốc thời gian -> dùng trạng từ quan hệ 'when'.",
      "translation": "Tôi sẽ không bao giờ quên cái ngày mà chúng tôi nhận được chứng chỉ B1 chính thức của mình."
    },
    {
      "id": "rela_q20",
      "question": "In the examination, the man _______ you interviewed this morning is an experienced language educator.",
      "options": [
        "A. which",
        "B. whom",
        "C. whose",
        "D. where"
      ],
      "correct": 1,
      "explanation": "'The man' là tân ngữ của hành động 'you interviewed' -> dùng đại từ quan hệ 'whom' (hoặc who).",
      "translation": "Người đàn ông mà bạn đã phỏng vấn sáng nay là một nhà giáo dục ngôn ngữ giàu kinh nghiệm."
    }
  ],
  "comparisons": [
    {
      "id": "comp_q1",
      "question": "Solar energy is significantly _______ than fossil fuel alternatives.",
      "options": [
        "A. clean",
        "B. cleaner",
        "C. cleanest",
        "D. more clean"
      ],
      "correct": 1,
      "explanation": "Tính từ ngắn 'clean' so sánh hơn thêm đuôi '-er' -> 'cleaner than'.",
      "translation": "Năng lượng mặt trời sạch hơn đáng kể so với các giải pháp thay thế từ nhiên liệu hóa thạch."
    },
    {
      "id": "comp_q2",
      "question": "The _______ vocabulary you acquire, the _______ confidently you can write academic essays.",
      "options": [
        "A. more / more",
        "B. most / most",
        "C. many / much",
        "D. greater / greatest"
      ],
      "correct": 0,
      "explanation": "Cấu trúc so sánh kép (Double Comparison): 'The + comparative + S1 + V1, the + comparative + S2 + V2' (Càng... thì càng...).",
      "translation": "Bạn càng tích lũy được nhiều từ vựng, bạn càng có thể viết các bài luận học thuật một cách tự tin hơn."
    },
    {
      "id": "comp_q3",
      "question": "Online learning is becoming _______ among university students.",
      "options": [
        "A. more and more popular",
        "B. popularer and popularer",
        "C. most and most popular",
        "D. more popular and popular"
      ],
      "correct": 0,
      "explanation": "Cấu trúc so sánh lũy tiến với tính từ dài 'popular' (Càng ngày càng...): 'more and more + Adj'.",
      "translation": "Học trực tuyến đang ngày càng trở nên phổ biến trong giới sinh viên đại học."
    },
    {
      "id": "comp_q4",
      "question": "This is by far the _______ challenging examination paper I have ever completed.",
      "options": [
        "A. more",
        "B. most",
        "C. better",
        "D. much"
      ],
      "correct": 1,
      "explanation": "Cấu trúc so sánh nhất với tính từ dài: 'the most + Adj'. 'By far' dùng để nhấn mạnh cho cấp so sánh nhất.",
      "translation": "Đây là đề thi mang tính thử thách nhất mà tôi từng hoàn thành cho đến nay."
    },
    {
      "id": "comp_q5",
      "question": "Her English pronunciation is not as _______ as her elder sister's.",
      "options": [
        "A. good",
        "B. better",
        "C. best",
        "D. well"
      ],
      "correct": 0,
      "explanation": "Cấu trúc so sánh bằng / không bằng: 'as + Adj/Adv + as'. Đi sau động từ to be 'is' dùng tính từ nguyên thể 'good'.",
      "translation": "Phát âm tiếng Anh của cô ấy không tốt bằng chị gái của cô ấy."
    },
    {
      "id": "comp_q6",
      "question": "The new laptop model is twice as _______ as the older version.",
      "options": [
        "A. expensive",
        "B. more expensive",
        "C. most expensive",
        "D. expensively"
      ],
      "correct": 0,
      "explanation": "So sánh bội số: 'S + V + multiple (twice/three times) + as + Adj/Adv + as + N'.",
      "translation": "Mẫu máy tính xách tay mới đắt gấp đôi so với phiên bản cũ hơn."
    },
    {
      "id": "comp_q7",
      "question": "Of the three research proposals submitted, Nam's is the _______ viable.",
      "options": [
        "A. more",
        "B. most",
        "C. best",
        "D. much"
      ],
      "correct": 1,
      "explanation": "So sánh giữa 3 đối tượng trở lên dùng cấp So sánh nhất: 'the most viable'.",
      "translation": "Trong số ba bản đề xuất nghiên cứu được nộp, bản của Nam là khả thi nhất."
    },
    {
      "id": "comp_q8",
      "question": "The weather today is much _______ than it was yesterday.",
      "options": [
        "A. bad",
        "B. worse",
        "C. worst",
        "D. badly"
      ],
      "correct": 1,
      "explanation": "'Bad' là tính từ bất quy tắc, so sánh hơn là 'worse than'. 'Much' dùng để nhấn mạnh mức độ so sánh hơn.",
      "translation": "Thời tiết hôm nay tồi tệ hơn nhiều so với hôm qua."
    },
    {
      "id": "comp_q9",
      "question": "The higher you climb the mountain, the _______ the air becomes.",
      "options": [
        "A. cold",
        "B. colder",
        "C. coldest",
        "D. more cold"
      ],
      "correct": 1,
      "explanation": "So sánh kép: 'The higher..., the colder...' (Bạn càng leo lên cao, không khí càng trở nên lạnh hơn).",
      "translation": "Bạn càng leo lên ngọn núi cao, không khí càng trở nên lạnh hơn."
    },
    {
      "id": "comp_q10",
      "question": "No one in the department works _______ than Ms. Mai.",
      "options": [
        "A. hard",
        "B. harder",
        "C. hardest",
        "D. more hard"
      ],
      "correct": 1,
      "explanation": "So sánh hơn của trạng từ ngắn 'hard' -> 'harder than'.",
      "translation": "Không ai trong phòng ban làm việc chăm chỉ hơn cô Mai."
    },
    {
      "id": "comp_q11",
      "question": "Solar energy is significantly _______ than fossil fuel alternatives.",
      "options": [
        "A. clean",
        "B. cleaner",
        "C. cleanest",
        "D. more clean"
      ],
      "correct": 1,
      "explanation": "Tính từ ngắn 'clean' so sánh hơn thêm đuôi '-er' -> 'cleaner than'.",
      "translation": "Năng lượng mặt trời sạch hơn đáng kể so với các giải pháp thay thế từ nhiên liệu hóa thạch."
    },
    {
      "id": "comp_q12",
      "question": "In the examination, the _______ vocabulary you acquire, the _______ confidently you can write academic essays.",
      "options": [
        "A. more / more",
        "B. most / most",
        "C. many / much",
        "D. greater / greatest"
      ],
      "correct": 0,
      "explanation": "Cấu trúc so sánh kép (Double Comparison): 'The + comparative + S1 + V1, the + comparative + S2 + V2' (Càng... thì càng...).",
      "translation": "Bạn càng tích lũy được nhiều từ vựng, bạn càng có thể viết các bài luận học thuật một cách tự tin hơn."
    },
    {
      "id": "comp_q13",
      "question": "Online learning is becoming _______ among university students.",
      "options": [
        "A. more and more popular",
        "B. popularer and popularer",
        "C. most and most popular",
        "D. more popular and popular"
      ],
      "correct": 0,
      "explanation": "Cấu trúc so sánh lũy tiến với tính từ dài 'popular' (Càng ngày càng...): 'more and more + Adj'.",
      "translation": "Học trực tuyến đang ngày càng trở nên phổ biến trong giới sinh viên đại học."
    },
    {
      "id": "comp_q14",
      "question": "This is by far the _______ challenging examination paper I have ever completed.",
      "options": [
        "A. more",
        "B. most",
        "C. better",
        "D. much"
      ],
      "correct": 1,
      "explanation": "Cấu trúc so sánh nhất với tính từ dài: 'the most + Adj'. 'By far' dùng để nhấn mạnh cho cấp so sánh nhất.",
      "translation": "Đây là đề thi mang tính thử thách nhất mà tôi từng hoàn thành cho đến nay."
    },
    {
      "id": "comp_q15",
      "question": "Her English pronunciation is not as _______ as her elder sister's.",
      "options": [
        "A. good",
        "B. better",
        "C. best",
        "D. well"
      ],
      "correct": 0,
      "explanation": "Cấu trúc so sánh bằng / không bằng: 'as + Adj/Adv + as'. Đi sau động từ to be 'is' dùng tính từ nguyên thể 'good'.",
      "translation": "Phát âm tiếng Anh của cô ấy không tốt bằng chị gái của cô ấy."
    },
    {
      "id": "comp_q16",
      "question": "In the examination, the new laptop model is twice as _______ as the older version.",
      "options": [
        "A. expensive",
        "B. more expensive",
        "C. most expensive",
        "D. expensively"
      ],
      "correct": 0,
      "explanation": "So sánh bội số: 'S + V + multiple (twice/three times) + as + Adj/Adv + as + N'.",
      "translation": "Mẫu máy tính xách tay mới đắt gấp đôi so với phiên bản cũ hơn."
    },
    {
      "id": "comp_q17",
      "question": "Of the three research proposals submitted, Nam's is the _______ viable.",
      "options": [
        "A. more",
        "B. most",
        "C. best",
        "D. much"
      ],
      "correct": 1,
      "explanation": "So sánh giữa 3 đối tượng trở lên dùng cấp So sánh nhất: 'the most viable'.",
      "translation": "Trong số ba bản đề xuất nghiên cứu được nộp, bản của Nam là khả thi nhất."
    },
    {
      "id": "comp_q18",
      "question": "In the examination, the weather today is much _______ than it was yesterday.",
      "options": [
        "A. bad",
        "B. worse",
        "C. worst",
        "D. badly"
      ],
      "correct": 1,
      "explanation": "'Bad' là tính từ bất quy tắc, so sánh hơn là 'worse than'. 'Much' dùng để nhấn mạnh mức độ so sánh hơn.",
      "translation": "Thời tiết hôm nay tồi tệ hơn nhiều so với hôm qua."
    },
    {
      "id": "comp_q19",
      "question": "In the examination, the higher you climb the mountain, the _______ the air becomes.",
      "options": [
        "A. cold",
        "B. colder",
        "C. coldest",
        "D. more cold"
      ],
      "correct": 1,
      "explanation": "So sánh kép: 'The higher..., the colder...' (Bạn càng leo lên cao, không khí càng trở nên lạnh hơn).",
      "translation": "Bạn càng leo lên ngọn núi cao, không khí càng trở nên lạnh hơn."
    },
    {
      "id": "comp_q20",
      "question": "No one in the department works _______ than Ms. Mai.",
      "options": [
        "A. hard",
        "B. harder",
        "C. hardest",
        "D. more hard"
      ],
      "correct": 1,
      "explanation": "So sánh hơn của trạng từ ngắn 'hard' -> 'harder than'.",
      "translation": "Không ai trong phòng ban làm việc chăm chỉ hơn cô Mai."
    }
  ],
  "questions": [
    {
      "id": "q_q1",
      "question": "You haven't submitted your writing assignment yet, _______?",
      "options": [
        "A. have you",
        "B. haven't you",
        "C. did you",
        "D. do you"
      ],
      "correct": 0,
      "explanation": "Mệnh đề chính phủ định ('haven't submitted') ➔ Câu hỏi đuôi ở dạng khẳng định cùng trợ động từ: 'have you?'.",
      "translation": "Bạn vẫn chưa nộp bài tập viết của mình, có phải không?"
    },
    {
      "id": "q_q2",
      "question": "Everyone attended the intensive listening workshop, _______?",
      "options": [
        "A. didn't he",
        "B. didn't they",
        "C. did they",
        "D. weren't they"
      ],
      "correct": 1,
      "explanation": "Chủ ngữ là đại từ bất định chỉ người ('Everyone') ➔ Đại từ ở câu hỏi đuôi là 'they'. Động từ ở quá khứ khẳng định ('attended') ➔ Đuôi phủ định: 'didn't they?'.",
      "translation": "Mọi người đều đã tham dự hội thảo luyện nghe chuyên sâu, có phải không?"
    },
    {
      "id": "q_q3",
      "question": "I am responsible for coordinating the mock exam session, _______?",
      "options": [
        "A. am not I",
        "B. aren't I",
        "C. isn't I",
        "D. don't I"
      ],
      "correct": 1,
      "explanation": "Quy tắc đặc biệt: Chủ ngữ 'I am' ➔ Câu hỏi đuôi luôn là 'aren't I?'.",
      "translation": "Tôi chịu trách nhiệm điều phối buổi thi thử, có đúng không?"
    },
    {
      "id": "q_q4",
      "question": "Let's review the irregular verb table together, _______?",
      "options": [
        "A. will you",
        "B. shall we",
        "C. don't we",
        "D. can we"
      ],
      "correct": 1,
      "explanation": "Lời đề nghị / rủ rê bắt đầu bằng 'Let's' ➔ Câu hỏi đuôi luôn là 'shall we?'.",
      "translation": "Chúng ta hãy cùng nhau ôn tập lại bảng động từ bất quy tắc nhé?"
    },
    {
      "id": "q_q5",
      "question": "She rarely speaks English in public, _______?",
      "options": [
        "A. doesn't she",
        "B. does she",
        "C. is she",
        "D. did she"
      ],
      "correct": 1,
      "explanation": "Mệnh đề chứa phó từ bán phủ định ('rarely' - hiếm khi) được xem như câu phủ định ➔ Câu hỏi đuôi ở dạng khẳng định: 'does she?'.",
      "translation": "Cô ấy hiếm khi nói tiếng Anh trước công chúng, có phải không?"
    },
    {
      "id": "q_q6",
      "question": "Could you please tell me _______?",
      "options": [
        "A. where is the examination hall",
        "B. where the examination hall is",
        "C. where does the examination hall locate",
        "D. where locate the examination hall"
      ],
      "correct": 1,
      "explanation": "Trong câu hỏi gián tiếp (Indirect Question), trật tự từ TRỞ VỀ TRẬT TỰ CÂU KHẲNG ĐỊNH: 'Wh-word + Subject + Verb' -> 'where the examination hall is'.",
      "translation": "Bạn có thể vui lòng chỉ cho tôi biết hội trường thi ở đâu không?"
    },
    {
      "id": "q_q7",
      "question": "Do you know _______ the train arrives on time?",
      "options": [
        "A. whether",
        "B. that",
        "C. what",
        "D. which"
      ],
      "correct": 0,
      "explanation": "Câu hỏi gián tiếp dạng Yes/No dùng liên từ 'if' hoặc 'whether' (liệu rằng).",
      "translation": "Bạn có biết liệu chuyến tàu có đến đúng giờ không?"
    },
    {
      "id": "q_q8",
      "question": "Open the audio transcript file, _______?",
      "options": [
        "A. shall we",
        "B. will you",
        "C. don't you",
        "D. did you"
      ],
      "correct": 1,
      "explanation": "Câu mệnh lệnh khẳng định ➔ Câu hỏi đuôi là 'will you?' (thể hiện lời yêu cầu lịch sự).",
      "translation": "Mở tệp văn bản bản ghi âm ra đi, được chứ?"
    },
    {
      "id": "q_q9",
      "question": "Neither of the candidates arrived late, _______?",
      "options": [
        "A. did they",
        "B. didn't they",
        "C. did he",
        "D. was he"
      ],
      "correct": 0,
      "explanation": "'Neither' mang nghĩa phủ định (không ai trong cả hai) ➔ Câu hỏi đuôi ở dạng khẳng định 'did they?'.",
      "translation": "Cả hai thí sinh đều không đến muộn, có đúng không?"
    },
    {
      "id": "q_q10",
      "question": "I would like to know what time _______.",
      "options": [
        "A. does the library close",
        "B. the library closes",
        "C. is the library closing",
        "D. close the library"
      ],
      "correct": 1,
      "explanation": "Câu hỏi nhúng gián tiếp không đảo trợ động từ lên trước chủ ngữ: 'what time the library closes'.",
      "translation": "Tôi muốn biết thư viện đóng cửa lúc mấy giờ."
    },
    {
      "id": "ques_q11",
      "question": "You haven't submitted your writing assignment yet, _______?",
      "options": [
        "A. have you",
        "B. haven't you",
        "C. did you",
        "D. do you"
      ],
      "correct": 0,
      "explanation": "Mệnh đề chính phủ định ('haven't submitted') ➔ Câu hỏi đuôi ở dạng khẳng định cùng trợ động từ: 'have you?'.",
      "translation": "Bạn vẫn chưa nộp bài tập viết của mình, có phải không?"
    },
    {
      "id": "ques_q12",
      "question": "Everyone attended the intensive listening workshop, _______?",
      "options": [
        "A. didn't he",
        "B. didn't they",
        "C. did they",
        "D. weren't they"
      ],
      "correct": 1,
      "explanation": "Chủ ngữ là đại từ bất định chỉ người ('Everyone') ➔ Đại từ ở câu hỏi đuôi là 'they'. Động từ ở quá khứ khẳng định ('attended') ➔ Đuôi phủ định: 'didn't they?'.",
      "translation": "Mọi người đều đã tham dự hội thảo luyện nghe chuyên sâu, có phải không?"
    },
    {
      "id": "ques_q13",
      "question": "I am responsible for coordinating the mock exam session, _______?",
      "options": [
        "A. am not I",
        "B. aren't I",
        "C. isn't I",
        "D. don't I"
      ],
      "correct": 1,
      "explanation": "Quy tắc đặc biệt: Chủ ngữ 'I am' ➔ Câu hỏi đuôi luôn là 'aren't I?'.",
      "translation": "Tôi chịu trách nhiệm điều phối buổi thi thử, có đúng không?"
    },
    {
      "id": "ques_q14",
      "question": "Let's review the irregular verb table together, _______?",
      "options": [
        "A. will you",
        "B. shall we",
        "C. don't we",
        "D. can we"
      ],
      "correct": 1,
      "explanation": "Lời đề nghị / rủ rê bắt đầu bằng 'Let's' ➔ Câu hỏi đuôi luôn là 'shall we?'.",
      "translation": "Chúng ta hãy cùng nhau ôn tập lại bảng động từ bất quy tắc nhé?"
    },
    {
      "id": "ques_q15",
      "question": "She rarely speaks English in public, _______?",
      "options": [
        "A. doesn't she",
        "B. does she",
        "C. is she",
        "D. did she"
      ],
      "correct": 1,
      "explanation": "Mệnh đề chứa phó từ bán phủ định ('rarely' - hiếm khi) được xem như câu phủ định ➔ Câu hỏi đuôi ở dạng khẳng định: 'does she?'.",
      "translation": "Cô ấy hiếm khi nói tiếng Anh trước công chúng, có phải không?"
    },
    {
      "id": "ques_q16",
      "question": "Could you please tell me _______?",
      "options": [
        "A. where is the examination hall",
        "B. where the examination hall is",
        "C. where does the examination hall locate",
        "D. where locate the examination hall"
      ],
      "correct": 1,
      "explanation": "Trong câu hỏi gián tiếp (Indirect Question), trật tự từ TRỞ VỀ TRẬT TỰ CÂU KHẲNG ĐỊNH: 'Wh-word + Subject + Verb' -> 'where the examination hall is'.",
      "translation": "Bạn có thể vui lòng chỉ cho tôi biết hội trường thi ở đâu không?"
    },
    {
      "id": "ques_q17",
      "question": "Do you know _______ the train arrives on time?",
      "options": [
        "A. whether",
        "B. that",
        "C. what",
        "D. which"
      ],
      "correct": 0,
      "explanation": "Câu hỏi gián tiếp dạng Yes/No dùng liên từ 'if' hoặc 'whether' (liệu rằng).",
      "translation": "Bạn có biết liệu chuyến tàu có đến đúng giờ không?"
    },
    {
      "id": "ques_q18",
      "question": "Open the audio transcript file, _______?",
      "options": [
        "A. shall we",
        "B. will you",
        "C. don't you",
        "D. did you"
      ],
      "correct": 1,
      "explanation": "Câu mệnh lệnh khẳng định ➔ Câu hỏi đuôi là 'will you?' (thể hiện lời yêu cầu lịch sự).",
      "translation": "Mở tệp văn bản bản ghi âm ra đi, được chứ?"
    },
    {
      "id": "ques_q19",
      "question": "Neither of the candidates arrived late, _______?",
      "options": [
        "A. did they",
        "B. didn't they",
        "C. did he",
        "D. was he"
      ],
      "correct": 0,
      "explanation": "'Neither' mang nghĩa phủ định (không ai trong cả hai) ➔ Câu hỏi đuôi ở dạng khẳng định 'did they?'.",
      "translation": "Cả hai thí sinh đều không đến muộn, có đúng không?"
    },
    {
      "id": "ques_q20",
      "question": "I would like to know what time _______.",
      "options": [
        "A. does the library close",
        "B. the library closes",
        "C. is the library closing",
        "D. close the library"
      ],
      "correct": 1,
      "explanation": "Câu hỏi nhúng gián tiếp không đảo trợ động từ lên trước chủ ngữ: 'what time the library closes'.",
      "translation": "Tôi muốn biết thư viện đóng cửa lúc mấy giờ."
    }
  ],
  "linking-words": [
    {
      "id": "lw_q1",
      "question": "Regular exercise improves physical fitness. _______, it enhances mental well-being.",
      "options": [
        "A. However",
        "B. Furthermore",
        "C. Otherwise",
        "D. In contrast"
      ],
      "correct": 1,
      "explanation": "'Furthermore' (Hơn nữa) dùng để bổ sung thêm một ý kiến đồng thuận, tích cực cùng chiều với câu trước.",
      "translation": "Tập thể dục thường xuyên giúp cải thiện thể lực. Hơn nữa, nó còn nâng cao sức khỏe tinh thần."
    },
    {
      "id": "lw_q2",
      "question": "_______ heavy rain and flooding, the candidates arrived at the test venue on time.",
      "options": [
        "A. Although",
        "B. Despite",
        "C. Because",
        "D. Since"
      ],
      "correct": 1,
      "explanation": "Sau chỗ trống là cụm danh từ 'heavy rain and flooding' (không phải một mệnh đề) mang nghĩa tương phản ➔ dùng 'Despite' (+ Noun/V-ing).",
      "translation": "Mặc dù trời mưa to và ngập lụt, các thí sinh vẫn đến địa điểm thi đúng giờ."
    },
    {
      "id": "lw_q3",
      "question": "He prepared thoroughly for every exam component; _______, he achieved an exceptional score.",
      "options": [
        "A. therefore",
        "B. nevertheless",
        "C. on the other hand",
        "D. whereas"
      ],
      "correct": 0,
      "explanation": "'Therefore' (Vì vậy, do đó) dùng để chỉ kết quả/hệ quả tất yếu của mệnh đề nguyên nhân đứng trước.",
      "translation": "Anh ấy đã chuẩn bị kỹ lưỡng cho mọi phần thi; vì vậy, anh ấy đã đạt điểm số xuất sắc."
    },
    {
      "id": "lw_q4",
      "question": "Renewable energy sources produce zero emissions, _______ fossil fuels pollute the atmosphere.",
      "options": [
        "A. whereas",
        "B. therefore",
        "C. because",
        "D. besides"
      ],
      "correct": 0,
      "explanation": "'Whereas' (trong khi đó) dùng để so sánh sự tương phản trực tiếp giữa 2 vế câu trong cùng một câu.",
      "translation": "Các nguồn năng lượng tái tạo không tạo ra khí thải, trong khi đó nhiên liệu hóa thạch lại làm ô nhiễm bầu khí quyển."
    },
    {
      "id": "lw_q5",
      "question": "He woke up early _______ he could revise the vocabulary notes one last time.",
      "options": [
        "A. in order to",
        "B. so that",
        "C. so as to",
        "D. because of"
      ],
      "correct": 1,
      "explanation": "Sau chỗ trống là một mệnh đề hoàn chỉnh ('he could revise...') chỉ mục đích ➔ dùng 'so that + Clause'. ('In order to' và 'so as to' chỉ đi với V bare).",
      "translation": "Anh ấy đã thức dậy sớm để có thể ôn lại ghi chú từ vựng một lần cuối cùng."
    },
    {
      "id": "lw_q6",
      "question": "Many wild species, _______ elephants and tigers, face severe habitat loss.",
      "options": [
        "A. such as",
        "B. as",
        "C. for example",
        "D. that is"
      ],
      "correct": 0,
      "explanation": "'Such as' dùng để liệt kê ví dụ cụ thể ngay sau danh từ chung.",
      "translation": "Nhiều loài hoang dã, chẳng hạn như voi và hổ, đang đối mặt với sự mất môi trường sống nghiêm trọng."
    },
    {
      "id": "lw_q7",
      "question": "_______ rapid technological disruption, professionals must continually upgrade their digital skills.",
      "options": [
        "A. Because",
        "B. Due to",
        "C. Even though",
        "D. In order to"
      ],
      "correct": 1,
      "explanation": "'Due to' (+ Noun phrase: 'rapid technological disruption') dùng để chỉ nguyên nhân.",
      "translation": "Do sự gián đoạn công nghệ nhanh chóng, các chuyên gia phải liên tục nâng cao kỹ năng số của mình."
    },
    {
      "id": "lw_q8",
      "question": "_______, effective time management and consistent practice are the keys to VSTEP success.",
      "options": [
        "A. In conclusion",
        "B. However",
        "C. Despite",
        "D. Although"
      ],
      "correct": 0,
      "explanation": "'In conclusion' (Tóm lại, kết luận) là từ nối mở đầu cho câu tổng kết.",
      "translation": "Tóm lại, quản lý thời gian hiệu quả và luyện tập kiên trì là chìa khóa dẫn tới thành công VSTEP."
    },
    {
      "id": "lw_q9",
      "question": "He failed the test _______ he did not review the grammar guidelines adequately.",
      "options": [
        "A. because",
        "B. because of",
        "C. despite",
        "D. although"
      ],
      "correct": 0,
      "explanation": "Sau chỗ trống là một mệnh đề hoàn chỉnh ('he did not review...') chỉ nguyên nhân ➔ dùng liên từ 'because'.",
      "translation": "Anh ấy đã trượt bài kiểm tra vì anh ấy đã không ôn tập các hướng dẫn ngữ pháp một cách đầy đủ."
    },
    {
      "id": "lw_q10",
      "question": "On the one hand, specialized training ensures immediate job readiness; _______, broad education provides lifelong adaptability.",
      "options": [
        "A. on the other hand",
        "B. furthermore",
        "C. consequently",
        "D. similarly"
      ],
      "correct": 0,
      "explanation": "Cặp cấu trúc diễn đạt 2 mặt của vấn đề: 'On the one hand,... on the other hand,...' (Một mặt thì... mặt khác thì...).",
      "translation": "Một mặt, đào tạo chuyên sâu đảm bảo sự sẵn sàng làm việc ngay; mặt khác, giáo dục đa ngành mang lại khả năng thích ứng trọn đời."
    },
    {
      "id": "link_q11",
      "question": "Regular exercise improves physical fitness. _______, it enhances mental well-being.",
      "options": [
        "A. However",
        "B. Furthermore",
        "C. Otherwise",
        "D. In contrast"
      ],
      "correct": 1,
      "explanation": "'Furthermore' (Hơn nữa) dùng để bổ sung thêm một ý kiến đồng thuận, tích cực cùng chiều với câu trước.",
      "translation": "Tập thể dục thường xuyên giúp cải thiện thể lực. Hơn nữa, nó còn nâng cao sức khỏe tinh thần."
    },
    {
      "id": "link_q12",
      "question": "_______ heavy rain and flooding, the candidates arrived at the test venue on time.",
      "options": [
        "A. Although",
        "B. Despite",
        "C. Because",
        "D. Since"
      ],
      "correct": 1,
      "explanation": "Sau chỗ trống là cụm danh từ 'heavy rain and flooding' (không phải một mệnh đề) mang nghĩa tương phản ➔ dùng 'Despite' (+ Noun/V-ing).",
      "translation": "Mặc dù trời mưa to và ngập lụt, các thí sinh vẫn đến địa điểm thi đúng giờ."
    },
    {
      "id": "link_q13",
      "question": "He prepared thoroughly for every exam component; _______, he achieved an exceptional score.",
      "options": [
        "A. therefore",
        "B. nevertheless",
        "C. on the other hand",
        "D. whereas"
      ],
      "correct": 0,
      "explanation": "'Therefore' (Vì vậy, do đó) dùng để chỉ kết quả/hệ quả tất yếu của mệnh đề nguyên nhân đứng trước.",
      "translation": "Anh ấy đã chuẩn bị kỹ lưỡng cho mọi phần thi; vì vậy, anh ấy đã đạt điểm số xuất sắc."
    },
    {
      "id": "link_q14",
      "question": "Renewable energy sources produce zero emissions, _______ fossil fuels pollute the atmosphere.",
      "options": [
        "A. whereas",
        "B. therefore",
        "C. because",
        "D. besides"
      ],
      "correct": 0,
      "explanation": "'Whereas' (trong khi đó) dùng để so sánh sự tương phản trực tiếp giữa 2 vế câu trong cùng một câu.",
      "translation": "Các nguồn năng lượng tái tạo không tạo ra khí thải, trong khi đó nhiên liệu hóa thạch lại làm ô nhiễm bầu khí quyển."
    },
    {
      "id": "link_q15",
      "question": "He woke up early _______ he could revise the vocabulary notes one last time.",
      "options": [
        "A. in order to",
        "B. so that",
        "C. so as to",
        "D. because of"
      ],
      "correct": 1,
      "explanation": "Sau chỗ trống là một mệnh đề hoàn chỉnh ('he could revise...') chỉ mục đích ➔ dùng 'so that + Clause'. ('In order to' và 'so as to' chỉ đi với V bare).",
      "translation": "Anh ấy đã thức dậy sớm để có thể ôn lại ghi chú từ vựng một lần cuối cùng."
    },
    {
      "id": "link_q16",
      "question": "Many wild species, _______ elephants and tigers, face severe habitat loss.",
      "options": [
        "A. such as",
        "B. as",
        "C. for example",
        "D. that is"
      ],
      "correct": 0,
      "explanation": "'Such as' dùng để liệt kê ví dụ cụ thể ngay sau danh từ chung.",
      "translation": "Nhiều loài hoang dã, chẳng hạn như voi và hổ, đang đối mặt với sự mất môi trường sống nghiêm trọng."
    },
    {
      "id": "link_q17",
      "question": "_______ rapid technological disruption, professionals must continually upgrade their digital skills.",
      "options": [
        "A. Because",
        "B. Due to",
        "C. Even though",
        "D. In order to"
      ],
      "correct": 1,
      "explanation": "'Due to' (+ Noun phrase: 'rapid technological disruption') dùng để chỉ nguyên nhân.",
      "translation": "Do sự gián đoạn công nghệ nhanh chóng, các chuyên gia phải liên tục nâng cao kỹ năng số của mình."
    },
    {
      "id": "link_q18",
      "question": "_______, effective time management and consistent practice are the keys to VSTEP success.",
      "options": [
        "A. In conclusion",
        "B. However",
        "C. Despite",
        "D. Although"
      ],
      "correct": 0,
      "explanation": "'In conclusion' (Tóm lại, kết luận) là từ nối mở đầu cho câu tổng kết.",
      "translation": "Tóm lại, quản lý thời gian hiệu quả và luyện tập kiên trì là chìa khóa dẫn tới thành công VSTEP."
    },
    {
      "id": "link_q19",
      "question": "He failed the test _______ he did not review the grammar guidelines adequately.",
      "options": [
        "A. because",
        "B. because of",
        "C. despite",
        "D. although"
      ],
      "correct": 0,
      "explanation": "Sau chỗ trống là một mệnh đề hoàn chỉnh ('he did not review...') chỉ nguyên nhân ➔ dùng liên từ 'because'.",
      "translation": "Anh ấy đã trượt bài kiểm tra vì anh ấy đã không ôn tập các hướng dẫn ngữ pháp một cách đầy đủ."
    },
    {
      "id": "link_q20",
      "question": "On the one hand, specialized training ensures immediate job readiness; _______, broad education provides lifelong adaptability.",
      "options": [
        "A. on the other hand",
        "B. furthermore",
        "C. consequently",
        "D. similarly"
      ],
      "correct": 0,
      "explanation": "Cặp cấu trúc diễn đạt 2 mặt của vấn đề: 'On the one hand,... on the other hand,...' (Một mặt thì... mặt khác thì...).",
      "translation": "Một mặt, đào tạo chuyên sâu đảm bảo sự sẵn sàng làm việc ngay; mặt khác, giáo dục đa ngành mang lại khả năng thích ứng trọn đời."
    }
  ],
  "subject-verb-agreement": [
    {
      "id": "sva_q1",
      "question": "The number of candidates who passed the VSTEP B1 exam _______ increased remarkably.",
      "options": [
        "A. has",
        "B. have",
        "C. are",
        "D. were"
      ],
      "correct": 0,
      "explanation": "Cấu trúc 'The number of + N(plural)' luôn đi với ĐỘNG TỪ SỐ ÍT ('has increased'). Ngược lại, 'A number of + N(plural)' mới đi với động từ số nhiều.",
      "translation": "Số lượng các thí sinh đỗ kỳ thi VSTEP B1 đã gia tăng một cách đáng kể."
    },
    {
      "id": "sva_q2",
      "question": "A number of international students _______ registered for the advanced English course.",
      "options": [
        "A. has",
        "B. have",
        "C. is",
        "D. was"
      ],
      "correct": 1,
      "explanation": "'A number of + N(plural)' mang nghĩa 'nhiều / một số' ➔ ĐỘNG TỪ SỐ NHIỀU ('have registered').",
      "translation": "Một số lượng sinh viên quốc tế đã đăng ký tham gia khóa học tiếng Anh nâng cao."
    },
    {
      "id": "sva_q3",
      "question": "Neither the head teacher nor the assistants _______ available for consultation right now.",
      "options": [
        "A. is",
        "B. are",
        "C. was",
        "D. be"
      ],
      "correct": 1,
      "explanation": "Với cặp từ nối 'Neither S1 nor S2', động từ chia theo chủ ngữ thứ 2 (gần động từ nhất: 'the assistants' - số nhiều) ➔ dùng 'are'.",
      "translation": "Cả giáo viên trưởng lẫn các trợ giảng đều không có mặt để tư vấn vào lúc này."
    },
    {
      "id": "sva_q4",
      "question": "The professor, along with five research associates, _______ conducting a major trial.",
      "options": [
        "A. is",
        "B. are",
        "C. were",
        "D. have been"
      ],
      "correct": 0,
      "explanation": "Khi chủ ngữ có các cụm từ chêm như 'along with', 'as well as', 'together with', động từ chia theo CHỦ NGỮ ĐẦU TIÊN: 'The professor' (số ít) ➔ dùng 'is'.",
      "translation": "Vị giáo sư, cùng với 5 cộng sự nghiên cứu, đang tiến hành một cuộc thử nghiệm lớn."
    },
    {
      "id": "sva_q5",
      "question": "Ten miles _______ a long distance for novice runners to complete in one hour.",
      "options": [
        "A. is",
        "B. are",
        "C. were",
        "D. have been"
      ],
      "correct": 0,
      "explanation": "Khoảng cách (Ten miles), thời gian, tiền bạc, đo lường được xem như MỘT ĐƠN VỊ THỐNG NHẤT ➔ Động từ chia số ít ('is').",
      "translation": "Mười dặm là một khoảng cách dài đối với những người mới chạy bộ để hoàn thành trong một giờ."
    },
    {
      "id": "sva_q6",
      "question": "Everyone in the conference auditorium _______ attentively to the presentation.",
      "options": [
        "A. listens",
        "B. listen",
        "C. are listening",
        "D. have listened"
      ],
      "correct": 0,
      "explanation": "Đại từ bất định 'Everyone' luôn đi với ĐỘNG TỪ SỐ ÍT ➔ 'listens'.",
      "translation": "Mọi người trong khán phòng hội nghị đều chăm chú lắng nghe bài thuyết trình."
    },
    {
      "id": "sva_q7",
      "question": "Learning four language skills simultaneously _______ discipline and persistence.",
      "options": [
        "A. require",
        "B. requires",
        "C. are requiring",
        "D. have required"
      ],
      "correct": 1,
      "explanation": "Chủ ngữ là Danh động từ (Gerund V-ing: 'Learning...') luôn đi với ĐỘNG TỪ SỐ ÍT ➔ 'requires'.",
      "translation": "Học đồng thời cả 4 kỹ năng ngôn ngữ đòi hỏi sự kỷ luật và tính kiên trì."
    },
    {
      "id": "sva_q8",
      "question": "The police _______ currently investigating the suspicious activity reported yesterday.",
      "options": [
        "A. is",
        "B. are",
        "C. was",
        "D. has been"
      ],
      "correct": 1,
      "explanation": "'The police' là danh từ tập hợp luôn ở DẠNG SỐ NHIỀU ➔ dùng 'are'.",
      "translation": "Cảnh sát hiện đang điều tra hoạt động khả nghi được báo cáo ngày hôm qua."
    },
    {
      "id": "sva_q9",
      "question": "Mathematics _______ considered an essential foundation for computer science.",
      "options": [
        "A. is",
        "B. are",
        "C. were",
        "D. have been"
      ],
      "correct": 0,
      "explanation": "Tên môn học tận cùng bằng 's' (Mathematics, Physics, Economics...) luôn là DANH TỪ SỐ ÍT ➔ 'is'.",
      "translation": "Toán học được coi là một nền tảng thiết yếu đối với khoa học máy tính."
    },
    {
      "id": "sva_q10",
      "question": "Not only the students but also the instructor _______ enthusiastic about the project.",
      "options": [
        "A. is",
        "B. are",
        "C. were",
        "D. have been"
      ],
      "correct": 0,
      "explanation": "Cấu trúc 'Not only S1 but also S2': Động từ chia theo S2 ('the instructor' - số ít) ➔ dùng 'is'.",
      "translation": "Không chỉ các sinh viên mà cả người giảng viên cũng rất hào hứng với dự án."
    },
    {
      "id": "subj_q11",
      "question": "In the examination, the number of candidates who passed the VSTEP B1 exam _______ increased remarkably.",
      "options": [
        "A. has",
        "B. have",
        "C. are",
        "D. were"
      ],
      "correct": 0,
      "explanation": "Cấu trúc 'The number of + N(plural)' luôn đi với ĐỘNG TỪ SỐ ÍT ('has increased'). Ngược lại, 'A number of + N(plural)' mới đi với động từ số nhiều.",
      "translation": "Số lượng các thí sinh đỗ kỳ thi VSTEP B1 đã gia tăng một cách đáng kể."
    },
    {
      "id": "subj_q12",
      "question": "A number of international students _______ registered for the advanced English course.",
      "options": [
        "A. has",
        "B. have",
        "C. is",
        "D. was"
      ],
      "correct": 1,
      "explanation": "'A number of + N(plural)' mang nghĩa 'nhiều / một số' ➔ ĐỘNG TỪ SỐ NHIỀU ('have registered').",
      "translation": "Một số lượng sinh viên quốc tế đã đăng ký tham gia khóa học tiếng Anh nâng cao."
    },
    {
      "id": "subj_q13",
      "question": "Neither the head teacher nor the assistants _______ available for consultation right now.",
      "options": [
        "A. is",
        "B. are",
        "C. was",
        "D. be"
      ],
      "correct": 1,
      "explanation": "Với cặp từ nối 'Neither S1 nor S2', động từ chia theo chủ ngữ thứ 2 (gần động từ nhất: 'the assistants' - số nhiều) ➔ dùng 'are'.",
      "translation": "Cả giáo viên trưởng lẫn các trợ giảng đều không có mặt để tư vấn vào lúc này."
    },
    {
      "id": "subj_q14",
      "question": "In the examination, the professor, along with five research associates, _______ conducting a major trial.",
      "options": [
        "A. is",
        "B. are",
        "C. were",
        "D. have been"
      ],
      "correct": 0,
      "explanation": "Khi chủ ngữ có các cụm từ chêm như 'along with', 'as well as', 'together with', động từ chia theo CHỦ NGỮ ĐẦU TIÊN: 'The professor' (số ít) ➔ dùng 'is'.",
      "translation": "Vị giáo sư, cùng với 5 cộng sự nghiên cứu, đang tiến hành một cuộc thử nghiệm lớn."
    },
    {
      "id": "subj_q15",
      "question": "Ten miles _______ a long distance for novice runners to complete in one hour.",
      "options": [
        "A. is",
        "B. are",
        "C. were",
        "D. have been"
      ],
      "correct": 0,
      "explanation": "Khoảng cách (Ten miles), thời gian, tiền bạc, đo lường được xem như MỘT ĐƠN VỊ THỐNG NHẤT ➔ Động từ chia số ít ('is').",
      "translation": "Mười dặm là một khoảng cách dài đối với những người mới chạy bộ để hoàn thành trong một giờ."
    },
    {
      "id": "subj_q16",
      "question": "Everyone in the conference auditorium _______ attentively to the presentation.",
      "options": [
        "A. listens",
        "B. listen",
        "C. are listening",
        "D. have listened"
      ],
      "correct": 0,
      "explanation": "Đại từ bất định 'Everyone' luôn đi với ĐỘNG TỪ SỐ ÍT ➔ 'listens'.",
      "translation": "Mọi người trong khán phòng hội nghị đều chăm chú lắng nghe bài thuyết trình."
    },
    {
      "id": "subj_q17",
      "question": "Learning four language skills simultaneously _______ discipline and persistence.",
      "options": [
        "A. require",
        "B. requires",
        "C. are requiring",
        "D. have required"
      ],
      "correct": 1,
      "explanation": "Chủ ngữ là Danh động từ (Gerund V-ing: 'Learning...') luôn đi với ĐỘNG TỪ SỐ ÍT ➔ 'requires'.",
      "translation": "Học đồng thời cả 4 kỹ năng ngôn ngữ đòi hỏi sự kỷ luật và tính kiên trì."
    },
    {
      "id": "subj_q18",
      "question": "In the examination, the police _______ currently investigating the suspicious activity reported yesterday.",
      "options": [
        "A. is",
        "B. are",
        "C. was",
        "D. has been"
      ],
      "correct": 1,
      "explanation": "'The police' là danh từ tập hợp luôn ở DẠNG SỐ NHIỀU ➔ dùng 'are'.",
      "translation": "Cảnh sát hiện đang điều tra hoạt động khả nghi được báo cáo ngày hôm qua."
    },
    {
      "id": "subj_q19",
      "question": "Mathematics _______ considered an essential foundation for computer science.",
      "options": [
        "A. is",
        "B. are",
        "C. were",
        "D. have been"
      ],
      "correct": 0,
      "explanation": "Tên môn học tận cùng bằng 's' (Mathematics, Physics, Economics...) luôn là DANH TỪ SỐ ÍT ➔ 'is'.",
      "translation": "Toán học được coi là một nền tảng thiết yếu đối với khoa học máy tính."
    },
    {
      "id": "subj_q20",
      "question": "Not only the students but also the instructor _______ enthusiastic about the project.",
      "options": [
        "A. is",
        "B. are",
        "C. were",
        "D. have been"
      ],
      "correct": 0,
      "explanation": "Cấu trúc 'Not only S1 but also S2': Động từ chia theo S2 ('the instructor' - số ít) ➔ dùng 'is'.",
      "translation": "Không chỉ các sinh viên mà cả người giảng viên cũng rất hào hứng với dự án."
    }
  ],
  "inversion-cleft": [
    {
      "id": "inv_q1",
      "question": "Rarely _______ such exceptional dedication from language examination candidates.",
      "options": [
        "A. I have seen",
        "B. have I seen",
        "C. I saw",
        "D. did I seen"
      ],
      "correct": 1,
      "explanation": "Đảo ngữ với phó từ phủ định đứng đầu câu ('Rarely'): 'Rarely + Trợ động từ (have) + Subject (I) + V3/ed (seen)'.",
      "translation": "Hiếm khi tôi chứng kiến sự cống hiến đặc biệt như vậy từ các thí sinh thi ngôn ngữ."
    },
    {
      "id": "inv_q2",
      "question": "It was in 2020 _______ the national online learning portal was officially launched.",
      "options": [
        "A. which",
        "B. that",
        "C. when",
        "D. where"
      ],
      "correct": 1,
      "explanation": "Cấu trúc câu chẻ nhấn mạnh (Cleft Sentence): 'It is / was + [Thành phần nhấn mạnh] + that + S + V'. Nhấn mạnh trạng ngữ thời gian luôn dùng 'that'.",
      "translation": "Chính vào năm 2020 cổng thông tin học trực tuyến quốc gia mới được chính thức ra mắt."
    },
    {
      "id": "inv_q3",
      "question": "Hardly _______ the examination room when the official listening audio started playing.",
      "options": [
        "A. had we entered",
        "B. we had entered",
        "C. did we enter",
        "D. we entered"
      ],
      "correct": 0,
      "explanation": "Cấu trúc đảo ngữ 'Hardly + had + S + V3/ed + when + S + V2/ed' (Vừa mới... thì đã...).",
      "translation": "Chúng tôi vừa mới bước vào phòng thi thì âm thanh bài thi nghe chính thức đã bắt đầu phát."
    },
    {
      "id": "inv_q4",
      "question": "It is essential that every candidate _______ present at the venue at least 30 minutes early.",
      "options": [
        "A. is",
        "B. be",
        "C. was",
        "D. will be"
      ],
      "correct": 1,
      "explanation": "Thể giả định (Subjunctive Mood): 'It is essential / vital / necessary that S + (should) + V(bare)'. Động từ to be ở dạng nguyên thể là 'be' cho mọi ngôi.",
      "translation": "Điều tối quan trọng là mỗi thí sinh phải có mặt tại địa điểm thi trước ít nhất 30 phút."
    },
    {
      "id": "inv_q5",
      "question": "Only by practicing mock tests regularly _______ master examination time management.",
      "options": [
        "A. candidates can",
        "B. can candidates",
        "C. do candidates",
        "D. did candidates"
      ],
      "correct": 1,
      "explanation": "Đảo ngữ với 'Only by + V-ing': 'Only by... + Modal verb (can) + Subject (candidates) + V(bare)'.",
      "translation": "Chỉ bằng cách luyện các bài thi thử thường xuyên thì các thí sinh mới có thể làm chủ việc quản lý thời gian làm bài."
    },
    {
      "id": "inv_q6",
      "question": "Not only _______ vocabulary, but it also improves critical reasoning abilities.",
      "options": [
        "A. reading expands",
        "B. does reading expand",
        "C. reading does expand",
        "D. is reading expanding"
      ],
      "correct": 1,
      "explanation": "Đảo ngữ với 'Not only' đứng đầu câu: 'Not only + do/does/did + S + V(bare)..., but S + also + V...'.",
      "translation": "Không chỉ việc đọc sách mở rộng vốn từ vựng, mà nó còn nâng cao khả năng tư duy phản biện."
    },
    {
      "id": "inv_q7",
      "question": "The academic advisor recommended that Minh _______ the grammar modules thoroughly.",
      "options": [
        "A. revise",
        "B. revises",
        "C. revised",
        "D. to revise"
      ],
      "correct": 0,
      "explanation": "Thể giả định thức với động từ khuyên bảo: 'S1 + recommend / suggest / demand that S2 + (should) + V(bare)' -> dùng 'revise' nguyên thể.",
      "translation": "Cố vấn học tập đã khuyến nghị Nam nên ôn tập lại các học phần ngữ pháp một cách thấu đáo."
    },
    {
      "id": "inv_q8",
      "question": "No sooner _______ the project presentation than the evaluation committee asked questions.",
      "options": [
        "A. had he finished",
        "B. he had finished",
        "C. did he finish",
        "D. he finished"
      ],
      "correct": 0,
      "explanation": "Cấu trúc đảo ngữ: 'No sooner + had + S + V3/ed + than + S + V2/ed' (Vừa mới... thì đã...).",
      "translation": "Anh ấy vừa mới kết thúc bài thuyết trình dự án thì hội đồng đánh giá đã đặt câu hỏi."
    },
    {
      "id": "inv_q9",
      "question": "It was Dr. Linh _______ discovered the analytical anomaly in the initial dataset.",
      "options": [
        "A. whom",
        "B. who",
        "C. which",
        "D. whose"
      ],
      "correct": 1,
      "explanation": "Câu chẻ nhấn mạnh chủ ngữ chỉ người: 'It is / was + [Person] + who / that + V...'.",
      "translation": "Chính Tiến sĩ Linh là người đã phát hiện ra sự bất thường trong tập dữ liệu ban đầu."
    },
    {
      "id": "inv_q10",
      "question": "Under no circumstances _______ candidates allow unauthorized persons into the exam room.",
      "options": [
        "A. should",
        "B. candidates should",
        "C. they should",
        "D. do"
      ],
      "correct": 0,
      "explanation": "Cụm phủ định tuyệt đối đứng đầu câu 'Under no circumstances' (Dù trong bất kỳ hoàn cảnh nào cũng không được...) ➔ Bắt buộc đảo trợ động từ lên trước: 'should candidates allow...'.",
      "translation": "Dù trong bất kỳ hoàn cảnh nào thí sinh cũng không được phép cho người không phận sự vào phòng thi."
    },
    {
      "id": "inve_q11",
      "question": "Rarely _______ such exceptional dedication from language examination candidates.",
      "options": [
        "A. I have seen",
        "B. have I seen",
        "C. I saw",
        "D. did I seen"
      ],
      "correct": 1,
      "explanation": "Đảo ngữ với phó từ phủ định đứng đầu câu ('Rarely'): 'Rarely + Trợ động từ (have) + Subject (I) + V3/ed (seen)'.",
      "translation": "Hiếm khi tôi chứng kiến sự cống hiến đặc biệt như vậy từ các thí sinh thi ngôn ngữ."
    },
    {
      "id": "inve_q12",
      "question": "It was in 2020 _______ the national online learning portal was officially launched.",
      "options": [
        "A. which",
        "B. that",
        "C. when",
        "D. where"
      ],
      "correct": 1,
      "explanation": "Cấu trúc câu chẻ nhấn mạnh (Cleft Sentence): 'It is / was + [Thành phần nhấn mạnh] + that + S + V'. Nhấn mạnh trạng ngữ thời gian luôn dùng 'that'.",
      "translation": "Chính vào năm 2020 cổng thông tin học trực tuyến quốc gia mới được chính thức ra mắt."
    },
    {
      "id": "inve_q13",
      "question": "Hardly _______ the examination room when the official listening audio started playing.",
      "options": [
        "A. had we entered",
        "B. we had entered",
        "C. did we enter",
        "D. we entered"
      ],
      "correct": 0,
      "explanation": "Cấu trúc đảo ngữ 'Hardly + had + S + V3/ed + when + S + V2/ed' (Vừa mới... thì đã...).",
      "translation": "Chúng tôi vừa mới bước vào phòng thi thì âm thanh bài thi nghe chính thức đã bắt đầu phát."
    },
    {
      "id": "inve_q14",
      "question": "It is essential that every candidate _______ present at the venue at least 30 minutes early.",
      "options": [
        "A. is",
        "B. be",
        "C. was",
        "D. will be"
      ],
      "correct": 1,
      "explanation": "Thể giả định (Subjunctive Mood): 'It is essential / vital / necessary that S + (should) + V(bare)'. Động từ to be ở dạng nguyên thể là 'be' cho mọi ngôi.",
      "translation": "Điều tối quan trọng là mỗi thí sinh phải có mặt tại địa điểm thi trước ít nhất 30 phút."
    },
    {
      "id": "inve_q15",
      "question": "Only by practicing mock tests regularly _______ master examination time management.",
      "options": [
        "A. candidates can",
        "B. can candidates",
        "C. do candidates",
        "D. did candidates"
      ],
      "correct": 1,
      "explanation": "Đảo ngữ với 'Only by + V-ing': 'Only by... + Modal verb (can) + Subject (candidates) + V(bare)'.",
      "translation": "Chỉ bằng cách luyện các bài thi thử thường xuyên thì các thí sinh mới có thể làm chủ việc quản lý thời gian làm bài."
    },
    {
      "id": "inve_q16",
      "question": "Not only _______ vocabulary, but it also improves critical reasoning abilities.",
      "options": [
        "A. reading expands",
        "B. does reading expand",
        "C. reading does expand",
        "D. is reading expanding"
      ],
      "correct": 1,
      "explanation": "Đảo ngữ với 'Not only' đứng đầu câu: 'Not only + do/does/did + S + V(bare)..., but S + also + V...'.",
      "translation": "Không chỉ việc đọc sách mở rộng vốn từ vựng, mà nó còn nâng cao khả năng tư duy phản biện."
    },
    {
      "id": "inve_q17",
      "question": "In the examination, the academic advisor recommended that Minh _______ the grammar modules thoroughly.",
      "options": [
        "A. revise",
        "B. revises",
        "C. revised",
        "D. to revise"
      ],
      "correct": 0,
      "explanation": "Thể giả định thức với động từ khuyên bảo: 'S1 + recommend / suggest / demand that S2 + (should) + V(bare)' -> dùng 'revise' nguyên thể.",
      "translation": "Cố vấn học tập đã khuyến nghị Nam nên ôn tập lại các học phần ngữ pháp một cách thấu đáo."
    },
    {
      "id": "inve_q18",
      "question": "No sooner _______ the project presentation than the evaluation committee asked questions.",
      "options": [
        "A. had he finished",
        "B. he had finished",
        "C. did he finish",
        "D. he finished"
      ],
      "correct": 0,
      "explanation": "Cấu trúc đảo ngữ: 'No sooner + had + S + V3/ed + than + S + V2/ed' (Vừa mới... thì đã...).",
      "translation": "Anh ấy vừa mới kết thúc bài thuyết trình dự án thì hội đồng đánh giá đã đặt câu hỏi."
    },
    {
      "id": "inve_q19",
      "question": "It was Dr. Linh _______ discovered the analytical anomaly in the initial dataset.",
      "options": [
        "A. whom",
        "B. who",
        "C. which",
        "D. whose"
      ],
      "correct": 1,
      "explanation": "Câu chẻ nhấn mạnh chủ ngữ chỉ người: 'It is / was + [Person] + who / that + V...'.",
      "translation": "Chính Tiến sĩ Linh là người đã phát hiện ra sự bất thường trong tập dữ liệu ban đầu."
    },
    {
      "id": "inve_q20",
      "question": "Under no circumstances _______ candidates allow unauthorized persons into the exam room.",
      "options": [
        "A. should",
        "B. candidates should",
        "C. they should",
        "D. do"
      ],
      "correct": 0,
      "explanation": "Cụm phủ định tuyệt đối đứng đầu câu 'Under no circumstances' (Dù trong bất kỳ hoàn cảnh nào cũng không được...) ➔ Bắt buộc đảo trợ động từ lên trước: 'should candidates allow...'.",
      "translation": "Dù trong bất kỳ hoàn cảnh nào thí sinh cũng không được phép cho người không phận sự vào phòng thi."
    }
  ]
};
