var app = angular.module('carFireApp');

app.service('carsService', function() {

  var carsRef = new Firebase(firebaseRoot + '/cars');

    this.getCars = function() {
      return carsRef;
    };

    this.getCar = function(carId) {
      return carsRef + '/' + carId;
    };

    this.getComments = function(carId) {
      return carsRef + '/' + carId + '/comments';
    };

});
