/**
 * Module 2: Hệ Thống Các Thì Đầy Đủ (The Complete Tenses System)
 * Chuẩn VSTEP B1 & CEFR B1
 */

export const TENSES_DATA = {
  id: "tenses",
  title: "Hệ Thống 12 Thì Trong Tiếng Anh",
  description: "Phân tích chuyên sâu 12 thì từ hiện tại, quá khứ đến tương lai, cấu trúc khẳng định, phủ định, nghi vấn, dấu hiệu nhận biết, bảng so sánh các thì dễ nhầm lẫn và lỗi sai thường gặp trong bài thi VSTEP B1.",
  groups: [
    {
      groupName: "CÁC THÌ HIỆN TẠI (PRESENT TENSES)",
      items: [
        {
          id: "present-simple",
          name: "1. Present Simple (Hiện tại đơn)",
          concept: "Diễn tả chân lý, sự thật hiển nhiên, thói quen, hành động lặp đi lặp lại hoặc lịch trình cố định.",
          formula: {
            affirmative: "S + V(s/es) / S + am/is/are + Complement",
            negative: "S + do/does not + V(bare) / S + am/is/are not + Complement",
            interrogative: "Do/Does + S + V(bare)? / Am/Is/Are + S + Complement?"
          },
          rules: [
            "Động từ tận cùng là -o, -s, -ch, -x, -sh, -z: thêm -es (watches, passes, goes, washes, fixes).",
            "Động từ tận cùng là phụ âm + -y: đổi -y thành -ies (study ➔ studies, fly ➔ flies). Phụ âm + nguyên âm + -y thì chỉ thêm -s (play ➔ plays)."
          ],
          usages: [
            { title: "Sự thật hiển nhiên, quy luật tự nhiên", example: "Water boils at 100 degrees Celsius." },
            { title: "Thói quen, phong cách sống lặp lại", example: "She drinks green tea every morning before exercising." },
            { title: "Lịch trình tàu xe, máy bay, thời khóa biểu cố định", example: "The morning train to Da Nang departs at 7:30 AM." },
            { title: "Khả năng, nghề nghiệp, sở thích hiện tại", example: "He works as a senior software engineer in Hanoi." }
          ],
          signals: ["always", "usually", "often", "frequently", "sometimes", "seldom", "rarely", "never", "every day/week/month/year", "once a week", "on Mondays"],
          examples: [
            { en: "Military officers undergo rigorous physical training every week.", vn: "Các sĩ quan quân đội trải qua đợt huấn luyện thể lực nghiêm ngặt mỗi tuần." },
            { en: "Regular physical activity prevents cardiovascular diseases.", vn: "Hoạt động thể chất đều đặn giúp ngăn ngừa các bệnh tim mạch." }
          ],
          commonMistakes: [
            "Quên thêm -s/-es khi chủ ngữ là ngôi thứ ba số ít: He study hard ➔ He studies hard.",
            "Dùng nhầm trợ động từ: She doesn't likes coffee ➔ She doesn't like coffee.",
            "Dùng be với động từ thường ở hiện tại đơn: *I am agree with you ➔ I agree with you."
          ]
        },
        {
          id: "present-continuous",
          name: "2. Present Continuous (Hiện tại tiếp diễn)",
          concept: "Diễn tả hành động đang diễn ra tại thời điểm nói, hành động mang tính tạm thời, sự phát triển/thay đổi dần dần, hoặc phàn nàn về thói quen xấu (với 'always').",
          formula: {
            affirmative: "S + am/is/are + V-ing",
            negative: "S + am/is/are not + V-ing",
            interrogative: "Am/Is/Are + S + V-ing?"
          },
          rules: [
            "Động từ tận cùng 1 'e': bỏ 'e' thêm -ing (write ➔ writing). Riêng tận cùng 'ee' thì giữ nguyên (see ➔ seeing).",
            "Động từ 1 âm tiết, tận cùng 1 phụ âm trước là 1 nguyên âm duy nhất: gấp đôi phụ âm cuối (run ➔ running, sit ➔ sitting, plan ➔ planning).",
            "Động từ tận cùng là '-ie': đổi thành '-y' rồi thêm -ing (die ➔ dying, lie ➔ lying)."
          ],
          usages: [
            { title: "Hành động đang diễn ra ngay lúc nói", example: "Look! The students are conducting a chemical experiment." },
            { title: "Hành động tạm thời trong thời kỳ này (không nhất thiết ngay lúc nói)", example: "I am taking an intensive VSTEP preparation course this month." },
            { title: "Sự việc đang thay đổi, tiến triển dần dần", example: "Global average temperatures are increasing rapidly." },
            { title: "Phàn nàn hành động gây khó chịu lặp đi lặp lại (với always, continually)", example: "He is always interrupting his colleagues during team meetings." }
          ],
          signals: ["now", "right now", "at the moment", "at present", "currently", "Look!", "Listen!", "Be quiet!", "this week/month", "nowadays"],
          stativeVerbsNote: "LƯU Ý CỰC KỲ QUAN TRỌNG: Không dùng thì tiếp diễn với các động từ trạng thái (Stative Verbs) chỉ nhận thức, cảm xúc, sở hữu như: know, understand, believe, want, need, like, love, hate, belong to, contain, own, remember, prefer.",
          examples: [
            { en: "The company is currently developing an innovative artificial intelligence platform.", vn: "Công ty hiện đang phát triển một nền tảng trí tuệ nhân tạo mang tính đổi mới." }
          ],
          commonMistakes: [
            "Chia thì tiếp diễn cho động từ chỉ trạng thái: *I am understanding the lesson ➔ I understand the lesson.",
            "Thiếu động từ to be: *They learning English ➔ They are learning English."
          ]
        },
        {
          id: "present-perfect",
          name: "3. Present Perfect (Hiện tại hoàn thành)",
          concept: "Diễn tả hành động bắt đầu trong quá khứ và còn tiếp diễn đến hiện tại, hành động vừa mới xảy ra, trải nghiệm từng làm / chưa từng làm, hoặc hành động quá khứ để lại kết quả rõ ràng ở hiện tại.",
          formula: {
            affirmative: "S + have/has + V3/V-ed",
            negative: "S + have/has not (haven't/hasn't) + V3/V-ed",
            interrogative: "Have/Has + S + V3/V-ed?"
          },
          usages: [
            { title: "Bắt đầu trong quá khứ, kéo dài đến hiện tại (đi với Since / For)", example: "Dr. Minh has worked at the Military Hospital for over fifteen years." },
            { title: "Kinh nghiệm, trải nghiệm cho đến nay (đi với ever, never, so far)", example: "Have you ever attended an international scientific conference?" },
            { title: "Hành động vừa mới xảy ra (đi với just, recently, lately, already, yet)", example: "The Ministry of Education has just announced the updated examination guidelines." },
            { title: "Hành động đã làm xong trong quá khứ nhưng kết quả quan trọng ở hiện tại", example: "I have lost my identification card, so I cannot enter the examination hall." },
            { title: "Số lần đã thực hiện hành động (first time, second time, three times)", example: "This is the third time she has visited the National Museum." }
          ],
          signals: ["since + mốc thời gian", "for + khoảng thời gian", "already", "yet", "just", "ever", "never", "recently", "lately", "so far", "up to now", "it is the first time"],
          examples: [
            { en: "Scientists have discovered several renewable alternatives to fossil fuels.", vn: "Các nhà khoa học đã khám phá ra nhiều phương án thay thế có thể tái tạo cho nhiên liệu hóa thạch." }
          ],
          commonMistakes: [
            "Dùng thời điểm xác định quá khứ với thì hiện tại hoàn thành: *I have seen him yesterday ➔ I saw him yesterday.",
            "Dùng nhầm Since và For: *since 5 years ➔ for 5 years; *for last Sunday ➔ since last Sunday.",
            "Nhầm 'have gone to' (đã đi và chưa về) với 'have been to' (đã từng đi đến đó và đã về)."
          ]
        },
        {
          id: "present-perfect-continuous",
          name: "4. Present Perfect Continuous (Hiện tại hoàn thành tiếp diễn)",
          concept: "Nhấn mạnh tính liên tục, tính kéo dài không ngắt quãng của một hành động bắt đầu trong quá khứ, vẫn đang tiếp tục ở hiện tại và có khả năng tiếp diễn trong tương lai, hoặc vừa mới dừng lại nhưng để lại dấu vết rõ rệt.",
          formula: {
            affirmative: "S + have/has been + V-ing",
            negative: "S + haven't/hasn't been + V-ing",
            interrogative: "Have/Has + S + been + V-ing?"
          },
          usages: [
            { title: "Nhấn mạnh quá trình / thời lượng hành động liên tục", example: "She has been studying grammar non-stop for four hours." },
            { title: "Hành động vừa kết thúc để lại kết quả nhìn thấy được ngay", example: "His eyes are red because he has been working on the computer all night." }
          ],
          signals: ["all day/morning/week", "for + khoảng thời gian (nhấn mạnh tính liên tục)", "since + mốc thời gian", "how long...?"],
          examples: [
            { en: "Researchers have been investigating the impact of social media on adolescent sleep patterns for five years.", vn: "Các nhà nghiên cứu đã liên tục điều tra tác động của mạng xã hội đối với giấc ngủ của thanh thiếu niên trong suốt năm năm qua." }
          ],
          commonMistakes: [
            "Dùng thì hoàn thành tiếp diễn cho số lần hoàn thành: *I have been reading this book 3 times ➔ I have read this book 3 times (nhấn mạnh số lượng/kết quả dùng Present Perfect đơn)."
          ]
        }
      ]
    },
    {
      groupName: "CÁC THÌ QUÁ KHỨ (PAST TENSES)",
      items: [
        {
          id: "past-simple",
          name: "5. Past Simple (Quá khứ đơn)",
          concept: "Diễn tả hành động đã xảy ra và chấm dứt hoàn toàn tại một thời điểm xác định trong quá khứ, hoặc một chuỗi các hành động liên tiếp xảy ra trong quá khứ.",
          formula: {
            affirmative: "S + V2/V-ed / S + was/were + Complement",
            negative: "S + did not + V(bare) / S + was/were not + Complement",
            interrogative: "Did + S + V(bare)? / Was/Were + S + Complement?"
          },
          usages: [
            { title: "Hành động đã hoàn tất tại thời điểm xác định trong quá khứ", example: "The delegation arrived in Paris last Thursday." },
            { title: "Chuỗi các hành động liên tiếp trong quá khứ", example: "He entered the office, turned on his computer, and reviewed the morning reports." },
            { title: "Thói quen hoặc trạng thái trong quá khứ (thường kết hợp với used to)", example: "When I was in high school, I cycled ten kilometers every day." }
          ],
          signals: ["yesterday", "last night/week/month/year", "ago (two days ago)", "in 1995", "in the 20th century", "when I was young"],
          examples: [
            { en: "The company signed a strategic partnership agreement with a leading European firm last month.", vn: "Công ty đã ký một thỏa thuận đối tác chiến lược với một công ty hàng đầu châu Âu vào tháng trước." }
          ],
          commonMistakes: [
            "Vẫn chia V2 sau trợ động từ did: *Did you went there? ➔ Did you go there?",
            "Phát âm sai đuôi -ed (/t/, /d/, /ɪd/)."
          ]
        },
        {
          id: "past-continuous",
          name: "6. Past Continuous (Quá khứ tiếp diễn)",
          concept: "Diễn tả hành động đang diễn ra tại một thời điểm cụ thể trong quá khứ; hai hành động cùng diễn ra song song trong quá khứ; hoặc một hành động đang diễn ra thì có một hành động khác xen vào.",
          formula: {
            affirmative: "S + was/were + V-ing",
            negative: "S + was/were not (wasn't/weren't) + V-ing",
            interrogative: "Was/Were + S + V-ing?"
          },
          usages: [
            { title: "Hành động đang diễn ra tại một thời điểm chính xác trong quá khứ", example: "At 8:00 PM yesterday, our family was having dinner together." },
            { title: "Hành động đang diễn ra thì có hành động ngắn khác xen vào (When / While / As)", example: "While the students were taking the test, the power suddenly went out." },
            { title: "Hai hành động diễn ra song song cùng lúc trong quá khứ (While)", example: "While Lan was reading the research paper, Nam was analyzing the statistical data." }
          ],
          signals: ["at that time", "at 7 o'clock yesterday", "all yesterday morning", "while", "when", "as"],
          examples: [
            { en: "The technicians were calibrating the laboratory equipment when the fire alarm sounded.", vn: "Các kỹ thuật viên đang hiệu chỉnh thiết bị phòng thí nghiệm thì chuông báo cháy reo lên." }
          ],
          commonMistakes: [
            "Dùng sai thì giữa hành động xen vào và hành động kéo dài: Hành động đang xảy ra (dài) dùng Past Continuous; hành động chen ngang (ngắn) dùng Past Simple."
          ]
        },
        {
          id: "past-perfect",
          name: "7. Past Perfect (Quá khứ hoàn thành)",
          concept: "Diễn tả một hành động xảy ra và hoàn thành TRƯỚC một hành động khác hoặc trước một mốc thời gian trong quá khứ.",
          formula: {
            affirmative: "S + had + V3/V-ed",
            negative: "S + had not (hadn't) + V3/V-ed",
            interrogative: "Had + S + V3/V-ed?"
          },
          usages: [
            { title: "Hành động xảy ra trước một hành động khác trong quá khứ", example: "By the time the rescue team arrived, the local villagers had already evacuated the flood zone." },
            { title: "Hành động xảy ra trước một mốc thời gian xác định trong quá khứ", example: "He had completed his doctoral dissertation before 2020." }
          ],
          signals: ["by the time + Past Simple", "before + Past Simple", "after + Past Perfect", "by + mốc thời gian quá khứ", "until then", "as soon as"],
          examples: [
            { en: "After the committee had evaluated all proposals thoroughly, they selected the most cost-effective solution.", vn: "Sau khi ủy ban đã đánh giá kỹ lưỡng tất cả các đề xuất, họ đã lựa chọn giải pháp tiết kiệm chi phí nhất." }
          ],
          commonMistakes: [
            "Dùng Past Perfect mà không có mốc quá khứ làm mốc đối chiếu.",
            "Nhầm lẫn trật tự Before / After: Before + Past Simple, Past Perfect | After + Past Perfect, Past Simple."
          ]
        },
        {
          id: "past-perfect-continuous",
          name: "8. Past Perfect Continuous (Quá khứ hoàn thành tiếp diễn)",
          concept: "Nhấn mạnh quá trình kéo dài liên tục của một hành động trước khi một hành động khác trong quá khứ xảy ra hoặc trước một thời điểm cụ thể trong quá khứ.",
          formula: {
            affirmative: "S + had been + V-ing",
            negative: "S + hadn't been + V-ing",
            interrogative: "Had + S + been + V-ing?"
          },
          usages: [
            { title: "Nhấn mạnh thời lượng kéo dài liên tục của hành động trước một sự kiện quá khứ", example: "They had been negotiating the terms for over six months before an agreement was reached." }
          ],
          signals: ["had been + V-ing + for... before + Past Simple", "until that day", "by the time"],
          examples: [
            { en: "The soldiers had been marching through the forest for ten hours before reaching their designated base.", vn: "Các chiến sĩ đã hành quân liên tục qua khu rừng trong mười tiếng đồng hồ trước khi tới được căn cứ chỉ định." }
          ]
        }
      ]
    },
    {
      groupName: "CÁC THÌ TƯƠNG LAI (FUTURE TENSES)",
      items: [
        {
          id: "future-simple",
          name: "9. Future Simple (Tương lai đơn - Will)",
          concept: "Diễn tả quyết định tức thì được đưa ra ngay tại thời điểm nói, dự đoán chủ quan không có bằng chứng rõ ràng, lời hứa, lời mời hoặc đe dọa.",
          formula: {
            affirmative: "S + will + V(bare)",
            negative: "S + will not (won't) + V(bare)",
            interrogative: "Will + S + V(bare)?"
          },
          usages: [
            { title: "Quyết định bột phát tại thời điểm nói", example: "The phone is ringing. I will answer it." },
            { title: "Dự đoán chủ quan (thường sau: I think, I believe, probably, perhaps)", example: "I think the weather will be sunny tomorrow." },
            { title: "Lời hứa, cam kết hoặc đề nghị giúp đỡ", example: "I promise I will return the reference book before the deadline." }
          ],
          signals: ["tomorrow", "next week/month/year", "in the future", "I think", "I hope", "probably", "perhaps"],
          examples: [
            { en: "Experts predict that renewable energy will dominate the global market by 2040.", vn: "Các chuyên gia dự đoán rằng năng lượng tái tạo sẽ thống trị thị trường toàn cầu vào năm 2040." }
          ]
        },
        {
          id: "be-going-to",
          name: "10. Near Future (Tương lai gần - Be Going To)",
          concept: "Diễn tả một kế hoạch, dự định đã được chuẩn bị, tính toán từ trước thời điểm nói; hoặc dự đoán có căn cứ, dấu hiệu thực tế ở hiện tại.",
          formula: {
            affirmative: "S + am/is/are + going to + V(bare)",
            negative: "S + am/is/are not + going to + V(bare)",
            interrogative: "Am/Is/Are + S + going to + V(bare)?"
          },
          usages: [
            { title: "Dự định, kế hoạch đã sắp xếp từ trước", example: "We are going to conduct a comprehensive survey next Monday." },
            { title: "Dự đoán có bằng chứng cụ thể trước mắt", example: "Look at those dark clouds! It is going to rain heavily." }
          ],
          signals: ["planned evidence", "Look at...", "already decided"],
          examples: [
            { en: "The academy is going to upgrade its digital learning facilities this semester.", vn: "Học viện sẽ nâng cấp các trang thiết bị học tập kỹ thuật số trong học kỳ này." }
          ]
        },
        {
          id: "present-continuous-future",
          name: "11. Present Continuous for Future (Hiện tại tiếp diễn mang nghĩa tương lai)",
          concept: "Diễn tả một lịch trình, sự sắp xếp chắc chắn 100% trong tương lai gần với thời gian và địa điểm cụ thể (thường có sự tham gia của người khác hoặc đã đặt vé, đặt lịch).",
          formula: "S + am/is/are + V-ing (với trạng từ chỉ thời gian tương lai)",
          usages: [
            { title: "Kế hoạch chắc chắn có lịch hẹn cụ thể", example: "I am having a private interview with the Dean at 9:00 AM tomorrow." }
          ],
          examples: [
            { en: "The international symposium is taking place in Hanoi this weekend.", vn: "Hội nghị chuyên đề quốc tế sẽ diễn ra tại Hà Nội vào cuối tuần này." }
          ]
        },
        {
          id: "future-continuous-perfect",
          name: "12. Future Continuous & Future Perfect (Tương lai tiếp diễn & Tương lai hoàn thành)",
          concept: "Future Continuous diễn tả hành động đang diễn ra tại một thời điểm cụ thể trong tương lai. Future Perfect diễn tả hành động sẽ hoàn thành trước một mốc thời gian tương lai.",
          formula: {
            futureContinuous: "S + will be + V-ing",
            futurePerfect: "S + will have + V3/V-ed"
          },
          usages: [
            { title: "Future Continuous: Đang diễn ra ở mốc tương lai", example: "At this time next week, we will be attending the graduation ceremony." },
            { title: "Future Perfect: Hoàn thành trước một mốc tương lai (By / By the time)", example: "By the end of this year, I will have finished my B1 preparation course." }
          ],
          signals: ["at this time next...", "by + mốc tương lai", "by the time + Present Simple"],
          examples: [
            { en: "By 2030, the government will have built three new high-speed railway networks.", vn: "Trước năm 2030, chính phủ sẽ hoàn thành việc xây dựng ba mạng lưới đường sắt cao tốc mới." }
          ]
        }
      ]
    }
  ],
  contrastiveGuides: [
    {
      title: "1. So sánh: Present Simple vs Present Continuous",
      distinction: "Present Simple diễn tả chân lý, bản chất vĩnh cửu, thói quen lâu dài. Present Continuous diễn tả sự việc tạm thời hoặc đang diễn ra tại thời điểm nói.",
      pairExamples: [
        { tense1: "She lives in Hanoi. (Nơi ở cố định, vĩnh viễn)", tense2: "She is living with her aunt this month. (Tạm thời chỉ trong tháng này)" },
        { tense1: "I usually take the bus to work. (Thói quen thường xuyên)", tense2: "Today my bicycle is broken, so I am walking. (Hành động tạm thời hôm nay)" }
      ]
    },
    {
      title: "2. So sánh: Past Simple vs Present Perfect",
      distinction: "Past Simple dùng khi thời gian trong quá khứ đã chấm dứt (yesterday, in 2010, 2 days ago). Present Perfect dùng khi thời gian chưa kết thúc (this week, today, so far) hoặc không đề cập mốc thời gian cụ thể (nhấn mạnh trải nghiệm, kết quả).",
      pairExamples: [
        { tense1: "I saw that documentary last night. (Có mốc xác định 'last night' ➔ Past Simple)", tense2: "I have seen that documentary three times. (Kinh nghiệm, không có mốc kết thúc ➔ Present Perfect)" },
        { tense1: "He lived in Da Nang for 5 years. (Hiện tại anh ấy không còn sống ở Đà Nẵng nữa)", tense2: "He has lived in Da Nang for 5 years. (Anh ấy bắt đầu từ 5 năm trước và hiện vẫn đang sống ở Đà Nẵng)" }
      ]
    },
    {
      title: "3. So sánh: Past Simple vs Past Continuous",
      distinction: "Past Continuous diễn tả bối cảnh hoặc hành động nền đang diễn ra (dài). Past Simple diễn tả hành động ngắn bất ngờ xen vào.",
      pairExamples: [
        { tense1: "I was writing the email (Past Continuous - đang diễn ra)", tense2: "when the computer crashed (Past Simple - hành động chen ngang)." }
      ]
    },
    {
      title: "4. So sánh: Will vs Be Going To",
      distinction: "Will: Quyết định bộc phát ngay lúc nói, dự đoán cảm tính không có căn cứ. Be Going To: Kế hoạch đã định trước, dự đoán có căn cứ mắt thấy tai nghe.",
      pairExamples: [
        { tense1: "The bag is heavy. I will carry it for you. (Quyết định ngay lúc nói)", tense2: "I am going to buy a laptop next weekend because I saved enough money. (Đã lên kế hoạch)" }
      ]
    }
  ]
};
