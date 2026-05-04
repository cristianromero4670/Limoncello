// Animación de entrada con intersección para mantener un efecto suave y progresivo.
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14,
    rootMargin: '0px 0px -8% 0px'
  }
);

revealElements.forEach((el, index) => {
  // Pequeño delay escalonado para dar más sensación de ritmo visual.
  el.style.transitionDelay = `${index * 70}ms`;
  observer.observe(el);
});
