refContainer = document.getElementById('container')
refContainer2 = document.getElementById('container2')
refContainer3 = document.getElementById('container3')
w = window.innerWidth
h = window.innerHeight
xs = refContainer.clientWidth
ys = refContainer.clientHeight
cx = w / 2 - xs / 2
cy = h / 2 - ys / 2

onmousemove = function (e) {
    dx = e.clientX - w / 2
    dy = e.clientY - h / 2

    fontResize(refContainer, 2)
    fontResize(refContainer2, 2)
    fontResize(refContainer3, 2)

    magnetMove(refContainer, 4)
    magnetMove(refContainer2, 3)
    magnetMove(refContainer3, 2.5)
    
}


onresize = function() {
    w = window.innerWidth
    h = window.innerHeight
    updateCenter()
}

magnetMove = function(container, k) {
    container.style.left = cx + dx / k
    container.style.top = cy + dy / k
}

fontResize = function(container, a) {
    k = 1 + 2 * (1 + w / 2 - Math.abs(dx)) / w
    container.style.fontSize = h / 40 * k * a
    updateCenter()

}

updateCenter = function() {
    xs = refContainer.clientWidth
    ys = refContainer.clientHeight
    cx = w / 2 - xs / 2
    cy = h / 2 - ys / 2
}