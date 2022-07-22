module.exports = {
    mode: "jit",
    content: [
        "./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                "3xl": "1921px",
            },
            colors: {
                gray: "#868C9A",
                "primary-light": "#DE1FA8",
                primary: "#CD0093",
                "primary-dark": "#300223",
                secondary: "#00DDEB",
                "secondary-dark": "#080B25",
            },
            fontFamily: {
                proxima: ["proxima-nova", "sans-serif"],
                workhard: ["workhard", "sans-serif"],
            },
        },
    },
    plugins: ["gatsby-plugin-postcss"],
}
