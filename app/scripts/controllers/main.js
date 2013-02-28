'use strict';

angular.module('yeomanprojectsApp')
  .controller('MainCtrl', function ($scope,catalog,basket) {
    $scope.catalog = catalog;
	$scope.basket = basket;
  });
