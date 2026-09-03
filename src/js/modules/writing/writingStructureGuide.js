/**
 * src/js/modules/writing/writingStructureGuide.js
 * Cung cấp hướng dẫn cấu trúc chi tiết, khung xương bài viết và công thức ghi điểm
 * cho từng bài viết thư (Task 1) và bài luận (Task 2) chuẩn VSTEP B1/B2.
 */

export class WritingStructureGuide {
  /**
   * Tạo hướng dẫn cấu trúc chi tiết cho Task 1 Letter
   */
  static getLetterGuide(letter) {
    const typeStr = (letter.type || '').toLowerCase();
    const isFormal = typeStr.includes('formal') && !typeStr.includes('informal');
    const isComplaint = typeStr.includes('complaint');
    const isInvitation = typeStr.includes('invitation');
    const isApology = typeStr.includes('apology');
    const isRequest = typeStr.includes('request');
    const isApplication = typeStr.includes('application') || typeStr.includes('interest');

    let categoryName = 'Thư Thân Mật (Informal Letter)';
    if (isComplaint) categoryName = 'Thư Phàn Nàn & Khiếu Nại (Formal Complaint Letter)';
    else if (isApplication) categoryName = 'Thư Ứng Tuyển / Thư Ngỏ (Formal Application Letter)';
    else if (isFormal) categoryName = 'Thư Trang Trọng / Công Việc (Formal Letter)';
    else if (isInvitation) categoryName = 'Thư Mời Bạn Bè & Lời Khuyên (Informal Invitation)';
    else if (isApology) categoryName = 'Thư Xin Lỗi & Hẹn Lại (Apology Letter)';
    else if (isRequest) categoryName = 'Thư Yêu Cầu Thông Tin (Inquiry / Request Letter)';

    const toneRule = isFormal
      ? {
          badge: 'Văn Phong Trang Trọng (Formal)',
          styleColor: 'var(--primary)',
          rules: [
            'KHÔNG dùng từ viết tắt (viết "I am" thay vì "I\'m", "do not" thay vì "don\'t").',
            'Sử dụng các cấu trúc bị động và từ vựng lịch sự (e.g. "I would be grateful if...", "I would appreciate it...").',
            'Chào mở đầu: "Dear Sir/Madam," hoặc "Dear [Họ và Tên/Chức danh],".',
            'Kết thư chuẩn: "Yours faithfully," (khi không biết tên người nhận) hoặc "Yours sincerely," (khi biết tên).'
          ]
        }
      : {
          badge: 'Văn Phong Thân Mật (Informal)',
          styleColor: 'var(--success-text)',
          rules: [
            'Được phép dùng từ viết tắt tự nhiên ("I\'m", "can\'t", "we\'ll") để tạo cảm giác gần gũi.',
            'Dùng câu cảm thán, câu hỏi tương tác nhẹ nhàng ("How are you doing?", "Guess what!").',
            'Chào mở đầu: "Dear [Tên bạn],", "Hi [Tên],".',
            'Kết thư chuẩn: "Warm regards,", "Best wishes,", "All the best,", sau đó ký tên ở dòng dưới.'
          ]
        };

    const sections = [
      {
        step: 'Phần 1',
        title: 'Lời Chào & Nêu Rõ Mục Đích Viết Thư (Salutation & Opening)',
        description: 'Chiếm 1-2 câu đầu tiên. Tuyệt đối không vòng vo; phải nói ngay lý do vì sao bạn viết lá thư này.',
        sentences: isFormal ? [
          { en: 'I am writing to formally express my dissatisfaction regarding...', vn: 'Tôi viết thư này để chính thức bày tỏ sự không hài lòng về...' },
          { en: 'I am writing this letter to request further information about...', vn: 'Tôi viết thư này để yêu cầu thêm thông tin chi tiết về...' },
          { en: 'I am writing with reference to your advertisement published on...', vn: 'Tôi viết thư này liên quan đến thông báo tuyển dụng được đăng ngày...' }
        ] : [
          { en: 'I hope you are doing well and having a wonderful week.', vn: 'Mình hy vọng bạn vẫn khỏe và đang có một tuần học tập thật vui vẻ.' },
          { en: 'I am writing this letter to invite you to visit my hometown during...', vn: 'Mình viết thư này để mời bạn về thăm quê hương mình vào dịp...' },
          { en: 'I am writing to let you know about some exciting news regarding...', vn: 'Mình viết thư này để chia sẻ với bạn một tin rất hào hứng về...' }
        ],
        tip: 'Mẹo lấy điểm: Xác định ngay mục đích theo đề bài (invite, complain, apologize hay ask for information) và biến nó thành câu đầu tiên.'
      },
      {
        step: 'Phần 2',
        title: 'Thân Bài 1: Giải Quyết Yêu Cầu Thứ Nhất & Thứ Hai Của Đề Bài',
        description: 'Tập trung cung cấp thông tin cốt lõi, bối cảnh, thời gian hoặc chi tiết sự việc theo câu hỏi 1 và 2 trong đề.',
        sentences: isFormal ? [
          { en: 'First of all, I would like to highlight that the item was received with...', vn: 'Trước hết, tôi muốn chỉ rõ rằng sản phẩm được nhận trong tình trạng...' },
          { en: 'According to the receipt #12345, the product was guaranteed to be...', vn: 'Theo hóa đơn số #12345, sản phẩm được đảm bảo là...' }
        ] : [
          { en: 'First of all, my hometown is extremely famous for its cool climate and...', vn: 'Trước hết, quê mình cực kỳ nổi tiếng với khí hậu mát mẻ và...' },
          { en: 'If you arrive next Saturday, we can easily participate in...', vn: 'Nếu bạn đến vào thứ Bảy tuần tới, chúng mình có thể cùng tham gia...' }
        ],
        tip: 'Mẹo lấy điểm: Đề thi VSTEP luôn có 2-3 gạch đầu dòng nhiệm vụ. Thân bài 1 bắt buộc phải trả lời trọn vẹn 1-2 gạch đầu dòng đầu.'
      },
      {
        step: 'Phần 3',
        title: 'Thân Bài 2: Giải Quyết Yêu Cầu Thứ Ba (Lời Khuyên, Đề Xuất, Yêu Cầu Hành Động)',
        description: 'Đưa ra các hướng giải quyết, dặn dò chuẩn bị, hoặc yêu cầu đối phương thực hiện hành động cụ thể.',
        sentences: isFormal ? [
          { en: 'Under these circumstances, I would insist on a full refund or an immediate replacement.', vn: 'Trong hoàn cảnh này, tôi yêu cầu hoàn tiền toàn bộ hoặc đổi mới ngay lập tức.' },
          { en: 'Could you please verify the schedule and confirm the exact fees at your earliest convenience?', vn: 'Xin vui lòng kiểm tra lịch trình và xác nhận mức phí chính xác sớm nhất có thể?' }
        ] : [
          { en: 'Regarding what to prepare, you should definitely bring some warm clothes and comfortable shoes.', vn: 'Về đồ đạc cần chuẩn bị, bạn nhất định nên mang áo ấm và giày thoải mái.' },
          { en: 'Don\'t forget to pack an umbrella because the weather can be a bit unpredictable.', vn: 'Đừng quên mang theo một chiếc ô vì thời tiết đôi khi hơi thất thường.' }
        ],
        tip: 'Mẹo lấy điểm: Dùng cấu trúc khuyên bảo ("You should...", "Make sure to...") hoặc yêu cầu lịch sự ("I would appreciate it if you could...").'
      },
      {
        step: 'Phần 4',
        title: 'Kết Thư & Lời Chào Ký Tên (Closing & Sign-off)',
        description: 'Tóm lược mong đợi phản hồi và ký tên theo đúng văn phong.',
        sentences: isFormal ? [
          { en: 'Thank you for your time and prompt consideration of this matter.', vn: 'Cảm ơn quý công ty đã dành thời gian xem xét kịp thời vấn đề này.' },
          { en: 'I look forward to hearing from you in the near future.\n\nYours faithfully,\n[Tên của bạn]', vn: 'Tôi mong sớm nhận được phản hồi từ quý vị.\n\nTrân trọng,\n[Tên của bạn]' }
        ] : [
          { en: 'I am really looking forward to seeing you soon in my hometown!', vn: 'Mình thực sự rất nóng lòng được gặp lại bạn tại quê hương mình!' },
          { en: 'Please let me know your decision as soon as possible.\n\nWarm regards,\n[Tên của bạn]', vn: 'Hãy cho mình biết quyết định của bạn sớm nhất nhé.\n\nThân ái,\n[Tên của bạn]' }
        ],
        tip: 'Mẹo lấy điểm: Ký tên ở dòng riêng biệt. Tuyệt đối không dùng "Yours sincerely" nếu mở đầu bằng "Dear Alex".'
      }
    ];

    return {
      categoryName,
      toneRule,
      sections,
      scoringFormula: [
        'Độ dài an toàn: 130 - 160 từ (Đề bài yêu cầu tối thiểu 120 từ, dưới 120 từ bị trừ nặng điểm).',
        'Bám sát đề bài: Trả lời đủ 100% các ý trong đề (Task Achievement chiếm 25%).',
        'Có ít nhất 4-5 từ nối: Furthermore, In addition, However, Therefore, Regarding...',
        'Không sai chính tả các từ cơ bản trong lời chào và kết bài.'
      ]
    };
  }

  /**
   * Tạo hướng dẫn cấu trúc chi tiết cho Task 2 Academic Essay
   */
  static getEssayGuide(essay) {
    const prompt = (essay.prompt || '').toLowerCase();
    const type = (essay.essayType || '').toLowerCase();

    let essayCategory = 'Bài Luận Thảo Luận 2 Chiều & Nêu Quan Điểm (Discuss Both Views)';
    let templateType = 'discuss';

    if (prompt.includes('advantages') || prompt.includes('benefits') || type.includes('advantage')) {
      essayCategory = 'Bài Luận Phân Tích Lợi Ích & Bất Lợi (Advantages & Disadvantages)';
      templateType = 'advantage';
    } else if (prompt.includes('agree') || prompt.includes('disagree') || type.includes('opinion')) {
      essayCategory = 'Bài Luận Bày Tỏ Quan Điểm Đồng Ý / Phản Đối (Agree or Disagree)';
      templateType = 'opinion';
    } else if (prompt.includes('causes') || prompt.includes('problems') || prompt.includes('solutions') || type.includes('problem')) {
      essayCategory = 'Bài Luận Về Vấn Đề & Giải Pháp (Problems & Solutions)';
      templateType = 'problem';
    }

    const structureSteps = [
      {
        part: 'ĐOẠN 1: MỞ BÀI (INTRODUCTION)',
        targetLines: '2 - 3 câu (~45 - 55 từ)',
        purpose: 'Dẫn nhập chủ đề, viết lại đề bài bằng từ ngữ của mình (Paraphrase) và nêu rõ Thesis Statement (Quan điểm của bạn).',
        formulas: [
          {
            name: 'Câu 1 (Dẫn nhập & Paraphrase đề bài):',
            frame: 'In contemporary society, the issue of [Chủ đề] has generated considerable public debate.',
            vn: 'Trong xã hội đương đại, vấn đề về [Chủ đề] đã và đang dấy lên những tranh luận đáng chú ý trong công chúng.'
          },
          {
            name: 'Câu 2 (Tuyên bố luận điểm chính - Thesis Statement):',
            frame: 'While some people argue that [Mặt phản đối/thách thức], I firmly believe that [Quan điểm cốt lõi của bạn].',
            vn: 'Mặc dù một số người cho rằng [Mặt trái], tôi kiên quyết tin rằng [Quan điểm của bạn] mang lại những tác động tích cực vượt trội hơn nhiều.'
          }
        ],
        scoringTip: 'Tuyệt đối KHÔNG chép lại 100% câu chữ của đề bài. Hãy thay thế bằng từ đồng nghĩa (e.g. modern society, significant impact, vital role).'
      },
      {
        part: 'ĐOẠN 2: THÂN BÀI 1 (BODY 1 - THEO CẤU TRÚC P.E.E.L)',
        targetLines: '4 - 5 câu (~80 - 100 từ)',
        purpose: 'Trình bày khía cạnh thứ nhất: Luận điểm 1 hoặc Mặt bất lợi / Quan điểm thứ nhất.',
        formulas: [
          {
            name: 'P - Point (Câu chủ đề Topic Sentence):',
            frame: 'On the one hand, it is undeniable that [Mặt 1] presents certain noticeable drawbacks.',
            vn: 'Một mặt, không thể phủ nhận rằng [Mặt 1] đem lại một số trở ngại đáng lưu tâm.'
          },
          {
            name: 'E - Explain (Giải thích lý do tại sao):',
            frame: 'This is primarily because [Nguyên nhân sâu xa]. Without proper control, people may suffer from...',
            vn: 'Điều này chủ yếu là do [Nguyên nhân]. Nếu không có sự kiểm soát hợp lý, mọi người có thể phải chịu...'
          },
          {
            name: 'E - Example (Ví dụ thực tế minh họa):',
            frame: 'For instance, recent statistical reports indicate that a significant number of individuals...',
            vn: 'Chẳng hạn, các báo cáo thống kê gần đây chỉ ra rằng một lượng lớn cá nhân...'
          },
          {
            name: 'L - Link (Câu chốt ý của đoạn 1):',
            frame: 'Therefore, addressing these initial issues is essential for sustainable progress.',
            vn: 'Do đó, giải quyết những tồn tại ban đầu này là điều tối cần thiết cho sự phát triển bền vững.'
          }
        ],
        scoringTip: 'Cần có từ nối mở đoạn ("On the one hand, ...") và liên từ giải thích ("For instance, ... Therefore, ...").'
      },
      {
        part: 'ĐOẠN 3: THÂN BÀI 2 (BODY 2 - LUẬN ĐIỂM CHỦ ĐẠO)',
        targetLines: '4 - 5 câu (~85 - 105 từ)',
        purpose: 'Trình bày khía cạnh thứ hai: Những lợi ích to lớn / Giải pháp đột phá / Quan điểm bạn ủng hộ.',
        formulas: [
          {
            name: 'P - Point (Câu chủ đề Topic Sentence 2):',
            frame: 'On the other hand, the profound benefits / viable solutions of [Mặt 2] cannot be overlooked.',
            vn: 'Mặt khác, những lợi ích sâu sắc / các giải pháp khả thi của [Mặt 2] là không thể phủ nhận.'
          },
          {
            name: 'E - Explain 1 (Lợi ích thứ nhất):',
            frame: 'First and foremost, it substantially enhances personal competence and fosters long-term growth.',
            vn: 'Trước hết và quan trọng nhất, điều này nâng cao rõ rệt năng lực cá nhân và thúc đẩy sự phát triển dài hạn.'
          },
          {
            name: 'E - Explain 2 (Lợi ích thứ hai / Mở rộng):',
            frame: 'In addition, from an economic and educational perspective, it creates promising opportunities for...',
            vn: 'Thêm vào đó, dưới góc độ kinh tế và giáo dục, nó tạo ra những cơ hội đầy hứa hẹn cho...'
          },
          {
            name: 'L - Link (Chốt luận điểm 2):',
            frame: 'Consequently, these positive outcomes undeniably outweigh the aforementioned challenges.',
            vn: 'Hệ quả là, những kết quả tích cực này hoàn toàn vượt trội so với các thách thức đã nêu.'
          }
        ],
        scoringTip: 'Đây là đoạn quyết định điểm số cao. Hãy dùng từ vựng học thuật B1/B2 (substantially, competence, foster, promising opportunities).'
      },
      {
        part: 'ĐOẠN 4: KẾT BÀI (CONCLUSION)',
        targetLines: '2 câu (~40 - 50 từ)',
        purpose: 'Tóm lược lại toàn bộ bài viết, khẳng định lại quan điểm và đưa ra thông điệp dự phóng tương lai.',
        formulas: [
          {
            name: 'Câu 1 (Khẳng định lại luận điểm - Rephrase Thesis):',
            frame: 'In conclusion, although certain challenges exist regarding this trend, I firmly reaffirm that its positive merits are overwhelmingly dominant.',
            vn: 'Tóm lại, mặc dù một số thách thức vẫn còn tồn tại đối với xu hướng này, tôi khẳng định mạnh mẽ rằng các giá trị tích cực của nó là vượt trội hơn hẳn.'
          },
          {
            name: 'Câu 2 (Đưa ra khuyến nghị / Tầm nhìn tương lai):',
            frame: 'Moving forward, both the government and citizens should cooperate actively to maximize these valuable opportunities.',
            vn: 'Hướng tới tương lai, cả chính quyền và người dân nên chủ động phối hợp để tối đa hóa những cơ hội quý giá này.'
          }
        ],
        scoringTip: 'Không bao giờ được đưa thêm ý tưởng hoàn toàn mới vào kết bài. Chỉ tóm tắt lại những gì đã chứng minh ở thân bài.'
      }
    ];

    return {
      essayCategory,
      structureSteps,
      scoringChecklist: [
        'Độ dài tiêu chuẩn: 260 - 280 từ (Tối thiểu 250 từ, dưới 250 từ sẽ bị trừ điểm Task Fulfillment).',
        'Bố cục 4 đoạn rõ ràng: Thụt đầu dòng hoặc cách dòng giữa các đoạn văn.',
        'Sử dụng ít nhất 6-8 từ nối học thuật: Furthermore, Moreover, Consequently, On the one hand, On the other hand, In conclusion...',
        'Có câu phức chứa mệnh đề quan hệ (which, who, that) hoặc liên từ phụ thuộc (although, whereas, because, if).'
      ]
    };
  }
}
