import Equipment from '../../models/Equipment.js'
import Service from '../../models/service.js'
import { Op } from 'sequelize'

export const All = () => {
  const Result = Equipment.findAll()
  return Result
}

export const Single = async (id) => {
  let Result
  await Equipment.findAll({
    include: {
      model: Service,
      as: 'equipmentService',
      attributes: ['description'],
    },
    where: { id: id },
  }).then((data) => {
    if (data) {
      Result = data.map((data) => ({
        id: data.id,
        description: data.description,
        id_service: data.id_service,
        start_date: data.start_date,
        end_date: data.end_date,
        photo: data.photo,
        serviceDescription: data.equipmentService.description, // Campo de descripción de la categoría
      }))
    }
  })
  return Result
}

export const search = (search) => {
  const Result = Equipment.findAll({
    where: { description: { [Op.like]: `%${search}%` } },
  })
  return Result
}

export const InsertData = (req) => {
  const { description, id_service, start_date, end_date, photo } = req.body
  const newEquipment = Equipment.create({
    description,
    id_service,
    start_date: start_date,
    end_date: end_date,
    photo,
  })
  return newEquipment
}

export const Update = (id, req) => {
  const { description, id_service, start_date, end_date, photo } = req.body
  const UpdateRow = Equipment.update(
    {
      description,
      id_service,
      start_date,
      end_date,
      photo,
    },
    {
      where: { id: id },
    },
  )
  return UpdateRow
}
