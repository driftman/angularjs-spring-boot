angular.module('myApp').
controller('MainController', ['$scope' ,'userUtil', function($scope, userUtil){
	$scope.user = {name: 'Soufiane ELBAZ', age: 23};
	$scope.saveUser = function(user) {
		userUtil.addUser(user).success(userUtil.successCallBack).error(userUtil.errorCallBack);
	};
}]).
controller('PageController', ['$scope','$routeParams', 'userUtil', function($scope, $routeParams, userUtil){
	$scope.page = $routeParams.page;
	$scope.users = {};
	$scope.totalPages = 1;

	userUtil.getAllUsers($scope.page).success(function(data, status, headers){
		$scope.users = data.content;
		$scope.totalPages = data.totalPages;
		console.log('Total Pages: '+data.totalPages);
		console.log('STATUS :'+status);
	}).error(function(data, status, header){
		console.log('STATUS :'+status);
	});

	$scope.deleteUser = function(userId, index) {
		userUtil.deleteUser(userId).success(function(data, status, header){
				console.log('DATA : '+data);
				console.log('STATUS : '+status);
				$scope.users.splice(index, 1);

			}).error(function(data, status, header){
				console.log('STATUS : '+status);
			});
		};

}]).
controller('UserController', ['$scope', 'userUtil', function($scope, userUtil){

}]);