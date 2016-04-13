angular.module('carFireApp', ['firebase'])
  .constant('firebaseRoot', 'https://carfire-semo.firebaseio.com/appData')

    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

      $urlRouterProvider.otherwise('/cars');

      $stateProvider
        .state('cars', {
          url: '/cars',
          templateUrl: '/templates/cars.html',
          controller: 'carsController',
          resolve: {
        		carsRef: function(carsService) {
        			return carsService.getCars();
        		}
          }
        })
        .state('car', {
            url: '/cars/:carId',
            templateUrl: '/templates/car.html',
            controller: 'carController',
            resolve: {
          		carRef: function(carsService, $stateParams) {
          			return carsService.getCar($stateParams.carId);
          		},
          		commentsRef: function(carsService, $stateParams) {
          			return carsService.getComments($stateParams.carId);
          		}
          	}
          });

    });
