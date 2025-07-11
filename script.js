document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Form submitted! You can wire this up to any email or API service.');
      form.reset();
    });
  });