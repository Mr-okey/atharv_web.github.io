<script>

import HomeHero from "../components/forHomePage/hero/Hero.vue"
import Exp from '../components/forHomePage/exp/Exp.vue'

export default {
    name: "Home-page",
    components: {
        HomeHero,
        Exp
    },
}
</script>

<template>
    <HomeHero />
    <Exp />
</template>
