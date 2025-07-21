/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // O Next.js geralmente adiciona isso também, o que é bom.
  },
};

export default config;
