app.directive('list', function (trns) {
  return {
    restrict: 'E',
    scope: {
      transactions: '=',
      authors: '=',
      watchTable: '&',
      total: '=',
    },
    templateUrl: 'tpl/list.html',
    link: function (scope, elem, attrs) {           
      scope.editField = function (field) {
        field.disabled = false;
      };
      
      scope.saveField = function (field, title, balance, id) {
        field.disabled = true;
        trns.update(title, balance, id);
        scope.watchTable();
      };
    }
  }
});