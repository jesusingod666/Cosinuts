const burgerMenu = document.querySelector('.header__burger');
const menuList = document.querySelector('.header__list');
const crossButton = document.querySelector('.cross__button');



burgerMenu.onclick = function() {
    menuList.classList.toggle('display__none');
}

crossButton.onclick = function() {
    menuList.classList.toggle('display__none');
}