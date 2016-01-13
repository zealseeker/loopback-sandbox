module.exports = function(app, done) {
  var Store = app.models.store;
  var Customer = app.models.customer;
  var Agent = app.models.agent;

  Customer.create([{
    name: 'Prime Ltd'
  }, {
    name: 'Client Ltd'
  }], function(err, customers) {
    console.log('Created customer>>>', customers);

    Agent.create({name: 'Mark'}, function(err, agent){
      console.log('Created agent>>>', agent);
      agent.stores.create([{
        name: 'Store1',
        customerId: customers[0].id
      }, {
        name: 'Store2',
        customerId: customers[1].id
      }, {
        name: 'Store3',
        customerId: customers[0].id
      }], function(err, stores) {
        console.log('Created store>>>', stores);
        Store.create({name: 'MyStore'}, function(err, store) {
            console.log('Created myStore>>>', store);
        });
        done();
      })
    });
  });

}