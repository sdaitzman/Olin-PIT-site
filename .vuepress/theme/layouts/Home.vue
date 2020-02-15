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

<style lang="scss">
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.98)
        }

        to {
            opacity: 1;
            transform: scale(1)
        }
    }

    ::selection {
        color: white;
        background: #fbcf16;
    }

    html {
        animation: fadeIn 0.4s ease-out;
    }

    body {
        font-family: "IBM Plex Sans";
        font-weight: 300;
    }
</style>

<style lang="scss" scoped>
    .body-container {
        box-sizing: border-box;
        display: absolute;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .body-content {
        position: relative;
        max-width: 850px;
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
