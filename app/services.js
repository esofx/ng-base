define(
  [
    'angular',

    'services/util/path',
    'services/util/session',
    'services/util/ajax',
    'services/util/auth',
    'services/util/api',
    'services/util/c',
    'services/util/Errors',
    'services/util/Notif',
    'services/util/interval',
    'services/util/fileReader'
  ],
  function (
    ng,

    util_path, util_session, util_ajax, util_auth, util_api,
    util_c, util_Errors, util_Notif, util_interval, util_fileReader
  )
  {
    ng.module('app.services', [])
      .factory('util.path', util_path)
      .factory('util.session', util_session)
      .factory('util.ajax', util_ajax)
      .factory('util.auth', util_auth)
      .factory('util.api', util_api)
      .factory('util.c', util_c)
      .factory('util.Errors', util_Errors)
      .factory('util.Notif', util_Notif)
      .factory('util.interval', util_interval)
      .factory('util.fileReader', util_fileReader)
  }
)