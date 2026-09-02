/**
 * Module 5: Động Từ Khiếm Khuyết (Modal Verbs) & Module 6: Câu Bị Động (Passive Voice)
 * Chuẩn VSTEP B1 & CEFR B1
 */

export const MODALS_DATA = {
  id: "modals",
  title: "Động Từ Khiếm Khuyết (Modal Verbs)",
  description: "Phân tích 11 động từ khiếm khuyết cơ bản và bán khiếm khuyết theo từng chức năng: Khả năng, Cho phép, Bắt buộc, Khuyên bảo, Phỏng đoán, Yêu cầu.",
  modals: [
    {
      name: "Can / Could",
      functions: [
        { use: "Khả năng ở hiện tại (Can) & quá khứ (Could)", example: "She can speak three foreign languages fluently. / When he was six, he could swim well." },
        { use: "Yêu cầu lịch sự (Could lịch sự hơn Can)", example: "Could you please explain that grammar rule again?" },
        { use: "Xin phép & Cho phép (Can/Can't)", example: "You can borrow my reference book for two days." }
      ]
    },
    {
      name: "May / Might",
      functions: [
        { use: "Dự đoán khả năng xảy ra (May: ~50%, Might: ~30%)", example: "It may rain this evening, so take an umbrella. / She might attend the seminar if she finishes early." },
        { use: "Xin phép trang trọng (May)", example: "May I ask a question regarding the scholarship criteria?" }
      ]
    },
    {
      name: "Must vs Have to vs Should / Ought to",
      functions: [
        { use: "Must: Bắt buộc từ cảm nhận chủ quan của người nói / Quy tắc tuyệt đối", example: "I must finish this assignment tonight because I want a high grade." },
        { use: "Have to: Bắt buộc khách quan do luật lệ, quy định từ bên ngoài", example: "Students have to wear uniforms on Mondays according to academy regulations." },
        { use: "Mustn't (Cấm đoán tuyệt đối)", example: "Candidates mustn't bring electronic devices into the examination room." },
        { use: "Don't have to (Không cần phải làm - không bắt buộc)", example: "Tomorrow is Sunday, so we don't have to wake up early." },
        { use: "Should / Ought to (Lời khuyên, nên làm gì)", example: "You should review vocabulary every morning for better retention." }
      ]
    },
    {
      name: "Will / Would / Shall",
      functions: [
        { use: "Would you like...? (Lời mời lịch sự)", example: "Would you like a cup of green tea?" },
        { use: "Shall I / Shall we...? (Lời đề nghị giúp đỡ, rủ rê)", example: "Shall we start our group presentation now?" }
      ]
    }
  ]
};

export const PASSIVE_VOICE_DATA = {
  id: "passive-voice",
  title: "Câu Bị Động Toàn Diện (Passive Voice)",
  description: "Quy tắc chuyển đổi câu chủ động sang bị động trên toàn bộ các thì, thể bị động với động từ khiếm khuyết, cấu trúc bị động đặc biệt (Impersonal Passive).",
  rules: [
    "Xác định Tân ngữ (O) của câu chủ động ➔ Đưa lên làm Chủ ngữ mới (S).",
    "Chia động từ To Be theo đúng thì của động từ chính và hòa hợp với Chủ ngữ mới.",
    "Chuyển động từ chính về dạng Quá khứ phân từ (V3/V-ed).",
    "Đưa Chủ ngữ cũ về cuối câu thành 'by + O'. Có thể lược bỏ 'by' nếu chủ ngữ là đại từ mơ hồ (people, someone, they, everyone)."
  ],
  tenseMatrix: [
    { tense: "Present Simple", active: "S + V(s/es) + O", passive: "S + am/is/are + V3/ed + (by O)", example: "Many companies utilize AI technology. ➔ AI technology is utilized by many companies." },
    { tense: "Present Continuous", active: "S + am/is/are + V-ing + O", passive: "S + am/is/are + being + V3/ed", example: "Engineers are repairing the bridge. ➔ The bridge is being repaired by engineers." },
    { tense: "Present Perfect", active: "S + have/has + V3/ed + O", passive: "S + have/has + been + V3/ed", example: "The author has published three books. ➔ Three books have been published by the author." },
    { tense: "Past Simple", active: "S + V2/ed + O", passive: "S + was/were + V3/ed", example: "Alexander Fleming discovered penicillin in 1928. ➔ Penicillin was discovered by Alexander Fleming in 1928." },
    { tense: "Past Continuous", active: "S + was/were + V-ing + O", passive: "S + was/were + being + V3/ed", example: "They were painting the library at 10 AM. ➔ The library was being painted at 10 AM." },
    { tense: "Past Perfect", active: "S + had + V3/ed + O", passive: "S + had + been + V3/ed", example: "They had constructed the dam before 2015. ➔ The dam had been constructed before 2015." },
    { tense: "Future Simple", active: "S + will + V(bare) + O", passive: "S + will + be + V3/ed", example: "The academy will organize a workshop next week. ➔ A workshop will be organized next week." },
    { tense: "Modal Verbs", active: "S + Modal + V(bare) + O", passive: "S + Modal + be + V3/ed", example: "Candidates must follow the examination instructions. ➔ Examination instructions must be followed." }
  ],
  specialStructures: [
    {
      name: "Bị động khách quan / Bị động với động từ tường thuật (Impersonal Passive)",
      explanation: "Dùng với các động từ: say, think, believe, report, know, consider, expect, claim.",
      pattern1: "Active: People say that S + V... ➔ Passive 1: It is said that S + V...",
      pattern2: "Passive 2: S + is/are said + to V(bare) (cùng thì) HOẶC + to have V3/ed (lùi thì)",
      examples: [
        { en: "People believe that regular reading enhances intellectual ability.", vn: "➔ It is believed that regular reading enhances intellectual ability.\n➔ Regular reading is believed to enhance intellectual ability." }
      ]
    },
    {
      name: "Thể nhờ bảo (Causative Form: Have / Get)",
      explanation: "Nhờ ai đó làm việc gì cho mình (mang tính bị động dịch vụ).",
      formula: "Chủ động: S + have + Someone + V(bare) HOẶC S + get + Someone + to V \nBị động: S + have/get + Something + V3/V-ed (by someone)",
      examples: [
        { en: "I had the technician repair my laptop yesterday. ➔ I had my laptop repaired yesterday.", vn: "Tôi đã nhờ kỹ thuật viên sửa máy tính hôm qua. ➔ Tôi đã cho sửa máy tính hôm qua." }
      ]
    }
  ]
};
