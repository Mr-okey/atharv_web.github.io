<template>
    <div id="pageBg">
        <div class="circle" ref="circle"></div>
        <div class="circle-1" ref="circle_1"></div>
        <div class="circle-2" ref="circle_2"></div>
        <div class="circle-3" ref="circle_3"></div>
    </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
    name: "page-background",
    mounted() {
        this.animateCircle();
    },
    methods: {
        getRandomPosition() {
            // Get viewport dimensions considering the circle size
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            return {
                x: Math.random() * viewportWidth,
                y: Math.random() * viewportHeight
            };
        },

        animateCircle() {
            const circle = this.$refs.circle;
            const circle_1 = this.$refs.circle_1;
            const circle_2 = this.$refs.circle_2;
            const circle_3 = this.$refs.circle_3;
            const colors = ["#87CEEB", "#6495ED", "#8B9467", "#778899", "#6c5ce7", "#66CCCC", "#45A0E6", "#3E8E41", "#5C0011", "#455A64"];

            const animate = () => {
                const newPos = this.getRandomPosition();
                const newPos_1 = this.getRandomPosition();
                const newPos_2 = this.getRandomPosition();
                const newPos_3 = this.getRandomPosition();
                const duration = 10 + Math.random() * 10;

                gsap.to(circle, {
                    duration: duration,
                    left: newPos.x,
                    top: newPos.y,
                    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                    ease: "sine.inOut",
                });

                gsap.to(circle_2, {
                    duration: duration,
                    left: newPos_2.x,
                    top: newPos_2.y,
                    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                    ease: "sine.inOut",
                });

                gsap.to(circle_3, {
                    duration: duration,
                    left: newPos_3.x,
                    top: newPos_2.y,
                    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                    ease: "sine.inOut",
                });

                gsap.to(circle_1, {
                    duration: duration,
                    left: newPos_1.x,
                    top: newPos_1.y,
                    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                    ease: "sine",
                    onComplete: () => {
                        animate(); 
                    }
                });
            };

            animate(); // Start the animation
        }
    },
    beforeUnmount() {
        // Clean up GSAP animations when component is destroyed
        gsap.killTweensOf(this.$refs.circle);
    }
}
</script>
