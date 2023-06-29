const botaoProximo = document.querySelector(".button-85");
const animation = document.querySelector(".animation");

botaoProximo.addEventListener("click", function() {
  // Remove a classe de animação
  animation.classList.remove("animacaoSurgir");

  // Reativa a animação
  void animation.offsetWidth; // Reinicia o cálculo de estilo
  animation.classList.add("animacaoSurgir");
});