const { name, description, repository } = require("../../package");
const repo = repository.url.replace(/.+\.[^/]+\/([^.]+).*/, "$1");
const path = require("path");
const { en } = require("./configs/navbar/en");

module.exports = {
  base: "/vuepress-plugin-tailwind/",
  title: name,
  description,
  head: [
    ["meta", { name: "baidu-site-verification", content: "code-bw3RYSPAtH" }],
    [
      "meta",
      {
        name: "google-site-verification",
        content: "SNRRjm5PAJyOIBpAG-f6bY1q68oRG0xg94NMgqO6chc",
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
