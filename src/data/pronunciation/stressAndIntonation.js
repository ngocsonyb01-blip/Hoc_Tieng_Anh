// Master Stress and Intonation Corpus
export const STRESS_AND_INTONATION_DATA = {
  "wordStress": {
    "title": "Quy Tắc Trọng Âm",
    "rules": [
      {
        "id": "ws-1",
        "ruleName": "1. Từ 2 âm tiết: Danh từ & Tính từ nhấn âm 1",
        "explanation": "Đa số danh từ và tính từ có 2 âm tiết đều có trọng âm rơi vào âm tiết thứ nhất.",
        "examples": [
          {
            "word": "table",
            "ipa": "/ˈteɪbl/",
            "pos": "noun",
            "meaning": "cái bàn"
          },
          {
            "word": "student",
            "ipa": "/ˈstjuːdnt/",
            "pos": "noun",
            "meaning": "sinh viên"
          },
          {
            "word": "happy",
            "ipa": "/ˈhæpi/",
            "pos": "adj",
            "meaning": "hạnh phúc"
          },
          {
            "word": "clever",
            "ipa": "/ˈklevər/",
            "pos": "adj",
            "meaning": "thông minh"
          },
          {
            "word": "doctor",
            "ipa": "/ˈdɒktər/",
            "pos": "noun",
            "meaning": "bác sĩ"
          },
          {
            "word": "simple",
            "ipa": "/ˈsɪmpl/",
            "pos": "adj",
            "meaning": "đơn giản"
          }
        ],
        "exceptions": [
          "hotel /həʊˈtel/",
          "machine /məˈʃiːn/",
          "police /pəˈliːs/",
          "alone /əˈləʊn/",
          "advice /ədˈvaɪs/"
        ]
      },
      {
        "id": "ws-2",
        "ruleName": "2. Từ 2 âm tiết: Động từ nhấn âm 2",
        "explanation": "Đa số động từ có 2 âm tiết có trọng âm rơi vào âm tiết thứ hai.",
        "examples": [
          {
            "word": "decide",
            "ipa": "/dɪˈsaɪd/",
            "pos": "verb",
            "meaning": "quyết định"
          },
          {
            "word": "explain",
            "ipa": "/ɪkˈspleɪn/",
            "pos": "verb",
            "meaning": "giải thích"
          },
          {
            "word": "arrive",
            "ipa": "/əˈraɪv/",
            "pos": "verb",
            "meaning": "đến nơi"
          },
          {
            "word": "relax",
            "ipa": "/rɪˈlæks/",
            "pos": "verb",
            "meaning": "thư giãn"
          },
          {
            "word": "agree",
            "ipa": "/əˈɡriː/",
            "pos": "verb",
            "meaning": "đồng ý"
          },
          {
            "word": "forget",
            "ipa": "/fəˈɡet/",
            "pos": "verb",
            "meaning": "quên"
          }
        ],
        "exceptions": [
          "happen /ˈhæpən/",
          "open /ˈəʊpən/",
          "listen /ˈlɪsn/",
          "finish /ˈfɪnɪʃ/",
          "follow /ˈfɒləʊ/"
        ]
      },
      {
        "id": "ws-3",
        "ruleName": "3. Hậu tố nhận trọng âm chính nó (-ee, -eer, -ese, -esque, -ique)",
        "explanation": "Các từ tận cùng bằng các hậu tố này thì trọng âm rơi CHÍNH VÀO âm tiết chứa hậu tố đó.",
        "examples": [
          {
            "word": "employee",
            "ipa": "/ɪmˈplɔɪiː/",
            "pos": "noun",
            "meaning": "nhân viên"
          },
          {
            "word": "volunteer",
            "ipa": "/ˌvɒlənˈtɪər/",
            "pos": "noun/verb",
            "meaning": "tình nguyện viên"
          },
          {
            "word": "Vietnamese",
            "ipa": "/ˌvjetnəˈmiːz/",
            "pos": "noun/adj",
            "meaning": "tiếng/người Việt Nam"
          },
          {
            "word": "unique",
            "ipa": "/juˈniːk/",
            "pos": "adj",
            "meaning": "độc nhất"
          },
          {
            "word": "technique",
            "ipa": "/tekˈniːk/",
            "pos": "noun",
            "meaning": "kỹ thuật"
          },
          {
            "word": "picturesque",
            "ipa": "/ˌpɪktʃəˈresk/",
            "pos": "adj",
            "meaning": "đẹp như tranh"
          }
        ],
        "exceptions": [
          "coffee /ˈkɒfi/",
          "committee /kəˈmɪti/"
        ]
      },
      {
        "id": "ws-4",
        "ruleName": "4. Hậu tố kéo trọng âm rơi vào âm liền trước (-tion, -sion, -ic, -ity, -ial, -ian)",
        "explanation": "Các hậu tố này làm trọng âm rơi vào âm tiết NGAY LIỀN TRƯỚC hậu tố.",
        "examples": [
          {
            "word": "decision",
            "ipa": "/dɪˈsɪʒn/",
            "pos": "noun",
            "meaning": "quyết định"
          },
          {
            "word": "scientific",
            "ipa": "/ˌsaɪənˈtɪfɪk/",
            "pos": "adj",
            "meaning": "thuộc khoa học"
          },
          {
            "word": "ability",
            "ipa": "/əˈbɪləti/",
            "pos": "noun",
            "meaning": "khả năng"
          },
          {
            "word": "essential",
            "ipa": "/ɪˈsenʃl/",
            "pos": "adj",
            "meaning": "cần thiết"
          },
          {
            "word": "musician",
            "ipa": "/mjuˈzɪʃn/",
            "pos": "noun",
            "meaning": "nhạc sĩ"
          },
          {
            "word": "information",
            "ipa": "/ˌɪnfəˈmeɪʃn/",
            "pos": "noun",
            "meaning": "thông tin"
          }
        ],
        "exceptions": [
          "politics /ˈpɒlətɪks/",
          "catholic /ˈkæθlɪk/"
        ]
      },
      {
        "id": "ws-5",
        "ruleName": "5. Hậu tố kéo trọng âm về âm thứ 3 từ cuối (-ate, -fy, -ise/-ize, -gy, -phy, -cy)",
        "explanation": "Với từ từ 3 âm tiết trở lên, các đuôi này khiến trọng âm nhảy về âm tiết thứ 3 đếm từ đuôi lên.",
        "examples": [
          {
            "word": "educate",
            "ipa": "/ˈedʒukeɪt/",
            "pos": "verb",
            "meaning": "giáo dục"
          },
          {
            "word": "simplify",
            "ipa": "/ˈsɪmplɪfaɪ/",
            "pos": "verb",
            "meaning": "đơn giản hóa"
          },
          {
            "word": "organize",
            "ipa": "/ˈɔːɡənaɪz/",
            "pos": "verb",
            "meaning": "tổ chức"
          },
          {
            "word": "technology",
            "ipa": "/tekˈnɒlədʒi/",
            "pos": "noun",
            "meaning": "công nghệ"
          },
          {
            "word": "photography",
            "ipa": "/fəˈtɒɡrəfi/",
            "pos": "noun",
            "meaning": "nhiếp ảnh"
          },
          {
            "word": "democracy",
            "ipa": "/dɪˈmɒkrəsi/",
            "pos": "noun",
            "meaning": "dân chủ"
          }
        ],
        "exceptions": []
      },
      {
        "id": "ws-6",
        "ruleName": "6. Tiền tố & Hậu tố trung tính (Không đổi trọng âm gốc)",
        "explanation": "Thêm các tiền tố (un-, in-, dis-, mis-, re-) hoặc hậu tố (-ful, -less, -ly, -ment, -ness, -hood, -ship) KHÔNG LÀM THAY ĐỔI vị trí trọng âm của từ gốc.",
        "examples": [
          {
            "word": "unhappy",
            "ipa": "/ʌnˈhæpi/",
            "pos": "adj",
            "meaning": "bất hạnh (gốc: happy)"
          },
          {
            "word": "disagree",
            "ipa": "/ˌdɪsəˈɡriː/",
            "pos": "verb",
            "meaning": "bất đồng (gốc: agree)"
          },
          {
            "word": "beautiful",
            "ipa": "/ˈbjuːtɪfl/",
            "pos": "adj",
            "meaning": "xinh đẹp (gốc: beauty)"
          },
          {
            "word": "hopeless",
            "ipa": "/ˈhəʊpləs/",
            "pos": "adj",
            "meaning": "vô vọng (gốc: hope)"
          },
          {
            "word": "development",
            "ipa": "/dɪˈveləpmənt/",
            "pos": "noun",
            "meaning": "sự phát triển (gốc: develop)"
          },
          {
            "word": "friendship",
            "ipa": "/ˈfrendʃɪp/",
            "pos": "noun",
            "meaning": "tình bạn (gốc: friend)"
          }
        ],
        "exceptions": []
      },
      {
        "id": "ws-7",
        "ruleName": "7. Danh từ ghép (Compound Nouns) nhấn âm thứ 1",
        "explanation": "Các danh từ ghép tạo bởi 2 danh từ hoặc Danh từ + Tính từ luôn có trọng âm rơi vào từ đầu tiên.",
        "examples": [
          {
            "word": "greenhouse",
            "ipa": "/ˈɡriːnhaʊs/",
            "pos": "noun",
            "meaning": "nhà kính"
          },
          {
            "word": "blackboard",
            "ipa": "/ˈblækbɔːd/",
            "pos": "noun",
            "meaning": "bảng đen"
          },
          {
            "word": "bedroom",
            "ipa": "/ˈbedruːm/",
            "pos": "noun",
            "meaning": "phòng ngủ"
          },
          {
            "word": "bus stop",
            "ipa": "/ˈbʌs stɒp/",
            "pos": "noun",
            "meaning": "trạm xe buýt"
          },
          {
            "word": "post office",
            "ipa": "/ˈpəʊst ɒfɪs/",
            "pos": "noun",
            "meaning": "bưu điện"
          }
        ],
        "exceptions": []
      },
      {
        "id": "ws-8",
        "ruleName": "8. Tính từ ghép (Compound Adjectives) nhấn âm thứ 2",
        "explanation": "Các tính từ ghép thường có trọng âm rơi vào từ đứng thứ hai.",
        "examples": [
          {
            "word": "well-known",
            "ipa": "/ˌwel ˈnəʊn/",
            "pos": "adj",
            "meaning": "nổi tiếng"
          },
          {
            "word": "bad-tempered",
            "ipa": "/ˌbæd ˈtempəd/",
            "pos": "adj",
            "meaning": "nóng tính"
          },
          {
            "word": "old-fashioned",
            "ipa": "/ˌəʊld ˈfæʃnd/",
            "pos": "adj",
            "meaning": "lỗi thời"
          },
          {
            "word": "short-sighted",
            "ipa": "/ˌʃɔːt ˈsaɪtɪd/",
            "pos": "adj",
            "meaning": "thiển cận / cận thị"
          },
          {
            "word": "open-minded",
            "ipa": "/ˌəʊpən ˈmaɪndɪd/",
            "pos": "adj",
            "meaning": "cởi mở"
          }
        ],
        "exceptions": []
      },
      {
        "id": "ws-9",
        "ruleName": "9. Cặp từ đổi nghĩa theo vị trí trọng âm (Noun vs Verb Pairs)",
        "explanation": "Cùng một mặt chữ: Nhấn âm 1 = Danh từ / Tính từ; Nhấn âm 2 = Động từ.",
        "examples": [
          {
            "word": "present",
            "ipa": "/ˈpreznt/ (n: món quà) vs /prɪˈzent/ (v: trình bày)",
            "pos": "noun/verb",
            "meaning": "món quà vs trình bày"
          },
          {
            "word": "record",
            "ipa": "/ˈrekɔːd/ (n: kỷ lục) vs /rɪˈkɔːd/ (v: ghi âm)",
            "pos": "noun/verb",
            "meaning": "kỷ lục vs ghi âm"
          },
          {
            "word": "contract",
            "ipa": "/ˈkɒntrækt/ (n: hợp đồng) vs /kənˈtrækt/ (v: co lại/nhiễm)",
            "pos": "noun/verb",
            "meaning": "hợp đồng vs nhiễm bệnh"
          },
          {
            "word": "export",
            "ipa": "/ˈekspɔːt/ (n: hàng xuất khẩu) vs /ɪkˈspɔːt/ (v: xuất khẩu)",
            "pos": "noun/verb",
            "meaning": "hàng xuất khẩu vs xuất khẩu"
          },
          {
            "word": "increase",
            "ipa": "/ˈɪŋkriːs/ (n: sự gia tăng) vs /ɪnˈkriːs/ (v: tăng lên)",
            "pos": "noun/verb",
            "meaning": "sự tăng vs tăng lên"
          }
        ],
        "exceptions": []
      },
      {
        "id": "ws-10",
        "ruleName": "10. Từ có tận cùng là -oo, -oon nhận trọng âm chính nó",
        "explanation": "Hầu hết các từ kết thúc bằng đuôi -oo hoặc -oon đều nhận trọng âm tại chính đuôi này.",
        "examples": [
          {
            "word": "kangaroo",
            "ipa": "/ˌkæŋɡəˈruː/",
            "pos": "noun",
            "meaning": "chuột túi"
          },
          {
            "word": "bamboo",
            "ipa": "/ˌbæmˈbuː/",
            "pos": "noun",
            "meaning": "cây tre"
          },
          {
            "word": "balloon",
            "ipa": "/bəˈluːn/",
            "pos": "noun",
            "meaning": "bóng bay"
          },
          {
            "word": "cartoon",
            "ipa": "/kɑːˈtuːn/",
            "pos": "noun",
            "meaning": "phim hoạt hình"
          },
          {
            "word": "afternoon",
            "ipa": "/ˌɑːftəˈnuːn/",
            "pos": "noun",
            "meaning": "buổi chiều"
          }
        ],
        "exceptions": []
      }
    ]
  },
  "intonation": {
    "title": "Quy Tắc Ngữ Điệu",
    "patterns": [
      {
        "id": "int-1",
        "name": "1. Ngữ điệu xuống (Falling Intonation ↘)",
        "usage": "Dùng trong: Câu trần thuật (Statements), Câu hỏi bắt đầu bằng từ để hỏi Wh- (Wh-questions), và Câu mệnh lệnh (Commands).",
        "example": "I live in Hanoi. ↘ | Where do you work? ↘ | Please sit down. ↘",
        "audioSentence": "I live in Hanoi. Where do you work? Please sit down.",
        "explanation": "Giọng điệu hạ thấp ở âm tiết nhận trọng âm cuối cùng, thể hiện sự chắc chắn, kết thúc câu và dứt khoát."
      },
      {
        "id": "int-2",
        "name": "2. Ngữ điệu lên (Rising Intonation ↗)",
        "usage": "Dùng trong: Câu hỏi Yes/No, Câu hỏi đuôi khi người nói chưa chắc chắn (Tag questions for confirmation), và Lời mời lịch sự.",
        "example": "Are you a student? ↗ | You're coming tomorrow, aren't you? ↗ | Would you like some tea? ↗",
        "audioSentence": "Are you a student? You are coming tomorrow, aren't you? Would you like some tea?",
        "explanation": "Giọng điệu nâng cao ở cuối câu, báo hiệu người nói đang tìm kiếm thông tin hoặc thể hiện sự thắc mắc."
      },
      {
        "id": "int-3",
        "name": "3. Ngữ điệu Lên - Xuống (Rise-Fall Intonation ↗ ↘)",
        "usage": "Dùng trong: Liệt kê danh sách (Lists), Câu hỏi lựa chọn (Alternative questions).",
        "example": "I bought apples ↗, oranges ↗, and bananas. ↘ | Would you prefer coffee ↗ or tea? ↘",
        "audioSentence": "I bought apples, oranges, and bananas. Would you prefer coffee or tea?",
        "explanation": "Lên giọng ở mỗi phần tử liệt kê để báo hiệu danh sách chưa hết, và hạ giọng dứt khoát ở phần tử cuối cùng."
      },
      {
        "id": "int-4",
        "name": "4. Ngữ điệu Xuống - Lên (Fall-Rise Intonation ↘ ↗)",
        "usage": "Dùng trong: Bày tỏ sự hoài nghi, do dự, lời cảnh báo nhẹ nhàng hoặc bất đồng lịch sự.",
        "example": "Well, I'm not really sure... ↘↗ | Be careful with that glass! ↘↗",
        "audioSentence": "Well, I am not really sure. Be careful with that glass.",
        "explanation": "Giọng hạ xuống rồi lướt nhẹ lên lại, thể hiện cảm xúc còn bỏ ngỏ hoặc thái độ cẩn trọng."
      }
    ]
  }
};
