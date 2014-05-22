define(
  [
    'angular',
    'ngRoute',

    './services',
    './directives',
    './templates',
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