app.controller('trnsCtrl', trnsCtrl);

function trnsCtrl($scope, trns) {
  $scope.watchTable = function () {
    var result = [], summ = 0, authors = [{name: '', id:''}];
    var database = JSON.parse(localStorage.database);
    for (var i=0; i<database.length; i++) {
      authors.push({ name:database[i].name, id:database[i].id});
      for (var j=0; j<database[i].transactions.length; j++) {
        result.push(database[i].transactions[j]);
        summ+=parseFloat(database[i].transactions[j].balance);
      };
    };
    $scope.transactions = result;
    $scope.total = summ;
    $scope.authors = authors; 
    console.log('table reloaded');
  };

  $scope.watchTable();
  
  var generate = {
    id: function () {
      return (((1+Math.random())*0x10000)|0).toString(16).substring(1)+(((1+Math.random())*0x10000)|0).toString(16).substring(1);
    },
  };
      
  $scope.addNew = function (title, balance) {
    if (!!balance && !!title && String(balance).match(/^([0-9]+)([.]?)([0-9]*)$/g)) {
      trns.add(title, balance, generate.id());
      $scope.watchTable();
    };
  };
};