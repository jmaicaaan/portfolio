import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import repositoriesComponent from './repositories.component';

let repositoriesModule = angular.module('repositories', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('repositories', {
      url: '/',
      component: 'repositories'
    });
})

.component('repositories', repositoriesComponent)

.name;

export default repositoriesModule;
