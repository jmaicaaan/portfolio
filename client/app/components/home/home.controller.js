class HomeController {
  constructor($state) {
    "ngInject";
    this.$state = $state;
    this.text = 'Hola Amigo';
    this.init();
  };
  
  init = () => {
    this.$state.go('repositories');
  };
}

export default HomeController;
