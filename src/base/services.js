define(
  [
    'angular',
    'ngRoute',

    './services/Errors', './services/Notif', './services/ajaxProvider',
    './services/api', './services/auth', './services/c', './services/fileReader', './services/interval',
    './services/pathProvider', './services/routingProvider', './services/session'
  ],
  function (
    ng,
    ngRoute

    Errors, Notif, ajaxProvider,
    api, auth, c, fileReader, interval,
    pathProvider, routingProvider, session
  ) {

    ng.module('base.services', ['ngRoute'])
      .factory('base.Errors', Errors)
      .factory('base.Notif', Notif)
      .provider('base.ajax', ajaxProvider)
      .factory('base.api', api)
      .factory('base.auth', auth),
      .factory('base.c', c)
      .factory('base.fileReader', fileReader)
      .factory('base.interval', interval)
      .provider('base.path', pathProvider)
      .provider('base.routing', routingProvider)
      .factory('base.session', session)

    return ng.module(['services'])
  }
)