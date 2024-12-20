document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');

    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const header = document.querySelector('header');

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

    window.addEventListener('scroll', handleHeader);

    // Initial check in case the page is loaded scrolled down
    handleHeader();

    // Show content after 1/4 second
    setTimeout(showContent, 250);
});
