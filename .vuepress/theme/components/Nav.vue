<template>
  <div>
    <img
        class="logo"
        v-if="$site.themeConfig.logo"
        :src="$withBase($site.themeConfig.logo)"
        :alt="$siteTitle"
      >
      <ul class="nav-links">
        <router-link to="/"><li>Home</li></router-link>
        <router-link to="/blog/"><li>Blog</li></router-link>
        <router-link to="/fellowship/"><li>Fellowship</li></router-link>
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