<template>
    <div>
        <Nav />
        <div class="body-container">
            <div class="body-content">
                <Content />
                <TagList v-if="$tag.list" :items="$tag.list"></TagList>
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
  import TagList from '@theme/components/TagList.vue'
  import 'normalize.css'

  export default {
    components: {
      Nav,
      TagList
    }
  }
</script>