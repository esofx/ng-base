define(
  [
    'angular',
    'text!./tmpls/directives/inWorksMarker.html'
  ],
  function (
    ng,
    directivesInWorksMarkerTmpl
  ) {

    ng.module('base.templates', []).run(['$templateCache', function ($t) {

      $t.put('base.directives.inWorksMarker', directivesInWorksMarkerTmpl)

    }]);

  }
)