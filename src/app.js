define(
  [
    'angular',
    './app/services', './app/controllers', './app/directives', 'app/templates',
    './core',
    'ngRoute'
  ],
  function (
    ng,
    services, controllers, directives,
    core,
    ngRoute
  ) {
    return ng.module('app', [
            'app.services',
            'app.controllers',
            'app.directives',
            'core',
            'ngRoute'
          ]);
  }
)