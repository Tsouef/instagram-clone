(function(){
  "use strict";

  angular
  .module('instagram-clone')
  .config(config);

  config.$inject = ['$logProvider'];

  function config($logProvider) {
    $logProvider.debugEnabled(true);

  }

})();