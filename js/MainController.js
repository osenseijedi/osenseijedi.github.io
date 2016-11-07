(function(module) {

	module.controller("MainController", function($scope, $rootScope, $http, $routeParams, $log, $location) {
		var pathToMkd = $routeParams.pathToMkd;
		$http.get("markdown/" + pathToMkd)
			 .then(
				function successCallback(response) {
					$scope.mkdown = response.data;
				}, function errorCallback(response) {
					switch (response.status) {
					case 404:
						$location.path("/error/404");
						break;
					default:
						$location.path("/error/error");
					}
				});

		//Keep track of the active page (for index.html)
		$rootScope.active = pathToMkd;
	});

}(angular.module("angularCms")));