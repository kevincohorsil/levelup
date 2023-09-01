import { Sequelize, DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'
import CategoryCostumer from './CategoryCostumer.js'
import {
  nameValidation,
  emailValidation,
  phoneValidation,
  photoValidation,
  identidadValidation,
} from '../controller/validation.js'

const Costumer = sequelize.define(
  'Costumer',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    identityCostumer: {
      type: DataTypes.STRING(13),
      allowNull: true,
      validate: identidadValidation,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      validate: nameValidation,
    },
    phone: {
      type: DataTypes.STRING(9),
      allowNull: true,
      validate: phoneValidation,
    },
    adress: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    photo: {
      type: DataTypes.STRING(100),
      allowNull: true,
      validate: photoValidation,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      validate: emailValidation,
    },
  },
  {
    sequelize,
    tableName: 'Costumer',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: 'PK_Costumer',
        unique: true,
        fields: [{ name: 'id' }],
      },
    ],
  },
)

Costumer.belongsTo(CategoryCostumer, {
  foreignKey: 'category',
  as: 'customerCategory',
})
//Costumer.sync({ force: false })

export default Costumer
