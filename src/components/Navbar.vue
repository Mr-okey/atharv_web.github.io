<template>
    <nav>
        <div class="navItem" v-for="(item, index) in navItems" :key="item.id">
            <a class="navLink" :class="{ 'active': activeLinkId === index }" @click="activeLinkId = index"
                :href="item.href">
                {{ item.label }}
            </a>
        </div>
    </nav>
</template>

<script>
export default {
    name: "navbar-component",
    data() {
        return {
            activeLinkId: 0,
            navItems: [
                { id: "navItem-1", href: '#home', label: 'Home' },
                { id: "navItem-2", href: '#about', label: 'EXP' },
                { id: "navItem-3", href: '#project', label: 'Project' },
                { id: "navItem-4", href: '#contact', label: 'Contact' },
                { id: "navItem-5", href: '#', label: 'Blog' }
            ]
        }
    }
}
</script>