var app = angular.module('carFireApp');

app.controller('carsController', function ($scope) {

    $scope.cars = $firebaseArray(messagesRef);

    $scope.addCar = function (car) {
      $scope.cars.$add(car);
    };

    $scope.removeCar = function (car) {
      $scope.cars.$remove(car);
    };

    $scope.saveCar = function (car) {
      $scope.cars.$save(car);
    };

    // $scope.cars.$loaded

});
