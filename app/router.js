define(
  ['angular', 'app', 'util/routeBuilder', 'util/path', 'config', 'templates'],
  function (ng, app, r, path, config, templates) {

    var page = path.page;

    ng.module('app').config([
      '$routeProvider', '$locationProvider', '$sceDelegateProvider',
      function ($routeProvider, $locationProvider, $sceDelegateProvider) {

        /// whitelisting thumbor install url
        $sceDelegateProvider.resourceUrlWhitelist([
          '**'
        ]);

        $locationProvider.html5Mode(true);

        $routeProvider
          .when(
            page(config.homePage),
            r('app', {
              title: 'Home',
              bodyTmpl: 'app',
              headerTmpl: 'app.header',
              panelTmpl: 'app.home'
            })
          )
          .otherwise({redirectTo: config.homePage})
      }
    ]);
  }
)