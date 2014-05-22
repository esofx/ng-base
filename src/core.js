define(
  [
    'angular',
    'ngRoute',

    './core/services',
    './core/directives',
    './core/templates',
  ],
  function (
    ng,
    ngRoute,

    service,
    directives,
    templates
  ) {

    return ng.module('core', ['ngRoute', 'core.services', 'core.directives', 'core.templates']);

  }
)