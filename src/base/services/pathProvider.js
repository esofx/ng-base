define(
  ['config'],
  function (config) {
    return [
      function () {
        var path = {
          page: function (slug) {
            return config.pageBase + slug;
          },

          api: function (slug) {
            return config.apiBase + slug;
          },
          
          auth: function (slug) {
            return config.authBase + slug;
          },
        };

        // provider BS
        this.$get = function () {
          return this;
        };
      }
    ];
  }
)