import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';
import oclazyLoad from 'oclazyLoad'

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

function AppCtrl() {
  // constructor() {
  // }
}

const MODULE_NAME = 'app';
angular.module(MODULE_NAME, [
  'ui.router',
   "oc.lazyLoad",
  //  require('oclazyLoad'),
    require('./user/user.config').default.name,
  // "user"
])
  .config(routing)
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;