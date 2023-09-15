var DataTypes = require("sequelize").DataTypes;
var _Sales = require("./Sales");

function initModels(sequelize) {
  var Sales = _Sales(sequelize, DataTypes);

  Sales.belongsTo(EquipmentType, { as: "idType_EquipmentType", foreignKey: "idType"});
  EquipmentType.hasMany(Sales, { as: "Sales", foreignKey: "idType"});

  return {
    Sales,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
