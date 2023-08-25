var DataTypes = require("sequelize").DataTypes;
var _CategoryCostumer = require("./CategoryCostumer");
var _Costumer = require("./Costumer");
var _Diagnosis = require("./Diagnosis");
var _Equipment = require("./Equipment");
var _payment = require("./payment");
var _service = require("./service");

function initModels(sequelize) {
  var CategoryCostumer = _CategoryCostumer(sequelize, DataTypes);
  var Costumer = _Costumer(sequelize, DataTypes);
  var Diagnosis = _Diagnosis(sequelize, DataTypes);
  var Equipment = _Equipment(sequelize, DataTypes);
  var payment = _payment(sequelize, DataTypes);
  var service = _service(sequelize, DataTypes);

  Costumer.belongsTo(CategoryCostumer, { as: "category_CategoryCostumer", foreignKey: "category"});
  CategoryCostumer.hasMany(Costumer, { as: "Costumers", foreignKey: "category"});
  payment.belongsTo(Costumer, { as: "id_costumer_Costumer", foreignKey: "id_costumer"});
  Costumer.hasMany(payment, { as: "payments", foreignKey: "id_costumer"});
  Diagnosis.belongsTo(payment, { as: "id_Equipment_payment", foreignKey: "id_Equipment"});
  payment.hasMany(Diagnosis, { as: "Diagnoses", foreignKey: "id_Equipment"});
  Equipment.belongsTo(service, { as: "id_service_service", foreignKey: "id_service"});
  service.hasMany(Equipment, { as: "Equipments", foreignKey: "id_service"});

  return {
    CategoryCostumer,
    Costumer,
    Diagnosis,
    Equipment,
    payment,
    service,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
