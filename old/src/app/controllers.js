define(
  [
    'angular',
    './services',
    
    './controllers/master',
    './controllers/app',
    './controllers/app/bar'
  ],
  function (
    ng,
    services,

    masterCtrl,
    appCtrl,

    appBarCtrl
  ) {

    ng.module('app.controllers', ['app.services'])
      .controller('masterCtrl', masterCtrl)
      .controller('appCtrl', appCtrl)
      .controller('app.barCtrl', appBarCtrl)

    return ng.module('app.controllers');
  }
)