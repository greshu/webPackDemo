function profileRoutes($stateProvider) {
    $stateProvider
      .state('mydemo.user.profile', {
          url: '/Profile',
          template:  require('./profile.tmpl.html'),
          controller: 'ProfileController',
          controllerAs: 'vm',
          resolve: {
            testVar: function(){
              return "testVarVal"
            },
            LoadProfileController: ($q, $ocLazyLoad) => {
              return $q((resolve) => {
                require.ensure([], () => {
                  // load whole module
                  let module = require('./profile.controller');
                  $ocLazyLoad.load({name: module.default.name});
                  resolve(module.controller);
                });
              });
            }
          }
        });
  }
  
  export default angular.module("profile.config", [])
      .config(profileRoutes);