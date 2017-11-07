class HomeController {
  constructor($state) {
    "ngInject";
    this.$state = $state;
    this.text = 'Hola Amigo';
  };
  
  $onInit = () => {
    this.$state.go('repositories');
  };
}

export default HomeController;
