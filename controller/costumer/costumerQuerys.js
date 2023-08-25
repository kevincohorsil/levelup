import Costumer from '../../models/Costumer.js'
import Category from '../../models/CategoryCostumer.js'
import { Op } from 'sequelize'

export const All = () => {
  const Result = Costumer().findAll()
  return Result
}

export const Single = (id) => {
  const Result = Costumer().findOne({
    include: {
      model: Category(),
      attributes: ['descripcion'],
    },
    where: { id: id },
  })
  return Result
}

export const search = (search) => {
  const Result = Costumer().findAll({
    where: { name: { [Op.like]: `%${search}%` } },
  })
  return Result
}

export const InsertData = (req) => {
  const { identityCostumer, name, phone, adress, photo, email } = req.body
  const newCostumer = Costumer().create({
    identityCostumer,
    name,
    phone,
    adress,
    photo:
      'https://cdn.icon-icons.com/icons2/1508/PNG/512/systemusers_104569.png',
    email,
    category: 1,
  })
  return newCostumer
}

export const Update = (id, req) => {
  const {
    identityCostumer,
    name,
    phone,
    adress,
    photo,
    email,
    category,
  } = req.body
  const UpdateRow = Costumer().update(
    {
      identityCostumer,
      name,
      phone,
      adress,
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
