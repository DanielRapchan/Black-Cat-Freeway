let imagemRodovia;
let imagemGato;
let imagemCarroVerde;
let imagemCarroPreto;
let imagemCarroAmarelo;

let somPrincipal;
let somColisao;
let somPontos;

function preload() {
    imagemRodovia = loadImage("imagens/rodovia.png");
    imagemGato = loadImage("imagens/black-cat.png");
    imagemCarroVerde = loadImage("imagens/carro-1.png");
    imagemCarroPreto = loadImage("imagens/carro-2.png");
    imagemCarroAmarelo = loadImage("imagens/carro-3.png");
    imagemCarros = [imagemCarroVerde, imagemCarroPreto, imagemCarroAmarelo, imagemCarroVerde, imagemCarroPreto, imagemCarroAmarelo]

    somPrincipal = loadSound("sons/trilha.mp3");
    somColisao = loadSound("sons/colidiu.mp3");
    somPontos = loadSound("sons/pontos.wav");
}