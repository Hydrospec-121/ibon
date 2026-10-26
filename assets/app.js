(() => {
  const body = document.body;
  const menu = document.querySelector('.desktop-nav');
  const menuToggle = document.getElementById('menuToggle');
  const langToggle = document.getElementById('langToggle');
  const progressBar = document.getElementById('progressBar');
  const year = document.getElementById('year');
  let language = 'en';
  if (year) year.textContent = new Date().getFullYear();

  const setLanguage = (next) => {
    language = next;
    document.documentElement.lang = next;
    document.querySelectorAll('[data-en][data-bn]').forEach((node) => {
      const value = node.dataset[next];
      if (value !== undefined) node.innerHTML = value;
    });
    if (langToggle) {
      langToggle.textContent = next === 'en' ? 'বাংলা' : 'English';
      langToggle.setAttribute('aria-label', next === 'en' ? 'Switch to Bangla' : 'Switch to English');
    }
  };
  if (langToggle) langToggle.addEventListener('click', () => setLanguage(language === 'en' ? 'bn' : 'en'));

  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      const open = !menu.classList.contains('open');
      menu.classList.toggle('open', open);
      body.classList.toggle('menu-open', open);
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      menu.classList.remove('open');
      body.classList.remove('menu-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open menu');
    }));
  }

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...document.querySelectorAll('.desktop-nav a')];
  const updateScroll = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (progressBar) progressBar.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
    let current = '';
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 150) current = section.id;
    });
    navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
  };
  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();
})();