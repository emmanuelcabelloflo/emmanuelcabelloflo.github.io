// Utilidades de animación al hacer scroll con IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      if (entry.target.dataset.animate === 'stagger') {
        // Añadir visible a hijos si corresponde
        [...entry.target.children].forEach((child,i) => {
          child.style.animationDelay = `${i * 60}ms`;
        });
      }
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.25 });

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

// Año dinámico
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Navegación responsive
const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');
navToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
});

// Cerrar menú al hacer click en un enlace
navLinks?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Scroll suave manual para Safari antiguo
const scrollLinks = document.querySelectorAll('[data-scroll]');
scrollLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
      }
    }
  });
});

// Pequeño efecto parallax en el hero
const hero = document.querySelector('.hero');
const blob = document.querySelector('.blob');
if (hero && blob) {
  hero.addEventListener('pointermove', (e) => {
    const r = hero.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    blob.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
  });
  hero.addEventListener('pointerleave', () => {
    blob.style.transform = '';
  });
}

// Accesibilidad: cerrar con ESC
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') navLinks?.classList.remove('open');
});
