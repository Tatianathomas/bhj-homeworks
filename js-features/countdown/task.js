const time = function () {
    const count = document.getElementById('timer');
    count.textContent--;
    if (count.textContent < 1) {
        clearInterval(time, alert('Вы победили в конкурсе!'));
    } 
} 
setInterval(time, 1000);

// не поняла, как остановить таймер на 0, чтобы при клике на диалоговое окно дальше не щелкал в минус.
// надо как-то выдернуть clearInterval, но вне функции у меня не работает(


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

