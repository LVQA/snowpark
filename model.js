var homePage = angular.module('homePage', []);

homePage.controller('backTT', ['$scope','$location','$anchorScroll', function($scope,$location,$anchorScroll){
	$scope.gototop = function(){
		//đặt giá trị cho hash
		$location.hash('backTT');
		$anchorScroll;

	};
}]);
