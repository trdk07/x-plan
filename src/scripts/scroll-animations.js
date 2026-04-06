// ============================================================
// X翻倉計畫 — Scroll Animation System
// ============================================================

// Intersection Observer scroll reveals
const reveals = document.querySelectorAll('[data-reveal]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

reveals.forEach(el => observer.observe(el));

// Stagger children
document.querySelectorAll('[data-stagger]').forEach(parent => {
  const children = parent.children;
  Array.from(children).forEach((child, i) => {
    child.style.transitionDelay = `${i * 0.12}s`;
  });
});

// Nav scroll behavior
const nav = document.querySelector('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });
}

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// Hero load animations
const heroElements = document.querySelectorAll('[data-hero]');
heroElements.forEach((el, i) => {
  const delay = 0.3 + i * 0.2;
  el.style.opacity = '0';
  el.style.transform = 'translateY(12px)';
  el.style.transition = `opacity 1.0s var(--ease-out), transform 1.0s var(--ease-out)`;
  el.style.transitionDelay = `${delay}s`;

  // Trigger on next frame
  requestAnimationFrame(() => {
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 50);
  });
});
