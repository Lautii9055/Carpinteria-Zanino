/* =============================================
   ZANINO — main.js
   ============================================= */

const WHATSAPP = '5491151567030';
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- NAV ---------- */
const navbar = document.getElementById('navbar');
const onScrollNav = () => navbar.classList.toggle('scrolled', window.scrollY > 60);
window.addEventListener('scroll', onScrollNav, { passive: true });
onScrollNav();

const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

function setMenu(open) {
  navLinks.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  document.body.classList.toggle('menu-open', open);
}
navToggle.addEventListener('click', () => setMenu(!navLinks.classList.contains('open')));
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navLinks.classList.contains('open')) { setMenu(false); navToggle.focus(); }
});

/* ---------- TRABAJOS ----------
   Para agregar una foto: exportala a img/trabajos/ (grande) e img/thumbs/ (chica),
   y sumá una línea acá con su categoría y una descripción (alt) de lo que se ve. */
const CATEGORY_LABELS = {"cocina": "Cocina", "living": "Living", "vestidor": "Vestidor", "placard": "Placard", "escritorio": "Oficina", "bano": "Baño", "otros": "Otros"};

const PROJECTS = [
  { cat: 'cocina', file: 'cocina-negra-isla-vista-laguna', w: 1200, h: 1600, alt: 'Cocina a medida en negro con mesada oscura y vista a la laguna' },
  { cat: 'cocina', file: 'cocina-negra-columna-heladera', w: 1600, h: 1200, alt: 'Cocina negra con columna para heladera y vitrina iluminada' },
  { cat: 'cocina', file: 'cocina-isla-mesada-blanca', w: 1200, h: 1600, alt: 'Cocina verde salvia: isla con mesada blanca y base de madera' },
  { cat: 'cocina', file: 'cocina-hornos-empotrados-nicho-madera', w: 1200, h: 1600, alt: 'Cocina verde salvia: anafe en la isla, hornos empotrados y nicho de madera iluminado' },
  { cat: 'cocina', file: 'cocina-verde-salvia-columna-heladera', w: 1200, h: 1600, alt: 'Cocina verde salvia: columna de heladera y muebles laterales' },
  { cat: 'cocina', file: 'cocina-blanca-heladeras-dobles', w: 1200, h: 1600, alt: 'Cocina blanca con columnas para heladeras dobles y vitrina de madera' },
  { cat: 'living', file: 'living-rack-hogar-bibliotecas', w: 1600, h: 900, alt: 'Rack de living con hogar y bibliotecas laterales iluminadas en madera' },
  { cat: 'living', file: 'biblioteca-madera-nichos', w: 1200, h: 1600, alt: 'Biblioteca de madera a medida con nichos de distintos tamaños' },
  { cat: 'living', file: 'panel-madera-estante-iluminado', w: 1200, h: 1600, alt: 'Panel de madera con estantería iluminada con LED junto al hogar' },
  { cat: 'living', file: 'rack-tv-bibliotecas-madera', w: 1200, h: 1600, alt: 'Mueble de TV con bibliotecas de madera a ambos lados' },
  { cat: 'living', file: 'living-integrado-muebles-madera', w: 1600, h: 900, alt: 'Living integrado con muebles de madera a medida y vista a la laguna' },
  { cat: 'vestidor', file: 'vestidor-puertas-vidrio-iluminado', w: 1200, h: 1600, alt: 'Vestidor con puertas de vidrio y cajonera iluminada' },
  { cat: 'vestidor', file: 'vestidor-iluminacion-calida', w: 1200, h: 1600, alt: 'Vestidor con iluminación LED cálida y estantes de madera' },
  { cat: 'vestidor', file: 'vestidor-blanco-tocador', w: 1200, h: 1600, alt: 'Vestidor blanco con tocador flotante y espejo' },
  { cat: 'vestidor', file: 'vestidor-gris-cajoneras', w: 1200, h: 1600, alt: 'Vestidor en gris con cajoneras y perfiles iluminados' },
  { cat: 'vestidor', file: 'mueble-tv-blanco-dormitorio', w: 1600, h: 1200, alt: 'Mueble de TV blanco lacado con estantes y cajones para dormitorio' },
  { cat: 'placard', file: 'placard-gris-puertas-batientes', w: 1200, h: 1600, alt: 'Placard gris con puertas batientes y tiradores negros' },
  { cat: 'placard', file: 'placard-con-biblioteca', w: 1200, h: 1600, alt: 'Placard a medida combinado con biblioteca de madera' },
  { cat: 'placard', file: 'placard-puertas-lisas', w: 1200, h: 1600, alt: 'Placard de puertas lisas de piso a techo' },
  { cat: 'placard', file: 'vitrina-negra-puertas-vidrio', w: 1200, h: 1600, alt: 'Vitrina negra con puertas de vidrio y base con puertas' },
  { cat: 'escritorio', file: 'oficina-escritorio-madera-biblioteca', w: 1200, h: 1600, alt: 'Oficina con escritorio de madera y biblioteca metálica negra' },
  { cat: 'escritorio', file: 'biblioteca-iluminada-oficina', w: 1200, h: 1600, alt: 'Biblioteca iluminada con puertas en negro para oficina' },
  { cat: 'escritorio', file: 'estanteria-negra-sobre-madera', w: 1200, h: 1600, alt: 'Estantería negra sobre panel de madera en oficina' },
  { cat: 'escritorio', file: 'escritorio-madera-home-office', w: 1200, h: 1600, alt: 'Escritorio de madera para home office con cajonera y estantería' },
  { cat: 'escritorio', file: 'mesa-trabajo-estantes-iluminados', w: 1200, h: 1600, alt: 'Mesa de trabajo con estantes flotantes iluminados' },
  { cat: 'escritorio', file: 'escritorio-azul-gris-estudio', w: 1200, h: 1600, alt: 'Escritorio a medida en azul y gris con estantes' },
  { cat: 'bano', file: 'vanitory-madera-piedra', w: 1200, h: 1600, alt: 'Vanitory con bacha de apoyo y estante de madera' },
  { cat: 'bano', file: 'vanitory-doble-blanco', w: 1200, h: 1600, alt: 'Vanitory doble blanco con marco de madera' },
  { cat: 'otros', file: 'mueble-cafetera-nicho-madera', w: 1200, h: 1600, alt: 'Mueble cafetero con nicho de madera en cocina' },
  { cat: 'otros', file: 'revestimiento-madera-galeria', w: 1200, h: 1600, alt: 'Galería con techo revestido en madera y hogar de piedra' },
  { cat: 'otros', file: 'banco-madera-ventana', w: 1200, h: 1600, alt: 'Banco de madera junto a ventana con base de piedra' },
  { cat: 'otros', file: 'galeria-exterior-madera', w: 1200, h: 1600, alt: 'Galería exterior con revestimiento de madera' }
];

const grid = document.getElementById('projectsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const filterStatus = document.getElementById('filterStatus');
let visible = [];

const isWide = p => p.w > p.h;
const gridCols = () => (window.matchMedia('(max-width: 768px)').matches ? 2 : 3);

/* Ordena las fotos para que cada fila quede completa:
   las horizontales ocupan 2 columnas y las verticales 1. */
function packRows(list, cols) {
  const queue = [...list];
  const out = [];
  let free = cols;
  while (queue.length) {
    let i = queue.findIndex(p => (isWide(p) ? 2 : 1) <= free);
    if (i === -1) { free = cols; i = 0; }  // no entra nada: arranca fila nueva
    const [p] = queue.splice(i, 1);
    out.push(p);
    free -= isWide(p) ? 2 : 1;
    if (free <= 0) free = cols;
  }
  return out;
}

let currentFilter = 'cocina';
let currentCols = gridCols();

function renderProjects(filter) {
  currentFilter = filter;
  const list = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === filter);
  visible = packRows(list, currentCols);
  grid.innerHTML = visible.map((p, i) => `
    <figure class="project-item${isWide(p) ? ' is-wide' : ''}">
      <button type="button" class="project-open" data-index="${i}" aria-label="Ampliar: ${p.alt}">
        <img src="img/thumbs/${p.file}.webp" width="${p.w}" height="${p.h}" loading="lazy" decoding="async" alt="${p.alt}" />
        <span class="project-overlay" aria-hidden="true">
          <span class="project-cat">${CATEGORY_LABELS[p.cat]}</span>
          <span class="project-title">${p.alt}</span>
        </span>
      </button>
    </figure>`).join('');

  filterBtns.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.filter === filter)));
  const label = filter === 'all' ? 'todos los trabajos' : CATEGORY_LABELS[filter].toLowerCase();
  filterStatus.textContent = `Mostrando ${visible.length} fotos de ${label}.`;
}

filterBtns.forEach(btn => btn.addEventListener('click', () => renderProjects(btn.dataset.filter)));
grid.addEventListener('click', e => {
  const btn = e.target.closest('.project-open');
  if (btn) openLightbox(Number(btn.dataset.index), btn);
});
renderProjects('cocina');
window.addEventListener('resize', () => {
  if (gridCols() !== currentCols) { currentCols = gridCols(); renderProjects(currentFilter); }
});

/* ---------- VISOR DE FOTOS (accesible con teclado) ---------- */
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCaption = document.getElementById('lbCaption');
const lbClose = document.getElementById('lbClose');
let lbIndex = 0;
let lbReturnFocus = null;

function showLightbox(i) {
  lbIndex = (i + visible.length) % visible.length;
  const p = visible[lbIndex];
  lbImg.src = `img/trabajos/${p.file}.webp`;
  lbImg.alt = p.alt;
  lbCaption.textContent = `${p.alt} — ${lbIndex + 1} de ${visible.length}`;
}
function openLightbox(i, trigger) {
  lbReturnFocus = trigger;
  showLightbox(i);
  lb.hidden = false;
  document.body.classList.add('menu-open');
  lbClose.focus();
}
function closeLightbox() {
  lb.hidden = true;
  document.body.classList.remove('menu-open');
  if (lbReturnFocus) lbReturnFocus.focus();
}
lbClose.addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', () => showLightbox(lbIndex - 1));
document.getElementById('lbNext').addEventListener('click', () => showLightbox(lbIndex + 1));
lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
document.addEventListener('keydown', e => {
  if (lb.hidden) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') showLightbox(lbIndex - 1);
  if (e.key === 'ArrowRight') showLightbox(lbIndex + 1);
  if (e.key === 'Tab') { // mantener el foco dentro del visor
    const f = [...lb.querySelectorAll('button')];
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

/* ---------- APARICIÓN AL HACER SCROLL ---------- */
if (!prefersReduced && 'IntersectionObserver' in window) {
  const revealEls = document.querySelectorAll('.service-card, .material-card, .process-step, .about-grid, .stat');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 4) * 0.08}s`;
    observer.observe(el);
  });
}

/* ---------- VOLVER ARRIBA ---------- */
const scrollTopBtn = document.getElementById('scrollTop');
const toggleScrollTop = () => scrollTopBtn.classList.toggle('show', window.scrollY > 600);
window.addEventListener('scroll', toggleScrollTop, { passive: true });
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
  document.getElementById('inicio').focus?.();
});
toggleScrollTop();

/* ---------- FORMULARIO → WHATSAPP ---------- */
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

function setError(field, msg) {
  const el = document.getElementById(`${field.id}-error`);
  if (el) el.textContent = msg || '';
  field.setAttribute('aria-invalid', msg ? 'true' : 'false');
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const { nombre, zona, tipo, mensaje } = form.elements;
  const checks = [
    [nombre, nombre.value.trim().length >= 2, 'Ingresá tu nombre.'],
    [zona, zona.value.trim().length >= 2, 'Indicá tu localidad o barrio.'],
    [mensaje, mensaje.value.trim().length >= 10, 'Contanos un poco más sobre el proyecto.']
  ];
  let firstInvalid = null;
  checks.forEach(([field, ok, msg]) => {
    setError(field, ok ? '' : msg);
    if (!ok && !firstInvalid) firstInvalid = field;
  });
  if (firstInvalid) {
    formStatus.textContent = 'Revisá los campos marcados.';
    firstInvalid.focus();
    return;
  }

  const text = [
    `Hola Zanino, soy ${nombre.value.trim()} (${zona.value.trim()}).`,
    tipo.value ? `Consulta por: ${tipo.value}.` : '',
    '',
    mensaje.value.trim()
  ].filter((line, i) => line !== '' || i === 2).join('\n');

  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  formStatus.textContent = '¡Listo! Se abrió WhatsApp con tu consulta. Solo tenés que tocar "Enviar".';
  form.reset();
});

/* ---------- LINK ACTIVO EN EL MENÚ ---------- */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => { if (window.scrollY >= sec.offsetTop - 120) current = sec.id; });
  navAnchors.forEach(a => {
    const active = a.getAttribute('href') === `#${current}`;
    a.classList.toggle('is-active', active);
    if (active) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
  });
}, { passive: true });
