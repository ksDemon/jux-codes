refContainer = document.getElementById('container');

onmousemove = function (e) {
    var xsize = refContainer.clientWidth
    var ysize = refContainer.clientHeight
    refContainer.style.left = e.clientX - xsize / 2;
    refContainer.style.top = e.clientY - ysize / 2;
}