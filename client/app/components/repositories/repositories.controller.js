class RepositoriesController {
  constructor($state, $stateParams, repositoryService) {
    "ngInject";
    this.name = 'repositories';
    this.repositoryService = repositoryService;
    this.repositories = [];
  }

  $onInit = () => {
    this.getRepositories();
  };

  getRepositories = () => {
    this.repositoryService.getRepositories()
      .then((data) => this.repositories = data);
  };
}

export default RepositoriesController;
