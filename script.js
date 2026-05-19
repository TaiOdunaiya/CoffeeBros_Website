const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  effect: 'fade',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
let menu = document.querySelector('.menu');
let nums = document.querySelectorAll('.num');
let start = false;
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.navigation a');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('sticky', window.scrollY > 0);
});

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = navbar.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', open);
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navbar.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
    });
  });
}
window.addEventListener('scroll', () => {
  if (window.scrollY >= menu.offsetTop) {
    if (!start) {
      nums.forEach(num => {
        startCount(num);
      });
    }
    start=true;
  }
});

const startCount = el => {
  let max = el.dataset.val;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent === max) {
      clearInterval(count);
    }
  }, 2000 / nums.length);
};
