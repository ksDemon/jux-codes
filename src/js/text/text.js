function setGradient(x, y, w, h, c1, c2) {
    noFill();
    for (let i = x; i <= x + w; i++) {
        let inter = map(i, x, x + w, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(i, y, i, y + h);
  
        }
    }

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(loadFont('assets/inconsolata.ttf'));
  textSize(width / 40);
  textAlign(CENTER, CENTER);

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

function draw() {
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
    
    setGradient(0, 0, width, height, c1, c2);
    stroke("white")
    fill("white")
    let time = millis();
    rectMode(CENTER)
    
    translate(width / 2, height / 2);
    rotate(time / 1000);
    text('puto el que lea', 0, 0);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    textSize(width / 40);
    textAlign(CENTER, CENTER);
  }

  
 