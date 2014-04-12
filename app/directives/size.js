define(function () {
  return [
    function () {
      return {
        restrict: 'A',
        
        link: function ($scope, $el, attrs) {
          attrs.$observe('size', function (val) {
            // convert '%' to px
            var size = val.split(',').map(function (l, i) {
              switch (l) {
                case l.slice(-1)[0] == '%' : return (function (l) {
                  switch (i) {
                    case 0: return $el.parent().width() * l; // 0 = x
                    case 1: return $el.parent().height() * l; // 1 = y
                  }
                } (parseInt(l.slice(-1)[0])));
                default : return parseInt(l);
              }
            });

            $el.css({
              width: size[0],
              height: size[1] ? size[1] : size[0]
            });
          });
        }
      }
    }
  ];
})