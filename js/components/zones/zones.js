(function() {
    'use strict';

    angular.module('icarus')
        .controller('ZonesController', ZonesController);

    ZonesController.$inject = [];
    function ZonesController(){
        var vm = this;

        console.log("Zones");

        return vm;
    }
}());
