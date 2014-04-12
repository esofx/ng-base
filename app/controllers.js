define(
  [
    'angular',
    'services',

    'controllers/master',
    'controllers/app'
  ],
  function (
    ng,
    services,

    masterCtrl,
    appCtrl
  ) {

    ng.module('app.controllers', ['app.services'])
      .controller('masterCtrl', masterCtrl)
      .controller('appCtrl', appCtrl)

  }
)