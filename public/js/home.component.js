angular
  .module("app")
  .controller("HomeController", HomeController)

function HomeController($http, $stateParams, $state) {
  const vm = this
  vm.secretAdd = secretAdd

  //base urL?

  vm.$onInit = function() {
    console.log('home controller');
  }

  function secretAdd(secret) {
    console.log('trying to add secret');
    $http.post('/secrets', {
        text: vm.secret.text
      })
      .then(function(response) {
        $state.go('itisdone')
      })
  }
}
