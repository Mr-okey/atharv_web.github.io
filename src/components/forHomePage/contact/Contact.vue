<template>

    <div id="contact">

        <div class="icons-nd-form">
            <div class="icons">
                <div v-for="(iconPath, index) in skillIcons" :key='`${index}-skillIcon`'
                    :class='`icon ${index === 8 || index === 21 || index === 30 ? "span2" : ""}`'>
                    <img :src="iconPath" alt="skillIcon">
                </div>
            </div>

            <div class="form">
                <input id="contactFormName" type="text" placeholder="Your Name" />
                <input id="contactFormContact" type="text" placeholder="contact email" />
                <textarea id="contactFormMessage" placeholder="Message |" />

                <button @click="(e) => handleFormSubmit(e)">Send</button>
            </div>
        </div>

        <div class="bottomSection">
            <div v-for="(icon, index) in socialIcons" :key="`socialIcon-${index}`" class="icon">
                <a target="_blank" :href="icon.href">
                    <img :src="icon.imgPath" alt="socialIcon" :title="icon.title" />
                </a>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "contact-section",
    data() {
        return {
            skillIcons: [
                require("../../../../public/assets/skill-icons/devicon_vuejs.svg"),
                require("../../../../public/assets/skill-icons/threejs.svg"),
                require("../../../../public/assets/skill-icons/nextjs-icon.svg"),
                require("../../../../public/assets/skill-icons/react-icon.svg"),
                require("../../../../public/assets/skill-icons/nodejs-icon.svg"),
                require("../../../../public/assets/skill-icons/git.svg"),
                require("../../../../public/assets/skill-icons/docker-icon.svg"),
                require("../../../../public/assets/skill-icons/django-icon.svg"),
                require("../../../../public/assets/skill-icons/logos_aws.svg"),
                require("../../../../public/assets/skill-icons/jupyter-icon.svg"),
                require("../../../../public/assets/skill-icons/typescript-icon.svg"),
                require("../../../../public/assets/skill-icons/python-icon.svg"),
                require("../../../../public/assets/skill-icons/mongoIcon.svg"),
                require("../../../../public/assets/skill-icons/js-icon.svg"),
                require("../../../../public/assets/skill-icons/css-icon.svg"),
                require("../../../../public/assets/skill-icons/sass.svg"),
                require("../../../../public/assets/skill-icons/html-icon.svg"),
                require("../../../../public/assets/skill-icons/otpless.svg"),
                require("../../../../public/assets/skill-icons/firebase.svg"),
                // require("../../../../public/assets/skill-icons/expressjs-icon.svg"),
                require("../../../../public/assets/skill-icons/replit-icon.svg"),
                require("../../../../public/assets/skill-icons/redux-icon.svg"),
                // require("../../../../public/assets/skill-icons/linux-icon.svg"),
                require("../../../../public/assets/skill-icons/github-pages.svg"),
                require("../../../../public/assets/skill-icons/github-icon.svg"),
                require("../../../../public/assets/skill-icons/cpp-icon.svg"),
                require("../../../../public/assets/skill-icons/codepen-icon.svg"),
                require("../../../../public/assets/skill-icons/arch-linux.svg"),
                require("../../../../public/assets/skill-icons/vscode-icon.svg"),
                require("../../../../public/assets/skill-icons/tailwind.svg"),
                require("../../../../public/assets/skill-icons/devicon_canva.svg"),
                require("../../../../public/assets/skill-icons/figma-icon.svg"),
                require("../../../../public/assets/skill-icons/vercel.svg"),
                require("../../../../public/assets/skill-icons/netlify.svg"),
                require("../../../../public/assets/skill-icons/slack-icon.svg"),
                require("../../../../public/assets/skill-icons/markdown-icon.svg"),
            ],

            socialIcons: [
                {
                    imgPath: require("../../../../public/assets/socialMediaIcons/fluent_call-16-filled.svg"),
                    title: "call",
                    href: "tel:+91-9405525889"
                },
                {
                    imgPath: require("../../../../public/assets/socialMediaIcons/majesticons_mail.svg"),
                    title: "Mail",
                    href: "mailto:vyasatharv889@gmail.com"
                },
                {
                    imgPath: require("../../../../public/assets/socialMediaIcons/mdi_github.svg"),
                    title: "github",
                    href: "https://github.com/1447bits/"
                },
                {
                    imgPath: require("../../../../public/assets/socialMediaIcons/mdi_linkedin.svg"),
                    title: "Linkedin",
                    href: "https://www.linkedin.com/in/mstatharv/"
                },
                {
                    imgPath: require("../../../../public/assets/socialMediaIcons/ri_instagram-fill.svg"),
                    title: "instagram",
                    href: "https://www.instagram.com/atharv.1447/"
                },
            ]
        }
    },
    methods: {
        handleFormSubmit(event) {
            event.preventDefault();

            const name = document.getElementById("contactFormName").value;
            const contact = document.getElementById("contactFormContact").value;
            const message = document.getElementById("contactFormMessage").value;

            if (name.length === 0 | contact.length === 0 | message.length === 0) {
                alert("Please fill all fields")
                return
            }

            const encodedMessage = this.encodeUrl(`Hello!,${name} This side,${message}, contact me at : @${contact}`);

            const waMeLink = `https://wa.me/+919405525889?text=${encodedMessage}`;

            window.open(waMeLink, '_blank');

        },
        encodeUrl(text) {
            return encodeURIComponent(text)
                .replace(/'/g, '%27')
                .replace(/"/g, '%22')
                .replace(/%20/g, '+');
        }
    }
}
</script>