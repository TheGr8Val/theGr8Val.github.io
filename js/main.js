/* theGr8Val — main.js */

// ── i18n ──
const i18n = {
  en: {
    'nav.about': 'about', 'nav.projects': 'projects', 'nav.blog': 'blog', 'nav.links': 'links',
    'hero.tag': '[ security / ctf / open-source ]',
    'hero.sub': "I break things to understand them.<br>I build things to fix them.<br>I write things so I don't lose my mind.",
    'hero.cta.work': 'view work',
    'about.label': '// 01 — about',
    'about.title': 'not your typical<br><em>security person</em>',
    'about.p1': "I'm Val. I live at the intersection of curiosity and paranoia — which, if you think about it, is exactly where you want your security researcher to be.",
    'about.p2': "CTF competitions are my gym. Open source is my philosophy. Overthinking is my superpower (and my curse). I believe the best way to understand a system is to try to break it — ethically, of course.",
    'about.p3': "When I'm not hunting flags or submitting PRs, I'm probably writing about the thing I just learned, the rabbit hole I fell into, or the tool I built at 2 AM because nothing else did exactly what I needed.",
    'about.stat1': 'CTFs played', 'about.stat2': 'forever', 'about.stat3': 'peak hours', 'about.stat4': 'lines of thought/day',
    'projects.label': '// 02 — projects',
    'projects.title': "things I've built<br><em>& broken</em>",
    'tag.tool': 'tool', 'tag.resource': 'resource', 'tag.challenge': 'challenge',
    'proj.cyberrgb': "Generate your cyberpunk security character card. Pick your role, style, and years in the field — AI writes your lore. Demo mode available, no API key needed.",
    'proj.grimoire': "Curated collection of LLM prompts engineered for cybersecurity practitioners — analysts, threat hunters, detection engineers, and red teamers who want to leverage AI in their daily workflows.",
    'proj.vulnspotter': "Community-driven hands-on challenges to practice spotting vulnerabilities in real-world-style code snippets, cloud configs, network rulesets, and architecture patterns.",
    'proj.kqldojo': "Structured KQL challenges designed for security analysts working in Microsoft Sentinel and Defender environments. Train detection skills through progressive difficulty.",
    'proj.careercompass': "Fully offline interactive terminal tool that helps cybersecurity professionals discover their ideal career path, the certs to get there, and a concrete roadmap — all in under 5 minutes.",
    'proj.link.try': '→ try it live', 'proj.link.source': '→ source',
    'blog.label': '// 03 — blog',
    'blog.title': 'writing things<br><em>down</em>',
    'blog.tag.opinion': 'opinion', 'blog.tag.security': 'security',
    'blog.post1': "AI tools are shifting cybersecurity from skill-based to access-based competition — raising hard questions about what expertise is worth in an automated world.",
    'blog.post2': "Malicious instructions in GitHub PR titles can trigger AI coding agents to leak API keys and credentials — a new attack surface hiding in plain sight inside CI/CD pipelines.",
    'blog.post3': "Autonomous AI chained zero-day exploits across major OSes and browsers — compressing the discovery timeline from months to hours. What that means for defenders.",
    'blog.post4': "33,185 secrets exposed across 6,943 machines through a LiteLLM supply chain attack — a poisoned security scanner in CI/CD lasting just 40 minutes.",
    'blog.read': 'read →',
    'links.label': '// 04 — links',
    'links.title': 'find me<br><em>out there</em>',
    'links.sub': "I'm not everywhere, but I'm somewhere. Links to the places where I actually exist online.",
    'link.github': 'code, tools, writeups',
    'link.medium': 'articles, analysis, opinions',
    'link.coffee': 'if this helped you, fuel the next writeup',
    'link.email': 'for real things worth discussing',
    'link.twitter': 'thoughts, links, live CTF suffering',
    'footer.copy': 'built in the dark. deployed with intent.',
    'footer.src': 'view source →',
  },
  es: {
    'nav.about': 'acerca de', 'nav.projects': 'proyectos', 'nav.blog': 'blog', 'nav.links': 'links',
    'hero.tag': '[ seguridad / ctf / código abierto ]',
    'hero.sub': 'Rompo cosas para entenderlas.<br>Construyo cosas para arreglarlas.<br>Escribo cosas para no perder la cabeza.',
    'hero.cta.work': 'ver proyectos',
    'about.label': '// 01 — acerca de',
    'about.title': 'no soy tu típica<br><em>persona de seguridad</em>',
    'about.p1': 'Soy Val. Vivo en la intersección entre la curiosidad y la paranoia — que, si lo piensas, es exactamente donde quieres que esté tu investigadora de seguridad.',
    'about.p2': 'Los CTFs son mi gimnasio. El open source es mi filosofía. La sobreanálisis es mi superpoder (y mi condena). Creo que la mejor forma de entender un sistema es intentar romperlo — éticamente, claro.',
    'about.p3': 'Cuando no estoy cazando flags o mandando PRs, probablemente estoy escribiendo sobre lo que acabo de aprender, el rabbit hole en el que caí, o la herramienta que construí a las 2 AM porque ninguna otra hacía exactamente lo que necesitaba.',
    'about.stat1': 'CTFs jugados', 'about.stat2': 'siempre', 'about.stat3': 'hora pico', 'about.stat4': 'líneas de pensamiento/día',
    'projects.label': '// 02 — proyectos',
    'projects.title': 'cosas que he construido<br><em>& roto</em>',
    'tag.tool': 'herramienta', 'tag.resource': 'recurso', 'tag.challenge': 'reto',
    'proj.cyberrgb': 'Genera tu tarjeta de personaje de seguridad cyberpunk. Elige tu rol, estilo y años en el campo — la IA escribe tu historia. Modo demo disponible, sin API key.',
    'proj.grimoire': 'Colección curada de prompts para LLMs diseñados para profesionales de ciberseguridad — analistas, threat hunters, ingenieros de detección y red teamers que quieren usar IA en su flujo de trabajo.',
    'proj.vulnspotter': 'Retos prácticos impulsados por la comunidad para practicar la detección de vulnerabilidades en fragmentos de código, configs de nube, reglas de red y patrones de arquitectura.',
    'proj.kqldojo': 'Retos estructurados de KQL para analistas de seguridad en Microsoft Sentinel y Defender. Entrena habilidades de detección con dificultad progresiva.',
    'proj.careercompass': 'Herramienta de terminal interactiva completamente offline que ayuda a profesionales de ciberseguridad a descubrir su carrera ideal, las certificaciones necesarias y un roadmap concreto — en menos de 5 minutos.',
    'proj.link.try': '→ probar en vivo', 'proj.link.source': '→ código fuente',
    'blog.label': '// 03 — blog',
    'blog.title': 'escribiendo<br><em>cosas</em>',
    'blog.tag.opinion': 'opinión', 'blog.tag.security': 'seguridad',
    'blog.post1': 'Las herramientas de IA están cambiando la ciberseguridad de una competencia basada en habilidades a una basada en acceso — planteando preguntas difíciles sobre el valor de la experiencia en un mundo automatizado.',
    'blog.post2': 'Instrucciones maliciosas en títulos de PRs de GitHub pueden hacer que agentes de código IA filtren API keys y credenciales — una nueva superficie de ataque oculta en los pipelines de CI/CD.',
    'blog.post3': 'Una IA autónoma encadenó exploits de zero-day en los principales sistemas operativos y navegadores — comprimiendo el tiempo de descubrimiento de meses a horas. Lo que eso significa para los defensores.',
    'blog.post4': '33,185 secretos expuestos en 6,943 máquinas a través de un ataque a la cadena de suministro de LiteLLM — un escáner de seguridad envenenado en CI/CD que duró solo 40 minutos.',
    'blog.read': 'leer →',
    'links.label': '// 04 — links',
    'links.title': 'encuéntrame<br><em>por ahí</em>',
    'links.sub': 'No estoy en todos lados, pero estoy en alguno. Links a los lugares donde realmente existo en línea.',
    'link.github': 'código, herramientas, writeups',
    'link.medium': 'artículos, análisis, opiniones',
    'link.coffee': 'si esto te ayudó, dale combustible al próximo writeup',
    'link.email': 'para cosas reales que valen la pena discutir',
    'link.twitter': 'pensamientos, links, sufrimiento en vivo en CTFs',
    'footer.copy': 'construido en la oscuridad. desplegado con intención.',
    'footer.src': 'ver código →',
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang][key] !== undefined) el.innerHTML = i18n[lang][key];
  });
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'en' ? 'ES' : 'EN';
}

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
  // apply saved language
  setLang(currentLang);

  // lang toggle button
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) langBtn.addEventListener('click', () => setLang(currentLang === 'en' ? 'es' : 'en'));

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
      ? '0 1px 0 rgba(168,85,247,0.12)'
      : 'none';
  });
});
