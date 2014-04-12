define(
function () {

  var type = function (val) {
    return Object.prototype.toString.call(val);
  };

  var get = function (obj, property) {
    var parts = property.split('.');
    var head = obj;
    for(var i=0;i<parts.length && head;i++) {
      var part = parts[i];
      head = type(head[part]) === '[object Object]' ? head[part] : undefined;
    }

    return head;
  };

  return [
    'path', 'fileReader',
    function (path, fileReader) {

      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'directives.photos-uploader',

        link: function ($scope, $el, attrs) {
          
        },

        controller: [
          '$scope', '$attrs', '$timeout', 'api', 'path', 'util.Notif', 'util.Errors',
          function ($scope, attrs, $timeout, api, path, Notif, Errors) {
            // setup the common properties in the controller
            if(attrs.properties && get($scope, attrs.properties) !== undefined) {
              $scope.properties = get($scope, attrs.properties);
            } else {
              $scope.properties = {};
            }

            $scope.endpoint = attrs.endpoint;

            attrs.$observe('endpoint', function (val) {
              $scope.endpoint = attrs.endpoint;              
            });

            $scope.uploader = {
              working: false,
              photos: [],
              processFiles: function (el) {
                for(var i=0;el.files[i] !== undefined;i++) {
                  var photo = el.files[i];
                  this.photos.push(photo);
                  
                  (function (photo) {
                    fileReader.read(photo).asDataURL()
                            .then(function (result) {
                              photo.src = result;
                              photo.status = 'queued';
                            });
                  } (el.files[i]))
                }
                
                $scope.$digest();
              },

              removePhoto: function (photo) {
                this.photos = this.photos.filter(function (p) { return p !== photo; });
              },

              prepareFormData: function (photo) {
                var formData = new FormData;
                formData.append('type', 'photo');
                formData.append('source', photo);
                formData.append('name', photo.name);

                var mergeDataWithFormData = function (data) {
                  var process = function (obj, prefix) {
                    if(type(val) === '[object Object]' || type(val) === '[object Array]') {
                      return;
                    }

                    for(var k in obj) {
                      if(! prefix && (k === 'source' || k === 'resource')) {
                        // ignore the "source" and "resource" field
                        continue;
                      }

                      var key = prefix ? prefix+'['+k+']' : k;
                      var val = obj[k];
                      if(type(val) === '[object Object]' || type(val) === '[object Array]') {
                        process(val, key);
                      } else {
                        // appending shit to formData when no longer processing
                        formData.append(key, val);
                      }
                    }
                  };

                  process(data);
                };

                mergeDataWithFormData($scope.properties);
                return formData;
              },

              clear: function () {
                this.photos = [];
              },

              run: function () {
                var self = this;
                var processed = [];

                var triggerCompletionWhenComplete = function () {
                  if(processed.length === self.photos.length) {
                    $scope.$emit('photos-uploaded');
                  }
                }

                this.photos.forEach(function (photo) {
                  (function (photo) {
                    photo.status = 'uploading';
                    
                    var formData = self.prepareFormData(photo);

                    var options = {
                      enctype: 'multipart/form-data', data: formData,
                      processData: false, contentType: false
                    };

                    api.post($scope.endpoint, options)
                       .then(
                          function (data) {
                            photo.status = 'done';
                            processed.push(photo);
                            triggerCompletionWhenComplete();
                            return data.resource;
                          },
                          function (err) {
                            processed.push(photo);
                            triggerCompletionWhenComplete();
                            photo.status = 'failed'
                          }
                        );
                  } (photo))
                })
              }
            }

          }
        ]
      }
    }
  ]
})