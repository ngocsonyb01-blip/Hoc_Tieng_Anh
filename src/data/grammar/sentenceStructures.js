/**
 * Module 1: Nền Tảng Cấu Trúc Câu (Sentence Foundations & Structures)
 * Chuẩn VSTEP B1 & CEFR B1
 */

export const SENTENCE_STRUCTURES_DATA = {
  id: "sentence-structures",
  title: "Nền Tảng Cấu Trúc Câu",
  description: "Phân tích 6 thành phần cốt lõi của câu, 5 mẫu câu cơ bản, và cách nâng cấp từ câu đơn thành câu ghép, câu phức, câu phức-ghép.",
  subtopics: [
    {
      id: "components",
      title: "1. Các Thành Phần Cốt Lõi Trong Câu",
      items: [
        {
          name: "Subject (Chủ ngữ - S)",
          role: "Người, vật, sự việc thực hiện hành động hoặc là tâm điểm được mô tả trong câu.",
          position: "Thường đứng ở đầu câu, trước động từ chính (Main Verb).",
          recognition: "Có thể là: Danh từ (The student), Đại từ (She, They), Danh động từ V-ing (Swimming is good), Cụm to-V (To learn English is essential), hoặc Mệnh đề danh từ (What he said was true).",
          examples: [
            { en: "Regular physical exercise improves memory.", vn: "Việc tập thể dục đều đặn cải thiện trí nhớ.", note: "Chủ ngữ là cụm danh từ 'Regular physical exercise'" },
            { en: "Living in a foreign country requires great adaptability.", vn: "Sống ở nước ngoài đòi hỏi khả năng thích ứng cao.", note: "Chủ ngữ là danh động từ 'Living in a foreign country'" }
          ],
          commonMistakes: [
            "Thiếu chủ ngữ (VD: *Is very important to study hard ➔ Đúng: It is very important to study hard).",
            "Trùng lặp chủ ngữ (VD: *My brother he is a doctor ➔ Đúng: My brother is a doctor)."
          ]
        },
        {
          name: "Verb (Động từ - V)",
          role: "Thể hiện hành động (action), trạng thái (state), hoặc mối liên hệ (linking) của chủ ngữ. Trái tim của mọi câu trong tiếng Anh.",
          position: "Đứng sau chủ ngữ trong câu khẳng định, đứng sau trợ động từ trong câu hỏi/phủ định.",
          recognition: "Chia theo thì (Tense), theo thể (Active/Passive) và hòa hợp với chủ ngữ (Subject-Verb Agreement).",
          examples: [
            { en: "The government implemented a new environmental policy.", vn: "Chính phủ đã thực thi một chính sách môi trường mới.", note: "Động từ hành động ở quá khứ: 'implemented'" },
            { en: "The research findings seem promising.", vn: "Các kết quả nghiên cứu có vẻ đầy triển vọng.", note: "Linking verb: 'seem' đi với tính từ 'promising'" }
          ],
          commonMistakes: [
            "Quên chia động từ theo ngôi thứ ba số ít (VD: *He study hard ➔ Đúng: He studies hard).",
            "Dùng sai dạng sau trợ động từ (VD: *She did not went ➔ Đúng: She did not go)."
          ]
        },
        {
          name: "Object (Tân ngữ - O)",
          role: "Đối tượng chịu tác động trực tiếp (Direct Object - Od) hoặc gián tiếp (Indirect Object - Oi) từ hành động của động từ ngoại (transitive verbs).",
          position: "Thường đứng ngay sau động từ ngoại hoặc đứng sau giới từ.",
          recognition: "Trả lời cho câu hỏi 'What?' (Cái gì?) hoặc 'Whom?' (Ai?). Là danh từ, đại từ tân ngữ (me, him, them), hoặc danh động từ.",
          examples: [
            { en: "The professor explained the complex theory (Od) to the students (Oi).", vn: "Giáo sư đã giải thích lý thuyết phức tạp cho các sinh viên.", note: "'the complex theory' là Tân ngữ trực tiếp, 'the students' là Tân ngữ gián tiếp" }
          ],
          commonMistakes: [
            "Dùng đại từ chủ ngữ làm tân ngữ (VD: *The teacher praised she ➔ Đúng: The teacher praised her).",
            "Thêm tân ngữ cho nội động từ không nhận tân ngữ (VD: *They arrived the airport ➔ Đúng: They arrived at the airport)."
          ]
        },
        {
          name: "Complement (Bổ ngữ - C)",
          role: "Bổ nghĩa cho Chủ ngữ (Subject Complement - Cs) hoặc bổ nghĩa cho Tân ngữ (Object Complement - Co), hoàn thiện ý nghĩa của câu.",
          position: "Bổ ngữ chủ ngữ đứng sau Linking Verbs (be, become, look, taste, seem). Bổ ngữ tân ngữ đứng sau Tân ngữ trực tiếp.",
          recognition: "Thường là tính từ (Adjective) hoặc cụm danh từ (Noun Phrase).",
          examples: [
            { en: "She became a certified translator (Cs).", vn: "Cô ấy đã trở thành một biên dịch viên được cấp chứng chỉ.", note: "Bổ ngữ chủ ngữ: 'a certified translator' giải thích cho 'She'" },
            { en: "The committee appointed him chairman (Co).", vn: "Ủy ban đã bổ nhiệm ông ấy làm chủ tịch.", note: "Bổ ngữ tân ngữ: 'chairman' bổ nghĩa cho 'him'" }
          ],
          commonMistakes: [
            "Dùng trạng từ thay vì tính từ sau Linking verbs (VD: *The soup smells deliciously ➔ Đúng: The soup smells delicious)."
          ]
        },
        {
          name: "Adverbial (Trạng ngữ - A)",
          role: "Cung cấp thêm thông tin về thời gian (When), nơi chốn (Where), cách thức (How), tần suất (How often), lý do (Why), hoặc điều kiện.",
          position: "Linh hoạt: Đầu câu, giữa câu, hoặc cuối câu.",
          recognition: "Là phó từ (carefully, yesterday) hoặc cụm giới từ (in the morning, at the library).",
          examples: [
            { en: "In recent years (A-time), global temperatures have risen significantly (A-manner).", vn: "Trong những năm gần đây, nhiệt độ toàn cầu đã tăng đáng kể." }
          ],
          commonMistakes: [
            "Đặt trạng từ chỉ cách thức chen vào giữa Động từ và Tân ngữ trực tiếp (VD: *He speaks fluently English ➔ Đúng: He speaks English fluently)."
          ]
        },
        {
          name: "Modifier (Thành phần bổ nghĩa - M)",
          role: "Bổ sung tính chất, giới hạn phạm vi hoặc chi tiết hóa cho bất kỳ danh từ, động từ hay tính từ nào trong câu.",
          position: "Tính từ đứng trước danh từ; Mệnh đề quan hệ hoặc cụm phân từ đứng ngay sau danh từ nó bổ nghĩa.",
          recognition: "Tính từ, cụm giới từ, cụm phân từ (Present/Past Participle clause), mệnh đề quan hệ.",
          examples: [
            { en: "The students enrolled in this course (M) will receive a certificate.", vn: "Những sinh viên đăng ký khóa học này sẽ nhận được chứng chỉ.", note: "'enrolled in this course' là cụm phân từ bổ nghĩa cho 'The students'" }
          ],
          commonMistakes: [
            "Treo bổ ngữ (Dangling Modifier) - chủ ngữ của cụm phân từ không trùng với chủ ngữ mệnh đề chính."
          ]
        }
      ]
    },
    {
      id: "five-patterns",
      title: "2. 5 Mẫu Câu Cơ Bản (The 5 Fundamental Sentence Patterns)",
      items: [
        {
          pattern: "Mẫu 1: S + V (Chủ ngữ + Nội động từ)",
          meaning: "Chủ ngữ tự thực hiện hành động mà không tác động lên bất kỳ tân ngữ nào.",
          verbs: "Nội động từ (Intransitive verbs): sleep, rain, arrive, laugh, exist, vanish, occur, succeed.",
          formula: "Subject + Intransitive Verb (+ Optional Adverbial)",
          examples: [
            { en: "The accident occurred yesterday afternoon.", vn: "Tai nạn đã xảy ra vào chiều hôm qua.", analysis: "S: The accident | V: occurred | A: yesterday afternoon" },
            { en: "Prices have increased steadily.", vn: "Giá cả đã tăng lên đều đặn.", analysis: "S: Prices | V: have increased | A: steadily" }
          ],
          commonMistakes: "Cố ép tân ngữ trực tiếp vào nội động từ (VD: *The plane arrived Hanoi ➔ Đúng: The plane arrived in Hanoi)."
        },
        {
          pattern: "Mẫu 2: S + V + O (Chủ ngữ + Ngoại động từ + Tân ngữ)",
          meaning: "Hành động của chủ ngữ tác động trực tiếp lên một người hoặc một vật khác.",
          verbs: "Ngoại động từ đơn (Monotransitive verbs): buy, build, destroy, meet, understand, eat, support.",
          formula: "Subject + Transitive Verb + Direct Object",
          examples: [
            { en: "Renewable energy will reduce carbon emissions.", vn: "Năng lượng tái tạo sẽ làm giảm phát thải carbon.", analysis: "S: Renewable energy | V: will reduce | O: carbon emissions" },
            { en: "Many university students face financial pressure.", vn: "Nhiều sinh viên đại học đối mặt với áp lực tài chính.", analysis: "S: Many university students | V: face | O: financial pressure" }
          ],
          commonMistakes: "Bỏ quên tân ngữ khi dùng ngoại động từ bắt buộc (VD: *I enjoy very much ➔ Đúng: I enjoy it very much)."
        },
        {
          pattern: "Mẫu 3: S + V + C (Chủ ngữ + Động từ nối + Bổ ngữ chủ ngữ)",
          meaning: "Động từ đóng vai trò cầu nối gán tính chất, đặc điểm hoặc trạng thái cho chủ ngữ.",
          verbs: "Linking verbs: be, become, seem, appear, feel, sound, taste, smell, look, remain, stay.",
          formula: "Subject + Linking Verb + Subject Complement (Noun / Adjective)",
          examples: [
            { en: "Public transportation remains the most cost-effective option.", vn: "Phương tiện giao thông công cộng vẫn là lựa chọn tiết kiệm chi phí nhất.", analysis: "S: Public transportation | V: remains | C: the most cost-effective option" },
            { en: "The project proposal sounds feasible.", vn: "Đề xuất dự án nghe có vẻ khả thi.", analysis: "S: The project proposal | V: sounds | C: feasible (Adj)" }
          ],
          commonMistakes: "Dùng trạng từ thay cho tính từ sau động từ nối (VD: *She looks beautifully today ➔ Đúng: She looks beautiful today)."
        },
        {
          pattern: "Mẫu 4: S + V + O + O (Chủ ngữ + Động từ + Tân ngữ gián tiếp + Tân ngữ trực tiếp)",
          meaning: "Chủ ngữ thực hiện hành động chuyển giao một vật (Od) cho một đối tượng nhận (Oi).",
          verbs: "Động từ lưỡng tân (Ditransitive verbs): give, send, lend, offer, teach, buy, show, tell, award.",
          formula: "Subject + Ditransitive Verb + Indirect Object (Person) + Direct Object (Thing) \nHOẶC: S + V + Od + to/for + Oi",
          examples: [
            { en: "The organization offered him a full scholarship.", vn: "Tổ chức đã trao cho anh ấy một học bổng toàn phần.", analysis: "S: The organization | V: offered | Oi: him | Od: a full scholarship" },
            { en: "The organization offered a full scholarship to him.", vn: "Tổ chức đã trao một học bổng toàn phần cho anh ấy.", analysis: "S + V + Od + to + Oi" }
          ],
          commonMistakes: "Nhầm lẫn giới từ 'to' và 'for' (give/send/lend/show ➔ to; buy/make/cook/find ➔ for)."
        },
        {
          pattern: "Mẫu 5: S + V + O + C (Chủ ngữ + Động từ + Tân ngữ + Bổ ngữ tân ngữ)",
          meaning: "Hành động của chủ ngữ khiến cho tân ngữ mang một trạng thái, danh hiệu hoặc tính chất mới.",
          verbs: "Complex transitive verbs: make, consider, elect, call, find, declare, keep, appoint.",
          formula: "Subject + Verb + Direct Object + Object Complement (Noun / Adjective / Infinitive)",
          examples: [
            { en: "Regular practice makes learning English easier.", vn: "Luyện tập thường xuyên làm cho việc học tiếng Anh trở nên dễ dàng hơn.", analysis: "S: Regular practice | V: makes | O: learning English | Co: easier (Adj)" },
            { en: "Citizens consider reliable healthcare a fundamental right.", vn: "Người dân coi việc chăm sóc sức khỏe đáng tin cậy là một quyền cơ bản.", analysis: "S: Citizens | V: consider | O: reliable healthcare | Co: a fundamental right (NP)" }
          ],
          commonMistakes: "Thêm giới từ không cần thiết giữa O và C (VD: *They elected him as the president ➔ Nên dùng: They elected him president)."
        }
      ]
    },
    {
      id: "sentence-types",
      title: "3. Phân Loại Câu & Kỹ Thuật Nâng Cấp Câu (Sentence Types & Expansion)",
      items: [
        {
          type: "Simple Sentence (Câu đơn)",
          definition: "Chứa duy nhất một mệnh đề độc lập (Independent Clause) có đầy đủ Chủ ngữ và Vị ngữ.",
          structure: "1 Independent Clause",
          examples: [
            { en: "Online education provides flexible study hours.", vn: "Giáo dục trực tuyến cung cấp thời gian học linh hoạt." },
            { en: "Both teachers and students actively participated in the academic workshop.", vn: "Cả giáo viên và sinh viên đều tích cực tham gia vào hội thảo học thuật.", note: "Chủ ngữ ghép nhưng vẫn là câu đơn" }
          ]
        },
        {
          type: "Compound Sentence (Câu ghép)",
          definition: "Kết hợp từ 2 hay nhiều mệnh đề độc lập có tầm quan trọng tương đương nhau.",
          structure: "Independent Clause + Coordinating Conjunction (FANBOYS) + Independent Clause\nHoặc: Independent Clause; Conjunctive Adverb, Independent Clause",
          connectors: "FANBOYS: For, And, Nor, But, Or, Yet, So | Trạng từ nối: However, Therefore, Moreover, In addition",
          examples: [
            { en: "Renewable energy is sustainable, but its initial installation cost remains high.", vn: "Năng lượng tái tạo thì bền vững, nhưng chi phí lắp đặt ban đầu vẫn còn cao.", note: "Nối bằng 'but' có dấu phẩy đi kèm" },
            { en: "The deadline is approaching; therefore, the team must accelerate their progress.", vn: "Hạn chót đang đến gần; vì vậy, nhóm phải đẩy nhanh tiến độ.", note: "Nối bằng chấm phẩy + therefore + dấu phẩy" }
          ]
        },
        {
          type: "Complex Sentence (Câu phức)",
          definition: "Chứa 1 mệnh đề độc lập (Main Clause) và ít nhất 1 mệnh đề phụ thuộc (Dependent Clause). Điểm mấu chốt để nâng band điểm Writing & Speaking VSTEP B1.",
          structure: "Main Clause + Subordinating Conjunction + Dependent Clause \nHOẶC: Subordinating Conjunction + Dependent Clause, Main Clause",
          subordinators: "Because, Although, Even though, While, Whereas, If, Unless, Since, After, Before, When, As soon as, So that",
          examples: [
            { en: "Although the tuition fees have increased, the university offers numerous generous scholarships.", vn: "Mặc dù học phí đã tăng, trường đại học vẫn cung cấp nhiều suất học bổng hào phóng.", note: "Mệnh đề phụ nhượng bộ đứng trước, ngăn cách bằng dấu phẩy" },
            { en: "Students who participate in extracurricular activities often develop superior leadership skills.", vn: "Những sinh viên tham gia hoạt động ngoại khóa thường phát triển kỹ năng lãnh đạo vượt trội.", note: "Mệnh đề quan hệ 'who participate...' bổ nghĩa cho 'Students'" }
          ]
        },
        {
          type: "Compound-Complex Sentence (Câu phức - ghép)",
          definition: "Chứa ít nhất 2 mệnh đề độc lập và ít nhất 1 mệnh đề phụ thuộc. Dạng câu thể hiện tư duy ngữ pháp cao cấp.",
          structure: "Dependent Clause, Independent Clause + Coordinating Conjunction + Independent Clause",
          examples: [
            { en: "Because natural resources are depleting rapidly, countries must invest in green technologies, and citizens should adopt sustainable lifestyles.", vn: "Bởi vì tài nguyên thiên nhiên đang cạn kiệt nhanh chóng, các quốc gia phải đầu tư vào công nghệ xanh, và người dân nên áp dụng lối sống bền vững.", note: "1 Mệnh đề phụ (Because...) + 2 Mệnh đề độc lập nối bằng ', and'" }
          ]
        }
      ]
    },
    {
      id: "expansion-guide",
      title: "4. Quy Trình 4 Bước Nâng Cấp Câu Cho VSTEP B1 Writing",
      steps: [
        {
          step: "Bước 1 (Câu đơn gốc)",
          example: "Technology is good. It helps students.",
          critique: "Quá đơn giản, câu cụt, vốn từ hạn hẹp, điểm VSTEP chỉ ở mức A2."
        },
        {
          step: "Bước 2 (Mở rộng thành phần: Thêm Adjectives, Adverbs, Prepositional Phrases)",
          example: "Modern educational technology effectively helps university students with their academic research.",
          critique: "Thêm tính từ 'modern educational', trạng từ 'effectively', cụm giới từ 'with their academic research'."
        },
        {
          step: "Bước 3 (Biến đổi thành câu ghép hoặc câu phức)",
          example: "Because modern educational technology facilitates instant access to digital libraries, it effectively helps university students excel in their academic research.",
          critique: "Sử dụng liên từ 'Because' tạo thành câu phức với lập luận nguyên nhân - kết quả rõ ràng."
        },
        {
          step: "Bước 4 (Nâng cấp cấu trúc B1 nâng cao: Mệnh đề quan hệ / Nhượng bộ)",
          example: "Although traditional classrooms still hold significant value, modern educational technology, which enables flexible distance learning, plays an indispensable role in academic success.",
          critique: "Kết hợp mệnh đề nhượng bộ 'Although...' và mệnh đề quan hệ không xác định 'which enables...'. Đạt chuẩn B1/B2 xuất sắc."
        }
      ]
    }
  ]
};
