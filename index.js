let btnTop = document.querySelector("#btnTop");

btnTop.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});