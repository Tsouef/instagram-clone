(function() {
  "use strict";

  angular
  .module('instagram-clone')
  .controller('PhotoCtrl', PhotoCtrl);

  PhotoCtrl.$inject = ['$log'];

  function PhotoCtrl($log) {
    $log.log('PhotoCtrl ==> init');

  }
})();