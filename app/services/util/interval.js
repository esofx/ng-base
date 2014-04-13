define(function () {
  return [
    '$rootScope',
    function ($rootScope) {
      return function (closure, time) {
        var i = setInterval(function () { $rootScope.$apply(closure) }, time);
        i.clear = function () {
          clearInterval(i);
        }

        return i;
      }
    } 
  ]
})