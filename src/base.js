define(
  [
    'angular',
    'ngRoute',

    './base/services',
    './base/directives',
    './base/templates',
  ],
  function (
    ng,
    ngRoute,

    service,
    directives,
    templates
  ) {

    return ng.module('base', ['ngRoute', 'base.services', 'base.directives', 'base.templates'])

  }
)