let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [3, 3.5, 5, 8, 4.3, 3.2];
let comprimentoCarro = 70;
let alturaCarro = 40;

function mostrarCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    }
}

function moverCarro() {
    for (let i = 0; i < xCarros.length; i++) {
        xCarros[i] -= velocidadeCarros[i];
    }
}

function retornarCarro() {
    for (let i = 0; i < xCarros.length; i++) {
        if (xCarros[i] < -120) {
            xCarros[i] = 600;
        }
    }
}