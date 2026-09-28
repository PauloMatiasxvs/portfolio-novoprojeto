(() => {
  const header = document.querySelector('.nav');
  const btn = document.querySelector('.menu-btn');
  const menu = document.getElementById('menu');
  const links = [...menu.querySelectorAll('a')];

  // Menu mobile
  const setMenu = (open) => {
    btn.setAttribute('aria-expanded', String(open));
    btn.querySelector('.sr').textContent = open ? 'Fechar menu' : 'Abrir menu';
    menu.classList.toggle('open', open);
  };
  btn.addEventListener('click', () => setMenu(btn.getAttribute('aria-expanded') !== 'true'));
  links.forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) { setMenu(false); btn.focus(); }
  });

  // Borda da navbar ao rolar
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Link ativo conforme a seção visível
  const byId = new Map(links.map((a) => [a.hash.slice(1), a]));
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.classList.remove('active'));
      byId.get(entry.target.id)?.classList.add('active');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ['inicio', ...byId.keys()].forEach((id) => { const s = document.getElementById(id); if (s) spy.observe(s); });

  // Revelar ao rolar (o CSS só esconde quando há movimento permitido)
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { items.forEach((el) => el.classList.add('in')); return; }
  const reveal = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      reveal.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  items.forEach((el) => reveal.observe(el));
})();
