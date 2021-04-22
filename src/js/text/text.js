function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(loadFont('assets/inconsolata.ttf'));
  textSize(width / 40);
  textAlign(CENTER, CENTER);
  randomColors()
  k = 1
}

function draw() {
  changeColor()

  k = 1 + 2 * (1 + width / 2 - Math.abs(mouseX - width / 2)) / width
  kw = (mouseX - width / 2) / width
  kh = (mouseY - height / 2) / height
  textSize(k * width / 40);
  setGradient(0, 0, width, height, c1, c2);
  let time = millis();
  translate(width / 2, height / 2);
  texto = "Demon Rules"

  translate(300 * kw, 300 * kh)
  rotate(time / 1000);
  stroke(invert(c1))
  fill(invert(c1))
  text(texto, 0, 0)

  rotate(-time / 1000);
  translate(-100 * kw, -100 * kh)
  rotate(time / 1000);
  stroke(invert(c2))
  fill(invert(c2))
  text(texto, 0, 0);

  rotate(-time / 1000);
  translate(-100 * kw, -100 * kh)
  rotate(time / 1000);
  stroke("white")
  fill("white")
  text(texto, 0, 0);

}

function mouseClicked() {
  randomColors()
}

function randomColors() {
  r = random(255)
  g = random(255)
  b = random(255)
  r2 = random(255)
  g2 = random(255)
  b2 = random(255)
  nr = random(-3, 3)
  ng = random(-3, 3)
  nb = random(-3, 3)
  nr2 = random(-3, 3)
  ng2 = random(-3, 3)
  nb2 = random(-3, 3)
}

function changeColor() {
  r += nr
  g += ng
  b += nb
  r2 += nr2
  g2 += ng2
  b2 += nb2

  if (r >= 255 || r <= 0) {
    nr = nr * -1
  }
  if (g >= 255 || g <= 0) {
    ng = ng * -1
  }
  if (b >= 255 || b <= 0) {
    nb = nb * -1
  }
  if (r2 >= 255 || r2 <= 0) {
    nr2 = nr2 * -1
  }
  if (g2 >= 255 || g2 <= 0) {
    ng2 = ng2 * -1
  }
  if (b2 >= 255 || b2 <= 0) {
    nb2 = nb2 * -1
  }

  c1 = color(r, g, b)
  c2 = color(r2, g2, b2)
}

function setGradient(x, y, w, h, c1, c2) {
  noFill();
  background(0)
  for (let i = x; i <= x + w; i++) {
    let inter = map(i, x, x + w, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(i, y, i, y + h);

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  textSize(k * width / 40);
  textAlign(CENTER, CENTER);
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function invert(rgb) {
  rgb = [].slice.call(arguments).join(",").replace(/rgb\(|\)|rgba\(|\)|\s/gi, '').split(',');
  for (var i = 0; i < rgb.length; i++) rgb[i] = (i === 3 ? 1 : 255) - rgb[i];
  return rgbToHex(rgb[0], rgb[1], rgb[2]);
}