import EquipmentType from '../../models/EquipmentType.js'
import { Op } from 'sequelize'

export const All = async () => {
  let Result = await EquipmentType.findAll()
  return Result
}

export const Single = async (id) => {
  let Result = await EquipmentType.findAll()
  return Result
}

export const search = (search) => {
  const Result = EquipmentType.findAll({
    where: { description: { [Op.like]: `%${search}%` } },
  })
  return Result
}

export const InsertData = (req) => {
  const { description } = req.body
  const newEquipmentType = EquipmentType.create({
    description,
  })
  return newEquipmentType
}

export const Update = (id, req) => {
  const { description } = req.body
  const UpdateRow = EquipmentType.update(
    {
      description,
    },
    {
      where: { id: id },
    },
  )
  return UpdateRow
}
