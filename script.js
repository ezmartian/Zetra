document.getElementById('year').textContent = new Date().getFullYear();

// Dummy submit handler
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  alert('Thanks! We will contact you within 1 business day.');
  console.log('Lead:', data);
  form.reset();
});
