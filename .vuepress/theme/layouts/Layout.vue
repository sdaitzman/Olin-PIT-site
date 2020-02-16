<template>
    <div>
        <Nav />
        <div class="body-container">
            <div class="body-content">
                <Content />
                <List v-if="$pagination" :items="$pagination.pages"></List>
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
    import List from '@theme/components/List.vue'
    import 'normalize.css'

    export default {
        components: {
            Nav,
            List
        }
    }
</script>