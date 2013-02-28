'use strict';

angular.module('yeomanprojectsApp')
  .directive('product', function () {
    return {
      template: '<img ng-src="{{item.img}}" width="200px" /> ' +
      '{{item.name}}' +
      '{{item.price | currency}}',
      restrict: 'E',
	  scope: function() {
		  'item'
	  }
      
    };
  });
