// Master Vietnamese Common Mistakes Remediation Corpus
export const VIETNAMESE_COMMON_MISTAKES_DATA = {
  "title": "10 Lỗi Phát Âm Kinh Điển Của Người Việt & Cách Khắc Phục Triệt Để",
  "mistakes": [
    {
      "id": 1,
      "error": "Lỗi 1: Nuốt âm đuôi (Ending Sounds: /-s/, /-z/, /-t/, /-d/, /-k/, /-ks/)",
      "cause": "Tiếng Việt là ngôn ngữ đơn lập, âm cuối khép miệng không bật hơi ra ngoài. Do đó người Việt thường có thói quen nuốt chửng âm cuối tiếng Anh.",
      "danger": "Làm mất phân biệt thì, số nhiều/số ít, gây hiểu nhầm nghiêm trọng (VD: 'life', 'like', 'light', 'line', 'lie' đều đọc thành 'lai').",
      "wrongExample": "I like cat (đọc: 'Ai lai két' - nuốt cả âm /k/ và /t/)",
      "correctExample": "I like cat ➔ /aɪ laɪk kæt/ (Bật rõ âm /k/ ở like và /t/ ở cat)",
      "practiceWords": [
        "like /laɪk/",
        "life /laɪf/",
        "light /laɪt/",
        "needs /niːdz/",
        "six /sɪks/"
      ],
      "audio": "like, life, light, needs, six, five books"
    },
    {
      "id": 2,
      "error": "Lỗi 2: Nhầm lẫn âm /θ/ (th thổi) với âm /t/ hoặc /s/",
      "cause": "Tiếng Việt không có âm đặt lưỡi giữa răng /θ/.",
      "danger": "Đọc 'thank you' thành 'tanh kiu' hoặc 'sank you', 'three' thành 'tree' (cái cây) hoặc 'free' (miễn phí).",
      "wrongExample": "Thank you (đọc: 'Tanh-kiu' hoặc 'Xanh-kiu')",
      "correctExample": "Thank you ➔ /ˈθæŋk juː/ (Đặt đầu lưỡi nhô ra giữa 2 hàm răng, đẩy luồng hơi êm)",
      "practiceWords": [
        "think /θɪŋk/",
        "three /θriː/",
        "third /θɜːd/",
        "author /ˈɔːθər/",
        "bath /bɑːθ/"
      ],
      "audio": "thank you, think, three, third, author, both"
    },
    {
      "id": 3,
      "error": "Lỗi 3: Nhầm lẫn âm /ʃ/ (s nặng) và âm /s/ (s nhẹ)",
      "cause": "Người Việt thường phát âm cả /ʃ/ và /s/ thành âm /s/ nhẹ không chu môi.",
      "danger": "Không phân biệt được 'ship' (tàu thủy) và 'sip' (nhấp ngụm), 'she' (cô ấy) và 'see' (nhìn).",
      "wrongExample": "She sells sea shells (đọc đều: 'Si seo si seo')",
      "correctExample": "She sells sea shells ➔ /ʃiː selz siː ʃelz/ (Âm /ʃ/ chu môi tròn, âm /s/ dẹt môi cười)",
      "practiceWords": [
        "she /ʃiː/",
        "show /ʃəʊ/",
        "wash /wɒʃ/",
        "nation /ˈneɪʃn/",
        "fashion /ˈfæʃn/"
      ],
      "audio": "she, see, ship, sip, wash, watch"
    },
    {
      "id": 4,
      "error": "Lỗi 4: Phát âm sai đuôi -ed (/t/, /d/, /ɪd/)",
      "cause": "Đọc mọi đuôi -ed thành /ɪd/ (VD: worked đọc thành 'quấc-kịt' thay vì /wɜːkt/).",
      "danger": "Mất điểm nặng tiêu chí Grammar & Pronunciation trong Speaking.",
      "wrongExample": "I worked yesterday (đọc: 'Ai quấc-kịt dét-tơ-đây')",
      "correctExample": "I worked yesterday ➔ /aɪ wɜːkt ˈjestədeɪ/ (Đuôi -ed phát âm là /t/)",
      "rulesSummary": [
        "1. Đuôi /ɪd/: Tận cùng là /t/ hoặc /d/ (wanted, decided, needed, invited).",
        "2. Đuôi /t/: Tận cùng là phụ âm vô thanh: /p, k, f, s, ʃ, tʃ/ (stopped, looked, laughed, washed, watched).",
        "3. Đuôi /d/: Các trường hợp nguyên âm và phụ âm hữu thanh còn lại (played, cleaned, lived, studied)."
      ],
      "practiceWords": [
        "worked /wɜːkt/",
        "stopped /stɒpt/",
        "needed /ˈniːdɪd/",
        "played /pleɪd/"
      ],
      "audio": "worked, stopped, needed, invited, played, cleaned"
    },
    {
      "id": 5,
      "error": "Lỗi 5: Phát âm sai đuôi -s / -es (/s/, /z/, /ɪz/)",
      "cause": "Bỏ quên 's' hoặc phát âm mọi đuôi thành âm /s/ xì gió không chuẩn.",
      "danger": "Không phân biệt được danh từ số nhiều và động từ chia ngôi thứ 3 số ít.",
      "wrongExample": "He watches movies (đọc: 'Hi oát mu-vi')",
      "correctExample": "He watches movies ➔ /hiː ˈwɒtʃɪz ˈmuːviz/",
      "rulesSummary": [
        "1. Đuôi /ɪz/: Tận cùng là âm xì gió: /s, z, ʃ, ʒ, tʃ, dʒ/ (buses, washes, watches, changes, boxes).",
        "2. Đuôi /s/: Tận cùng là phụ âm vô thanh: /p, t, k, f, θ/ (stops, books, cats, laughs, months).",
        "3. Đuôi /z/: Tận cùng là nguyên âm hoặc phụ âm hữu thanh (dogs, days, plays, friends, cars)."
      ],
      "practiceWords": [
        "watches /ˈwɒtʃɪz/",
        "books /bʊks/",
        "friends /frendz/",
        "buses /ˈbʌsɪz/"
      ],
      "audio": "watches, books, friends, buses, cats, dogs"
    },
    {
      "id": 6,
      "error": "Lỗi 6: Thêm âm /s/ tùy tiện giữa các từ (Over-s-ing)",
      "cause": "Tâm lý sợ thiếu 's' nên nói từ nào cũng chèn âm /s/ xì vào giữa các âm tiết.",
      "danger": "Tạo cảm giác nói không tự nhiên, ngắc ngứ và sai ngữ âm cơ bản.",
      "wrongExample": "I want to go home (đọc: 'Ai s-oan tu s-gâu hôm')",
      "correctExample": "I want to go home ➔ /aɪ wɒnt tə ɡəʊ həʊm/ (Không thêm /s/ vào want và go)",
      "practiceWords": [
        "want /wɒnt/",
        "like /laɪk/",
        "went /went/",
        "think /θɪŋk/"
      ],
      "audio": "I want to go home. We need more time."
    },
    {
      "id": 7,
      "error": "Lỗi 7: Nói đều đều không có trọng âm câu (Flat Monotone)",
      "cause": "Tiếng Việt là ngôn ngữ thanh điệu, tiếng Anh là ngôn ngữ trọng âm câu (stress-timed). Người Việt thường gán dấu thanh đều đều vào từng từ.",
      "danger": "Giọng nói đơn điệu, buồn ngủ, người bản xứ khó nắm bắt ý chính (Content Words).",
      "wrongExample": "I WANT TO GO TO THE CINEMA TONIGHT (đọc tất cả các từ cùng âm lượng và độ dài)",
      "correctExample": "I want to GO to the CINEMA toNIGHT (Nhấn mạnh GO, CINEMA, NIGHT; đọc lướt want to, to the)",
      "practiceWords": [
        "I WANT to GO to the CINEMA tonight."
      ],
      "audio": "I want to go to the cinema tonight. She loves reading books."
    },
    {
      "id": 8,
      "error": "Lỗi 8: Nhầm lẫn âm /dʒ/ (Job, June) với âm /z/ hoặc 'd' tiếng Việt",
      "cause": "Tiếng Việt không có âm bật chèn /dʒ/ nên người Việt hay đọc thành âm 'd/gi' nhẹ (job đọc thành *dóp*).",
      "danger": "Gây hiểu lầm từ vựng nghiêm trọng.",
      "wrongExample": "I am looking for a job (đọc: 'Ai am lút-king fo ơ dóp')",
      "correctExample": "I am looking for a job ➔ /aɪ əm ˈlʊkɪŋ fər ə dʒɒb/ (Chu môi, bật mạnh âm hữu thanh /dʒ/)",
      "practiceWords": [
        "job /dʒɒb/",
        "June /dʒuːn/",
        "jump /dʒʌmp/",
        "general /ˈdʒenrəl/",
        "major /ˈmeɪdʒər/"
      ],
      "audio": "job, June, jump, general, major, language"
    },
    {
      "id": 9,
      "error": "Lỗi 9: Không phân biệt nguyên âm ngắn và dài (/iː/ vs /ɪ/, /uː/ vs /ʊ/, /ɔː/ vs /ɒ/)",
      "cause": "Tiếng Việt không có độ dài nguyên âm ảnh hưởng đến nghĩa của từ.",
      "danger": "Nhầm lẫn cặp từ: sheep (cừu) vs ship (tàu), leave (rời đi) vs live (sống), full (đầy) vs fool (kẻ ngốc).",
      "wrongExample": "I live in a ship (đọc kéo dài 'live' và 'ship' thành 'leave' và 'sheep')",
      "correctExample": "I live in a ship ➔ /aɪ lɪv ɪn ə ʃɪp/ (Âm /ɪ/ dứt khoát, ngắn gọn)",
      "practiceWords": [
        "live /lɪv/ vs leave /liːv/",
        "ship /ʃɪp/ vs sheep /ʃiːp/",
        "pull /pʊl/ vs pool /puːl/"
      ],
      "audio": "live, leave, ship, sheep, pull, pool, full, fool"
    },
    {
      "id": 10,
      "error": "Lỗi 10: Nuốt âm rung /r/ hoặc nhầm lẫn âm /l/ và /n/",
      "cause": "Ảnh hưởng bởi phương ngữ vùng miền tiếng Việt (đặc biệt các tỉnh đồng bằng Bắc Bộ hay nhầm L và N).",
      "danger": "Gây hiểu sai từ vựng: light (ánh sáng) vs night (đêm), line (dòng) vs nine (số 9).",
      "wrongExample": "Good night (đọc thành: 'Gút lai')",
      "correctExample": "Good night ➔ /ɡʊd naɪt/ (Âm /n/ đẩy hơi qua mũi, âm /l/ đầu lưỡi chạm nướu răng trên)",
      "practiceWords": [
        "light /laɪt/ vs night /naɪt/",
        "line /laɪn/ vs nine /naɪn/",
        "low /ləʊ/ vs no /nəʊ/"
      ],
      "audio": "light, night, line, nine, low, no, leader, reader"
    }
  ]
};
