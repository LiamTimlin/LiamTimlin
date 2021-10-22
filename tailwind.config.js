module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                landingGrey: "#dadfd6",
                aboutOrangeLight: "#f6af32",
                aboutOrangeDark: "#e77432",
                workGreyLight: "#eaebe9",
                workGreyDark: "#e1e0dd",
                workBlue: "#46b9de",
                contactRed: "#ed8063",
                contactBlue: "#158fc8",
                footerPink: "#D84684",
            },
            animation: {
                textSlide: "textSlide 4s infinite ",
            },
            keyframes: {
                textSlide: {
                    "0%": { color: "black" },
                    "25%": { textShadow: "-5px 1px #d84584" },
                    "50%": { color: "#2ab4b5" },
                    "100%": { color: "black" },
                },
            },
            boxShadow: {
                squareShadow: "-10px 10px #323232",
            },
            backgroundImage: {
                paperBack: "url('https://images.pexels.com/photos/7599587/pexels-photo-7599587.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')",
                paperBack2: "url('https://images.pexels.com/photos/7598250/pexels-photo-7598250.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')",
                paperBack3: "url('https://images.pexels.com/photos/7598536/pexels-photo-7598536.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')",
                // paperBack3: "url('https://images.pexels.com/photos/1555199/pexels-photo-1555199.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
