// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back-to-top button functionality
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.id = 'backToTop';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
    padding: 10px 15px;
    font-size: 40px;
    border: none;
    border-radius: 100px;
    background: #409cff;
    color: white;
    cursor: pointer;
    z-index: 1000;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
    transition: all 0.3s;
`;

backToTopButton.setAttribute('aria-label', 'Back to top');
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

backToTopButton.addEventListener('mouseenter', () => {
    backToTopButton.style.transform = 'scale(1.1)';
});

backToTopButton.addEventListener('mouseleave', () => {
    backToTopButton.style.transform = 'scale(1)';
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Media query for responsive design
const style = document.createElement('style');
style.innerHTML = `
    @media (max-width: 768px) {
        #backToTop {
            font-size: 30px;
            bottom: 10px;
            right: 10px;
        }
    }
`;
document.head.appendChild(style);