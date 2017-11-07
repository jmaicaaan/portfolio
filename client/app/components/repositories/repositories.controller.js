class RepositoriesController {
  constructor($state, $stateParams, repositoryService) {
    "ngInject";
    this.name = 'repositories';
    this.repositoryService = repositoryService;
    this.repositories = [];
    // this.getRepositories();
  }

  $onInit = () => {
    this.repositoryService.getRepositories()
      .then((data) => {
        this.repositories = data;
        console.log('data', data);
      });
  };

  getRepositories = () => {
    this.repositories = [
      {
        name: 'Calculator',
        description: '',
        icon: require('../../common/img/calculator.png'),
        link: 'https://jmaicaaan.github.io/calculator/'
      },
      {
        name: 'Angular-starter',
        description: '',
        icon: 'http://help.getdoxie.com/assets/kb2/images/getstarted-rocket-banner@2x.png',
        link: 'https://github.com/jmaicaaan/angular-starter'
      },
      {
        name: 'Inventory Management',
        description: '',
        icon: 'https://cdn2.hubspot.net/hubfs/2420610/Imported_Blog_Media/features-deets_purchase-orders-receiving-banner.png',
        link: 'https://jmaicaaan.github.io/InventoryManagement-Beta/'
      },
      {
        name: 'Weather Reporter',
        description: '',
        icon: 'http://www.clker.com/cliparts/8/c/7/9/12284211212082395678rg1024_beach.svg',
        link: 'https://jmaicaaan.github.io/Weather-React/'
      }
    ];
  };
}

export default RepositoriesController;
