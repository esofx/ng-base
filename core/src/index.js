define(
  [
    'angular',
    'ngRoute',

    'core/src/services',
    'core/src/directives',
    'core/src/templates',
  ],
  function (
    ng,
    ngRoute,

    services,
    directives,
    templates
  ) {

    return ng.module('core', ['ngRoute', 'core.services', 'core.directives', 'core.templates']);

  }
)
