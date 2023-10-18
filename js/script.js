document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu_icon');
    const navBar = document.querySelector('.nav_bar');

    menuIcon.addEventListener('click', function () {
        navBar.classList.toggle('open');
    });
});
