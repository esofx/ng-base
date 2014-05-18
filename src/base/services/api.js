define(function () {
  return [
    'base.ajax', 'base.path',
    function (ajax, path) {
      var factory = function (scope) {

        scope = scope === undefined ? '' : scope;

        if(scope.length > 0 && scope.slice(-1)[0] !== '/') {
          scope += '/';
        }

        var api = {};

        /**
         * methods setup
         */
        var methods = ['get', 'put', 'post', 'delete'], l = methods.length, i = 0;

        for(;i<l;i++) {
          var m = methods[i];

          api[m] = (function (m) {
            return function (uri, options) {
              if(options === undefined)
                options = {};

              options.url = path.api(scope + uri);

              return ajax[m](options);
            }
          })(m);
        }

        /**
         * scoping setup
         */
        api.scope = factory;

        /**
         * decorators setup
         */
        api.decorators = [];

        return api;

      }

      return factory();
    }
  ];
})