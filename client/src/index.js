require(
  [
    'angular',
    'ngRoute',

    // '../core/src/index', //todo: why are we loading the core index file? is it just to expose core methods? then why not use a provider?

    'client/src/services',
    'client/src/controllers',
    'client/src/directives',
    'client/src/templates'
  ],
  function (
    ng, ngRoute,
    // core,
    services, controllers, directives, templates
  ) {
    return {
      1: 'hello'
    };
    var clientModule = ng.module(
      'client', [
        'ngRoute',
        // 'core',
        'client.services',
        'client.controllers',
        'client.directives',
        'client.templates'
      ]
    );

    // console.log(clientModule);

    return clientModule;
  }
);
