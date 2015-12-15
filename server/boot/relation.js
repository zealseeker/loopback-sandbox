// module.exports = function(app) {
//   var Category = app.models.category;
//   var Game = app.models.game;
//   Category.hasMany(Game,
//                  { as: 'mature',
//                    scope: { where: { mature: true },
//                    include: 'games'
//   });
// }
