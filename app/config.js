define(function () {
  return {
    appName: 'Docload',
    
    apiBase: 'http://api.docload.dev/',

    socketAddr: 'ws://api.docload.dev:8080',

    authBase: 'http://api.docload.dev/auth/',

    tmplBase: '/app/tmpls/',

    pageBase: '/',

    homePage: 'dashboard',

    loginPage: 'login',

    apiKeyName: 'watcher-api-key',

    refreshedKeyName: 'refreshed-api-key'

  };
})