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
  .module('yoLessApp', ["ui.router"]).controller("app",function ($scope,$http) {
  	
  	$scope.data2=[{jgr:1}]
  	// body...
  }).config(function ($stateProvider){
  	$stateProvider.state("a",{
  		url:"/a",
  		templateUrl:"views/a.html",
  		controller:"a"
  	})
  }).directive("datatable",function(){
  	return {
  		restrict:"ECMA",
  		scope:{datajgr:"@abc"},
  		replace:true,
  		template:"<input type='text' ng-model='datajgr'>",
  		link:function(scope,el,attr){
  			scope.jgr=attr["abc"]
  		}
  	}
  })
