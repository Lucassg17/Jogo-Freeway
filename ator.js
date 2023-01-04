//código do ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
       yAtor += 3;
    }
  }
}
  
function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaPosicaoInicial();
      somDaColisao.play();
     if (meusPontos > 0){
       meusPontos -= 1;
      }
    }
  }
}

function voltaPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER); //centraliza o texto
  textSize(25); //tamanho do texto
  text(meusPontos, width /5, 26);
}

function marcaPonto(){
  if(yAtor < 6){
    meusPontos += 1;
    somDoPonto.play();
    voltaPosicaoInicial();
  }
}

function podeSeMover(){
  return yAtor < 366;
}
