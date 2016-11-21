(function() {
    'use strict';

    angular.module('icarus')
        .controller('ZonesController', ZonesController);

    ZonesController.$inject = ['$http', 'ModalService'];
    function ZonesController($http, ModalService){
        var vm = this;

        $http.get('/icarus-familiars/FamiliarDB.json').then(function(response){
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
