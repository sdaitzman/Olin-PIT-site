
<!-- Import font with: <link href="https://fonts.googleapis.com/css?family=Montserrat:100" rel="stylesheet"> -->
<template>
    <div>
        <div v-if="this.posts">
            <li v-for="post in this.posts">
                <router-link class="page-link" :to="post.path">{{ post.title }}</router-link>
            </li>
            <div id="pagination">
                <router-link v-if="this.posts.hasNext" :to="this.posts.nextLink">Next</router-link>
            </div>
        </div>
    </div>
</template>

<!-- scoped is important because it limits the styles here to this component-->
<style lang="scss" scoped>

</style>

<script>
  export default {
    props: {
      posts: Array
    },
  }
</script>
