define(
  [
    'angular',
    'app'
  ],
  function (
    ng,
    app
  ) {
    // setup env specific variables
    ng.module('app').constant('env', {
      appName: 'App',    
      apiBase: 'http://api.foo.dev/',
      socketAddr: 'ws://api.foo.dev:8080',
      authBase: 'http://api.foo.dev/auth/',
      pageBase: '/',
      homePage: '',
      loginPage: 'login',
      apiKeyName: 'api-key',
      refreshedKeyName: 'refreshed-api-key'
    });

    // app config block
    ng.module('app').config([
      'env',
      '$locationProvider',
      '$sceDelegateProvider',
      'core.routingProvider',
      'core.ajaxProvider',
      function (
        env,
        $locationProvider,
        $sceDelegateProvider,
        ajaxProvider,
        routingProvider
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
          .route('app', env.homePage, {
            title: 'Home', bodyTmpl: 'app', headerTmpl: 'app.header', panelTmpl: 'app.home'
          })
          .route('app').nest('foo', '/foo', {title: 'Foo', panelTmpl: 'app.foo'})
          .route('app').nest('bar', 'bar/:bar', {title: 'Bar', panelTmpl: 'app.foo'})

          .otherwise('app')
          .build()

      }
    ])
  }
)