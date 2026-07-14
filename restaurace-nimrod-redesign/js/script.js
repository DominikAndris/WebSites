document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Tabs
  document.querySelectorAll('.tabbar').forEach(function (bar) {
    var group = bar.getAttribute('data-tabs');
    var buttons = bar.querySelectorAll('.tab-btn');
    var panels = document.querySelectorAll('.tab-panel[data-group="' + group + '"]');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('is-active'); });
        panels.forEach(function (p) { p.classList.remove('is-active'); });
        btn.classList.add('is-active');
        document.getElementById(btn.getAttribute('data-tab')).classList.add('is-active');
      });
    });
  });

  // Accordion
  document.querySelectorAll('.accordion-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var item = trigger.closest('.accordion-item');
      item.classList.toggle('is-open');
    });
  });

  // Gallery lightbox
  var lightbox = document.querySelector('.lightbox');
  var lightboxImg = lightbox ? lightbox.querySelector('img') : null;
  document.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {
      var full = item.getAttribute('data-full') || item.querySelector('img').src;
      lightboxImg.src = full;
      lightboxImg.alt = item.querySelector('img').alt;
      lightbox.classList.add('is-open');
    });
  });
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.closest('.lightbox-close')) {
        lightbox.classList.remove('is-open');
        lightboxImg.src = '';
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        lightbox.classList.remove('is-open');
        lightboxImg.src = '';
      }
    });
  }

  // Header background on scroll (subtle emphasis)
  var header = document.querySelector('.site-header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 12) header.style.boxShadow = '0 8px 24px -12px rgba(0,0,0,.45)';
    else header.style.boxShadow = 'none';
  });
});
