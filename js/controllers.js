'use strict';

angular.module('FlashCards.controllers', ['ngAria'])

.controller('FlashCardsCtrl', function($rootScope, $scope, $state, Data) {

  $rootScope.currentState = $state.current.name;
  $rootScope.currentChapter = -1;
  $rootScope.currentTerm = -1;

  $scope.includes = {
    oeFooter: 'partials/oe-footer.html'
  }

  Data.success(function(data) {
    $scope.data = data;
    $scope.chapters = data.chapters;
    $scope.chapters.forEach(function(chapter) {
      chapter.open = false;
      chapter.practiceOpen = false;
      chapter.reviewOpen = false;
    });
  });

  $scope.inChapter = function() {
    if ($rootScope.currentChapter >= 0 && $rootScope.currentTerm >= 0) {
      return true;
    }
    return false;
  };

  $scope.inPractice = function(chapterIndex) {
    if ($rootScope.currentChapter == chapterIndex && $rootScope.currentState == "home.practice") {
      return true;
    }
    return false;
  };

  $scope.inReview = function(chapterIndex) {
    if ($rootScope.currentChapter == chapterIndex && $rootScope.currentState == "home.review") {
      return true;
    }
    return false;
  };

})

.controller('HomeCtrl', function($rootScope, $scope, $state, hotkeys) {
  $rootScope.currentState = $state.current.name;
  $scope.home = function() {
    $rootScope.currentChapter = -1;
    $rootScope.currentTerm = -1;
    $state.go('home');
  };

  $scope.openChapter = function(chapterIndex,chapters) {
    console.log($scope.chapters[chapterIndex].open);
    if($scope.chapters[chapterIndex].open == false ) {
      $rootScope.currentChapter = chapterIndex;
      $rootScope.currentTerm = -1;
      $state.go('home.option');
    } else {
      $rootScope.currentChapter = -1;
      $rootScope.currentTerm = -1;
      $state.go('home');
    }
  }

  $scope.gotoTerm = function(chapterIndex,termIndex,dir) {
    if(dir == 'next') {
      termIndex = parseInt(termIndex) + 1;
    } else {
      termIndex = parseInt(termIndex) - 1;
    }
    $state.go($rootScope.currentState,{'chapter' : chapterIndex, 'term': termIndex});
  };

  hotkeys.bindTo($scope)
    .add({
      combo: 'a',
      description: 'Previous card',
      callback: function() {
        $scope.gotoTerm($rootScope.currentChapter,$rootScope.currentTerm,'prev');
      }
    })
    .add({
      combo: 'd',
      description: 'Next card',
      callback: function() {
        $scope.gotoTerm($rootScope.currentChapter,$rootScope.currentTerm,'next');
      }
    })
    .add({
      combo: 's',
      description: 'View card',
      callback: function() {
        $scope.showDetails = !$scope.showDetails
      }
    });
})

.controller('HelpCtrl', function($rootScope, $scope, $http, $state) {
  $scope.help = function() {
    $state.go('home.help');
  };
})

.controller('Chapters', function($rootScope, $scope, $state, $stateParams) {
  $rootScope.currentState = $state.current.name;
  $scope.gotoChapter = function(chapterIndex) {
    $rootScope.currentChapter = chapterIndex;
    $scope.chapters[$rootScope.currentChapter].open = true;
    $state.go('home.option');
  };
})

.controller('OptionCtrl', function($rootScope, $scope, $state, $stateParams) {
  $rootScope.currentState = $state.current.name;
  $scope.practice = function() {
    $scope.chapters[$rootScope.currentChapter].open = true;
    $scope.chapters[$rootScope.currentChapter].practiceOpen = true;
    $state.go('home.practice',{'chapter' : $rootScope.currentChapter, 'term': 0});
  }
  $scope.review = function() {
    $scope.chapters[$rootScope.currentChapter].open = true;
    $scope.chapters[$rootScope.currentChapter].reviewOpen = true;
    $state.go('home.review',{'chapter' : $rootScope.currentChapter, 'term': 0});
  }
})

.controller('PracticeCtrl', function($rootScope, $scope, $state, $stateParams) {
  $rootScope.currentState = $state.current.name;
  $rootScope.currentChapter = $stateParams.chapter;
  $rootScope.currentTerm = $stateParams.term;
  $scope.responsiveVoice = responsiveVoice;

})

.controller('ReviewCtrl', function($rootScope, $scope, $state, $stateParams) {
  $rootScope.currentState = $state.current.name;
  $rootScope.currentChapter = $stateParams.chapter;
  $rootScope.currentTerm = $stateParams.term;
  $scope.responsiveVoice = responsiveVoice;
});
