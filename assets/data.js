/* ==========================================================================
   DATA PORTOFOLIO — daftar proyek untuk halaman Beranda
   ==========================================================================
   File ini hanya berisi data RINGKAS tiap proyek: judul, kategori, ringkasan,
   alat, dan kotak embed. Penjelasan PANJANG ditulis di sub halaman sendiri:
   projects/<slug>.html  (lihat PANDUAN.md).

   --------------------------------------------------------------------------
   CARA MENULIS TEKS MULTIBAHASA
   --------------------------------------------------------------------------
   Bidang bertanda [T] bisa diterjemahkan. Tulis per bahasa:

       title: { id: "Judul Indonesia", en: "English title", ja: "日本語タイトル" }

   - Bahasa yang belum diisi otomatis memakai bahasa DEFAULT_LANG
     (lihat assets/i18n.js), jadi aman kalau terjemahannya menyusul.
   - Teks yang sama di semua bahasa boleh ditulis sebagai string biasa:
       year: "2026"

   --------------------------------------------------------------------------
   CARA MENAMBAH PROYEK BARU (2 langkah)
   --------------------------------------------------------------------------
   1. Di sini: salin satu blok objek { ... }, tempel di dalam array, pisahkan
      dengan koma, lalu ubah isinya. "slug" harus unik dan tanpa spasi.
   2. Buat sub halamannya: salin projects/template-proyek.html menjadi
      projects/<slug>.html, ubah data-project="<slug>" di tag <body>,
      lalu tulis penjelasannya per bahasa.

   Keterangan kolom:
   - slug        : nama file sub halaman (projects/<slug>.html) sekaligus pengenal proyek
   - category [T]: label singkat, tampil sebagai tag
   - title [T]   : judul proyek
   - year        : tahun pengerjaan (teks bebas, mis. "2026" atau "2025–2026")
   - summary [T] : satu kalimat ringkas, tampil di daftar Beranda
   - tools       : daftar alat/metode. Boleh array biasa ["A", "B"] (sama di semua
                   bahasa) atau per bahasa { id: ["A"], en: ["A"], ja: ["A"] }
   - embed       : opsional. Isi jika proyek punya tampilan yang bisa disematkan
                   (mis. Google Sheet). Tulis null jika tidak ada.
                     - type    : "google-sheet"
                     - url     : URL embed hasil "Publish to the web"
                     - openUrl : link biasa untuk tombol "Buka di tab baru"
                     - label [T]: judul kecil di atas kotak embed
   ========================================================================== */

const PORTFOLIO_DATA = [
  {
    slug: "analisis-saham-idx",

    category: {
      id: "Analisis Data",
      en: "Data Analysis",
      ja: "データ分析"
    },

    title: {
      id: "Dashboard Analisis Fundamental Saham IDX",
      en: "IDX Stock Fundamental Analysis Dashboard",
      ja: "IDX株式ファンダメンタル分析ダッシュボード"
    },

    year: "2026",

    summary: {
      id: "Menilai valuasi historis emiten Bursa Efek Indonesia lewat dashboard interaktif berbasis Google Sheets.",
      en: "Assessing the historical valuation of Indonesia Stock Exchange issuers through an interactive Google Sheets dashboard.",
      ja: "インドネシア証券取引所（IDX）の上場企業の過去のバリュエーションを、Googleスプレッドシートのインタラクティブなダッシュボードで評価します。"
    },

    tools: {
      id: ["Google Sheets", "Google Finance", "Analisis Fundamental & Valuasi"],
      en: ["Google Sheets", "Google Finance", "Fundamental & Valuation Analysis"],
      ja: ["Google スプレッドシート", "Google Finance", "ファンダメンタル分析・バリュエーション"]
    },

    embed: {
      type: "google-sheet",
      // GANTI baris "url" di bawah dengan link hasil "Publish to the web"
      // untuk sheet "Dashboard Saham" — caranya ada di README.md.
      url: "https://docs.google.com/spreadsheets/d/1x42raCDqIOjj8zR2J934_WrjyNlj2_fC94nPn6Hcvuw/edit?usp=sharing",
      openUrl:
        "https://docs.google.com/spreadsheets/d/1x42raCDqIOjj8zR2J934_WrjyNlj2_fC94nPn6Hcvuw/edit?gid=2144001220#gid=2144001220",
      label: {
        id: "Dashboard Saham — Google Sheets",
        en: "Stock Dashboard — Google Sheets",
        ja: "株式ダッシュボード — Google スプレッドシート"
      }
    }
  }

  // Contoh menambah proyek berikutnya — hapus tanda komentar dan isi
  // (jangan lupa buat sub halamannya: projects/nama-proyek-berikutnya.html):
  //
  // ,{
  //   slug: "nama-proyek-berikutnya",
  //   category: { id: "Simulasi", en: "Simulation", ja: "シミュレーション" },
  //   title:    { id: "Judul Proyek", en: "Project Title", ja: "プロジェクト名" },
  //   year: "2026",
  //   summary:  { id: "Ringkasan satu kalimat.", en: "One-sentence summary.", ja: "一文の概要。" },
  //   tools: ["Alat 1", "Alat 2"],
  //   embed: null
  // }
];
