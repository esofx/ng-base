define(
  ['angular', 'services', 'controllers', 'directives', 'ngRoute'],
  function (ng, services, controllers, directives, ngRoute) {
    ng.module('app', ['app.services', 'app.controllers', 'app.directives', 'ngRoute']);
  }
)