/* theGr8Val — main.js */

// ── Terminal typewriter ──
const lines = [
  { id: 't1', text: 'theGr8Val // sec researcher & ctf player', delay: 800 },
  { id: 't2', text: 'binary exploitation, web, reversing, osint', delay: 1600 },
  { id: 't3', text: 'solve.py  notes.md  tools/  writeups/', delay: 2400 },
];

const hiddenCmd = { id: 't4-cmd', text: 'cat /dev/mind > blog.txt', delay: 3200 };

function typewrite(elementId, text, speed = 35) {
  return new Promise(resolve => {
    const el = document.getElementById(elementId);
    if (!el) return resolve();
    let i = 0;
    const tick = () => {
      if (i < text.length) {
        el.textContent += text[i++];
        setTimeout(tick, speed + Math.random() * 20);
      } else {
        resolve();
      }
    };
    tick();
  });
}

async function runTerminal() {
  for (const line of lines) {
    await new Promise(r => setTimeout(r, line.delay));
    await typewrite(line.id, line.text);
  }
  await new Promise(r => setTimeout(r, hiddenCmd.delay - lines[lines.length - 1].delay));
  await typewrite(hiddenCmd.id, hiddenCmd.text, 45);
}

document.addEventListener('DOMContentLoaded', () => {
  runTerminal();

  // ── Nav active state on scroll ──
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => {
          a.style.color = '';
          if (a.getAttribute('href') === `#${entry.target.id}`) {
            a.style.color = 'var(--accent)';
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));

  // ── Scroll reveal ──
  const revealEls = document.querySelectorAll(
    '.project-card, .blog-card, .link-card, .stat-card, .skill-tag'
  );

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
    revealObserver.observe(el);
  });

  // ── Nav shadow on scroll ──
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 20
      ? '0 1px 0 rgba(0,255,136,0.05)'
      : 'none';
  });
});
