<template>
    <nav>
        <div class="navItem" v-for="(item, index) in navItems" :key="item.id">
            <a class="navLink" :class="{ 'active': activeLinkId === index }" @click="activeLinkId = index"
                :href="item.href">
                {{ item.label }}
            </a>
        </div>

        <div class="hamburgerMenu">
            <h2>
                {{ navItems[activeLinkId].label }}
            </h2>

            <div @click="toggleHamburgerMenu()" class="hamburgerIcon">
                <svg viewBox="0 0 50 27">
                    <rect x="0.726562" y="0.21582" width="49.0098" height="5.18" rx="2.59" fill="#BBBB88" />
                    <rect x="0.726562" y="10.5645" width="33.3301" height="5.18" rx="2.59" fill="#BBBB88" />
                    <rect x="0.726562" y="20.9131" width="49.0098" height="5.18" rx="2.59" fill="#BBBB88" />
                </svg>
            </div>

            <div @click="toggleHamburgerMenu()" class="hamburgerMenuPopup" :class="isHamburgerOpen ? 'visible' : 'hidden'">
                <a v-for="(item, index) in navItems" :key="item.id" class="navLink" @click="activeLinkId = index"
                    :href="item.href">
                    {{ item.label }}
                </a>
            </div>

        </div>
    </nav>
</template>

<script>
export default {
    name: "navbar-component",
    methods: {
        toggleHamburgerMenu() {
            this.isHamburgerOpen = !this.isHamburgerOpen
        }
    },
    data() {
        return {
            activeLinkId: 0,
            isHamburgerOpen: false,
            navItems: [
                { id: "navItem-1", href: '#home', label: 'Home' },
                { id: "navItem-2", href: '#exp', label: 'EXP' },
                { id: "navItem-3", href: '#project', label: 'Project' },
                { id: "navItem-4", href: '#contact', label: 'Contact' },
                { id: "navItem-5", href: '#', label: 'Blog' }
            ]
        }
    }
}
</script>