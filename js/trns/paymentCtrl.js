app.controller('paymentCtrl', paymentCtrl);

function paymentCtrl($scope, $location, trns) {
  var id = $location.$$url.split('/');
  $scope.id = id[id.length-1];
  
  var databese = JSON.parse(localStorage.database);
  
  for (var i = 0; i<databese.length; i++) {
    for (var j=0; j<databese[i].transactions.length; j++) {
      if (databese[i].transactions[j].id == $scope.id) {
        $scope.payment = {
          data: databese[i].transactions[j],
          find: true,
        };
      };
    };
  };  
  $scope.update = function(title, balance, id) {
    if (!!balance && !!title && String(balance).match(/^([0-9]+)([.]?)([0-9]+)$/g)) {
      trns.update(title, balance, id);
    };
  };
};