// next.config.js
module.exports = {
  exportPathMap: function() {
    return {
      '/': {page: '/'},
      '/playground': {page: '/playground'},
    }
  },
}
