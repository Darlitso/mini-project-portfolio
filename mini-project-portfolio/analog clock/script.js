let prevSecond = new Date().getSeconds();
function updateClock() {
    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();

    const secondDeg = second * 6;
    const minuteDeg = minute * 6 + second * 0.1;
    const hourDeg = (hour % 12) * 30 + minute * 0.5;

    const secondHand = document.getElementById('second-hand');
    const minuteHand = document.getElementById('minute-hand');
    const hourHand = document.getElementById('hour-hand');

    

    if (second === 0 && prevSecond === 59) {
        secondHand.style.transition = 'none';
        secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
        
        void secondHand.offsetWidth;
        secondHand.style.transition = 'transform 0.05s linear';
    } else {
        secondHand.style.transition = 'transform 0.05s linear';
        secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    }

    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;

    prevSecond = second;
}

setInterval(updateClock, 1000);
updateClock();          