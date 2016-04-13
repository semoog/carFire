var app = angular.module('carFireApp');

app.controller('carsController', function ($scope) {

    $scope.cars = $firebaseArray(messagesRef);

});
