(function() {
  "use strict";

  angular
  .module('instagram-clone')
  .controller('MainCtrl', MainCtrl);
  
  MainCtrl.$inject = ['$log'];

  function MainCtrl($log) {
    $log.log('MainCtrl ==> Init');
  }
})();