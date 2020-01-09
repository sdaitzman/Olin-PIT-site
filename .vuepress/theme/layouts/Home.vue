<template>
    <div>
        This is the home layout!
        <ImageTile>test</ImageTile>
        <Nav />
        <div class="body-container">
            <div class="body-content">
                <Content />
            </div>
        </div>
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
        display: flex;
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
    import ImageTile from "@theme/components/ImageTile"
    import 'normalize.css'

    export default {
        components: {
            Nav, ImageTile
        }
    }
</script>