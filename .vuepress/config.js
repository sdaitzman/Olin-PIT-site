module.exports = {
    title: 'PInT',
    themeConfig: {
        logo: '/pint.png'
    },
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-154156572-1' // UA-00000000-0
            }
        ],
        ['@vuepress/blog', {
            directories: [{
                id: 'post',
                dirname: '_posts',
                path: '/allPosts',
                pagination: {
                    perPagePosts: 2,
                },
            }, ],
            frontmatters: [{
                id: "tag",
                keys: ['tag', 'tags'],
                path: '/tag/',
                layout: 'Tag',
                frontmatter: {
                    title: 'Tag'
                },
                itemlayout: 'Tag',
                pagination: {
                    perPagePosts: 3
                }
            }, ]
        }]
    ],
    'markdown': {
        anchor: {
            permalink: false,
            permalinkBefore: true,
            permalinkSymbol: '#'
        }
    },
    'patterns': ['!**/README.md', '**/*.md', '**/*.vue']
}