import { allVocabulary, phrasalVerbs, collocations, irregularVerbs } from '../../../data/vocabulary/index.js';

// Comprehensive built-in academic and common VSTEP reading vocabulary map
const COMPREHENSIVE_DICT = {
  "intelligence": { meaning: "trí thông minh, trí tuệ; sự hiểu biết", pos: "noun", phonetic: "ɪnˈtel.ɪ.dʒəns" },
  "artificial": { meaning: "nhân tạo, do con người tạo ra", pos: "adj", phonetic: "ˌɑː.tɪˈfɪʃ.əl" },
  "transforming": { meaning: "biến đổi, thay đổi diện mạo/tính chất", pos: "verb", phonetic: "trænsˈfɔːm.ɪŋ" },
  "transform": { meaning: "biến đổi, chuyển hóa hoàn toàn", pos: "verb", phonetic: "trænsˈfɔːm" },
  "landscape": { meaning: "bối cảnh, diện mạo; phong cảnh", pos: "noun", phonetic: "ˈlænd.skeɪp" },
  "healthcare": { meaning: "chăm sóc sức khỏe, y tế", pos: "noun", phonetic: "ˈhelθ.keər" },
  "unprecedented": { meaning: "chưa từng có, chưa từng có tiền lệ", pos: "adj", phonetic: "ʌnˈpres.ɪ.den.tɪd" },
  "pace": { meaning: "tốc độ, nhịp độ tiến triển", pos: "noun", phonetic: "peɪs" },
  "diagnostic": { meaning: "mang tính chẩn đoán (bệnh tật)", pos: "adj", phonetic: "ˌdaɪ.əɡˈnɒs.tɪk" },
  "diagnostics": { meaning: "phương pháp/khoa học chẩn đoán bệnh", pos: "noun", phonetic: "ˌdaɪ.əɡˈnɒs.tɪks" },
  "imaging": { meaning: "chụp ảnh chẩn đoán y khoa (X-quang, MRI)", pos: "noun", phonetic: "ˈɪm.ɪ.dʒɪŋ" },
  "personalized": { meaning: "được cá nhân hóa theo từng người", pos: "adj", phonetic: "ˈpɜː.sən.əl.aɪzd" },
  "medicine": { meaning: "y học, dược phẩm, thuốc chữa bệnh", pos: "noun", phonetic: "ˈmed.sən" },
  "machine": { meaning: "máy móc, cơ chế tự động", pos: "noun", phonetic: "məˈʃiːn" },
  "learning": { meaning: "học tập, tiếp thu kiến thức; máy học", pos: "noun", phonetic: "ˈlɜː.nɪŋ" },
  "algorithm": { meaning: "thuật toán, quy trình xử lý dữ liệu", pos: "noun", phonetic: "ˈæl.ɡə.rɪ.ðəm" },
  "algorithms": { meaning: "các thuật toán xử lý", pos: "noun", phonetic: "ˈæl.ɡə.rɪ.ðəmz" },
  "medical": { meaning: "thuộc về y khoa, y tế", pos: "adj", phonetic: "ˈmed.ɪ.kəl" },
  "professionals": { meaning: "các chuyên gia, nhân viên chuyên ngành", pos: "noun", phonetic: "prəˈfeʃ.ən.əlz" },
  "professional": { meaning: "chuyên nghiệp; nhà chuyên môn", pos: "noun/adj", phonetic: "prəˈfeʃ.ən.əl" },
  "enhance": { meaning: "nâng cao, tăng cường chất lượng", pos: "verb", phonetic: "ɪnˈhɑːns" },
  "outcomes": { meaning: "kết quả, hiệu quả đạt được", pos: "noun", phonetic: "ˈaʊt.kʌmz" },
  "outcome": { meaning: "kết quả sau một quá trình", pos: "noun", phonetic: "ˈaʊt.kʌm" },
  "streamline": { meaning: "tinh gọn hóa, tối ưu hóa quy trình", pos: "verb", phonetic: "ˈstriːm.laɪn" },
  "hospital": { meaning: "bệnh viện", pos: "noun", phonetic: "ˈhɒs.pɪ.təl" },
  "operations": { meaning: "hoạt động vận hành, quy trình làm việc", pos: "noun", phonetic: "ˌɒp.ərˈeɪ.ʃənz" },
  "operation": { meaning: "sự vận hành; ca phẫu thuật", pos: "noun", phonetic: "ˌɒp.ərˈeɪ.ʃən" },
  "breakthrough": { meaning: "bước đột phá lớn mang tính cách mạng", pos: "noun", phonetic: "ˈbreɪk.θruː" },
  "breakthroughs": { meaning: "những bước đột phá", pos: "noun", phonetic: "ˈbreɪk.θruːz" },
  "significant": { meaning: "quan trọng, có ý nghĩa to lớn, đáng kể", pos: "adj", phonetic: "sɪɡˈnɪf.ɪ.kənt" },
  "resolution": { meaning: "độ phân giải hình ảnh; giải pháp", pos: "noun", phonetic: "ˌrez.əˈluː.ʃən" },
  "powered": { meaning: "được vận hành/tiếp sức bởi", pos: "adj/verb", phonetic: "ˈpaʊ.əd" },
  "detect": { meaning: "phát hiện, dò tìm ra dấu vết", pos: "verb", phonetic: "dɪˈtekt" },
  "microscopic": { meaning: "siêu nhỏ, chỉ thấy qua kính hiển vi", pos: "adj", phonetic: "ˌmaɪ.krəˈskɒp.ɪk" },
  "abnormalities": { meaning: "các dấu hiệu bất thường, dị tật", pos: "noun", phonetic: "ˌæb.nɔːˈmæl.ə.tiz" },
  "abnormality": { meaning: "sự bất thường trong cơ thể", pos: "noun", phonetic: "ˌæb.nɔːˈmæl.ə.ti" },
  "accuracy": { meaning: "độ chính xác tuyệt đối", pos: "noun", phonetic: "ˈæk.jə.rə.si" },
  "comparable": { meaning: "có thể so sánh tương đương với", pos: "adj", phonetic: "ˈkɒm.pər.ə.bəl" },
  "radiologists": { meaning: "các bác sĩ chuyên khoa chẩn đoán hình ảnh (X-quang)", pos: "noun", phonetic: "ˌreɪ.diˈɒl.ə.dʒɪsts" },
  "radiologist": { meaning: "bác sĩ chẩn đoán hình ảnh", pos: "noun", phonetic: "ˌreɪ.diˈɒl.ə.dʒɪst" },
  "mammograms": { meaning: "hình ảnh chụp quang tuyến vú", pos: "noun", phonetic: "ˈmæm.ə.ɡræmz" },
  "identify": { meaning: "nhận diện, xác định danh tính/bản chất", pos: "verb", phonetic: "aɪˈden.tɪ.faɪ" },
  "indicators": { meaning: "các chỉ số, dấu hiệu nhận biết", pos: "noun", phonetic: "ˈɪn.dɪ.keɪ.təz" },
  "indicator": { meaning: "chỉ số, dấu hiệu chỉ báo", pos: "noun", phonetic: "ˈɪn.dɪ.keɪ.tər" },
  "inadvertently": { meaning: "vô tình, không cố ý bỏ sót", pos: "adv", phonetic: "ˌɪn.ədˈvɜː.tənt.li" },
  "overlook": { meaning: "bỏ qua, xem sót, không để ý thấy", pos: "verb", phonetic: "ˌəʊ.vəˈlʊk" },
  "flagging": { meaning: "đánh dấu cảnh báo sự việc", pos: "verb", phonetic: "ˈflæɡ.ɪŋ" },
  "clinicians": { meaning: "các bác sĩ lâm sàng", pos: "noun", phonetic: "klɪˈnɪʃ.ənz" },
  "clinician": { meaning: "bác sĩ điều trị trực tiếp", pos: "noun", phonetic: "klɪˈnɪʃ.ən" },
  "intervene": { meaning: "can thiệp kịp thời để chữa trị/ngăn chặn", pos: "verb", phonetic: "ˌɪn.təˈviːn" },
  "progress": { meaning: "tiến triển, phát triển thành", pos: "verb/noun", phonetic: "prəˈɡres" },
  "advanced": { meaning: "tiên tiến; giai đoạn muộn (bệnh)", pos: "adj", phonetic: "ədˈvɑːnst" },
  "revolutionizing": { meaning: "cách mạng hóa, đổi mới căn bản", pos: "verb", phonetic: "ˌrev.əˈluː.ʃən.aɪ.zɪŋ" },
  "revolutionize": { meaning: "tạo ra cuộc cách mạng đổi mới", pos: "verb", phonetic: "ˌrev.əˈluː.ʃən.aɪz" },
  "development": { meaning: "sự phát triển, quá trình nghiên cứu phát triển", pos: "noun", phonetic: "dɪˈvel.əp.mənt" },
  "pharmaceutical": { meaning: "thuộc ngành dược phẩm, điều chế thuốc", pos: "adj", phonetic: "ˌfɑː.məˈsjuː.tɪ.kəl" },
  "treatments": { meaning: "các phác đồ điều trị, liệu pháp chữa bệnh", pos: "noun", phonetic: "ˈtriːt.mənts" },
  "treatment": { meaning: "sự điều trị, phép chữa bệnh", pos: "noun", phonetic: "ˈtriːt.mənt" },
  "traditionally": { meaning: "theo phương pháp truyền thống trước đây", pos: "adv", phonetic: "trəˈdɪʃ.ən.əl.i" },
  "synthesizing": { meaning: "tổng hợp, điều chế hợp chất hóa học", pos: "verb", phonetic: "ˈsɪn.θə.saɪ.zɪŋ" },
  "synthesize": { meaning: "tổng hợp lại các thành phần", pos: "verb", phonetic: "ˈsɪn.θə.saɪz" },
  "candidate": { meaning: "ứng viên; hợp chất tiềm năng nghiên cứu", pos: "noun", phonetic: "ˈkæn.dɪ.dət" },
  "laboratory": { meaning: "phòng thí nghiệm y sinh", pos: "noun", phonetic: "ləˈbɒr.ə.tər.i" },
  "trials": { meaning: "các cuộc thử nghiệm lâm sàng", pos: "noun", phonetic: "ˈtraɪ.əlz" },
  "trial": { meaning: "cuộc thử nghiệm, sự thử thách", pos: "noun", phonetic: "traɪəl" },
  "computational": { meaning: "thuộc điện toán, tính toán bằng máy tính", pos: "adj", phonetic: "ˌkɒm.pjəˈteɪ.ʃən.əl" },
  "simulate": { meaning: "mô phỏng lại quá trình thực tế", pos: "verb", phonetic: "ˈsɪm.jə.leɪt" },
  "molecular": { meaning: "thuộc cấp độ phân tử", pos: "adj", phonetic: "məˈlek.jə.lər" },
  "interactions": { meaning: "các tương tác qua lại", pos: "noun", phonetic: "ˌɪn.təˈræk.ʃənz" },
  "predicting": { meaning: "dự đoán trước kết quả", pos: "verb", phonetic: "prɪˈdɪk.tɪŋ" },
  "predict": { meaning: "tiên đoán, dự báo", pos: "verb", phonetic: "prɪˈdɪkt" },
  "chemical": { meaning: "chất hóa học; thuộc về hóa học", pos: "adj/noun", phonetic: "ˈkem.ɪ.kəl" },
  "compounds": { meaning: "các hợp chất hóa học", pos: "noun", phonetic: "ˈkɒm.paʊndz" },
  "compound": { meaning: "hợp chất, liên hợp", pos: "noun", phonetic: "ˈkɒm.paʊnd" },
  "effectively": { meaning: "một cách hiệu quả, đạt kết quả mong muốn", pos: "adv", phonetic: "ɪˈfek.tɪv.li" },
  "bind": { meaning: "gắn kết, liên kết phân tử", pos: "verb", phonetic: "baɪnd" },
  "targeted": { meaning: "được nhắm mục tiêu đích xác", pos: "adj/verb", phonetic: "ˈtɑː.ɡɪ.tɪd" },
  "viral": { meaning: "thuộc về virus, lây nhiễm virus", pos: "adj", phonetic: "ˈvaɪə.rəl" },
  "proteins": { meaning: "các phân tử protein/chất đạm sinh học", pos: "noun", phonetic: "ˈprəʊ.tiːnz" },
  "protein": { meaning: "chất đạm, protein sinh học", pos: "noun", phonetic: "ˈprəʊ.tiːn" },
  "crises": { meaning: "các cuộc khủng hoảng", pos: "noun", phonetic: "ˈkraɪ.siːz" },
  "crisis": { meaning: "cuộc khủng hoảng nghiêm trọng", pos: "noun", phonetic: "ˈkraɪ.sɪs" },
  "screening": { meaning: "sự sàng lọc diện rộng (thuốc/bệnh tật)", pos: "noun", phonetic: "ˈskriː.nɪŋ" },
  "accelerated": { meaning: "đã thúc đẩy tăng tốc nhanh chóng", pos: "verb/adj", phonetic: "əkˈsel.ə.reɪ.tɪd" },
  "accelerate": { meaning: "tăng tốc, thúc đẩy tiến độ", pos: "verb", phonetic: "əkˈsel.ə.reɪt" },
  "formulation": { meaning: "công thức điều chế, sự bào chế", pos: "noun", phonetic: "ˌfɔː.mjəˈleɪ.ʃən" },
  "therapeutic": { meaning: "có tính trị liệu, mang lại hiệu quả chữa bệnh", pos: "adj", phonetic: "ˌθer.əˈpjuː.tɪk" },
  "vaccines": { meaning: "các loại vắc-xin phòng bệnh", pos: "noun", phonetic: "vækˈsiːnz" },
  "vaccine": { meaning: "vắc-xin phòng bệnh", pos: "noun", phonetic: "vækˈsiːn" },
  "integration": { meaning: "sự tích hợp, quá trình hội nhập kết nối", pos: "noun", phonetic: "ˌɪn.tɪˈɡreɪ.ʃən" },
  "ethical": { meaning: "thuộc đạo đức, chuẩn mực đạo lý y khoa", pos: "adj", phonetic: "ˈeθ.ɪ.kəl" },
  "operational": { meaning: "thuộc về vận hành, thực thi công việc", pos: "adj", phonetic: "ˌɒp.ərˈeɪ.ʃən.əl" },
  "challenges": { meaning: "những thách thức, khó khăn lớn", pos: "noun", phonetic: "ˈtʃæl.ɪn.dʒɪz" },
  "challenge": { meaning: "thử thách, điều thách thức", pos: "noun", phonetic: "ˈtʃæl.ɪndʒ" },
  "privacy": { meaning: "quyền riêng tư, bảo mật thông tin cá nhân", pos: "noun", phonetic: "ˈprɪv.ə.si" },
  "algorithmic": { meaning: "thuộc về thuật toán máy tính", pos: "adj", phonetic: "ˌæl.ɡəˈrɪð.mɪk" },
  "bias": { meaning: "sự thiên vị, định kiến dữ liệu", pos: "noun", phonetic: "ˈbaɪ.əs" },
  "liability": { meaning: "trách nhiệm pháp lý bồi thường", pos: "noun", phonetic: "ˌlaɪ.əˈbɪl.ə.ti" },
  "misdiagnoses": { meaning: "các chẩn đoán sai lệch bệnh", pos: "noun", phonetic: "ˌmɪs.daɪ.əɡˈnəʊ.siːz" },
  "misdiagnosis": { meaning: "chẩn đoán nhầm bệnh", pos: "noun", phonetic: "ˌmɪs.daɪ.əɡˈnəʊ.sɪs" },
  "debated": { meaning: "được đem ra tranh luận gay gắt", pos: "verb/adj", phonetic: "dɪˈbeɪ.tɪd" },
  "bioethicists": { meaning: "các chuyên gia đạo đức sinh học/y khoa", pos: "noun", phonetic: "ˌbaɪ.əʊˈeθ.ɪ.sɪsts" },
  "bioethicist": { meaning: "chuyên gia đạo đức sinh học", pos: "noun", phonetic: "ˌbaɪ.əʊˈeθ.ɪ.sɪst" },
  "emphasize": { meaning: "nhấn mạnh tầm quan trọng", pos: "verb", phonetic: "ˈem.fə.saɪz" },
  "augment": { meaning: "bổ trợ, gia tăng sức mạnh/năng lực", pos: "verb", phonetic: "ɔːɡˈment" },
  "replace": { meaning: "thay thế hoàn toàn vị trí", pos: "verb", phonetic: "rɪˈpleɪs" },
  "judgment": { meaning: "sự phán đoán, óc nhận định chuyên môn", pos: "noun", phonetic: "ˈdʒʌdʒ.mənt" },
  "ultimately": { meaning: "rút cục, xét đến cùng, về cơ bản", pos: "adv", phonetic: "ˈʌl.tɪ.mət.li" },
  "collaborative": { meaning: "có tính hợp tác, tương trợ lẫn nhau", pos: "adj", phonetic: "kəˈlæb.ər.ə.tɪv" },
  "synergy": { meaning: "sự hiệp lực, sức mạnh cộng hưởng", pos: "noun", phonetic: "ˈsɪn.ə.dʒi" },
  "cutting-edge": { meaning: "tân tiến nhất, đi đầu về công nghệ", pos: "adj", phonetic: "ˌkʌt.ɪŋ ˈedʒ" },
  "technology": { meaning: "công nghệ, kỹ thuật hiện đại", pos: "noun", phonetic: "tekˈnɒl.ə.dʒi" },
  "empowers": { meaning: "trao quyền, tiếp thêm năng lực", pos: "verb", phonetic: "ɪmˈpaʊ.əz" },
  "empower": { meaning: "trao quyền, tăng cường năng lực", pos: "verb", phonetic: "ɪmˈpaʊ.ər" },
  "compassionate": { meaning: "giàu lòng nhân ái, thấu cảm", pos: "adj", phonetic: "kəmˈpæʃ.ən.ət" },
  "physicians": { meaning: "các bác sĩ đa khoa/chuyên khoa", pos: "noun", phonetic: "fɪˈzɪʃ.ənz" },
  "physician": { meaning: "bác sĩ điều trị", pos: "noun", phonetic: "fɪˈzɪʃ.ən" }
};

/**
 * Tra cứu nhanh từ vựng với giải thuật lemmatization (loại bỏ s, es, ed, ing)
 * @param {string} rawWord 
 * @returns {Object|null}
 */
export function lookupWordDefinition(rawWord) {
  if (!rawWord) return null;
  const word = rawWord.trim().toLowerCase();

  // 1. Check in COMPREHENSIVE_DICT directly
  if (COMPREHENSIVE_DICT[word]) {
    return {
      word: word,
      meaning: COMPREHENSIVE_DICT[word].meaning,
      pos: COMPREHENSIVE_DICT[word].pos,
      phonetic: COMPREHENSIVE_DICT[word].phonetic
    };
  }

  // 2. Check in allVocabulary (2.940+ words)
  const vocabMatch = (allVocabulary || []).find(
    (v) => v.word.toLowerCase() === word
  );
  if (vocabMatch) {
    return {
      word: vocabMatch.word,
      meaning: vocabMatch.meaningVn || vocabMatch.meaning,
      pos: vocabMatch.pos || 'vocabulary',
      phonetic: (vocabMatch.phonetic || '').replace(/^\/|\/$/g, '')
    };
  }

  // 3. Lemmatize suffix variants (e.g. technologies -> technology, transforms -> transform, transformed -> transform)
  const stems = getWordLemmas(word);
  for (const stem of stems) {
    if (COMPREHENSIVE_DICT[stem]) {
      return {
        word: word,
        baseWord: stem,
        meaning: COMPREHENSIVE_DICT[stem].meaning,
        pos: COMPREHENSIVE_DICT[stem].pos,
        phonetic: COMPREHENSIVE_DICT[stem].phonetic
      };
    }
    const stemMatch = (allVocabulary || []).find((v) => v.word.toLowerCase() === stem);
    if (stemMatch) {
      return {
        word: word,
        baseWord: stem,
        meaning: stemMatch.meaningVn || stemMatch.meaning,
        pos: stemMatch.pos || 'vocabulary',
        phonetic: (stemMatch.phonetic || '').replace(/^\/|\/$/g, '')
      };
    }
  }

  // 4. Check Phrasal Verbs & Collocations
  const pvMatch = (phrasalVerbs || []).find((p) => p.verb.toLowerCase() === word);
  if (pvMatch) {
    return {
      word: pvMatch.verb,
      meaning: pvMatch.meaningVn,
      pos: 'phrasal verb',
      phonetic: ''
    };
  }

  const irrMatch = (irregularVerbs || []).find((i) => i.v1.toLowerCase() === word || i.v2.toLowerCase() === word || i.v3.toLowerCase() === word);
  if (irrMatch) {
    return {
      word: word,
      meaning: irrMatch.meaning,
      pos: `verb (V1: ${irrMatch.v1} - V2: ${irrMatch.v2} - V3: ${irrMatch.v3})`,
      phonetic: irrMatch.v1_ipa
    };
  }

  // 5. Fallback heuristic lookup
  return {
    word: word,
    meaning: generateHeuristicMeaning(word),
    pos: guessPartOfSpeech(word),
    phonetic: ''
  };
}

/**
 * Sinh danh sách các dạng gốc của từ (lemmatization)
 */
function getWordLemmas(w) {
  const lemmas = [];
  if (w.endsWith('ies')) lemmas.push(w.slice(0, -3) + 'y');
  if (w.endsWith('es')) lemmas.push(w.slice(0, -2));
  if (w.endsWith('s') && !w.endsWith('ss')) lemmas.push(w.slice(0, -1));
  if (w.endsWith('ing')) {
    lemmas.push(w.slice(0, -3));
    lemmas.push(w.slice(0, -3) + 'e');
  }
  if (w.endsWith('ed')) {
    lemmas.push(w.slice(0, -2));
    lemmas.push(w.slice(0, -1));
  }
  if (w.endsWith('ly')) lemmas.push(w.slice(0, -2));
  if (w.endsWith('tion')) lemmas.push(w.slice(0, -4) + 'te');
  return lemmas;
}

function guessPartOfSpeech(w) {
  if (w.endsWith('tion') || w.endsWith('ment') || w.endsWith('ness') || w.endsWith('ity') || w.endsWith('er') || w.endsWith('or')) return 'noun';
  if (w.endsWith('able') || w.endsWith('ible') || w.endsWith('al') || w.endsWith('ive') || w.endsWith('ous') || w.endsWith('ic') || w.endsWith('ful')) return 'adj';
  if (w.endsWith('ly')) return 'adv';
  if (w.endsWith('ize') || w.endsWith('ise') || w.endsWith('ate') || w.endsWith('ify')) return 'verb';
  return 'vocabulary';
}

function generateHeuristicMeaning(w) {
  if (w.endsWith('ly')) return `một cách ${w.slice(0, -2)}`;
  if (w.endsWith('tion')) return `sự/quá trình ${w.slice(0, -4)}`;
  if (w.endsWith('able')) return `có khả năng ${w.slice(0, -4)}`;
  return `Từ vựng học thuật VSTEP B1: ${w}`;
}
