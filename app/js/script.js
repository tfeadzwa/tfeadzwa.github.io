const btnHumburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHumburger.addEventListener('click', () => {
    console.log('open hamburger');

    if (header.classList.contains('open')) { // close hamburger menu
        header.classList.remove('open');
        body.classList.remove('noscroll');
        // foreach has-fade class remove and add the fade-in and the fade-out classes respectively
        fadeElems.forEach((element) => {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    } else {
        header.classList.add('open'); // open hamburger menu
        // foreach has-fade class remove and add the fade-out and the fade-in classes respectively
        body.classList.add('noscroll');
        fadeElems.forEach((element) => {
            element.classList.remove('fade-out');
            element.classList.add('fade-in'); // add fade-in animation here
        });
    }
});