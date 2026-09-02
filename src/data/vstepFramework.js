/**
 * VSTEP B1 & CEFR B1 Official Framework & Standard Research
 * Khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam (Ban hành theo Thông tư 01/2014/TT-BGDĐT)
 */

export const VSTEP_B1_SPEC = {
  title: "Khung Năng Lực Ngoại Ngữ 6 Bậc Việt Nam — Trình Độ Bậc 3 (VSTEP B1)",
  frameworkLevel: "Bậc 3 (Tương đương CEFR B1)",
  targetAudience: "Sinh viên tốt nghiệp Đại học, Học viên Cao học, Giáo viên Mầm non/Tiểu học/THCS, Cán bộ Công chức/Viên chức, Học viên Học viện Khoa học Quân sự",
  cefrEquivalence: "CEFR B1 (Threshold / Independent User)",
  vocabularyBenchmark: {
    minimumCore: 2100, // Chuẩn B1 tối thiểu
    required130Percent: 2730, // Quy tắc Mức tối thiểu × 130%
    builtLexicalUnits: 2850,
    topicsCount: 42
  },
  skillsOverview: {
    listening: {
      duration: "40 phút (bao gồm chuyển đáp án)",
      sections: 3,
      totalQuestions: 35,
      format: [
        "Part 1: 8 câu trắc nghiệm ngắn (nghe thông báo, chỉ dẫn, tin nhắn thoại, hội thoại ngắn)",
        "Part 2: 12 câu trắc nghiệm (3 bài hội thoại dài, mỗi bài 4 câu)",
        "Part 3: 15 câu trắc nghiệm (3 bài thuyết trình, bài giảng, phóng sự, mỗi bài 5 câu)"
      ],
      coreCompetencies: [
        "Hiểu ý chính và thông tin chi tiết trong các đoạn hội thoại, bài nói về chủ đề quen thuộc (công việc, trường học, sở thích)",
        "Nhận biết số liệu, thời gian, ngày tháng, đánh vần tên riêng, địa chỉ, phương tiện",
        "Xác định quan điểm, thái độ, mục đích của người nói",
        "Loại trừ bẫy thông tin (distractors) và nhận biết diễn đạt tương đương (paraphrasing)"
      ]
    },
    reading: {
      duration: "60 phút",
      sections: 4,
      totalQuestions: 40,
      format: [
        "Passage 1: Đọc thông báo, biển hiệu, quảng cáo, tờ rơi (10 câu)",
        "Passage 2: Bài đọc mô tả sự kiện, kinh nghiệm, thực tế (10 câu)",
        "Passage 3: Bài báo, tạp chí về chủ đề xã hội, văn hóa, khoa học phổ thông (10 câu)",
        "Passage 4: Bài đọc học thuật có cấu trúc phức tạp hơn (10 câu)"
      ],
      coreCompetencies: [
        "Kỹ thuật đọc lướt lấy ý chính (Skimming)",
        "Kỹ thuật quét tìm thông tin chi tiết (Scanning)",
        "Đoán nghĩa từ vựng trong ngữ cảnh (Vocabulary in context)",
        "Xác định đại từ thay thế (Reference words: it, they, this, which)",
        "Suy luận logic (Inference) và nhận diện thái độ, mục đích tác giả"
      ]
    },
    writing: {
      duration: "60 phút",
      sections: 2,
      format: [
        "Task 1: Viết thư / Email tương tác (tối thiểu 120 từ, chiếm 1/3 tổng điểm viết). Các dạng: Cảm ơn, Xin lỗi, Đưa ra lời khuyên, Yêu cầu thông tin, Mời tham gia.",
        "Task 2: Viết bài luận ngắn (tối thiểu 250 từ, chiếm 2/3 tổng điểm viết). Các dạng: Thảo luận quan điểm (Opinion / Agree or Disagree), Nguyên nhân - Giải pháp (Causes & Solutions), Ưu - Nhược điểm (Advantages & Disadvantages)."
      ],
      coreCompetencies: [
        "Bố cục bài viết 3 phần rõ ràng: Mở bài (Introduction), Thân bài (Body paragraphs), Kết luận (Conclusion)",
        "Sử dụng đa dạng từ nối (Linking words) và cấu trúc câu (Simple, Compound, Complex)",
        "Phát triển ý mạch lạc với luận điểm (Topic sentence), luận cứ (Supporting ideas) và ví dụ (Examples)",
        "Sử dụng từ vựng học thuật B1 chính xác, đúng văn phong trang trọng hoặc thân mật"
      ]
    },
    speaking: {
      duration: "12 phút (thi trên máy tính hoặc trực tiếp)",
      sections: 3,
      format: [
        "Part 1: Tương tác xã hội - Social Interaction (3 phút): Trả lời 3-6 câu hỏi ngắn về 2 chủ đề đời sống thường ngày.",
        "Part 2: Thảo luận giải pháp - Solution Discussion (4 phút): Cho 1 tình huống và 3 phương án lựa chọn. Thí sinh phải chọn 1 giải pháp tốt nhất, đưa ra lý do và phản bác 2 phương án còn lại.",
        "Part 3: Phát triển chủ đề - Topic Development (5 phút): Nói về 1 chủ đề dựa trên sơ đồ tư duy (Mind map) cho sẵn, sau đó trả lời 2-3 câu hỏi mở rộng của giám khảo."
      ],
      coreCompetencies: [
        "Phát âm rõ ràng, có ngữ điệu, đúng trọng âm từ và trọng âm câu",
        "Trôi chảy, mạch lạc, sử dụng các từ chuyển tiếp tự nhiên (Well, Actually, In my opinion, Furthermore)"
      ]
    }
  }
};

export const vstepFramework = VSTEP_B1_SPEC;
