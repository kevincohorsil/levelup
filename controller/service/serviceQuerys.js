import service from '../../models/service.js'
import { Op } from 'sequelize'

export const All = () => {
  const Result = service.findAll()
  return Result
}

export const Single = (id) => {
  const Result = service.findOne({
    where: { id: id },
  })
  return Result
}

export const search = (search) => {
  const Result = service.findAll({
    where: { description: { [Op.like]: `%${search}%` } },
  })
  return Result
}

export const InsertData = (req) => {
  const { description } = req.body
  const newCategory = service.create({
    description,
  })
  return newCategory
}

export const Update = (id, req) => {
  const { description } = req.body
  const UpdateRow = service.update(
    {
      description,
    },
    {
      where: { id: id },
    },
  )
  return UpdateRow
}
