
module.exports = function migrateDb(app) {
  //var ds = app.dataSources.postgres;
  var models = [
    'AccessToken',
    'ACL',
    'RoleMapping',
    'Role',
    'user',
    'Customer'
  ];

  // ds.automigrate(models, function(err) {
  //   if (err) throw err;
  //   console.log('Models [' + models + '] created in ', ds.adapter.name);

    // Create a user
    app.models.User.create({
      email: 'foo@bar.com',
      password: 'foobar'
    }, function(err, user) {
      console.log('User ' + user.email + ' created');
    });
  // });
};
