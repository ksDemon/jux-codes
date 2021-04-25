function setup() {
    createCanvas(windowWidth / 10, windowHeight / 10);
    textFont(loadFont('assets/inconsolata.ttf'));
    textSize(width / 4 * 10);
    textAlign(CENTER, CENTER);
    k = 1
}

function draw() {
    k = 1 + 2 * (1 + width / 2 - Math.abs(mouseX - width / 2)) / width
    kw = (mouseX - width / 2) / width
    kh = (mouseY - height / 2) / height
    textSize(k * width / 4);

    clear()

    let time = millis();
    translate(width / 20, height / 20);
    texto = "XD"

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
    resizeCanvas(windowWidth / 10, windowHeight / 10);
    textSize(k * width / 4);
    textAlign(CENTER, CENTER);
}
