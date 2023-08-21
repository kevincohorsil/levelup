var DataTypes = require("sequelize").DataTypes;
var _Costumer = require("./Costumer");

function initModels(sequelize) {
  var Costumer = _Costumer(sequelize, DataTypes);


  return {
    Costumer,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
