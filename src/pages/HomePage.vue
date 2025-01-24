<script>

import pageBg from "@/components/forHomePage/pageBg.vue"
import about from "@/components/forHomePage/about/about.vue"
import HomeHero from "../components/forHomePage/hero/Hero.vue"
import SiteDetails from "../components/forHomePage/SiteDetails/SiteDetails.vue"
import Exp from '../components/forHomePage/exp/Exp.vue'
import Projects from '../components/forHomePage/projects/Projects.vue'
import Contact from '../components/forHomePage/contact/Contact.vue'
// import ExpTimer from "@/components/forHomePage/exp/ExpTimer.vue"

export default {
    name: "Home-page",
    components: {
        pageBg,
        HomeHero,
        about,
        Exp,
        // ExpTimer,
        Projects,
        Contact,
        SiteDetails
    },
}


</script>

<template>
    <div class="home-page">
        <pageBg />
        <HomeHero />
        <about />
        <Exp />
        <!-- <ExpTimer /> -->
        <projects />
        <Contact />
        <SiteDetails />
    </div>
</template>
