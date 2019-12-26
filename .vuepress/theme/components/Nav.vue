<template>
  <div>
    <img
        class="logo"
        v-if="$site.themeConfig.logo"
        :src="$withBase($site.themeConfig.logo)"
        :alt="$siteTitle"
      >
      <ul class="nav-links">
        <a href="/blog/"><li>Blog</li></a>
      </ul>
  </div>
</template>

<style lang="scss">
.logo {
    width: 150px;
    height: auto;
}
</style>

<script>
export default {
    name: 'Nav',
    data() {
        return {}
    }
}
</script>