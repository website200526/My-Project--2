const menu=document.querySelector('.menu'), links=document.querySelector('.links');
if(menu) menu.onclick=()=>{links.classList.toggle('open'); links.style.display=links.classList.contains('open')?'flex':'none';links.style.flexDirection='column';links.style.position='absolute';links.style.top='70px';links.style.left='16px';links.style.right='16px';links.style.padding='20px';links.style.background='#0b1a2b';links.style.border='1px solid rgba(255,255,255,.12)'};
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{if(links)links.style.display=''}));

/* ============================================================
   Scroll reveal — fades + floats elements into place
   ============================================================ */
(function () {
  const revealTargets = [
    '.pagehero .eyebrow',
    '.pagehero h1',
    '.pagehero .hero-copy',
    '.section .eyebrow',
    '.section h2',
    '.section > .container > p',
    '.grid2 > div',
    '.grid3 > *',
    '.card',
    '.service',
    '.software-card',
    '.it-card',
    '.photo',
    '.stats',
    '.cta h2',
    '.cta p',
    '.contact > div',
    '.contact form',
    '.form input',
    '.form textarea',
    '.form button'
  ];

  const nodes = document.querySelectorAll(revealTargets.join(','));
  if (!nodes.length) return;

  nodes.forEach((el, i) => {
    el.classList.add('reveal-init');
    // stagger siblings slightly for a natural cascade
    const delay = Math.min(i * 40, 320);
    el.style.transitionDelay = delay + 'ms';
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-in');
        io.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  nodes.forEach((el) => io.observe(el));
})();
