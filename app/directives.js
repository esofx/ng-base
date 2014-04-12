define(
  [
    'angular',
    'services',

    'directives/pasteOnly',
    'directives/inWorksMarker', 
    'directives/size',
    'directives/photosUploader',
    'directives/modalWidget',
    'directives/photoHolder'
  ],
  function (
    ng,
    services,

    pasteOnly,
    inWorksMarker,
    size,
    photosUploader,
    modalWidget,
    photoHolder
  )
  {

    ng.module('app.directives', ['app.services'])
      .directive('pasteOnly', pasteOnly)
      .directive('inWorksMarker', inWorksMarker)
      .directive('size', size)
      .directive('photosUploader', photosUploader)
      .directive('modalWidget', modalWidget)
      .directive('photoHolder', photoHolder)
  }
)