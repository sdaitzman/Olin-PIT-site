<template>
  <div class="nav-container">
    <img class="logo" v-if="$site.themeConfig.logo" :src="$withBase($site.themeConfig.logo)" :alt="$siteTitle">
    <ul class="nav-links">
      <router-link to="/">
        <li>Home</li>
      </router-link>
      <router-link to="/blog/">
        <li>Blog</li>
      </router-link>
      <router-link to="/resources/">
        <li>Resources</li>
      </router-link>
      <router-link to="/programs/">
        <li>Programs</li>
      </router-link>
      <router-link to="/team/">
        <li>Team</li>
      </router-link>
      <router-link to="/contact/">
        <li>Contact Us</li>
      </router-link>
    </ul>
  </div>
</template>

<style lang="scss">
  .logo {
    width: 150px;
    height: auto;
  }

  .nav-container {
    display: flex;
    align-items: center;
  }

  .nav-links {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    list-style-type: none;
    justify-content: space-evenly;
    a {
      margin-right: 15px;
      height: 100%;
    }
    li {
      font-size: 26px;
    }
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