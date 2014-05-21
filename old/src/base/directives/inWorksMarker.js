define(function () {
  return [
    'base.path', 'base.ajax',
    function (path, ajax) {
      return {
        restrict: 'E',
        // still needs to be worked on
        templateUrl: 'base.directives.inWorksMarker',
        replace: true
      }
    }
  ]
})