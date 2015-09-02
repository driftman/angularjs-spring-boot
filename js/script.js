var myApp = angular.module('myApp', ['ngRoute']).
config(function($routeProvider, $locationProvider){
	$routeProvider.
	when('/users', {
		templateUrl: 'partials/main.html',
		controller: 'MainController'
	}).
	when('/users/:page', {
		templateUrl: 'partials/page.html',
		controller: 'PageController'
	}).
	when('/user/:id', {
		templateUrl: 'partials/user.html',
		controller: 'UserController'
	}).
	otherwise({
		redirectTo: '/users'
	});
	
});


