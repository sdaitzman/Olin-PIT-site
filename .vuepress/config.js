module.exports = {
    title: 'PInT',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about/' },
            { text: 'Blog', link: '/blog/' }
        ],
        logo: '/pint.png'
    },
    'markdown': {
        anchor: {
            permalink: false,
            permalinkBefore: true,
            permalinkSymbol: '#'
        }
    }
}