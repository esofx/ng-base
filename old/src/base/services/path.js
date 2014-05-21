define(
  ['config'],
  function (config) {
    var path = {
      page: function (slug) {
        return config.pageBase + slug;
      },

      api: function (slug) {
        return config.apiBase + slug;
      },

      auth: function (slug) {
        return config.authBase + slug;
      }
    };

    return path;
  }
)