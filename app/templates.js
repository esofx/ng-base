define(
  [
    'angular',
    'app',

    //directives templates
    'text!tmpls/directives/in-works-marker.html',
    'text!tmpls/directives/photos-uploader.html',

    'text!tmpls/app.html',
    'text!tmpls/app/header.html',
    'text!tmpls/app/home.html'
  ],
  function (
    ng, app,

    directiveInWorksMarkerTmpl,
    directivePhotosUploaderTmpl,

    appTmpl,
    appHeaderTmpl,
    appHomeTmpl
  ) {
    ng.module('app').run(['$templateCache', function ($t) {

      $t.put('directives.in-works-marker', directiveInWorksMarkerTmpl);
      $t.put('directives.photos-uploader', directivePhotosUploaderTmpl);

      $t.put('app', appTmpl);
      $t.put('app.header', appHeaderTmpl);
      $t.put('app.home', appHomeTmpl);
    }])
  }
)