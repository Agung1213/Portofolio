/* ==========================================================================
   APP.JS — khusus halaman BERANDA (index.html)
   Menggambar daftar proyek dari PORTFOLIO_DATA (data.js). Setiap proyek
   menautkan ke sub halamannya sendiri: projects/<slug>.html

   Penjelasan lengkap tiap proyek TIDAK ada di sini, melainkan di file
   projects/<slug>.html (dikelola oleh project.js).
   Fungsi bersama (tombol bahasa, terjemahan) ada di common.js.
   ========================================================================== */

(function () {
  /* ---------- Link lama (#/portfolio/slug) dialihkan ke sub halaman ---------- */
  const legacy = window.location.hash.match(/^#\/portfolio\/([^/]+)\/?$/);
  if (legacy) {
    window.location.replace("projects/" + legacy[1] + ".html");
    return;
  }

  /* ---------- Daftar proyek ---------- */
  function renderPortfolioList() {
    const list = document.getElementById("portfolio-list");
    list.innerHTML = "";

    if (!PORTFOLIO_DATA.length) {
      list.innerHTML = '<p class="empty-state">' + escapeHTML(ui("emptyList")) + "</p>";
      return;
    }

    PORTFOLIO_DATA.forEach((item) => {
      const row = document.createElement("a");
      row.className = "portfolio-row";
      row.href = "projects/" + encodeURIComponent(item.slug) + ".html";

      row.innerHTML = `
        <div class="portfolio-row__text">
          <span class="tag">${escapeHTML(pick(item.category))}</span>
          <h3 class="portfolio-row__title">${escapeHTML(pick(item.title))}</h3>
          <p class="portfolio-row__summary">${escapeHTML(pick(item.summary))}</p>
        </div>
        <span class="portfolio-row__arrow" aria-hidden="true">&#8594;</span>
      `;
      list.appendChild(row);
    });
  }

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Mulai: bahasa + gambar ulang daftar saat bahasa berubah ---------- */
  initLanguage(function () {
    document.title = ui("siteTitle");
    renderPortfolioList();
  });

  /* ---------- Klik "Beranda" saat sudah di Beranda -> kembali ke atas ---------- */
  window.addEventListener("hashchange", function () {
    const h = window.location.hash;
    if (h === "" || h === "#" || h === "#/") window.scrollTo(0, 0);
  });
})();
