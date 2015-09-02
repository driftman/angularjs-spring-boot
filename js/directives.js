angular.module('myApp')
.directive('listUsers', function(){
	return {
		restrict: 'E',
		templateUrl :  'partials/list-users.html'
		
	};
})
.directive('paginationUsers', function(){
	return {
		restrict: 'E',
		templateUrl :  'partials/pagination-users.html'
		
	};
})
.directive('customTopBar', function(){
	return {
		restrict: 'E',
		templateUrl : 'partials/custom-top-bar.html'
	};
})
.directive('homeHeader', function(){
	return {
		restrict: 'E',
		templateUrl : 'partials/home-header.html'
	};
}).directive('addUser', function(){
	return {
		restrict: 'E',
		templateUrl: 'partials/form-user.html'
	};
}).directive('userPosts', function(){
	return {
		templateUrl: 'partials/user-posts.html'
	};
}).directive('userInfos', function(){
	return {
		templateUrl: 'partials/user-infos.html'
	};
});