import { Sequelize, DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'

const EquipmentType = sequelize.define(
  'EquipmentType',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'EquipmentType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: 'PK_EquipmentType',
        unique: true,
        fields: [{ name: 'id' }],
      },
    ],
  },
)
export default EquipmentType
