module.exports = function(app, done) {
  var Test = app.models.test;
  Test.create({
    "name2": "secondname",
    "name3": "thirdname"
  }, function(err, test){
    console.log(test, " created");
   
  });
  var Auser = app.models.auser;
  Auser.create({
	"username":"123",
	"password":"123",
	"email":"123@123.com"
  },function(err,auser){
	console.log(auser," created");
	done();
  });
  
}
