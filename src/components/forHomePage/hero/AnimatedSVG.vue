<template>
    <div class="deviceSVG">
        <svg width="144" height="276" viewBox="0 0 144 276" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M120.84 0H23.1597C16.6817 0.383116 10.6188 3.2673 6.28803 8.026C1.9573 12.7847 -0.291423 19.0336 0.0303261 25.4152L0.0303261 250C-0.291423 256.382 1.9573 262.63 6.28803 267.389C10.6188 272.148 16.6817 275.032 23.1597 275.415H120.84C127.318 275.032 133.381 272.148 137.712 267.389C142.043 262.63 144.291 256.382 143.97 250V25.4152C144.291 19.0336 142.043 12.7847 137.712 8.026C133.381 3.2673 127.318 0.383116 120.84 0ZM133.644 250C133.959 253.685 132.795 257.346 130.402 260.196C128.008 263.047 124.576 264.861 120.84 265.249H23.1597C19.424 264.861 15.9916 263.047 13.5981 260.196C11.2047 257.346 10.0408 253.685 10.356 250V25.4152C10.0408 21.7298 11.2047 18.0695 13.5981 15.219C15.9916 12.3684 19.424 10.5545 23.1597 10.1661H38.958V15.3508C38.958 18.047 40.0458 20.6328 41.9823 22.5393C43.9187 24.4458 46.5451 25.5169 49.2836 25.5169H94.7164C97.4549 25.5169 100.081 24.4458 102.018 22.5393C103.954 20.6328 105.042 18.047 105.042 15.3508V10.1661H120.84C124.576 10.5545 128.008 12.3684 130.402 15.219C132.795 18.0695 133.959 21.7298 133.644 25.4152V250Z"
                fill="none" />
        </svg>
    </div>
</template>

<script>
import gsap from 'gsap/gsap-core';

export default {
    name: "animated-svg-devices",

    mounted() {
        const path = document.querySelector(".deviceSVG path");
        const pathLength = path.getTotalLength();

        const tl = gsap.timeline({ paused: false });

        tl.set(path, {
            strokeDasharray: `${pathLength}px`,
            strokeDashoffset: `${pathLength}px`,
            scale: 1,
            rotate: '0deg',
        });
        tl.fromTo(path,
            {
                strokeDashoffset: `${pathLength}px`,
                rotate: 0
            },
            {
                delay: 3,
                duration: 1,
                strokeDashoffset: 0,
                ease: 'circ.inOut'
            });
            tl.to(path,
            {
                fill: "#DFD1E1"
            });
            
            // tl.to(path,
            // {
            //     delay: 5,
            //     duration: 1,
            //     scale: 0,
            //     rotate: '186deg',
            //     ease: "expo.out"   
            // })

    }


}

</script>