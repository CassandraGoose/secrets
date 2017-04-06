angular
  .module("app")
  .controller("ItIsDoneController", ItIsDoneController)

function ItIsDoneController($http, $stateParams, $state) {
  const vm = this
    //base urL?

  vm.$onInit = function() {
    console.log('itisidone controller');
  }
}
