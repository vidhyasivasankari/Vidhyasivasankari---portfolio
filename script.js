// JavaScript Controls - VIDHYASIVASANKARI D Portfolio

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const header = document.getElementById('header');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // 1. Scroll Event for Header State Transition
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Nav Drawer Toggle
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            const isActive = navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
            
            // Prevent body scroll when menu is active
            if (isActive) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // 3. Navigation Links Interaction
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Close mobile menu when a nav link is selected
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // 4. Auto-Collapse Mobile Menu on Screen Resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
});
