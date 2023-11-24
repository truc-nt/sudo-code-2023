var hamburger = document.querySelector('.hamburger');
var menu = document.querySelector('.menu');

function handleMobileMenu(mobile) {
    /*if (mobile) {
      hamburger.style.display = 'block';
    } else {
      hamburger.style.display = 'none';
    }*/
}

function checkMobileSize() {
    var mobileSize = window.matchMedia('(max-width: 767px)').matches;
    handleMobileMenu(mobileSize);
}

checkMobileSize();
window.addEventListener('resize', checkMobileSize);
hamburger.addEventListener('click', function() {
    menu.classList.toggle('active');
});
