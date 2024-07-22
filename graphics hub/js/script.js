
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Animate the logo
        anime({
            targets: '.logo h2',
            translateY: [-30, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutExpo'
        });

        // Animate the nav items
        anime({
            targets: '.navbar ul li',
            translateY: [-20, 0],
            opacity: [0, 1],
            duration: 800,
            delay: anime.stagger(100, { start: 300 }),
            easing: 'easeOutQuad'
        });

        // Animate the subtitle
        anime({
            targets: '.subtitle-paragraph-btn-part h4',
            translateX: [-30, 0],
            opacity: [0, 1],
            duration: 1000,
            delay: anime.stagger(200, { start: 500 }),
            easing: 'easeOutExpo'
        });

        // Animate the paragraph
        anime({
            targets: '.subtitle-paragraph-btn-part p',
            translateY: [20, 0],
            opacity: [0, 1],
            duration: 1000,
            delay: 1000,
            easing: 'easeOutExpo'
        });

        // Animate the button
        anime({
            targets: '.btn-ordernow',
            scale: [0, 1],
            opacity: [0, 1],
            duration: 800,
            delay: 1300,
            easing: 'easeOutElastic(1, .5)'
        });

        // Animate the main image
        anime({
            targets: '.main-image img',
            translateX: [50, 0],
            opacity: [0, 1],
            duration: 1200,
            delay: 800,
            easing: 'easeOutQuad'
        });

        // Animate Featured Tools
        anime({
            targets: '.tool',
            translateY: [100, 0],
            opacity: [0, 1],
            duration: 1000,
            delay: anime.stagger(200),
            easing: 'easeOutExpo'
        });

           // Animate social icons
    anime({
        targets: '.social-icon__item',
        translateY: [-30, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        duration: 1000,
        easing: 'easeOutElastic(1, .8)'
    });

    // Animate menu items
    anime({
        targets: '.menu__item',
        translateY: [20, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, {start: 500}),
        duration: 800,
        easing: 'easeOutQuad'
    });

    // Animate copyright text
    anime({
        targets: '.footer p',
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad',
        delay: 1000
    });

        console.log('All animations applied successfully');

    } catch (error) {
        console.error('An error occurred in the animation script:', error);
    }


});


