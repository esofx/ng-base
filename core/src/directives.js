define(
  [
    'angular',
    'core/src/services',
    'core/src/templates',

    'core/src/directives/pasteOnly',
    'core/src/directives/inWorksMarker', 
    'core/src/directives/size',
    'core/src/directives/confirmedClick',
    'core/src/directives/route'
  ],
  function (
    ng,
    services,
    templates,

    pasteOnly,
    inWorksMarker,
    size,
    confirmedClick,
    route
  )
  {

    ng.module('core.directives', ['core.services', 'core.templates'])
      .directive('pasteOnly', pasteOnly)
      .directive('inWorksMarker', inWorksMarker)
      .directive('size', size)
      .directive('confirmedClick', confirmedClick)
      .directive('route', route)

    return ng.module('core.directives');
  }
)
