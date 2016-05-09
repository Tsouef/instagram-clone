(function() {
  "use strict";

  angular
  .module('instagram-clone')
  .controller('SignupCtrl', SignupCtrl);

  SignupCtrl.$inject = ['$log'];

  function SignupCtrl($log) {
    $log.log('SignupCtrl ==> init');

  }
})();