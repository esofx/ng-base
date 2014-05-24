define(
  [
    'angular',
    'ngRoute',

    'core/src/services/Errors', 'core/src/services/Notif', 'core/src/services/ajaxProvider',
    'core/src/services/api', 'core/src/services/auth', 'core/src/services/c', 'core/src/services/fileReader',
    'core/src/services/pathProvider', 'core/src/services/routingProvider', 'core/src/services/session'
  ],
  function (
    ng,
    ngRoute,

    Errors, Notif, ajaxProvider,
    api, auth, c, fileReader,
    pathProvider, routingProvider, session
  ) {

    ng.module('core.services', ['ngRoute'])
      .factory('core.Errors', Errors)
      .factory('core.Notif', Notif)
      .provider('core.ajax', ajaxProvider)
      .factory('core.api', api)
      .factory('core.auth', auth)
      .factory('core.c', c)
      .factory('core.fileReader', fileReader)
      .provider('core.path', pathProvider)
      .provider('core.routing', routingProvider)
      .factory('core.session', session)

    return ng.module(['core.services']);
  }
);
