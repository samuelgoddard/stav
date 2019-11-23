const tailwindcss = require("tailwindcss");
const postcssImport = require("postcss-import");
const postcssResolver = require("postcss-import-resolver");
const postcssNested = require("postcss-nested");

module.exports = () => ({
  plugins: [
    postcssImport({
      resolve: postcssResolver({
        extensions: [".css"],
        modules: ["node_modules"],
      }),
    }),
    tailwindcss("./tailwind.config.js"),
    postcssNested({ unwrap: ["screen"] })
  ],
})