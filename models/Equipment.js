import { Sequelize, DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'
import Service from './service.js'
import Costumer from './Costumer.js'

const Equipment = sequelize.define(
  'Equipment',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    idservice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'service',
        key: 'id',
      },
    },
    startdate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
    },
    enddate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    photo: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    idCostumer: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    estado: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'Equipment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: 'PK_Equipment',
        unique: true,
        fields: [{ name: 'id' }],
      },
    ],
  },
)
Equipment.belongsTo(Service, {
  foreignKey: 'idservice',
  as: 'equipmentService',
})
Equipment.belongsTo(Costumer, {
  foreignKey: 'idCostumer',
  as: 'equipmentCostumer',
})
export default Equipment
