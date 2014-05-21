define(
  [
    'angular',
    './services'
  ],
  function (
    ng,
    services
  ) {
    ng.module('client.controllers', [services])

    return ng.module('client.controllers')
  }
)