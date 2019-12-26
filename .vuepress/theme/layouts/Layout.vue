<template>
    <div class="body-container">
        <Nav/>
        <Content/>
    </div>
</template>

<style lang="css">
body {
  box-sizing: border-box;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
::selection {
  color: white;
  background: #fbcf16;
}
html {
  animation: fadeIn 0.4s ease-out;
  font-family: "IBM Plex Sans";
  font-weight: 300;
  /* text-align: justify; */
}
</style>

<style lang="scss" scoped>


.body-container {
  position: relative;
  max-width: 850px;
}

</style>

<script>
import 'typeface-ibm-plex-sans'
import Nav from "@theme/components/Nav";

export default {
    components: {
        Nav
    }
}
</script>