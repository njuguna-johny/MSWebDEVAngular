var app = angular.module('restaurantApp', []);
app.controller('menuCtrl', function ($scope, $http) {
    $scope.menu = null;
    $http.get('Data/menuData.json').then(successCallback, errorCallback);
    function successCallback(response) {
        $scope.menu = response.data;
    }
    function errorCallback(error) {
        console.log(error);
    }

    
});
