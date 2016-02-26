module.exports = function(Menu) {

	Menu.nest = function(callback) {
		Menu.find({
			"include":{
				"relation":"menus",
				"scope":{
					"include":{
						"relation":"menus"
					}
				}
			}
		}, function(err, results) {
		   if(err) return callback(err);
           callback(err, results);
		});
	}

	Menu.remoteMethod(
		'nest', {
			accepts: [],
			returns: [{
				arg: "resArray",
				type: "object",
				required: true,
				http: {
					source: 'query'
				},
				"description:": "get nested results"
			}],
			http: {
				path: '/nest',
				verb: 'post'
			}
		}
	);

	Menu.getElementById = function(callback) {
		Menu.findById(1, {
			"include":{
				"relation":"menus",
				"scope":{
					"include":{
						"relation":"menus"
					}
				}
			}
		}, function(err, results) {
		   if(err) return callback(err);
           callback(err, results);
		});
	}

	Menu.remoteMethod(
		'getElementById', {
			accepts: [],
			returns: [{
				arg: "firstElement",
				type: "object",
				required: true,
				http: {
					source: 'query'
				},
				"description:": "get the first element"
			}],
			http: {
				path: '/getElementById',
				verb: 'post'
			}
		}
	);
};
