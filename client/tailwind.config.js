/** @format */

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      maxWidth: {
        none: "none", // Maksimum genişlik yok
        0: "0rem", // 0 rem
        xs: "20rem", // 320px
        sm: "24rem", // 384px
        md: "28rem", // 448px
        lg: "32rem", // 512px
        xl: "36rem", // 576px
        "2xl": "42rem", // 672px
        "3xl": "48rem", // 768px
        "4xl": "56rem", // 896px
        "5xl": "64rem", // 1024px
        "6xl": "72rem", // 1152px
        "7xl": "80rem", // 1280px
        full: "100%", // Tam genişlik
        min: "min-content", // İçerik kadar minimum genişlik
        max: "max-content", // İçerik kadar maksimum genişlik
        prose: "65ch", // İçerik uzunluğu (yaklaşık 65 karakter genişlik)
        "screen-sm": "640px", // Ekran genişliği: 640px
        "screen-md": "768px", // Ekran genişliği: 768px
        "screen-lg": "1024px", // Ekran genişliği: 1024px
        "screen-xl": "1280px", // Ekran genişliği: 1280px
        "screen-2xl": "1536px", // Ekran genişliği: 1536px
      },
      minWidth: {
        none: "none", // Maksimum genişlik yok
        0: "0rem", // 0 rem
        xs: "20rem", // 320px
        sm: "24rem", // 384px
        md: "28rem", // 448px
        lg: "32rem", // 512px
        xl: "36rem", // 576px
        "2xl": "42rem", // 672px
        "3xl": "48rem", // 768px
        "4xl": "56rem", // 896px
        "5xl": "64rem", // 1024px
        "6xl": "72rem", // 1152px
        "7xl": "80rem", // 1280px
        full: "100%", // Tam genişlik
        min: "min-content", // İçerik kadar minimum genişlik
        max: "max-content", // İçerik kadar maksimum genişlik
        prose: "65ch", // İçerik uzunluğu (yaklaşık 65 karakter genişlik)
        "screen-sm": "640px", // Ekran genişliği: 640px
        "screen-md": "768px", // Ekran genişliği: 768px
        "screen-lg": "1024px", // Ekran genişliği: 1024px
        "screen-xl": "1280px", // Ekran genişliği: 1280px
        "screen-2xl": "1536px", // Ekran genişliği: 1536px
      },
      backgroundImage: {
        "login-image": "url('https://new.axilthemes.com/demo/template/etrade/assets/images/bg/bg-image-9.jpg')",
        "signup-image": "url('https://new.axilthemes.com/demo/template/etrade/assets/images/bg/bg-image-10.jpg')",
        "newsletter-image": "url('https://new.axilthemes.com/demo/template/etrade/assets/images/bg/bg-image-5.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
