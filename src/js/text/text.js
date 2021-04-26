function setup() {
  const cnv = createCanvas(windowWidth, windowHeight);
  //cnv.position(windowWidth, windowHeight, 'absolute');

  cnv.parent('canvasDiv');

  textFont(loadFont('assets/inconsolata.ttf'));
  textSize(width);
  textAlign(CENTER, CENTER);
  k = 1
}

function draw() {
  background(0)
  k = 1 + 2 * (1 + width / 2 - Math.abs(mouseX - width / 2)) / width
  kw = (mouseX - width / 2) / width
  kh = (mouseY - height / 2) / height
  textSize(k * width);

  let time = millis();
  translate(width / 2, height / 2);
  texto = "Demon Rules"

  translate(300 * kw, 300 * kh)
  rotate(time / 1000);

  rotate(-time / 1000);
  translate(-100 * kw, -100 * kh)
  rotate(time / 1000)

  rotate(-time / 1000);
  translate(-100 * kw, -100 * kh)
  rotate(time / 1000);
  stroke("white")
  fill("white")
  text(texto, 0, 0);

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  textSize(k * width);
  textAlign(CENTER, CENTER);
}
