const mobileToggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav');
const servicesToggle = document.querySelector('.services-toggle');
const dropdownWrap = document.querySelector('.dropdown-wrap');

if (mobileToggle && nav) {
  mobileToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    mobileToggle.textContent = nav.classList.contains('open') ? '×' : '☰';
  });
}
if (servicesToggle && dropdownWrap) {
  servicesToggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 980) {
      e.preventDefault();
      dropdownWrap.classList.toggle('open');
    }
  });
}

document.querySelectorAll('[data-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.work-card').forEach(card => {
      card.style.display = filter === 'all' || card.dataset.category === filter ? '' : 'none';
    });
  });
});
