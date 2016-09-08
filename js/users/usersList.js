app.directive('usersList', function (trns) {
  return {
    restrict: 'E',
    link: function (scope, el, attrs) {
      var database = localStorage.database;
      if (!!database) {
        scope.database = JSON.parse(database);
      } else console.log('database not found');

      scope.changeName = function (name, id) {
        console.log(name);
        trns.updateName(name, id);
      };
    },
    template: '<ul class="users-list"><li class="users-list--item" ng-repeat="user in database"> <label>id:{{user.id}} <input type="text" class="users-list--field" ng-model="user.name" ng-keyup="changeName(user.name, user.id)"></label></li></ul>',
  }
});