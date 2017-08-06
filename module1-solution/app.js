// TODO:
//if the numbers of items in the textbox is less or equal to 3 print Enjoy!
//else if the number of items is greater than 3 print Too much!
//if the text box is empty print Please enter data first

(function() {
  "use strict";
  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCHeckController);

  LunchCHeckController.$inject = ["$scope"];
  function LunchCHeckController($scope) {
    $scope.items = "";
    $scope.message = "";

    $scope.checkIfTooMuch = () => {
      let splitedItems = $scope.items.split(",").map(item => item.trim()) || [];
      splitedItems = splitedItems.filter((item, i) => {
        return item !== "";
      }, []);
      
      $scope.length = splitedItems.length;
      if ($scope.length === 0) {
        $scope.message = "Please enter data first";
      } else if ($scope.length > 0 && $scope.length <= 3) {
        $scope.message = "Enjoy";
      } else if ($scope.length > 3) {
        $scope.message = "Too much!";
      }
      console.log($scope.length);
    };
  }
})();
