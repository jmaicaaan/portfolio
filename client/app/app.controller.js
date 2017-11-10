function AppController($scope, repositoryService) {
  "ngInject";
  $scope._repositoryService = repositoryService;
  $scope.user = {};

  function getUser() {
    $scope._repositoryService.getUserDetails()
      .then((user) => $scope.user = user);
  }

  function init() {
    getUser();
  }

  init();
}

export default AppController;