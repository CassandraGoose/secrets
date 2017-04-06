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

  function secretAdd() {
    $http.post('/home', {
        text: vm.secret.secret
      })
      .then(function(response) {
        $state.go('itisdone')
      })
  }
}
