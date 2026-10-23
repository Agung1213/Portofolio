/* ==========================================================================
   COMMON.JS — fungsi bersama untuk Beranda (app.js) dan sub halaman proyek
   (project.js). Biasanya tidak perlu diubah.

   Isinya:
   - tombol ganti bahasa
   - penerjemahan semua elemen yang punya penanda data-i18n
   - pemilihan blok penjelasan per bahasa (<div data-lang="id"> ... )
   - kotak embed (mis. Google Sheet)
   ========================================================================== */

/* ---------- Utilitas kecil supaya teks aman disisipkan ke HTML ---------- */
function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str == null ? "" : String(str);
  return div.innerHTML;
}
function escapeAttr(str) {
  return escapeHTML(str).replace(/"/g, "&quot;");
}

/* ---------- Tombol bulat ganti bahasa ---------- */
function buildLangSwitch(onChange) {
  const wrap = document.getElementById("lang-switch");
  if (!wrap) return;
  wrap.innerHTML = "";
  LANGUAGES.forEach((lang) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "lang-btn";
    btn.dataset.code = lang.code;
    btn.textContent = lang.label;
    btn.title = lang.name;
    btn.setAttribute("aria-label", lang.name);
    btn.setAttribute("lang", lang.code);
    btn.addEventListener("click", () => onChange(lang.code));
    wrap.appendChild(btn);
  });
}

function updateLangSwitch() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.code === currentLang ? "true" : "false");
  });
}

/* ---------- Terjemahkan elemen statis di halaman ---------- */
function applyStaticTranslations() {
  document.documentElement.lang = currentLang;

  // Teks biasa: <p data-i18n="kunci">
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = ui(el.dataset.i18n);
  });

  // Atribut: data-i18n-attr="atribut:kunci" (boleh beberapa, pisahkan titik koma)
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      if (attr && key) el.setAttribute(attr, ui(key));
    });
  });

  // Blok penjelasan per bahasa (dipakai di sub halaman proyek):
  //   <div data-lang="id">...</div>  <div data-lang="en">...</div>  ...
  // Jika bahasa aktif belum punya blok, dipakai blok DEFAULT_LANG.
  const blocks = document.querySelectorAll("main [data-lang]");
  const hasCurrent = Array.from(blocks).some((b) => b.dataset.lang === currentLang);
  const show = hasCurrent ? currentLang : DEFAULT_LANG;
  blocks.forEach((b) => {
    b.hidden = b.dataset.lang !== show;
    b.setAttribute("lang", b.dataset.lang);
  });
}

/* ---------- Mulai sistem bahasa di sebuah halaman ----------
   onApply dipanggil setiap kali bahasa berubah (juga saat halaman dibuka),
   gunakan untuk menggambar ulang bagian yang isinya dari data.js. */
function initLanguage(onApply) {
  function applyAll() {
    applyStaticTranslations();
    updateLangSwitch();
    if (onApply) onApply();
  }

  setCurrentLang(loadSavedLang());
  buildLangSwitch((code) => {
    if (code === currentLang) return;
    setCurrentLang(code);
    saveLang(code);
    applyAll();
  });
  applyAll();
}

/* ---------- Kotak embed (mis. Google Sheet) ---------- */
function renderEmbed(embed, wrap) {
  wrap.innerHTML = "";
  if (!embed) return;

  const isPlaceholder = !embed.url || embed.url.indexOf("GANTI_DENGAN_URL") !== -1;
  const label = pick(embed.label);

  const frame = document.createElement("div");
  frame.className = "embed-frame";

  const bar = document.createElement("div");
  bar.className = "embed-frame__bar";
  bar.innerHTML = `
    <span class="embed-frame__label">${escapeHTML(label)}</span>
    ${
      embed.openUrl
        ? `<a class="embed-frame__open" href="${escapeAttr(embed.openUrl)}" target="_blank" rel="noopener">${escapeHTML(ui("openInNewTab"))}</a>`
        : ""
    }
  `;
  frame.appendChild(bar);

  if (isPlaceholder) {
    const notice = document.createElement("div");
    notice.className = "embed-frame__placeholder";
    // Teks ini berasal dari i18n.js (bukan input pengunjung), jadi aman berisi <code>/<em>.
    notice.innerHTML = `
      <p><strong>${escapeHTML(ui("embedPlaceholderTitle"))}</strong></p>
      <p>${ui("embedPlaceholderBody")}</p>
    `;
    frame.appendChild(notice);
  } else if (embed.type === "google-sheet") {
    const iframe = document.createElement("iframe");
    iframe.src = embed.url;
    iframe.loading = "lazy";
    iframe.title = label || "Embedded content";
    iframe.className = "embed-frame__iframe";
    frame.appendChild(iframe);
  }

  wrap.appendChild(frame);
}
