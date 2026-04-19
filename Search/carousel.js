document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.carousel-container');
  const track = document.querySelector('.carousel-track');
  if (!track || !container) return;

  const slides = Array.from(track.children);
  const prevBtn = document.querySelector('.crsl-btn');
  const nextBtn = document.querySelector('.crsl-btn2');
  const indicatorsContainer = document.querySelector('.carousel-indicators');

  const totalSlides = slides.length;
  let currentIndex = 0;
  let isTransitioning = false;
  let startX = 0;

  // ✅ ALWAYS use ONE class name consistently
  const getIndicators = () =>
    indicatorsContainer?.querySelectorAll('.indicator') || [];

  // ===== UPDATE INDICATORS =====
  function updateIndicators() {
    const indicators = getIndicators();
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex);
    });
  }

  // ===== CENTERING CAROUSEL =====
  function updateCarousel() {
    isTransitioning = true;

    const containerWidth = container.offsetWidth;
    const slideWidth = slides[currentIndex].offsetWidth;

    let slideStart = 0;
    for (let i = 0; i < currentIndex; i++) {
      slideStart += slides[i].offsetWidth + 25; // must match CSS gap
    }

    const offset = slideStart - containerWidth / 2 + slideWidth / 2;

    track.style.transition =
      'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    track.style.transform = `translateX(${-offset}px)`;

    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentIndex);
    });

    updateIndicators();

    setTimeout(() => {
      isTransitioning = false;
    }, 600);
  }

  // ===== NAVIGATION =====
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  nextBtn?.addEventListener('click', nextSlide);
  prevBtn?.addEventListener('click', prevSlide);

  // ===== INDICATOR CLICK (FIXED) =====
  function bindIndicatorClicks() {
    const indicators = getIndicators();

    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        if (index === currentIndex) return; // prevent double trigger
        currentIndex = index;
        updateCarousel();
      });
    });
  }

  bindIndicatorClicks();

  // ===== KEYBOARD =====
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });

  // ===== RESIZE FIX =====
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateCarousel, 250);
  });

 

  // ===== INIT =====
  updateCarousel();
});