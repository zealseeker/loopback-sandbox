module.exports = function(app, done) {
  var Space = app.models.space;
  var Customer = app.models.customer;
  var Account = app.models.account;
  var SpaceCustomer = app.models.spaceCustomer;

  Space.create({name: "space1"}, function(err, space) {
    Customer.create([{
      name: "zoe"
    }, {
      name: "jelly"
    }, {
      name: "janny"
    }], function(err, customers){
      customers.forEach(function(customer) {
        space.customers.add(customer, function(err) {
          if (err) console.error(err);
        });
      });
      done();
    });
  });

}