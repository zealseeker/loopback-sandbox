module.exports = function(Test) {
     
    // Here is another way to register hook for data updating
    // Please see doc of operation hook for more details
    // https://docs.strongloop.com/display/public/LB/Operation+hooks

	    // Test.observe('after save',function(ctx, next){
	    //     console.log('upsert called: ', ctx.isNewInstance);
	    //     next();
	    // });
    Test.beforeRemote('upsert',function(ctx, modelInstance, next){
        console.log('upsert called');
        next();
    });
};
