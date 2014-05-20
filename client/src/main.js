require(['/core/requirejs-config.js'], function () {

  require(
    [
      'angular',
      './module'
    ],
    function (ng, client) {
      ng.bootstrap(document, [client])
    }
  )

})