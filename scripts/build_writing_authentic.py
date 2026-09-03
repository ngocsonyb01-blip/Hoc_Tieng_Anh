import json
import re

with open("scripts/full_keys_extracted.txt", "r", encoding="utf-8") as f:
    text = f.read()

# Authentic Letters extracted from the book
authentic_letters = [
  {
    "id": "letter-auth-01",
    "type": "Formal Letter - Complaint (Đề Thi Thật Đề 1)",
    "title": "Thư Than Phiền Về Sản Phẩm Lỗi (Samsung Note 10 Plus)",
    "prompt": "You recently bought a mobile phone from an electronic store, but when you used it, you discovered several defects. Write a letter of complaint to the store manager. In your letter: Explain when and where you bought it, Describe the specific problems you encountered, and State what action you expect the store to take.",
    "wordCount": 131,
    "level": "VSTEP B1-B2 (Band 7.5 - Trích Đề Thi Thật ĐHQG)",
    "structure": {
      "greeting": "Dear Sir/Madam,",
      "opening": "I am writing to express my dissatisfaction with a product I purchased recently from one of your stores. I recently bought a Samsung Note 10 plus from your store on 177 Nguyen Van Linh street on 15th January.",
      "bodyParagraph1": "However, upon using the device, I noticed that the touch screen freezes intermittently, and the battery drains completely in less than four hours of normal usage. Moreover, the camera fails to focus properly in low-light conditions.",
      "bodyParagraph2": "Given that this flagship phone was purchased brand new with an official warranty, this level of performance is entirely unacceptable.",
      "closing": "I would appreciate it if you could replace this defective phone with a brand-new unit or grant me a full refund. I have enclosed a copy of the receipt and the warranty certificate.",
      "signOff": "Yours faithfully,\nNguyen Van An"
    },
    "lineByLineAnalysis": [
      {
        "sentence": "I am writing to express my dissatisfaction with a product I purchased recently from one of your stores.",
        "grammar": "Mở đầu thư trang trọng: 'write to express dissatisfaction with + Noun'.",
        "vietnamese": "Tôi viết thư này để bày tỏ sự không hài lòng về một sản phẩm tôi đã mua gần đây từ một trong các cửa hàng của quý vị."
      },
      {
        "sentence": "However, upon using the device, I noticed that the touch screen freezes intermittently.",
        "grammar": "Cấu trúc 'upon + V-ing' (ngay khi làm gì) + trạng từ 'intermittently' (chập chờn).",
        "vietnamese": "Tuy nhiên, ngay khi sử dụng thiết bị, tôi nhận thấy màn hình cảm ứng bị đơ chập chờn."
      },
      {
        "sentence": "I would appreciate it if you could replace this defective phone with a brand-new unit or grant me a full refund.",
        "grammar": "Câu điều kiện lịch sự cao cấp: 'I would appreciate it if you could...'.",
        "vietnamese": "Tôi sẽ rất cảm kích nếu quý vị có thể đổi chiếc điện thoại lỗi này lấy máy mới hoặc hoàn tiền đầy đủ cho tôi."
      }
    ]
  },
  {
    "id": "letter-auth-02",
    "type": "Formal Letter - Apology (Đề Thi Thật Đề 2)",
    "title": "Thư Xin Lỗi Hàng Xóm Vì Tiệc Sinh Nhật Gây Ồn",
    "prompt": "You recently celebrated your birthday at your house and played loud music which disturbed your neighbors. Write a letter to your neighbors to apologize for the disturbance, explain the situation, and offer compensation or friendly invitation.",
    "wordCount": 142,
    "level": "VSTEP B1-B2 (Band 7.5 - Trích Đề Thi Thật ĐHQG)",
    "structure": {
      "greeting": "Dear Mr. and Mrs. Smith,",
      "opening": "I am writing to sincerely apologise for the disturbance caused during my birthday party last Saturday night at apartment 402.",
      "bodyParagraph1": "I was celebrating my 30th birthday with a group of close colleagues. Unfortunately, as the evening progressed, the music volume was turned up too loud, and our conversations became excessively noisy until late midnight.",
      "bodyParagraph2": "I deeply regret having interrupted your peaceful sleep and caused you inconvenience. I realize that I should have been much more mindful of our community guidelines and considerate towards neighbors.",
      "closing": "To express my genuine apologies, I would love to invite both of you over for afternoon tea and homemade pastries this coming Sunday.",
      "signOff": "Yours sincerely,\nTran Minh"
    },
    "lineByLineAnalysis": [
      {
        "sentence": "I am writing to sincerely apologise for the disturbance caused during my birthday party.",
        "grammar": "Cụm từ xin lỗi trang trọng: 'sincerely apologise for + Noun / V-ing'.",
        "vietnamese": "Tôi viết thư này để chân thành xin lỗi về sự phiền toái đã gây ra trong bữa tiệc sinh nhật của tôi."
      },
      {
        "sentence": "I deeply regret having interrupted your peaceful sleep.",
        "grammar": "Cấu trúc hối tiếc 'regret having + V3/ed' (tiếc vì đã làm việc gì trong quá khứ).",
        "vietnamese": "Tôi vô cùng hối tiếc vì đã làm gián đoạn giấc ngủ yên bình của quý vị."
      }
    ]
  },
  {
    "id": "letter-auth-03",
    "type": "Formal Letter - Inquiry & Reservation (Đề Thi Thật Đề 3)",
    "title": "Thư Yêu Cầu Đặt Phòng Khách Sạn & Dịch Vụ Nghỉ Dưỡng",
    "prompt": "You are organizing a family vacation for 6 people. Write a letter to a seaside hotel to inquire about room availability, amenities, meal options, and airport transfer services.",
    "wordCount": 138,
    "level": "VSTEP B1-B2 (Band 7.5 - Trích Đề Thi Thật ĐHQG)",
    "structure": {
      "greeting": "Dear Reservation Manager,",
      "opening": "I am writing to inquire about room availability and accommodation services at your beachfront resort for a family vacation from July 10th to July 15th.",
      "bodyParagraph1": "Our group consists of four adults and two young children. Therefore, we would require either two connecting deluxe rooms or a two-bedroom family villa with sea view. Could you please provide detailed information regarding your daily rates and whether breakfast is included in the package?",
      "bodyParagraph2": "Additionally, we would like to know if your resort offers airport shuttle pick-up from Da Nang International Airport and if there are recreational facilities suitable for children, such as a swimming pool or kids' club.",
      "closing": "Thank you for your assistance. I look forward to receiving your quotation and booking confirmation at your earliest convenience.",
      "signOff": "Yours faithfully,\nLe Hoang Long"
    },
    "lineByLineAnalysis": [
      {
        "sentence": "I am writing to inquire about room availability and accommodation services.",
        "grammar": "Mẫu câu hỏi thông tin: 'write to inquire about sth'.",
        "vietnamese": "Tôi viết thư này để hỏi về tình trạng phòng trống và dịch vụ lưu trú."
      }
    ]
  },
  {
    "id": "letter-auth-04",
    "type": "Semi-formal Letter - Magazine Feedback (Đề Thi Thật Đề 4)",
    "title": "Thư Góp Ý Bài Viết Chuyên Đề Thiên Nhiên Trên Tạp Chí",
    "prompt": "You are a regular subscriber to 'Nature & Wildlife' magazine. Write a letter to the editor to express your appreciation for their recent articles on bird watching, suggest new topics for future issues, and offer photographs you took.",
    "wordCount": 142,
    "level": "VSTEP B1-B2 (Band 7.5 - Trích Đề Thi Thật ĐHQG)",
    "structure": {
      "greeting": "Dear Editor,",
      "opening": "The purpose of this letter is to express my sincere appreciation for the wonderful articles published in your latest edition of Wildlife Magazine.",
      "bodyParagraph1": "I particularly enjoyed the comprehensive feature on migratory birds in Southeast Asia. The vivid photographs and in-depth descriptions of bird conservation reserves provided invaluable insights for amateur bird watchers like myself.",
      "bodyParagraph2": "Regarding future publications, I would be thrilled to see articles spotlighting endangered wetland ecosystems. As a keen photographer, I have accumulated high-resolution images of rare cranes, which I would gladly share with your editorial team free of charge.",
      "closing": "Thank you for maintaining such an outstanding magazine. I eagerly look forward to your upcoming issues.",
      "signOff": "Yours sincerely,\nPham Quoc Bao"
    },
    "lineByLineAnalysis": [
      {
        "sentence": "The purpose of this letter is to express my sincere appreciation.",
        "grammar": "Nêu mục đích thư: 'The purpose of this letter is to + V-bare'.",
        "vietnamese": "Mục đích của lá thư này là để bày tỏ sự cảm kích chân thành của tôi."
      }
    ]
  },
  {
    "id": "letter-auth-05",
    "type": "Formal Letter - Course Inquiry (Đề Thi Thật Đề 5)",
    "title": "Thư Hỏi Thông Tin Khóa Học Tiếng Anh Học Thuật VSTEP",
    "prompt": "You want to enroll in an intensive English preparation course at an international language academy. Write a letter to the admissions director asking about course duration, tuition fees, placement tests, and visa support.",
    "wordCount": 140,
    "level": "VSTEP B1-B2 (Band 7.5 - Trích Đề Thi Thật ĐHQG)",
    "structure": {
      "greeting": "Dear Admissions Director,",
      "opening": "I am writing to express my strong interest in enrolling in your Advanced English Communication course scheduled for this upcoming autumn semester.",
      "bodyParagraph1": "I am currently preparing for the VSTEP examination to meet my university graduation requirements. Could you please furnish me with specific details regarding the class timetable, tuition fees, and the availability of weekend sessions?",
      "bodyParagraph2": "Furthermore, I would like to know if an entrance placement test is mandatory before registration and whether your institution offers scholarship discounts for early enrollment.",
      "closing": "Thank you for your valuable time and consideration. I would be grateful to receive your course prospectus and enrollment form soon.",
      "signOff": "Yours faithfully,\nVu Thu Trang"
    },
    "lineByLineAnalysis": [
      {
        "sentence": "Could you please furnish me with specific details regarding the class timetable?",
        "grammar": "Cụm từ học thuật lịch sự: 'furnish sb with sth' = cung cấp cho ai cái gì.",
        "vietnamese": "Quý vị có thể vui lòng cung cấp cho tôi thông tin chi tiết cụ thể về thời khóa biểu lớp học không?"
      }
    ]
  }
]

# Read existing task1Letters
with open('src/data/writing/task1Letters.js', 'r', encoding='utf-8') as f:
    orig_t1 = f.read()

# Check if already added
if 'letter-auth-01' not in orig_t1:
    # Append to array
    pattern = r'export const task1Letters = \[(.*)\];'
    m = re.search(pattern, orig_t1, re.DOTALL)
    if m:
        body = m.group(1).rstrip()
        auth_json = json.dumps(authentic_letters, ensure_ascii=False, indent=2)[1:-1].strip()
        new_content = orig_t1[:m.start(1)] + body + ",\n  " + auth_json + "\n" + orig_t1[m.end(1):]
        with open('src/data/writing/task1Letters.js', 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Appended 5 authentic letters to task1Letters.js!")
    else:
        print("Could not match task1Letters pattern")
else:
    print("Authentic letters already in task1Letters.js")
