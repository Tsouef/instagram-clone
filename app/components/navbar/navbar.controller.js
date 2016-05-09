(function() {
  "use strict";

  angular
  .module('instagram-clone')
  .controller('NavbarCtrl', NavbarCtrl);

  NavbarCtrl.$inject = ['$log'];

  function NavbarCtrl($log) {
    $log.log('NavbarCtrl ==> Init');

  }
})();