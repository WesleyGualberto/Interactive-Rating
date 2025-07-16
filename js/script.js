var botao = document.querySelector(".botao");
var resposta = document.querySelector("#youSelected");
var divFormulario = document.querySelector(".interactive:not(.thankyou)");
var divAgradecimento = document.querySelector(".thankyou");

botao.addEventListener("click", function() {
    event.preventDefault();

    const notaSelecionada = document.querySelector("input[name='rating']:checked");

    if (notaSelecionada) {
        const valor = notaSelecionada.value;
        resposta.textContent = "You selected " + valor + " out of 5";

        divFormulario.classList.add("escondido")

        divAgradecimento.classList.remove("escondido")
    } else {
        window.alert("Escolha uma nota para registrar seu voto! ⚠️");
    }
})