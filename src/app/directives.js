define(
  [
    'angular',
    './services',
    './templates'
  ],
  function (
    ng,
    
    services,
    templates
  ) {

    ng.module('app.directives', ['app.services', 'app.templates'])

    return ng.module('app.directives');
  }
)