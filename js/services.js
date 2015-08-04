// load factory data

app.factory('grabData', ['$http', function($http){
  return {
    get: function(callback){
      $http.get('data/contents.json').success(function(data){
        callback(data);
      });
    }
  }
}]);


