/**
 * src/js/modules/listening/vstepAudioDirector.js
 * Quản lý và tạo kịch bản Audio chuẩn hóa theo đúng format phòng thi VSTEP B1-B2-C1
 * Có đầy đủ: Lời dẫn giám khảo (Official Directions), thông báo số câu,
 * thời gian dừng đọc đề, âm hiệu kết thúc và phát liên tục như băng thi thật.
 */

/**
 * Phát âm thanh chime (chuông báo phòng thi VSTEP) bằng Web Audio API
 */
export function playExamChime() {
  if (typeof window === 'undefined') return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, now); // D5
    osc.frequency.setValueAtTime(880, now + 0.15); // A5

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.3, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.65);
  } catch (e) {
    // AudioContext might be blocked until user gesture, ignore silently
  }
}

export class VstepAudioDirector {
  /**
   * Lời dẫn mở đầu toàn bộ bài thi Nghe VSTEP
   */
  static getMasterExamIntro() {
    return `VIETNAMESE STANDARDIZED TEST OF ENGLISH PROFICIENCY. VSTEP LISTENING TEST. Levels 3 to 5. 
This is the listening test. There are three parts to the test: Part 1, Part 2, and Part 3. 
You will hear each part once only. 
There will be time for you to read the questions before you listen, and time for you to check your answers. 
Write your answers on the question paper. 
You will have five minutes at the end of the test to transfer your answers to your answer sheet. 
Now open your question paper and look at Part 1.`;
  }

  /**
   * Kịch bản Audio chuẩn cho từng câu hỏi Part 1
   * Bao gồm: Lời xướng câu hỏi + đọc câu hỏi + hiệu lệnh nghe + nội dung hội thoại
   */
  static buildQuestionAudioScript(q, qNumber) {
    const num = qNumber || q.id || 1;
    return `Question ${num}. ${q.question}. 
Please look at the four options A, B, C, and D. 
Now listen to the recording. 
${q.audioText} 
Now, choose the best answer for Question ${num}.`;
  }

  /**
   * Kịch bản Audio hoàn chỉnh cho toàn bộ Part 1 (Phát liên tục từ câu 1 đến câu 8)
   */
  static buildPart1FullAudioScript(part1) {
    const questions = part1?.questions || [];
    let script = `Part 1: Questions 1 to 8. 
Directions: In this part, you will hear eight short announcements or conversations. 
There is one question for each announcement or conversation. 
For each question, choose the right answer, A, B, C, or D. 
Then, on your answer sheet, find the number of the question and fill in the space that corresponds to the letter of the answer you have chosen. 
Now we are ready to start. First, you have some time to look at Questions 1 to 8. ... 
`;

    questions.forEach((q, idx) => {
      script += `
Question ${idx + 1}. ${q.question}. 
Now listen. 
${q.audioText} 
... 
`;
    });

    script += `This is the end of Part 1. Now turn to Part 2.`;
    return script;
  }

  /**
   * Kịch bản Audio chuẩn cho từng đoạn hội thoại Part 2 (4 câu hỏi)
   */
  static buildConversationAudioScript(conv, startQ = 9, endQ = 12) {
    return `Part 2. Questions ${startQ} to ${endQ}. 
Directions: You will hear a conversation between speakers. ${conv.title || ''}. 
You will hear the conversation once only. 
First, you have some time to read Questions ${startQ} to ${endQ}. ... 
Now listen carefully and answer Questions ${startQ} to ${endQ}. 
${conv.audioTranscript} 
Now check your answers to Questions ${startQ} to ${endQ}.`;
  }

  /**
   * Kịch bản Audio hoàn chỉnh cho toàn bộ Part 2 (3 đoạn hội thoại, câu 9-20)
   */
  static buildPart2FullAudioScript(part2) {
    const convs = part2?.conversations || [];
    let script = `Part 2: Questions 9 to 20. 
Directions: In this part, you will hear three conversations. 
The conversations will not be repeated. 
There are four questions for each conversation. 
For each question, choose the correct answer, A, B, C, or D. 
`;

    let curQ = 9;
    convs.forEach((conv, idx) => {
      const start = curQ;
      const end = curQ + (conv.questions?.length || 4) - 1;
      curQ = end + 1;

      script += `
Questions ${start} to ${end}. Conversation ${idx + 1}. ${conv.title || ''}. 
First, you have some time to read Questions ${start} to ${end}. ... 
Now listen carefully and answer Questions ${start} to ${end}. 
${conv.audioTranscript} 
Now check your answers to Questions ${start} to ${end}. ... 
`;
    });

    script += `This is the end of Part 2. Now turn to Part 3.`;
    return script;
  }

  /**
   * Kịch bản Audio chuẩn cho từng bài nói/giảng Part 3 (5 câu hỏi)
   */
  static buildTalkAudioScript(talk, startQ = 21, endQ = 25) {
    return `Part 3. Questions ${startQ} to ${endQ}. 
Directions: You will hear a talk or academic lecture. ${talk.title || ''}. 
You will hear the talk once only. 
First, you have some time to read Questions ${startQ} to ${endQ}. ... 
Now listen carefully and answer Questions ${startQ} to ${endQ}. 
${talk.audioTranscript} 
Now check your answers to Questions ${startQ} to ${endQ}.`;
  }

  /**
   * Kịch bản Audio hoàn chỉnh cho toàn bộ Part 3 (3 bài nói, câu 21-35)
   */
  static buildPart3FullAudioScript(part3) {
    const talks = part3?.talks || [];
    let script = `Part 3: Questions 21 to 35. 
Directions: In this part, you will hear three talks or lectures. 
The talks will not be repeated. 
There are five questions for each talk. 
For each question, choose the right answer, A, B, C, or D. 
`;

    let curQ = 21;
    talks.forEach((talk, idx) => {
      const start = curQ;
      const end = curQ + (talk.questions?.length || 5) - 1;
      curQ = end + 1;

      script += `
Questions ${start} to ${end}. Talk ${idx + 1}. ${talk.title || ''}. 
First, you have some time to read Questions ${start} to ${end}. ... 
Now listen carefully and answer Questions ${start} to ${end}. 
${talk.audioTranscript} 
Now check your answers to Questions ${start} to ${end}. ... 
`;
    });

    script += `This is the end of Part 3. That is the end of the VSTEP Listening Test.`;
    return script;
  }

  /**
   * Kịch bản Audio toàn bộ bài thi Nghe VSTEP (Full Test Master Audio Track)
   * Giống 100% băng phát phòng thi chính thức
   */
  static buildMasterExamFullAudioScript(exam) {
    const intro = this.getMasterExamIntro();
    const p1 = this.buildPart1FullAudioScript(exam.listening?.part1);
    const p2 = this.buildPart2FullAudioScript(exam.listening?.part2);
    const p3 = this.buildPart3FullAudioScript(exam.listening?.part3);

    return `${intro}

${p1}

${p2}

${p3}

You now have five minutes to check and finalize all your answers on the answer sheet. 
Stop writing. The test is now finished.`;
  }
}
