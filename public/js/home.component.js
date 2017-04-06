angular
.module("app")
  .controller("HomeController", HomeController)

  function HomeController($http, $stateParams, $state) {
    const vm = this
      //base urL?

    vm.$onInit = function() {
      console.log('heyyyyyyybro');
    }
  }
