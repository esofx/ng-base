define(
  [
    'angular',
    'client/src/index',
    'config'
  ],
  function (ng, client, config) {

    // client config block
    ng.module('client').config([
      '$locationProvider',
      '$sceDelegateProvider',
      '$routeProvider',
      'core.routingProvider',
      'core.ajaxProvider',
      function (
        $locationProvider,
        $sceDelegateProvider,
        $routeProvider,
        routingProvider,
        ajaxProvider
      ) {

        // set html5Mode for $locationProvider
        $locationProvider.html5Mode(true);

        // whitelisting outside urls for the time-being
        $sceDelegateProvider.resourceUrlWhitelist([
          '**'
        ]);

        // ajaxProvider setup
        ajaxProvider.useApiKey = false;

        // routing
        routingProvider
          .route('app', config.homePage, {
            title: 'Home',
            bodyTmpl: 'app',
            headerTmpl: 'app.header',
            panelTmpl: 'app.home',
            regexp: /^\/$/
          })
          .route('app').nest('foo', 'foo', {title: 'Foo', panelTmpl: 'app.foo', regexp: /^\/foo$/})
          .route('app').nest('bar', 'bar/:bar', {title: 'Bar', panelTmpl: 'app.bar', regexp: /^\/bar\/[a-zA-Z0-9]$/})

          .otherwise('app')
          .build($routeProvider);
      }
    ]);

  }
);
