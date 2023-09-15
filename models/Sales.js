import { Sequelize, DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'
import EquipmentType from './EquipmentType.js'

const Sales = sequelize.define(
  'Sales',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
    },
    idType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'EquipmentType',
        key: 'id',
      },
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    value: {
      type: DataTypes.DECIMAL(19, 4),
      allowNull: true,
      defaultValue: 0,
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'Sales',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: 'PK_Sales',
        unique: true,
        fields: [{ name: 'id' }],
      },
    ],
  },
)
Sales.belongsTo(EquipmentType, {
  foreignKey: 'idType',
  as: 'equipmentType',
})
export default Sales
