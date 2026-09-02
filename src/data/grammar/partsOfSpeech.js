/**
 * Module 3: Các Loại Từ Trong Tiếng Anh (Parts of Speech)
 * Chuẩn VSTEP B1 & CEFR B1
 */

export const PARTS_OF_SPEECH_DATA = {
  id: "parts-of-speech",
  title: "Hệ Thống Các Từ Loại (Parts of Speech)",
  description: "Phân tích toàn diện 9 loại từ tiếng Anh: Danh từ, Đại từ, Động từ, Tính từ, Trạng từ, Từ hạn định, Mạo từ, Giới từ, Liên từ.",
  categories: [
    {
      id: "nouns",
      name: "1. Nouns (Danh từ)",
      subsections: [
        {
          title: "Danh từ đếm được (Countable) & Không đếm được (Uncountable)",
          explanation: "Danh từ đếm được có thể đi với số đếm và mạo từ a/an (a student, two books). Danh từ không đếm được chỉ chất liệu, khái niệm trừu tượng, chất lỏng và KHÔNG đi trực tiếp với số đếm hoặc a/an (information, water, advice, furniture, equipment, traffic, knowledge, research).",
          examples: [
            { en: "He provided valuable information (không đếm được).", vn: "Anh ấy đã cung cấp thông tin quý giá (không dùng *an information)." },
            { en: "A piece of advice / two pieces of furniture.", vn: "Một lời khuyên / hai món đồ nội thất (dùng từ chỉ đơn vị đếm)." }
          ]
        },
        {
          title: "Quy tắc chuyển danh từ số nhiều bất quy tắc (Irregular Plural Nouns)",
          table: [
            { singular: "man", plural: "men", vn: "người đàn ông" },
            { singular: "woman", plural: "women", vn: "người phụ nữ" },
            { singular: "child", plural: "children", vn: "đứa trẻ" },
            { singular: "person", plural: "people", vn: "người" },
            { singular: "tooth", plural: "teeth", vn: "răng" },
            { singular: "foot", plural: "feet", vn: "bàn chân" },
            { singular: "mouse", plural: "mice", vn: "chuột" },
            { singular: "criterion", plural: "criteria", vn: "tiêu chí" },
            { singular: "phenomenon", plural: "phenomena", vn: "hiện tượng" },
            { singular: "analysis", plural: "analyses", vn: "phân tích" }
          ]
        },
        {
          title: "Sở hữu cách (Possessive Case: 's)",
          rules: "Danh từ số ít / số nhiều không tận cùng là 's': thêm 's (the teacher's book, the children's toys). Danh từ số nhiều tận cùng là 's': chỉ thêm dấu phẩy ' (the students' projects). Danh từ chỉ đồ vật: dùng cấu trúc 'of' (the roof of the house)."
        }
      ]
    },
    {
      id: "pronouns",
      name: "2. Pronouns (Đại từ)",
      subsections: [
        {
          title: "Bảng tổng hợp các dạng Đại từ",
          table: [
            { subject: "I", object: "me", possAdj: "my", possPron: "mine", reflexive: "myself" },
            { subject: "You", object: "you", possAdj: "your", possPron: "yours", reflexive: "yourself / yourselves" },
            { subject: "He", object: "him", possAdj: "his", possPron: "his", reflexive: "himself" },
            { subject: "She", object: "her", possAdj: "her", possPron: "hers", reflexive: "herself" },
            { subject: "It", object: "it", possAdj: "its", possPron: "its", reflexive: "itself" },
            { subject: "We", object: "us", possAdj: "our", possPron: "ours", reflexive: "ourselves" },
            { subject: "They", object: "them", possAdj: "their", possPron: "theirs", reflexive: "themselves" }
          ]
        },
        {
          title: "Đại từ bất định (Indefinite Pronouns)",
          explanation: "Someone, somebody, something, anyone, anybody, anything, everyone, everybody, everything, no one, nobody, nothing. Lưu ý: Tất cả các đại từ bất định này ĐỀU ĐI VỚI ĐỘNG TỪ SỐ ÍT.",
          example: "Everyone is required to present their student card."
        }
      ]
    },
    {
      id: "adjectives",
      name: "3. Adjectives (Tính từ) & Trật tự tính từ",
      subsections: [
        {
          title: "Vị trí của tính từ",
          points: [
            "Đứng trước danh từ: an innovative solution, a sustainable environment.",
            "Đứng sau Linking verbs (be, look, seem, become, feel, smell, taste, remain): The presentation was extremely convincing.",
            "Đứng sau đại từ bất định: something important, someone new."
          ]
        },
        {
          title: "Quy tắc trật tự tính từ trước danh từ: OSASCOMP",
          formula: "Opinion (Ý kiến) ➔ Size (Kích thước) ➔ Age (Tuổi thọ) ➔ Shape (Hình dáng) ➔ Color (Màu sắc) ➔ Origin (Nguồn gốc) ➔ Material (Chất liệu) ➔ Purpose (Mục đích) + NOUN",
          examples: [
            { en: "a beautiful (O) small (S) modern (A) rectangular (Sh) black (C) Japanese (O) wooden (M) dining (P) table.", vn: "một chiếc bàn ăn bằng gỗ, của Nhật, màu đen, hình chữ nhật, hiện đại, nhỏ, đẹp." }
          ]
        },
        {
          title: "Tính từ đuôi -ed và -ing",
          explanation: "Tính từ đuôi -ing miêu tả tính chất, bản chất của sự vật/sự việc (This lecture is boring). Tính từ đuôi -ed miêu tả cảm xúc, tâm trạng của con người trước một tác động (The students feel bored)."
        }
      ]
    },
    {
      id: "adverbs",
      name: "4. Adverbs (Trạng từ)",
      subsections: [
        {
          title: "Phân loại trạng từ",
          types: [
            { type: "Trạng từ chỉ cách thức (Manner)", form: "Adj + -ly (careful ➔ carefully, fluent ➔ fluently). Bất quy tắc: good ➔ well, fast ➔ fast, hard ➔ hard, late ➔ late, early ➔ early." },
            { type: "Trạng từ chỉ tần suất (Frequency)", list: "always, usually, often, sometimes, rarely, never. Vị trí: Đứng trước động từ thường, đứng sau động từ to be và trợ động từ." },
            { type: "Trạng từ chỉ mức độ (Degree)", list: "very, extremely, highly, relatively, quite, completely, absolutely. Bổ nghĩa cho tính từ hoặc trạng từ khác." }
          ]
        }
      ]
    },
    {
      id: "articles",
      name: "5. Articles (Mạo từ: A, An, The & Zero Article)",
      subsections: [
        {
          title: "Mạo từ không xác định (A / An)",
          rules: "Dùng trước danh từ đếm được số ít khi được nhắc đến lần đầu tiên hoặc mang nghĩa chung chung. Dùng 'An' trước danh từ bắt đầu bằng một NGUYÊN ÂM PHÁT ÂM (/e/, /æ/, /ɪ/, /ɒ/, /ʌ/, etc.). Ví dụ: an hour (/aʊər/), an honest man, a university (/juːnɪˈvɜːrsəti/ - phát âm là phụ âm /j/ nên dùng A)."
        },
        {
          title: "Mạo từ xác định (The)",
          rules: "Dùng khi người nói và người nghe đều biết rõ đối tượng đang nói tới; vật duy nhất (the sun, the earth, the internet); so sánh nhất (the highest score); tên nhạc cụ (play the piano); tên quốc gia có dạng số nhiều hoặc chứa Republic/Kingdom/States (the United States, the United Kingdom, the Philippines); tên dãy núi, đại dương, con sông (the Amazon, the Pacific Ocean, the Himalayas)."
        },
        {
          title: "Không dùng mạo từ (Zero Article - Ø)",
          rules: "Trước danh từ số nhiều hoặc không đếm được mang nghĩa chung (Knowledge is power); trước tên bữa ăn (have breakfast); trước tên môn học, ngôn ngữ (English, Chemistry); trước tên riêng, thành phố, quốc gia đơn chiếc (Vietnam, Hanoi, France); trước tên ngọn núi đơn lẻ, hồ đơn lẻ (Mount Everest, West Lake)."
        }
      ]
    },
    {
      id: "prepositions",
      name: "6. Prepositions (Giới từ quan trọng)",
      subsections: [
        {
          title: "Giới từ chỉ thời gian: IN - ON - AT (Quy tắc kim tự tháp)",
          rules: [
            "AT (Cụ thể, nhỏ nhất): giờ giấc (at 7 AM), thời điểm chính xác (at noon, at midnight, at the moment, at Christmas).",
            "ON (Vừa phải): ngày trong tuần (on Monday), ngày tháng (on May 15th), ngày lễ cụ thể (on New Year's Day).",
            "IN (Rộng nhất): tháng (in July), mùa (in summer), năm (in 2026), thập kỷ (in the 1990s), thế kỷ (in the 21st century), buổi trong ngày (in the morning)."
          ]
        },
        {
          title: "Giới từ chỉ nơi chốn: IN - ON - AT",
          rules: [
            "AT: Địa điểm cụ thể, điểm dừng (at the airport, at home, at the bus stop, at work).",
            "ON: Trên bề mặt tiếp xúc (on the table, on the wall, on the second floor), tên đường (on Tran Phu Street).",
            "IN: Trong không gian khép kín 3D, tòa nhà, thành phố, quốc gia (in the room, in Hanoi, in Vietnam)."
          ]
        },
        {
          title: "Giới từ đi kèm (Dependent Prepositions thông dụng B1)",
          list: [
            "Depend on (phụ thuộc vào)",
            "Succeed in (thành công trong)",
            "Participate in (tham gia vào)",
            "Be interested in (quan tâm tới)",
            "Be good/bad at (giỏi/dở môn gì)",
            "Be responsible for (chịu trách nhiệm về)",
            "Be afraid of (sợ hãi)",
            "Be proud of (tự hào về)",
            "Look forward to + V-ing (trông đợi)",
            "Concentrate on (tập trung vào)"
          ]
        }
      ]
    },
    {
      id: "conjunctions",
      name: "7. Conjunctions (Liên từ)",
      subsections: [
        {
          title: "Coordinating Conjunctions (Liên từ kết hợp: FANBOYS)",
          list: "For (bởi vì), And (và), Nor (cũng không), But (nhưng), Or (hoặc), Yet (tuy nhiên), So (vì thế)."
        },
        {
          title: "Correlative Conjunctions (Liên từ tương hỗ đi theo cặp)",
          list: [
            "Both... and... (Cả hai... và...)",
            "Either... or... (Hoặc cái này hoặc cái kia)",
            "Neither... nor... (Không cái này cũng không cái kia)",
            "Not only... but also... (Không những... mà còn...)"
          ]
        },
        {
          title: "Subordinating Conjunctions (Liên từ phụ thuộc)",
          list: "Because, Since, As (nguyên nhân) | Although, Even though, While, Whereas (nhượng bộ) | In order that, So that (mục đích) | If, Unless, As long as (điều kiện) | When, While, As soon as, After, Before, Until (thời gian)."
        }
      ]
    }
  ]
};
