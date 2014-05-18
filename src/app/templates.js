define(
  [
    'angular',

    'text!./tmpls/app.html',

    'text!./tmpls/app/header.html',
    'text!./tmpls/app/home.html',
    'text!./tmpls/app/foo.html',
    'text!./tmpls/app/bar.html'
  ],
  function (
    ng,

    appHtml,

    appHeaderHtml,
    appHomeHtml,
    appFooHtml,
    appBarHtml
  ) {

    ng.module('app.templates', []).run(['$templateCache', function ($t) {
      $t.put('app', appHtml);
      $t.put('app.header', appHeaderHtml);
      $t.put('app.home', appHomeHtml);
      $t.put('app.foo', appFooHtml);
      $t.put('app.bar', appBarHtml);
    }]);

    return ng.module('app.templates');
  }
)