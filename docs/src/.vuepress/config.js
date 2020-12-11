const {description} = require('../../package')

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'Astro Documentation',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', {name: 'theme-color', content: '#7787da'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */

    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        nav: [
            {
                text: 'Home',
                link: '/',
            },
            {
                text: 'Guide',
                link: '/guide/introduction/',
            },
            {
                text: 'Commands',
                link: '/commands/',
            },
            {
                text: 'Website',
                link: 'https://astro-bot.space'
            },
            {
                text: 'Discord',
                link: 'https://astro-bot.space/support'
            }
        ],
        sidebar: {
            '/guide/': [
                {
                    title: 'Introduction',
                    collapsable: false,
                    children: [
                        ['introduction/', 'Intro'],
                    ]
                },
                {
                    title: 'Server Member Guide',
                    collapsable: false,
                    children: [
                        ['serverMembers/', 'Basics'],
                    ]
                },
                {
                    title: 'Server Admin Guide',
                    collapsable: false,
                    children: [
                        ['serverAdmins/', 'Basics'],
                    ]
                },
            ],
            '/commands/': [
                {
                    title: 'Command List',
                    collapsable: false,
                    children: [
                        ['', 'All'],
                    ]
                },
            ],
        },
        '/': {
            sidebar: 'auto'
        }
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}
