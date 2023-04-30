// carro 1
let xCarro = 600;
let yCarro = 40;
let velocidadeCarro1 = 3;

//carro 2
let xCarro2 = 600;
let yCarro2 = 96;
let velocidadeCarro2 = 3.5;

//carro 3
let xCarro3 = 600;
let yCarro3 = 150;
let velocidadeCarro3 = 5;

function mostrarCarro() {
    image(imagemCarroVerde, xCarro, yCarro, 70, 40);
    image(imagemCarroPreto, xCarro2, yCarro2, 70, 40);
    image(imagemCarroAmarelo, xCarro3, yCarro3, 70, 40);
}

function moverCarro() {
    xCarro -= velocidadeCarro1;
    xCarro2 -= velocidadeCarro2;
    xCarro3 -= velocidadeCarro3;
}