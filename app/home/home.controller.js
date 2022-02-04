angular
  .module('app.home')
  .controller("HomeController", HomeController);

function HomeController($http, $stateParams, $state) {
  const vm = this;
  vm.secretAdd = secretAdd;

  function secretAdd() {
    if (vm.secrets.text) {
      $http.post("https://thesecretkeeper.herokuapp.com/secrets", {
          text: vm.secrets.text,
        })
        .then(function() {
          $state.go('complete');
        })
        .catch((err) => console.error(err));
    }
  }
}
