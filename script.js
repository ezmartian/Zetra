document.getElementById('year').textContent = new Date().getFullYear();

// Lead handler: mailto fallback; upgrade to Telegram bot or EmailJS when keys are provided.
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  // If EmailJS is configured
  if (window.emailjs && window.EMAILJS_SERVICE && window.EMAILJS_TEMPLATE && window.EMAILJS_PUBLIC_KEY) {
    emailjs.init(window.EMAILJS_PUBLIC_KEY);
    emailjs.send(window.EMAILJS_SERVICE, window.EMAILJS_TEMPLATE, data)
      .then(()=> alert('Thanks! We will contact you within 1 business day.'))
      .catch(()=> alert('Sent via email fallback.'));
    form.reset();
    return;
  }
  // Mailto fallback
  const body = encodeURIComponent(`Company: ${data.company}\nName: ${data.name}\nPhone/Telegram: ${data.phone}\nEmail: ${data.email}\nNeeds: ${data.needs}`);
  window.location.href = `mailto:hello@zetra.local?subject=New audit request&body=${body}`;
  form.reset();
});
