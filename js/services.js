angular.module("myApp").factory('userUtil', ['$http', function($http){
	return {
		getAllUsers : function(page) {
			return $http.get('http://localhost:8088/all-users-pagination?page='+(page<0 ? 0 : page)+'&nbr=15');
		},
		addUser : function(object) {
			var req = { method: 'GET', url : 'http://localhost:8088/save-user?name='+object.name+'&age='+object.age};
			return $http(req);
		},
		deleteUser : function(userId) {
			var req = { method : "DELETE", url : 'http://localhost:8088/delete-user/' + userId };
			return $http(req);
		},
		successCallBack : function(data) {
			console.log("SUCCESS : "+data);
		},
		errorCallBack : function(data) {
			console.log("ERROR : "+data);
		}
		};
	}]).filter('limit', function(data, value){
		return function() {
			value = parseInt(value);
			for(var i = 0; i<value; i++)
			{
				data.push(i);
				console.log(i);
			}
			return data;
		};
	});