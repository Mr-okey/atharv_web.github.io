<script>

import HomeHero from "../components/forHomePage/hero/Hero.vue"
import SiteDetails from "../components/forHomePage/SiteDetails/SiteDetails.vue"
import Exp from '../components/forHomePage/exp/Exp.vue'
import Projects from '../components/forHomePage/projects/Projects.vue'
import Contact from '../components/forHomePage/contact/Contact.vue'

export default {
    name: "Home-page",
    components: {
        HomeHero,
        Exp,
        Projects,
        Contact,
        SiteDetails
    },
}

</script>

<template>
    <HomeHero />
    <Exp />
    <projects />
    <Contact />
    <SiteDetails />
</template>
