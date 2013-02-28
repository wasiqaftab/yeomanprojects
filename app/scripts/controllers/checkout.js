'use strict';

angular.module('yeomanprojectsApp')
  .controller('CheckoutCtrl', function ($scope,basket) {
    $scope.basket=basket;
  });
