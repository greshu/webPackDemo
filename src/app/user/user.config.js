userRoutes.$inject = ['$stateProvider'];

export default function userRoutes($stateProvider) {
  $stateProvider
    .state('mydemo.user', {
      url: 'user',
      abstract: true,
      template:"<div ui-view></div>"
    })
    .state('mydemo.user.list', {
        url: '/List',
        template:  require('./user-list.tmpl.html'),
        controller: 'UserListController',
        controllerAs: 'vm'
      });
}