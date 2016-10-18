angular.module("jgr",[]).directive("datatable",function($http){
  	return {
  		restrict:"ECMA",
  		scope:{datajgr:"@abc"},
  		replace:true,
  		template:"<div><input type='text' ng-model='datajgr'>{{tab}}</div>",
  		link:function(scope,el,attr){
  			var url=attr["url"]
  			$http({
  				url:server+url,
  				method:"get"
  			}).success(function(e){
  				scope.tab=e
  			})
  		}
  	}
  })