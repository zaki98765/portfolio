// Contact form: validates locally, then opens the visitor's email client.
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
const emailAddress = 'zakic.t9876@gmail.com';

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const data = new FormData(contactForm);
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const subject = String(data.get('subject') || '').trim();
  const message = String(data.get('message') || '').trim();
  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  const mailto = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  formNote.textContent = 'Opening your email app. Review the message and press Send there.';
  window.location.href = mailto;
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Close the mobile navigation after a section link is selected.
document.querySelectorAll('#mainNav .nav-link, #mainNav .nav-cta').forEach((link) => {
  link.addEventListener('click', () => {
    const nav = document.getElementById('mainNav');
    if (nav?.classList.contains('show') && window.bootstrap) {
      window.bootstrap.Collapse.getOrCreateInstance(nav).hide();
    }
  });
});
