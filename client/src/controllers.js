define(
  [
    'angular',
    'client/src/services',

    'client/src/controllers/master',
    'client/src/controllers/app',
    'client/src/controllers/app/bar'
  ],
  function (
    ng,
    services,

    masterCtrl,
    appCtrl,
    barCtrl
  ) {

    ng.module('client.controllers', ['client.services'])
      .controller('masterCtrl', masterCtrl)
      .controller('appCtrl', appCtrl)
      .controller('barCtrl', barCtrl);
  }
);
