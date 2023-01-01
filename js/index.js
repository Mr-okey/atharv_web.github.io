// toggle projects card
function show() {
    var proText = document.querySelector("#proText");
    var projects = document.querySelector(".projects");
    if (projects.style.display === "none") {
        projects.style.display = "flex";
        proText.style["animation-name"] = "none";
        proText.style["font-size"] = "0px";
    } else {
        projects.style.display = "none";
        proText.style["animation-name"] = "collapse";
        proText.style["font-size"] = "2em";
    }
}

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