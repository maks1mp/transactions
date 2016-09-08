var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

  var user = {
    add_item: function (database) {
      database.push({
        id: database.length,
        name: 'User ' + database.length,
        transactions: []
      });
      localStorage.setItem('database', JSON.stringify(database));
    },
    get: function () {
      var database = JSON.parse(localStorage.database);
      return database[database.length - 1];
    },
    create: function () {
      var storage = localStorage.database;
      if (!!storage) {
        var database = JSON.parse(storage);
        this.add_item(database);
      } else {
        var database = [];
        this.add_item(database);
      };
    },
  };

  user.create();
  user.get();

  $urlRouterProvider.otherwise("/users");

  $stateProvider
    .state('/trns/:id', {
      url: "/trns/:id",
      templateUrl: "tpl/payment.html",
      controller: paymentCtrl,
    })
    .state('trns', {
      url: "/trns",
      templateUrl: "tpl/transaction.html",
      controller: trnsCtrl,
    })

  .state('users', {
    url: "/users",
    templateUrl: "tpl/users.html",
    controller: usersCtrl,
  })

});