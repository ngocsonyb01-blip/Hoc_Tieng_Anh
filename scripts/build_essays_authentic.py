import json
import re

authentic_essays = [
  {
    "id": "essay-auth-01",
    "topicId": "lifestyle-society",
    "topicName": "Lifestyle & Society (Đề Thi Thật Đề 1)",
    "essayType": "Opinion / Advantage-Disadvantage",
    "prompt": "Nowadays, an increasing number of people choose to live alone rather than with family or roommates. Do the advantages of this trend outweigh its disadvantages?",
    "wordCount": 268,
    "targetScore": "VSTEP B1-B2 (Band 8.0 - Trích Đề Thi Thật ĐHQG)",
    "outline": {
      "introduction": "Hook regarding modern living arrangements + Paraphrase prompt + Thesis stating advantages of independence outweigh loneliness.",
      "bodyParagraph1": "Advantages: Autonomy, privacy, personal responsibility, flexible lifestyle schedule.",
      "bodyParagraph2": "Disadvantages & Mitigation: Higher living expenses and occasional feelings of isolation, which can be overcome via social networking.",
      "conclusion": "Restate opinion that independent living fosters maturity and personal growth."
    },
    "fullEssay": "In contemporary society, living alone has evolved into a prominent lifestyle choice among young adults and professionals. While this trend poses certain financial and emotional hurdles, I firmly believe that its personal benefits far outweigh the disadvantages.\n\nOn the one hand, residing independently inevitably brings distinct challenges. The most apparent drawback is the economic burden, as solo dwellers must single-handedly shoulder rent, utility bills, and grocery costs without shared financial contributions. Furthermore, living without company can occasionally trigger feelings of loneliness or vulnerability during health emergencies. Without immediate support from family or roommates, dealing with sudden illness or severe stress can become emotionally overwhelming.\n\nOn the other hand, the merits of living alone in terms of personal development are immense. Firstly, it grants individuals absolute freedom and privacy to arrange their living space and daily schedules without compromising with others. This autonomy enables people to concentrate fully on their studies or careers in an undisturbed environment. Secondly, solitary living serves as a vital training ground for self-reliance. When individuals manage domestic chores, budget their finances, and solve household problems autonomously, they cultivate essential life skills and emotional resilience that prepare them for future life challenges.\n\nIn conclusion, although living alone entails higher financial expenses and sporadic bouts of isolation, the empowerment, autonomy, and independence it nurtures are invaluable. Therefore, this modern lifestyle trend represents a positive progression in contemporary individual development.",
    "lineByLineAnnotations": [
      {
        "sentence": "In contemporary society, living alone has evolved into a prominent lifestyle choice among young adults and professionals.",
        "grammarBreakdown": "Cụm trạng từ mở đầu 'In contemporary society'; thì Hiện tại hoàn thành 'has evolved into'; cụm danh từ 'prominent lifestyle choice'.",
        "vietnameseTranslation": "Trong xã hội đương đại, sống một mình đã phát triển thành một lựa chọn lối sống nổi bật của những người trẻ và giới chuyên môn."
      },
      {
        "sentence": "While this trend poses certain financial and emotional hurdles, I firmly believe that its personal benefits far outweigh the disadvantages.",
        "grammarBreakdown": "Mệnh đề nhượng bộ 'While...'; cụm động từ 'pose hurdles' (gây ra trở ngại); cụm 'far outweigh' (vượt trội hơn hẳn).",
        "vietnameseTranslation": "Mặc dù xu hướng này đặt ra những trở ngại nhất định về tài chính và cảm xúc, tôi tin tưởng vững chắc rằng những lợi ích cá nhân của nó vượt trội hơn nhiều so với các bất lợi."
      }
    ]
  },
  {
    "id": "essay-auth-02",
    "topicId": "media-technology",
    "topicName": "Media & Technology (Đề Thi Thật Đề 2)",
    "essayType": "Opinion Essay",
    "prompt": "Although more and more people read news on the Internet, traditional newspapers will remain an indispensable source of information. To what extent do you agree or disagree?",
    "wordCount": 272,
    "targetScore": "VSTEP B1-B2 (Band 8.0 - Trích Đề Thi Thật ĐHQG)",
    "outline": {
      "introduction": "Digital revolution in journalism + Paraphrase prompt + Disagree with the statement: online news will largely supersede print.",
      "bodyParagraph1": "Drawbacks of printed press: Slow distribution, environmental waste, inability to offer multimedia.",
      "bodyParagraph2": "Superiority of digital platforms: Instant real-time updates, global accessibility, interactive features, affordability.",
      "conclusion": "Traditional newspapers will survive as niche collector items, but online news is the primary mainstream future."
    },
    "fullEssay": "The digital revolution has radically transformed how humanity consumes daily news and information. While some people argue that traditional printed newspapers will maintain their dominant status, I largely disagree with this assertion and contend that electronic journalism will inevitably surpass printed media.\n\nUndeniably, traditional print newspapers are struggling to compete with modern digital standards. Firstly, physical printing and nationwide distribution are slow and resource-intensive processes. By the time a newspaper hits the newsstands in the morning, the reported events are already hours old and obsolete compared to digital live feeds. Secondly, mass paper consumption contributes significantly to deforestation and industrial waste, which conflicts directly with the modern imperative for ecological sustainability.\n\nConversely, online news portals provide unmatched advantages in speed, diversity, and interactivity. Through internet-connected smartphones and tablets, readers can access real-time breaking news updates within seconds of occurrence, regardless of geographic location. Furthermore, digital media enriches news consumption with high-definition videos, audio podcasts, and interactive infographics, enabling a far more immersive understanding of complex issues. Additionally, social media comment sections facilitate constructive civic dialogue and public discourse, allowing citizens to voice their opinions directly.\n\nIn conclusion, despite the enduring nostalgia associated with holding a physical paper, the convenience, immediacy, and environmental efficiency of digital media make it clearly superior. Printed newspapers will likely be relegated to a specialized niche, while online platforms become the undisputed primary source of news.",
    "lineByLineAnnotations": [
      {
        "sentence": "The digital revolution has radically transformed how humanity consumes daily news and information.",
        "grammarBreakdown": "Thì Hiện tại hoàn thành; trạng từ chỉ mức độ 'radically'; mệnh đề danh từ 'how humanity consumes...'.",
        "vietnameseTranslation": "Cuộc cách mạng kỹ thuật số đã làm thay đổi triệt để cách nhân loại tiếp nhận tin tức và thông tin hàng ngày."
      }
    ]
  },
  {
    "id": "essay-auth-03",
    "topicId": "urbanization-environment",
    "topicName": "Urbanization & Environment (Đề Thi Thật Đề 3)",
    "essayType": "Problem & Solution",
    "prompt": "People living in large cities face numerous problems in their daily lives. What are the main problems, and what measures can be implemented to solve them?",
    "wordCount": 275,
    "targetScore": "VSTEP B1-B2 (Band 8.0 - Trích Đề Thi Thật ĐHQG)",
    "outline": {
      "introduction": "Rapid urbanization worldwide + Identify two major problems (traffic congestion & air pollution) + State that joint government and civic actions can mitigate them.",
      "bodyParagraph1": "Key Problems: Overcrowded roads leading to gridlock; industrial and vehicular emissions causing respiratory diseases.",
      "bodyParagraph2": "Effective Solutions: Developing electric mass transit (metro, BRT); decentralizing facilities and planting green urban spaces.",
      "conclusion": "Urban challenges are serious but manageable through sustainable urban planning."
    },
    "fullEssay": "In the modern era of rapid urbanization, metropolis dwellers worldwide encounter formidable challenges in their daily routines. Chief among these issues are severe traffic congestion and deteriorating air quality, which require comprehensive intervention from both municipal governments and citizens.\n\nThe most pressing obstacle facing city residents is chronic traffic gridlock. As populations surge and private vehicle ownership skyrockets, major thoroughfares become paralyzed during rush hours, causing commuters to waste countless unproductive hours stuck in traffic jams. This phenomenon not only decreases economic productivity but also induces severe psychological fatigue. Compounding this issue is dangerous atmospheric pollution caused by dense vehicle exhaust and factory emissions. Fine particulate matter (PM2.5) frequently reaches hazardous levels, triggering chronic respiratory diseases such as asthma and bronchitis among vulnerable urban populations.\n\nTo address these urban predicaments, targeted solutions must be implemented promptly. Primarily, governments must invest heavily in expanding eco-friendly public transit networks, including underground metro lines and electric bus rapid transit (BRT) systems. Offering affordable, punctual, and comfortable public transport will incentivize commuters to abandon private cars and motorbikes. In addition, urban planners should decentralize public services by relocating universities, hospitals, and administrative centers to suburban satellite towns, thereby alleviating central congestion. Finally, mandating rooftop gardens and urban green belts will absorb carbon emissions and significantly improve metropolitan air quality.\n\nIn conclusion, while traffic jams and environmental pollution present severe hardships for city inhabitants, these challenges can be effectively resolved through modern public transit expansion and strategic urban decentralization.",
    "lineByLineAnnotations": [
      {
        "sentence": "In the modern era of rapid urbanization, metropolis dwellers worldwide encounter formidable challenges.",
        "grammarBreakdown": "Cụm giới từ chỉ thời đại 'In the modern era of...'; tính từ học thuật 'formidable' (dữ dội, to lớn); danh từ ghép 'metropolis dwellers'.",
        "vietnameseTranslation": "Trong kỷ nguyên hiện đại của quá trình đô thị hóa nhanh chóng, cư dân các đô thị lớn trên toàn thế giới phải đối mặt với những thách thức to lớn."
      }
    ]
  },
  {
    "id": "essay-auth-04",
    "topicId": "education-employment",
    "topicName": "Education & Employment (Đề Thi Thật Đề 4)",
    "essayType": "Advantage & Disadvantage / Opinion",
    "prompt": "Many university students choose to work part-time while pursuing their degree. Do the advantages of working part-time outweigh the disadvantages for tertiary students?",
    "wordCount": 278,
    "targetScore": "VSTEP B1-B2 (Band 8.0 - Trích Đề Thi Thật ĐHQG)",
    "outline": {
      "introduction": "Prevalence of student part-time jobs + Thesis: Financial gains and practical experience outweigh potential academic distractions if managed well.",
      "bodyParagraph1": "Disadvantages: Time constraints, physical exhaustion, risk of neglected studies and poor exam performance.",
      "bodyParagraph2": "Advantages: Financial self-sufficiency, valuable workplace soft skills, professional networking, enhanced graduate employability.",
      "conclusion": "Benefits decisively surpass drawbacks when students maintain disciplined time management."
    },
    "fullEssay": "In recent years, engaging in part-time employment has become an increasingly popular endeavor among tertiary students. While balancing work with higher education can introduce notable strains, I firmly believe that the practical and financial advantages of this practice decisively outweigh the disadvantages.\n\nOn the one hand, excessive commitment to employment can potentially undermine academic success. University curricula require rigorous devotion to lectures, laboratory assignments, and extensive independent reading. When students spend excessive hours at part-time jobs, they frequently suffer from chronic physical fatigue and sleep deprivation. Consequently, their concentration during lectures deteriorates, potentially leading to missed assignment deadlines or sub-par exam performance. Furthermore, students who prioritize immediate earnings over academic rigor may jeopardize their ultimate degree classification.\n\nOn the other hand, the benefits accrued from part-time work are monumental for personal and professional growth. Firstly, earning an income cultivates financial autonomy and relieves parents from heavy tuition burdens. Students learn the value of money, enhancing their personal financial management and budgeting skills. Secondly, workplace experience instills invaluable transferable soft skills—such as teamwork, customer communication, problem-solving, and time management—which cannot be acquired from textbooks alone. In today's hyper-competitive job market, employers heavily favor graduates who demonstrate proven workplace reliability and resilience alongside their academic credentials.\n\nIn conclusion, although managing part-time work alongside university studies poses scheduling challenges, the financial self-sufficiency and professional maturity it fosters are indispensable. Provided that students maintain disciplined time management, part-time employment constitutes an overwhelmingly beneficial experience.",
    "lineByLineAnnotations": [
      {
        "sentence": "In recent years, engaging in part-time employment has become an increasingly popular endeavor among tertiary students.",
        "grammarBreakdown": "Danh động từ làm chủ ngữ 'engaging in...'; Hiện tại hoàn thành 'has become'; cụm từ cao cấp 'popular endeavor'.",
        "vietnameseTranslation": "Trong những năm gần đây, tham gia vào công việc bán thời gian đã trở thành một nỗ lực ngày càng phổ biến trong sinh viên đại học."
      }
    ]
  },
  {
    "id": "essay-auth-05",
    "topicId": "education-technology",
    "topicName": "Education & Technology (Đề Thi Thật Đề 5)",
    "essayType": "Discuss Both Views & Opinion",
    "prompt": "Some educators believe that online distance learning is more effective than traditional face-to-face classroom learning, while others argue that the physical classroom remains essential. Discuss both views and give your opinion.",
    "wordCount": 282,
    "targetScore": "VSTEP B1-B2 (Band 8.0 - Trích Đề Thi Thật ĐHQG)",
    "outline": {
      "introduction": "Expansion of digital education + Paraphrase both perspectives + Thesis: Blended learning is ideal, but physical classrooms remain irreplaceable for social bonding.",
      "bodyParagraph1": "Merits of Online Learning: Extreme scheduling flexibility, geographical accessibility, cost-efficiency, pace customization.",
      "bodyParagraph2": "Merits of Traditional Classroom: Hands-on teacher guidance, interpersonal interaction, peer motivation, distraction-free environment.",
      "conclusion": "Technology enhances accessibility, but the physical classroom remains the cornerstone of holistic education."
    },
    "fullEssay": "The proliferation of educational technology and digital conferencing tools has sparked a fierce debate regarding the optimal mode of education. While digital learning offers revolutionary convenience, I maintain that traditional in-person classroom instruction remains indispensable for comprehensive pedagogical development.\n\nProponents of online learning highlight its exceptional flexibility and global accessibility. Through virtual classrooms, learners can access lectures, study materials, and interactive quizzes from anywhere at any convenient time. This eliminates tedious commuting and empowers working professionals or remote students to acquire advanced qualifications that were once geographically unattainable. Moreover, self-paced digital modules allow students to pause, rewind, and review complex concepts according to their individual learning speeds, thereby fostering personalized educational pathways.\n\nNevertheless, the irreplaceable value of face-to-face classroom instruction cannot be discounted. Physical classrooms provide an immersive, distraction-free learning atmosphere that stimulates student focus and academic discipline. More importantly, real-time interpersonal interaction with teachers enables immediate clarification of doubts, tailored emotional encouragement, and direct mentorship. In addition, collaborative group projects, debates, and peer interactions in physical settings nurture indispensable interpersonal competencies, such as empathetic communication and leadership. In virtual environments, these vital social dimensions are often diluted, potentially resulting in isolation and disengagement.\n\nIn conclusion, although online distance learning delivers extraordinary geographical reach and scheduling convenience, traditional face-to-face instruction remains essential for social cohesion, hands-on mentorship, and holistic human development. A hybrid educational model combining the strengths of both formats represents the most promising future.",
    "lineByLineAnnotations": [
      {
        "sentence": "The proliferation of educational technology and digital conferencing tools has sparked a fierce debate.",
        "grammarBreakdown": "Từ vựng C1 'proliferation' (sự sinh sôi, phát triển mạnh mẽ); cụm động từ 'spark a fierce debate' (châm ngòi cho cuộc tranh luận sôi nổi).",
        "vietnameseTranslation": "Sự phát triển mạnh mẽ của công nghệ giáo dục và các công cụ hội nghị trực tuyến đã châm ngòi cho một cuộc tranh luận sôi nổi."
      }
    ]
  }
]

# Read existing task2Essays
with open('src/data/writing/task2Essays.js', 'r', encoding='utf-8') as f:
    orig_t2 = f.read()

if 'essay-auth-01' not in orig_t2:
    pattern = r'export const task2Essays = \[(.*)\];'
    m = re.search(pattern, orig_t2, re.DOTALL)
    if m:
        body = m.group(1).rstrip()
        auth_json = json.dumps(authentic_essays, ensure_ascii=False, indent=2)[1:-1].strip()
        new_content = orig_t2[:m.start(1)] + body + ",\n  " + auth_json + "\n" + orig_t2[m.end(1):]
        with open('src/data/writing/task2Essays.js', 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Appended 5 authentic essays to task2Essays.js!")
    else:
        print("Could not match task2Essays pattern")
else:
    print("Authentic essays already in task2Essays.js")
