angular
.module("app")
  .controller("WhatController", WhatController)

  function WhatController($http, $stateParams, $state) {
    const vm = this
      //base urL?

    vm.$onInit = function() {
      console.log('heyyyyyyybro');
    }
  }
