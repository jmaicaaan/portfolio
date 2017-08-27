import angular from 'angular';
import Home from './home/home';
import Repositories from './repositories/repositories';

let componentModule = angular.module('app.components', [
  Home,
  Repositories
])

.name;

export default componentModule;
