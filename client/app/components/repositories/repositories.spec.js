import RepositoriesModule from './repositories';
import RepositoriesController from './repositories.controller';
import RepositoriesComponent from './repositories.component';
import RepositoriesTemplate from './repositories.html';

describe('Repositories', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RepositoriesModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RepositoriesController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(RepositoriesTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = RepositoriesComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(RepositoriesTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(RepositoriesController);
    });
  });
});
