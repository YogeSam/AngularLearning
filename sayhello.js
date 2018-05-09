app.directive('sayhello', function(){
 
  return {
    // restrict to an element (A = attribute, C = class, M = comment)
    // or any combination like 'EACM' or 'EC'
    restrict: 'E',
    
     scope: {
      name: '<',
      callback: '&'
    },

    controller: function($scope) {
      $scope.reverseName = function(){
        console.log("you clicked me.");
        $scope.name = $scope.name.split('').reverse().join('');
        $scope.callback();
      };
    },
    
    templateUrl: 'sayhello.html',
    
    
  };
});