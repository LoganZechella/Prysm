// Navbar Scripts

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("sidebar-home");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
};

var demoButtons;

function start() {

    // Add event "click" to "demo buttons"
    demoButtons = document.querySelectorAll('.js-modify');
    for (var i = 0; i < demoButtons.length; i++) {
        demoButtons[i].addEventListener('click', toggleEffect);
    }

    // Add event "click" to "save buttons"
    var saveButtons = document.querySelectorAll('.js-save');
    for (var i = 0; i < saveButtons.length; i++) {
        saveButtons[i].addEventListener('click', toggleActive);
    }

}

// Toggle "effect" classes
function toggleEffect() {
    var target = document.querySelector(this.dataset.target);
    target.dataset.effect = this.dataset.effect;

    for (var i = 0; i < demoButtons.length; i++) {
        demoButtons[i].classList.remove('active');
    }

    toggleActive.call(this);
}

// Toggle "active" class
function toggleActive() {
    this.classList.toggle('active');
}

// Invoke "start ()" function
window.addEventListener('load', start);


// Hamburger Animations
(function () {
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.header');

    burger.onclick = function () {
        header.classList.toggle('menu-opened');
    }
}());