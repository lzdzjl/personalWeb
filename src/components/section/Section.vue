<template>
    <section class="container2">
        <canvas id="canvas" class="hidden-xs hidden-ms"></canvas>
        <app-section1></app-section1>
        <app-section2></app-section2>
        <app-section3></app-section3>
        <app-section4></app-section4>
        <app-section5></app-section5>
        <app-section6></app-section6>
    </section>
</template>

<script>
    import AppSection1 from './Section01.vue'
    import AppSection2 from './Section02.vue'
    import AppSection3 from './Section03.vue'
    import AppSection4 from './Section04.vue'
    import AppSection5 from './Section05.vue'
    import AppSection6 from './Section06.vue'

    export default {
        components: {
            AppSection1,
            AppSection2,
            AppSection3,
            AppSection4,
            AppSection5,
            AppSection6
        }
    }
</script>

<style scoped>
    .container2{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    canvas {
        position: absolute;
        z-index: 1110;
    }
</style>