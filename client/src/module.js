require(
  [
    'angular',
    'ngRoute',

    'core',

    './services',
    './controllers',
    './directives',
    './templates'
  ],
  function (
    ng, ngRoute,
    core,
    services, controllers, directives, templates
  ) {

    ng.module('client', [ngRoute, core, services, controllers, directives, templates]);

    return ng.module('client');
  }
)