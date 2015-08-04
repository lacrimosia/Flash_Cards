app.controller("mainCtrl", ['$scope', 'grabData', '$location', '$routeParams', '$route', '$parse', 'ngAudio', function($scope, grabData, $location, $routeParams, $route, $parse, ngAudio) {
	
	// getting routing defaults
	$scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
	 
	 
	     // display json data
grabData.get(function(data){
	    $scope.chapter = data;
		$scope.total1 = data.chapter1.length;
         $scope.allTerms1 = data.chapter1;
		 
		 $scope.total2 = data.chapter2.length;
         $scope.allTerms2 = data.chapter2;
		 
		 $scope.total3 = data.chapter3.length;
         $scope.allTerms3 = data.chapter3;
		
         $scope.total4 = data.chapter4.length;
         $scope.allTerms4 = data.chapter4; 
		 
		/*  $scope.total5 = data.chapter5.length;
         $scope.allTerms5 = data.chapter5;
		 
		 $scope.total6 = data.chapter6.length;
         $scope.allTerms6 = data.chapter6;
		 
		 $scope.total7 = data.chapter7.length;
         $scope.allTerms7 = data.chapter7;
		 
		 $scope.total8 = data.chapter8.length;
         $scope.allTerms8 = data.chapter8;
		 
		 $scope.total9 = data.chapter9.length;
         $scope.allTerms9 = data.chapter9;
		 
		 $scope.total10 = data.chapter10.length;
         $scope.allTerms10 = data.chapter10;
		 
		 $scope.total11 = data.chapter11.length;
         $scope.allTerms11 = data.chapter11;
		 
		 $scope.total12 = data.chapter12.length;
         $scope.allTerms12 = data.chapter12;
		 
		 $scope.total13 = data.chapter13.length;
         $scope.allTerms13 = data.chapter13;
		 
		 $scope.total14 = data.chapter14.length;
         $scope.allTerms14 = data.chapter14; */
});


// load sound
$scope.sound = ngAudio.load("audio/testing.mp3");

// stores current term index	
    $scope.shared = [];
	
	// number of chapters
	var range = [];
    for(var i=1;i<15;i++) {
      range.push(i);
    }
	
   $scope.range = range;
   $scope.userAnswers;

 // pushes current term index
 $scope.testing = function(obj, num){		
		var linkId =  obj.target.id;
		$scope.shared.push(linkId);
		return linkId;
	};
	

	// goto links
	 $scope.ChapterLink = function() {
        $location.url('/choice');
    };
	
	// dynamically adds the term from the route of the URL
	$scope.term = $routeParams.term;
	$scope.chapters = $routeParams.chapters;
	

	// change term
	$scope.theNum = $scope.shared;
	
// changes link for practice terms	
	$scope.PracticeTerm = function(num){
		for(var r=1; r<15; r++){
			if(num == r){
				console.log('practicing', '/practice/Chapter-'+$scope['allTerms'+r][$scope.shared[$scope.shared.length-1]].chapter);
			  $location.url('/practice/Chapter-'+$scope['allTerms'+r][$scope.shared[$scope.shared.length-1]].chapter+'/' + $scope['allTerms'+r][$scope.shared[$scope.shared.length-1]].term); 
		  }
		}
	};
	

// changes link for review terms	
	$scope.ReviewTerm = function(num){
		for(var z=0; z<15; z++){
			if(num == z){
			  $location.url('/review/Chapter-'+$scope['allTerms'+z][$scope.shared[$scope.shared.length-1]].chapter+'/' + $scope['allTerms'+z][$scope.shared[$scope.shared.length-1]].term); 
		    }
		}
	};
	
	
// pronunciation finder
	$scope.PronunFinder = function(practice_term, chaps) {	
		if(chaps == 'Chapter-1'){
			for(var p=0; p<$scope.total1; p++){
			if(practice_term == $scope.allTerms1[p].term){
				return $scope.allTerms1[p].pronun;
			}		
		  }
		}
		
		if(chaps == 'Chapter-2'){
			for(var p=0; p<$scope.total2; p++){
			if(practice_term == $scope.allTerms2[p].term){
				return $scope.allTerms2[p].pronun;
			}		
		  }
		}
		
		if(chaps == 'Chapter-3'){
			for(var p=0; p<$scope.total3; p++){
			if(practice_term == $scope.allTerms3[p].term){
				return $scope.allTerms3[p].pronun;
			}		
		  }
		}
		
		if(chaps == 'Chapter-4'){
			for(var p=0; p<$scope.total4; p++){
			if(practice_term == $scope.allTerms4[p].term){
				return $scope.allTerms4[p].pronun;
			}		
		  }
		}
		
		if(chaps == 'Chapter-5'){
			for(var p=0; p<$scope.total5; p++){
			if(practice_term == $scope.allTerms5[p].term){
				return $scope.allTerms5[p].pronun;
			}		
		  }
		}
		
		if(chaps == 'Chapter-6'){
			for(var p=0; p<$scope.total6; p++){
			if(practice_term == $scope.allTerms6[p].term){
				return $scope.allTerms6[p].pronun;
			}		
		  }
		}
		
		if(chaps == 'Chapter-7'){
			for(var p=0; p<$scope.total7; p++){
			if(practice_term == $scope.allTerms7[p].term){
				return $scope.allTerms7[p].pronun;
			}		
		  }
		}
		
		if(chaps == 'Chapter-8'){
			for(var p=0; p<$scope.total8; p++){
			if(practice_term == $scope.allTerms8[p].term){
				return $scope.allTerms8[p].pronun;
			}		
		  }
		}
		
		if(chaps == 'Chapter-9'){
			for(var p=0; p<$scope.total9; p++){
			if(practice_term == $scope.allTerms9[p].term){
				return $scope.allTerms9[p].pronun;
			}		
		  }
		}
		
		if(chaps == 'Chapter-10'){
			for(var p=0; p<$scope.total10; p++){
			if(practice_term == $scope.allTerms10[p].term){
				return $scope.allTerms10[p].pronun;
			}		
		  }
		}
		
		if(chaps == 'Chapter-11'){
			for(var p=0; p<$scope.total11; p++){
			if(practice_term == $scope.allTerms11[p].term){
				return $scope.allTerms11[p].pronun;
			}		
		  }
		}
		
		if(chaps == 'Chapter-12'){
			for(var p=0; p<$scope.total12; p++){
			if(practice_term == $scope.allTerms12[p].term){
				return $scope.allTerms12[p].pronun;
			}		
		  }
		}
		
		if(chaps == 'Chapter-13'){
			for(var p=0; p<$scope.total13; p++){
			if(practice_term == $scope.allTerms13[p].term){
				return $scope.allTerms13[p].pronun;
			}		
		  }
		}
		
		if(chaps == 'Chapter-14'){
			for(var p=0; p<$scope.total14; p++){
			if(practice_term == $scope.allTerms14[p].term){
				return $scope.allTerms14[p].pronun;
			}		
		  }
		}
		
    };
	
// definition finder
	$scope.defFinder = function(practice_term, chaps) {
		// console.log('chaps', chaps);
		if(chaps == 'Chapter-1'){
			for(var p=0; p<$scope.total1; p++){
			if(practice_term == $scope.allTerms1[p].term){
				return $scope.allTerms1[p].definition;
			}		
		  }
		}
		
		if(chaps == 'Chapter-2'){
			for(var p=0; p<$scope.total2; p++){
			if(practice_term == $scope.allTerms2[p].term){
				return $scope.allTerms2[p].definition;
			}		
		  }
		}
		
		if(chaps == 'Chapter-3'){
			for(var p=0; p<$scope.total3; p++){
			if(practice_term == $scope.allTerms3[p].term){
				return $scope.allTerms3[p].definition;
			}		
		  }
		}
		
		if(chaps == 'Chapter-4'){
			for(var p=0; p<$scope.total4; p++){
			if(practice_term == $scope.allTerms4[p].term){
				return $scope.allTerms4[p].definition;
			}		
		  }
		}
		
		if(chaps == 'Chapter-5'){
			for(var p=0; p<$scope.total5; p++){
			if(practice_term == $scope.allTerms5[p].term){
				return $scope.allTerms5[p].definition;
			}		
		  }
		}
		
		if(chaps == 'Chapter-6'){
			for(var p=0; p<$scope.total6; p++){
			if(practice_term == $scope.allTerms6[p].term){
				return $scope.allTerms6[p].definition;
			}		
		  }
		}
		
		if(chaps == 'Chapter-7'){
			for(var p=0; p<$scope.total7; p++){
			if(practice_term == $scope.allTerms7[p].term){
				return $scope.allTerms7[p].definition;
			}		
		  }
		}
		
		if(chaps == 'Chapter-8'){
			for(var p=0; p<$scope.total8; p++){
			if(practice_term == $scope.allTerms8[p].term){
				return $scope.allTerms8[p].definition;
			}		
		  }
		}
		
		if(chaps == 'Chapter-9'){
			for(var p=0; p<$scope.total9; p++){
			if(practice_term == $scope.allTerms9[p].term){
				return $scope.allTerms9[p].definition;
			}		
		  }
		}
		
		if(chaps == 'Chapter-10'){
			for(var p=0; p<$scope.total10; p++){
			if(practice_term == $scope.allTerms10[p].term){
				return $scope.allTerms10[p].definition;
			}		
		  }
		}
		
		if(chaps == 'Chapter-11'){
			for(var p=0; p<$scope.total10; p++){
			if(practice_term == $scope.allTerms10[p].term){
				return $scope.allTerms10[p].definition;
			}		
		  }
		}
		
		if(chaps == 'Chapter-12'){
			for(var p=0; p<$scope.total10; p++){
			if(practice_term == $scope.allTerms10[p].term){
				return $scope.allTerms10[p].definition;
			}		
		  }
		}
		
		if(chaps == 'Chapter-13'){
			for(var p=0; p<$scope.total10; p++){
			if(practice_term == $scope.allTerms10[p].term){
				return $scope.allTerms10[p].definition;
			}		
		  }
		}
		
		if(chaps == 'Chapter-14'){
			for(var p=0; p<$scope.total10; p++){
			if(practice_term == $scope.allTerms10[p].term){
				return $scope.allTerms10[p].definition;
			}		
		  }
		}
		
		
    };

	// get current link
  $scope.selectedIndex = 0; // Whatever the default selected index is, use -1 for no selection

 $scope.itemClicked = function ($index) {
    console.log($index);
    $scope.selectedIndex =  $index;
  };
  
 // load first term on click
 $scope.practices = function(chaps){
for(var s=0; s<15; s++){
	if(chaps == 'Chapter-'+s){
			$location.url('/practice/Chapter-'+s+'/'+$scope['allTerms'+s][0].term); 
    }
}
};


 $scope.reviews = function(chaps){
 for(var g=0; g<15; g++){
	  if(chaps == 'Chapter-'+g){
			$location.url('/review/Chapter-'+g+'/'+$scope['allTerms'+g][0].term); 
    }
 }
};
	
}]);




 