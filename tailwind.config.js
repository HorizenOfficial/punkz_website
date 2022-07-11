module.exports = {
    mode: "jit",
    content: [
        "./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "punkz-black-1": "#000000",
                "punkz-white-1": "#FFFFFF",
                "punkz-white-2": "#E9ECF4",
                "punkz-pink-1": "#D62464",
                "punkz-pink-2": "#DE1FA8",
                "punkz-dark-blue-1": "#080B25",
            },
            fontFamily: {
                proxima: ["proxima-nova", "sans-serif"],
            },
        },
    },
    plugins: ["gatsby-plugin-postcss"],
}
