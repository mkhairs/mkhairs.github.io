document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') lucide.createIcons();
  const themeToggleBtn = document.getElementById('theme-toggle');
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      html.classList.toggle('dark');
      const isDark = html.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      if (typeof lucide !== 'undefined') lucide.createIcons();
    });
  }
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    mobileMenu.querySelectorAll('a').forEach(l => l.addEventListener('click', () => mobileMenu.classList.add('hidden')));
  }
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        card.style.display = (filter === 'all' || cat === filter) ? 'flex' : 'none';
      });
    });
  });
});
function copyEmail() {
  navigator.clipboard.writeText('mkhairs10@gmail.com').then(() => {
    const el = document.getElementById('copy-text');
    if (el) {
      const o = el.innerText;
      el.innerText = 'Copied!';
      setTimeout(() => { el.innerText = o; }, 2000);
    }
  });
}