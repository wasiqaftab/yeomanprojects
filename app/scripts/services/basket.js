'use strict';

angular.module('yeomanprojectsApp')
  .factory('basket', function () {
    // Service logic
    // ...

    var basket = {};

    // Public API here
    return {
      get: function () {
        return basket;
      },
	  add: function(item){
		  if(basket[item.id])
		  {
			  basket[item.id].quantity = 1;
		  } else {
			  basket[item.id] = {
			  	type: item,
				quantity: 1
			  };
		  }
	  },
	  remove: function(item) {
	  	delete basket[item.id];
	  }
    };
  });
