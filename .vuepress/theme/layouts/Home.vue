<template>
    <div>
        <Nav />
        <div class="body-container">
            <CoverImage> PInT is a student-led initiative at Olin College of Engineering to create and support ways for the collegiate community to apply their technical skills to tackle the wider world's complex issues. </CoverImage>
        </div>
        <!-- <div class="body-content">
            <Content />
        </div>
        <ImageTile>test</ImageTile> -->
    </div>
</template>

<style lang="scss" src="@theme/styles/styles.scss">

</style>

<style lang="scss" scoped>
    .body-container {
        display: block;
    }
</style>

<script>
    import 'typeface-ibm-plex-sans'
    import Nav from "@theme/components/Nav"
    import CoverImage from "@theme/components/CoverImage"
    import ImageTile from "@theme/components/ImageTile"
    import 'normalize.css'

    export default {
        components: {
            Nav, ImageTile, CoverImage
        }
    }
</script>
