const $btnTop = document.querySelector("#btnTop");
const $btnMenu = document.querySelector(".menu-mobile");
const $navBar = document.querySelector(".navbar");


$btnMenu.addEventListener("click", () => {
    $navBar.classList.toggle("nav-active")
});

document.querySelectorAll(".nav-link").forEach(n => n. addEventListener("click", () => {
    $navBar.classList.remove("nav-active");
}));

$btnTop.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function backTop(){
    const alturaDocumento = document.body.offsetHeight;
    const alturaJanela = window.innerHeight;
    const posicaoAtual = window.scrollY;
    const posicaoLimite = alturaDocumento - alturaJanela;

    if(posicaoAtual >= posicaoLimite){
        $btnTop.style.display = 'block';
    } else {
        $btnTop.style.display = 'none'
    }
}

window.addEventListener("scroll", backTop);