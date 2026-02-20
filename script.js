// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const offsetTop = target.offsetTop - 80; // Account for sticky nav
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const menuWrapper = document.querySelector('.nav-menu-wrapper');
                    const burgerButton = document.querySelector('.nav-burger');
                    if (menuWrapper && menuWrapper.classList.contains('state-opened-menu')) {
                        menuWrapper.classList.remove('state-opened-menu');
                        burgerButton.classList.remove('state-active-burger');
                        document.body.classList.remove('state-fixed-body');
                    }
                }
            }
        });
    });
    
    // Hamburger Menu Toggle Functionality
    const burgerButtons = document.querySelectorAll('.js-open-menu');
    const body = document.body;
    
    burgerButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const menuWrapper = this.closest('.js-menu');
            
            if (this.classList.contains('state-active-burger')) {
                // Close menu
                menuWrapper.classList.remove('state-opened-menu');
                this.classList.remove('state-active-burger');
                body.classList.remove('state-fixed-body');
            } else {
                // Open menu
                menuWrapper.classList.add('state-opened-menu');
                this.classList.add('state-active-burger');
                body.classList.add('state-fixed-body');
            }
        });
    });
    
    // Close menu when clicking outside (on mobile)
    document.addEventListener('click', function(e) {
        const menuWrapper = document.querySelector('.nav-menu-wrapper');
        const burgerButton = document.querySelector('.nav-burger');
        
        if (menuWrapper && menuWrapper.classList.contains('state-opened-menu')) {
            // Check if click is outside the menu
            if (!menuWrapper.contains(e.target) && !burgerButton.contains(e.target)) {
                menuWrapper.classList.remove('state-opened-menu');
                burgerButton.classList.remove('state-active-burger');
                body.classList.remove('state-fixed-body');
            }
        }
    });
});
