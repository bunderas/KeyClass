(function (){
	var app = angular.module('dropAreaModule',[]);

	app.directive('dropArea',function(){
		return{
			restrict:"E",
			templateUrl:'dropArea.html',
			controller:'dropAreaController'
		}
	});

	app.controller('dropAreaController', ['$scope','dataShare',function($scope,dataShare){
//	app.controller('dropAreaController', function(){
		$scope.send = function(){
			console.log("clicked");
			dataShare.sendData('test adat');
		};

		var holder = document.getElementById('holder'),
		    state = document.getElementById('status');

		if (typeof window.FileReader === 'undefined') {
		  state.className = 'fail';
		} else {
		  state.className = 'success';
		  state.innerHTML = 'File API & FileReader available';
		}
		 /*
		holder.ondragover = function () { this.className = 'hover'; return false; };
		holder.ondragend = function () { this.className = ''; return false; };
		holder.ondrop = function (e) {
		  this.className = '';
		  e.preventDefault();

		  var file = e.dataTransfer.files[0],
		      reader = new FileReader();
		  reader.onload = function (event) {
		    console.log(event.target);
		    holder.style.background = 'url(' + event.target.result + ') no-repeat center';
		    dataShare.sendData(event.target.result);
		  };
		  console.log(file);
		  reader.readAsDataURL(file);

		  return false;
		};				
*/
	}]);
/*
	app.controller('MainCtrl', ['$scope','dataShare',
	    function ($scope,dataShare) {         
	         $scope.text = 'Hey';
	         $scope.send = function(){
	           dataShare.sendData($scope.text);
	         };

	    }
	]);
*/
})();

