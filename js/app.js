(function() {
    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('icarus', ['ngRoute'])
        .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
          $locationProvider.hashPrefix('!');

          $routeProvider
            .when('/zones', {
                templateUrl: 'js/components/zones/zones.html',
                controller: 'ZonesController',
                controllerAs: 'vm',
                activetab: 'zones'
            })
            .when('/seals', {
                templateUrl: 'js/components/seals/seals.html',
                controller: 'SealsController',
                controllerAs: 'vm',
                activetab: 'seals'
            });

          $routeProvider.otherwise({redirectTo: '/zone'});

          console.log("Loaded");
        }])
        .run(function(){
            console.log("Ran");

        });
}());
