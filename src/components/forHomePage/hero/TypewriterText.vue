<template>
    <p class="line-1 anim-typewriter">{{ texts[activeTextIndex] }}</p>
</template>

<script>
import { SteppedEase } from 'gsap';
import gsap from 'gsap';

function startLetterAnimation(lineLength = 37) {

    const tl = gsap.timeline({ paused: false });

    tl.fromTo(
        ".anim-typewriter",
        {
            duration: 6,
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
        delay: 0.8,
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
        startLetterAnimation(this.texts[this.activeTextIndex].length)

        // interval loop every 8.2sec to repeat the animation with a new text
        // setInterval(() => {
        //     this.activeTextIndex = (this.activeTextIndex + 1) % this.texts.length
        //     startLetterAnimation(this.texts[this.activeTextIndex].length)
        // }, 8200);
    }
} 
</script>
