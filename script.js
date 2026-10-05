/* ==========================================================================
   BINGO - INTERACTIVE LANDING PAGE SCRIPT
   - Multi-Language Switcher (EN & ID)
   - Auth Modal (Sign In / Sign Up)
   - Mobile Drawer Menu
   - Interactive Toast Feedback
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. MULTI-LANGUAGE SYSTEM (EN & ID)
  // ==========================================
  const translations = {
    en: {
      "nav.home": "Home",
      "nav.course": "Course",
      "nav.schedule": "Schedule",
      "nav.quiz": "Quiz",
      "nav.practice": "Practice Hub",
      "nav.contact": "Contact",
      "nav.auth": "Sign In/Sign Up",
      "sched.chip": "Schedule",
      "sched.title": "Learn Your Way, Every Day",
      "sched.subtitle": "Follow our recommended daily track or build your own custom study routine with clear daily targets.",
      "sched.tabDefault": "Recommended Track",
      "sched.tabCustom": "Custom Routine",
      "sched.today": "Today",
      "sched.targetToday": "Target: 15 min • 10 New Words",
      "sched.todayTopic": "Essential Greetings & Small Talk",
      "sched.item1": "5 min: Audio flashcard drill",
      "sched.item2": "5 min: Sentence builder game",
      "sched.item3": "5 min: Pronunciation speaking test",
      "sched.tomorrow": "Tomorrow",
      "sched.targetTomorrow": "Target: 15 min • Fluency Habit",
      "sched.tomorrowTopic": "Food Orders & Cafe Expressions",
      "sched.item4": "5 min: Real-life scenario listening",
      "sched.item5": "5 min: Shadowing & intonation drill",
      "sched.item6": "5 min: 3-question quick recap quiz",
      "sched.note": "Tip: You can adjust study hours and difficulty goals anytime in your profile!",
      "quiz.chip": "Quiz",
      "quiz.title": "Test Your Academic English",
      "quiz.subtitle": "Challenge yourself with university-level vocabulary and academic writing concepts.",
      "quiz.category": "Academic Vocabulary",
      "quiz.counter": "Question 1 of 3",
      "quiz.sampleQ": 'Which word is the best formal synonym for "to prove" in a Bachelor thesis?',
      "quiz.optA": "Show up",
      "quiz.optB": "Substantiate",
      "quiz.optC": "Make real",
      "hero.desc": "Master fluent English conversation, modern slang, and crystal-clear pronunciation through interactive game quests, bite-sized daily challenges, and real-time live video chats with native tutors worldwide.",
      "hero.ctaPrimary": "Start Learning",
      "hero.scrollDown": "Scroll Down",
      "course.eyebrow": "Choose your learning path",
      "course.title": "Find Your English Course",
      "course.intro": "Courses designed around your English goals and needs.",
      "course.category1": "English for work",
      "course.title1": "English for Specific Purposes (ESP)",
      "course.description1": "Learn English tailored to your industry and professional needs.",
      "course.category2": "English for study",
      "course.title2": "Academic English / EAP",
      "course.description2": "Build the reading, writing, presentation, and discussion skills you need for academic settings.",
      "course.category3": "Build your confidence",
      "course.title3": "Conversation / Speaking Class",
      "course.description3": "Practice speaking to become more fluent, confident, and natural.",
      "course.category4": "Test preparation",
      "course.title4": "IELTS Preparation Course",
      "course.description4": "Build strategies and skills for the IELTS Listening, Reading, Writing, and Speaking sections.",
      "course.category5": "Test preparation",
      "course.title5": "TOEFL iBT / PBT Course",
      "course.description5": "Prepare for TOEFL with focused skill practice and test-taking strategies.",
      "course.image1Alt": "Teacher guiding an online English class",
      "course.image2Alt": "Student practicing English through an online video call",
      "course.image3Alt": "Learners practicing conversation and speaking online",
      "course.image4Alt": "Student preparing for an English exam on a laptop",
      "course.image5Alt": "Student following a structured online learning course",
      "practice.eyebrow": "Practice your way",
      "practice.title": "Practice Hub",
      "practice.intro": "Strengthen your English with focused practice you can choose based on your learning goals.",
      "practice.title1": "Mistake Review",
      "practice.description1": "Review questions or material you got wrong before and understand the correct answers.",
      "practice.title2": "Vocabulary Practice",
      "practice.description2": "Review the vocabulary you have learned so it is easier to remember and use.",
      "practice.title3": "Focused Practice",
      "practice.description3": "Strengthen Listening or Speaking through separate, focused practice sessions.",
      "practice.title4": "Interactive Conversation",
      "practice.description4": "Practice real-world conversations through AI-powered roleplay simulations.",
      "practice.action1": "Review mistakes",
      "practice.action2": "Review words",
      "practice.action3": "Choose a skill",
      "practice.action4": "Start roleplay",
      "practice.imageAlt": "Tutor and student practicing English online",
      "quiz.correctFeedback": 'Correct! "Substantiate" means to provide evidence to support or prove a claim.',
      "quiz.incorrectFeedback": 'Not quite. The correct answer is "Substantiate," meaning to provide evidence to support or prove a claim.',
      "contact.description": "Learn English with practical courses and focused practice built around your goals.",
      "contact.linksTitle": "Explore",
      "contact.learnTitle": "Learning",
      "contact.contactTitle": "Contact us",
      "contact.contactNote": "Questions about a course? Send us an email.",
      "contact.socialTitle": "Follow us",
      "contact.joinTitle": "Join Bingo",
      "contact.joinDescription": "Start building your English skills with us.",
      "contact.joinAction": "Get started"
    },
    id: {
      "nav.home": "Beranda",
      "nav.course": "Kursus",
      "nav.schedule": "Jadwal",
      "nav.quiz": "Kuis",
      "nav.practice": "Pusat Latihan",
      "nav.contact": "Kontak",
      "nav.auth": "Masuk / Daftar",
      "sched.chip": "Jadwal",
      "sched.title": "Belajar dengan Caramu, Setiap Hari",
      "sched.subtitle": "Ikuti rutinitas harian yang kami rekomendasikan atau susun jadwal belajarmu sendiri dengan target harian yang jelas.",
      "sched.tabDefault": "Jadwal Rekomendasi",
      "sched.tabCustom": "Rutinitas Kustom",
      "sched.today": "Hari Ini",
      "sched.targetToday": "Target: 15 menit • 10 Kosakata Baru",
      "sched.todayTopic": "Salam Penting & Percakapan Ringan",
      "sched.item1": "5 menit: Latihan kartu kosakata audio",
      "sched.item2": "5 menit: Permainan menyusun kalimat",
      "sched.item3": "5 menit: Tes berbicara dan pelafalan",
      "sched.tomorrow": "Besok",
      "sched.targetTomorrow": "Target: 15 menit • Kebiasaan Lancar",
      "sched.tomorrowTopic": "Memesan Makanan & Ungkapan di Kafe",
      "sched.item4": "5 menit: Menyimak skenario kehidupan nyata",
      "sched.item5": "5 menit: Latihan meniru ucapan & intonasi",
      "sched.item6": "5 menit: Kuis kilat 3 pertanyaan",
      "sched.note": "Tips: Kamu bisa menyesuaikan jam belajar dan target kesulitan kapan saja di profilmu!",
      "quiz.chip": "Kuis",
      "quiz.title": "Uji Kemampuan Bahasa Inggris Akademikmu",
      "quiz.subtitle": "Uji kemampuanmu dalam kosakata tingkat universitas dan konsep penulisan akademik.",
      "quiz.category": "Kosakata Akademik",
      "quiz.counter": "Pertanyaan 1 dari 3",
      "quiz.sampleQ": 'Kata manakah yang merupakan sinonim formal terbaik dari "membuktikan" dalam skripsi?',
      "quiz.optA": "Muncul",
      "quiz.optB": "Membuktikan",
      "quiz.optC": "Mewujudkan",
      "hero.desc": "Siap berbicara bahasa Inggris dengan percaya diri? Bingo menawarkan pelajaran singkat, kosa kata praktis, dan latihan interaktif yang bisa masuk dengan mulus ke jadwal harianmu. Belajar sesuai ritmemu sendiri dan mulai melihat kemajuan dalam hitungan menit setiap harinya.",
      "hero.ctaPrimary": "Mulai Belajar",
      "hero.scrollDown": "Gulir ke Bawah",
      "course.eyebrow": "Pilih jalur belajarmu",
      "course.title": "Temukan Kursus Bahasa Inggrismu",
      "course.intro": "Kursus yang dirancang sesuai tujuan dan kebutuhan bahasa Inggrismu.",
      "course.category1": "Bahasa Inggris untuk kerja",
      "course.title1": "English for Specific Purposes (ESP)",
      "course.description1": "Pelajari bahasa Inggris yang sesuai dengan bidang kerja dan kebutuhan profesionalmu.",
      "course.category2": "Bahasa Inggris untuk studi",
      "course.title2": "Academic English / EAP",
      "course.description2": "Kembangkan kemampuan membaca, menulis, presentasi, dan berdiskusi untuk kebutuhan akademik.",
      "course.category3": "Bangun kepercayaan diri",
      "course.title3": "Kelas Percakapan / Berbicara",
      "course.description3": "Berlatih berbicara agar lebih lancar, percaya diri, dan terdengar alami.",
      "course.category4": "Persiapan tes",
      "course.title4": "Kursus Persiapan IELTS",
      "course.description4": "Pelajari strategi dan keterampilan Listening, Reading, Writing, dan Speaking untuk IELTS.",
      "course.category5": "Persiapan tes",
      "course.title5": "Kursus TOEFL iBT / PBT",
      "course.description5": "Persiapkan TOEFL dengan latihan keterampilan dan strategi mengerjakan soal.",
      "course.image1Alt": "Pengajar membimbing kelas bahasa Inggris online",
      "course.image2Alt": "Siswa berlatih bahasa Inggris melalui panggilan video online",
      "course.image3Alt": "Peserta berlatih percakapan dan berbicara secara online",
      "course.image4Alt": "Siswa mempersiapkan ujian bahasa Inggris menggunakan laptop",
      "course.image5Alt": "Siswa mengikuti kursus pembelajaran online yang terstruktur",
      "practice.eyebrow": "Berlatih sesuai kebutuhanmu",
      "practice.title": "Pusat Latihan",
      "practice.intro": "Tingkatkan kemampuan bahasa Inggrismu melalui latihan terarah sesuai tujuan belajarmu.",
      "practice.title1": "Ulas Kesalahan (Mistakes)",
      "practice.description1": "Ulas kembali soal atau materi yang pernah salah dijawab dan pahami jawaban yang benar.",
      "practice.title2": "Latihan Kosakata (Words)",
      "practice.description2": "Tinjau kosakata yang sudah dipelajari agar lebih mudah diingat dan digunakan.",
      "practice.title3": "Latihan Khusus",
      "practice.description3": "Asah Listening atau Speaking melalui sesi latihan terpisah dan terarah.",
      "practice.title4": "Percakapan Interaktif",
      "practice.description4": "Latih percakapan dalam situasi nyata melalui simulasi berbasis AI.",
      "practice.action1": "Ulas kesalahan",
      "practice.action2": "Tinjau kosakata",
      "practice.action3": "Pilih latihan",
      "practice.action4": "Mulai roleplay",
      "practice.imageAlt": "Tutor dan siswa berlatih bahasa Inggris secara online",
      "quiz.correctFeedback": 'Benar! "Substantiate" berarti memberikan bukti untuk mendukung atau membuktikan suatu klaim.',
      "quiz.incorrectFeedback": 'Belum tepat. Jawaban yang benar adalah "Substantiate," yang berarti memberikan bukti untuk mendukung atau membuktikan suatu klaim.',
      "contact.description": "Belajar bahasa Inggris lewat kursus praktis dan latihan terarah sesuai tujuanmu.",
      "contact.linksTitle": "Jelajahi",
      "contact.learnTitle": "Belajar",
      "contact.contactTitle": "Hubungi kami",
      "contact.contactNote": "Punya pertanyaan tentang kursus? Kirim email kepada kami.",
      "contact.socialTitle": "Ikuti kami",
      "contact.joinTitle": "Gabung Bingo",
      "contact.joinDescription": "Mulai tingkatkan kemampuan bahasa Inggrismu bersama kami.",
      "contact.joinAction": "Mulai sekarang"
    }
  };

  const flagSVGs = {
    en: `<svg viewBox="0 0 640 480" class="flag-svg" width="20" height="15"><path fill="#012169" d="M0 0h640v480H0z"/><path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-179L0 64V0h75z"/><path fill="#C8102E" d="m424 288 216 159v33h-44L368 316v-28h56zm-176-96L32 33V0h44l228 168v24h-56zm176-96 216-160v33h-44L368 124V96h56zm-176 96L32 387v33h44l228-168v-24h-56z"/><path fill="#FFF" d="M240 0h160v480H240zM0 160h640v160H0z"/><path fill="#C8102E" d="M272 0h96v480h-96zM0 192h640v96H0z"/></svg>`,
    id: `<svg viewBox="0 0 640 480" class="flag-svg" width="20" height="15"><path fill="#E70011" d="M0 0h640v240H0z"/><path fill="#FFFFFF" d="M0 240h640v240H0z"/></svg>`
  };

  let currentLang = 'en';

  const langContainer = document.querySelector('.lang-dropdown-container');
  const langDropdownBtn = document.getElementById('langDropdownBtn');
  const langOptions = document.querySelectorAll('.lang-option');
  const currentFlag = document.getElementById('currentFlag');
  const currentLangLabel = document.getElementById('currentLangLabel');

  // Toggle Language Dropdown
  langDropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langContainer.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    langContainer.classList.remove('open');
  });

  function updateLanguage(lang) {
    currentLang = lang;
    currentLangLabel.textContent = lang.toUpperCase();
    currentFlag.innerHTML = flagSVGs[lang];

    // Update active state in menu
    langOptions.forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    // Update i18n text
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.getAttribute('data-i18n-alt');
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.alt = translations[lang][key];
      }
    });

    if (scheduleDaysView) {
      const activeScheduleMode = btnCustomSchedule.classList.contains('active') ? 'custom' : 'default';
      renderSchedule(activeScheduleMode, false);
    }

    if (quizResultBar.style.display !== 'none') {
      const feedbackKey = document.querySelector('.quiz-opt-btn.wrong')
        ? 'quiz.incorrectFeedback'
        : 'quiz.correctFeedback';
      quizResultText.textContent = translations[lang][feedbackKey];
    }

    showToast(lang === 'en' ? 'Language switched to English' : 'Bahasa diubah ke Bahasa Indonesia');
  }

  langOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      const selected = opt.getAttribute('data-lang');
      updateLanguage(selected);
      langContainer.classList.remove('open');
    });
  });

  // ==========================================
  // 2. MOBILE MENU DRAWER
  // ==========================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  mobileMenuBtn.addEventListener('click', () => {
    mobileDrawer.classList.toggle('open');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
    });
  });


  // ==========================================
  // 3. NAV LINKS INTERACTIVE FEEDBACK
  // ==========================================
  const navActionLinks = document.querySelectorAll('[data-nav]');
  navActionLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const navItem = link.getAttribute('data-nav');
      mobileDrawer.classList.remove('open');
      if (navItem === 'course') {
        document.getElementById('course').scrollIntoView({ behavior: 'smooth' });
        return;
      }
      if (navItem === 'schedule') {
        document.getElementById('schedule').scrollIntoView({ behavior: 'smooth' });
        return;
      }
      if (navItem === 'quiz') {
        document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
        return;
      }
      if (navItem === 'practice') {
        document.getElementById('practice').scrollIntoView({ behavior: 'smooth' });
        return;
      }
      if (navItem === 'contact') {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        return;
      }
      const messages = {
        course: currentLang === 'en' ? 'Course catalog preview available in full edition!' : 'Katalog kursus tersedia di edisi lengkap!',
        schedule: currentLang === 'en' ? 'Live tutor schedule open daily!' : 'Jadwal tutor live tersedia setiap hari!',
        quiz: currentLang === 'en' ? 'Interactive mini-quizzes ready to play!' : 'Kuis interaktif siap dimainkan!',
        practice: currentLang === 'en' ? 'Practice hub with native audio drills!' : 'Pusat latihan dengan audio native!',
        contact: currentLang === 'en' ? 'Contact team: hello@bingo-english.com' : 'Kontak tim: hello@bingo-english.com'
      };
      showToast(messages[navItem] || 'Welcome to Bingo!');
    });
  });

  const practiceActionMessages = {
    mistakes: {
      en: 'Mistake review will be available soon.',
      id: 'Fitur ulasan kesalahan segera tersedia.'
    },
    words: {
      en: 'Vocabulary review will be available soon.',
      id: 'Fitur tinjauan kosakata segera tersedia.'
    },
    focused: {
      en: 'Listening and Speaking drills will be available soon.',
      id: 'Latihan Listening dan Speaking segera tersedia.'
    },
    roleplay: {
      en: 'AI roleplay practice will be available soon.',
      id: 'Latihan roleplay AI segera tersedia.'
    }
  };

  document.querySelectorAll('[data-practice-action]').forEach(button => {
    button.addEventListener('click', () => {
      const action = button.dataset.practiceAction;
      showToast(practiceActionMessages[action][currentLang]);
    });
  });

  // Data Preset untuk Mode Schedule
const schedulePresets = {
  default: {
    todayTarget: "Target: 15 Menit • 10 Vocab Baru",
    todayTitle: "Academic Thesis Foundations",
    todayItems: [
      { text: "5 min: Academic Word List (AWL) Flashcards", checked: true },
      { text: "5 min: Formal Writing vs Informal Drill", checked: true },
      { text: "5 min: Thesis Abstract Listening Practice", checked: false }
    ],
    tomorrowTarget: "Target: 20 Menit • Fluency Habit",
    tomorrowTitle: "Substantiating Arguments & Citations",
    tomorrowItems: [
      { text: "5 min: Academic Transition Words Game", checked: false },
      { text: "10 min: Paraphrasing & Summarizing Exercise", checked: false },
      { text: "5 min: Quick 3-Question Recap Quiz", checked: false }
    ]
  },
  custom: {
    todayTarget: "Custom Target: 10 Menit • Express Study",
    todayTitle: "My Selected Focus: Speaking & Pronunciation",
    todayItems: [
      { text: "5 min: Daily Academic Phrase Shadowing", checked: true },
      { text: "5 min: Voice Recorder Mock Presentation", checked: false }
    ],
    tomorrowTarget: "Custom Target: 30 Menit • Intensive Focus",
    tomorrowTitle: "My Selected Focus: Academic Vocabulary",
    tomorrowItems: [
      { text: "15 min: Advanced Research Paper Vocab", checked: false },
      { text: "15 min: Self-Paced Speed Quiz & Grammar Review", checked: false }
    ]
  }
};

const btnDefaultSchedule = document.getElementById('btnDefaultSchedule');
  const btnCustomSchedule = document.getElementById('btnCustomSchedule');
  const scheduleDaysView = document.getElementById('scheduleDaysView');

  if (btnDefaultSchedule && btnCustomSchedule) {
    btnDefaultSchedule.addEventListener('click', () => {
      btnDefaultSchedule.classList.add('active');
      btnCustomSchedule.classList.remove('active');
      renderSchedule('default');
    });

    btnCustomSchedule.addEventListener('click', () => {
      btnCustomSchedule.classList.add('active');
      btnDefaultSchedule.classList.remove('active');
      renderSchedule('custom');
    });
  }

  function renderSchedule(mode, announce = true) {
    if (!scheduleDaysView) return;
    const isEn = currentLang === 'en';
    if (mode === 'custom') {
      scheduleDaysView.innerHTML = `
        <div class="day-routine-card today-card">
          <div class="day-routine-header">
            <span class="day-badge today-badge">${isEn ? 'Custom Today' : 'Jadwal Hari Ini'}</span>
            <span class="day-target">${isEn ? 'Your Goal: 20 min • Speaking Focus' : 'Targetmu: 20 mnt • Fokus Speaking'}</span>
          </div>
          <h4 class="day-routine-title">${isEn ? 'Self-Paced Practice: Job Interview Prep' : 'Latihan Mandiri: Persiapan Wawancara Kerja'}</h4>
          <ul class="routine-checklist">
            <li class="checked"><span>✔</span> <span>${isEn ? '10 min: Common interview answers' : '10 mnt: Jawaban umum wawancara'}</span></li>
            <li><span>○</span> <span>${isEn ? '5 min: Voice pitch & clarity test' : '5 mnt: Latihan intonasi suara'}</span></li>
            <li><span>○</span> <span>${isEn ? '5 min: Vocabulary flashcard review' : '5 mnt: Review kartu kosa kata'}</span></li>
          </ul>
        </div>
        <div class="day-routine-card">
          <div class="day-routine-header">
            <span class="day-badge tomorrow-badge">${isEn ? 'Custom Tomorrow' : 'Jadwal Besok'}</span>
            <span class="day-target">${isEn ? 'Your Goal: 15 min • Listening' : 'Targetmu: 15 mnt • Menyimak'}</span>
          </div>
          <h4 class="day-routine-title">${isEn ? 'English Podcast & Accent Training' : 'Podcast Bahasa Inggris & Aksen'}</h4>
          <ul class="routine-checklist">
            <li><span>○</span> <span>${isEn ? '8 min: Listen to tech & culture podcast' : '8 mnt: Dengarkan podcast santai'}</span></li>
            <li><span>○</span> <span>${isEn ? '7 min: Phrase extraction & sentence check' : '7 mnt: Catat dan tirukan frasa baru'}</span></li>
          </ul>
        </div>
      `;
      if (announce) showToast(isEn ? 'Custom study routine preview loaded!' : 'Pratinjau jadwal belajar mandiri dimuat!');
    } else {
      scheduleDaysView.innerHTML = `
        <div class="day-routine-card today-card">
          <div class="day-routine-header">
            <span class="day-badge today-badge">${isEn ? 'Today' : 'Hari Ini'}</span>
            <span class="day-target">${isEn ? 'Target: 15 min • 10 New Words' : 'Target: 15 mnt • 10 Kosa Kata Baru'}</span>
          </div>
          <h4 class="day-routine-title">${isEn ? 'Essential Greetings & Small Talk' : 'Salam Percakapan & Small Talk'}</h4>
          <ul class="routine-checklist">
            <li class="checked"><span>✔</span> <span>${isEn ? '5 min: Audio flashcard drill' : '5 mnt: Latihan kartu kata audio'}</span></li>
            <li class="checked"><span>✔</span> <span>${isEn ? '5 min: Sentence builder game' : '5 mnt: Game menyusun kalimat'}</span></li>
            <li><span>○</span> <span>${isEn ? '5 min: Pronunciation speaking test' : '5 mnt: Tes pelafalan suara'}</span></li>
          </ul>
        </div>
        <div class="day-routine-card">
          <div class="day-routine-header">
            <span class="day-badge tomorrow-badge">${isEn ? 'Tomorrow' : 'Besok'}</span>
            <span class="day-target">${isEn ? 'Target: 15 min • Fluency Habit' : 'Target: 15 mnt • Kebiasaan Lancar'}</span>
          </div>
          <h4 class="day-routine-title">${isEn ? 'Food Orders & Cafe Expressions' : 'Pesan Makanan & Ungkapan di Kafe'}</h4>
          <ul class="routine-checklist">
            <li><span>○</span> <span>${isEn ? '5 min: Real-life scenario listening' : '5 mnt: Menyimak skenario nyata'}</span></li>
            <li><span>○</span> <span>${isEn ? '5 min: Shadowing & intonation drill' : '5 mnt: Latihan intonasi & shadowing'}</span></li>
            <li><span>○</span> <span>${isEn ? '5 min: 3-question quick recap quiz' : '5 mnt: Kuis kilat 3 pertanyaan'}</span></li>
          </ul>
        </div>
      `;
      if (announce) showToast(isEn ? 'Recommended track preview loaded!' : 'Pratinjau rekomendasi web dimuat!');
    }
  }

  // ==========================================
  // QUIZ
  // ==========================================
  const quizOptionBtns = document.querySelectorAll('.quiz-opt-btn');
  const quizResultBar = document.getElementById('quizResultBar');
  const quizResultText = document.getElementById('quizResultText');
  quizOptionBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const isCorrect = this.getAttribute('data-correct') === 'true';
      this.classList.add(isCorrect ? 'correct' : 'wrong');
      quizOptionBtns.forEach(option => {
        option.disabled = true;
        if (option.getAttribute('data-correct') === 'true') {
          option.classList.add('correct');
        }
      });
      quizResultText.textContent = translations[currentLang][
        isCorrect ? 'quiz.correctFeedback' : 'quiz.incorrectFeedback'
      ];
      quizResultBar.style.display = 'block';
    });
  });

  // ==========================================
  // 4. AUTH MODAL (SIGN IN / SIGN UP)
  // ==========================================
  const authModalOverlay = document.getElementById('authModalOverlay');
  const openAuthModalBtn = document.getElementById('openAuthModalBtn');
  const mobileAuthBtn = document.getElementById('mobileAuthBtn');
  const closeAuthModalBtn = document.getElementById('closeAuthModalBtn');
  const tabSignIn = document.getElementById('tabSignIn');
  const tabSignUp = document.getElementById('tabSignUp');
  const signInForm = document.getElementById('signInForm');
  const signUpForm = document.getElementById('signUpForm');
  const btnStartLearning = document.getElementById('btnStartLearning');

  function openAuthModal() {
    authModalOverlay.classList.add('open');
  }

  function closeAuthModal() {
    authModalOverlay.classList.remove('open');
  }

  openAuthModalBtn.addEventListener('click', openAuthModal);
  const contactJoinBtn = document.getElementById('contactJoinBtn');
  if (contactJoinBtn) contactJoinBtn.addEventListener('click', openAuthModal);

  if (mobileAuthBtn) {
    mobileAuthBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
      openAuthModal();
    });
  }
  closeAuthModalBtn.addEventListener('click', closeAuthModal);

  if (btnStartLearning) {
    btnStartLearning.addEventListener('click', () => {
      openAuthModal();
      showToast(currentLang === 'en' ? 'Join Bingo to start your English journey!' : 'Bergabunglah dengan Bingo untuk mulai belajar!');
    });
  }

  authModalOverlay.addEventListener('click', (e) => {
    if (e.target === authModalOverlay) closeAuthModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && authModalOverlay.classList.contains('open')) {
      closeAuthModal();
    }
  });

  tabSignIn.addEventListener('click', () => {
    tabSignIn.classList.add('active');
    tabSignUp.classList.remove('active');
    signInForm.style.display = 'block';
    signUpForm.style.display = 'none';
  });

  tabSignUp.addEventListener('click', () => {
    tabSignUp.classList.add('active');
    tabSignIn.classList.remove('active');
    signInForm.style.display = 'none';
    signUpForm.style.display = 'block';
  });

  signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    closeAuthModal();
    showToast('Welcome back! Signed in successfully.');
  });

  signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    closeAuthModal();
    showToast('Account created! Welcome to Bingo.');
  });



  // ==========================================
  // 5. TOAST NOTIFICATION UTILITY
  // ==========================================
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');
  let toastTimer;

  function showToast(message) {
    if (toastTimer) clearTimeout(toastTimer);
    toastMessage.textContent = message;
    toastNotification.classList.add('show');
    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 3200);
  }

});
