// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});

// Burger Menu Functionality
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

// Optional: Smooth scrolling for same-page links (already in CSS)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});