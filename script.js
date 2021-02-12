const hamburgerToggle = document.querySelector('.hamburger-toggle');
const hamburgerIcon = document.querySelector('.hamburger-icon');

function hamburgerFunction () {
    
    if (hamburgerToggle.style.display === 'none') {
        hamburgerToggle.style.display = 'block';
    } else {
        hamburgerToggle.style.display = 'none'
    }
};