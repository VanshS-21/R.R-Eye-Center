// R.R Netra Parikshan Kendra - Lenskart-Style JavaScript

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
  });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    if (href === '#') {
      e.preventDefault();
      return;
    }

    const target = document.querySelector(href);

    if (target) {
      e.preventDefault();

      // Close mobile menu if open
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
      }

      const headerOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Navbar Scroll Effect (add shadow on scroll)
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  } else {
    navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
  }
});

// Lazy Loading for Images
const lazyImages = document.querySelectorAll('img[loading="lazy"]');

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => imageObserver.observe(img));
}

// Track Phone Clicks (for analytics)
const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
phoneLinks.forEach(link => {
  link.addEventListener('click', () => {
    console.log('Phone call initiated: 9343787439');
    // Add your analytics tracking here
    // Example: gtag('event', 'phone_call', { event_category: 'contact' });
  });
});

// Track WhatsApp Clicks (for analytics)
const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me/"]');
whatsappLinks.forEach(link => {
  link.addEventListener('click', () => {
    console.log('WhatsApp initiated: 9343787439');
    // Add your analytics tracking here
    // Example: gtag('event', 'whatsapp', { event_category: 'contact' });
  });
});

// Performance Monitoring
window.addEventListener('load', () => {
  const loadTime = performance.now();
  console.log(`R.R Netra Parikshan Kendra loaded in ${loadTime.toFixed(2)}ms`);

  if (loadTime < 3000) {
    console.log('✅ Excellent performance!');
  } else if (loadTime < 5000) {
    console.log('⚠️ Good performance');
  } else {
    console.log('❌ Performance could be improved');
  }
});

console.log('R.R Netra Parikshan Kendra - Lenskart-style website loaded successfully ✅');
