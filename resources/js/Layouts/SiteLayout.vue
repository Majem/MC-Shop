<script>
import {defineComponent} from 'vue'
import TopBar from "@/Components/Site/TopBar/TopBar.vue";

export default defineComponent({
    name: "SiteLayout",
    components: {TopBar}
})
</script>

<template>
    <TopBar/>

    <slot/>
</template>

<style scoped>

</style>
