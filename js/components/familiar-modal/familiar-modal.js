(function() {
    'use strict';

    angular.module('icarus')
        // .service('FamiliarModalService', FamiliarModalService)
        .controller('FamiliarModalController', FamiliarModalController);

    FamiliarModalController.$inject = ['$scope', 'close'];
    function FamiliarModalController($scope, close) {
        $scope.close = close;
    }
}());
