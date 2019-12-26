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
        ]
    ],
    'markdown': {
        anchor: {
            permalink: false,
            permalinkBefore: true,
            permalinkSymbol: '#'
        }
    }
}