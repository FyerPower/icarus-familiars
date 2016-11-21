(function() {
    'use strict';

    angular.module('icarus')
        .controller('ZonesController', ZonesController);

    ZonesController.$inject = ['$http', '$rootScope', 'ModalService'];
    function ZonesController($http, $rootScope, ModalService){
        var vm = this;


        $http.get($rootScope.baseUrl + '/FamiliarDB.json').then(function(response){
            vm.familiars = _.groupBy(response.data.familiars, 'zone');
            vm.zones = response.data.zones;
        });

        vm.openFamiliarDetails = function(familiar){
            ModalService.showModal({
                templateUrl: "js/components/familiar-modal/familiar-modal.html",
                controller: "FamiliarModalController"
            }).then(function(modal) {
                modal.close.then(function(result) {
                    // ...
                });
            });
        };

        return vm;
    }
}());
