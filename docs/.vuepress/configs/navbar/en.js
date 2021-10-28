const en = [
  {
    text: "Top",
    link: "/",
  },
  {
    text: "Demo",
    link: "/demo",
  },
  {
    text: "Resouce",
    children: [
      {
        text: "Official guides",
        children: [
          { text: "tailwind", link: "https://tailwindcss.com" },
          { text: "vuepress", link: "https://v2.vuepress.vuejs.org/" },
        ],
      },
    ],
  },
];

module.exports.en = en;
