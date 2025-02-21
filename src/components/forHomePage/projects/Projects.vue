<template>
    <div id="projects">
        <p class="pageHeading">Projects <a href="#projects">&#128279;</a></p> 
        <div class="projectContainer">
            <div class="project-item" v-for="project in Projects" :key="project.idn">
                <a target="_blank" :href="project.deployment">
                    <img :src="project.imagePath" :alt="project.heading">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RandomBoxes',
    data() {
        return {
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
                    stack: ["js", "shopify", "python"],
                    desc: "The Cava D2C Sales Bot is an AI-powered, conversational recommendation bot designed for direct-to-consumer (D2C) websites. Tailored to help customers find the right products based on their specific needs, the bot provides a seamless, personalized shopping experience by guiding users to products that best match their preferences.",
                    github: "#",
                    deployment: "https://cavaathleisure.com/"
                },
                {
                    imagePath: require("../../../../public/assets/project-images/myvi-prev.png"),
                    heading: "Vi-IMC 2024",
                    id: 2,
                    stack: ['next', "ts", "python"],
                    desc: "This AI-powered tool, presented at the VI booth during IMC 2024, was developed to empower MSME (Micro, Small, and Medium Enterprises) Owners By filling out a few basic details, business owners could generate a professional, catchy jingle to promote their Businesses",
                    github: "#",
                    deployment: "https://myvi-events.in/"
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
                    imagePath: require("../../../../public/assets/project-images/PPM.png"),
                    heading: "Personal Project management system",
                    id: 8,
                    stack: ["Next", "Drizzle", "ts", "shadCn", "postgres", "reactQUery", "Zustland"],
                    desc: "A Personal project and task management tool, with a dashboard and calendar to track upcoming and on going projects, made with next js and postgres",
                    github: "https://github.com/1447bits/personal-project-manager",
                    deployment: "https://personal-project-manager-one.vercel.app/"
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
                // {
                //     imagePath: require("../../../../public/assets/project-images/acm-website-prev.png"),
                //     heading: "ACM-DYPIEMR",
                //     id: 7,
                //     stack: ["react", "sass", "netlify"],
                //     desc: "ACM (Association for Computing Machinery) student chapter @DYPIEMR is a Social Technical Society",
                //     github: "#",
                //     deployment: "https://acm-dypimer.netlify.app/"
                // },
                {
                    imagePath: require("../../../../public/assets/project-images/janvry-icon.png"),
                    heading: "janvry Portfolio",
                    id: 3,
                    stack: ["react", "sass", "vercel", "js"],
                    desc: "Company Portfolio page made for Janvry Studio",
                    github: "#",
                    deployment: "https://janvrywebsite-punh.vercel.app/Exclusive"
                },


            ],
        }
    }
}
</script>
