function setup() {
  createCanvas(600, 400);
  somPrincipal.loop();
}

function draw() {
  background(imagemRodovia);
  mostrarGato();
  moverGato();
  mostrarCarro();
  moverCarro();
  retornarCarro();
  colisaoGatoCarro();
  incluiPontos();
  marcaPontos();
  perdePontos();
}