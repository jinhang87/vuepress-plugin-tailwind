const { name, description, repository } = require("../../package");
const repo = repository.url.replace(/.+\.[^/]+\/([^.]+).*/, "$1");
const path = require("path");
const { en } = require("./configs/navbar/en");

module.exports = {
  title: name,
  description,
  themeConfig: {
    repo,
    docsDir: "docs",
    locales: {
      "/": {
        // navbar
        navbar: en,
      },
    },
    sidebar: "auto",
  },
  plugins: [
    [require("../../index"), { corePlugins: { preflight: false } }],
    [
      "@vuepress/register-components",
      {
        componentsDir: path.resolve(__dirname, "./components"),
      },
    ],
  ],
};
