import { Sequelize, DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'
import Equipment from './Equipment.js'

const Diagnosis = sequelize.define(
  'Diagnosis',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    idEquipment: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'payment',
        key: 'id',
      },
    },
    valor: {
      type: DataTypes.DECIMAL(19, 4),
      allowNull: true,
      defaultValue: 0,
    },
    description: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    approximateTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Diagnosis',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: 'PK_Diagnosis',
        unique: true,
        fields: [{ name: 'id' }],
      },
    ],
  },
)
Diagnosis.belongsTo(Equipment, {
  foreignKey: 'idEquipment',
  as: 'equipment',
})
export default Diagnosis
