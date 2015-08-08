'use strict';

angular.module('FlashCards.services', [])

  .factory('Data', ['$http', function($http) {

		return $http.get('data/contents.json');

  }]);
