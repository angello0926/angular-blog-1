app.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', 'data', function($scope, $uibModalInstance, data){
  $scope.mode = data.mode;
  $scope.post = angular.copy(data.post);

  $scope.create = function () {
    $uibModalInstance.close($scope.post);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss();
  };
}]);
