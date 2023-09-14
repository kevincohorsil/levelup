var DataTypes = require("sequelize").DataTypes;
var _EquipmentType = require("./EquipmentType");

function initModels(sequelize) {
  var EquipmentType = _EquipmentType(sequelize, DataTypes);


  return {
    EquipmentType,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
