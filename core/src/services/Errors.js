define(function () {
  var type = function (val) {
    return Object.prototype.toString.call(val);
  };

  return [
    function () {
      return function (errors) {
        this.set = function (errors) {
          this.errors = errors === undefined ? {} : errors;
        };

        this.class = function (slug) {
          if(slug === undefined) {
            return this.isEmpty() ? '' : 'has-error';
          } else {
            return this.errors.hasOwnProperty(slug) ? 'has-error' : '';
          }
        };

        this.msg = function (slug) {
          if (this.errors.hasOwnProperty(slug)) {
            var err = this.errors[slug];
            return type(err) === '[object Array]' ? err.join(', ') : err;
          } else {
            return '';
          }
        };

        this.isEmpty = function () {
          for(var k in this.errors) {
            return false;
          }

          return true;
        }

        this.set(errors);
      };
    }
  ]
})