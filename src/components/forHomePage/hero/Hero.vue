<template>

    <div id="home">
        <div class="homeHeroSection-1">
            <div class="welcomeText">
                <p>
                    <i>I am,</i>
                    <i class="name">Atharv vyas </i>
                </p>
                <p><i>Web Developer - AI Student</i></p>
            </div>

            <div class="devicesAnimationContainer">
                <AnimatedDevicesSVG />
            </div>

        </div>

        <div class="changingText">
            <TypeWriterText />
        </div>


        <div class="scrollDownIndicator">
            <!-- scrollDown icon -->
            <a href="#exp">

                <svg width="50" height="35" viewBox="0 0 65 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5"
                        d="M3.56895 21.6923L3.56925 17.4345L32.0689 34.0654L60.5693 16.5654L60.5689 21.6923L32.0689 38.6923L3.56895 21.6923Z"
                        fill="#D9D9D9" />
                    <path opacity="0.3"
                        d="M3.56895 32.7578L3.56925 28.4999L32.0689 45.1308L60.5693 27.6309L60.5689 32.7577L32.0689 49.7578L3.56895 32.7578Z"
                        fill="#D9D9D9" />
                </svg>

            </a>
        </div>
    </div>

</template>

<script>

import TypeWriterText from "./TypewriterText.vue"
import AnimatedDevicesSVG from "./AnimatedSVG.vue"

export default {
    name: 'Home-Hero-Component',
    components: {
        TypeWriterText,
        AnimatedDevicesSVG,
    }
}
</script>
