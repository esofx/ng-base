requirejs.config({
  baseUrl: location.protocol + '//' + location.host + '/src',
  // paths to different libs being used in the project
  // finally, the "dream" of using r.js to build a motherfucking
  // requirejs project might come to reality
  paths: {
    config: './config',
    jquery: '../assets/js/jquery.min',
    angular: '../assets/js/angular',
    ngRoute: '../assets/js/angular-route',
    moment: '../assets/js/moment.min',
    text: '../assets/js/text',
    path: './util/path',
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
});

requirejs(
  ['angular', './app', './router'],
  function (ng, app, router) {
    ng.bootstrap(document, ['app'])
  }
);
