import Sales from '../../models/Sales.js'
import EquipmentType from '../../models/EquipmentType.js'
import { Op } from 'sequelize'

export const All = async () => {
  let Result
  await Sales.findAll({
    include: [
      {
        model: EquipmentType,
        as: 'equipmentType',
        attributes: ['description'],
      },
    ],
  }).then((data) => {
    if (data) {
      Result = data.map((data, index) => ({
        id: data.id,
        date: data.date,
        idType: data.idType,
        description: data.description,
        value: data.value,
        status: data.status,
        typeDescription: data.equipmentType
          ? data.equipmentType.description
          : '', // Campo de descripción de la categoría
      }))
    }
  })
  return Result
}

export const Single = async (id) => {
  let Result
  await Sales.findAll({
    include: [
      {
        model: EquipmentType,
        as: 'equipmentType',
        attributes: ['description'],
      },
    ],
    where: { id: id },
  }).then((data) => {
    if (data) {
      Result = data.map((data, index) => ({
        id: data.id,
        date: data.date,
        idType: data.idType,
        description: data.description,
        value: data.value,
        status: data.status,
        typeDescription: data.equipmentType
          ? data.equipmentType.description
          : '', // Campo de descripción de la categoría
      }))
    }
  })
  return Result
}

export const search = async (search) => {
  let Result
  await Sales.findAll({
    include: [
      {
        model: EquipmentType,
        as: 'equipmentType',
        attributes: ['description'],
      },
    ],
    where: { description: { [Op.like]: `%${search}%` } },
  }).then((data) => {
    if (data) {
      Result = data.map((data, index) => ({
        id: data.id,
        date: data.date,
        idType: data.idType,
        description: data.description,
        value: data.value,
        status: data.status,
        typeDescription: data.equipmentType
          ? data.equipmentType.description
          : '', // Campo de descripción de la categoría
      }))
    }
  })
  return Result
}

export const InsertData = (req) => {
  const { date, idType, description, value, status } = req.body
  const newSales = Sales.create({
    date,
    idType,
    description,
    value,
    status,
  })
  return newSales
}

export const Update = (id, req) => {
  const { date, idType, description, value, status } = req.body
  const UpdateRow = Sales.update(
    {
      date,
      idType,
      description,
      value,
      status,
    },
    {
      where: { id: id },
    },
  )
  return UpdateRow
}
