import angular from 'angular';
import service from './repository.service';

let repositoryService = angular.module('app.common.repositoryService', [

])

.service('repositoryService', service)

.name;
    

export default repositoryService;