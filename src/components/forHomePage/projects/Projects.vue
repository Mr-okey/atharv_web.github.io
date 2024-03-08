<template>
    <div id="project">

        <h1>Projects</h1>

        <div class="allProjectGrid gridElem">
            <div class="gridHero">
                <img src="../../../../public/assets/project-images/tov-ss.png" alt="" />
                <div class="projectInfo">
                    <h3>Another Tor</h3>
                    <div>
                        <span><a href="#">Github</a></span> |
                        <span><a href="#">Deployment</a></span>
                    </div>
                </div>
            </div>
            <div class="gridElem" v-for="(image, index) in projectImages" :key="`${index}-projectImg`">
                <img :src="image" :alt="`${index}-projectImage`" />
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "ProjectsSection",
    data() {
        return {
            projectImages: [
                require("../../../../public/assets/project-images/another-tor.png"),
                require("../../../../public/assets/project-images/acm-icon.png"),
                require("../../../../public/assets/project-images/another-notpad.png"),
                require("../../../../public/assets/project-images/cardDesignSs.png"),
                require("../../../../public/assets/project-images/educareSs.png"),
                require("../../../../public/assets/project-images/janvry-icon.png"),
                require("../../../../public/assets/project-images/stonepaperSS.png"),
                require("../../../../public/assets/project-images/tic-tac-toe.png")
            ]
        }
    }
}

</script>