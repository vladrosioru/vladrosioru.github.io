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
const sections = ['hero','about','experience','skills','education','faq','contact'];
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
  const val = (id) => (document.getElementById(id)?.value || '').trim();

  const first   = val('cf-first');
  const last    = val('cf-last');
  const company = val('cf-company');
  const email   = val('cf-email');
  const role    = val('cf-role');
  const message = val('cf-message');

  const fullName = [first, last].filter(Boolean).join(' ');
  const subject = role
    ? `Opportunity: ${role} — ${fullName}`
    : `Website enquiry — ${fullName}`;

  const body = [
    `Name: ${fullName}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    role ? `Role / Opportunity: ${role}` : null,
    '',
    message
  ].filter((line) => line !== null).join('\n');

  const mailto = `mailto:vlad.rosioru@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const success = document.getElementById('f-success');
  success.style.display = 'block';
  window.location.href = mailto;
  setTimeout(() => { success.style.display = 'none'; }, 6000);
}

// ── Tweaks removed ──