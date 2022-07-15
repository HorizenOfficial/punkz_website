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
                "punkz-black-1": "#000000",
                "punkz-white-1": "#FFFFFF",
                "punkz-white-2": "#E9ECF4",
                "punkz-pink-1": "#D62464",
                "punkz-pink-2": "#DE1FA8",
                "punkz-pink-3": "#CD0093",
                "punkz-blue-1": "#00DDEB",
                "punkz-dark-blue-1": "#080B25",
            },
            fontFamily: {
                proxima: ["proxima-nova", "sans-serif"],
                workhard: ["workhard", "sans-serif"],
            },
        },
    },
    plugins: ["gatsby-plugin-postcss"],
}
