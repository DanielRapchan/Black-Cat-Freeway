let xGato = 100;
let yGato = 366;

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