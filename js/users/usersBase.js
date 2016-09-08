app.factory('trns', function(){
  return {
    saveToStorage: function(database){
      localStorage.setItem( 'database' , JSON.stringify(database));
    },
    add: function(title, balance, id){
      var database = JSON.parse(localStorage.database);
      var active_array = database[database.length-1].transactions;
      active_array.push({'id': id,'title':title,'balance':balance,'type': '$','disabled':true, 'author': database[database.length-1].name, });
      this.saveToStorage(database);
    },
    update: function(title, balance, id){
      var database = JSON.parse(localStorage.database);
      for (var i = 0; i<database.length; i++) {
        for (var j = 0; j<database[i].transactions.length; j++) {
          if (database[i].transactions[j].id == id) {
            var active_item = database[i].transactions[j];
            active_item.title = title;
            active_item.balance = balance;
          };
        };
      };
      this.saveToStorage(database);
    },
    updateName: function(user_name, user_id) {
      var database = JSON.parse(localStorage.database);
      for (var i = 0; i<database.length; i++) {
        if (database[i].id == user_id) {
          console.log(database[i]);
          database[i].name = user_name;
          for (var j = 0; j<database[i].transactions.length; j++) {
            database[i].transactions[j].author = user_name;
          };
        };
      };
      this.saveToStorage(database);
    },
  };
});