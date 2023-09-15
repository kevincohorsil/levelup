import { Sequelize, DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'
import Diagnosis from './Diagnosis.js'
import Costumer from './Costumer.js'

const Payment = sequelize.define(
  'payment',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    idDiagnosis: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    value: {
      type: DataTypes.DECIMAL(19, 4),
      allowNull: false,
    },
    dateCreate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate'),
    },
    idCostumer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Costumer',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    tableName: 'payment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: 'PK_payment',
        unique: true,
        fields: [{ name: 'id' }],
      },
    ],
  },
)
Payment.belongsTo(Diagnosis, {
  foreignKey: 'idDiagnosis',
  as: 'diagnosis',
})
Payment.belongsTo(Costumer, {
  foreignKey: 'idCostumer',
  as: 'costumer',
})

export default Payment
