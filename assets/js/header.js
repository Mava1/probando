document.addEventListener("DOMContentLoaded", function () {
    var menuButton = document.querySelector('.bt-menu');
    var mainMenu = document.querySelector('header nav');

    menuButton.addEventListener('click', function () {
        mainMenu.style.display = (mainMenu.style.display === 'block') ? 'none' : 'block';
    });
});