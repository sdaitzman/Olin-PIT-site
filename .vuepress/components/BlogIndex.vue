<template>
    <div>
        <PostList :items="posts"></PostList>
    </div>
</template>

<style lang="scss" scoped>
    @import "@theme/styles/styles.scss";
</style>

<script>
    import PostList from '@theme/components/PostList.vue'

    export default {
        components: {
            PostList
        },
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