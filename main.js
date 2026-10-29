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
  const faqButtons = document.querySelectorAll('.faq-accordion-btn');
  if (faqButtons.length > 0) {
    faqButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-accordion-item');
        const isActive = item.classList.contains('active');

        // Close other accordion items
        document.querySelectorAll('.faq-accordion-item').forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-accordion-btn');
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
});
