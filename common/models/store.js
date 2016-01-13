module.exports = function(Store) {

  Store.myFilter = function(callback) {
  	Store.find({
  		    // "where": {
  		    // 	"relation": "agent",
  		    // 	"scope": {
  		    // 		"where": {
  		    // 		    "name": "Mark"
  		    // 		}
  		    // 	}
  		    // },
  			"include":[
	  			{
	  				"relation": "customer",
	  				"scope": {
	  					"fields": [
	  					"name"
	  					]
	  				}
	  			},
	  			{
	  				"relation": "agent",
	  				"scope": {
	  					"fields": [
	  					"name"
	  					],
	  					"where": {
	  						"name": {
	  							"like": "Mark",
	  							"options": "i"
	  						}
	  					}
	  				}
	  			}
  			]
  	}, function(err, result) {
  		console.log(result);
  		callback(null);
  	});

  };

  Store.remoteMethod(
    'myFilter',
    {
    	http: {path: '/myFilter', verb: 'get'}
    }
  	);


  //{"include": [{"relation": "customer","scope": {"fields": ["name"]}},{"relation": "agent","scope": {"fields": ["name"],"where": {"name": {"like": "Mark","options": "i"}}}}]}
};
