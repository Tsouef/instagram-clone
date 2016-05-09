(function() {
  "use strict";

  angular
  .module('instagram-clone')
  .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$log'];

  function LoginCtrl($log) {
    $log.log('LoginCtrl ==> init');

  }
})();