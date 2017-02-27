"use strict";

var app = angular.module("TravelApp", ["ngRoute"]);  //study ngRoute

app.config(function($routeProvider){   //what all can you config, study $routeProvider
  $routeProvider.
  when('/',{
    templateUrl: "partials/guide-list.html",
    controller: 'bookCtrl'
  }).
  otherwise('/');
});