/** @format */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "login-image":
          "url('https://new.axilthemes.com/demo/template/etrade/assets/images/bg/bg-image-9.jpg')",
        "signup-image":
          "url('https://new.axilthemes.com/demo/template/etrade/assets/images/bg/bg-image-10.jpg')",
        "newsletter-image":
          "url('https://new.axilthemes.com/demo/template/etrade/assets/images/bg/bg-image-5.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
});
