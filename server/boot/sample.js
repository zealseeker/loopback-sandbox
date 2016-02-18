module.exports = function(app, done) {
  var Menu = app.models.menu;

  Menu.create({name: 'menu1'}, function(err, result1){
    if(err) console.log(err); console.log("Created>>>>", result1);
      result1.menus.create({name: 'menu2'}, function(err, result2){
        if(err) console.log(err); console.log("Created>>>>", result2);
          result2.menus.create({name: 'menu3'}, function(err, result3){
            if(err) console.log(err); console.log("Created>>>>", result3);
            done();
          });
      });
  });

}