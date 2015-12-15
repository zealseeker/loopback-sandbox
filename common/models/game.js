module.exports = function(Game) {
  Game.mature = function(isMature, callback) {
    if(isMature) {
      console.log("Mature is ", isMature);
      callback(null);
    } else {
      console.log("Mature is ", isMature);
      //when use the latest 'strong-remoting' 2.23.0,
      //it logs "Mature is true"
      //while 'strong-remoting' 2.22.0 logs "Mature is false"
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
