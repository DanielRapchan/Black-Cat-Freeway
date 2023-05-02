let xGato = 100;
let yGato = 366;
let colisao = false;
let meusPontos = 0;

function mostrarGato() {
    image(imagemGato, xGato, yGato, 30, 30);
}

function moverGato() {
    if (keyIsDown(87)) {
        yGato -= 3;
    }

    if (keyIsDown(83)) {
        if (gatoNaoSaiDaTela()) {
            yGato += 3;
        }
    }
}

function gatoPosicaoInicial() {
    yGato = 366;
}

function colisaoGatoCarro() {
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < imagemCarros.length; i++) {
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xGato, yGato, 15);
        if (colisao) {
            somColisao.play();
            gatoPosicaoInicial();
            perdePontos();
        }
    }
}

function incluiPontos() {
    textAlign(CENTER);
    textSize(25);
    fill(color(188, 19, 254));
    text(meusPontos, width / 5, 28);
}

function marcaPontos() {
    if (yGato < 10) {
        meusPontos += 1;
        somPontos.play();
        gatoPosicaoInicial();
    }
}

function perdePontos() {
    if (colisao && meusPontos > 0) {
        meusPontos -= 1;
    }
}

function gatoNaoSaiDaTela() {
    return yGato < 366;
}