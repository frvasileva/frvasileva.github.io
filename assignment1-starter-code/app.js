(function () {
'use strict';

angular.module('LunchTracker', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=['$scope'];

  function  LunchCheckController ($scope) {

    $scope.checkLunchCount = function () {
      $scope.errorMessage = "";

      var items = $scope.lunchItems ? $scope.lunchItems.split(",") : [];
      var itemsCount = items.length;
   
    if(itemsCount == 0){
      $scope.errorMessage = "Please enter data first";
    }

    if(itemsCount > 0 && itemsCount <= 3){
      $scope.errorMessage = "Enjoy";
    }

    if(itemsCount > 3){
      $scope.errorMessage = "Too Much";
    }
  };

};
})();