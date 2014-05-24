define(
  [
    'angular',
    'client/src/services'
  ],
  function (
    ng,
    services
  ) {

    ng.module('client.controllers', ['client.services'])
      .controller('masterCtrl', function () {
        console.log('Hello world');
      });
    
  }
);
