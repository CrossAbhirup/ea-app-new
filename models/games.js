'use strict';
module.exports = (sequelize, DataTypes) => {
  const Games = sequelize.define('Games', {
    gamesId: DataTypes.STRING,
    gamesName: DataTypes.STRING
  }, {});
  Games.associate = function(models) {
    // associations can be defined here
  };
  return Games;
};