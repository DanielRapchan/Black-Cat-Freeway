let xGato = 100;
let yGato = 366;
let colisao = false;

function mostrarGato() {
    image(imagemGato, xGato, yGato, 30, 30);
}

function moverGato() {
    if (keyIsDown(87)) {
        yGato -= 3;
    }

    if (keyIsDown(83)) {
        yGato += 3;
    }
}

function colidiu() {
    yGato = 366;
}

function colisaoGatoCarro() {
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < imagemCarros.length; i += 1) {
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xGato, yGato, 15);
        if (colisao) {
            colidiu();
        }
    }
} 