# Portofolio Ari

Website portofolio sederhana. Tanpa framework, tanpa build tool — cukup
HTML, CSS, dan JavaScript biasa, jadi bisa langsung dibuka atau di-hosting
di mana saja.

## Struktur folder

```
portfolio-ari/
├── index.html          -> struktur halaman (Beranda + halaman detail)
├── assets/
│   ├── style.css        -> semua tampilan/warna/layout
│   ├── data.js           -> ISI SEMUA PROYEK PORTOFOLIO ADA DI SINI
│   └── app.js             -> logika render & pindah halaman (jarang perlu diubah)
└── README.md
```

Setiap proyek portofolio punya halamannya sendiri secara otomatis lewat URL,
contoh: `index.html#/portfolio/analisis-saham-idx`. Jadi orang lain bisa
membuka satu proyek tertentu lewat link, dan tombol "← Kembali ke Beranda"
selalu ada di halaman detail.

## Cara melihat hasilnya

Buka `index.html` langsung di browser (klik dua kali sudah cukup — tidak
perlu server). Kalau nanti sudah di-hosting online, alamatnya akan otomatis
berbentuk seperti `https://namadomain.com/#/portfolio/analisis-saham-idx`.

## Cara menambah proyek baru

Semua proyek diatur lewat satu array di `assets/data.js`. Untuk menambah
proyek baru:

1. Buka `assets/data.js`.
2. Salin satu blok `{ ... }` yang sudah ada.
3. Tempel di dalam array `PORTFOLIO_DATA`, dipisah koma dari entri sebelumnya.
4. Ganti isi `slug`, `category`, `title`, `year`, `summary`, `tools`, dan
   `description` sesuai proyekmu. Pastikan `slug` unik dan tidak pakai spasi.
5. Kalau proyek itu tidak punya tampilan interaktif untuk disematkan, cukup
   tulis `embed: null`.
6. Simpan file, lalu refresh browser. Kartu proyek baru langsung muncul di
   Beranda tanpa perlu mengubah `index.html` atau `style.css`.

Contoh proyek berikutnya yang bisa kamu tambahkan dengan pola yang sama:
tugas akhir simulasi PHITS-mu. Tinggal isi `category: "Simulasi"` dan
tulis ringkasannya di `summary`/`description`.

## Menghubungkan Google Sheet (dashboard saham)

Proyek "Dashboard Analisis Fundamental Saham IDX" sudah disiapkan di
`data.js`, tapi kotak embed-nya masih kosong (menampilkan pesan "belum
terhubung") sampai kamu melakukan langkah berikut. Ini wajib dilakukan
lewat akun Google-mu sendiri — saya tidak bisa melakukannya untukmu.

1. Buka spreadsheet **IDX STOCKS** di Google Sheets, lalu klik tab sheet
   **"Dashboard Saham"** di bagian bawah supaya tab itu yang sedang aktif.
2. Klik menu **File → Share → Publish to the web** (Bagikan → Publikasikan
   ke web).
3. Pada dialog yang muncul, di dropdown pertama pilih **"Dashboard Saham"**
   (bukan "Entire Document"), supaya hanya tab itu yang dipublikasikan.
4. Pastikan tab **Embed** (bukan Link) yang aktif, format tetap **Web page**.
5. Klik **Publish**, lalu konfirmasi.
6. Google akan menampilkan kode `<iframe src="...">...</iframe>`. Salin
   URL di dalam `src="..."` itu saja (diawali `https://docs.google.com/spreadsheets/d/e/...`).
7. Buka `assets/data.js`, cari baris:
   ```js
   url: "GANTI_DENGAN_URL_PUBLISH_TO_WEB",
   ```
   Ganti dengan URL yang tadi disalin, contoh:
   ```js
   url: "https://docs.google.com/spreadsheets/d/e/2PACX-xxxxxxx/pubhtml?gid=2144001220&single=true&widget=true&headers=false",
   ```
8. Simpan, refresh halaman detail proyek — dashboard akan langsung tampil
   di dalam kotak embed.

Catatan: sheet-nya sudah bisa dibuka publik (view-only) sehingga isinya
aman ditampilkan, tapi Google tetap mewajibkan langkah "Publish to the
web" di atas agar sheet boleh ditampilkan di dalam `<iframe>` situs lain
— tanpa langkah ini, Google akan memblokir tampilannya meskipun linknya
sudah bisa dibuka langsung di tab baru.

Tombol **"Buka di tab baru ↗"** di atas kotak embed selalu mengarah
langsung ke Google Sheets aslinya, jadi pengunjung tetap bisa melihat
datanya walau iframe belum kamu hubungkan.

## Mengganti identitas & kontak

- Nama "Ari" dan tagline "Mahasiswa Teknik Nuklir" ada di `index.html`
  bagian `<section class="hero">` — ubah langsung teksnya di sana.
- Link email/LinkedIn/GitHub di bagian footer `index.html` masih berupa
  contoh (`nama@email.com`, `linkedin.com/in/username`, dst.) — ganti
  dengan alamat aslimu.

## Meng-online-kan website ini

Cara paling sederhana dan gratis:

- **GitHub Pages**: buat repository baru, unggah semua isi folder ini,
  aktifkan GitHub Pages di Settings → Pages, pilih branch `main`.
- **Netlify**: buka netlify.com/drop, seret (drag-and-drop) folder ini ke
  halaman tersebut — situs langsung online dalam beberapa detik.

Keduanya tidak butuh proses build apa pun karena situs ini sudah berupa
HTML/CSS/JS statis.
