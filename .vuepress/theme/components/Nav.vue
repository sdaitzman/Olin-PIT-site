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
        <router-link to="/resources/"><li>Resources</li></router-link>
        <router-link to="/programs/"><li>Programs</li></router-link>
        <router-link to="/team/"><li>Team</li></router-link>
        <router-link to="/contact/"><li>Contact Us</li></router-link>
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