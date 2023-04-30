let xCarros = [600, 600, 600]
let yCarros = [40, 96, 150]
let velocidadeCarros = [3, 3.5, 5]

function mostrarCarro() {
    image(imagemCarroVerde, xCarros[0], yCarros[0], 70, 40);
    image(imagemCarroPreto, xCarros[1], yCarros[1], 70, 40);
    image(imagemCarroAmarelo, xCarros[2], yCarros[2], 70, 40);
}

function moverCarro() {
    xCarros[0] -= velocidadeCarros[0];
    xCarros[1] -= velocidadeCarros[1];
    xCarros[2] -= velocidadeCarros[2];
}

function retornarCarro() {
    if (xCarros[0] < -120) {
        xCarros[0] = 600;
    }
    if (xCarros[1] < -120) {
        xCarros[1] = 600;
    }
    if (xCarros[2] < -120) {
        xCarros[2] = 600;
    }
}