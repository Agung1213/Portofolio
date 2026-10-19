/* ==========================================================================
   I18N.JS — PENGATURAN BAHASA & TEKS WEBSITE
   ==========================================================================
   File ini menyimpan:
   1. Daftar bahasa yang tersedia (tombol bulat di pojok kanan atas).
   2. Semua teks tetap di website (menu, judul, tombol, dll.) dalam tiap bahasa.

   Teks PROYEK (judul, ringkasan, penjelasan) ada di data.js, bukan di sini.

   --------------------------------------------------------------------------
   CARA MENGUBAH TEKS WEBSITE
   --------------------------------------------------------------------------
   Cari kuncinya di UI_TEXT di bawah (mis. heroIntro), lalu ubah kalimat di
   baris id / en / ja sesuai bahasanya.

   Tulis {name} jika ingin memunculkan nama kamu (diatur di OWNER_NAME).

   --------------------------------------------------------------------------
   CARA MENAMBAH BAHASA BARU (mis. Korea)
   --------------------------------------------------------------------------
   1. Tambah satu baris di LANGUAGES:  { code: "ko", label: "KO", name: "한국어" }
   2. Salin satu blok bahasa di UI_TEXT (mis. blok "en"), ganti kuncinya
      menjadi "ko", lalu terjemahkan isinya.
   3. Di data.js, tambahkan  ko: "..."  pada setiap teks yang ingin
      diterjemahkan. Yang belum diterjemahkan otomatis tampil dalam bahasa
      DEFAULT_LANG.
   ========================================================================== */

// Nama yang tampil di header, footer, judul tab, dan kalimat sapaan.
const OWNER_NAME = "Ari";

// Bahasa yang dipakai saat pertama kali website dibuka.
const DEFAULT_LANG = "id";

// Daftar tombol bahasa. Urutan di sini = urutan tombol di website.
//   code  : kode bahasa (dipakai sebagai kunci di UI_TEXT dan data.js)
//   label : tulisan singkat di dalam tombol bulat
//   name  : nama lengkap (muncul saat kursor diarahkan ke tombol)
const LANGUAGES = [
  { code: "id", label: "ID", name: "Bahasa Indonesia" },
  { code: "en", label: "EN", name: "English" },
  { code: "ja", label: "JA", name: "日本語" }
];

// Teks tetap di website.
const UI_TEXT = {
  id: {
    siteTitle: "{name} — Portofolio",
    metaDescription: "Portofolio {name} — mahasiswa Teknik Nuklir. Analisis data, simulasi, dan proyek teknis lainnya.",
    navAria: "Navigasi utama",
    navHome: "Beranda",
    navContact: "Kontak",
    heroTitle: "Halo, saya {name}.",
    heroRole: "Mahasiswa Teknik Nuklir",
    heroIntro: "Di sini saya mengumpulkan proyek-proyek yang pernah saya kerjakan — mulai dari analisis data sampai simulasi teknis. Pilih salah satu proyek di bawah untuk melihat penjelasan lengkapnya.",
    portfolioHeading: "Portofolio",
    emptyList: "Belum ada proyek ditambahkan.",
    backHome: "← Kembali ke Beranda",
    aboutProject: "Tentang proyek ini",
    toolsUsed: "Alat yang digunakan",
    openInNewTab: "Buka di tab baru ↗",
    embedPlaceholderTitle: "Tampilan langsung belum terhubung.",
    embedPlaceholderBody: 'Isi kolom <code>embed.url</code> di <code>assets/data.js</code> dengan link hasil <em>Publish to the web</em> dari Google Sheets (lihat README.md bagian "Menghubungkan Google Sheet"). Untuk sekarang, gunakan tombol di atas untuk membuka datanya langsung di Google Sheets.',
    notFoundTitle: "Proyek tidak ditemukan",
    notFoundText: "Proyek yang kamu cari mungkin sudah dipindahkan atau belum ditambahkan."
  },

  en: {
    siteTitle: "{name} — Portfolio",
    metaDescription: "{name}'s portfolio — nuclear engineering student. Data analysis, simulation, and other technical projects.",
    navAria: "Main navigation",
    navHome: "Home",
    navContact: "Contact",
    heroTitle: "Hi, I'm {name}.",
    heroRole: "Nuclear Engineering Student",
    heroIntro: "Here I collect the projects I've worked on — from data analysis to technical simulations. Pick any project below to read the full explanation.",
    portfolioHeading: "Portfolio",
    emptyList: "No projects have been added yet.",
    backHome: "← Back to Home",
    aboutProject: "About this project",
    toolsUsed: "Tools used",
    openInNewTab: "Open in new tab ↗",
    embedPlaceholderTitle: "The live view isn't connected yet.",
    embedPlaceholderBody: 'Fill the <code>embed.url</code> field in <code>assets/data.js</code> with the link from Google Sheets\' <em>Publish to the web</em> (see the README section "Menghubungkan Google Sheet"). For now, use the button above to open the data directly in Google Sheets.',
    notFoundTitle: "Project not found",
    notFoundText: "The project you're looking for may have been moved or hasn't been added yet."
  },

  ja: {
    siteTitle: "{name} — ポートフォリオ",
    metaDescription: "{name}のポートフォリオ — 原子力工学専攻の学生。データ分析、シミュレーションなどの技術プロジェクト。",
    navAria: "メインナビゲーション",
    navHome: "ホーム",
    navContact: "連絡先",
    heroTitle: "こんにちは、{name}です。",
    heroRole: "原子力工学専攻の学生",
    heroIntro: "これまでに取り組んだプロジェクトを、データ分析から技術シミュレーションまで集めています。下のプロジェクトを選ぶと、詳しい説明をご覧いただけます。",
    portfolioHeading: "ポートフォリオ",
    emptyList: "まだプロジェクトが追加されていません。",
    backHome: "← ホームに戻る",
    aboutProject: "このプロジェクトについて",
    toolsUsed: "使用ツール",
    openInNewTab: "新しいタブで開く ↗",
    embedPlaceholderTitle: "ライブ表示はまだ接続されていません。",
    embedPlaceholderBody: '<code>assets/data.js</code> の <code>embed.url</code> に、Googleスプレッドシートの<em>ウェブに公開</em>（Publish to the web）で取得したリンクを入力してください（README.md の「Menghubungkan Google Sheet」の項を参照）。それまでは、上のボタンからGoogleスプレッドシートでデータを直接開けます。',
    notFoundTitle: "プロジェクトが見つかりません",
    notFoundText: "お探しのプロジェクトは移動されたか、まだ追加されていない可能性があります。"
  }
};

/* ==========================================================================
   FUNGSI BANTU (biasanya tidak perlu diubah)
   ========================================================================== */

const LANG_STORAGE_KEY = "portfolio-lang";
let currentLang = DEFAULT_LANG;

function isValidLang(code) {
  return LANGUAGES.some((l) => l.code === code);
}

// Baca bahasa yang terakhir dipilih pengunjung (tersimpan di browser-nya).
function loadSavedLang() {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (isValidLang(saved)) return saved;
  } catch (e) { /* penyimpanan browser tidak tersedia -> pakai bawaan */ }
  return DEFAULT_LANG;
}

function saveLang(code) {
  try { localStorage.setItem(LANG_STORAGE_KEY, code); } catch (e) { /* abaikan */ }
}

function setCurrentLang(code) {
  currentLang = isValidLang(code) ? code : DEFAULT_LANG;
}

// Ambil teks website sesuai bahasa aktif. Jika belum ada terjemahannya,
// pakai bahasa DEFAULT_LANG.
function ui(key) {
  const table = UI_TEXT[currentLang] || {};
  let text = table[key];
  if (text === undefined) text = (UI_TEXT[DEFAULT_LANG] || {})[key];
  if (text === undefined) return key;
  return text.replace(/\{name\}/g, OWNER_NAME);
}

// Ambil nilai di data.js sesuai bahasa aktif.
//  - Jika nilainya objek { id: ..., en: ..., ja: ... } -> pilih sesuai bahasa
//    (jika bahasa itu kosong, pakai DEFAULT_LANG).
//  - Jika nilainya string/array biasa -> dipakai apa adanya di semua bahasa.
function pick(value) {
  if (value == null) return "";
  if (typeof value === "string" || Array.isArray(value)) return value;
  if (value[currentLang] !== undefined) return value[currentLang];
  if (value[DEFAULT_LANG] !== undefined) return value[DEFAULT_LANG];
  return "";
}
