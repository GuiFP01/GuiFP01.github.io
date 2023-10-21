/* Hamburguer menu */

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu_icon');
    const navBar = document.querySelector('.nav_bar');


    menuIcon.addEventListener('click', function () {
        navBar.classList.toggle('open');
    });
});

/* Contact icons color changing when mouseover */

function changeEmailIcon (icon) {
    document.querySelector(".email_img").src = icon;
}
function changeGithubIcon (icon2) {
    document.querySelector(".github_img").src = icon2;
}
function changeLinkedinIcon (icon3) {
    document.querySelector(".linkedin_img").src = icon3;
}
function changeInstagramIcon (icon4) {
    document.querySelector(".instagram_img").src = icon4;
}
