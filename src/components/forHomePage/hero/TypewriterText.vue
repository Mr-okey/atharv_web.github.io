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
                "AI student by day, web weaver by night. ;)  ",
                "Problem solver with a sprinkle of sass. ",
                "Brainy + bubbly, your perfect dev bestie.   ",
                "Code whisperer, chill vibes guaranteed.   ",
                "Coffee fueled, code obsessed. ☕️⌨️     ",
                "Building websites, brewing creativity.    ",
                "MERN master, stress- free zone. ☕️   ",
                "From algorithms to awe - inspiring apps.   ",
                "Turning pixels into projects you'll love. ",
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
