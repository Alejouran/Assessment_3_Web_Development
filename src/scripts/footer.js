document.addEventListener('click', function redirect(event) {
    buttonClass= event.target.className

    switch(buttonClass) {
        case 'footer-home':
            window.location.href = 'index.html';
            break;
        case 'footer-control':
            window.location.href = 'control-page.html'
            break;
        case 'footer-save':
            window.location.href = 'save-page.html';
            break;
        case 'footer-sign-in':
            window.location.href = 'sign-in.html'
            break;
        case 'footer-about':
            window.location.href = 'about.html'
            break;
    }
   
});

// Remove backgroundColor in 'hero' and 'sign-in' pages.
const heroPage = '/src/assessment3/index.html'  

if (window.location.pathname === heroPage) {
    let footerHero = document.querySelector('footer').style
    footerHero.backgroundColor = 'transparent';
    footerHero.position = 'fixed';
    footerHero.bottom = '0';
    footerHero.right = '0';
    footerHero.left = '0';
    footerHero.zIndex = '100';

    let footerButtons = document.querySelectorAll('.footer button');
    
    footerButtons.forEach(button => {
        console.log(button)
        button.style.boxShadow = '0 0 6px rgba(0, 0, 0, 0.15)';
        button.style.color = 'black';
        button.style.backdropFilter = 'blur(10px)';
    })
}