import Costumer from '../../models/Costumer.js'
import CategoryCostumer from '../../models/CategoryCostumer.js'
import { Op } from 'sequelize'

export const All = async () => {
  let Result
  await Costumer.findAll({
    include: {
      model: CategoryCostumer,
      as: 'customerCategory',
      attributes: ['description'],
    },
  }).then((costumers) => {
    if (costumers) {
      Result = costumers.map((costumer) => ({
        id: costumer.id,
        identityCostumer: costumer.identityCostumer,
        name: costumer.name,
        phone: costumer.phone,
        address: costumer.address,
        category: costumer.category,
        photo: costumer.photo,
        email: costumer.email,
        CategoryDescription: costumer.customerCategory
          ? costumer.customerCategory.description
          : '', // Campo de descripción de la categoría
      }))
    }
  })
  return Result
}

export const Single = async (id) => {
  let Result
  await Costumer.findAll({
    include: {
      model: CategoryCostumer,
      as: 'customerCategory',
      attributes: ['description'],
    },
    where: { id: id },
  }).then((costumers) => {
    if (costumers) {
      Result = costumers.map((costumer) => ({
        id: costumer.id,
        identityCostumer: costumer.identityCostumer,
        name: costumer.name,
        phone: costumer.phone,
        address: costumer.address,
        category: costumer.category,
        photo: costumer.photo,
        email: costumer.email,
        CategoryDescription: costumer.customerCategory
          ? costumer.customerCategory.description
          : '', // Campo de descripción de la categoría
      }))
    }
  })
  return Result
}

export const search = (search) => {
  const Result = Costumer.findAll({
    where: { name: { [Op.like]: `%${search}%` } },
  })
  return Result
}

export const InsertData = (req) => {
  const {
    identityCostumer,
    name,
    phone,
    address,
    photo,
    email,
    category,
  } = req.body
  const newCostumer = Costumer.create({
    identityCostumer,
    name,
    phone,
    address,
    photo:
      'https://cdn.icon-icons.com/icons2/1508/PNG/512/systemusers_104569.png',
    email,
    category: category,
  })
  return newCostumer
}

export const Update = (id, req) => {
  const {
    identityCostumer,
    name,
    phone,
    address,
    photo,
    email,
    category,
  } = req.body
  const UpdateRow = Costumer.update(
    {
      identityCostumer,
      name,
      phone,
      address,
      photo,
      email,
      category,
    },
    {
      where: { id: id },
    },
  )
  return UpdateRow
}
