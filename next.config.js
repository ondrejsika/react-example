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

const withPages = require("@primer/next-pages/plugin");
module.exports = withPages(module.exports);

const withImages = require("next-images");
module.exports = withImages(module.exports);

const withMDX = require("@next/mdx")({});
module.exports = withMDX(module.exports);
