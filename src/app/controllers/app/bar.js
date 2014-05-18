define(function () {
  return [
    '$scope', '$routeParams',
    function ($scope, $routeParams) {
      console.log($routeParams);

      $scope.setup = function () {
        $scope.bar = $routeParams.bar;
      };

      $scope.$on('$routeChangeSuccess', $scope.setup)
      $scope.setup();
    }
  ];
})