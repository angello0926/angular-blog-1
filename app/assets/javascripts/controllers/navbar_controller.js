app.controller('NavbarCtrl', ['$scope', '$state', function($scope, $state){
  $scope.search = function () {
    $state.go('posts', {query: $scope.query}, { reload: true });
  };
}]);
