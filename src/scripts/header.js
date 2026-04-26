let headerMenu = document.getElementsByClassName('header-dropdown')[0];
headerMenu.style.display = 'none';
        
// Dropdown menu - (open and close)
document.addEventListener('click', function displayNormalPage(event) {
    if (event.target.className === 'hamb-icon') {
        if (headerMenu.style.display === 'none') {
            headerMenu.style.display = 'inline-flex';
        } else {
            headerMenu.style.display = 'none';
        }
    } else if (event.target.className === 'links-container') {
        headerMenu.style.display = 'none';
    } else {
        headerMenu.style.display = 'none';
    }
});

// Remove backgroundColor in 'hero' and 'sign-in' pages.
const NoBackgroundHeaderPages = ['/src/assessment3/sign-in.html', '/src/assessment3/hero.html']  

function transparentBackground(className) {
    document.querySelector(className).style.backgroundColor = 'transparent';
};

let pathName = window.location.pathname;

if (NoBackgroundHeaderPages.includes(pathName)) {
    transparentBackground('header');
}

// Dropdown menu - (redirect to the corresponding page)
document.addEventListener('click', function redirect(event) {
    
    buttonClass= event.target.classList.item(1);

    switch(buttonClass) {
        case 'redirect-controlPage':
            window.location.href = 'control-page.html';
            break;
        case 'redirect-savePage':
            window.location.href = 'save-page.html';
            break;
        case 'redirect-aboutPage':
            window.location.href = 'about.html'
            break;
    }
});
