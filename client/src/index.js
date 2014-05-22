require(
  [
    'angular',
    'ngRoute',

    '../core/src/index',

    'services',
    'controllers',
    'directives',
    'templates'
  ],
  function (
    ng, ngRoute,
    core,
    services, controllers, directives, templates
  ) {

    ng.module(
      'client', [
        'ngRoute',
        'core',
        'client.services',
        'client.controllers',
        'client.directives',
        'client.templates'
      ]
    );

  }
)