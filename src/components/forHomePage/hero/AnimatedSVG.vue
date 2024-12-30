<template>
    <div class="deviceSVG">

        <!-- Mobile -->
        <svg v-show="currDeviceIndex === 0" width="145" height="276" viewBox="0 0 145 276" fill="none">
            <path
                d="M49.8687 5.19336H32.7537C24.5531 5.19336 16.805 8.95278 11.7298 15.3943V15.3943C8.01065 20.1147 5.98828 25.9493 5.98828 31.9588V244.404C5.98828 250.443 8.067 256.297 11.8751 260.984V260.984C16.868 267.129 24.3642 270.697 32.282 270.697H107.824C115.299 270.697 122.533 268.057 128.251 263.242V263.242C135.406 257.217 139.535 248.34 139.535 238.986V37.3417C139.535 28.0295 135.497 19.1749 128.466 13.0689V13.0689C122.618 7.98999 115.133 5.19336 107.387 5.19336H97.9808M49.8687 5.19336V5.19336C49.8687 11.9207 55.3223 17.3742 62.0496 17.3742H85.8C92.5273 17.3742 97.9808 11.9207 97.9808 5.19336V5.19336M49.8687 5.19336H97.9808M56.808 11.8228H89.1911"
                stroke="#DFD1E1" stroke-width="10" />
        </svg>

        <!-- Laptop -->
        <svg v-show="currDeviceIndex === 1" width="348" height="248" viewBox="0 0 348 248" fill="none">
            <path
                d="M11.6699 236.761H336.785M65.567 221.093H280.649C299.979 221.093 315.649 205.423 315.649 186.093V46.9097C315.649 27.5797 299.979 11.9097 280.649 11.9097H65.5669C46.2369 11.9097 30.5669 27.5797 30.5669 46.9096V186.093C30.5669 205.423 46.237 221.093 65.567 221.093Z"
                stroke="#DFD1E1" stroke-width="22" stroke-linecap="round" />
        </svg>

        <!-- Desktop -->
        <svg v-show="currDeviceIndex === 2" width="371" height="331" viewBox="0 0 371 331" fill="none">
            <path
                d="M137.774 233.936H24.0158C17.3884 233.936 12.0158 228.564 12.0158 221.936V23.395C12.0158 16.7676 17.3884 11.395 24.0158 11.395H340.371C346.999 11.395 352.371 16.7676 352.371 23.395V221.936C352.371 228.564 346.999 233.936 340.371 233.936H225.172M137.774 233.936L129.877 274.944C128.452 282.345 134.123 289.213 141.66 289.213H221.494C229.055 289.213 234.732 282.304 233.266 274.886L225.172 233.936M137.774 233.936H181.473H225.172M10.9824 320.109H360.207"
                stroke="#DFD1E1" stroke-width="21" stroke-linecap="round" />
        </svg>

        <!-- Tablet -->
        <svg v-show="currDeviceIndex === 3" width="238" height="281" viewBox="0 0 238 281" fill="none">
            <path
                d="M92.0814 246.88H144.488M20.7988 272.425H217.625C224.252 272.425 229.625 267.052 229.625 260.425V20.2813C229.625 13.6538 224.252 8.28125 217.625 8.28125H20.7988C14.1714 8.28125 8.79883 13.6538 8.79883 20.2812V260.425C8.79883 267.052 14.1714 272.425 20.7988 272.425Z"
                stroke="#DFD1E1" stroke-width="16" stroke-linecap="round" />
        </svg>

    </div>
</template>

<script>
import gsap from 'gsap/gsap-core';

function playSVGAnimation(index) {

    const path = document.querySelectorAll(".deviceSVG path");
    const pathLength = path[index].getTotalLength()

    if (path) {

        const tl = gsap.timeline({ paused: false });

        tl.set(path[index], {
            strokeDasharray: `${pathLength}px`,
            strokeDashoffset: `${pathLength}px`,
            scale: 1,
            opacity: 1,
        });
        tl.to(".deviceSVG",
            {
                rotate: '0deg',
            });
        tl.to(path[index],
            {
                delay: 1,
                duration: 4,
                strokeDashoffset: 0,
                ease: 'expo.in'
            });
        tl.to(".deviceSVG",
            {
                rotate: '7deg',
            });
        tl.to(path[index],
            {
                delay: 10,
                duration: 2,
                scale: 3,
                opacity: 0,
            });
    }
}

export default {
    name: "animated-svg-devices",

    data() {
        return {
            currDeviceIndex: 0,
            numberOfSvg: 4,
        }
    },

    mounted() {

        const windowWidth = window.innerWidth;
        if (windowWidth >= 601) {

            playSVGAnimation(0)

            setInterval(() => {
                this.currDeviceIndex = (this.currDeviceIndex + 1) % this.numberOfSvg
                playSVGAnimation(this.currDeviceIndex)
            }, 18000);
        }
    }


}

</script>