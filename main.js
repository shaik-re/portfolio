// Navbar Toggle Functionality
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle navbar visibility on menu icon click
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-xmark'); // Change menu icon to 'X' on toggle
    navbar.classList.toggle('active');    // Show/hide the navbar
});

// Ensure navbar is hidden when resizing to larger screens
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navbar.classList.remove('active');       // Hide navbar
        menuIcon.classList.remove('fa-xmark');  // Reset to hamburger icon
    }
});

// ScrollReveal Animations
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

// Typed.js Implementation
const typed = new Typed('.multiple-text', {
    strings: ['FullStack Developer', 'Frontend Developer', 'Java Developer', 'SQL'], // Dynamic text
    typeSpeed: 70,   // Typing speed
    backSpeed: 70,   // Backspacing speed
    backDelay: 1000, // Delay before typing again
    loop: true       // Infinite loop
});
