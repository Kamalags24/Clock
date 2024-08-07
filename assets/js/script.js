const hr = document.querySelector('#hr')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')
const deg = 6;

setInterval(() => {

    let day, hh, mm, ss;

    day = new Date();

    hh = day.getHours() * 30;
    mm = day.getMinutes() * deg;
    ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;

})