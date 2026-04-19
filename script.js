const menu = document.querySelector('.menu');
const mainContent = document.querySelector('.main');
const headerTitle = document.querySelector('.header h2');

// UC Modal slides data
const ucSlides = [
  { src: '../UC MVH/ucMission.png', title: 'UC Mission', isLarge: false },
  { src: '../UC MVH/ucVision.png',  title: 'UC Vision',  isLarge: false },
  { src: '../UC MVH/ucGoals.png',   title: 'UC Goals',   isLarge: false },
  { src: '../UC MVH/ucHymn.png',    title: 'UC Hymn',    isLarge: false },
];

let currentUCIndex = 0;

// SPA Navigation
async function loadContent(url, title = '') {
  try {
    if (true) {
      window.location.href = url;
      return;
    }
  } catch (error) {
    mainContent.innerHTML = `<div class="error">Failed to load: ${error.message}</div>`;
  }
}

// Menu clickability + SPA navigation
menu.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.tagName === 'A') {
    const links = menu.querySelectorAll('a');
    links.forEach(a => a.classList.remove('active'));
    e.target.classList.add('active');
    loadContent(e.target.href, e.target.textContent);
  }
});

// Modal helpers
function renderUCModal(index) {
  const slide = ucSlides[index];
  const modalContent = document.querySelector('.uc-modal-content');

  document.getElementById('uc-modal-img').src   = slide.src;
  document.getElementById('uc-modal-title').textContent = slide.title;

  // Toggle large class
  modalContent.classList.toggle('uc-modal-large', slide.isLarge);
}

function openUCModal(imgSrc, title, isLarge = false) {
  // Find matching slide index
  const idx = ucSlides.findIndex(s => s.src === imgSrc);
  currentUCIndex = idx !== -1 ? idx : 0;

  renderUCModal(currentUCIndex);
  document.getElementById('uc-modal').classList.add('show');
}

function closeUCModal() {
  document.getElementById('uc-modal').classList.remove('show');
}

function prevUCModal() {
  currentUCIndex = (currentUCIndex - 1 + ucSlides.length) % ucSlides.length;
  renderUCModal(currentUCIndex);
}

function nextUCModal() {
  currentUCIndex = (currentUCIndex + 1) % ucSlides.length;
  renderUCModal(currentUCIndex);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('uc-modal');
  const isOpen = modal.classList.contains('show');

  if (e.key === 'Escape') {
    e.stopImmediatePropagation();
    e.preventDefault();
    if (isOpen) closeUCModal();
  }

  if (isOpen) {
    if (e.key === 'ArrowLeft')  prevUCModal();
    if (e.key === 'ArrowRight') nextUCModal();
  }
});