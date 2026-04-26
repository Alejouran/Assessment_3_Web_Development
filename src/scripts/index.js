// document.querySelector('hero-btn').addEventListener('click', function () {
//     window.location.href = 'control-page.html';
// });
document.addEventListener('click', function (event) {
    console.log(event.target.classList)
    if (event.target.classList[0] === 'hero-btn') {
        window.location.href = 'control-page.html'
    }
})
