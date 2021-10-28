module.exports = (options = {}, ctx) => {
  const { name } = require("./package");
  const { options: voptions } = ctx;
  const { tailwindConfig, ...others } = options;
  const { logger } = require("@vuepress/utils");
  const path = require("path");
  const process = require("process");
  const cwd = process.cwd();
  const sourceDir = voptions.source;
  const vuepressDir = path.resolve(voptions.source, ".vuepress");

  const defaultTailwindConfig = () => {
    try {
      return require(`${cwd}/tailwind.config.js`);
    } catch (e) {
      const purge = {
        content: [sourceDir, vuepressDir].map(
          (dir) => `${dir}/**/*.@(js|ts|md|vue|html)`
        ),
      };
      return Object.assign({ purge }, others);
    }
  };

  const plugins = [
    require("tailwindcss")(tailwindConfig || defaultTailwindConfig()),
    require("autoprefixer"),
  ];

  voptions.bundlerConfig = Object.assign(voptions.bundlerConfig || {}, {
    postcss: { postcssOptions: { plugins } },
  });

  logger.tip(`[${name}] tailwindcss is enabled`);
  return { name };
};
