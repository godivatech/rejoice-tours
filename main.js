// Interactive Logic for Hero Section

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.pill-tab');
  const serviceText = document.getElementById('val-service');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active and caret from all tabs
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
        const caret = t.querySelector('.active-tab-caret');
        if (caret) caret.remove();
      });

      // Set clicked tab active
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Append downward caret to active tab for desktop
      if (window.innerWidth > 768) {
        const newCaret = document.createElement('span');
        newCaret.className = 'active-tab-caret';
        tab.appendChild(newCaret);
      }

      // Update Service display text
      const tabType = tab.getAttribute('data-tab');
      if (tabType === 'visa') {
        if (serviceText) serviceText.textContent = 'Dubai Visa';
      } else if (tabType === 'attractions') {
        if (serviceText) serviceText.textContent = 'Attractions';
      } else if (tabType === 'international') {
        if (serviceText) serviceText.textContent = 'International Visa';
      }
    });
  });

  // Search Action Button Click Animation
  const searchBtn = document.getElementById('btn-search');
  if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      searchBtn.style.transform = 'scale(0.97)';
      setTimeout(() => {
        searchBtn.style.transform = '';
      }, 150);
    });
  }

  // Mobile menu button toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
    });
  }

  // FAQ Accordion Interactivity
  const faqButtons = document.querySelectorAll('.faq-accordion-btn, .intl-faq-trigger');
  if (faqButtons.length > 0) {
    faqButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-accordion-item, .intl-faq-item');
        const isActive = item.classList.contains('active');

        // Close other accordion items in the same container
        const parentGrid = item.closest('.intl-faq-grid, .faq-accordion');
        const allItems = parentGrid ? parentGrid.querySelectorAll('.intl-faq-item, .faq-accordion-item') : document.querySelectorAll('.faq-accordion-item, .intl-faq-item');
        
        allItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-accordion-btn, .intl-faq-trigger');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle clicked item
        if (isActive) {
          item.classList.remove('active');
          btn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // Attraction Category Tabs Selection
  const catTabs = document.querySelectorAll('.cat-tab-btn');
  if (catTabs.length > 0) {
    catTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        catTabs.forEach((t) => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
      });
    });
  }

  // Wishlist Heart Buttons Toggle
  const wishlistBtns = document.querySelectorAll('.wishlist-btn');
  wishlistBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      btn.classList.toggle('active');
      const heartPath = btn.querySelector('svg path');
      if (btn.classList.contains('active')) {
        btn.querySelector('svg').setAttribute('fill', '#EF4444');
      } else {
        btn.querySelector('svg').setAttribute('fill', 'none');
      }
    });
  });

  // Top Attractions Carousel Arrow Navigation
  const prevBtn = document.getElementById('attractions-prev-btn');
  const nextBtn = document.getElementById('attractions-next-btn');
  const track = document.getElementById('top-attractions-track');

  if (prevBtn && nextBtn && track) {
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -320, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: 320, behavior: 'smooth' });
    });
  }

  // Top Destinations Carousel Navigation (International Visas Page)
  const destPrevBtn = document.getElementById('dest-prev-btn');
  const destNextBtn = document.getElementById('dest-next-btn');
  const destTrack = document.getElementById('destinations-track');

  if (destPrevBtn && destNextBtn && destTrack) {
    destPrevBtn.addEventListener('click', () => {
      destTrack.scrollBy({ left: -360, behavior: 'smooth' });
    });
    destNextBtn.addEventListener('click', () => {
      destTrack.scrollBy({ left: 360, behavior: 'smooth' });
    });
  }

  // Destination Card Active State Selection
  const destCards = document.querySelectorAll('.dest-card-item');
  if (destCards.length > 0) {
    destCards.forEach((card) => {
      card.addEventListener('click', (e) => {
        destCards.forEach((c) => c.classList.remove('active'));
        card.classList.add('active');
      });
    });
  }

  // Contact Page Form Select Dynamic Color
  const formSelects = document.querySelectorAll('.form-select');
  formSelects.forEach((sel) => {
    const updateSelectColor = () => {
      if (!sel.value) {
        sel.style.color = '#94A3B8';
      } else {
        sel.style.color = '#0F2A28';
      }
    };
    updateSelectColor();
    sel.addEventListener('change', updateSelectColor);
  });
});
