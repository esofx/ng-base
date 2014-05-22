define(function () {
  return [
    'core.path', 'core.ajax',
    function (path, ajax) {
      return {
        restrict: 'E',
        // still needs to be worked on
        templateUrl: 'core.directives.inWorksMarker',
        replace: true
      }
    }
  ]
})