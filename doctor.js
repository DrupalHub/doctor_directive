'use strict';

var doctor = angular.module('doctor', ['pusher-angular', 'angular-json-tree', 'DoctorConfig']);

doctor.directive('doctorDirective', function($http, $pusher, DoctorConfig) {
  return {
    restrict: 'AE',
    template: '<div class="doctor-toolbar">' +
      '<table>' +
        '<thead>' +
          '<tr>' +
            '<td>Created</td>' +
            '<td>Data</td>' +
          '</tr>' +
        '</thead>' +
        '<tbody>' +
          '<tr ng-repeat="element in elements">' +
            '<td>{{element.created}}</td>' +
            '<td><json-tree object="element.data"></json-tree></td>' +
          '</tr>' +
        '</tbody>' +
      '</table>' +
    '</div>',
    link: function($scope) {
      $scope.elements = [];

      $http.get(DoctorConfig.server + 'doctor').then(function(data) {
        $scope.elements = data.data.data;
      });

      var client = new Pusher(DoctorConfig.pusherKey);
      var pusher = $pusher(client);
      pusher.subscribe('doctor');
      pusher.bind('diagnose', function(data) {
        $scope.elements.unshift(data);
      });
    }
  };
});
