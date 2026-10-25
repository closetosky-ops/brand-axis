const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
}

const services = document.querySelector('.nav-services');
if (services) {
  const trigger = services.querySelector('.services-trigger');
  trigger?.addEventListener('click', (e) => {
    if (window.matchMedia('(max-width: 900px)').matches) {
      e.preventDefault();
      services.classList.toggle('open');
    }
  });
}

const filters = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-category]');
filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const filter = btn.dataset.filter;
  cards.forEach(card => {
    card.hidden = filter !== 'all' && card.dataset.category !== filter;
  });
}));
