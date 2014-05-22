define(
  [
    'angular',
    './services'
  ],
  function (
    ng,
    services
  ) {

    ng.module('client.controllers', ['client.services']);
    
  }
)