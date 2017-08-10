(function() {
  "use strict";
  angular.module("MenuApp").component("categories", {
    templateUrl: "src/restaurant/templates/categories.component.template.html",
    bindings: {
      categories: "<"
    }
  });
})();
