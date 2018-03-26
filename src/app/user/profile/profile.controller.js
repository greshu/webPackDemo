'use strict';

function ProfileController(testVar, profileService){
    var name  = profileService.getName();

}

export default angular
  .module('profile.controller', [])
  .controller('ProfileController', ProfileController);
