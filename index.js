const dayTime = document.getElementById('dayTime');

let date = new Date();

let minutes = date.getMinutes();
let hour = date.getHours();
let dayWeek = date.getDay();

function updateDate() {
    date = new Date();
    // date get list
    minutes = date.getMinutes();
    hour = date.getHours();
    dayWeek = date.getDay();
}
setInterval(updateDate, 1000);

let dayWeekWord = '';
if (dayWeek == 0) {
    dayWeekWord = 'ВС '
} else if (dayWeek == 1) {
    dayWeekWord = 'ПН '
} else if (dayWeek == 2) {
    dayWeekWord = 'ВТ '
} else if (dayWeek == 3) {
    dayWeekWord = 'СР '
} else if (dayWeek == 4) {
    dayWeekWord = 'ЧТ '
} else if (dayWeek == 5) {
    dayWeekWord = 'ПТ '
} else if (dayWeek == 6) {
    dayWeekWord = 'CБ '
}
function updateDayTime() {
    dayTime.textContent = dayWeekWord + hour + ':' + minutes;
} setInterval(updateDayTime, 1000);

