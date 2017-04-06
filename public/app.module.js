(function() {

  angular.module('app', ['ui.router'])
    .component('home', {
      templateUrl: '/home.html',
      controller: "HomeController"
    }).component('what', {
      templateUrl: '/what.html',
      controller: "WhatController"
    })
}())
