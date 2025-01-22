<template>
    <div id="project">

        <h1>Projects</h1>

        <div @click="(e) => handleGoLeft(e)" class="goLeft">
            <svg viewBox="0 0 56 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9.93652 63.5833L3.74301 59.3536L0.101616 64.6856L4.83312 69.0792L9.93652 63.5833ZM54.3576 11.8366C56.6936 8.41605 55.8143 3.74941 52.3938 1.41342C48.9732 -0.922581 44.3065 -0.0433495 41.9705 3.37724L54.3576 11.8366ZM16.13 67.8129L54.3576 11.8366L41.9705 3.37724L3.74301 59.3536L16.13 67.8129ZM4.83312 69.0792L43.0607 104.576L53.2675 93.5845L15.0399 58.0873L4.83312 69.0792Z"
                    fill="white" />
            </svg>
        </div>

        <div @click="(e) => handleGoRight(e)" class="goRight">
            <svg viewBox="0 0 56 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M45.8564 64.3201L52.05 60.0904L55.6914 65.4224L50.9598 69.816L45.8564 64.3201ZM1.43539 12.5734C-0.900609 9.15286 -0.0213768 4.48623 3.39921 2.15023C6.81979 -0.185765 11.4864 0.693467 13.8224 4.11405L1.43539 12.5734ZM39.6629 68.5498L1.43539 12.5734L13.8224 4.11405L52.05 60.0904L39.6629 68.5498ZM50.9598 69.816L12.7323 105.313L2.52551 94.3214L40.753 58.8241L50.9598 69.816Z"
                    fill="white" />
            </svg>
        </div>

        <div id="projectShowcaseContainer" class="projectShowcaseContainer flex">

            <div class="projectShowcase" v-for="(project, index) in Projects" :key="`${index}-projectPrev`">

                <div class="projectPrevImg">
                    <img :src="project.imagePath" alt="showcaseImage" />
                </div>

                <div class="projectDetails">

                    <div class="nameAndStack flex">

                        <span class="name">
                            {{ project.heading }}
                        </span>

                        <div class="linksAndStack flex">

                            <div class="links flex">
                                <a target="_blank" :href="project.github" title="githubLink" class="githubLink"> <img
                                        :src="skillIcons['github']" alt="github" /> </a>
                                <a target="_blank" :href="project.deployment" title="DeployLink" class="DeployLink">
                                    <img :src="skillIcons['link']" alt="Deploy" /> </a>
                            </div>

                            <div class="stack flex">
                                <img v-for="(stackIcon, i) in project.stack" :key="`${i}-projectStackIcon`"
                                    :src="skillIcons[stackIcon]" :alt="stackIcon" />
                            </div>

                        </div>

                    </div>

                    <div class="projectDesc">
                        <p>
                            {{ project.desc }}
                        </p>
                    </div>

                </div>
            </div>

        </div>

    </div>
</template>

<script>

export default {
    name: "ProjectsSection",
    methods: {
        handleGoLeft() {
            const projectWindow = document.getElementById("projectShowcaseContainer")
            projectWindow.scrollLeft -= projectWindow.offsetWidth;
        },
        handleGoRight() {
            const projectWindow = document.getElementById("projectShowcaseContainer")
            projectWindow.scrollLeft += projectWindow.offsetWidth;
        },
    },
    data() {
        return {
            activeIndex: 0,
            Projects: [
                {
                    imagePath: require("../../../../public/assets/project-images/tst-ss.png"),
                    heading: "Tiger Safari Trails",
                    id: 0,
                    stack: ['next', 'firebase', "ts", 'vercel', "otpless"],
                    desc: "A Safari Booking Website, simplifying tiger safari bookings aggregating all Tiger Safari Operators at one place to create a one stop for safari trip seeking users with facilities to have an enquiry and one ot one chat with Safari Operators",
                    github: "#",
                    deployment: "https://tigersafaritrails.in/"
                },
                {
                    imagePath: require("../../../../public/assets/project-images/cava-prev.png"),
                    heading: "(#AskCava) D2C Chatbot",
                    id: 1,
                    stack: ["js", "shopify"],
                    desc: "The Cava D2C Sales Bot is an AI-powered, conversational recommendation bot designed for direct-to-consumer (D2C) websites. Tailored to help customers find the right products based on their specific needs, the bot provides a seamless, personalized shopping experience by guiding users to products that best match their preferences.",
                    github: "#",
                    deployment: "https://cavaathleisure.com/"
                },
                {
                    imagePath: require("../../../../public/assets/project-images/myvi-prev.png"),
                    heading: "Vi-IMC 2024",
                    id: 2,
                    stack: ['next', "ts"],
                    desc: "This AI-powered tool, presented at the VI booth during IMC 2024, was developed to empower MSME (Micro, Small, and Medium Enterprises) Owners By filling out a few basic details, business owners could generate a professional, catchy jingle to promote their Businesses",
                    github: "#",
                    deployment: "https://myvi-events.in/"
                },
                {
                    imagePath: require("../../../../public/assets/project-images/janvry-icon.png"),
                    heading: "janvry Portfolio",
                    id: 3,
                    stack: ["react", "sass", "vercel", "js"],
                    desc: "Company Portfolio page made for Janvry Studio",
                    github: "#",
                    deployment: "https://janvrywebsite-punh.vercel.app/Exclusive"
                },
                {
                    imagePath: require("../../../../public/assets/project-images/another-tor.png"),
                    heading: "Another Tor",
                    id: 4,
                    desc: "An Attempt to build a developer centric Social-Media application, a place where all your social presence available on one click, collaborative tools with open thread discussions. Made with React js",
                    stack: ["react", "sass", "netlify", "js"],
                    github: "#",
                    deployment: "https://anothertor.netlify.app/"
                },
                {
                    imagePath: require("../../../../public/assets/project-images/cardDesignSs.png"),
                    heading: "card centric design",
                    id: 5,
                    stack: ["html", "scc", "js"],
                    desc: "A card centric design webpage frontend, responsive, made with vanila html/css and javascript",
                    github: "https://github.com/1447bits/frontend/tree/main/Assignment2",
                    deployment: "https://1447bits.github.io/frontend/Assignment2/"
                },
                {
                    imagePath: require("../../../../public/assets/project-images/another-notpad.png"),
                    heading: "TipeIt",
                    id: 6,
                    stack: ["html", "css", "js"],
                    desc: "A fun project, Inspired by \"keybr.com\", A notepad to jot down your thoughts. Made with vanila html/css and javascript",
                    github: "https://github.com/1447bits/typeit",
                    deployment: "https://1447bits.github.io/typeit/"
                },
                {
                    imagePath: require("../../../../public/assets/project-images/acm-website-prev.png"),
                    heading: "ACM-DYPIEMR",
                    id: 7,
                    stack: ["react", "sass", "netlify"],
                    desc: "ACM (Association for Computing Machinery) student chapter @DYPIEMR is a Social Technical Society",
                    github: "#",
                    deployment: "https://acm-dypimer.netlify.app/"
                },
                {
                    imagePath: require("../../../../public/assets/project-images/ppt-to-slide.png"),
                    heading: "PPT to Site",
                    id: 8,
                    stack: ["html", "css", "js"],
                    desc: "A fun project/Idea to crease a site from PPT (Presentations), Made with vanila html/css and javascript",
                    github: "https://github.com/1447bits/img-slider",
                    deployment: "https://tamak.netlify.app/"
                },
            ],

            skillIcons: {
                'shopify': require("../../../../public/assets/skill-icons/shopify-icon.webp"),
                'ts': require("../../../../public/assets/skill-icons/typescript-icon.svg"),
                'slack': require("../../../../public/assets/skill-icons/slack-icon.svg"),
                'replit': require("../../../../public/assets/skill-icons/replit-icon.svg"),
                'redux': require("../../../../public/assets/skill-icons/redux-icon.svg"),
                'python': require("../../../../public/assets/skill-icons/python-icon.svg"),
                'node': require("../../../../public/assets/skill-icons/nodejs-icon.svg"),
                'next': require("../../../../public/assets/skill-icons/nextjs-icon.svg"),
                'mongo': require("../../../../public/assets/skill-icons/mongoIcon.svg"),
                'md': require("../../../../public/assets/skill-icons/markdown-icon.svg"),
                'linux': require("../../../../public/assets/skill-icons/linux-icon.svg"),
                'js': require("../../../../public/assets/skill-icons/js-icon.svg"),
                'html': require("../../../../public/assets/skill-icons/html-icon.svg"),
                'github-pages': require("../../../../public/assets/skill-icons/github-pages.svg"),
                'github': require("../../../../public/assets/skill-icons/github-icon.svg"),
                'express': require("../../../../public/assets/skill-icons/expressjs-icon.svg"),
                'css': require("../../../../public/assets/skill-icons/css-icon.svg"),
                'cpp': require("../../../../public/assets/skill-icons/cpp-icon.svg"),
                'codepen': require("../../../../public/assets/skill-icons/codepen-icon.svg"),
                'arch': require("../../../../public/assets/skill-icons/arch-linux.svg"),
                'vscode': require("../../../../public/assets/skill-icons/vscode-icon.svg"),
                'firebase': require("../../../../public/assets/skill-icons/firebase.svg"),
                'jupyter': require("../../../../public/assets/skill-icons/jupyter-icon.svg"),
                'docker': require("../../../../public/assets/skill-icons/docker-icon.svg"),
                'django': require("../../../../public/assets/skill-icons/django-icon.svg"),
                'aws': require("../../../../public/assets/skill-icons/logos_aws.svg"),
                'vue': require("../../../../public/assets/skill-icons/devicon_vuejs.svg"),
                'canva': require("../../../../public/assets/skill-icons/devicon_canva.svg"),
                'otpless': require("../../../../public/assets/skill-icons/otpless.svg"),
                'react': require("../../../../public/assets/skill-icons/react-icon.svg"),
                'figma': require("../../../../public/assets/skill-icons/figma-icon.svg"),
                'tailwind': require("../../../../public/assets/skill-icons/tailwind.svg"),
                'threejs': require("../../../../public/assets/skill-icons/threejs.svg"),
                'git': require("../../../../public/assets/skill-icons/git.svg"),
                'vercel': require("../../../../public/assets/skill-icons/vercel.svg"),
                'netlify': require("../../../../public/assets/skill-icons/netlify.svg"),
                'sass': require("../../../../public/assets/skill-icons/sass.svg"),
                'link': require("../../../../public/assets/skill-icons/linkIcon.svg"),
            },
        }
    }
}

</script>