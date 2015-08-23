(function (){
	var app = angular.module('libraryModule',[]);

	app.directive('libraryList',function(){
		return{
			restrict:"E",
			templateUrl:'libraryList.html',
			controller:'libraryListController',
			controllerAs:'library'
		}
	});

	app.controller('libraryListController', ['$scope','dataShare',function($scope,dataShare){
//	app.controller('libraryListController', function(){
		var library=this;
		library.itemList=[];
		//library.itemList.push('test1.jpg');
		//library.itemList.push('test2.jpg');
		//console.log('--')
		
		$scope.$on('data_shared',function(){
			console.log(">>>>data received: " );
			library.itemList.push(dataShare.getData());// =  dataShare.getData();    
			//library.itemList.push('uj.file');// =  dataShare.getData();    
		});
		

	}]);

})();