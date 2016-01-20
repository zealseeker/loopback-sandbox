module.exports = function(app, done) {
  var Test = app.models.test;
  Test.create({
    "name2": "secondname",
    "name3": "thirdname"
  }, function(err, test){
    console.log(test, " created");
    done();
  });
  
}