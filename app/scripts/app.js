'use strict';
var server="http://123.56.227.177:2504"
/**
 * @ngdoc overview
 * @name yoLessApp
 * @description
 * # yoLessApp
 *
 * Main module of the application.
 */
angular
  .module('yoLessApp', ["ui.router","jgr"]).controller("app",function ($scope,$http) {
  	
  	$scope.data2=[{jgr:1}]
  	// body...
  }).config(function ($stateProvider){
  	$stateProvider.state("a",{
  		url:"/a",
  		templateUrl:"views/a.html",
  		controller:"a"
  	})
  })
