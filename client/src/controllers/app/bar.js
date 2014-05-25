define(function () {
  return [
    '$scope', '$routeParams',
    function ($scope, $routeParams) {
      $scope.bar = 0;

      $scope.setup = function () {
        $scope.bar = $routeParams.bar
      };

      $scope.fizz = function () { return 2 * $scope.bar; }

      $scope.$on('$routeChangeSuccess', $scope.setup)
      $scope.setup();
    }
  ];
})
