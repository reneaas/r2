document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a.reference.external[href*="/_static/munchboka/notebook/"]').forEach((link) => {
    link.target = '_blank';
    link.rel = 'noopener';
  });
});