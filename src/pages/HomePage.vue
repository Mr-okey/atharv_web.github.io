<script>

import pageBg from "@/components/forHomePage/pageBg.vue"
import HomeHero from "../components/forHomePage/hero/Hero.vue"
import SiteDetails from "../components/forHomePage/SiteDetails/SiteDetails.vue"
import Exp from '../components/forHomePage/exp/Exp.vue'
import Projects from '../components/forHomePage/projects/Projects.vue'
import Contact from '../components/forHomePage/contact/Contact.vue'
import guessNumberComp from "@/components/forHomePage/SiteDetails/guessNumberComp.vue"

export default {
    name: "Home-page",
    components: {
        pageBg,
        HomeHero,
        Exp,
        Projects,
        Contact,
        guessNumberComp,
        SiteDetails
    },
}

</script>

<template>
    <div class="home-page">
        <pageBg />
        <HomeHero />
        <Exp />
        <projects />
        <Contact />
        <guessNumberComp />
        <SiteDetails />
    </div>
</template>
