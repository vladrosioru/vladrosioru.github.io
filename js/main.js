// ── Reveal on scroll ──
const revealEls = document.querySelectorAll('.reveal');
const revealIo = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('on');
      e.target.querySelectorAll('.s-fill').forEach(b => b.classList.add('on'));
      revealIo.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
revealEls.forEach(el => revealIo.observe(el));

// Skill bars triggered from section
const skillsSection = document.getElementById('skills');
const skillIo = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    document.querySelectorAll('.s-fill').forEach(b => b.classList.add('on'));
    skillIo.unobserve(skillsSection);
  }
}, { threshold: 0.1 });
skillIo.observe(skillsSection);

// ── Accordion ──
function toggleGroup(header) {
  const group = header.closest('.tl-group');
  const isOpen = group.classList.contains('open');
  group.classList.toggle('open', !isOpen);
  header.querySelector('.tl-toggle').textContent = isOpen ? '▼' : '▲';
}

// ── Nav active ──
const sections = ['hero','about','experience','skills','education','contact'];
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 130) cur = id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
  });
}, { passive: true });

// ── Form ──
function handleSubmit(e) {
  e.preventDefault();
  const success = document.getElementById('f-success');
  success.style.display = 'block';
  e.target.reset();
  setTimeout(() => { success.style.display = 'none'; }, 4000);
}

// ── Tweaks removed ──