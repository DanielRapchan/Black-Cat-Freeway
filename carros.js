let xCarros = [600, 600, 600];
let yCarros = [40, 96, 150];
let velocidadeCarros = [3, 3.5, 5];

function mostrarCarro() {
    for (let i = 0; i < imagemCarros.length; i += 1) {
        image(imagemCarros[i], xCarros[i], yCarros[i], 70, 40);
    }
}

function moverCarro() {
    for (let i = 0; i < xCarros.length; i += 1) {
        xCarros[i] -= velocidadeCarros[i];
    }
}

function retornarCarro() {
    for (let i = 0; i < xCarros.length; i += 1) {
        if (xCarros[i] < -120) {
            xCarros[i] = 600;
        }
    }
}