<template>
  <NavbarComponent />
  <HomePage />
</template>

<script>
import HomePage from './pages/HomePage.vue'
import NavbarComponent from './components/Navbar.vue'

export default {
  name: '1447Bits',
  components: {
    HomePage,
    NavbarComponent
  }
}
</script>

<style>
@import url(./global.css);
</style>