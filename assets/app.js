/* ==========================================================================
   APP.JS
   Menangani dua hal:
   1. Menggambar daftar proyek di Beranda dari PORTFOLIO_DATA (data.js).
   2. Berpindah antara Beranda <-> halaman detail proyek berdasarkan URL
      (pakai "hash routing", contoh: namafile.html#/portfolio/analisis-saham-idx)
      supaya setiap proyek punya link sendiri yang bisa dibagikan/dibuka
      orang lain, tanpa perlu server / build tool apa pun.
   ========================================================================== */

(function () {
  const viewHome = document.getElementById("view-home");
  const viewDetail = document.getElementById("view-detail");
  const viewNotFound = document.getElementById("view-notfound");
  const main = document.getElementById("main");

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Beranda: render daftar portofolio ---------- */
  function renderPortfolioList() {
    const list = document.getElementById("portfolio-list");
    list.innerHTML = "";

    if (!PORTFOLIO_DATA.length) {
      list.innerHTML = '<p class="empty-state">Belum ada proyek ditambahkan.</p>';
      return;
    }

    PORTFOLIO_DATA.forEach((item) => {
      const row = document.createElement("a");
      row.className = "portfolio-row";
      row.href = "#/portfolio/" + encodeURIComponent(item.slug);

      row.innerHTML = `
        <div class="portfolio-row__text">
          <span class="tag">${escapeHTML(item.category)}</span>
          <h3 class="portfolio-row__title">${escapeHTML(item.title)}</h3>
          <p class="portfolio-row__summary">${escapeHTML(item.summary)}</p>
        </div>
        <span class="portfolio-row__arrow" aria-hidden="true">&#8594;</span>
      `;
      list.appendChild(row);
    });
  }

  /* ---------- Halaman detail: render satu proyek ---------- */
  function renderDetail(slug) {
    const item = PORTFOLIO_DATA.find((p) => p.slug === slug);
    if (!item) {
      showView(viewNotFound);
      document.title = "Proyek tidak ditemukan — Agung";
      return;
    }

    document.getElementById("detail-category").textContent = item.category;
    document.getElementById("detail-year").textContent = item.year;
    document.getElementById("detail-title").textContent = item.title;
    document.getElementById("detail-summary").textContent = item.summary;

    const descWrap = document.getElementById("detail-description");
    descWrap.innerHTML = "";
    item.description.forEach((paragraph) => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      descWrap.appendChild(p);
    });

    const toolsWrap = document.getElementById("detail-tools");
    toolsWrap.innerHTML = "";
    (item.tools || []).forEach((tool) => {
      const li = document.createElement("li");
      li.textContent = tool;
      toolsWrap.appendChild(li);
    });

    renderEmbed(item.embed);

    document.title = item.title + " — Agung";
    showView(viewDetail);
  }

  /* ---------- Kotak embed (mis. Google Sheet) ---------- */
  function renderEmbed(embed) {
    const wrap = document.getElementById("detail-embed-wrap");
    wrap.innerHTML = "";
    if (!embed) return;

    const isPlaceholder =
      !embed.url || embed.url.indexOf("GANTI_DENGAN_URL") !== -1;

    const frame = document.createElement("div");
    frame.className = "embed-frame";

    const bar = document.createElement("div");
    bar.className = "embed-frame__bar";
    bar.innerHTML = `
      <span class="embed-frame__label">${escapeHTML(embed.label || "")}</span>
      ${
        embed.openUrl
          ? `<a class="embed-frame__open" href="${escapeAttr(embed.openUrl)}" target="_blank" rel="noopener">Buka di tab baru ↗</a>`
          : ""
      }
    `;
    frame.appendChild(bar);

    if (isPlaceholder) {
      const notice = document.createElement("div");
      notice.className = "embed-frame__placeholder";
      notice.innerHTML = `
        <p><strong>Tampilan langsung belum terhubung.</strong></p>
        <p>Isi kolom <code>embed.url</code> di <code>assets/data.js</code> dengan link hasil
        <em>Publish to the web</em> dari Google Sheets (lihat README.md bagian
        "Menghubungkan Google Sheet"). Untuk sekarang, gunakan tombol di atas
        untuk membuka datanya langsung di Google Sheets.</p>
      `;
      frame.appendChild(notice);
    } else if (embed.type === "google-sheet") {
      const iframe = document.createElement("iframe");
      iframe.src = embed.url;
      iframe.loading = "lazy";
      iframe.title = embed.label || "Embedded content";
      iframe.className = "embed-frame__iframe";
      frame.appendChild(iframe);
    }

    wrap.appendChild(frame);
  }

  /* ---------- Ganti tampilan yang aktif ---------- */
  function showView(view) {
    [viewHome, viewDetail, viewNotFound].forEach((v) => {
      v.hidden = v !== view;
    });
    window.scrollTo(0, 0);
    main.focus();
  }

  /* ---------- Router sederhana berbasis hash URL ---------- */
  function router() {
    const hash = window.location.hash || "#/";
    const detailMatch = hash.match(/^#\/portfolio\/([^/]+)\/?$/);

    if (detailMatch) {
      renderDetail(decodeURIComponent(detailMatch[1]));
    } else {
      document.title = "Agung — Portofolio";
      showView(viewHome);
    }
  }

  /* ---------- Utilitas kecil supaya teks aman disisipkan ke HTML ---------- */
  function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str == null ? "" : String(str);
    return div.innerHTML;
  }
  function escapeAttr(str) {
    return escapeHTML(str).replace(/"/g, "&quot;");
  }

  renderPortfolioList();
  window.addEventListener("hashchange", router);
  router();
})();
