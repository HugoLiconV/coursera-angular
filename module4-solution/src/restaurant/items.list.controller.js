(function() {
  "use strict";
  angular
    .module("MenuApp")
    .controller("ItemsListController", ItemsListController);

  ItemsListController.$inject = ["items"];
  function ItemsListController(items) {
    let itemList = this;
    itemList.items = items.menu_items;
    itemList.test = 'funciona plis'
    itemList.categoryName = items.category.name;
  }
})();
