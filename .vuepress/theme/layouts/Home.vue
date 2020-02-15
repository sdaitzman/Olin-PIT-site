<template>
    <div>
        <Nav />
        <div class="body-container">
            <div class="body-content">
                <CoverImage> PInT is a student-led initiative at Olin College of Engineering to create and support ways for the collegiate community to apply their technical skills to the wider world's complex issues. Part of this initiative means sparking events and conversations about engineering, policy, society, and our responsibility as engineers. Another part of this initiative is developing multiple avenues for students to get involved. This includes pro-bono consulting work for non-profits, integrating ethics exercises and real-life scenarios into the curriculum, and student-led activism and art. </CoverImage>
                <ImageTile>test</ImageTile>
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
