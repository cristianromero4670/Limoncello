const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.14,
    rootMargin: '0px 0px -6% 0px'
  }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${index * 90}ms`;
  revealObserver.observe(item);
});

window.addEventListener('load', () => {
  document.body.classList.add('page-loaded');
});
