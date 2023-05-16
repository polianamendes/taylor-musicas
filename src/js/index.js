const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");
const logoTrocaDeTema = document.querySelector(".logo");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro");

  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/day.png");
    logoTrocaDeTema.setAttribute("src", "./src/imagens/nome-taylor.png")
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/night.png");
    logoTrocaDeTema.setAttribute("src", "./src/imagens/nome-taylor-noite.png");
  }
});
