import { Sequelize, DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'

export default function Costumer() {
  return sequelize.define(
    'Diagnosis',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_Equipment: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'payment',
          key: 'id',
        },
      },
      Valor: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: true,
        defaultValue: 0,
      },
      Descripcion: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      approximate_time: {
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
}
