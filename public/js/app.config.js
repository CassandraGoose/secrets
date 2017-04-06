(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'home'
      }).state({
        name: 'what',
        url: '/what',
        component: 'what'
      }).state({
        name: 'itisdone',
        url: '/itisdone',
        component: 'itisdone'
      })
    $urlRouterProvider.otherwise('/')
  }
}());
