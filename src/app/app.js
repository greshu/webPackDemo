import angular from 'angular';
import uirouter from 'angular-ui-router';


import routing from './app.config';
import user from './user/user.module'



import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
  'ui.router',
  "user"])
  .config(routing)
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;