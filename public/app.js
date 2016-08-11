'use strict';

var app = angular.module('example', [
  'ui.router',
  'ui.bootstrap',
  'ui.router.tabs'
]);

app.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('grafana', {
    url:         '',
    controller: 'ExampleCtrl',
    templateUrl: 'public/views/example.html'
}).state('grafana.page1', {
    url:         '/grafana/page1',
    templateUrl: 'public/views/page1.html'
}).state('grafana.page2', {
    url:         '/grafana/page2',
    templateUrl: 'public/views/page2.html'
    });
}]);
