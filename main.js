/* =============================================
   ZANINO — main.js
   ============================================= */

// NAV scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
// Close on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Projects filter and gallery
const projectData = [
  { src: '../imagenes/cocinas/WhatsApp%20Image%202026-06-28%20at%2017.07.02%20(1).jpeg', alt: 'Cocina', cat: 'cocina', label: 'Cocina', title: 'Cocina · Proyecto 1' },
  { src: '../imagenes/cocinas/WhatsApp%20Image%202026-06-28%20at%2017.09.22%20(4).jpeg', alt: 'Cocina', cat: 'cocina', label: 'Cocina', title: 'Cocina · Proyecto 2' },
  { src: '../imagenes/cocinas/WhatsApp%20Image%202026-06-28%20at%2017.09.23%20(3).jpeg', alt: 'Cocina', cat: 'cocina', label: 'Cocina', title: 'Cocina · Proyecto 5' },
  { src: '../imagenes/cocinas/WhatsApp%20Image%202026-06-28%20at%2017.09.24%20(1).jpeg', alt: 'Cocina', cat: 'cocina', label: 'Cocina', title: 'Cocina · Proyecto 8' },
  { src: '../imagenes/cocinas/WhatsApp%20Image%202026-06-28%20at%2017.09.24%20(4).jpeg', alt: 'Cocina', cat: 'cocina', label: 'Cocina', title: 'Cocina · Proyecto 11' },
  { src: '../imagenes/cocinas/WhatsApp%20Image%202026-06-28%20at%2017.09.25.jpeg', alt: 'Cocina', cat: 'cocina', label: 'Cocina', title: 'Cocina · Proyecto 13' },
  { src: '../imagenes/cocinas/WhatsApp%20Image%202026-06-28%20at%2017.09.27%20(2).jpeg', alt: 'Cocina', cat: 'cocina', label: 'Cocina', title: 'Cocina · Proyecto 14' },
  { src: '../imagenes/cocinas/WhatsApp%20Image%202026-06-28%20at%2017.09.27%20(3).jpeg', alt: 'Cocina', cat: 'cocina', label: 'Cocina', title: 'Cocina · Proyecto 15' },
  { src: '../imagenes/placares/WhatsApp%20Image%202026-06-28%20at%2017.07.07.jpeg', alt: 'Placard', cat: 'placard', label: 'Placard', title: 'Placard · Proyecto 1' },
  { src: '../imagenes/placares/WhatsApp%20Image%202026-06-28%20at%2017.07.08%20(1).jpeg', alt: 'Placard', cat: 'placard', label: 'Placard', title: 'Placard · Proyecto 2' },
  { src: '../imagenes/placares/WhatsApp%20Image%202026-06-28%20at%2017.07.08%20(2).jpeg', alt: 'Placard', cat: 'placard', label: 'Placard', title: 'Placard · Proyecto 3' },
  { src: '../imagenes/placares/WhatsApp%20Image%202026-06-28%20at%2017.07.08%20(3).jpeg', alt: 'Placard', cat: 'placard', label: 'Placard', title: 'Placard · Proyecto 4' },
  { src: '../imagenes/placares/WhatsApp%20Image%202026-06-28%20at%2017.07.08.jpeg', alt: 'Placard', cat: 'placard', label: 'Placard', title: 'Placard · Proyecto 5' },
  { src: '../imagenes/placares/WhatsApp%20Image%202026-06-28%20at%2017.07.38.jpeg', alt: 'Placard', cat: 'placard', label: 'Placard', title: 'Placard · Proyecto 7' },
  { src: '../imagenes/placares/WhatsApp%20Image%202026-06-28%20at%2017.07.39%20(1).jpeg', alt: 'Placard', cat: 'placard', label: 'Placard', title: 'Placard · Proyecto 8' },
  { src: '../imagenes/placares/WhatsApp%20Image%202026-06-28%20at%2017.09.02.jpeg', alt: 'Placard', cat: 'placard', label: 'Placard', title: 'Placard · Proyecto 11' },
  { src: '../imagenes/placares/WhatsApp%20Image%202026-06-28%20at%2017.09.25%20(1).jpeg', alt: 'Placard', cat: 'placard', label: 'Placard', title: 'Placard · Proyecto 12' },
  { src: '../imagenes/placares/WhatsApp%20Image%202026-06-28%20at%2017.09.25%20(2).jpeg', alt: 'Placard', cat: 'placard', label: 'Placard', title: 'Placard · Proyecto 13' },
  { src: '../imagenes/placares/WhatsApp%20Image%202026-06-28%20at%2017.09.26%20(1).jpeg', alt: 'Placard', cat: 'placard', label: 'Placard', title: 'Placard · Proyecto 14' },
  { src: '../imagenes/placares/WhatsApp%20Image%202026-06-28%20at%2017.09.26%20(2).jpeg', alt: 'Placard', cat: 'placard', label: 'Placard', title: 'Placard · Proyecto 15' },
  { src: '../imagenes/placares/WhatsApp%20Image%202026-06-28%20at%2017.09.26%20(3).jpeg', alt: 'Placard', cat: 'placard', label: 'Placard', title: 'Placard · Proyecto 16' },
  { src: '../imagenes/placares/WhatsApp%20Image%202026-06-28%20at%2017.09.26%20(4).jpeg', alt: 'Placard', cat: 'placard', label: 'Placard', title: 'Placard · Proyecto 17' },
  { src: '../imagenes/placares/WhatsApp%20Image%202026-06-28%20at%2017.09.27%20(1).jpeg', alt: 'Placard', cat: 'placard', label: 'Placard', title: 'Placard · Proyecto 18' },
  { src: '../imagenes/placares/WhatsApp%20Image%202026-06-28%20at%2017.09.28%20(4).jpeg', alt: 'Placard', cat: 'placard', label: 'Placard', title: 'Placard · Proyecto 19' },
  { cat: 'living', label: 'Living', title: 'Living · Proyectos 5 y 9', layout: 'stacked', images: [
    { src: '../imagenes/livings/WhatsApp%20Image%202026-06-28%20at%2017.09.16.jpeg', alt: 'Living' },
    { src: '../imagenes/livings/WhatsApp%20Image%202026-06-28%20at%2017.09.18%20(2).jpeg', alt: 'Living' }
  ] },
  { src: '../imagenes/livings/WhatsApp%20Image%202026-06-28%20at%2017.09.19%20(1).jpeg', alt: 'Living', cat: 'living', label: 'Living', title: 'Living · Proyecto 13' },
  { src: '../imagenes/livings/WhatsApp%20Image%202026-06-28%20at%2017.09.19%20(2).jpeg', alt: 'Living', cat: 'living', label: 'Living', title: 'Living · Proyecto 14', orientation: 'vertical' },
  { src: '../imagenes/livings/WhatsApp%20Image%202026-06-28%20at%2017.09.19%20(3).jpeg', alt: 'Living', cat: 'living', label: 'Living', title: 'Living · Proyecto 15', orientation: 'vertical' },
  { src: '../imagenes/livings/WhatsApp%20Image%202026-06-28%20at%2017.09.27%20(4).jpeg', alt: 'Living', cat: 'living', label: 'Living', title: 'Living · Proyecto 26', orientation: 'vertical' },
  { src: '../imagenes/baños/WhatsApp%20Image%202026-06-28%20at%2017.07.03.jpeg', alt: 'Baño', cat: 'bano', label: 'Baño', title: 'Baño · Proyecto 3' },
  { src: '../imagenes/baños/WhatsApp%20Image%202026-06-28%20at%2017.09.27.jpeg', alt: 'Baño', cat: 'bano', label: 'Baño', title: 'Baño · Proyecto 4' },
  { src: '../imagenes/otros/WhatsApp%20Image%202026-06-28%20at%2017.07.02.jpeg', alt: 'Otro proyecto', cat: 'otros', label: 'Otros', title: 'Otros · Proyecto 1' },
  { src: '../imagenes/otros/WhatsApp%20Image%202026-06-28%20at%2017.09.21%20(3).jpeg', alt: 'Otro proyecto', cat: 'otros', label: 'Otros', title: 'Otros · Proyecto 2' },
  { src: '../imagenes/otros/WhatsApp%20Image%202026-06-28%20at%2017.09.21%20(4).jpeg', alt: 'Otro proyecto', cat: 'otros', label: 'Otros', title: 'Otros · Proyecto 3' },
  { src: '../imagenes/otros/WhatsApp%20Image%202026-06-28%20at%2017.09.22%20(1).jpeg', alt: 'Otro proyecto', cat: 'otros', label: 'Otros', title: 'Otros · Proyecto 4' },
  { src: '../imagenes/otros/WhatsApp%20Image%202026-06-28%20at%2017.09.22%20(2).jpeg', alt: 'Otro proyecto', cat: 'otros', label: 'Otros', title: 'Otros · Proyecto 5' },
  { src: '../imagenes/otros/WhatsApp%20Image%202026-06-28%20at%2017.09.22%20(3).jpeg', alt: 'Otro proyecto', cat: 'otros', label: 'Otros', title: 'Otros · Proyecto 6' }
];

function renderProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  if (!projectsGrid) return;

  projectsGrid.innerHTML = projectData.map((project, index) => {
    const largeClass = index % 6 === 0 ? ' large' : '';
    const orientationClass = project.orientation ? ` project-${project.orientation}` : '';
    const layoutClass = project.layout ? ` project-${project.layout}` : '';
    const cardClass = project.cardClass ? ` ${project.cardClass}` : '';
    const imageStyle = project.imageStyle ? ` style="${project.imageStyle}"` : '';
    const mediaContent = project.images
      ? `
        <div class="project-images project-images--stacked">
          ${project.images.map(image => `<img src="${image.src}" alt="${image.alt}" loading="lazy" />`).join('')}
        </div>
      `
      : `<img src="${project.src}" alt="${project.alt}" loading="lazy"${imageStyle} />`;

    return `
      <div class="project-item${largeClass}${orientationClass}${layoutClass}${cardClass}" data-cat="${project.cat}">
        ${mediaContent}
        <div class="project-overlay">
          <span class="project-cat">${project.label}</span>
          <h3>${project.title}</h3>
        </div>
      </div>`;
  }).join('');
}

function updateProjectGridLayout(filter) {
  const projectsGrid = document.getElementById('projectsGrid');
  if (!projectsGrid) return;

  projectsGrid.classList.toggle('projects-grid--living', filter === 'living');
  projectsGrid.classList.toggle('projects-grid--bano', filter === 'bano');
  projectsGrid.classList.toggle('projects-grid--otros', filter === 'otros');
}

const filterBtns = document.querySelectorAll('.filter-btn');

renderProjects();
const projectItems = document.querySelectorAll('.project-item');

function applyFilter(filter) {
  filterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === filter));

  projectItems.forEach(item => {
    const match = item.dataset.cat === filter;
    item.classList.toggle('hidden', !match);
    if (filter !== 'all') {
      item.classList.remove('large');
    } else if (item.dataset.large) {
      item.classList.add('large');
    }
  });

  updateProjectGridLayout(filter);
}

applyFilter('cocina');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    applyFilter(btn.dataset.filter);
  });
});

projectItems.forEach(item => {
  if (item.classList.contains('large')) item.dataset.large = 'true';
});

// Testimonials slider
const slides = document.querySelectorAll('.testimonial-slide');
const dots   = document.querySelectorAll('.dot');
let currentSlide = 0;
let autoSlide;

function goToSlide(idx) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = idx;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function startAuto() {
  autoSlide = setInterval(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, 5000);
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(autoSlide);
    goToSlide(parseInt(dot.dataset.idx));
    startAuto();
  });
});
startAuto();

// Scroll reveal
const revealEls = document.querySelectorAll(
  '.service-card, .material-card, .process-step, .about-grid, .project-item, .stat'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity 0.6s ease ${(i % 4) * 0.08}s, transform 0.6s ease ${(i % 4) * 0.08}s`;
  observer.observe(el);
});

// Contact form
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('button[type="submit"]');
  btn.textContent = 'Enviando...';
  btn.disabled = true;

  // Simulate send (replace with real endpoint later)
  setTimeout(() => {
    contactForm.querySelectorAll('input, select, textarea').forEach(el => el.value = '');
    btn.textContent = 'Enviar consulta';
    btn.disabled = false;
    formSuccess.classList.add('show');
    setTimeout(() => formSuccess.classList.remove('show'), 6000);
  }, 1200);
});

// Smooth active nav link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--cream)' : '';
  });
}, { passive: true });
