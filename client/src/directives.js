define(
  [
    'angular',
    './services'
  ],
  function (
    ng,
    services
  ) {
    ng.module('client.directives', [services])

    return ng.module('client.directives')
  }
)