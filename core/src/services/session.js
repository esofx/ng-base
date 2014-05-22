define(
  function () {
    return [
      'env',
      function (env) {
        var keyName = env.apiKeyName;
        var key = localStorage.getItem('sessionKey');

        return {
          keyName: function () {
            return keyName;
          },

          key: function () {
            return key;
          },

          setKey: function (val) {
            key = val;
            localStorage.setItem('sessionKey', key)
          }
        }
      }
    ];
  }
)