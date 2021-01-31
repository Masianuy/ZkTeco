var openMenu = document.querySelector('.big-menu__icon');
openMenu.addEventListener('click', function() {
    var menu = document.querySelector('div.toggle');
    menu.classList.toggle('active');
});