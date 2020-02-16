<template>
    <div>
        <Nav />
        <a @click="$router.go(-1)">Back</a>
        <div class="body-container">
            <div class="body-content">
                <Content />
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
    import 'normalize.css'

    export default {
        components: {
            Nav
        }
    }
</script>