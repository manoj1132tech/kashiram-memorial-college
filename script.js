document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Marquee Pause on Hover (Automatic control for marquee tag)
    const marquee = document.querySelector('marquee');
    if(marquee) {
        marquee.addEventListener('mouseover', () => marquee.stop());
        marquee.addEventListener('mouseout', () => marquee.start());
    }
});