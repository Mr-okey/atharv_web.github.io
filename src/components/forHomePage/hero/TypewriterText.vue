<template>
    <p class="line-1 anim-typewriter">{{ texts[activeTextIndex] }}</p>
    <p class="responsiveText">{{ texts[activeTextIndex] }}</p>
</template>

<script>
import { SteppedEase } from 'gsap';
import gsap from 'gsap';

function startLetterAnimation(lineLength = 37) {

    const tl = gsap.timeline({ paused: false });

    tl.fromTo(
        ".anim-typewriter",
        {
            width: "0",
        },
        {
            duration: 6,
            width: "100%",
            ease: SteppedEase.config(lineLength),
        });

    tl.fromTo(".anim-typewriter",
        {
            "border-right-color": "rgba(255,255,255,0.75)"
        },
        {
            "border-right-color": "rgba(255,255,255,0)",
            duration: 1,
            repeat: -1,
            ease: SteppedEase.config(1),
        });
    tl.to(".anim-typewriter",
        {
            delay: 11,
            width: "0",
            duration: 0.5
        }
    )

    tl.play();

}

export default {
    name: "changing-typewriter-text-home-hero",
    data() {
        return {
            activeTextIndex: 0,
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

        // init the animation for first go

        const windowWidth = window.innerWidth

        // don't play animation if in mobile screen or screen less than 681px
        if (windowWidth >= 601) {
            startLetterAnimation(this.texts[this.activeTextIndex].length)


            // interval loop every 10sec to repeat the animation with a new text
            setInterval(() => {
                this.activeTextIndex = (this.activeTextIndex + 1) % this.texts.length
                startLetterAnimation(this.texts[this.activeTextIndex].length)
            }, 20000);
        }
    }

}
</script>
