cookie.onclick = function() {
    const counter = document.getElementById('clicker__counter');
    counter.textContent++;
    const image = document.getElementById('cookie');
    if (counter.textContent % 2 === 0) {
    image.width = 200;
    } else image.width = 250;
}
cookie();