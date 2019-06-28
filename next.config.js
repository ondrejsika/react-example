module.exports = {
  exportPathMap: async function(defaultPathMap) {
    return {
      '/': { page: '/' },
    };
  }
};

const withPages = require('@primer/next-pages/plugin')
module.exports = withPages(module.exports)
