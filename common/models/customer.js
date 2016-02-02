var loopback = require('loopback');
var _ = require('lodash');

module.exports = function(Customer) {

  Customer.observe('access', function limitToOwner(ctx, next) {
    var accessToken = loopback.getCurrentContext().get('accessToken');
    console.log(accessToken);
    ctx.query = _.merge({where: {ownerId: accessToken.userId}}, ctx.query);
    next();
  });

  // Customer.observe('before save', function setOwner(ctx, next) {
  //   var userId = loopback.getCurrentContext().get('accessToken').userId;
  //   if (ctx.instance) {
  //     ctx.instance.ownerId = userId;
  //   } else {
  //     ctx.data['ownerId'] = userId;
  //   }
  //   next();
  // });
};
