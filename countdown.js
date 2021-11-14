var joulu = "24 Dec 2021";

function shitList() {
    var jouluaatto = new Date(joulu);
    var today = new Date();

    var totalSec = (jouluaatto - today) / 1000;

    var days = Math.floor(totalSec / 3600 / 24);
    var hours = Math.floor(totalSec / 3600) % 24;
    var min = Math.floor(totalSec / 60) % 60;
    var sec = Math.floor(totalSec) % 60;

    document.getElementById("daysleft").innerHTML = days;
    document.getElementById("hoursleft").innerHTML = hours;
    document.getElementById("minutesleft").innerHTML = min;
    document.getElementById("secondsleft").innerHTML = sec;
}
shitList();

setInterval(shitList, 1000);