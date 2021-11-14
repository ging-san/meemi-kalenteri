function openModal() {
    document.getElementById("pictureModal").style.display = "block";
}

function closeModal() {
    document.getElementById("pictureModal").style.display = "none";
}

//countdown
let xmas= "24 Dec 2021";

function countDownTimer() {
    let xmasEve = new Date(xmas);
    let today = new Date();

    let totalSec = (xmas - today) / 1000;

    let days = Math.floor(totalSec / 3600 / 24);
    let hours = Math.floor(totalSec / 3600) % 24;
    let min = Math.floor(totalSec / 60) % 60;
    let sec = Math.floor(totalSec) % 60;

    document.getElementById("daysleft").innerHTML = days;
    document.getElementById("hoursleft").innerHTML = hours;
    document.getElementById("minutesleft").innerHTML = min;
    document.getElementById("secondsleft").innerHTML = sec;
}

shitList();

setInterval(shitList, 1000);