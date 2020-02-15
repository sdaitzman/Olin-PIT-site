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

<!-- Colors:
#FB791B orange
#FBCE1A yellow
#34BEA5 green
#80968D light grey
#617472 medium grey
#2C3E40 dark grey
 -->

<style lang="scss">
  .logo {
    width: 80px;
    height: auto;
    margin-left: 15px;
  }

  .nav-container {
    display: flex;
    align-items: center;
    background-color: #1e948c; // create a variable file for PIT colors
    padding: 5px;
    box-sizing: border-box;
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
      text-decoration: none;
      color: white;
      font-weight: normal;
    }
    a:hover {
      color: #FBCE1A;
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
