document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');

    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const header = document.querySelector('header');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    console.log('Loading Screen:', loadingScreen);
    console.log('Main Content:', mainContent);
    console.log('Header:', header);

    let lastScrollTop = 0;
    const scrollThreshold = 50;

    function handleHeader() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > scrollThreshold) {
            header.classList.add('expanded');
        } else {
            header.classList.remove('expanded');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }

    function showContent() {
        console.log('Showing content');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.visibility = 'hidden';
        } else {
            console.error('Loading screen not found');
        }
        if (mainContent) {
            mainContent.classList.add('visible');
        } else {
            console.error('Main content not found');
        }
    }

    // Mobile Navigation
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', handleHeader);

    // Initial check in case the page is loaded scrolled down
    handleHeader();

    // Show content after 1/4 second
    setTimeout(showContent, 250);
});
