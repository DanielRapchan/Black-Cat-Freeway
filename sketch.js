function setup() {
  createCanvas(600, 400);
}

function draw(){
  background(imagemRodovia);
  mostrarGato();
  moverGato();
  mostrarCarro();
  moverCarro();
  retornarCarro();
}