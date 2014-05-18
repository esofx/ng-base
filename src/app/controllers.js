define(
  [
    'angular',
    './services',
    
    './controllers/master',
    './controllers/app'
  ],
  function (
    ng,
    services,

    masterCtrl,
    appCtrl
  ) {

    ng.module('app.controllers', ['app.services'])
      .controller('master', masterCtrl)
      .controller('app', appCtrl)

    return ng.module('app.controllers');
  }
)