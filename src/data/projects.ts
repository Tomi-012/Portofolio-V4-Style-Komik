/**
 * Demo content: every project below is SYNTHETIC placeholder material.
 * Replace titles, metrics, and links with real work before going live.
 * Never present these as real clients, products, or numbers.
 */

export type Locale = "en" | "id";

export interface ProjectText {
  tagline: string;
  role: string;
  challenge: string;
  move: string;
  outcome: string;
  demoLabel: string;
}

export interface Project {
  slug: string;
  issue: number;
  title: string;
  year: string;
  stack: string[];
  status: "SHIPPED" | "IN COMBAT" | "IN THE LAB";
  sfx: string;
  cover: "bolt" | "robot" | "ghost" | "chart" | "shield" | "planet";
  span?: "splash";
  links: { demo: string; repo: string };
  i18n: Record<Locale, ProjectText>;
}

export const projects: Project[] = [
  {
    slug: "kraken-commerce",
    issue: 1,
    title: "Kraken Commerce",
    year: "2025",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    status: "SHIPPED",
    sfx: "KA-CHING!",
    cover: "bolt",
    span: "splash",
    links: { demo: "#", repo: "#" },
    i18n: {
      en: {
        tagline: "A headless storefront that ships pages in milliseconds, not meetings.",
        role: "Full-Stack Developer",
        challenge:
          "The fictional client's storefront took four seconds to render a product page and buried the buy button under three carousels. Mobile conversion was sinking like a treasure fleet.",
        move: "Rebuilt the storefront on a headless stack: statically rendered catalog pages, edge-cached inventory reads, and a one-screen checkout. Every UI decision had to survive a throttled 3G phone test.",
        outcome:
          "Product pages render in under 400 ms on mid-range phones in the demo benchmark, and the checkout dropped from five screens to one. Numbers shown here are demo numbers, not client analytics.",
        demoLabel: "Demo project — all names & figures are synthetic",
      },
      id: {
        tagline: "Storefront headless yang mengirim halaman dalam milidetik, bukan rapat.",
        role: "Pengembang Full-Stack",
        challenge:
          "Storefront klien fiksi butuh empat detik untuk merender halaman produk dan mengubur tombol beli di bawah tiga carousel. Konversi mobile tenggelam seperti armada harta karun.",
        move: "Membangun ulang storefront di atas stack headless: halaman katalog terender statis, pembacaan stok ber-cache di edge, dan checkout satu layar. Setiap keputusan UI harus lolos uji ponsel 3G yang dibatasi.",
        outcome:
          "Halaman produk terender di bawah 400 ms pada ponsel kelas menengah dalam benchmark demo, dan checkout turun dari lima layar menjadi satu. Angka di sini adalah angka demo, bukan analitik klien.",
        demoLabel: "Proyek demo — semua nama & angka bersifat sintetis",
      },
    },
  },
  {
    slug: "pulseboard",
    issue: 2,
    title: "Pulseboard",
    year: "2025",
    stack: ["Vue 3", "WebSockets", "D3.js", "Node.js"],
    status: "SHIPPED",
    sfx: "WHAM!",
    cover: "chart",
    links: { demo: "#", repo: "#" },
    i18n: {
      en: {
        tagline: "Realtime analytics that reads like a story, not a spreadsheet.",
        role: "Frontend Developer",
        challenge:
          "Ops teams refreshed a clunky dashboard all day and still missed incidents. The wall of charts had no narrative: everything screamed at equal volume.",
        move: "Designed a three-tier hierarchy: a headline status strip, live sparkline panels fed over WebSockets, and drill-down views on demand. Charts animate only when data actually changes.",
        outcome:
          "A single glance answers 'is anything on fire?'. Demo data shows median time-to-notice dropping by half in internal walkthroughs — synthetic, of course.",
        demoLabel: "Demo project — all names & figures are synthetic",
      },
      id: {
        tagline: "Analitik realtime yang terbaca seperti cerita, bukan spreadsheet.",
        role: "Pengembang Frontend",
        challenge:
          "Tim ops menyegarkan dasbor kaku sepanjang hari dan tetap kehilangan insiden. Dinding grafis itu tak punya narasi: semuanya berteriak sama kerasnya.",
        move: "Merancang hierarki tiga tingkat: strip status utama, panel sparkline langsung lewat WebSocket, dan tampilan drill-down sesuai permintaan. Grafik hanya beranimasi saat data benar-benar berubah.",
        outcome:
          "Sekali pandang menjawab 'ada yang terbakar?'. Data demo menunjukkan waktu-notifikasi median turun setengah dalam uji internal — sintetis, tentu saja.",
        demoLabel: "Proyek demo — semua nama & angka bersifat sintetis",
      },
    },
  },
  {
    slug: "hantu-cms",
    issue: 3,
    title: "Hantu CMS",
    year: "2024",
    stack: ["Astro", "TypeScript", "Markdown", "Vite"],
    status: "IN THE LAB",
    sfx: "BOO!",
    cover: "ghost",
    links: { demo: "#", repo: "#" },
    i18n: {
      en: {
        tagline: "A headless CMS so light, it haunts your build pipeline pleasantly.",
        role: "Creator & Maintainer",
        challenge:
          "Small sites were drowning in CMS setups heavier than the sites themselves. Publishing a recipe should not require a Kubernetes cluster.",
        move: "Built a git-based content layer: collections, draft previews, and type-safe queries in one small package. Zero runtime, zero database — content becomes code at build time.",
        outcome:
          "A blog goes from empty folder to published site in one config file. The demo repo includes three starter themes and a docs site written in its own markdown format.",
        demoLabel: "Demo project — all names & figures are synthetic",
      },
      id: {
        tagline: "CMS headless yang sangat ringan, ia menghantari pipeline-mu dengan menyenangkan.",
        role: "Pencipta & Pemelihara",
        challenge:
          "Situs kecil tenggelam dalam setup CMS yang lebih berat dari situsnya sendiri. Menerbitkan satu resep tidak seharusnya butuh klaster Kubernetes.",
        move: "Membangun lapisan konten berbasis git: koleksi, pratinjau draf, dan query type-safe dalam satu paket kecil. Nol runtime, nol database — konten menjadi kode saat build.",
        outcome:
          "Blog berubah dari folder kosong menjadi situs terbit dalam satu file konfigurasi. Repo demo berisi tiga tema starter dan situs docs yang ditulis dengan format markdown-nya sendiri.",
        demoLabel: "Proyek demo — semua nama & angka bersifat sintetis",
      },
    },
  },
  {
    slug: "sigma-quest",
    issue: 4,
    title: "Sigma Quest",
    year: "2024",
    stack: ["React", "PWA", "IndexedDB", "Framer Motion"],
    status: "SHIPPED",
    sfx: "LEVEL UP!",
    cover: "shield",
    links: { demo: "#", repo: "#" },
    i18n: {
      en: {
        tagline: "A learning PWA that turns study streaks into boss battles.",
        role: "Frontend Developer",
        challenge:
          "Learners abandoned the original flashcard app after three days. Progress invisible, rewards imaginary, motivation evaporated.",
        move: "Added an offline-first quest system: streaks as HP bars, lessons as encounters, and a mastery meter that only grows with real recall. All state survives offline via IndexedDB.",
        outcome:
          "In the synthetic cohort demo, 7-day retention doubled. The pattern that worked: make progress physical, visible, and impossible to lose.",
        demoLabel: "Demo project — all names & figures are synthetic",
      },
      id: {
        tagline: "PWA belajar yang mengubah streak belajar menjadi pertarungan boss.",
        role: "Pengembang Frontend",
        challenge:
          "Pembelajar meninggalkan aplikasi flashcard aslinya setelah tiga hari. Progres tak terlihat, hadiah imajiner, motivasi menguap.",
        move: "Menambahkan sistem quest offline-first: streak sebagai bar HP, pelajaran sebagai pertarungan, dan meteran penguasaan yang hanya tumbuh lewat recall nyata. Seluruh state bertahan offline via IndexedDB.",
        outcome:
          "Pada demo kohort sintetis, retensi 7 hari menjadi dua kali lipat. Pola yang berhasil: buat progres nyata, terlihat, dan mustahil hilang.",
        demoLabel: "Proyek demo — semua nama & angka bersifat sintetis",
      },
    },
  },
  {
    slug: "warung-pay",
    issue: 5,
    title: "Warung Pay",
    year: "2023",
    stack: ["React", "Tailwind", "QRIS mock", "Zustand"],
    status: "IN COMBAT",
    sfx: "TAP!",
    cover: "robot",
    links: { demo: "#", repo: "#" },
    i18n: {
      en: {
        tagline: "Payments UX designed for a stall, a scooter, and thirty seconds.",
        role: "UI Engineer",
        challenge:
          "Street-food sellers need payments that work one-handed, in daylight glare, on a five-year-old phone, between two customers waiting.",
        move: "Prototyped a two-tap flow with oversized touch targets, high-contrast ink UI, a QR-first path, and an offline receipt queue. Tested the flow on actual warung counters in the demo narrative.",
        outcome:
          "Median demo checkout time: 26 seconds, one hand, outdoors. The next chapter: printing thermal receipts from the browser.",
        demoLabel: "Demo project — all names & figures are synthetic",
      },
      id: {
        tagline: "UX pembayaran yang dirancang untuk lapak, motor, dan tiga puluh detik.",
        role: "Insinyur UI",
        challenge:
          "Penjual kuliner jalanan butuh pembayaran yang bekerja satu tangan, di bawah silau siang, di ponsel berusia lima tahun, di sela dua pembeli menunggu.",
        move: "Memprototipe alur dua ketukan dengan tombol sentuh besar, UI tinta kontras tinggi, jalur QR-first, dan antrean struk offline. Alurnya diuji di meja warung sungguhan dalam narasi demo.",
        outcome:
          "Waktu checkout demo median: 26 detik, satu tangan, di luar ruangan. Bab berikutnya: mencetak struk thermal dari browser.",
        demoLabel: "Proyek demo — semua nama & angka bersifat sintetis",
      },
    },
  },
  {
    slug: "inkpress",
    issue: 6,
    title: "Inkpress",
    year: "2026",
    stack: ["Astro", "Tailwind 4", "Zero-JS by default", "Vercel"],
    status: "SHIPPED",
    sfx: "KA-BOOM!",
    cover: "planet",
    links: { demo: "#", repo: "#" },
    i18n: {
      en: {
        tagline: "The site you are reading right now. Yes, this one.",
        role: "Writer, Inker & Developer",
        challenge:
          "Every portfolio looked like the same polished template. Hiring managers skim a hundred of those a week; nothing sticks.",
        move: "Set the whole identity in black-and-white comic craft: hand-drawn SVG covers, halftone textures, panel grids, and one orchestrated ink-in motion system — with semantic HTML under the ink.",
        outcome:
          "You are holding the proof. If the panels made you smile and read this far, the mechanism works — and the code ships under 40KB of CSS, zero client frameworks.",
        demoLabel: "This site is real. The resume numbers around it are still yours to replace.",
      },
      id: {
        tagline: "Situs yang sedang kamu baca sekarang. Ya, yang ini.",
        role: "Penulis, Pemberi Tinta & Pengembang",
        challenge:
          "Semua portofolio tampak seperti template berpolish yang sama. Hiring manager membaca ratusan tiap minggu; tidak ada yang menempel.",
        move: "Meletakkan seluruh identitas pada craft komik hitam-putih: cover SVG gambar tangan, tekstur halftone, grid panel, dan satu sistem motion ink-in terorkestrasi — dengan HTML semantik di balik tintanya.",
        outcome:
          "Kamu sedang memegang buktinya. Kalau panel-panelnya membuatmu tersenyum dan membaca sampai sini, mekanismenya bekerja — dan kodenya terkirim dengan CSS di bawah 40KB, tanpa client framework.",
        demoLabel: "Situs ini nyata. Angka di sekitarnya masih menunggu kamu ganti.",
      },
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
