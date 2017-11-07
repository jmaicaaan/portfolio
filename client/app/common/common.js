import angular from 'angular';
import repositoryService from './repository/repository.component';

let commonModule = angular.module('app.common', [
  repositoryService
])
  
.name;

export default commonModule;
