const hamburgerToggle = document.querySelector('.hamburger-toggle');
const backToTopBtn = document.querySelector('.back-to-top-btn');

function hamburgerFunction () {
    
    if (hamburgerToggle.style.display === 'none') {
        hamburgerToggle.style.display = 'block';
    } else {
        hamburgerToggle.style.display = 'none'
    }
};

function backToTopFunction () {
    document.body.scrollTop = 0; // safari
    document.documentElement.scrollTop = 0; // Chrome Firefox IE Opera
    window.location = '#';
};

function backToTopShowBtn () {
    if (window.matchMedia("(max-width: 500px)").matches) {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    } else {
        backToTopBtn.style.display = 'none';
    }
};

window.onscroll = function () {backToTopShowBtn()};