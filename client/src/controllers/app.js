define(function () {
  return [
    '$scope', '$location', '$route', '$routeParams', 'core.path', 'core.routing',
    function ($scope, $location, $route, $routeParams, path, routingProvider) {
      $scope.navClass = function (slug) {
        return $location.path() === path.page(slug) ? 'active' : 'inactive';
      };

      var setup = function () {
        var routeData = routingProvider.route(routingProvider.lookup($location.url())).config;

        $scope.headerTmpl = routeData.headerTmpl;
        $scope.panelTmpl = routeData.panelTmpl;
      }

      setup();

      $scope.$on('$routeChangeSuccess', setup);

      var routeData = routingProvider.route();
    }
  ];
})
