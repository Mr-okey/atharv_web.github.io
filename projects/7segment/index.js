const bars = document.getElementsByClassName("bar")
const num1 = document.getElementsByClassName("num1")
const num2 = document.getElementsByClassName("num2")
const num3 = document.getElementsByClassName("num3")

function dispNum(position, num, color) {
    console.log(num)
    
    let topBar = position[0].childNodes[1]
    let first_two_1 = position[0].childNodes[3].childNodes[1]
    let first_two_2 = position[0].childNodes[3].childNodes[3]
    let midBar = position[0].childNodes[5]
    let second_two_1 = position[0].childNodes[7].childNodes[1]
    let second_two_2 = position[0].childNodes[7].childNodes[3]
    let bottomBar = position[0].childNodes[9]

    switch (num) {
        case 0:
            topBar.style.background = color
            first_two_1.style.background = color
            first_two_2.style.background = color
            second_two_1.style.background = color
            second_two_2.style.background = color
            bottomBar.style.background = color
            break;
        case 1:
            first_two_2.style.background = color
            second_two_2.style.background = color
            break;
        case 2:
            topBar.style.background = color
            first_two_2.style.background = color
            midBar.style.background = color
            second_two_1.style.background = color
            bottomBar.style.background = color
            break;
        case 3:
            topBar.style.background = color
            first_two_2.style.background = color
            midBar.style.background = color
            second_two_2.style.background = color
            bottomBar.style.background = color
            break;
        case 4:
            first_two_1.style.background = color
            first_two_2.style.background = color
            midBar.style.background = color
            second_two_2.style.background = color
            break;
        case 5:
            topBar.style.background = color
            first_two_1.style.background = color
            midBar.style.background = color
            second_two_2.style.background = color
            bottomBar.style.background = color
            break;
        case 6:
            topBar.style.background = color
            first_two_1.style.background = color
            midBar.style.background = color
            second_two_1.style.background = color
            second_two_2.style.background = color
            bottomBar.style.background = color
            break;
        case 7:
            topBar.style.background = color
            first_two_2.style.background = color
            second_two_2.style.background = color
            break;
        case 8:
            topBar.style.background = color
            first_two_1.style.background = color
            first_two_2.style.background = color
            midBar.style.background = color
            second_two_1.style.background = color
            second_two_2.style.background = color
            bottomBar.style.background = color
            break;
        case 9:
            topBar.style.background = color
            first_two_1.style.background = color
            first_two_2.style.background = color
            midBar.style.background = color
            second_two_2.style.background = color
            bottomBar.style.background = color
            break;
        default:
            topBar.style.background = "white"
            first_two_1.style.background = "white"
            first_two_2.style.background = "white"
            midBar.style.background = "white"
            second_two_1.style.background = "white"
            second_two_2.style.background = "white"
            bottomBar.style.background = "white"
            break;

    }

}

function show() {
    // reset grid
    dispNum(num1, -1)
    dispNum(num2, -1)
    dispNum(num3, -1)

    const color = document.getElementById("color").value
    const integer = document.getElementById("number").value
    let ones = 0
    let tens = 0
    let hund = 0
    
    if(integer > 1000) {
        alert("number should be below 1000")
        return
    }
    if(integer >= 100) {
        hund = Math.floor(integer/100)
        tens = Math.floor((integer - (hund*100))/10)
        ones = Math.floor((integer - (hund*100)) - (tens*10))
    }
    dispNum(num1, hund, color)
    dispNum(num2, tens, color)
    dispNum(num3, ones, color)
    
}