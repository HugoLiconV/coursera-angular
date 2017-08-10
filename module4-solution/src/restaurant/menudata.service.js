(function() {
  "use strict";
  angular
    .module("data")
    .service("MenuDataService", MenuDataService)
    .constant("ApiBasePath", "https://davids-restaurant.herokuapp.com");

  MenuDataService.$inject = ["$http", "ApiBasePath"];
  function MenuDataService($http, ApiBasePath) {
    let service = this;

    //this method should return a promise which is a result of suing $http service
    service.getAllCategories = () => {
      //obtener todas las ccategorias
      return $http({
        method: "GET",
        url: ApiBasePath + "/categories.json"
      })
        .then(result => {
          console.log(result.data);
          return result.data;
        })
        .catch(error => console.log(error));
    };

    service.getItemsForCategory = categoryShortName => {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params:{ category: categoryShortName}
      })
        .then(result => {
          console.log(result.data);
          return result.data;
        })
        .catch(error => console.log(error));
    };
  }
})();
