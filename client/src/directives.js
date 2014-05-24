define(
  [
    'angular',
    'client/src/services'
  ],
  function (
    ng,
    services
  ) {
    
    ng.module('client.directives', ['client.services']);

  }
)
