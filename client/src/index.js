require(
  [
    'angular',
    'ngRoute',

    // '../core/src/index', //todo: why are we loading the core index file? is it just to expose core methods? then why not use a provider?

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