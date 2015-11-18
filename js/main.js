import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import HomeController from './controllers/home.controller';

angular
  .module('app', ['ui.router'])
  .constant('SC', '2f19c8a3feef8bc9b5b8699aa273be1d')
  .config(config)
  .controller('HomeController', HomeController)
;