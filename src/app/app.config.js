// routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];


export default function routing($stateProvider) {
  $stateProvider
    .state('mydemo', {
      url: '/',
      template: require('./app.html'),
    });
}