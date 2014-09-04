'use strict';

/**
 * @ngdoc function
 * @name webPosAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webPosAngularApp
 */
angular.module('webPosAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
