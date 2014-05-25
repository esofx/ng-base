define(function () {
  return [
    '$scope', '$location', 'core.path', 'core.routing',
    function ($scope, $location, path, routingProvider) {
      $scope.navClass = function (slug) {
        return $location.path() === path.page(slug) ? 'active' : 'inactive';
      };

      var setup = function () {
        var currentRoute = $location.path().replace('/', ''),
            processedRoute = currentRoute === '' ? 'app' : currentRoute,
            routeData = routingProvider.route(processedRoute).config;

        $scope.headerTmpl = routeData.headerTmpl;
        $scope.panelTmpl = routeData.panelTmpl;
      }

      setup();

      $scope.$on('$routeChangeSuccess', setup);
    }
  ];
})
