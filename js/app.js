(function() {
    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('icarus', ['ngRoute', 'ngAnimate', 'angularModalService'])
        .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
          $locationProvider.hashPrefix('!');

          $routeProvider
            .when('/zones', {
                templateUrl: 'icarus-familiars/js/components/zones/zones.html',
                controller: 'ZonesController',
                controllerAs: 'vm',
                activetab: 'zones'
            })
            .when('/seals', {
                templateUrl: 'icarus-familiars/js/components/seals/seals.html',
                controller: 'SealsController',
                controllerAs: 'vm',
                activetab: 'seals'
            });

          $routeProvider.otherwise({redirectTo: '/zones'});
        }])
        .run(function(){
        });
}());
