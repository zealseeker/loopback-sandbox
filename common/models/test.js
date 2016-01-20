module.exports = function(Test) {
  Test.observe('before save', function(ctx, next) {
    console.log(ctx.data);
    next();
  });
};
