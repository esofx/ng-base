define(function () {
  return [
    function () {
      var cache = {};

      var container =  function (key, init) {
        if(! cache.hasOwnProperty(key)) {
          cache[key] = init;
        }

        return cache[key];
      };

      container.clear = function (key) {
        if(key === undefined)
          cache = {};
        else
          delete(cache[key]);
      };

      container.reset = function (key, val) {
        container.clear(key);
        return container(key, val);
      };

      return container;
    }
  ];
})