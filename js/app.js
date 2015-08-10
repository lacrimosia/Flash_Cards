'use strict';

angular.module('FlashCards', [
  'FlashCards.controllers',
  'FlashCards.filters',
  'FlashCards.services',
  'FlashCards.directives',
	'ui.router',
  'ui.bootstrap',
  'cfp.hotkeys'
])

  .run(
    [ '$rootScope', '$http', '$state', '$stateParams', 'Data',
      function ($rootScope, $http, $state, $stateParams, Data) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.copyright = new Date().getFullYear();
        Data.success(function(data) {
          $state.appTitle = data.appTitle;
          $state.coursePrefix = data.coursePrefix;
          $state.courseNumber = data.courseNumber;
        });
      }
    ]
  )

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state("home", {
        url: "/",
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      })

      .state("home.help", {
        url: "help",
        templateUrl: 'partials/help.html',
        controller: 'HelpCtrl'
      })

      .state('home.option', {
        url: 'option',
        templateUrl: 'partials/option.html',
        controller: 'OptionCtrl'
      })

      .state('home.practice', {
        url: 'practice/:chapter/:term',
        templateUrl: 'partials/practice.html',
        controller: 'PracticeCtrl'
      })

      .state('home.review', {
        url: 'review/:chapter/:term',
        templateUrl: 'partials/review.html',
        controller: 'ReviewCtrl'
      })

    $urlRouterProvider.otherwise('/');

  });
