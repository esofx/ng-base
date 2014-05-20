define(
  [
    'angular',
    './services',
    './templates',

    './directives/pasteOnly',
    './directives/inWorksMarker', 
    './directives/size',
    './directives/confirmedClick',
    './directives/route'
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

    ng.module('base.directives', ['base.services', 'base.templates'])
      .directive('pasteOnly', pasteOnly)
      .directive('inWorksMarker', inWorksMarker)
      .directive('size', size)
      .directive('confirmedClick', confirmedClick)
      .directive('route', route)

    return ng.module('base.directives');
  }
)