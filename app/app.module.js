(function() {
  'use strict';

  angular
    .module('app', [
      // Angular modules.
      'ui.select',
      'ngSanitize',
      // Custom modules.
      'app.Core',
      'app.Directives'
    ]);

})();
