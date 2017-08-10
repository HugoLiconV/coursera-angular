(function() {
  "use strict";
  angular
    .module("MenuApp")
    .controller("ItemsListController", ItemsListController);

  ItemsListController.$inject = ["items"];
  function ItemsListController(items) {
    let itemList = this;
    itemList.items = items;
    itemList.test = 'funciona plis'
  }
})();
