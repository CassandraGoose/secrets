angular
  .module("app")
  .controller("HomeController", HomeController)

function HomeController($http, $stateParams, $state) {
  const vm = this
  vm.secretAdd = secretAdd

  vm.$onInit = function() {
  }


  function secretAdd() {
    $http.post("https://thesecretkeeper.herokuapp.com/secrets", {
        text: vm.secrets.text
      })
      .then(function(response) {
        $state.go('itisdone')
      })

    // $http.post('http://127.0.0.1:3000/secrets', {
    //     what: 'the fuck'
    //   })
    //   .then(function(response) {
    //     console.log(response)
    //   })
  }
}
