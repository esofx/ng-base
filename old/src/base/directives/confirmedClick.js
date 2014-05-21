define(function () {
  return [
    '$parse',
    function ($parse) {
      return {
        restrict: 'A',
        compile: function ($el, attrs) {
          var fn = $parse($el.attr('confirmed-click'));
          return function ($scope, $el, attrs) {
            $el.on('click', function (ev) {
              if (confirm(attrs['msg'])) {
                $scope.$apply(function () {
                  fn($scope, {$event: ev});
                })
              }
            })
          };
        }
      }
    }
  ];
})