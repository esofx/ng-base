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

    ng.module('base.services', ['ngRoute'])
      .factory('base.Errors', Errors)
      .factory('base.Notif', Notif)
      .provider('base.ajax', ajaxProvider)
      .factory('base.api', api)
      .factory('base.auth', auth)
      .factory('base.c', c)
      .factory('base.fileReader', fileReader)

      .value('base.path', path)
      .value('base.routing', routing)

      .factory('base.session', session)

    return ng.module(['base.services'])
  }
)