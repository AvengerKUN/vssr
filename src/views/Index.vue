<template>
    <div class="index">
        <v-s-s-r-search-list class="vssr-search-list"/>
    </div>
</template>

<script>
    import VSSRSearchList from "../components/VSSR/SearchList/VSSRSearchList";
    export default {
        name: "Index",
        components: {VSSRSearchList},
    }
</script>

<style scoped>
    .index{
        min-width: 100vw;
        min-height: 100vh;
        box-sizing: border-box;
        padding-top: 2.5vh;
        padding-bottom: 2.5vh;
        background-color: #F7F6FB;
    }
    .vssr-search-list{
        min-height: 95vh;
    }
</style>
