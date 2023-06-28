const pagina = document.querySelector(".container-questions");
const botao = document.querySelector("#theme-toggle");

botao.addEventListener("click", function(){
pagina.classList.toggle("dark-theme");
});