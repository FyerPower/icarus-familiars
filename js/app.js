(function() {
    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('icarus', ['ngRoute', 'ngAnimate', 'angularModalService'])
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

          $routeProvider.otherwise({redirectTo: '/zones'});
        }])
        .run(function($rootScope, $location){
            $rootScope.baseUrl = ($location.$$absUrl.indexOf('github') >= 0 ? "/icarus-familiars" : "/");
        });
}());
