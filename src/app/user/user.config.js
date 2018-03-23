// userRoutes.$inject = ['$stateProvider'];

function userRoutes($stateProvider) {
  $stateProvider
    .state('mydemo.user', {
        url: 'List',
        template:  require('./user-list.tmpl.html'),
        controller: 'UserListController',
        controllerAs: 'vm',
        resolve: {
          LoadUserListController: ($q, $ocLazyLoad) => {
            return $q((resolve) => {
              require.ensure([], () => {
                // load whole module
                let module = require('./user.controller');
                $ocLazyLoad.load({name: module.default.name});
                resolve(module.controller);
              });
            });
          }
        }
      });
}

export default angular.module("user.config", [])
    .config(userRoutes);