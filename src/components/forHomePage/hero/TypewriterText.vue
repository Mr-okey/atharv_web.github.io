<template>
    <p class="line-1 anim-typewriter"></p>
</template>

<script>

function startLetterAnimation(text) {
    const textElement = document.querySelector('.anim-typewriter');
    const len = text.length
    textElement.innerHTML = ""
    let currentText = 0;
    let intervalId;

    intervalId = setInterval(() => {
        if (currentText < len) {
            textElement.innerHTML += text[currentText];
            currentText += 1
        } else {
            clearInterval(intervalId);
        }
    }, 100); 
}



export default {
    name: "changing-typewriter-text-home-hero",
    data() {
        return {
            activeTextIndex: 0,
            currentText: "",
            texts: [
                "Why Complicate Simple things :)",
                "A Passionate programmer, obsessed with tech and Ai ^^",
                "Life if too short to argue, just say 400-bad request and move on ;)",
                "if AI is going to take over world, I'm on Ai's side |!|!||!!",
                "QR code is the best analog tech 10010010",
                "1447 is my fav number, no its not my ATM pin obviously (its not!!)",
                "sanskrit is older than Egyptian scripts, and i speak neither \\_('^)_/",
                "I admire *Ustad Nusrat Fateh ali khan* very much, ''playlists''",
                "People like to feel superior, I like to do mistakes",
                "After watching ZNMD I watched Mr. Robot",
                "My small dream \\AMD 7950X3D, RTX 4090, 256GB DDR5, 4TB Gen4 SSD\\",
                "Demons are real!, they wake up as soon as i open my laptops lid ;)"
            ]
        }
    },

    mounted() {
        startLetterAnimation(this.texts[this.activeTextIndex])

        setInterval(() => {
            this.activeTextIndex = (this.activeTextIndex + 1) % this.texts.length
            startLetterAnimation(this.texts[this.activeTextIndex])
        }, 20000); 
    }

}
</script>
