requirejs.config({
  baseUrl: location.protocol + '//' + location.host + '/app',
  // paths to different libs being used in the project
  // finally, the "dream" of using r.js to build a motherfucking
  // requirejs project might come to reality
  paths: {
    config: './config',
    jquery: '../assets/js/jquery.min',
    angular: '../assets/js/angular.min',
    ngRoute: '../assets/js/angular-route.min',
    moment: '../assets/js/moment.min'
  },

  shim: {
    angular: {
      deps: ['jquery'],
      exports: 'angular'
    },
    ngRoute: {
      deps: ['angular'],
      exports: 'ngRoute'
    }
  }
});

requirejs(
  ['angular', 'app', 'router'],
  function (ng, app, router) {
    ng.bootstrap(document, ['app'])
  }
);