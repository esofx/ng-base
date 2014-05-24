define(
  [
    'angular',
    'core/src/services',
  ],
  function (
    ng,
    services
  ) {
    ng.module('core.controllers', ['client.services']);
    //.controller('foo', bar)

    return ng.module('core.controllers');
  }
)
