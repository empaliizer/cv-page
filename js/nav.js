const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
const menuIcon = document.querySelector('.menu-button span');

menuButton.addEventListener('click', () => {

    let iconText = menuIcon.textContent;
    if ( iconText === 'menu' ) {
        menuIcon.textContent = 'close';
    } else {
        menuIcon.textContent = 'menu';
    }

    menu.classList.toggle('menu--active');
});