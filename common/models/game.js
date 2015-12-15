module.exports = function(Game) {
  Game.mature = function(isMature, callback) {
    if(isMature) {
      console.log("Mature is ", isMature);
      callback(null);
    } else {
      console.log("Mature is ", isMature);
      callback(null);
    }
  }

  Game.remoteMethod(
  	'mature', {
  		accepts: [
        {
          arg: "isMature",
          type: "boolean",
          required: true,
          http: {
            source: 'query'
          },
          "description:": "set mature to be true"
        }
      ],
  		returns: [],
  		http: {
  			path: '/mature',
  			verb: 'post'
  		}
  	}
  );
};
