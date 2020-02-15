<template>
<div>
    <List :posts="posts"></List>
</div>
</template>

<script>
import List from '../theme/components/List.vue'

export default {
    components: {
        List
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