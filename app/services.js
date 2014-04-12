define(
  [
    'angular',

    'services/path',
    'services/session',
    'services/ajax',
    'services/auth',
    'services/api',
    'services/c',
    
    'services/Errors',
    'services/Notif',

    'services/interval',

    'services/fileReader'
  ],
  function (
    ng,

    path, session, ajax, auth, api, c,

    Errors, Notif,

    interval,

    fileReader
  )
  {
    ng.module('app.services', [])
      .factory('path', path)
      .factory('session', session)
      .factory('ajax', ajax)
      .factory('auth', auth)
      .factory('api', api)
      .factory('c', c)

      .factory('Errors', Errors)
      .factory('Notif', Notif)

      .factory('interval', interval)

      .factory('fileReader', fileReader)
  }
)