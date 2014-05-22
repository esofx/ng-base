define(function () {
  return [
    function () {
      return function (mode) {
        var modes = {
          success: {class: 'has-success', msg: 'Success'},
          error: {class: 'has-error', msg: 'Error'},
          neutral: {class: '', msg: ''}
        }

        var mode = 'neutral';

        this.mode = function (arg) {
          if (arg === undefined) {
            return arg;
          }

          mode = modes.hasOwnProperty(arg) ? arg : 'neutral';
          var data = modes[mode];

          for (var k in data) {
            this[k] = data[k];
          }
        };

        this.clear = function () {
          this.setMode('neutral')
        }

        // now just set up acc to supplied mode
        
        this.setMode(mode);
      }
    }
  ]
});