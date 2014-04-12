define(
  ['config'],
  function (config) {
    return [
      '$scope', '$location', '$route', 'path', 'auth', 'ajax',
      function ($scope, $location, $route, path, auth, ajax) {

        $scope.page = path.page;

        $scope.ajaxInWorks = ajax.inWorks;

        var setup = function () {
          $scope.title = config.appName + ' - ' + $route.current.title;
          $scope.bodyTmpl = $route.current.bodyTmpl;
        };

        $scope.$on('$routeChangeSuccess', setup)
      }
    ]
  }
)