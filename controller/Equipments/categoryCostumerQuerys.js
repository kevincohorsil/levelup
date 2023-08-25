import category from '../../models/CategoryCostumer.js'
import { Op } from 'sequelize'

export const All = () => {
  const Result = category().findAll()
  return Result
}

export const Single = (id) => {
  const Result = category().findOne({
    where: { id: id },
  })
  return Result
}

export const search = (search) => {
  const Result = category().findAll({
    where: { description: { [Op.like]: `%${search}%` } },
  })
  return Result
}

export const InsertData = (req) => {
  const { description } = req.body
  const newCategory = category().create({
    description,
  })
  return newCategory
}

export const Update = (id, req) => {
  const { description } = req.body
  const UpdateRow = category().update(
    {
      description,
    },
    {
      where: { id: id },
    },
  )
  return UpdateRow
}
