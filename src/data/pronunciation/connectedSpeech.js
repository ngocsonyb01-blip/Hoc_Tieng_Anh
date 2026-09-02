// Master Connected Speech Corpus
export const CONNECTED_SPEECH_DATA = {
  "title": "Hiện Tượng Nối Âm & Biến Âm Trong Giao Tiếp Thực Tế (Connected Speech)",
  "sections": [
    {
      "id": "cs-1",
      "title": "1. Nối Phụ Âm sang Nguyên Âm (Consonant to Vowel Linking - C+V)",
      "description": "Khi một từ kết thúc bằng phụ âm và từ kế tiếp bắt đầu bằng nguyên âm, phụ âm cuối nối liền mượt mà sang nguyên âm tiếp theo như một âm tiết duy nhất.",
      "rules": [
        {
          "name": "Nối phụ âm đơn",
          "explanation": "Âm cuối nối thẳng vào nguyên âm đầu từ sau.",
          "example": "hold on ➔ /həʊl-dɒn/ | turn off ➔ /tɜː-nɒf/ | an apple ➔ /ə-næpl/ | a lot of ➔ /ə-lɒ-təv/",
          "audio": "hold on, turn off, an apple, a lot of, check it out"
        },
        {
          "name": "Nối phụ âm chặn (Stop Consonants: /p/, /t/, /k/)",
          "example": "keep it ➔ /kiː-pɪt/ | look at ➔ /lʊ-kæt/ | get up ➔ /ɡe-tʌp/",
          "audio": "keep it, look at, get up"
        }
      ]
    },
    {
      "id": "cs-2",
      "title": "2. Nối Nguyên Âm sang Nguyên Âm (Vowel to Vowel Linking với /w/ và /j/)",
      "description": "Khi từ trước kết thúc bằng nguyên âm và từ sau bắt đầu bằng nguyên âm, người bản xứ tự động chèn một âm lướt nhẹ /w/ hoặc /j/ vào giữa để tránh ngắt quãng hơi.",
      "rules": [
        {
          "name": "Chèn âm /w/ (Khi âm trước là nguyên âm tròn môi: /uː/, /əʊ/, /aʊ/)",
          "explanation": "Môi đang tròn nên tự nhiên tạo thành âm /w/ lướt sang âm kế tiếp.",
          "example": "go out ➔ /ɡəʊ -w- aʊt/ | do it ➔ /duː -w- ɪt/ | how are you ➔ /haʊ -w- ɑː juː/",
          "audio": "go out, do it, how are you, so easy"
        },
        {
          "name": "Chèn âm /j/ (Khi âm trước là nguyên âm dẹt môi: /iː/, /eɪ/, /aɪ/, /ɔɪ/)",
          "explanation": "Khóe miệng đang dẹt sang hai bên nên tự nhiên tạo thành âm /j/ lướt sang âm sau.",
          "example": "see it ➔ /siː -j- ɪt/ | I agree ➔ /aɪ -j- əˈɡriː/ | they are ➔ /ðeɪ -j- ɑː/",
          "audio": "see it, I agree, they are, say it"
        }
      ]
    },
    {
      "id": "cs-3",
      "title": "3. Nuốt Âm & Lược Bỏ Âm (Elision)",
      "description": "Trong lời nói tự nhiên tốc độ nhanh, các âm /t/ hoặc /d/ đứng kẹp giữa 2 phụ âm khác thường bị nuốt bỏ hoàn toàn để cơ miệng vận hành nhanh hơn.",
      "rules": [
        {
          "name": "Nuốt âm /t/ và /d/ giữa các phụ âm",
          "explanation": "Bỏ hẳn âm /t/, /d/ khi phát âm cả cụm.",
          "example": "next door ➔ /neks dɔːr/ | last night ➔ /lɑːs naɪt/ | you and me ➔ /juː ən miː/ | hold tight ➔ /həʊl taɪt/",
          "audio": "next door, last night, you and me, hold tight, post office"
        },
        {
          "name": "Nuốt âm /ə/ yếu trong các từ đa âm tiết",
          "explanation": "Nguyên âm /ə/ không mang trọng âm bị tiêu biến.",
          "example": "camera ➔ /ˈkæmrə/ | history ➔ /ˈhɪstri/ | family ➔ /ˈfæmli/ | interesting ➔ /ˈɪntrəstɪŋ/",
          "audio": "camera, history, family, interesting, chocolate"
        }
      ]
    },
    {
      "id": "cs-4",
      "title": "4. Đồng Hóa Âm (Assimilation)",
      "description": "Sự kết hợp giữa âm cuối của từ thứ nhất với âm /j/ đầu của từ thứ hai tạo ra một âm hoàn toàn mới.",
      "rules": [
        {
          "name": "/t/ + /j/ ➔ /tʃ/ (ch)",
          "example": "nice to meet you ➔ /miːtʃuː/ | don't you ➔ /dəʊntʃuː/ | what you need ➔ /wɒtʃuː niːd/",
          "audio": "nice to meet you, don't you, what you need"
        },
        {
          "name": "/d/ + /j/ ➔ /dʒ/ (j)",
          "example": "did you ➔ /ˈdɪdʒuː/ | would you ➔ /ˈwʊdʒuː/ | could you ➔ /ˈkʊdʒuː/",
          "audio": "did you, would you, could you"
        },
        {
          "name": "/s/ + /j/ ➔ /ʃ/ (sh)",
          "example": "miss you ➔ /ˈmɪʃuː/ | bless you ➔ /ˈbleʃuː/",
          "audio": "miss you, bless you"
        }
      ]
    },
    {
      "id": "cs-5",
      "title": "5. Dạng Yếu Của Từ Chức Năng (Weak Forms)",
      "description": "Các từ ngữ pháp (giới từ, trợ động từ, đại từ) khi không được nhấn mạnh trong câu sẽ chuyển về dạng yếu với âm /ə/.",
      "rules": [
        {
          "name": "Bảng chuyển đổi dạng mạnh (Strong) sang dạng yếu (Weak)",
          "example": "to /tuː/ ➔ /tə/ | for /fɔː/ ➔ /fə/ | can /kæn/ ➔ /kən/ | and /ænd/ ➔ /ən/ | of /ɒv/ ➔ /əv/ | from /frɒm/ ➔ /frəm/",
          "audio": "I can do it. A cup of tea. Good for you. Time and money."
        }
      ]
    }
  ]
};
