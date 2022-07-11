module.exports = {
    siteMetadata: {
        title: `PunkZ Token`,
        siteUrl: `https://punkztoken.com/`,
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-postcss",
        "gatsby-plugin-dts-css-modules",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-robots-txt",
        "gatsby-plugin-image",
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    breakpoints: [750, 1080, 1366, 1920, 2560],
                },
            },
        },
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: "gatsby-plugin-prettier-eslint",
            options: {
                prettier: {
                    patterns: [
                        // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
                        "**/*.{css,scss,less}",
                        "**/*.{json,json5}",
                        "**/*.{graphql}",
                        "**/*.{md,mdx}",
                        "**/*.{html}",
                        "**/*.{yaml,yml}",
                    ],
                },
                eslint: {
                    patterns: "**/*.{js,jsx,ts,tsx}",
                    customOptions: {
                        fix: true,
                        cache: true,
                    },
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `PunkZ Token`,
                short_name: `PunkZ Token`,
                start_url: `/`,
                icon: `src/assets/images/favicon.jpeg`,
            },
        },
    ],
}
