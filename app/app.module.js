angular.module('app', ['ui.router', 'app.home']).config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function config($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  
  $stateProvider
    .state('home', {
      url: '/',
      component: 'home',
    })
    .state('about', {
      url: '/about',
      templateUrl: 'app/about/about.html'
    })
    .state('complete', {
      url: '/thank-you',
      templateUrl: 'app/complete/complete.html',
    });

  $urlRouterProvider.otherwise('/');
}
