const time = function () {
    const count = document.getElementById('timer');
    count.textContent--;
    if (count.textContent < 1) {
        alert('Вы победили в конкурсе!');
        clearInterval(interval);
    } 
} 
const interval = setInterval(time, 1000);



