(function() {
  "use strict";
  function nameCalculatorController($scope) {
    $scope.name = "";
    $scope.result = 0;

    $scope.displayNumeric = () => {
      let totalNameValue = calculateNumericForString($scope.name);
      $scope.result = totalNameValue;
    };

    function calculateNumericForString(str) {
      return str.split("")
      .reduce((sum, value, i) =>sum + str.charCodeAt(i), 0);
    }
  }

  angular
    .module("NameCalculator", [])
    .controller("NameCalculatorController", nameCalculatorController);
})();
