// Reveal on scroll
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('show');
        io.unobserve(e.target);
      }
    });
  }, {threshold: 0.12});
  reveals.forEach(r => io.observe(r));

  // Guiding SVG path animation
  const path = document.getElementById('guidePath');
  if (path) {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    const updatePath = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = Math.min(1, Math.max(0, scrollTop / (docHeight || 1)));
      path.style.strokeDashoffset = Math.round(length * (1 - pct));
    };

    updatePath();
    window.addEventListener('scroll', () => requestAnimationFrame(updatePath));
    window.addEventListener('resize', () => requestAnimationFrame(updatePath));
  }

  // CTA hover invert on "media" placeholder (example of microinteraction)
  const heroMedia = document.querySelector('.hero-media');
  const primaryCTA = document.querySelector('.btn.primary');
  heroMedia && heroMedia.addEventListener('mouseenter', () => {
    primaryCTA.style.background = '#fff';
    primaryCTA.style.color = 'var(--accent)';
    primaryCTA.style.border = '1px solid var(--accent)';
  });
  heroMedia && heroMedia.addEventListener('mouseleave', () => {
    primaryCTA.style.background = 'var(--accent)';
    primaryCTA.style.color = '#fff';
  });
});
