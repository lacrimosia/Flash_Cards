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
    restrict: 'A',
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


// title
app.directive('title', [function(){
return {
    restrict: 'E',
    template: '<div class="col-md-12"><h1 class="text-center the_term">{{ term }}</h1></div>'
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




