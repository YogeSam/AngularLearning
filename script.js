var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, BringName) {
   // $scope.firstName = BringName.getFirstName(); //"John";
  //  $scope.lastName = BringName.getLastName();//"Doe";
    $scope.firstName = BringName.getFirstName();
    $scope.lastName  = BringName.getLastName();
    $scope.fullName = "";
    $scope.titles = BringName.getTitles();
    $scope.title = "";
     
    $scope.getName = function(){
      $scope.fullName =  $scope.firstName + " " + $scope.lastName;
    };
    
    $scope.reset = function(){
      $scope.fullName =  "";
    };
    
    
    $scope.loadDetails = function(){
      var details = BringName.getDetails();
      $scope.firstName = details.fname;
      $scope.lastName = details.lname;
      $scope.title = details.title;
      
    };
    
   $scope.loadDetailsFromJSON = function(){
      var promise = BringName.getDetailsFromJSONFile("detail.json");
      promise.then(function(results){
                          details = results.data;
                          $scope.firstName = details.fname;
                          $scope.lastName = details.lname;
                          $scope.title = details.title;
                         
                       }, function(error){
                          $scope.firstName = "error";
                          $scope.lastName = "error";
                          $scope.title = "error";
                         
                       });
    };    
    
    $scope.setReverseName = function(){
      $scope.fullName =  "Called";
    };

    $scope.setTitle = function(tit){
      $scope.title =  tit;
    };
    
});



