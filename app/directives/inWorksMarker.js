define(function () {
  return [
    'path', 'ajax',
    function (path, ajax) {
      return {
        restrict: 'E',
        templateUrl: 'directives.in-works-marker',
        replace: true
      }
    }
  ]
})