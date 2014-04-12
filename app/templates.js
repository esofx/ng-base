define(
  [
    'angular',
    'app',

    //directives templates
    'text!tmpls/directives/in-works-marker.html',
    'text!tmpls/directives/photos-uploader.html'
  ],
  function (
    ng, app,

    directiveInWorksMarker,
    directivePhotosUploader
  ) {
    ng.module('app').run(['$templateCache', function ($t) {

      $t.put('directives.in-works-marker', directiveInWorksMarker);
      $t.put('directives.photos-uploader', directivePhotosUploader);

    }])
  }
)