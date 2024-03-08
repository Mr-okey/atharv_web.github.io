<template>
    <div class="deviceSVG">

        <svg width="145" height="276" viewBox="0 0 145 276" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M49.8687 5.19336H32.7537C24.5531 5.19336 16.805 8.95278 11.7298 15.3943V15.3943C8.01065 20.1147 5.98828 25.9493 5.98828 31.9588V244.404C5.98828 250.443 8.067 256.297 11.8751 260.984V260.984C16.868 267.129 24.3642 270.697 32.282 270.697H107.824C115.299 270.697 122.533 268.057 128.251 263.242V263.242C135.406 257.217 139.535 248.34 139.535 238.986V37.3417C139.535 28.0295 135.497 19.1749 128.466 13.0689V13.0689C122.618 7.98999 115.133 5.19336 107.387 5.19336H97.9808M49.8687 5.19336V5.19336C49.8687 11.9207 55.3223 17.3742 62.0496 17.3742H85.8C92.5273 17.3742 97.9808 11.9207 97.9808 5.19336V5.19336M49.8687 5.19336H97.9808M56.808 11.8228H89.1911"
                stroke="#DFD1E1" stroke-width="10" />
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
                duration: 3,
                strokeDashoffset: 0,
                ease: 'circ.inOut'
            });
            tl.to(".deviceSVG",
            {
                rotate: '5deg'
            })

        // tl.to(path,
        //     {
        //         fill: "#DFD1E1"
        //     });

        // tl.to("path",
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