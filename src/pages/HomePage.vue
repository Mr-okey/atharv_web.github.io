<script>

import HomeHero from "../components/forHomePage/hero/Hero.vue"
import Exp from '../components/forHomePage/exp/Exp.vue'
import Projects from '../components/forHomePage/projects/Projects.vue'
import Contact from '../components/forHomePage/contact/Contact.vue'

export default {
    name: "Home-page",
    components: {
        HomeHero,
        Exp,
        Projects,
        Contact
    },
}

</script>

<template>
    <HomeHero />
    <Exp />
    <projects />
    <Contact />
</template>
