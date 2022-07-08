import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
    siteMetadata: {
        title: `PunkZ Token Website`,
        siteUrl: `https://punkztoken.com`,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-postcss",
        "gatsby-plugin-dts-css-modules",
        "gatsby-plugin-robots-txt",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
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
    ],
}

export default config
