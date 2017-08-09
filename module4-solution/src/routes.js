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
        url: "/home",
        templateUrl: "src/restaurant/templates/home.template.html"
      })
     
      //categoures
      .state("categories", {
        url: "/categories",
        templateUrl: "/src/restaurant/templates/categories.template.html",
        resolve: {
          //obtener datos de servicio menudata.service
        }
      })
      /*
      //items
      .state("categories.items", {
        url: "/categories/{shortName}",
        templateUrl: "/src/restaurant/templates/items.template.html",
        params: {
          shortName: null
        }
      }); */
  }
})();
