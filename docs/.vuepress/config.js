const { name, description, repository } = require("../../package");
const repo = repository.url.replace(/.+\.[^/]+\/([^.]+).*/, "$1");
const path = require("path");
const { en } = require("./configs/navbar/en");

module.exports = {
  //base: "/vuepress-plugin-tailwind/",
  title: name,
  description,
  head: [
    ["meta", { name: "baidu-site-verification", content: "code-9R4oVIrwpQ" }],
    [
      "meta",
      {
        name: "google-site-verification",
        content: "mRdc9pPDeZz0SRV8CCWguRgzxiS0JObz6Zb_9DdwEvE",
      },
    ],
  ],
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
