define(
  [
    'angular',

    'text!templates/app.html',

    'text!templates/app/header.html',
    'text!templates/app/home.html',
    'text!templates/app/foo.html',
    'text!templates/app/bar.html'
  ],
  function (
    ng,

    appHtml,

    appHeaderHtml,
    appHomeHtml,
    appFooHtml,
    appBarHtml
  ) {

    ng.module('client.templates', []).run(['$templateCache', function ($t) {
      $t.put('app', appHtml);
      $t.put('app.header', appHeaderHtml);
      $t.put('app.home', appHomeHtml);
      $t.put('app.foo', appFooHtml);
      $t.put('app.bar', appBarHtml);
    }]);

  }
)