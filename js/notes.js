var frame = document.querySelector(".frame");
var htmlBtn = document.getElementById("HTMLBtn")
var cssBtn = document.getElementById("CSSBtn")
var jsBtn = document.getElementById("JSBtn")
var APIBtn = document.getElementById("APIBtn")

htmlBtn.onclick = function(){open(1)}
cssBtn.onclick = function(){open(2)}
jsBtn.onclick = function(){open(3)}
APIBtn.onclick = function(){open(4)}

// ../Notes/learner-html.txt
// ../Notes/learn-js-basics.txt
// ../Notes/learn-CSS.txt

function open(n) {
    switch (n) {
        case 1:
            frame.src = "../Notes/learner-html.txt"
            break;
        case 2:
            frame.src = "../Notes/learn-js-basics.txt"
            break;
        case 3:
            frame.src = "../Notes/learn-CSS.txt"
            break;
        case 4:
            frame.src = "../Notes/API_Notes.txt"
            break;
    }
}