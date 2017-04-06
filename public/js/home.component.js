angular
  .module("app")
  .controller("HomeController", HomeController)

function HomeController($http, $stateParams, $state) {
  const vm = this
  vm.login = login

  //base urL?

  vm.$onInit = function() {
    console.log('home controller');
  }

  function login() {
    $http.post(BaseURL + '/home', {
        text: vm.secret.secret
      })
      .then(function(response) {
        $state.go('itisdone')
      })
  }
}
