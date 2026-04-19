// Perfect Global Search - Tech Tutorials redirect/video modal
document.addEventListener('DOMContentLoaded', function () {
  console.log('Perfect Global Search loaded');

  function initSearch() {
    if (typeof searchIndex === 'undefined' || !Array.isArray(searchIndex)) {
      setTimeout(initSearch, 100);
      return;
    }
    console.log('Global search ready:', searchIndex.length, 'items');
    setupSearch(searchIndex);
  }

  function setupSearch(data) {
    const input = document.querySelector('.search-container input');
    function positionDropdown() {
      const rect = input.getBoundingClientRect();

      dropdown.style.top = rect.bottom + 12 + 'px';
      dropdown.style.left = rect.left + 'px';
      dropdown.style.width = rect.width + 'px';
    }
    if (!input) return;

    const dropdown = document.createElement('div');
    dropdown.id = 'global-search-dropdown';
    dropdown.className = 'search-dropdown';
    dropdown.style.cssText = `
      position: fixed;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(20px);
      border-radius: 20px;
      box-shadow: 0 25px 50px rgba(0,0,0,0.5);
      z-index: 1000000;
      max-height: 400px;
      overflow-y: auto;
      display: none;
      border: 2px solid rgba(255,255,255,0.3);
      padding: 0;
    `;

    document.body.appendChild(dropdown);

    function positionDropdown() {
      const rect = input.getBoundingClientRect();
      dropdown.style.top = rect.bottom + 12 + 'px';
      dropdown.style.left = rect.left + 'px';
      dropdown.style.width = rect.width + 'px';
    }

    let timeout;
    input.oninput = (e) => {
      positionDropdown();
      clearTimeout(timeout);
      timeout = setTimeout(() => search(e.target.value, dropdown, data), 150);
    };

    window.addEventListener('resize', positionDropdown);
    window.addEventListener('scroll', positionDropdown);

    document.addEventListener('click', (e) => {
      const clickedInsideInput = input.contains(e.target);
      const clickedInsideDropdown = dropdown.contains(e.target);
      const clickedInsideModal =
        e.target.closest('#guideGoImageModal') ||
        e.target.closest('#techVideoModal');

      if (
        !clickedInsideInput &&
        !clickedInsideDropdown &&
        !clickedInsideModal
      ) {
        dropdown.style.display = 'none';
      }
    });
  }

  function search(query, dropdown, data) {
    const q = query.toLowerCase().trim();
    if (q.length < 1) {
      dropdown.style.display = 'none';
      return;
    }

    const matches = data
      .filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          (item.page && item.page.toLowerCase().includes(q)),
      )
      .slice(0, 6);

    dropdown.innerHTML = matches.length
      ? matches.map((item) => createItem(item)).join('')
      : `<div style="padding: 24px 20px; text-align: center; color: rgba(255,255,255,0.6); font-size: 15px;">
            No results found
          </div>`;

    dropdown.style.display = matches.length ? 'block' : 'none';
  }

  function createItem(item) {
    const icon = item.type === 'image' ? '' : item.type === 'video' ? '' : '';
    return `
        <div class="search-item" onclick="handleSearchItem('${item.type}', '${item.path}', '${item.name.replace(/'/g, "\\'")}', '${item.desc ? item.desc.replace(/'/g, "\\'") : ''}')" style="
          padding: 8px 24px;
          cursor: pointer;
          border-bottom: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          gap: 16px;
          color: white;
          transition: all 0.25s ease;
          font-size: 16px;
        " 
        onmouseover="this.style.background='rgba(255,255,255,0.2)';" 
        onmouseout="this.style.background='';" >
          <span style="font-size: 22px;">${icon}</span>
  <div style="flex: 1; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
            <div style="font-weight: 600; margin-bottom: 2px;">${item.name}</div>
            <div style="opacity: 0.8; font-size: 13px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.page || 'Home'}</div>
          </div>
        </div>
      `;
  }

  window.handleSearchItem = function (type, path, name, desc, event) {
    event?.stopPropagation?.();
    event?.preventDefault?.();
    if (type === 'guide-item') {
      // Guide Go gallery item - open modal with title + desc
      showGuideGoModal(path, name, desc);
    } else if (type === 'image') {
      showGuideGoModal(path, name);
    } else if (type === 'video') {
      showVideoModal(path, name, desc);
    } else {
      window.location.href = path;
    }

    document.querySelector('.search-container input').value = '';
    document.getElementById('global-search-dropdown').style.display = 'none';
  };

  // GuideGo image modal (existing)
  function showGuideGoModal(imagePath, title) {
    let modal = document.getElementById('guideGoImageModal');
    if (!modal) modal = createGuideGoModal();

    modal.querySelector('#guideGoModalImage').src = imagePath;
    modal.querySelector('#guideGoModalTitle').textContent = title;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function createGuideGoModal() {
    const modal = document.createElement('div');
    modal.id = 'guideGoImageModal';
    modal.className = 'guide-go-modal';

    modal.innerHTML = `
        <div class="modal-content">
          <div class="modal-left">
            <img id="guideGoModalImage" src="" alt="Search Image">
          </div>
          <div class="modal-right">
            <div class="modal-title" id="guideGoModalTitle"></div>
            <div class="modal-details" id="guideGoModalDetails"></div>
            <div class="modal-nav">
              <button class="close-btn">×</button>
            </div>
          </div>
        </div>
      `;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '../Home Page/globalSearch.css';
    document.head.appendChild(link);

    modal.querySelector('.close-btn').onclick = closeGuideGoModal;

    document.body.appendChild(modal);
    return modal;
  }

  window.closeGuideGoModal = function () {
    document.getElementById('guideGoImageModal').style.display = 'none';
    document.body.style.overflow = '';
  };

  // NEW Video Modal for Tech Tutorials
  function showVideoModal(videoUrl, title, desc) {
    let modal = document.getElementById('techVideoModal');
    if (!modal) modal = createVideoModal();

    modal.querySelector('#techVideoIframe').src = videoUrl;
    modal.querySelector('#techVideoTitle').textContent = title;
    modal.querySelector('#techVideoDesc').textContent = desc;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function createVideoModal() {
    const modal = document.createElement('div');
    modal.id = 'techVideoModal';
    modal.className = 'video-modal-overlay';

    modal.innerHTML = `
        <div class="video-modal-content">
          <button class="video-modal-close">&times;</button>
          <iframe id="techVideoIframe" allowfullscreen allow="autoplay"></iframe>
          <div class="video-modal-meta">
            <h3 id="techVideoTitle"></h3>
            <p id="techVideoDesc"></p>
          </div>
        </div>
      `;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'Home Page/globalSearch.css';
    document.head.appendChild(link);

    modal.querySelector('.video-modal-close').onclick = closeVideoModal;

    document.body.appendChild(modal);
    return modal;
  }

  window.closeVideoModal = function () {
    const modal = document.getElementById('techVideoModal');
    if (modal) {
      modal.querySelector('#techVideoIframe').src = '';
      modal.style.display = 'none';
    }
    document.body.style.overflow = '';
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeGuideGoModal();
      closeVideoModal();
    }
  });

  initSearch();
});
