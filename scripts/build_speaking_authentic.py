import json
import re

authentic_sp1 = [
  {
    "id": "sp1-auth-01",
    "topicId": "accommodation-home",
    "topicName": "Accommodation & Living (Đề Thi Thật Đề 1)",
    "questions": [
      {
        "q": "Do you live in a house or a flat?",
        "areaAnswer": {
          "answer": "Currently, I live in a cozy two-story townhouse with my extended family in a peaceful suburban neighborhood.",
          "reason": "It offers plenty of living space with three bedrooms, a bright living room, and a lovely small garden in the backyard.",
          "example": "For instance, I have lived there since childhood, so I have a profound emotional attachment to the place.",
          "alternative": "However, when I attend university, I might consider renting a small studio apartment near campus."
        },
        "audioText": "Currently, I live in a cozy two-story townhouse with my extended family in a peaceful suburban neighborhood. It offers plenty of living space with three bedrooms, a bright living room, and a lovely small garden in the backyard. For instance, I have lived there since childhood, so I have a profound emotional attachment to the place.",
        "vocabularyHighlights": ["cozy townhouse", "suburban neighborhood", "emotional attachment", "studio apartment"]
      },
      {
        "q": "What is your favorite room in your house?",
        "areaAnswer": {
          "answer": "Without doubt, my bedroom is my absolute favorite sanctuary in the entire house.",
          "reason": "It is the only private space where I can unwind, listen to acoustic music, and focus completely on my studies without distractions.",
          "example": "For example, I placed my study desk right next to the large window to enjoy fresh air and morning sunlight.",
          "alternative": "Occasionally, I also enjoy spending time in the kitchen when cooking dinner with my mother."
        },
        "audioText": "Without doubt, my bedroom is my absolute favorite sanctuary in the entire house. It is the only private space where I can unwind, listen to acoustic music, and focus completely on my studies without distractions. For example, I placed my study desk right next to the large window to enjoy fresh air and morning sunlight.",
        "vocabularyHighlights": ["private sanctuary", "unwind", "without distractions", "acoustic music"]
      }
    ]
  },
  {
    "id": "sp1-auth-02",
    "topicId": "movies-entertainment",
    "topicName": "Cinema & Movies (Đề Thi Thật Đề 2)",
    "questions": [
      {
        "q": "Do you like watching movies?",
        "areaAnswer": {
          "answer": "Yes, absolutely. I am a passionate movie enthusiast and watch films on a weekly basis.",
          "reason": "Cinematic storytelling provides a fantastic escape from stressful working days and stimulates my creative imagination.",
          "example": "For instance, I particularly adore science fiction and romantic comedies because they always cheer me up.",
          "alternative": "If I am extremely occupied, I watch short film reviews on YouTube instead."
        },
        "audioText": "Yes, absolutely. I am a passionate movie enthusiast and watch films on a weekly basis. Cinematic storytelling provides a fantastic escape from stressful working days and stimulates my creative imagination. For instance, I particularly adore science fiction and romantic comedies because they always cheer me up.",
        "vocabularyHighlights": ["passionate movie enthusiast", "cinematic storytelling", "fantastic escape", "cheer me up"]
      },
      {
        "q": "Do you prefer watching movies at home or at the cinema?",
        "areaAnswer": {
          "answer": "Personally, I distinctly prefer going to the movie theater whenever a blockbuster is released.",
          "reason": "The monumental screen, surround sound system, and energetic auditorium atmosphere cannot be replicated at home.",
          "example": "For example, watching action movies like Marvel films at an IMAX cinema delivers an unparalleled sensory experience.",
          "alternative": "Nonetheless, streaming on Netflix at home is more budget-friendly for casual viewing."
        },
        "audioText": "Personally, I distinctly prefer going to the movie theater whenever a blockbuster is released. The monumental screen, surround sound system, and energetic auditorium atmosphere cannot be replicated at home. For example, watching action movies at an IMAX cinema delivers an unparalleled sensory experience.",
        "vocabularyHighlights": ["movie theater", "blockbuster", "surround sound system", "unparalleled sensory experience"]
      }
    ]
  },
  {
    "id": "sp1-auth-03",
    "topicId": "parks-nature",
    "topicName": "Parks & Public Spaces (Đề Thi Thật Đề 3)",
    "questions": [
      {
        "q": "Do you like to go to the park?",
        "areaAnswer": {
          "answer": "Yes, certainly. I make it a habit to visit my local city park at least twice a week.",
          "reason": "The tranquil atmosphere, lush green canopy, and fresh air provide an invigorating respite from urban bustle.",
          "example": "For example, I love jogging around the central lake in the early morning while listening to inspirational podcasts.",
          "alternative": "On rainy days, I replace my park walk with indoor treadmill exercises at the gymnasium."
        },
        "audioText": "Yes, certainly. I make it a habit to visit my local city park at least twice a week. The tranquil atmosphere, lush green canopy, and fresh air provide an invigorating respite from urban bustle. For example, I love jogging around the central lake in the early morning while listening to inspirational podcasts.",
        "vocabularyHighlights": ["make it a habit", "tranquil atmosphere", "lush green canopy", "invigorating respite"]
      }
    ]
  }
]

# Append to part1Social.js
with open('src/data/speaking/part1Social.js', 'r', encoding='utf-8') as f:
    orig_sp1 = f.read()

if 'sp1-auth-01' not in orig_sp1:
    pattern = r'export const part1Social = \[(.*)\];'
    m = re.search(pattern, orig_sp1, re.DOTALL)
    if m:
        body = m.group(1).rstrip()
        auth_json = json.dumps(authentic_sp1, ensure_ascii=False, indent=2)[1:-1].strip()
        new_content = orig_sp1[:m.start(1)] + body + ",\n  " + auth_json + "\n" + orig_sp1[m.end(1):]
        with open('src/data/speaking/part1Social.js', 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Appended authentic speaking Part 1 sets!")

# Append to part2Solution.js
authentic_sp2 = [
  {
    "id": "sp2-auth-01",
    "situationTitle": "Weekend Outing with Foreign Friend (Đề Thi Thật Đề 1)",
    "context": "A foreign friend is visiting your city for the weekend. You have three options: Taking a walking tour in the Old Quarter, Visiting the National History Museum, or Going on a boat cruise along the river.",
    "options": [
      "Walking tour in the Old Quarter",
      "Visiting the National History Museum",
      "Going on a boat cruise along the river"
    ],
    "bestChoice": "Option 1: Walking tour in the Old Quarter",
    "rationale": "It allows firsthand immersion in local street food, vibrant sidewalk culture, and ancient architecture, providing a genuine cultural experience.",
    "speechTemplate": {
      "opening": "Well, placed in the situation where my foreign friend is visiting our city for the weekend, among the three proposed options, I would strongly advocate for taking a walking tour around the Old Quarter as the supreme choice.",
      "justification1": "First and foremost, the Old Quarter is the vibrant beating heart of our city's culture. Strolling leisurely through historical alleys allows my friend to directly absorb the lively street atmosphere, witness centuries-old architecture, and sample authentic culinary specialties like pho and egg coffee.",
      "justification2": "Furthermore, walking offers maximum spontaneity. We can stop whenever we encounter interesting artisanal workshops or strike up conversations with welcoming local residents, which creates unforgettable travel memories.",
      "counterArgument": "Regarding the other alternatives, although the History Museum is informative, it might feel somewhat static and academic for a short weekend visit. Meanwhile, a river boat cruise is relatively costly and confines us to a fixed seating area with limited interaction.",
      "conclusion": "Taking all factors into consideration, exploring the Old Quarter on foot is unquestionably the most immersive, dynamic, and memorable experience for my friend."
    }
  },
  {
    "id": "sp2-auth-02",
    "situationTitle": "Farewell Gift for Study Abroad Friend (Đề Thi Thật Đề 2)",
    "context": "Your close friend is preparing to study abroad in the UK for three years. Your group is choosing a farewell gift: An electronic translation device, A customized memory photo album, or Warm thermal winter clothing.",
    "options": [
      "An electronic translation device",
      "A customized memory photo album",
      "Warm thermal winter clothing"
    ],
    "bestChoice": "Option 2: A customized memory photo album",
    "rationale": "It possesses deep sentimental value, reminding your friend of home during bouts of homesickness, while clothing and electronics can easily be purchased in the host country.",
    "speechTemplate": {
      "opening": "Well, in this meaningful situation where our close friend is embarking on a three-year study abroad journey in the UK, among the three gift alternatives, I would firmly choose Option 2: A customized memory photo album with handwritten messages.",
      "justification1": "First of all, studying abroad is an emotionally taxing endeavor where students inevitably experience severe homesickness and isolation. Whenever my friend feels overwhelmed by unfamiliar surroundings, flipping through cherished photographs of our close moments and reading encouraging notes will serve as an emotional anchor, reminding them that they are loved and supported.",
      "justification2": "Additionally, a personalized album is uniquely irreplaceable. It carries profound emotional warmth that commercial products simply cannot replicate.",
      "counterArgument": "In contrast, an electronic translator is largely redundant because modern smartphones already possess sophisticated translation applications. Furthermore, while thermal winter clothing is practical, size mismatches can easily occur, and British stores offer apparel specifically tailored to local sub-zero weather.",
      "conclusion": "In conclusion, a customized photo album is undeniably the most thoughtful and heartwarming farewell token that our friend will treasure for a lifetime."
    }
  }
]

with open('src/data/speaking/part2Solution.js', 'r', encoding='utf-8') as f:
    orig_sp2 = f.read()

if 'sp2-auth-01' not in orig_sp2:
    pattern = r'export const part2Solution = \[(.*)\];'
    m = re.search(pattern, orig_sp2, re.DOTALL)
    if m:
        body = m.group(1).rstrip()
        auth_json = json.dumps(authentic_sp2, ensure_ascii=False, indent=2)[1:-1].strip()
        new_content = orig_sp2[:m.start(1)] + body + ",\n  " + auth_json + "\n" + orig_sp2[m.end(1):]
        with open('src/data/speaking/part2Solution.js', 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Appended authentic speaking Part 2 sets!")

# Append to part3TopicDev.js
authentic_sp3 = [
  {
    "id": "sp3-auth-01",
    "topicId": "reading-benefits",
    "centralTopic": "Benefits of Daily Book Reading (Đề Thi Thật Đề 1)",
    "mindMap": {
      "subIdea1": "Knowledge Expansion & Cognitive Development",
      "subIdea2": "Language Competence & Eloquent Vocabulary",
      "subIdea3": "Stress Relief & Mental Calmness",
      "ownIdea": "Cultivation of Empathy & Critical Perspective"
    },
    "modelSpeech": "Good morning examiner. Today, I would like to deliver my presentation regarding the profound merits of cultivating a daily book reading habit.\n\nFirst and foremost, reading books serves as an unparalleled gateway to knowledge acquisition and intellectual enrichment. Whether one explores historical non-fiction, scientific discoveries, or classical literature, books broaden our horizons and provide structured understanding of complex global phenomena that bite-sized social media posts cannot deliver.\n\nSecondly, regular reading dramatically polishes language proficiency and communication eloquence. As readers immerse themselves in well-crafted syntax and rich academic vocabulary, they naturally internalize advanced grammar patterns and expand their lexical repertoire, which directly elevates their writing and speaking confidence.\n\nThirdly, reading offers a powerful antidote to modern stress. Disconnecting from digital screens and immersing oneself in an engaging narrative calms the nervous system, lowers heart rates, and fosters inner tranquility after hectic working hours.\n\nFinally, my own personal idea is that literature cultivates profound empathy and critical thinking. By stepping into the shoes of diverse protagonists from different eras and cultures, readers develop open-mindedness and emotional maturity.\n\nIn conclusion, reading daily is indispensable for holistic intellectual and emotional cultivation.",
    "followUpQuestions": [
      {
        "q": "Do you think e-books will completely replace physical paper books in the future?",
        "suggestedAnswer": "While e-books offer portability and environmental advantages, I believe physical books will never disappear. The tactile pleasure of turning paper pages, the distinctive smell of ink, and the aesthetic joy of bookshelf collecting ensure printed books remain timeless."
      },
      {
        "q": "How can parents cultivate reading habits in young children?",
        "suggestedAnswer": "Parents should lead by example by reading in front of children rather than scrolling on smartphones, create cozy home reading nooks, and read bedtime stories together every night."
      }
    ]
  },
  {
    "id": "sp3-auth-02",
    "topicId": "studying-abroad",
    "centralTopic": "Benefits of Studying Abroad (Đề Thi Thật Đề 2)",
    "mindMap": {
      "subIdea1": "Foreign Language Mastery in Immersion Environment",
      "subIdea2": "Fostering Personal Independence & Self-Reliance",
      "subIdea3": "Superior Career Prospects & Global Employability",
      "ownIdea": "Cross-Cultural Networking & Global Worldview"
    },
    "modelSpeech": "Good morning examiner. Today, I am pleased to discuss the manifold benefits of pursuing higher education in a foreign country.\n\nPrimarily, overseas education provides an authentic linguistic immersion environment that accelerates language acquisition. Being surrounded 24/7 by native speakers forces international students to communicate in English during academic lectures, grocery shopping, and social interactions, allowing them to achieve native-like fluency and pronunciation within a remarkably short period.\n\nIn addition, studying abroad acts as a powerful catalyst for personal independence. Living thousands of miles away from family support systems obliges students to take full ownership of their lives—from budgeting money, cooking nutritious meals, to handling administrative tasks and solving unforeseen crises autonomously, thereby building immense emotional resilience.\n\nFurthermore, an internationally recognized degree drastically enhances graduate employability. Multinationals and domestic enterprises aggressively seek candidates who possess overseas qualifications, bilingual versatility, and intercultural agility.\n\nFinally, my own thought is that studying abroad nurtures a lifelong international network of friends and mentors from diverse cultural backgrounds, fostering an open-minded and empathetic global perspective.\n\nTo sum up, despite initial hurdles, studying abroad is an invaluable life-transforming investment.",
    "followUpQuestions": [
      {
        "q": "What is the biggest challenge international students face when studying abroad?",
        "suggestedAnswer": "In my opinion, culture shock and language barriers during the initial six months represent the steepest hurdles. Overcoming homesickness and adapting to unfamiliar academic conventions require significant emotional fortitude."
      }
    ]
  }
]

with open('src/data/speaking/part3TopicDev.js', 'r', encoding='utf-8') as f:
    orig_sp3 = f.read()

if 'sp3-auth-01' not in orig_sp3:
    pattern = r'export const part3TopicDev = \[(.*)\];'
    m = re.search(pattern, orig_sp3, re.DOTALL)
    if m:
        body = m.group(1).rstrip()
        auth_json = json.dumps(authentic_sp3, ensure_ascii=False, indent=2)[1:-1].strip()
        new_content = orig_sp3[:m.start(1)] + body + ",\n  " + auth_json + "\n" + orig_sp3[m.end(1):]
        with open('src/data/speaking/part3TopicDev.js', 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Appended authentic speaking Part 3 sets!")
