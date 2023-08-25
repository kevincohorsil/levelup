import { Sequelize, DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'

export default function Costumer() {
  return sequelize.define(
    'service',
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
    },
    {
      sequelize,
      tableName: 'service',
      schema: 'dbo',
      timestamps: false,
      indexes: [
        {
          name: 'PK_service',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    },
  )
}
