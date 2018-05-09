
angular.module('myApp').service("BringName", function( $http ){
                  this.getFirstName = function(){return "Yogesh 1233"; };
                  this.getLastName = function(){return "Samant sdfs"; };
                  this.getTitles = function(){return ["Mr", "Ms", "Mz"]; };
                  this.getDetails = function(){return {fname:"Nil", lname:"Sam", title:"Mr"};};
                  this.getDetailsFromJSONFile = function(filename){
                       return $http.get(filename);
                  };
                });
                
