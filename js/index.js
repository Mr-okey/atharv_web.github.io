function show() {
    var projects = document.querySelector(".projects");
    if (projects.style.display === "none") {
        projects.style.display = "flex";
    } else {
        projects.style.display = "none";
    }
}
