define(
  [
    'angular',
    './services',
    './templates'

    'directives/pasteOnly',
    'directives/inWorksMarker', 
    'directives/size',
    'directives/confirmedClick'
  ],
  function (
    ng,
    services,
    templates,

    pasteOnly,
    inWorksMarker,
    size,
    confirmedClick
  )
  {

    ng.module('base.directives', ['base.services', 'base.templates'])
      .directive('base.pasteOnly', pasteOnly)
      .directive('base.inWorksMarker', inWorksMarker)
      .directive('base.size', size)
      .directive('base.confirmedClick', confirmedClick)

    return ng.module('base.directives');
  }
)