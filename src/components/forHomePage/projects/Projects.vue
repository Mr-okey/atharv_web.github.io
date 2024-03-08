<template>
    <div id="project">

        <h1>Projects</h1>

        <div class="allProjectGrid gridElem">
            <div class="gridHero">
                <img :src="Projects[activeIndex].imagePath" alt="" />
                <div class="projectInfo">
                    <h3>{{ Projects[activeIndex].heading }}</h3>
                    <p class="projectDesc">{{ Projects[activeIndex].desc }}</p>
                    <div>
                        <span><a :href="Projects[activeIndex].github">{{ Projects[activeIndex].github !== '#' ? "Github"
                    :
                    "NA" }}</a></span> |
                        <span><a :href="Projects[activeIndex].deployment">Deployment</a></span>
                    </div>
                </div>
            </div>
            <div class="gridElem" v-for="(project, index) in Projects" :key="`${index}-projectImg`"
                @click="() => { activeIndex = index }">
                <img :src="project.imagePath" :alt="`${index}-projectImage`" />
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "ProjectsSection",
    data() {
        return {
            activeIndex: 0,
            Projects: [
                {
                    imagePath: require("../../../../public/assets/project-images/another-tor.png"),
                    heading: "Another Tor",
                    id: 1,
                    desc: "An Attempt to build a developer centric Social-Media application, a place where all your social presence available on one click, collaborative tools with open thread discussions. Made with React js",
                    status: "under development",
                    github: "#",
                    deployment: "https://anothertor.netlify.app/"
                },
                {
                    imagePath: require("../../../../public/assets/project-images/janvry-icon.png"),
                    heading: "janvry Portfolio",
                    id: 2,
                    status: "completed",
                    desc: "Company Portfolio page made for <a href=\"https://janvrywebsite-punh.vercel.app\" target=\"_blank\" style=\"all:unset; font-weight:bold; cursor:pointer;\">Janvry</a>",
                    github: "#",
                    deployment: "https://janvrywebsite-punh.vercel.app/Exclusive"
                },
                {
                    imagePath: require("../../../../public/assets/project-images/acm-icon.png"),
                    heading: "ACM-DYPIEMR",
                    id: 3,
                    status: "Completed",
                    desc: "ACM (Association for Computing Machinery) student chapter @DYPIEMR is a Social Technical Society",
                    github: "#",
                    deployment: "https://glittery-maamoul-278f7f.netlify.app/"
                },
                {
                    imagePath: require("../../../../public/assets/project-images/cardDesignSs.png"),
                    heading: "card centric design",
                    id: 4,
                    status: "compleated",
                    desc: "A card centric design webpage frontend, responsive, made with vanila html/css and javascript",
                    github: "https://github.com/1447bits/frontend/tree/main/Assignment2",
                    deployment: "https://1447bits.github.io/frontend/Assignment2/"
                },
                {
                    imagePath: require("../../../../public/assets/project-images/another-notpad.png"),
                    heading: "TipeIt",
                    id: 5,
                    status: "compleated",
                    desc: "A fun project, Inspired by \"keybr.com\", A notepad to jot down your thoughts. Made with vanila html/css and javascript",
                    github: "https://github.com/1447bits/typeit",
                    deployment: "https://1447bits.github.io/typeit/"
                },
                // {
                //     imagePath: foocusSS,
                //     heading: "foocus",
                //     id: 6,
                //     status: "under development",
                //     desc: "A productivity application, a note taking app cum task manager, main objective was to create an application help you increase productivity in zen mode. Made with react js",
                //     github: "https://github.com/1447bits/foocus",
                //     deployment: "https://foocusapp.netlify.app/"
                // },
                {
                    imagePath: require("../../../../public/assets/project-images/tic-tac-toe.png"),
                    heading: "Tic Tac Toe",
                    id: 7,
                    status: "partically compleated",
                    desc: "A fun project, a very familier game, with single and double player options, currently in single player mode your oponent is dumb but soon i will be updating it. made with vanila html/css and javascript",
                    github: "https://github.com/1447bits/TicTacToe",
                    deployment: "https://1447bits.github.io/TicTacToe/"
                },
                // {
                //     imagePath: require("../../../../public/assets/project-images/stonepaperSS.png"),
                //     heading: "Stone Paper Scissors",
                //     id: 6,
                //     status: "compleated",
                //     desc: "A fun project, a very familier single player game. made with vanila html/css and javascript",
                //     github: "https://github.com/1447bits/stonePaperScissor",
                //     deployment: "https://1447bits.github.io/stonePaperScissor/"
                // },
                {
                    imagePath: require("../../../../public/assets/project-images/educareSs.png"),
                    heading: "educare frontend",
                    id: 8,
                    status: "compleated",
                    desc: "This was the Front-end design assignment, ought to be a responsive webpage made with vanila html/css and javascript.",
                    github: "https://github.com/1447bits/frontend/tree/main/Assignment1",
                    deployment: "https://1447bits.github.io/frontend/Assignment1/"
                }
            ]
        }
    }
}

</script>