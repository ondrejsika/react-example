module.exports = {
  exportPathMap: async function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/about-me': { page: '/about-me' },
    };
  }
};

const withPages = require('@primer/next-pages/plugin')
module.exports = withPages(module.exports)
