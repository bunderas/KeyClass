(function (){
	var app = angular.module('libraryModule',[]);

	app.directive('libraryList',function(){
		function link(scope, element) { 
			element.on('dragover', function (event) {
				event.preventDefault();
				event.stopPropagation();
				return false; 
			});

			element.on('dragend', function (event) {
				event.preventDefault();
				event.stopPropagation();
				return false; 
			});

			element.on('drop', function (event) {
				event.preventDefault();event.stopPropagation();
				for (i=0;i<event.dataTransfer.files.length;i++){
					var file =event.dataTransfer.files[i];
				  	var reader = new FileReader();
					reader.onload = function (event) {
						console.log("loaded "+file.name);
						scope.library.insertElement({name:file.name,data:event.target.result});
						scope.$apply();
					};
					console.log('iterated: '+file.name);
					reader.readAsDataURL(file);
				}
				return false;
				
			});
		}		
		return{
			restrict:"E",
			templateUrl:'libraryList.html',
			link:link,
			controller:'libraryListController',
			controllerAs:'library'
		}
	});

	app.controller('libraryListController', ['$scope','dataShare',function($scope,dataShare){
		var library=this;
		library.libID=0;
		library.itemList=[];
		
		this.loadPreview=function(event){
			var tgt=event.target;
			console.log($scope+" clicked "+event.target.parentNode.dataset["libid"]);
			//$scope.previewController.setItem();
			var id=event.target.parentNode.dataset["libid"];
			var item=library.itemList.find(function(element, index, array){return array[index].libID==id});
			$scope.$broadcast('onItemSelect', {data: item.data});
			console.log('broadcast');
			//style.background = 'url(' + event.target.result + ') no-repeat center';

		};

		this.insertElement=function(data){
			data.libID=library.libID;
			library.libID++;
			library.itemList.push(data);
		}
		library.insertElement({name:'name', data:'data'});

	}]);

	app.controller('previewController', ['$scope', function($scope){
		var preview=this;
		preview.data='----';
		this.setItem=function(){
			console.log('setitem');
		}
		$scope.$on('onItemSelect', function(event, obj) {
			console.log('catched'+obj.data);
			preview.data = obj.data;
		})

	}]);

})();
