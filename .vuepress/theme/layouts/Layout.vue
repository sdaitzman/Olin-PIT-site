<template>
    <div>
        <Nav/>
        <div class="body-container">
            <div class="body-content">
                <Content/>
                <PostList v-if="$pagination" :items="$pagination._matchedPages"></PostList>
            </div>
        </div>

    </div>
</template>

<style lang="scss" src="@theme/styles/styles.scss">

</style>

<style lang="scss" scoped>

</style>

<script>
    import 'typeface-ibm-plex-sans'
    import Nav from "@theme/components/Nav"
    import PostList from '@theme/components/PostList.vue'
    import 'normalize.css'

    export default {
        components: {
            Nav,
            PostList
        }
    }
</script>