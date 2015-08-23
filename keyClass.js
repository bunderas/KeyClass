(function(){
	var app = angular.module('keyClass',['dropAreaModule','libraryModule']);

	app.controller('MainController',function(){
		this.testVar="-----";
	});

	app.factory('dataShare',function($rootScope){
		var service = {};
		service.data = false;
		service.sendData = function(data){
			//console.log('--------------------sendData: '+data);
			this.data = data;
			$rootScope.$broadcast('data_shared');
		};
		service.getData = function(){
			return this.data;
		};
		return service;
	});

})();
