require.config({
  baseUrl: location.protocol + '//' + location.host,

  paths: {
    jquery: 'common/libs/jquery.min',
    angular: 'common/libs/angular',
    ngRoute: 'common/libs/angular-route',
    text: 'common/libs/text',

    core: 'core/src/module'
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