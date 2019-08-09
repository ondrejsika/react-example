module.exports = {
  pageExtensions: ["js", "jsx", "mdx"],
  exportPathMap: async function(defaultPathMap) {
    return {
      "/": { page: "/" },
      "/about-me": { page: "/about-me" },
      "/mdx": { page: "/mdx" }
    };
  }
};

const withImages = require("next-images");
module.exports = withImages(module.exports);

const withMDX = require("@next/mdx")({});
module.exports = withMDX(module.exports);

const withCSS = require("@zeit/next-css");
module.exports = withCSS(module.exports);

const withYAML = require("next-yaml");
module.exports = withYAML(module.exports);
