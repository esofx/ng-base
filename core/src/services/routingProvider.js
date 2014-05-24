/**
 * usage
 *
 * register as provider
 *
 * routing.route('foo', '/home', { title: 'Foo', bodyTmpl: })
 */

define(function () {
  // define the routing functionality
  return [
    '$routeProvider',
    function ($routeProvider) {
      console.log($routeProvider)
      var self = this;
      var built = false;

      this.routes = {};

      this.defaultRoute = null;

      this.route = function (name, path, config) {
        if (path === undefined && config === undefined) {
          return this.routes[name];
        } else {
          if (built) {
            throw "cannot add routes after building";
          }

          this.routes[name] = new this.Route(name, path, config);
          return this;
        }
      };

      this.otherwise = function (route) {
        this.defaultRoute = this.route(route);
        return this;
      };

      this.Route = function (name, path, config) {
        this.config = config;
        
        this.config.name = name;
        this.config.path = path

        this.extend = function (config) {
          for(k in this.config) {
            if (! config.hasOwnProperty(k)) config[k] = this.config[k];
          }

          return config;
        };

        this.nest = function (name, path, config) {
          // notice "self" !
          if (path.indexOf('/') > 0) {
            path = this.config.path + '/' + path;
          }
          
          return self.route(this.config.name+'.'+name, path, this.extend(config));
        };
      };

      // register routes with routeProvider
      this.build = function ($routeProvider) {
        if (built) {
          throw 'routing already built';
        }

        for (var name in this.routes) {
          var route = this.routes[name];
          $routeProvider.when(route.config.path, route.config);
        }

        if (this.defaultRoute) {
          $routeProvider.otherwise(this.defaultRoute.config.path, this.defaultRoute.config);
        }
      };

      // something to build paths by route names
      this.path = function (name) {
        var route = this.route(name);

        if (route === undefined) {
          throw 'cannot build path for name : ' + name;
        }

        var path = route.config.path;
        if (path.indexOf(':') === -1) {
          // if the route has no parameters, return the path string
          return path;
        } else {
          // else return a path string builder which returns the built path str
          // when passed args as a JS object
          return function (args) {
            var processed = path
            for (var k in args) {
              processed = processed.replace(':'+k, args[k]);
            }

            return processed;
          };
        }
      };

      // the $get for the service
      this.$get = function () {
        return {
          path: self.path,
          route: function (name) { return self.route(name); }
        };
      };
    }
  ];
})
