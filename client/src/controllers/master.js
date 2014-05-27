define(
  ['config'],
  function (config) {
    return [
      '$scope', '$location', 'core.path', 'core.auth', 'core.ajax', 'core.routing',
      function ($scope, $location, path, auth, ajax, routingProvider) {
        $scope.page = path.page;
        $scope.ajaxInWorks = ajax.inWorks;

        var setup = function () {
          var routeData = routingProvider.route(routingProvider.lookup($location.url())).config;

          $scope.title = config.appName + ' - ' + routeData.title;
          $scope.bodyTmpl = routeData.bodyTmpl;
        };

        setup();

        $scope.$on('$routeChangeSuccess', setup);
      }
    ];
  }
);
