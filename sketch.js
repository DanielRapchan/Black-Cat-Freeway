function setup() {
  createCanvas(600, 400);
}

//imagens
let imagemRodovia;
let imagemGato;
let imagemCarroVerde;
let imagemCarroPreto;
let imagemCarroAmarelo;

function preload() {
  imagemRodovia = loadImage("imagens/rodovia.png");
  imagemGato = loadImage("imagens/black-cat.png");
  imagemCarroVerde = loadImage("imagens/carro-1.png");
  imagemCarroPreto = loadImage("imagens/carro-2.png");
  imagemCarroAmarelo = loadImage("imagens/carro-3.png");
}

//variáveis carro
let xCarro = 600;

//variáveis gato
let yGato = 366;

function mostrarCarro() {
  image(imagemCarroVerde, xCarro, 40, 70, 40);
}

function moverCarro() {
  xCarro -= 3;
}

function mostrarGato() {
  image(imagemGato, 100, yGato, 30, 30);
}

function moverGato() {
  if(keyIsDown(87)) {
    yGato -= 3;
  }
  
  if(keyIsDown(83)) {
    yGato += 3;
  }
}

function draw(){
  background(imagemRodovia);
  mostrarGato();
  moverGato();
  mostrarCarro();
  moverCarro();
}