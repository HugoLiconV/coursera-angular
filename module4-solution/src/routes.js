// <!-- TODO: Home View, Categories List, Imtes -->
//  /  home screen:Welcome to the restaurant and link to list of categories
// /categories: list of categories available on the menu, each listing should be a link
// /items:

(function() {
  "use strict";
  angular.module("MenuApp").config(RoutesConfig);
  RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise("/home");

    $stateProvider
      //homepage
      .state("home", {
        url: "/",
        templateUrl: "src/restaurant/templates/home.template.html"
      })

      .state('container',{
        url: '/container',
        templateUrl: '/src/restaurant/templates/container.template.html'
      })
      //categories
      .state("container.categories", {
        url: "/categories",
        templateUrl: "/src/restaurant/templates/categories.template.html",
        controller: "CategoriesController as categories",
        //obtener datos de servicio menudata.service
        resolve: {
          items: [
            "MenuDataService",
            function(MenuDataService) {
              console.log(MenuDataService.getAllCategories());
              return MenuDataService.getAllCategories();
            }
          ]
        }
      })
      //items
      .state("container.items", {
        url: "/{shortName}",
        templateUrl: "/src/restaurant/templates/items.template.html",
        controller: 'ItemsListController as itemsList',
        resolve: {
          items: [
            "MenuDataService", '$stateParams',
            function(MenuDataService, $stateParams) {

              return MenuDataService.getItemsForCategory($stateParams.shortName);
            }
          ]
        }
      });
  }
})();
