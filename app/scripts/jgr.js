angular.module("jgr",[]).directive("datatable",["$http",function($http){
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
  }]).directive("autoplay",["$http",function($http){
    return {
      replace:true,
      templateUrl:"views/tpl.html",
      restrict:"ECMA",
      scope:{},
      link:function (s,e,a) {
        s.uid=a["suid"]
        var url=a['url']
        $http({
          url:"http://47.90.20.200:1510"+url,
          method:"get"
        }).success(function(e){
          s.fdata=e
        })
      }
    }
  }]).directive("mbutton",["$http",function($http){
    return {
      restrict:"ECMA",
      scope:{text:"=mtext"},
      template:'<ul class="nav nav-tabs" role="tablist" ng-transclude></ul>',
      link:function(s,e,a){

      },
      replace:true,
      transclude:true
    }
  }])