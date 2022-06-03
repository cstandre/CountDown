var countDownDate = new Date("June 23, 2022 00:00:00").getTime();

var myfunc = setInterval(function() {

var now = new Date().getTime();
var timeLeft = countDownDate - now;

var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
document.getElementById("days").innerHTML = days
}, 1000);
