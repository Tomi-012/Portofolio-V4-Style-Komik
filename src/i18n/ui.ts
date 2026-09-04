export const locales = ["en", "id"] as const;
export type Locale = (typeof locales)[number];

const en = {
  meta: {
    title: "THE DEV SAGA - ILHAM BUSTOMI, Web Developer",
    description:
      "Portfolio of Ilham Bustomi, web developer. Projects, skills, and story told as a black-and-white comic book. Currently open to work.",
  },
  nav: {
    origin: "Origin",
    saga: "The Saga",
    powers: "Powers",
    arc: "Story Arc",
    letters: "Letters",
    signal: "Signal",
    donate: "Donate",
    langSwitch: "Switch language",
  },
  donate: {
    stamp: "SAY THANKS!",
    title: "SUPPORT THE DEV!",
    text: "If any of my projects helped you, a small donation is a big thank-you — and it keeps the saga going.",
    scan: "SCAN — QRIS • DANA",
    close: "Close",
  },
  hero: {
    stamps: {
      issue: "ISSUE #01",
      price: "PRICE: 1 COFFEE",
      approved: "CODE AUTHORITY APPROVED",
    },
    role: "WEB DEVELOPER — TANGERANG REMOTE",
    lede: "I build fast, accessible web apps — and I hand-inked this whole portfolio to prove that the front-end is a craft, not a template.",
    ctaSaga: "Read the saga",
    ctaHire: "Hire me!",
    whoami: "ilham.bustomi — web developer",
    meanwhile: "Meanwhile…",
    inking: "Currently inking: a design system with motion built in.",
    base: "Base of operations:",
    baseValue: "Tangerang, Indonesia — remote-friendly across time zones.",
    terminalHint: "type a command…",
    terminalAria: "Try typing your own command — the demo resumes when you stop",
    marquee: [
      "ISSUE #01 ON STANDS NOW",
      "OPEN FOR FREELANCE & FULL-TIME",
      "INKED IN INDONESIA",
      "DEPLOYED ON THE EDGE",
      "ZERO CLIENT FRAMEWORKS",
    ],
  },
  about: {
    chapter: "CHAPTER 01",
    title: "Origin Story",
    note: "Every hero starts somewhere. Mine started with a view-source key.",
    bubble: "EVERY HERO HAS AN ORIGIN STORY!",
    figcaption: "THE AUTHOR — SELF-INKED. NO PHOTO, JUST INK.",
    sheet: {
      name: "Name",
      class: "Class",
      alignment: "Alignment",
      firstAppearance: "First Appearance",
      nameValue: "ILHAM BUSTOMI",
      classValue: "WEB DEVELOPER",
      alignmentValue: "CHAOTIC GOOD, CLEAN COMMITS",
      firstAppearanceValue: "2019 — A SCHOOL LAB",
    },
    p1: "It began with <em>view source</em>. One curious middle-schooler, one right-click, and suddenly a web page was not magic anymore — it was <strong>made of decisions</strong>, and decisions could be learned.",
    p2: "Six years later I build production web apps end to end: semantic, accessible front-ends; typed APIs; design systems that survive their third team. I care about the milliseconds and the margins — because users feel both.",
    weakness: "KNOWN WEAKNESS: NONE. (CSS CENTERING JOKES BOUNCE OFF.)",
  },
  saga: {
    chapter: "CHAPTER 02",
    title: "The Saga",
    note: "Six issues. Each one a shipped battle. Hover to spotlight a panel.",
    readIssue: "Read issue",
    demoNote:
      "DEMO ISSUES: PROJECT NAMES, METRICS & LINKS ARE SYNTHETIC UNTIL THE REAL SAGA LANDS HERE.",
    status: {
      SHIPPED: "SHIPPED",
      "IN COMBAT": "IN COMBAT",
      "IN THE LAB": "IN THE LAB",
    } as Record<string, string>,
  },
  powers: {
    chapter: "CHAPTER 03",
    title: "Powers",
    note: "Measured in battle. Estimated conservatively.",
    gridTitle: "POWER GRID",
    beltTitle: "UTILITY BELT",
    movesTitle: "SPECIAL MOVES",
    moves: [
      "Design systems that survive contact with a third team",
      "Web performance budgets — and the discipline to keep them",
      "Accessibility as a default, not an audit finding",
      "Motion & micro-interaction with restraint",
    ],
  },
  arc: {
    chapter: "CHAPTER 04",
    title: "Story Arc",
    note: "So far, in continuity. Scroll the strip.",
    chapters: [
      {
        tag: "CH. 01",
        years: "2019",
        title: "ORIGIN",
        blurb: "One view-source click. Homework HTML becomes a lifelong habit.",
      },
      {
        tag: "CH. 02",
        years: "2020–21",
        title: "TRAINING ARC",
        blurb: "CS degree, hackathon podiums, first freelance landing pages.",
      },
      {
        tag: "CH. 03",
        years: "2022–23",
        title: "FIRST CONTRACT",
        blurb: "Frontend dev at a digital studio. 20+ client sites shipped.",
      },
      {
        tag: "CH. 04",
        years: "2024–25",
        title: "THE ASCENT",
        blurb: "Design systems, mentoring, leading the front-end guild.",
      },
    ],
    next: {
      tag: "NEXT ISSUE",
      title: "YOUR PROJECT?",
      text: "The next arc is unwritten. Bring a quest.",
      cta: "Send a signal",
    },
  },
  letters: {
    chapter: "CHAPTER 05",
    title: "Letters Page",
    note: "What the readers write in. Demo letters — swap in the real ones.",
    items: [
      {
        quote:
          "Ilham turned our vague napkin sketch into product screens people actually compliment. He ships, then he iterates. Rare combo.",
        name: "R. WIJAYA",
        role: "Product Manager, fictional studio",
        stamp: "PUBLISHED!",
        tilt: "-1.2deg",
      },
      {
        quote:
          "His design tokens survived three redesigns and a rebrand. I have never seen a component library age this gracefully.",
        name: "S. TANAKA",
        role: "Design Lead, imaginary agency",
        tilt: "0.8deg",
      },
      {
        quote:
          "Handed him a perf budget and an impossible deadline. The site shipped fast in both senses.",
        name: "A. PRATAMA",
        role: "CTO, hypothetical startup",
        tilt: "1.4deg",
      },
    ],
  },
  signal: {
    chapter: "FINAL CHAPTER",
    title: "Send a Signal",
    note: "Response time: faster than a speeding bullet. Usually.",
    panelTitle: "GOT A QUEST FOR THE HERO?",
    panelText:
      "Freelance, full-time, or a wild experiment — if it lives in the browser, I want to hear about it.",
    directFreq: "Direct frequency",
    copy: "COPY",
    copied: "COPIED!",
    copyOk: "Email copied to clipboard.",
    copyFail: "Clipboard blocked — the email is written above, select it manually.",
    haunt: "Haunt these places",
    form: {
      codename: "Your codename",
      codenamePh: "e.g. The Recruiter",
      replyFreq: "Reply frequency",
      briefing: "The mission briefing",
      briefingPh:
        "Tell me about the project, the timeline, and what victory looks like.",
      transmit: "Transmit!",
      note: "Opens your mail app.\nNothing is stored, tracked, or sent to a server.",
      subjectTpl: "Signal from {name} — portfolio contact",
      errName: "Every hero needs a name. What is yours?",
      errEmail: "That frequency looks broken — check the email address.",
      errMsg: "A briefing needs a few more words (at least 10 characters).",
    },
  },
  works: {
    backToSaga: "Back to the saga",
    role: "Role",
    weapons: "Weapons of choice",
    story: ["THE PROBLEM", "THE MOVE", "THE OUTCOME"],
    prev: "Previous issue",
    next: "Next issue",
    hire: "Hire the hero behind this issue",
  },
  footer: {
    end: "THE END",
    forNow: "*FOR NOW. THE SAGA CONTINUES EVERY DEPLOY.",
    back: "Return to page 1",
    written: "Written & inked by Ilham Bustomi",
    printed: "Printed with Astro + Tailwind — no client frameworks were harmed",
    rights: "The Dev Saga. All panels reserved.",
    demoNotice:
      "Demo notice: project names, letters, and figures on this site are synthetic placeholder content, awaiting the real saga.",
  },
};

export type Dict = typeof en;

const id: Dict = {
  meta: {
    title: "THE DEV SAGA — ILHAM BUSTOMI, Pengembang Web",
    description:
      "Portofolio Ilham Bustomi, pengembang web. Proyek, keahlian, dan cerita dalam bentuk komik hitam-putih. Terbuka untuk peluang.",
  },
  nav: {
    origin: "Asal-Usul",
    saga: "Saga",
    powers: "Kekuatan",
    arc: "Alur Cerita",
    letters: "Surat",
    signal: "Kontak",
    donate: "Donasi",
    langSwitch: "Ganti bahasa",
  },
  donate: {
    stamp: "UCAPKAN TERIMA KASIH!",
    title: "DUKUNG DEVELOPER-NYA!",
    text: "Kalau proyek-proyek saya membantumu, donasi kecil adalah terima kasih besar — dan menjaga saga ini tetap jalan.",
    scan: "SCAN — QRIS • DANA",
    close: "Tutup",
  },
  hero: {
    stamps: {
      issue: "EDISI #01",
      price: "HARGA: 1 KOPI",
      approved: "DISETUJUI OTORITAS KODE",
    },
    role: "PENGEMBANG WEB — TANGERANG / REMOTE",
    lede: "Saya membangun aplikasi web yang cepat dan aksesibel — dan seluruh portofolio ini saya gambar tangan untuk membuktikan bahwa front-end adalah sebuah craft, bukan template.",
    ctaSaga: "Baca saganya",
    ctaHire: "Rekrut saya!",
    whoami: "ilham.bustomi — pengembang web",
    meanwhile: "Sementara itu…",
    inking: "Sedang menggambarkan: design system dengan motion bawaan.",
    base: "Basis operasi:",
    baseValue: "Tangerang, Indonesia — ramah remote lintas zona waktu.",
    terminalHint: "ketik sebuah perintah…",
    terminalAria: "Coba ketik perintahmu sendiri — demo berlanjut saat kamu berhenti",
    marquee: [
      "EDISI #01 TELAH TERBIT",
      "TERBUKA UNTUK FREELANCE & FULL-TIME",
      "DIGAMBAR DI INDONESIA",
      "DEPLOY DI EDGE",
      "NOL CLIENT FRAMEWORK",
    ],
  },
  about: {
    chapter: "BAB 01",
    title: "Cerita Asal",
    note: "Setiap pahlawan punya awal. Milikku dimulai dari tombol view-source.",
    bubble: "SETIAP PAHLAWAN PUNYA CERITA ASAL!",
    figcaption: "SANG PENULIS — GAMBAR TANGAN. TANPA FOTO, CUKUP TINTA.",
    sheet: {
      name: "Nama",
      class: "Kelas",
      alignment: "Alignment",
      firstAppearance: "Kemunculan Pertama",
      nameValue: "ILHAM BUSTOMI",
      classValue: "PENGEMBANG WEB",
      alignmentValue: "CHAOTIC GOOD, COMMIT RAPI",
      firstAppearanceValue: "2019 — LAB SEKOLAH",
    },
    p1: "Semuanya dimulai dari <em>view source</em>. Satu anak SMP yang penasaran, satu klik kanan, dan tiba-tiba halaman web bukan lagi sihir — ia <strong>tersusun dari keputusan</strong>, dan keputusan bisa dipelajari.",
    p2: "Enam tahun kemudian saya membangun aplikasi web produksi dari ujung ke ujung: front-end semantik dan aksesibel; API bertipe; design system yang bertahan melewati tim ketiganya. Saya peduli pada milidetik dan margin — karena keduanya dirasakan pengguna.",
    weakness: "KELEMAHAN: TIDAK ADA. (LELUKAN CSS CENTERING MEMANTUL.)",
  },
  saga: {
    chapter: "BAB 02",
    title: "Saga",
    note: "Enam edisi. Masing-masing satu pertempuran selesai. Arahkan kursor untuk menyorot panel.",
    readIssue: "Baca edisi",
    demoNote:
      "EDISI DEMO: NAMA PROYEK, METRIK & TAUTAN MASIH SINTETIS SAMPAI SAGA NYATA HADIR DI SINI.",
    status: {
      SHIPPED: "RILIS",
      "IN COMBAT": "DI MEDAN LAGA",
      "IN THE LAB": "DI LABORATORIUM",
    } as Record<string, string>,
  },
  powers: {
    chapter: "BAB 03",
    title: "Kekuatan",
    note: "Diukur di medan laga. Ditaksir dengan hemat.",
    gridTitle: "GRID KEKUATAN",
    beltTitle: "SABUK UTILITAS",
    movesTitle: "GERAKAN ISTIMEWA",
    moves: [
      "Design system yang bertahan melewati tim ketiganya",
      "Anggaran performa web — dan disiplin untuk menjaganya",
      "Aksesibilitas sebagai bawaan, bukan temuan audit",
      "Motion & micro-interaction yang terukur",
    ],
  },
  arc: {
    chapter: "BAB 04",
    title: "Alur Cerita",
    note: "Sejauh ini, dalam kanon. Gulir strip-nya.",
    chapters: [
      {
        tag: "BAB 01",
        years: "2019",
        title: "ASAL-USUL",
        blurb: "Satu klik view-source. PR HTML menjadi kebiasaan seumur hidup.",
      },
      {
        tag: "BAB 02",
        years: "2020–21",
        title: "ARC PELATIHAN",
        blurb: "Gelar CS, podium hackathon, landing page freelance pertama.",
      },
      {
        tag: "BAB 03",
        years: "2022–23",
        title: "KONTRAK PERTAMA",
        blurb: "Frontend dev di studio digital. 20+ situs klien terkirim.",
      },
      {
        tag: "BAB 04",
        years: "2024–25",
        title: "NAIK KELAS",
        blurb: "Design system, mentoring, memimpin guild front-end.",
      },
    ],
    next: {
      tag: "EDISI BERIKUTNYA",
      title: "PROYEKMU?",
      text: "Arc berikutnya belum tertulis. Bawa misimu.",
      cta: "Kirim sinyal",
    },
  },
  letters: {
    chapter: "BAB 05",
    title: "Surat Pembaca",
    note: "Kiriman para pembaca. Surat demo — ganti dengan yang asli.",
    items: [
      {
        quote:
          "Ilham mengubah sketsa napkin kami yang abstrak menjadi layar produk yang benar-benar dipuji orang. Dia mengirim, lalu iterasi. Kombinasi langka.",
        name: "R. WIJAYA",
        role: "Product Manager, studio fiksi",
        stamp: "TERBIT!",
        tilt: "-1.2deg",
      },
      {
        quote:
          "Design token-nya bertahan melewati tiga redesign dan satu rebrand. Belum pernah melihat component library menua seanggun ini.",
        name: "S. TANAKA",
        role: "Design Lead, agensi imajiner",
        tilt: "0.8deg",
      },
      {
        quote:
          "Memberinya anggaran performa dan tenggat mustahil. Situsnya rilis cepat dalam dua arti kata.",
        name: "A. PRATAMA",
        role: "CTO, startup hipotetis",
        tilt: "1.4deg",
      },
    ],
  },
  signal: {
    chapter: "BAB TERAKHIR",
    title: "Kirim Sinyal",
    note: "Waktu respons: lebih cepat dari peluru. Biasanya.",
    panelTitle: "PUNYA MISI UNTUK PAHLAWAN?",
    panelText:
      "Freelance, full-time, atau eksperimen liar — kalau hidupnya di browser, saya mau mendengarnya.",
    directFreq: "Frekuensi langsung",
    copy: "SALIN",
    copied: "TERSALIN!",
    copyOk: "Email tersalin ke papan klip.",
    copyFail: "Papan klip terblokir — email tertulis di atas, pilih manual.",
    haunt: "Mampir ke sarang ini",
    form: {
      codename: "Nama kodemu",
      codenamePh: "mis. Sang Rekruter",
      replyFreq: "Frekuensi balasan",
      briefing: "Briefing misi",
      briefingPh: "Ceritakan proyeknya, linimasonya, dan seperti apa kemenangannya.",
      transmit: "Kirim!",
      note: "Membuka aplikasi mail-mu.\nTidak ada yang disimpan, dilacak, atau dikirim ke server.",
      subjectTpl: "Sinyal dari {name} — kontak portofolio",
      errName: "Setiap pahlawan butuh nama. Siapa namamu?",
      errEmail: "Frekuensinya sepertinya rusak — periksa alamat emailnya.",
      errMsg: "Briefing butuh beberapa kata lagi (minimal 10 karakter).",
    },
  },
  works: {
    backToSaga: "Kembali ke saga",
    role: "Peran",
    weapons: "Senjata pilihan",
    story: ["MASALAHNYA", "LANGKAHNYA", "HASILNYA"],
    prev: "Edisi sebelumnya",
    next: "Edisi berikutnya",
    hire: "Rekrut pahlawan di balik edisi ini",
  },
  footer: {
    end: "TAMAT",
    forNow: "*UNTUK SEKARANG. SAGA BERLANJUT DI TIAP DEPLOY.",
    back: "Kembali ke halaman 1",
    written: "Ditulis & digambar oleh Ilham Bustomi",
    printed: "Dicetak dengan Astro + Tailwind — tanpa client framework yang terluka",
    rights: "The Dev Saga. Seluruh panel dilindungi.",
    demoNotice:
      "Catatan demo: nama proyek, surat, dan angka di situs ini adalah konten sintetis, menanti saga yang sebenarnya.",
  },
};

export const ui: Record<Locale, Dict> = { en, id };

export function getDict(locale: Locale): Dict {
  return ui[locale] ?? ui.en;
}
