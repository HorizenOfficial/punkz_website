require("dotenv").config({
    path: `.env`,
})

const siteUrl = `https://punkztoken.com/`

module.exports = {
    siteMetadata: {
        title: `Punkz Token`,
        siteUrl,
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-postcss",
        "gatsby-plugin-dts-css-modules",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-robots-txt",
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
                name: `Punkz Token`,
                short_name: `Punkz Token`,
                start_url: `/`,
                icon: `src/assets/images/favicon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-plausible`,
            options: {
                domain: `punkztoken.com`,
            },
        },
        {
            resolve: "gatsby-plugin-matomo",
            options: {
                siteId: "5",
                matomoUrl: "https://horizen.matomo.cloud",
                matomoPhpScript: "matomo.php",
                matomoJsScript: "matomo.js",
                cookieDomain: "*.punkztoken.com",
                siteUrl,
            },
        },
    ],
}
