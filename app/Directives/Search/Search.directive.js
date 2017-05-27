(function() {
  'use strict';

  angular
    .module('app.Directives')
    .directive('plSearch', plSearch);

  function plSearch() {
    return {
      templateUrl: 'app/Directives/Search/Search.html',
      restrict: 'E',
      controller: SearchController,
      controllerAs: 'vm',
      bindToController: true
      };
  }

SearchController.$inject = ['$scope','dataService'];

function SearchController($scope,dataService) {
  var vm = this;

  dataService.getData()
    .success(function(data){
      vm.items = data;
    });

    $scope.$watch('vm.project', function(NewValue, OldValue) {
      if(NewValue){
        window.open(NewValue.url, '_blank');
  		 }
      }, true);


}



})();
