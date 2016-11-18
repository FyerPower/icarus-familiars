(function() {
    'use strict';

    angular.module('icarus')
        .controller('SealsController', SealsController);

    SealsController.$inject = [];
    function SealsController(){
        var vm = this;

        console.log("Seals");

        return vm;
    }
}());
