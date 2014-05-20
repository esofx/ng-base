define(
  ['angular', 'app', 'config', 'base/services/routing', 'base/services/path'],
  function (ng, app, config, r, path) {

    ng.module('app').config([
      '$locationProvider', '$sceDelegateProvider', '$routeProvider', 'base.ajaxProvider',
      function ($locationProvider, $sceDelegateProvider, $routeProvider, ajaxProvider) {

        /// whitelisting thumbor install url
        $sceDelegateProvider.resourceUrlWhitelist([
          '**'
        ]);

        // ajaxProvider apiKey setting
        ajaxProvider.useApiKey = false;

        // set html5Mode for $locationProvider
        $locationProvider.html5Mode(true);
        
        var page = path.page;

        r.route('app', page(config.homePage), {
            title: 'Home', bodyTmpl: 'app', headerTmpl: 'app.header', panelTmpl: 'app.home'
          });
        
        r.route('app').nest('foo', '/foo', {title: 'Foo', panelTmpl: 'app.foo'});
        r.route('app').nest('bar', '/bar/:bar', {title: 'Bar', panelTmpl: 'app.bar'});

        r.otherwise('app');

        r.build($routeProvider);
      }
    ]);
  }
)