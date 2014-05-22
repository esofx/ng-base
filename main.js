require.config({
  baseUrl: location.protocol + '//' + location.host,

  paths: {
    jquery: 'common/libs/jquery',
    angular: 'common/libs/angular',
    ngRoute: 'common/libs/angular-route',
    text: 'common/libs/text'
  },

  shim: {
    jquery: {
      exports: 'jQuery'
    },
    angular: {
      deps: ['jquery'],
      exports: 'angular'
    },
    ngRoute: {
      deps: ['angular'],
      exports: 'ngRoute'
    }
  }
})


require(
  [
    'angular',
    'client/src/index',
    'client/src/config'
  ],
  function (ng, client, config) {
    console.log('here');
    ng.bootstrap(document, ['client'])
  }
)
