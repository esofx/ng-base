define(
  [
    'angular',
    'text!templates/directives/inWorksMarker.html'
  ],
  function (
    ng,
    directivesInWorksMarkerTmpl
  ) {

    ng.module('core.templates', []).run(['$templateCache', function ($t) {

      $t.put('core.directives.inWorksMarker', directivesInWorksMarkerTmpl)

    }]);

  }
)