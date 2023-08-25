import { Sequelize, DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'

export default function Costumer() {
  return sequelize.define(
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
      id_service: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'service',
          key: 'id',
        },
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.fn('getdate'),
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      photo: {
        type: DataTypes.STRING(50),
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
}
