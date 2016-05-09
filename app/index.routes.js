(function() {
  "use strict";
  
  
  angular
  .module('instagram-clone')
  .config(routerConfig);

  routerConfig.$inject = ['$stateProvider' , '$urlRouterProvider'];

  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('root' , {
      url: '',
      abstract: true,
      views: {
        'navbar': {
          templateUrl: "components/navbar/navbar.html",
          controller: "NavbarCtrl",
          controllerAs: 'vm'
        }
      }
    })
    .state('root.home', {
      url: '/',
      views: {
        "container@": {
          templateUrl: 'components/main/main.html',
          controller: 'MainCtrl',
          controllerAs: 'vm'
        }
      }
    })
    .state('root.login', {
      url: '/login',
      views: {
        "container@": {
          templateUrl: 'components/login/login.html',
          controller: 'LoginCtrl',
          controllerAs: 'vm'
        }
      }
    })
    .state('root.signup', {
      url:'/signup',
      views: {
        "container@": {
          templateUrl: 'components/signup/signup.html',
          controller: 'SignupCtrl',
          controllerAs: 'vm'
        }
      }
    })
    .state('root.photo', {
      url:'photo/:id',
      views: {
        "container@" : {
          templateUrl: 'components/photo/photo.html',
          controller: 'PhotoCtrl',
          controllerAs: 'vm'
        }
      }
    });

    $urlRouterProvider.otherwise('/');
  }


})();