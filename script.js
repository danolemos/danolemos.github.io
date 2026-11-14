const imagens = [
    "requiem_mozart/img1.jpg",
    "requiem_mozart/img2.jpg",
    "requiem_mozart/img3.jpg",
    "requiem_mozart/img4.jpg",
    "requiem_mozart/img5.jpg",
    "requiem_mozart/img6.jpg",
    "requiem_mozart/img7.jpg",
    "requiem_mozart/img8.jpg",
    "requiem_mozart/img9.jpg",
    "requiem_mozart/img10.jpg",
];

let atual = 0;

function mostrarImagem() {
    document.getElementById("imagemCarrossel").src = imagens[atual];

    document.getElementById("indicadores").innerHTML =
        imagens.map((_, i) =>
            `<span class="ponto ${i === atual ? 'ativo' : ''}"
            onclick="irPara(${i})"></span>`
        ).join("");
}

function mudarImagem(direcao) {
    atual = (atual + direcao + imagens.length) % imagens.length;
    mostrarImagem();
}

function irPara(indice) {
    atual = indice;
    mostrarImagem();
}

mostrarImagem();

// Troca automática a cada 5 segundos
setInterval(() => mudarImagem(1), 5000);
