define(
  ['config'],
  function (config) {
    return [
      '$rootScope', 'base.ajax', 'base.session', 'base.path',
      function ($rootScope, ajax, session, path) {
        var url = {
          login: path.auth('login'),
          logout: path.auth('logout'),
          account: path.auth('account')
        };

        var auth = {
          user: null,

          check: function () {
            var self = this;
            return ajax({type: 'GET', url: url.account})
                      .then(function (res) {
                        self.user = res.data.resource;
                        return res.data;
                      })
          },

          login: function (username, password) {
            return ajax({
                type: 'POST',
                url: url.login,
                data: { username: username, password: password }
              }).then(function (res) {
                  session.setKey(res.data.api_key);
                  return res.data
                }
              );
          },

          logout: function () {
            return ajax({type: 'POST', url: url.logout}).then(function () {
              $rootScope.$broadcast('logged-out')
            });
          },

          account: function () {
            return ajax.get({url: url.account});
          }
        };

        $rootScope.$on('auth-failed', function () {
          auth.user = null;
        });

        return auth;
      }
    ]
  }
)