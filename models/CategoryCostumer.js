import { Sequelize, DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'

const CategoryCostumer = sequelize.define(
  'CategoryCostumer',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING(300),
      allowNull: true,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: 'CategoryCostumer',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: 'PK_CategoryCostumer',
        unique: true,
        fields: [{ name: 'id' }],
      },
    ],
  },
)

export default CategoryCostumer
