define(function () {
  return [
    'base.routing',
    function (routing) {
      var type = function (val) { return Object.prototype.toString.call(val); }

      return {
        restrict: 'A',
        
        link: function ($scope, $el, attrs) {
          var pathStr = attrs.route;

          if (pathStr.indexOf('(') > -1) {
            var routeName = pathStr.slice(0, pathStr.indexOf('('));
            // we assume that the programmer is "competent" and the last char is a closing bracket
            // and we get the args array str
            var argsExpr = '[' + pathStr.slice(routeName.length+1, -1) + ']'
            var args = $scope.$eval(argsExpr);
          } else {
            var routeName = pathStr;
            var argsExpr = '[]';
            var args = [];
          }

          var path = routing.path(routeName);
          if (typeof(path) === 'function') {
            path = path.apply({}, args);
          }

          $el.attr('href', path);
        }
      };
    }
  ]
})