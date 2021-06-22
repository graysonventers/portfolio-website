const hamburgerToggle = document.querySelector('.hamburger-toggle');
const backToTopBtn = document.querySelector('.back-to-top-btn');
const homeTextBox = document.querySelector('.home-text-box')

function hamburgerFunction () {
    
    if (hamburgerToggle.style.display === 'none') {
        hamburgerToggle.style.display = 'block';
        homeTextBox.style.display = 'none';
    } else {
        hamburgerToggle.style.display = 'none';
        homeTextBox.style.display = 'block';
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