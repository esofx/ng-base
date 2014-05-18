define(
  ['angular', 'app', 'util/routeBuilder', 'util/path', 'config', 'templates'],
  function (ng, app, r, path, config, templates) {

    var page = path.page;

    ng.module('app').config([
      '$locationProvider', '$sceDelegateProvider', 'base.routingProvider', 'base.ajaxProvider',
      function ($locationProvider, $sceDelegateProvider, routingProvider, ajaxProvider) {

        /// whitelisting thumbor install url
        $sceDelegateProvider.resourceUrlWhitelist([
          '**'
        ]);

        ajaxProvider.useApiKey = false;

        $locationProvider.html5Mode(true);

        var r = routingProvider.$get();

        r.route('app', page(config.homePage), {
            title: 'Home', bodyTmpl: 'app', headerTmpl: 'app.header', panelTmpl: 'app.home'
          })
         .otherwise('app')
         .build();        
      }
    ]);
  }
)