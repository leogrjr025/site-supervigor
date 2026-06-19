// =============================================
//  SUPER VIGOR – main.js
// =============================================

// --- MENU MOBILE ---
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  // Fecha o menu ao clicar em um link
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });
}

// --- SCROLL SUAVE para links internos ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80; // altura da navbar
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// --- NAVBAR: sombra ao rolar ---
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    if (window.scrollY > 10) {
      navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)';
    } else {
      navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
    }
  }
});

// --- ANO ATUAL no rodapé (opcional) ---
const anoEl = document.getElementById('ano-atual');
if (anoEl) {
  anoEl.textContent = new Date().getFullYear();
}
