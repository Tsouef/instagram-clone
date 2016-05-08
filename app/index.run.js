(function () {
  "use strict";
  
  runBlock.$inject = ['$log'];

  angular
  .module('instagram-clone')
  .run(runBlock);

  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
