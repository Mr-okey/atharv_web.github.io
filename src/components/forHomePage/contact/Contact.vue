<template>

    <div id="contact">

        <div class="icons-nd-form">
            <div class="icons">
                <div v-for="(iconPath, index) in skillIcons" :key='`${index}-skillIcon`' class="icon">
                    <img :src="iconPath" alt="skillIcon">
                </div>
            </div>

            <div class="form">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="contact email" />
                <input type="text" placeholder="Message |" />

                <button>Send</button>
            </div>
        </div>

        <div class="bottomSection">
            <div v-for="(iconPath, index) in socialIcons" :key="`socialIcon-${index}`" class="icon"><img :src="iconPath"
                    alt="socialIcon" />
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
                require("../../../../public/assets/skill-icons/typescript-icon.svg"),
                require("../../../../public/assets/skill-icons/slack-icon.svg"),
                require("../../../../public/assets/skill-icons/replit-icon.svg"),
                require("../../../../public/assets/skill-icons/redux-icon.svg"),
                require("../../../../public/assets/skill-icons/python-icon.svg"),
                require("../../../../public/assets/skill-icons/nodejs-icon.svg"),
                require("../../../../public/assets/skill-icons/nextjs-icon.svg"),
                require("../../../../public/assets/skill-icons/mongoIcon.svg"),
                require("../../../../public/assets/skill-icons/markdown-icon.svg"),
                require("../../../../public/assets/skill-icons/linux-icon.svg"),
                require("../../../../public/assets/skill-icons/js-icon.svg"),
                require("../../../../public/assets/skill-icons/html-icon.svg"),
                require("../../../../public/assets/skill-icons/github-pages.svg"),
                require("../../../../public/assets/skill-icons/github-icon.svg"),
                require("../../../../public/assets/skill-icons/expressjs-icon.svg"),
                require("../../../../public/assets/skill-icons/css-icon.svg"),
                require("../../../../public/assets/skill-icons/cpp-icon.svg"),
                require("../../../../public/assets/skill-icons/codepen-icon.svg"),
                require("../../../../public/assets/skill-icons/arch-linux.svg"),
                require("../../../../public/assets/skill-icons/vscode-icon.svg"),
                require("../../../../public/assets/skill-icons/jupyter-icon.svg"),
                require("../../../../public/assets/skill-icons/docker-icon.svg"),
                require("../../../../public/assets/skill-icons/django-icon.svg"),
            ],

            socialIcons: [
                require("../../../../public/assets/socialMediaIcons/fluent_call-16-filled.svg"),
                require("../../../../public/assets/socialMediaIcons/majesticons_mail.svg"),
                require("../../../../public/assets/socialMediaIcons/mdi_github.svg"),
                require("../../../../public/assets/socialMediaIcons/mdi_linkedin.svg"),
                require("../../../../public/assets/socialMediaIcons/ri_instagram-fill.svg"),
            ]
        }
    }
}
</script>