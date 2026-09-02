/**
 * Module 7, 8, 9, 10, 11, 12, 13: Các Cấu Trúc Ngữ Pháp Trọng Điểm VSTEP B1
 * Reported Speech, Conditionals, Relative Clauses, Comparisons, Questions, Word Order, Linking Words
 */

export const REPORTED_SPEECH_DATA = {
  id: "reported-speech",
  title: "Câu Tường Thuật / Gián Tiếp (Reported Speech)",
  description: "Toàn bộ quy tắc chuyển đổi câu trực tiếp sang gián tiếp: Câu trần thuật, câu hỏi Yes/No, câu hỏi Wh-, câu mệnh lệnh/yêu cầu, quy tắc lùi thì, đổi đại từ và trạng từ chỉ thời gian, nơi chốn.",
  tenseBackshiftTable: [
    { direct: "Present Simple (V1/Vs/es)", reported: "Past Simple (V2/V-ed)" },
    { direct: "Present Continuous (am/is/are + V-ing)", reported: "Past Continuous (was/were + V-ing)" },
    { direct: "Present Perfect (have/has + V3/ed)", reported: "Past Perfect (had + V3/ed)" },
    { direct: "Past Simple (V2/V-ed)", reported: "Past Perfect (had + V3/ed)" },
    { direct: "Past Continuous (was/were + V-ing)", reported: "Past Perfect Continuous (had been + V-ing)" },
    { direct: "Future Simple (will + V)", reported: "Future in the Past (would + V)" },
    { direct: "Can / May / Must", reported: "Could / Might / Had to" }
  ],
  timePlaceConversions: [
    { direct: "now", reported: "then / at that time" },
    { direct: "today", reported: "that day" },
    { direct: "yesterday", reported: "the day before / the previous day" },
    { direct: "tomorrow", reported: "the next day / the following day" },
    { direct: "last week", reported: "the week before / the previous week" },
    { direct: "next year", reported: "the following year" },
    { direct: "ago", reported: "before" },
    { direct: "this / these", reported: "that / those" },
    { direct: "here", reported: "there" }
  ],
  speechTypes: [
    {
      type: "1. Câu trần thuật (Statements)",
      formula: "S + said (that) + S + V(lùi thì)... HOẶC S + told + O + (that) + S + V(lùi thì)...",
      example: {
        direct: '"I am preparing my research proposal," Minh said.',
        reported: 'Minh said that he was preparing his research proposal.'
      }
    },
    {
      type: "2. Câu hỏi Yes / No Questions",
      formula: "S + asked + (O) + if / whether + S + V(lùi thì, trật tự câu khẳng định)...",
      example: {
        direct: '"Do you understand the examination criteria?" the teacher asked.',
        reported: 'The teacher asked me if/whether I understood the examination criteria.'
      }
    },
    {
      type: "3. Câu hỏi Wh- Questions",
      formula: "S + asked + (O) + Wh-word + S + V(lùi thì, trật tự câu khẳng định)...",
      example: {
        direct: '"Where did you purchase that grammar textbook?" Lan asked Nam.',
        reported: 'Lan asked Nam where he had purchased that grammar textbook.'
      }
    },
    {
      type: "4. Mệnh lệnh, yêu cầu và khuyên bảo (Commands, Requests, Advice)",
      formula: "S + told / ordered / asked / requested / advised / warned + O + (not) to V(bare)",
      example: {
        direct: '"Please do not open the exam booklet until instructed," the supervisor said.',
        reported: 'The supervisor instructed the candidates not to open the exam booklet until instructed.'
      }
    }
  ]
};

export const CONDITIONALS_DATA = {
  id: "conditionals",
  title: "Câu Điều Kiện & Cấu Trúc Câu Ước (Conditionals & Wish)",
  description: "Cấu trúc, ý nghĩa và ví dụ của Câu điều kiện loại 0, 1, 2, 3, câu điều kiện hỗn hợp, đảo ngữ câu điều kiện, cấu trúc Unless, In case, và câu ước Wish/If only.",
  types: [
    {
      name: "Type 0 (Điều kiện loại 0: Chân lý, sự thật khoa học)",
      formula: "If + S + V(present simple), S + V(present simple)",
      example: "If you heat ice to 0 degrees Celsius, it melts into water."
    },
    {
      name: "Type 1 (Điều kiện loại 1: Có thật ở hiện tại hoặc tương lai)",
      formula: "If + S + V(present simple), S + will/can/may/should + V(bare)",
      example: "If you study systematically every day, you will achieve the B1 certificate easily."
    },
    {
      name: "Type 2 (Điều kiện loại 2: Giả định trái ngược với hiện tại)",
      formula: "If + S + V2/V-ed (to be dùng 'were' cho mọi ngôi), S + would/could/might + V(bare)",
      example: "If I were the Minister of Education, I would invest more funds in educational technology."
    },
    {
      name: "Type 3 (Điều kiện loại 3: Giả định trái ngược với quá khứ)",
      formula: "If + S + had + V3/V-ed, S + would/could/might + have + V3/V-ed",
      example: "If they had left the house earlier, they would not have missed the morning flight."
    },
    {
      name: "Mixed Conditional (Điều kiện hỗn hợp: Quá khứ ảnh hưởng đến hiện tại)",
      formula: "If + S + had + V3/ed (quá khứ), S + would + V(bare) (kết quả ở hiện tại)",
      example: "If I had practiced English diligently during my university years, I would speak fluently now."
    }
  ],
  advancedVariations: [
    { name: "Unless = If... not (Trừ khi, nếu không)", example: "Unless you practice listening daily, you will not improve your comprehension score." },
    { name: "In case (Phòng khi - chuẩn bị trước)", example: "Take an extra pen into the test room in case your primary pen runs out of ink." },
    { name: "As long as / Provided that (Miễn là)", example: "You can borrow this reference manual provided that you return it next Monday." },
    {
      name: "Đảo ngữ câu điều kiện (Conditionals Inversion)",
      items: [
        { type: "Loại 1", formula: "Should + S + V(bare), S + will + V...", example: "Should you require further academic guidance, please contact the faculty office." },
        { type: "Loại 2", formula: "Were + S + to V / Were + S..., S + would + V...", example: "Were I in your position, I would accept that scholarship offer." },
        { type: "Loại 3", formula: "Had + S + V3/ed, S + would have + V3/ed...", example: "Had we known about the schedule change, we would have informed you immediately." }
      ]
    },
    {
      name: "Cấu trúc câu ước (Wish / If only)",
      items: [
        { type: "Ước ở tương lai", formula: "S + wish + S + would/could + V(bare)", example: "I wish the weather would be sunny tomorrow." },
        { type: "Ước ở hiện tại", formula: "S + wish + S + V2/ed (were)", example: "I wish I had more free time to practice English speaking." },
        { type: "Ước ở quá khứ", formula: "S + wish + S + had + V3/ed", example: "He wishes he had not wasted his weekend playing video games." }
      ]
    }
  ]
};

export const RELATIVE_CLAUSES_DATA = {
  id: "relative-clauses",
  title: "Mệnh Đề Quan Hệ (Relative Clauses)",
  description: "Đại từ và trạng từ quan hệ (Who, Whom, Which, That, Whose, Where, When, Why), Mệnh đề xác định và không xác định, Rút gọn mệnh đề quan hệ.",
  pronouns: [
    { pronoun: "Who", function: "Thay thế cho danh từ chỉ người làm Chủ ngữ", example: "The professor who delivers the keynote speech is internationally recognized." },
    { pronoun: "Whom", function: "Thay thế cho danh từ chỉ người làm Tân ngữ", example: "The candidate whom the committee interviewed yesterday was exceptionally qualified." },
    { pronoun: "Which", function: "Thay thế cho danh từ chỉ vật làm Chủ ngữ hoặc Tân ngữ", example: "The laptop which I purchased last week is extremely reliable." },
    { pronoun: "That", function: "Thay thế cho cả người và vật trong Mệnh đề quan hệ xác định (Không dùng sau dấu phẩy và giới từ)", example: "All students that pass the VSTEP exam will receive certificates." },
    { pronoun: "Whose", function: "Chỉ sự sở hữu cho cả người và vật", example: "The author whose novel won the prestigious award will visit our university." },
    { pronoun: "Where / When / Why", function: "Trạng từ quan hệ chỉ Nơi chốn / Thời gian / Lý do", example: "This is the library where I study every weekend. / I remember the day when we first arrived in Hanoi." }
  ],
  definingVsNonDefining: {
    defining: {
      name: "Mệnh đề xác định (Defining)",
      description: "Cần thiết để làm rõ nghĩa của danh từ đứng trước; không có mệnh đề này câu sẽ không đủ nghĩa. Không dùng dấu phẩy, có thể dùng 'that'.",
      example: "Students who submit assignments late will lose marks."
    },
    nonDefining: {
      name: "Mệnh đề không xác định (Non-defining)",
      description: "Chỉ bổ sung thêm thông tin phụ cho danh từ đã được xác định rõ (tên riêng, có this/that/my). BẮT BUỘC có dấu phẩy, KHÔNG được dùng 'that'.",
      example: "Ha Long Bay, which is a UNESCO World Heritage site, attracts millions of international tourists annually."
    }
  },
  reducedClauses: [
    {
      type: "1. Rút gọn bằng V-ing (Khi mệnh đề quan hệ mang nghĩa CHỦ ĐỘNG)",
      rule: "Bỏ đại từ quan hệ và trợ động từ (nếu có), chuyển động từ chính về V-ing.",
      example: "The man who stands at the entrance is my supervisor. ➔ The man standing at the entrance is my supervisor."
    },
    {
      type: "2. Rút gọn bằng V3/V-ed (Khi mệnh đề quan hệ mang nghĩa BỊ ĐỘNG)",
      rule: "Bỏ đại từ quan hệ và to be, giữ lại quá khứ phân từ V3/ed.",
      example: "The scientific report which was published last month won an award. ➔ The scientific report published last month won an award."
    },
    {
      type: "3. Rút gọn bằng To-Infinitive",
      rule: "Dùng khi danh từ đứng trước có các từ: the first, the second, the last, the only, hoặc so sánh nhất.",
      example: "He was the first candidate who submitted the test. ➔ He was the first candidate to submit the test."
    }
  ]
};

export const COMPARISONS_DATA = {
  id: "comparisons",
  title: "Cấu Trúc So Sánh (Comparisons)",
  description: "So sánh bằng, so sánh hơn, so sánh nhất của tính từ & trạng từ ngắn/dài, so sánh kép (Càng... càng...), so sánh bội số.",
  structures: [
    {
      name: "1. So sánh bằng (Equality) & Không bằng",
      formula: "S1 + V + as + Adj/Adv + as + S2 / S1 + V(negative) + not as/so + Adj/Adv + as + S2",
      example: "Online learning is just as effective as traditional classroom instruction when designed properly."
    },
    {
      name: "2. So sánh hơn (Comparative)",
      formula: "Tính từ/Trạng từ ngắn: Adj/Adv + -er + than \nTính từ/Trạng từ dài: more + Adj/Adv + than",
      example: "Renewable energy sources are significantly cleaner than fossil fuels."
    },
    {
      name: "3. So sánh nhất (Superlative)",
      formula: "Tính từ/Trạng từ ngắn: the + Adj/Adv + -est \nTính từ/Trạng từ dài: the most + Adj/Adv",
      example: "Artificial intelligence is currently the most rapidly evolving technological field."
    },
    {
      name: "4. So sánh kép (Double Comparison: Càng... thì càng...)",
      formula: "The + comparative + S1 + V1, the + comparative + S2 + V2",
      example: "The more vocabulary you acquire, the more confidently you can communicate in English."
    },
    {
      name: "5. So sánh lũy tiến (Càng ngày càng...)",
      formula: "Short: Adj-er and Adj-er | Long: More and more + Adj",
      example: "Environmental pollution is becoming more and more severe worldwide."
    }
  ]
};

export const QUESTIONS_DATA = {
  id: "questions",
  title: "Các Dạng Câu Hỏi Trong Tiếng Anh (Question Forms)",
  description: "Câu hỏi Yes/No, Câu hỏi Wh-, Phân biệt câu hỏi Chủ ngữ và Tân ngữ, Câu hỏi đuôi (Tag Questions) và Câu hỏi gián tiếp (Indirect Questions).",
  sections: [
    {
      title: "Câu hỏi đuôi (Tag Questions) & Quy tắc đặc biệt",
      rules: [
        "Mệnh đề khẳng định ➔ Đuôi phủ định: You are a student, aren't you?",
        "Mệnh đề phủ định ➔ Đuôi khẳng định: He didn't come, did he?",
        "Chủ ngữ 'I am' ➔ Đuôi 'aren't I?': I am late, aren't I?",
        "Lời rủ rê 'Let's' ➔ Đuôi 'shall we?': Let's begin the review session, shall we?",
        "Câu mệnh lệnh ➔ Đuôi 'will you?': Open the door, will you?",
        "Chủ ngữ là đại từ bất định chỉ người (everyone, somebody, nobody) ➔ Đại từ ở đuôi là 'they': Everyone agreed with the proposal, didn't they?",
        "Mệnh đề chứa từ phủ định (never, seldom, rarely, hardly, neither, no) ➔ Đuôi ở dạng khẳng định: She never complains, does she?"
      ]
    },
    {
      title: "Câu hỏi gián tiếp / Nhúng (Indirect / Embedded Questions)",
      explanation: "Dùng để hỏi một cách lịch sự, nhã nhặn. Lưu ý: Trong câu hỏi gián tiếp, TRẬT TỰ TỪ TRỞ VỀ TRẬT TỰ CỦA CÂU KHẲNG ĐỊNH (Không đảo trợ động từ lên trước chủ ngữ).",
      formula: "Could you please tell me + Wh-word/if/whether + S + V...?",
      examples: [
        { direct: "Where is the examination room?", indirect: "Could you tell me where the examination room is?" },
        { direct: "What time does the train depart?", indirect: "Do you happen to know what time the train departs?" }
      ]
    }
  ]
};

export const LINKING_WORDS_DATA = {
  id: "linking-words",
  title: "Hệ Thống Từ Nối & Liên Từ Học Thuật (Academic Linking Words)",
  description: "Tổng hợp toàn diện từ nối phục vụ kỹ năng Writing & Speaking B1 phân loại theo 10 chức năng diễn đạt logic kèm quy tắc dấu câu.",
  categories: [
    {
      function: "1. Bổ sung thông tin (Addition)",
      words: ["Furthermore (Hơn nữa)", "Moreover (Hơn thế nữa)", "In addition (Ngoài ra)", "Besides (Bên cạnh đó)", "Additionally (Thêm vào đó)", "Not only... but also... (Không những... mà còn...)"],
      example: "Regular exercise strengthens the heart. Furthermore, it improves mental clarity."
    },
    {
      function: "2. Tương phản, nhượng bộ (Contrast & Concession)",
      words: ["However (Tuy nhiên)", "Nevertheless (Dẫu vậy)", "On the other hand (Mặt khác)", "Although / Even though + Clause (Mặc dù)", "In spite of / Despite + Noun/V-ing (Mặc dù)", "While / Whereas (Trong khi đó)"],
      example: "Despite facing heavy rain, the students completed the volunteer campaign enthusiastically."
    },
    {
      function: "3. Nguyên nhân, lý do (Cause & Reason)",
      words: ["Because / Since / As + Clause (Bởi vì)", "Due to / Owing to / Because of + Noun/V-ing (Do bởi)", "As a result of (Là kết quả của)"],
      example: "Due to rapid urbanization, many metropolitan cities face severe traffic congestion."
    },
    {
      function: "4. Kết quả, hệ quả (Effect & Result)",
      words: ["Therefore (Vì vậy)", "As a result (Kết quả là)", "Consequently (Hệ quả là)", "Thus (Do đó)", "Hence (Vì thế)"],
      example: "He prepared thoroughly for each exam component; therefore, he achieved top marks."
    },
    {
      function: "5. Đưa ra ví dụ (Giving Examples / Illustration)",
      words: ["For example (Ví dụ)", "For instance (Chẳng hạn như)", "Such as (Như là)", "Namely (Cụ thể là)", "To illustrate (Để minh họa)"],
      example: "Many renewable energy options, such as solar and wind power, produce zero emissions."
    },
    {
      function: "6. Trình tự thời gian, thứ tự luận điểm (Sequence & Listing)",
      words: ["Firstly / First of all (Đầu tiên)", "Secondly (Thứ hai)", "Next / Afterwards (Tiếp theo)", "Finally / Lastly (Cuối cùng)"],
      example: "First of all, we must identify the core problem. Secondly, viable solutions must be evaluated."
    },
    {
      function: "7. Tổng kết, kết luận (Summary & Conclusion)",
      words: ["In conclusion (Tóm lại)", "To summarize (Tóm tắt lại)", "In brief (Nói tóm lại)", "Overall (Nhìn chung)"],
      example: "In conclusion, learning English is an essential investment for future career advancement."
    },
    {
      function: "8. Mục đích (Purpose)",
      words: ["In order to + V (Để mà)", "So as to + V (Để mà)", "So that + Clause (Để mà)", "In order that + Clause"],
      example: "He enrolled in the preparation course so that he could pass the VSTEP B1 exam."
    },
    {
      function: "9. Nhấn mạnh (Emphasis)",
      words: ["Indeed (Thực sự)", "In fact (Trên thực tế)", "Undoubtedly (Không nghi ngờ gì nữa)", "Significantly (Đáng kể)"],
      example: "In fact, digital literacy is just as crucial as language proficiency in modern workplaces."
    },
    {
      function: "10. Điều kiện (Condition)",
      words: ["If (Nếu)", "Provided that / As long as (Miễn là)", "Unless (Trừ khi)", "In case (Phòng khi)"],
      example: "Provided that you study with discipline, steady progress is guaranteed."
    }
  ]
};
