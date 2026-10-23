/* ==========================================================================
   PROJECT.JS — logika untuk SUB HALAMAN proyek (folder projects/)
   ==========================================================================
   Dipakai oleh setiap file projects/<slug>.html. Halaman mengetahui
   proyek mana yang ditampilkan lewat atribut di tag <body>:

       <body data-project="analisis-saham-idx">

   Nilai itu harus sama dengan "slug" di assets/data.js. Dari sana diambil:
   judul, kategori, tahun, ringkasan, alat, dan kotak embed.

   Penjelasan panjangnya sendiri ditulis langsung sebagai HTML di dalam
   file halaman itu (per bahasa), jadi tidak ada batas panjang dan
   index.html tidak ikut memanjang.
   ========================================================================== */

(function () {
  const slug = document.body.dataset.project;
  const item = PORTFOLIO_DATA.find((p) => p.slug === slug);

  const view = document.getElementById("project-view");
  const notFound = document.getElementById("project-notfound");

  document.getElementById("year").textContent = new Date().getFullYear();

  function render() {
    if (!item) {
      view.hidden = true;
      notFound.hidden = false;
      document.title = ui("notFoundTitle") + " — " + OWNER_NAME;
      return;
    }

    view.hidden = false;
    notFound.hidden = true;

    document.getElementById("detail-category").textContent = pick(item.category);
    document.getElementById("detail-year").textContent = pick(item.year);
    document.getElementById("detail-title").textContent = pick(item.title);
    document.getElementById("detail-summary").textContent = pick(item.summary);

    const toolsWrap = document.getElementById("detail-tools");
    toolsWrap.innerHTML = "";
    (pick(item.tools) || []).forEach((tool) => {
      const li = document.createElement("li");
      li.textContent = tool;
      toolsWrap.appendChild(li);
    });

    renderEmbed(item.embed, document.getElementById("detail-embed-wrap"));

    document.title = pick(item.title) + " — " + OWNER_NAME;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", pick(item.summary));
  }

  initLanguage(render);
})();
