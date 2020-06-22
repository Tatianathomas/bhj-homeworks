const hole = document.querySelectorAll('.hole');
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
//console.log(hole)
for (let i = 0; i < hole.length; i++) {
    hole[i].onclick = function() {
        if (hole[i].classList.contains('hole_has-mole')) {
            dead.textContent++;
        } 
        else {
            lost.textContent++;
        }

        if (dead.textContent == 10) {
            alert('Вы победили!');
            dead.textContent = 0;
            lost.textContent = 0;
        }
        if (lost.textContent == 5) {
            alert('Вы проиграли!')
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
}
