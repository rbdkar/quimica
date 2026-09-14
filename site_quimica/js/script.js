const botaoCorrigir = document.querySelector("#corrigir");
const resultado = document.querySelector("#resultado");

botaoCorrigir.addEventListener("click", function () {
    let pontos = 0;

    const respostas = {
        q1: "b",
        q2: "a",
        q3: "c",
        q4: "b",
        q5: "a"
    };

    for (let questao in respostas) {
        const resposta = document.querySelector(
            'input[name="' + questao + '"]:checked'
        );

        if (resposta && resposta.value === respostas[questao]) {
            pontos++;
        }
    }

    resultado.innerHTML = "Você acertou " + pontos + " de 5 questões.";

    if (pontos === 5) {
        resultado.innerHTML += " Excelente!";
    } else if (pontos >= 3) {
        resultado.innerHTML += " Bom trabalho!";
    } else {
        resultado.innerHTML += " Revise o conteúdo e tente novamente.";
    }
});

const formulario = document.querySelector("#formulario form");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    alert("Formulário enviado!");
});
