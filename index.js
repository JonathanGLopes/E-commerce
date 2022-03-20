let btnTop = document.querySelector("#btnTop");
const $btnMenu = document.querySelector(".menu-mobile");
const $navBar = document.querySelector(".navbar");


$btnMenu.addEventListener("click", () => {
    $navBar.classList.add("nav-active")
});

document.querySelectorAll(".nav-link").forEach(n => n. addEventListener("click", () => {
    $navBar.classList.remove("nav-active");
}));

btnTop.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});