app.directive('menuOne', [function(){
return {
    restrict: 'E',
	 scope: {
            //@ reads the attribute value, = provides two-way binding, & works with functions      
		},
    templateUrl: 'partials/chapters.html'
  }
}]);

// side menu
app.directive('sideMenu', [function(){
return {
    restrict: 'E',
	 scope: {
            active: "="      
		},
    templateUrl: 'partials/menu.html'
  }
}]);

// side menu
app.directive('topNav', [function(){
return {
    restrict: 'E',
	 scope: {
            //@ reads the attribute value, = provides two-way binding, & works with functions      
		},
    templateUrl: 'partials/top.html'
  }
}]);

// bottom nav
app.directive('bottomNav', [function(){
return {
    restrict: 'E',
	 scope: {
            //@ reads the attribute value, = provides two-way binding, & works with functions      
		},
    templateUrl: 'partials/bottom.html'
  }
}]);




