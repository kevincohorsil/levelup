import { Sequelize, DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'

export default function Costumer() {
  return sequelize.define(
    'payment',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_diagnosis: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      value: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: false,
      },
      date_Create: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.fn('getdate'),
      },
      id_costumer: {
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
}
