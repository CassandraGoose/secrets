angular
  .module('app.home')
  .controller("HomeController", HomeController);

function HomeController($http, $stateParams, $state) {
  const vm = this;
  vm.secretAdd = secretAdd;
  vm.error = '';

  function secretAdd() {
    if (vm.secrets.text) {
      $http.post("https://thesecretkeeper.herokuapp.com/secrets", {
          text: vm.secrets.text,
        })
        .then(function() {
          $state.go('complete');
        })
        .catch(() => vm.error = 'something went wrong...Please try again later.');
    }
  }
}
