define(
  ['angular', 'app', 'util/routeBuilder', 'util/path', 'config', 'templates'],
  function (ng, app, r, path, config, templates) {

    var page = path.page;
    var tmpl = path.tmpl;

    ng.module('app').config([
      '$routeProvider', '$locationProvider', '$sceDelegateProvider',
      function ($routeProvider, $locationProvider, $sceDelegateProvider) {

        /// whitelisting thumbor install url
        $sceDelegateProvider.resourceUrlWhitelist([
          '**'
        ]);
      }
    ]);
  }
)