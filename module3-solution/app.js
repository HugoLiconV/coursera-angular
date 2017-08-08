(function() {
  "use strict";
  angular
    .module("NarrowItDownApp", [])
    .controller("NarrowItDownController", NarrowItDownController)
    .service("MenuSearchService", MenuSearchService)
    .constant("ApiBasePath", "https://davids-restaurant.herokuapp.com")
    .directive("foundItems", FoundItems);
  // TODO: The list should be displayed using this directive
  //which takes the found array of items specified on it as an attribute
  //(think one-way binding with '<')

  function FoundItems() {
    let ddo = {
      restrict: "E",
      templateUrl: "foundItems.html",
      scope: {
        found: "<"
        // onRemove: "&"
      }
    };
    return ddo;
  }

  NarrowItDownController.$inject = ["MenuSearchService"];
  function NarrowItDownController(MenuSearchService) {
    let narrow = this;
    narrow.searchTerm = "";

    narrow.getMenuItems = () => {
      MenuSearchService.getMatchedMenuItems(narrow.searchTerm).then(result => {
        narrow.found = result;
        console.log(result);
      });
    };

    // narrow.removeItem = function(itemIndex) {
    //   shoppingList.removeItem(itemIndex);
    //   this.title = origTitle + " (" + list.items.length + " items )";
    // };
  }

  MenuSearchService.$inject = ["$http", "ApiBasePath"];
  function MenuSearchService($http, ApiBasePath) {
    let service = this;

    service.getMatchedMenuItems = searchTerm => {
      //This method is  responsible for reaching out to the server
      function filterElements() {}

      return $http({
        method: "GET",
        url: ApiBasePath + "/menu_items.json"
      })
        .then(function(result) {
          let items = result.data.menu_items;
          //pick out the ones whose description matches the searchTerm
          if (searchTerm === "") {
            return [];
          } else {
            let foundItems = items.filter(item =>
              item.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
            //return that list (wrapped in a promise).
            return foundItems;
          }
        })
        .catch(error => console.log(error));
    };
  }
})();
