(function() {
  "use strict";
  
  
  angular
  .module('instagram-clone')
  .config(routerConfig);

  routerConfig.$inject = ['$stateProvider' , '$urlRouterProvider'];

  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
    // .state('root' , {
    //   url: '',
    //   abstract: true
    // })
    .state('home' , {
      url: '/',
      templateUrl: "home",
      controller: "HomeCtrl",
      controllerAs: 'vm'
    })

    $urlRouterProvider.otherwise('/');
  }


})();