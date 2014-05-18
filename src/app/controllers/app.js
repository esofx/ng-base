define(function () {
  return [
    '$scope', '$location', '$route', 'base.path',
    function ($scope, $location, $route, path) {
      $scope.navClass = function (slug) {
        return $location.path() === path.page(slug) ? 'active' : 'inactive';
      };

      var setup = function () {
        $scope.headerTmpl = $route.current.headerTmpl;
        $scope.panelTmpl = $route.current.panelTmpl;
      }

      setup();

      $scope.$on('$routeChangeSuccess', setup);
    }
  ];
})