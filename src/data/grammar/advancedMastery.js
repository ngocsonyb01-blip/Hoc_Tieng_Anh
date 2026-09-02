/**
 * src/data/grammar/advancedMastery.js
 * Chuyên đề 13: Sự Hòa Hợp Giữa Chủ Ngữ & Động Từ (Subject-Verb Agreement)
 * Chuyên đề 14: Cấu Trúc Nhấn Mạnh & Đảo Ngữ (Inversion & Cleft Sentences)
 */

export const SUBJECT_VERB_AGREEMENT_DATA = {
  id: "subject-verb-agreement",
  title: "Sự Hòa Hợp Giữa Chủ Ngữ & Động Từ (Subject-Verb Agreement)",
  description: "Quy tắc cốt lõi giúp tránh bẫy ngữ pháp trong bài thi Đọc, Viết và Nghe VSTEP B1: Chủ ngữ số ít, số nhiều, danh từ tập hợp, đại từ bất định, từ nối tương quan và các cấu trúc chêm.",
  rules: [
    {
      group: "1. Các Trường Hợp Động Từ LUÔN CHIA SỐ ÍT (Singular Verb)",
      items: [
        {
          rule: "Chủ ngữ là Danh từ không đếm được (Uncountable Nouns)",
          formula: "Water / Information / Advice / News / Knowledge / Pollution... + V(singular)",
          example: "Academic information on the university portal is updated daily."
        },
        {
          rule: "Chủ ngữ là Đại từ bất định (Indefinite Pronouns)",
          formula: "Everyone, everybody, someone, nobody, nothing, each, every, either of, neither of... + V(singular)",
          example: "Everyone in the examination room is required to switch off mobile phones."
        },
        {
          rule: "Chủ ngữ chỉ Khoảng cách, Thời gian, Tiền bạc, Cân nặng, Đo lường",
          formula: "[Số lượng] + miles / hours / dollars / kilograms... + V(singular)",
          example: "Ten miles is considered a long distance to walk every morning."
        },
        {
          rule: "Chủ ngữ là Danh động từ (Gerund V-ing) hoặc Mệnh đề danh từ (That-clause / Wh-clause)",
          formula: "V-ing / That S + V... + V(singular)",
          example: "Learning English vocabulary through flashcards requires consistent practice."
        },
        {
          rule: "Tên môn học, bệnh tật, quốc gia tận cùng bằng 's'",
          formula: "Mathematics, Physics, Economics, Measles, The United States, The Philippines... + V(singular)",
          example: "Economics is one of the most popular majors at this university."
        },
        {
          rule: "Cấu trúc 'The number of + N(plural)' (Số lượng những...)",
          formula: "The number of + N(plural) + V(singular)",
          example: "The number of candidates passing the VSTEP B1 exam has increased significantly."
        }
      ]
    },
    {
      group: "2. Các Trường Hợp Động Từ LUÔN CHIA SỐ NHIỀU (Plural Verb)",
      items: [
        {
          rule: "Chủ ngữ nối bằng liên từ 'AND'",
          formula: "S1 + and + S2 + V(plural)",
          example: "Speaking fluency and listening comprehension are critical skills for the B1 test."
        },
        {
          rule: "Cấu trúc 'A number of + N(plural)' (Một số, nhiều...)",
          formula: "A number of + N(plural) + V(plural)",
          example: "A number of students have registered for the intensive mock test."
        },
        {
          rule: "Tính từ dùng như danh từ tập hợp chỉ một nhóm người ('The + Adj')",
          formula: "The poor, the rich, the elderly, the disabled, the unemployed... + V(plural)",
          example: "The elderly often experience difficulty adapting to rapid digital technologies."
        },
        {
          rule: "Danh từ tập hợp luôn ở dạng số nhiều (People, Police, Cattle, Staff)",
          formula: "The police / People... + V(plural)",
          example: "The police are currently investigating the cyber fraud incident."
        }
      ]
    },
    {
      group: "3. Quy Tắc Chia Theo Chủ Ngữ Gần / Xa Nhất (Special Correlative Rules)",
      items: [
        {
          rule: "Nối bởi: Either... or, Neither... nor, Not only... but also (Chia theo S2 - gần động từ nhất)",
          formula: "Either S1 or S2 / Neither S1 nor S2 / Not only S1 but also S2 + V(chia theo S2)",
          example: "Neither the supervisor nor the candidates were aware of the technical glitch."
        },
        {
          rule: "Nối bởi các từ chêm: as well as, along with, together with, accompanied by, in addition to (Chia theo S1 - đứng đầu)",
          formula: "S1 + along with / as well as / together with + S2 + V(chia theo S1)",
          example: "The professor, along with five research assistants, is conducting the clinical trial."
        },
        {
          rule: "Tỉ lệ phần trăm / Phân số (Some of, Half of, 60% of, None of, Most of)",
          formula: "Some / Half / Majority / % + of + N(singular/uncountable) + V(singular) \nSome / Half / Majority / % + of + N(plural) + V(plural)",
          example: "Half of the budget has been spent. / Half of the students have completed the task."
        }
      ]
    }
  ]
};

export const INVERSION_AND_CLEFT_DATA = {
  id: "inversion-cleft",
  title: "Cấu Trúc Nhấn Mạnh & Đảo Ngữ (Inversion & Cleft Sentences)",
  description: "Các cấu trúc điểm cao B1-B2 giúp tối ưu điểm số phần Writing Task 2 và Speaking: Câu chẻ It is... that, Đảo ngữ với phó từ phủ định, Only, và Thể giả định (Subjunctive Mood).",
  sections: [
    {
      title: "1. Câu Chẻ Nhấn Mạnh (Cleft Sentences với 'It is / It was... that')",
      explanation: "Dùng để nhấn mạnh một thành phần cụ thể trong câu (Chủ ngữ, Tân ngữ hoặc Trạng ngữ).",
      structures: [
        {
          type: "Nhấn mạnh Chủ ngữ (Subject)",
          formula: "It is / was + [Subject] + who / that + V + ...",
          example: "It was Dr. Minh who discovered the error in the statistical dataset."
        },
        {
          type: "Nhấn mạnh Tân ngữ (Object)",
          formula: "It is / was + [Object] + that + S + V + ...",
          example: "It is daily disciplined practice that learners need most to pass VSTEP."
        },
        {
          type: "Nhấn mạnh Trạng ngữ thời gian / nơi chốn (Adverbial)",
          formula: "It is / was + [Trạng từ / Cụm giới từ] + that + S + V + ...",
          example: "It was in 2020 that the national digital learning platform was first launched."
        }
      ]
    },
    {
      title: "2. Cấu Trúc Đảo Ngữ Trọng Tâm (Inversion Structures)",
      explanation: "Đảo trợ động từ (do/does/did/have/has/will/can) hoặc To Be lên trước Chủ ngữ sau các từ mang nghĩa phủ định hoặc giới hạn.",
      structures: [
        {
          type: "Đảo ngữ với phó từ phủ định (Never, Rarely, Seldom, Hardly, Scarcely)",
          formula: "Never / Rarely / Seldom / Hardly + Trợ động từ + S + V(bare)...",
          example: "Rarely have I witnessed such dedication from language examination candidates."
        },
        {
          type: "Cấu trúc 'Vừa mới... thì đã...' (Hardly... when / No sooner... than)",
          formula: "Hardly + had + S + V3/ed + when + S + V2/ed... \nNo sooner + had + S + V3/ed + than + S + V2/ed...",
          example: "Hardly had the teacher finished the explanation when the bell rang."
        },
        {
          type: "Đảo ngữ với 'Only' (Only when, Only after, Only by, Only then)",
          formula: "Only when / after + S + V, Trợ động từ + S + V...",
          example: "Only by practicing mock tests regularly can candidates master time management."
        },
        {
          type: "Đảo ngữ với 'Not only... but also...'",
          formula: "Not only + Trợ động từ + S + V..., but S + also + V...",
          example: "Not only does reading expand vocabulary, but it also improves cognitive focus."
        }
      ]
    },
    {
      title: "3. Thể Giả Định Thức (Subjunctive Mood với It is vital / suggest that...)",
      explanation: "Được dùng trong văn viết học thuật trang trọng; động từ trong mệnh đề 'that' luôn ở dạng NGUYÊN THỂ KHÔNG 'TO' (bare infinitive) cho mọi ngôi.",
      structures: [
        {
          type: "Với tính từ chỉ tầm quan trọng (essential, vital, crucial, important, necessary)",
          formula: "It is essential / vital / necessary + that + S + (should) + V(bare)",
          example: "It is essential that every candidate be present at the test venue 30 minutes early."
        },
        {
          type: "Với động từ khuyên bảo, yêu cầu (suggest, recommend, demand, insist, propose)",
          formula: "S1 + suggest / recommend / insist + that + S2 + (should) + V(bare)",
          example: "The instructor recommended that Nam revise the grammar review modules thoroughly."
        }
      ]
    }
  ]
};
