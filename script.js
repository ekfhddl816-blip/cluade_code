// Scroll-triggered fade-in
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, i * 80);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.project-card, .skill-card, .about-text, .about-tags, .tag').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Navbar opacity on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.background = window.scrollY > 60
        ? 'rgba(255, 255, 255, 0.7)'
        : 'rgba(255, 255, 255, 0.45)';
});

// Smooth active link highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const linkObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.style.color = link.getAttribute('href') === `#${entry.target.id}`
                    ? 'var(--text-dark)'
                    : '';
            });
        }
    });
}, { threshold: 0.5 });

sections.forEach(s => linkObserver.observe(s));
