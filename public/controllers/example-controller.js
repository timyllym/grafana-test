'use strict';

var ExampleCtrl = ['$rootScope', '$state', '$scope', '$stateParams', function($rootScope, $state, $scope) {

  $scope.initialise = function() {

    $scope.go = function(state) {
      $state.go(state);
    };

    $scope.tabData   = [
      {
        heading: 'Page #1',
        route:   'grafana.page1'
      },
      {
        heading: 'Page #2',
        route:   'grafana.page2'
      }
    ];
  };

  $scope.initialise();
}];

angular.module('example').controller('ExampleCtrl', ExampleCtrl);
