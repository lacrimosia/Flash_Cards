var app = angular.module('test', ['ngRoute', 'ui.bootstrap', 'ngAudio']);


// routes
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/chapters.html'
      }).
	  when('/help', {
        templateUrl: 'partials/help.html'
      }).
	  when('/practice/:chapters/option/', {
        templateUrl: 'partials/option.html'
      }).
	  when('/practice/:chapters/:term/', {
        templateUrl: 'partials/practice.html',
		controller: 'mainCtrl'
      }).
	  when('/review/:chapters/:term/', {
        templateUrl: 'partials/review.html',
		controller: 'mainCtrl'
      });
  }]);
  
  
 
 app.controller('AccordionDemoCtrl', function ($scope) {
  $scope.oneAtATime = true;
  $scope.oneAtATime1 = true;

$scope.changeStatus = function(numbers){
	
};
  
 // chapter 1
var status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  
var status2 = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  
var status3 = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

 // chapter 1 ^

 var status4 = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  
var status5 = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  
var status6 = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

 // chapter 2 ^
  
  
   var status7 = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  
var status8 = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  
var status9 = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  
  // chapter 3
  
     var status10 = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  
var status11 = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  
var status12 = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  
  // chapter 4

});

// top menu controller
app.controller('home', function($scope, $location, $routeParams, $route, $modal, $log){
	// Home Link
	$scope.HomeLink = function(){
		$location.path('/');
	};
	
});


// help page
app.controller('help', function($scope, $location) {
// Help Link
	$scope.help = function(){
		$location.path('/help');
	};
});


app.controller('chapters', function($scope, $location, grabData) {
$scope.chapters = [];

for(var f=1; f<14; f++){
	$scope.chapters.push(f);
}

// go to page
$scope.go = function(path){

// load dynamic url for chapters page
for(var j=1; j<15; j++){
	if(path == j){
		$location.path('/practice/Chapter-'+path+'/option');
	}
 }		
};


});




  