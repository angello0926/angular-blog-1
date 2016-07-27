app.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', 'data', '$http', function($scope, $uibModalInstance, data, $http){
  var success = function (resp) {
    console.log(resp);
    $uibModalInstance.close(resp.data);
  };

  var error = function (resp) {
    console.log(resp);
  };

  $scope.mode = data.mode;
  $scope.post = angular.copy(data.post);

  $scope.createOrUpdate = function () {
    if ($scope.mode == "create") {
      $http({
        url: 'http://localhost:3000/posts.json',
        method: 'POST',
        data: $scope.post
      }).then(success, error);
    } else if ($scope.mode == "edit") {
      $http({
        url: 'http://localhost:3000/posts/' + $scope.post.id + '.json',
        method: 'PUT',
        data: $scope.post
      }).then(success, error);
    }
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss();
  };
}]);
