import angular from 'angular';
import uirouter from 'angular-ui-router';
import oclazyLoad from 'oclazyLoad'
import routing from './app.config';
// Services

import profileService from './service/profile.service'
import '../../node_modules/font-awesome/css/font-awesome.css'

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

function appRun($rootScope,  $transitions, $state) {
  $transitions.onSuccess({}, function(trans) {
    console.log("statechange onSuccess");
   });
   $transitions.onStart({}, function(trans) {
    //  var stateTo = trans.$to();
    //   if(stateTo.name == 'mydemo.user.profile'){
    //     debugger
    //     $state.go('mydemo.user.list');
    //   }
   });
}

const MODULE_NAME = 'app'; 
angular.module(MODULE_NAME, [
  'ui.router',
  "oc.lazyLoad",
  //  require('oclazyLoad'),
  require('./user/user.config').default.name,
  profileService
])
  .config(routing)
  .run(appRun)
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;