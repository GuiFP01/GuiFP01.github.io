/* Hamburger menu */

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu_icon');
    const navBar = document.querySelector('.nav_bar');


    menuIcon.addEventListener('click', function () {
        navBar.classList.toggle('open');
    });
});

/*Scrolling animation*/

const showContent = () => {

    const sections = document.querySelectorAll(".section_js");
    const viewportHeight = window.innerHeight * 0.75;

    const scrollAnimation = () => {

        sections.forEach(section => {

            const topSideSection = section.getBoundingClientRect().top;
            const isSectionVisible = (topSideSection - viewportHeight) < 0;

            if(isSectionVisible) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        })
    }

    scrollAnimation();
    window.addEventListener("scroll", scrollAnimation);
}

showContent();


/* Contact icons color changing when mouseover */

const changeEmailIcon = (icon) => {
    document.querySelector(".email_img").src = icon;
}
const changeGithubIcon = (icon2) => {
    document.querySelector(".github_img").src = icon2;
}
const changeLinkedinIcon = (icon3) => {
    document.querySelector(".linkedin_img").src = icon3;
}
const changeInstagramIcon = (icon4) => {
    document.querySelector(".instagram_img").src = icon4;
}
