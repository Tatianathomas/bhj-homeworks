const time = function () {
    const count = document.getElementById('timer');
    count.textContent--;
    if (count.textContent < 1) {
        alert('Вы победили в конкурсе!')
    } 
} 
const interval = setInterval(time, 1000);
setInterval(time, 1000);
clearInterval(interval);




/*
    function watch (hour, min, sec) {
    sec--;
    if (sec < 0) {
        sec = 59; min--
    }
    else {min = min};
    if (sec < 10) {
        sec = `0` + sec
    } 
    if 
}
    */

