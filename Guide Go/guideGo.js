document.addEventListener('DOMContentLoaded', function () {
  // Image Grid Modal Functionality
  const imageGrid = document.getElementById('imageGrid');
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDetails = document.getElementById('modalDetails');
  const prevBtn = document.getElementById('prevImage');
  const nextBtn = document.getElementById('nextImage');
  const closeBtn = document.getElementById('closeModal');

  let currentIndex = 0;
  let filteredData = [...gridData]; // Tracks currently visible items

  // ── Search / Filter ──────────────────────────────────────────────────────────
  function initSearch() {
    const searchInput = document.getElementById('guideSearch');
    if (!searchInput) return;

    searchInput.addEventListener('input', function () {
      const query = this.value.trim().toLowerCase();
      filteredData = query
        ? gridData.filter((item) => item.title.toLowerCase().includes(query))
        : [...gridData];

      renderGrid();
    });
  }

  // ── Grid rendering ───────────────────────────────────────────────────────────
  function renderGrid() {
    imageGrid.innerHTML = '';

    if (filteredData.length === 0) {
      imageGrid.innerHTML =
        '<p class="no-results">No cards match your search.</p>';
      return;
    }

    filteredData.forEach((item, index) => {
      const gridItem = document.createElement('div');
      gridItem.className = 'grid-item';
      gridItem.innerHTML = `<span class="item-number">${item.title}</span>`;
      gridItem.onclick = () => openModal(index); // index into filteredData
      imageGrid.appendChild(gridItem);
    });
  }

  // Kept for backwards-compatibility (called nowhere else, but safe to keep)
  function createGrid() {
    renderGrid();
  }

  // ── Modal ────────────────────────────────────────────────────────────────────
  function openModal(index) {
    currentIndex = index;
    updateModal();
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  function updateModal() {
    const item = filteredData[currentIndex]; // use filteredData
    modalImage.style.opacity = 0;

    const img = new Image();
    img.src = item.image;
    img.onload = () => {
      modalImage.src = item.image;
      modalImage.style.opacity = 1;
    };

    modalImage.alt = item.title;
    modalTitle.textContent = item.title;
    modalDetails.textContent = item.details;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % filteredData.length;
    updateModal();
  }

  function prevImage() {
    currentIndex =
      (currentIndex - 1 + filteredData.length) % filteredData.length;
    updateModal();
  }

  // ── Event listeners ──────────────────────────────────────────────────────────
  if (prevBtn) prevBtn.onclick = prevImage;
  if (nextBtn) nextBtn.onclick = nextImage;
  if (closeBtn) closeBtn.onclick = closeModal;

  modal.onclick = (e) => {
    if (e.target === modal) closeModal();
  };

  document.addEventListener('keydown', (e) => {
    if (!modal.style.display || modal.style.display === 'none') return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });

  // Touch / swipe support
  let startX = 0;
  modal.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });
  modal.addEventListener('touchend', (e) => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? nextImage() : prevImage();
  });

  function preloadImages(data) {
    data.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }

  // ── Init ─────────────────────────────────────────────────────────────────────
  createGrid();
  preloadImages(gridData);
  initSearch();
});
