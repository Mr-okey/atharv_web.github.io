// toggle dark mode
const modeSwitch = document.getElementById("modeSwitch");

let dark = false
modeSwitch.onclick = () => {
    const root = document.querySelector(":root");
    // light condition
    if (
        root.style.getPropertyValue("--body_bag") === "#5e5e5e"
    ) {
        dark = false
        root.style.setProperty("--body_bag", "#ffffff");
        root.style.setProperty("--mainCardBackground", "#ffffff");
        root.style.setProperty("--modetoggleHover", "rgba(0, 0, 0, 0.722)");
        root.style.setProperty("--white", "#fff");
        root.style.setProperty("--contentBoxBackground", "#CDCDCD");
        root.style.setProperty("--instagramQRBackground", "#fff");
        document.getElementById("time-disp").style.color = "#252525"
    }
    // dark condition 
    else {
        dark = true
        document.getElementById("time-disp").style.color = "#f7f6f7";
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
const underline = document.getElementById("underline")
const time_container = document.getElementById("time-disp")

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

    var scalex = (sec / 60) * 100;
    underline.style.width = scalex + "%"

    // console.log(scalex+"%")

    if (sec > 55) {
        time_container.style.color = "red"
    } else {
        if (dark) { time_container.style.color = "#f7f6f7" }
        else {  time_container.style.color = "#252525" }
    }

    delete d;
    delete scalex;

}, 1000)
