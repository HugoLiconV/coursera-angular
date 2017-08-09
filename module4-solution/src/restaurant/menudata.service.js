(function () {
  'use strict';
  angular
  .module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService($http) {
    service = this;

    service.getAllCategories = ()=>{
      //obtener todas las ccategorias
      //https://davids-restaurant.herokuapp.com/categories.json
      //this method should return a promise which is a result of suing $http service

    };

    service.getItemsForCategory = (categoryShortName)=>{
      //this method should return a promise
      // https://davids-restaurant.herokuapp.com/menu_items.json?category=
      //append categoryShortName to the endpoint
    }
  }
}());