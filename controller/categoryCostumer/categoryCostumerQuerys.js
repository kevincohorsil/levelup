import CategoryCostumer from '../../models/CategoryCostumer.js'
import { Op } from 'sequelize'

export const All = () => {
  const Result = CategoryCostumer.findAll()
  return Result
}

export const Single = (id) => {
  const Result = CategoryCostumer.findOne({
    where: { id: id },
  })
  return Result
}

export const search = (search) => {
  const Result = CategoryCostumer.findAll({
    where: { description: { [Op.like]: `%${search}%` } },
  })
  return Result
}

export const InsertData = (req) => {
  const { description } = req.body
  const newCategory = CategoryCostumer.create({
    description,
  })
  return newCategory
}

export const Update = (id, req) => {
  const { description } = req.body
  const UpdateRow = CategoryCostumer.update(
    {
      description,
    },
    {
      where: { id: id },
    },
  )
  return UpdateRow
}
