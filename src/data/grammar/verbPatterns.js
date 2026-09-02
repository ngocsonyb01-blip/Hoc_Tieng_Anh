/**
 * Module 4: Động Từ và Cấu Trúc Dạng Động Từ (Verb Patterns & Gerunds/Infinitives)
 * Chuẩn VSTEP B1 & CEFR B1
 */

export const VERB_PATTERNS_DATA = {
  id: "verb-patterns",
  title: "Động Từ & Các Cấu Trúc Dạng Động Từ",
  description: "Bảng danh mục đầy đủ các động từ đi với To-V, V-ing, Bare Infinitive, O + To-V, Giới từ + V-ing và các động từ đổi nghĩa tùy theo cấu trúc.",
  patterns: [
    {
      id: "v-to-inf",
      patternName: "1. Cấu trúc: Verb + To-Infinitive (Động từ đi với To V)",
      explanation: "Thường dùng với các động từ chỉ ý định, hy vọng, quyết định, hứa hẹn, kế hoạch, đồng ý hoặc từ chối trong tương lai.",
      verbList: [
        { verb: "agree", meaning: "đồng ý", example: "They agreed to cooperate on the environmental project." },
        { verb: "decide", meaning: "quyết định", example: "She decided to study abroad in Singapore." },
        { verb: "hope", meaning: "hy vọng", example: "We hope to receive your feedback soon." },
        { verb: "plan", meaning: "lên kế hoạch", example: "The academy plans to build a modern digital library." },
        { verb: "promise", meaning: "hứa", example: "He promised to submit the report on time." },
        { verb: "refuse", meaning: "từ chối", example: "The manager refused to compromise on quality standards." },
        { verb: "offer", meaning: "đề nghị", example: "The professor offered to assist us with the research." },
        { verb: "manage", meaning: "xoay xở được", example: "She managed to pass the VSTEP B1 exam on her first attempt." },
        { verb: "afford", meaning: "đủ khả năng chi trả", example: "Many students cannot afford to rent private apartments." },
        { verb: "intend", meaning: "dự định", example: "They intend to launch the mobile application next month." },
        { verb: "demand", meaning: "yêu cầu", example: "The workers demanded to have safer working conditions." },
        { verb: "hesitate", meaning: "do dự", example: "Do not hesitate to contact our support team." },
        { verb: "fail", meaning: "thất bại / không làm được", example: "He failed to meet the strict admission criteria." },
        { verb: "arrange", meaning: "sắp xếp", example: "We arranged to meet at the central conference center." },
        { verb: "pretend", meaning: "giả vờ", example: "She pretended to understand the complex algorithm." }
      ]
    },
    {
      id: "v-ing",
      patternName: "2. Cấu trúc: Verb + V-ing / Gerund (Động từ đi với Danh động từ)",
      explanation: "Thường dùng với các động từ chỉ sở thích, tận hưởng, hoàn tất, trì hoãn, đề xuất, tránh né hoặc thừa nhận.",
      verbList: [
        { verb: "enjoy", meaning: "thích thú, tận hưởng", example: "Young people enjoy exploring new cultural landmarks." },
        { verb: "avoid", meaning: "tránh né", example: "Drivers must avoid using mobile phones while driving." },
        { verb: "consider", meaning: "cân nhắc", example: "The university is considering opening an online degree program." },
        { verb: "admit", meaning: "thừa nhận", example: "The student admitted making a calculation error in the test." },
        { verb: "deny", meaning: "phủ nhận", example: "He denied leaking confidential company data." },
        { verb: "suggest", meaning: "gợi ý, đề xuất", example: "The doctor suggested taking 30 minutes of aerobic exercise daily." },
        { verb: "mind", meaning: "ngại, phiền", example: "Would you mind closing the window?" },
        { verb: "finish", meaning: "hoàn thành", example: "I have just finished reviewing the grammar handbook." },
        { verb: "postpone / delay", meaning: "hoãn lại", example: "They decided to postpone holding the festival due to severe storms." },
        { verb: "practice", meaning: "luyện tập", example: "You should practice speaking English with native speakers regularly." },
        { verb: "keep", meaning: "tiếp tục, duy trì", example: "She kept working diligently despite facing multiple obstacles." },
        { verb: "risk", meaning: "liều lĩnh, mạo hiểm", example: "Investors should not risk losing their retirement funds." },
        { verb: "recommend", meaning: "khuyên, khuyến nghị", example: "Health experts recommend drinking plenty of fresh water." },
        { verb: "appreciate", meaning: "đánh giá cao, cảm kích", example: "I truly appreciate having the opportunity to present today." },
        { verb: "involve", meaning: "liên quan, bao gồm", example: "The scientific project involves analyzing thousands of samples." }
      ]
    },
    {
      id: "v-o-to-v",
      patternName: "3. Cấu trúc: Verb + Object + To-V (Động từ + Tân ngữ + To V)",
      explanation: "Dùng khi chủ ngữ yêu cầu, cho phép, khuyến khích, nhắc nhở hoặc cảnh báo một người khác làm hành động.",
      verbList: [
        { verb: "allow / permit", meaning: "cho phép ai làm gì", example: "The library permits students to borrow up to five books." },
        { verb: "encourage", meaning: "khuyến khích ai làm gì", example: "Teachers encourage students to express their own perspectives." },
        { verb: "advise", meaning: "khuyên ai làm gì", example: "The instructor advised him to practice listening every morning." },
        { verb: "remind", meaning: "nhắc nhở ai làm gì", example: "Please remind me to submit the assignment before midnight." },
        { verb: "warn", meaning: "cảnh báo ai làm gì", example: "The weather bureau warned citizens to stay indoors." },
        { verb: "require", meaning: "yêu cầu ai làm gì", example: "The regulation requires all drivers to wear seatbelts." },
        { verb: "enable", meaning: "cho phép/tạo điều kiện cho ai làm gì", example: "The scholarship enabled her to pursue advanced academic studies." },
        { verb: "force / compel", meaning: "bắt buộc ai làm gì", example: "Severe flooding forced residents to evacuate the area." },
        { verb: "persuade", meaning: "thuyết phục ai làm gì", example: "She persuaded her colleagues to support the green proposal." },
        { verb: "invite", meaning: "mời ai làm gì", example: "They invited Professor Davis to deliver the keynote speech." }
      ]
    },
    {
      id: "v-bare",
      patternName: "4. Cấu trúc: Verb + Bare Infinitive (Động từ nguyên mẫu không 'to')",
      explanation: "Dùng sau các động từ khiếm khuyết (Modal verbs) và các động từ đặc biệt như make, let, help (có thể dùng to hoặc bare), would rather, had better.",
      verbList: [
        { verb: "make + O + V(bare)", meaning: "bắt buộc / khiến ai làm gì", example: "The rigorous training makes soldiers stay disciplined." },
        { verb: "let + O + V(bare)", meaning: "cho phép ai làm gì", example: "Parents should not let young children watch excessive screen time." },
        { verb: "help + O + (to) V", meaning: "giúp ai làm gì", example: "Regular reading helps students improve their vocabulary range." },
        { verb: "had better + V(bare)", meaning: "tốt hơn hết nên làm gì", example: "You had better leave now to avoid the rush hour traffic." },
        { verb: "would rather + V(bare)", meaning: "thà làm gì hơn", example: "I would rather take the train than travel by coach." }
      ]
    },
    {
      id: "prep-v-ing",
      patternName: "5. Cấu trúc: Preposition + V-ing (Giới từ + Danh động từ) & Cụm từ cố định",
      explanation: "Bất kỳ động từ nào đứng ngay sau một giới từ (in, on, at, about, for, without, by, of, with) ĐỀU PHẢI Ở DẠNG V-ING.",
      specialPhrases: [
        { phrase: "look forward to + V-ing", meaning: "háo hức mong đợi", example: "I look forward to hearing from you soon." },
        { phrase: "be / get used to + V-ing", meaning: "đã quen với việc gì", example: "He is used to waking up at 5:00 AM every day." },
        { phrase: "can't help + V-ing", meaning: "không thể không / không thể ngừng", example: "I couldn't help laughing at his funny performance." },
        { phrase: "can't stand / bear + V-ing", meaning: "không thể chịu đựng được", example: "She cannot stand waiting in long queues." },
        { phrase: "it is no use / it is no good + V-ing", meaning: "thật vô ích khi làm gì", example: "It is no use complaining without proposing solutions." },
        { phrase: "be worth + V-ing", meaning: "đáng để làm gì", example: "This historical museum is definitely worth visiting." },
        { phrase: "spend time/money + V-ing", meaning: "dành thời gian/tiền làm gì", example: "He spends two hours every day practicing pronunciation." }
      ]
    },
    {
      id: "meaning-shift",
      patternName: "6. Các Động Từ Thay Đổi Ý Nghĩa Khi Đi Với To-V Hoặc V-ing (CỰC KỲ QUAN TRỌNG)",
      explanation: "Những động từ này thay đổi bản chất ý nghĩa hoàn toàn tùy thuộc vào việc theo sau bởi To-V hay V-ing.",
      pairs: [
        {
          verb: "Remember",
          toV: { form: "remember + to V", meaning: "Nhớ phải làm gì (bổn phận trong tương lai)", example: "Remember to lock the laboratory door before leaving." },
          vIng: { form: "remember + V-ing", meaning: "Nhớ là đã từng làm gì trong quá khứ", example: "I clearly remember meeting him at the 2024 conference." }
        },
        {
          verb: "Forget",
          toV: { form: "forget + to V", meaning: "Quên phải làm gì", example: "Don't forget to submit your assignment by Friday." },
          vIng: { form: "forget + V-ing", meaning: "Quên một kỷ niệm/sự việc đã xảy ra trong quá khứ", example: "I will never forget receiving my first academic scholarship." }
        },
        {
          verb: "Stop",
          toV: { form: "stop + to V", meaning: "Dừng việc đang làm lại ĐỂ làm một việc khác", example: "After studying for three hours, he stopped to take a short walk." },
          vIng: { form: "stop + V-ing", meaning: "Từ bỏ, chấm dứt hoàn toàn một hành động", example: "The doctor advised him to stop smoking permanently." }
        },
        {
          verb: "Try",
          toV: { form: "try + to V", meaning: "Cố gắng, nỗ lực hết sức để làm gì", example: "She tried to solve the difficult math equation." },
          vIng: { form: "try + V-ing", meaning: "Thử làm gì xem kết quả ra sao", example: "If you have a headache, try drinking a cup of warm herbal tea." }
        },
        {
          verb: "Regret",
          toV: { form: "regret + to V", meaning: "Lấy làm tiếc khi phải thông báo điều gì (thường đi với say, inform, announce)", example: "We regret to inform you that the flight has been cancelled." },
          vIng: { form: "regret + V-ing", meaning: "Hối tiếc vì đã làm một việc trong quá khứ", example: "He deeply regrets not studying harder during his university years." }
        },
        {
          verb: "Need",
          toV: { form: "need + to V (Chủ động)", meaning: "Ai đó cần làm việc gì", example: "You need to update your computer operating system." },
          vIng: { form: "need + V-ing / to be V3 (Bị động)", meaning: "Cái gì đó cần được làm / sửa chữa", example: "The car needs washing. (= The car needs to be washed.)" }
        }
      ]
    }
  ]
};
