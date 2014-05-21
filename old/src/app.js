define(
  [
    'angular',
    './app/services', './app/controllers', './app/directives', 'app/templates',
    './base',
    'ngRoute'
  ],
  function (
    ng,
    services, controllers, directives,
    base,
    ngRoute
  ) {
    return ng.module('app', [
            'app.services',
            'app.controllers',
            'app.directives',
            'base',
            'ngRoute'
          ]);
  }
)