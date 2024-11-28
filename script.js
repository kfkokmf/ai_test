document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    function showContent() {
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.visibility = 'hidden';
        }
        if (mainContent) {
            mainContent.classList.add('visible');
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

    // Show content after 1/4 second
    setTimeout(showContent, 250);
});
