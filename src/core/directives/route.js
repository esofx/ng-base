define(function () {
  return [
    '$parse', 'core.routing',
    function ($parse, routing) {
      var type = function (val) { return Object.prototype.toString.call(val); }

      return {
        restrict: 'A',
        
        link: function ($scope, $el, attrs) {
          attrs.$observe('route', function (str) {
            if (str.indexOf('(') > -1) {
              var routeName = str.slice(0, str.indexOf('('));
              // we assume that the programmer is "competent" and the last char is a closing bracket
              // and we get the args array str
              var argsExpr = '[' + str.slice(routeName.length+1, -1) + ']';
              var args = $parse(argsExpr)($scope);
              // now we set path by applying routing.path on the array
              var path = routing.path(routeName).apply({}, args);
            } else {
              var path = routing.path(str);
            }

            $el.attr('href', path);
          });
        }
      };
    }
  ]
})