// toggle dark mode
const modeSwitch = document.getElementById("modeSwitch");


modeSwitch.onclick = () => {
    const root = document.querySelector(":root");
    // dark condition 
    if (
        root.style.getPropertyValue("--body_bag") === "#5e5e5e"
    ) {
        root.style.setProperty("--body_bag", "#ffffff");
        root.style.setProperty("--mainCardBackground", "#ffffff");
        root.style.setProperty("--modetoggleHover", "rgba(0, 0, 0, 0.722)");
        root.style.setProperty("--white", "#fff");
        root.style.setProperty("--contentBoxBackground", "#CDCDCD");
        root.style.setProperty("--instagramQRBackground", "#fff");
    }
    // light condition
    else {
        root.style.setProperty("--mainCardBackground", "#6e6e6e");
        root.style.setProperty("--body_bag", "#5e5e5e");
        root.style.setProperty("--modetoggleHover", "#fff");
        root.style.setProperty("--white", "#c7c7c7");
        root.style.setProperty("--contentBoxBackground", "#303030");
        root.style.setProperty("--instagramQRBackground", "rgba(226, 226, 226, 0.345)");
    }

}


// date and time
const d = new Date();
const DD = document.getElementById("DD");
const MM = document.getElementById("MM");
const YYYY = document.getElementById("YYYY");
const hh = document.getElementById("hh");
const mm = document.getElementById("mm");
const ss = document.getElementById("ss");
const time_container = document.getElementById("time")

date = d.getDate();
month = d.getMonth() + 1;
year = d.getFullYear();
if (date < 10) date = "0" + date;
if (month < 10) month = "0" + month;
DD.innerHTML = date + " /";
MM.innerHTML = month + " /";
YYYY.innerHTML = year;

setInterval(() => {
    const d = new Date();

    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();

    if (hr < 10) hr = "0" + hr;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    hh.innerHTML = hr;
    mm.innerHTML = min;
    ss.innerHTML = sec;

    var scalex = sec / 100 + 1;

    time_container.style.transform = "scale(" + scalex + ")"
    if (sec > 55) {
        time_container.style.color = "red"
    } else {
        time_container.style.color = "black"
    }

    delete d;
    delete scalex;

}, 1000)
