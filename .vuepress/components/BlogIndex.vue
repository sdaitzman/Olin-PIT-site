<template>
<div>
    <div class="test" v-for="post in posts">
        <h2>
            <router-link :to="post.path">{{ post.title }}</router-link>
        </h2>
        
        <!-- <p>{{ post.frontmatter.description }}</p> -->

        <p><router-link :to="post.path">Read more</router-link></p>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        posts() {
            // console.log(this.$site.pages.filter(x => x.id == 'post'))
            return this.$site.pages.filter((x) => {
                return x.id === 'post'
                    && x.frontmatter.tags.includes('summary')
            }).sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
        }
    }
}
</script>