/* ==========================================================================
   DATA PORTOFOLIO
   ==========================================================================
   Ini satu-satunya file yang perlu kamu ubah untuk menambah, mengedit,
   atau menghapus proyek. Halaman Beranda dan halaman detail akan
   otomatis mengikuti isi array PORTFOLIO_DATA di bawah ini.

   CARA MENAMBAH PROYEK BARU:
   1. Salin satu blok objek { ... } di bawah (termasuk kurung kurawalnya).
   2. Tempel sebagai anggota baru di dalam array, pisahkan dengan koma.
   3. Ubah setiap nilainya sesuai proyekmu.
   4. Pastikan "slug" unik (tidak boleh sama dengan proyek lain, tanpa spasi).

   Keterangan tiap kolom:
   - slug        : jadi bagian URL, mis. "analisis-saham-idx" -> #/portfolio/analisis-saham-idx
   - category    : label singkat, tampil sebagai tag, mis. "Analisis Data"
   - title       : judul proyek
   - year        : tahun pengerjaan (teks bebas, boleh "2026" atau "2025–2026")
   - summary     : satu kalimat ringkas, tampil di daftar Beranda
   - tools       : array nama alat/metode yang dipakai
   - description : array paragraf (tiap elemen = satu paragraf) untuk halaman detail
   - embed       : opsional. Isi jika proyek punya sesuatu yang bisa ditampilkan
                   langsung (mis. Google Sheet). Kosongkan/hapus jika tidak ada.
                     - type    : "google-sheet" (baru dukung tipe ini untuk sekarang)
                     - url     : URL embed hasil "Publish to the web" (lihat README.md)
                     - openUrl : link biasa untuk tombol "Buka di tab baru"
                     - label   : judul kecil yang tampil di atas kotak embed
   ========================================================================== */

const PORTFOLIO_DATA = [
  {
    slug: "analisis-saham-idx",
    category: "Analisis Data",
    title: "Dashboard Analisis Fundamental Saham IDX",
    year: "2026",
    summary:
      "Menilai valuasi historis emiten Bursa Efek Indonesia lewat dashboard interaktif berbasis Google Sheets.",
    tools: ["Google Sheets", "Google Finance", "Analisis Fundamental & Valuasi"],
    description: [
      "Dashboard ini dibuat untuk membaca kesehatan finansial sebuah emiten di Bursa Efek Indonesia (IDX) hanya dengan memilih kode sahamnya dari satu dropdown. Begitu saham dipilih, dashboard menampilkan profil singkat emiten — sektor, sub-sektor, dan tahun IPO — beserta empat angka kunci saat ini: harga saham, kapitalisasi pasar, dividen, dan rasio valuasi (PER, PBV, ROE).",
      "Bagian intinya ada di tabel historis: harga saham, market cap, dividen, EPS, BVPS, ROA, ROE, EV/EBITDA, hingga rasio utang (debt to equity, debt to EBITDA) dari tahun 2021 sampai 2026 disusun berdampingan, lengkap dengan grafik tren untuk melihat arah pertumbuhannya dari waktu ke waktu.",
      "Semua angka ditarik otomatis lewat fungsi Google Finance dan rumus di Google Sheets, jadi datanya bisa diperbarui tanpa mengetik ulang satu per satu."
    ],
    embed: {
      type: "google-sheet",
      // GANTI baris "url" di bawah dengan link hasil "Publish to the web"
      // untuk sheet "Dashboard Saham" — caranya ada di README.md.
      url: "https://docs.google.com/spreadsheets/d/1x42raCDqIOjj8zR2J934_WrjyNlj2_fC94nPn6Hcvuw/edit?usp=sharing",
      openUrl:
        "https://docs.google.com/spreadsheets/d/1x42raCDqIOjj8zR2J934_WrjyNlj2_fC94nPn6Hcvuw/edit?gid=2144001220#gid=2144001220",
      label: "Dashboard Saham — Google Sheets"
    }
  }

  // Contoh menambah proyek berikutnya — hapus tanda komentar dan isi:
  //
  // ,{
  //   slug: "nama-proyek-berikutnya",
  //   category: "Simulasi",
  //   title: "Judul Proyek",
  //   year: "2026",
  //   summary: "Satu kalimat ringkas tentang proyek ini.",
  //   tools: ["Alat 1", "Alat 2"],
  //   description: [
  //     "Paragraf pertama.",
  //     "Paragraf kedua."
  //   ],
  //   embed: null
  // }
];
