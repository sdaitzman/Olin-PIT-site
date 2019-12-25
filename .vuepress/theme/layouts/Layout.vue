<template>
    <div class="body-container">
        <Nav/>
        <Content/>
    </div>
</template>

<style lang="scss" scoped>
.body-container {
    background: pink;
}
</style>

<script>
import Nav from "@theme/components/Nav";

export default {
    components: {
        Nav
    }
}
</script>