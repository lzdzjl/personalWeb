<template>
    <div>
        <app-nav></app-nav>
        <app-section></app-section>
    </div>
</template>

<script>
    import AppNav from './nav/Nav.vue'
    import AppSection from './section/Section.vue'

    export default {
        components: {
            AppNav,
            AppSection
        }
    }
</script>

<style scoped>

</style>