const root = document.getElementById("root")
const progBar = document.getElementById("progress-bar")
const progContiner = document.getElementById("prog-container")
const workingCatGif = document.getElementById("gif")

let bars = 1

// interval to add bards ro pregress-bar
function showPorgressBar() {
    const progressInteerval = setInterval(() => {
        const bar = document.createElement("div")
        bar.classList.add("bar")
        // adds 9 more bards in total
        if (bars >= 8) {
            window.clearInterval(progressInteerval)
        }
        progBar.append(bar)
        bars += 1;
    }, 2500)
}
showPorgressBar()
