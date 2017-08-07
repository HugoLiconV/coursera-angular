(function() {
  "use strict";
  angular
    .module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyController(ShoppingListCheckOffService) {
    let toBuyList = this;
    toBuyList.items = ShoppingListCheckOffService.getItems(true);
    //filtrar los elementos que no han sido comprados
    toBuyList.boughtItem = index => {
      ShoppingListCheckOffService.boughtItem(index);
    };
  }

  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    let alreadyBoughtList = this;
    alreadyBoughtList.items = ShoppingListCheckOffService.getItems(false);
  }

  function ShoppingListCheckOffService() {
    let service = this;
    let toBuy = [
      { name: "Cookies", quantity: 10 },
      { name: "Milk", quantity: 1 },
      { name: "Coffee", quantity: 2 },
      { name: "Apples", quantity: 8 },
      { name: "Bread", quantity: 6 }
    ];

    let bought = [];
    //get items
    service.getItems = toBuyList => {
      if (toBuyList) {
        return toBuy;
      }
      return bought;
    };

    service.boughtItem = index => {
      bought.push(...toBuy.splice(index, 1));
    };
  }
})();
