define(
  [
    'angular',
    'ngRoute',

    './services/Errors', './services/Notif', './services/ajaxProvider',
    './services/api', './services/auth', './services/c', './services/fileReader',
    './services/path', './services/routing', './services/session'
  ],
  function (
    ng,
    ngRoute,

    Errors, Notif, ajaxProvider,
    api, auth, c, fileReader,
    path, routing, session
  ) {

    ng.module('core.services', ['ngRoute'])
      .factory('core.Errors', Errors)
      .factory('core.Notif', Notif)
      .provider('core.ajax', ajaxProvider)
      .factory('core.api', api)
      .factory('core.auth', auth)
      .factory('core.c', c)
      .factory('core.fileReader', fileReader)

      .value('core.path', path)
      .value('core.routing', routing)

      .factory('core.session', session)

    return ng.module(['core.services'])
  }
)