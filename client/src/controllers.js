define(
  [
    'angular',
    'client/src/services',

    'client/src/controllers/master'
  ],
  function (
    ng,
    services,

    masterCtrl
  ) {

    ng.module('client.controllers', ['client.services'])
      .controller('masterCtrl', masterCtrl);
  }
);
