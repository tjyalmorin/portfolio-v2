// Scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        if (target === '#introduction') {
            // Close mobile menu if open
            const nav = document.querySelector('nav');
            nav.classList.remove('mobile-open');
        }
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const nav = document.querySelector('nav');
const menuToggle = document.createElement('button');
menuToggle.className = 'menu-toggle';
menuToggle.innerHTML = '☰';
menuToggle.setAttribute('aria-label', 'Toggle menu');

nav.insertBefore(menuToggle, nav.firstChild);

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('mobile-open');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
        nav.classList.remove('mobile-open');
    }
});

// Scroll to top button 
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = `
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
    </svg>
`;
backToTopButton.id = 'backToTop';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    display: none;
    width: 45px;
    height: 45px;
    border: none;
    border-radius: 50%;
    background: #ffffff;
    color: #000000;
    cursor: pointer;
    z-index: 1000;
    transition: all 0.3s;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
`;

backToTopButton.setAttribute('aria-label', 'Back to top');
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

backToTopButton.addEventListener('mouseenter', () => {
    backToTopButton.style.transform = 'translateY(-5px)';
    backToTopButton.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
});

backToTopButton.addEventListener('mouseleave', () => {
    backToTopButton.style.transform = 'translateY(0)';
    backToTopButton.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Media query 
const style = document.createElement('style');
style.innerHTML = `
    @media (max-width: 768px) {
        #backToTop {
            width: 40px;
            height: 40px;
            bottom: 20px;
            right: 20px;
        }
        #backToTop svg {
            width: 18px;
            height: 18px;
        }
    }
`;
document.head.appendChild(style);

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        } else {
            entry.target.classList.remove('is-visible');
        }
    });
}, observerOptions);

// Observe all fade-in sections
document.querySelectorAll('.fade-in-section, .stagger-children').forEach(el => {
    observer.observe(el);
});