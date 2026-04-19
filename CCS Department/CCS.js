document.addEventListener('DOMContentLoaded', function() {

  const track = document.querySelector('.carousel-track');
  if (!track) return;

  const slides = Array.from(track.children);
  const prevBtn = document.querySelector('.crsl-btn');
  const nextBtn = document.querySelector('.crsl-btn2');
  const indicators = document.querySelectorAll('.indicator');

  const totalSlides = slides.length;
  let currentIndex = 0;

  // ===== UPDATE CAROUSEL =====
  function updateCarousel() {
    const container = document.querySelector('.carousel-container');
    const containerWidth = container.offsetWidth;
    const currentSlide = slides[currentIndex];

    const offset =
      currentSlide.offsetLeft -
      (containerWidth / 2 - currentSlide.offsetWidth / 2);

    track.style.transform = `translateX(${-offset}px)`;

    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentIndex);
    });

    indicators.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  // ===== NEXT / PREV =====
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  // ===== BUTTON EVENTS =====
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  // ===== DOT INDICATORS =====
  indicators.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });

  // ===== KEYBOARD CONTROL (carousel only when modal is closed) =====
  document.addEventListener('keydown', (e) => {
    const modalOpen = document.getElementById('uc-modal')?.classList.contains('show');
    if (modalOpen) return;
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft')  prevSlide();
  });

  // ===== INIT =====
  updateCarousel();
});

// ===== UC MODAL =====
const ucSlides = [
  { src: '../CCS MV/ccsMission.png', title: 'CCS Mission', isLarge: false },
  { src: '../CCS MV/ccsVision.png',  title: 'CCS Vision',  isLarge: false },
  { src: '../CCS MV/ccsGoals.png',   title: 'CCS Goals',   isLarge: false },
];

let currentUCIndex = 0;

function renderUCModal(index) {
  const slide = ucSlides[index];
  const modalContent = document.querySelector('.uc-modal-content');

  document.getElementById('uc-modal-img').src = slide.src;
  document.getElementById('uc-modal-title').textContent = slide.title;
  modalContent.classList.toggle('uc-modal-large', slide.isLarge);
}

function openUCModal(imgSrc, title, isLarge = false) {
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

// ===== KEYBOARD (modal takes priority over carousel) =====
document.addEventListener('keydown', (e) => {
  const modalOpen = document.getElementById('uc-modal')?.classList.contains('show');

  if (e.key === 'Escape') {
    e.stopImmediatePropagation();
    e.preventDefault();
    if (modalOpen) closeUCModal();
    return;
  }

  if (modalOpen) {
    if (e.key === 'ArrowLeft')  prevUCModal();
    if (e.key === 'ArrowRight') nextUCModal();
  }
});