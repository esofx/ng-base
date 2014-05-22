define(function () {
  var path = {
    page: function (slug) {
      return env.pageBase + slug;
    },

    api: function (slug) {
      return env.apiBase + slug;
    },

    auth: function (slug) {
      return env.authBase + slug;
    }
  };

  return path;
})