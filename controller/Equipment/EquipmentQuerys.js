import Equipment from '../../models/Equipment.js'
import Service from '../../models/service.js'
import Costumer from '../../models/Costumer.js'
import { Op } from 'sequelize'

export const All = async () => {
  let Result
  await Equipment.findAll({
    include: [
      {
        model: Costumer,
        as: 'equipmentCostumer',
        attributes: ['name'],
      },
      {
        model: Service,
        as: 'equipmentService',
        attributes: ['description'],
      },
    ],
  }).then((data) => {
    if (data) {
      Result = data.map((data, index) => ({
        id: data.id,
        description: data.description,
        idservice: data.idservice,
        startdate: data.startdate,
        enddate: data.enddate,
        photo: data.photo,
        serviceDescription: data.equipmentService
          ? data.equipmentService.description
          : '', // Campo de descripción de la categoría
        nameCostumer: data.equipmentCostumer ? data.equipmentCostumer.name : '', // Campo de descripción de la categoría
        estado: data.estado,
      }))
    }
  })
  return Result
}

export const Single = async (id) => {
  let Result
  await Equipment.findAll({
    include: [
      {
        model: Costumer,
        as: 'equipmentCostumer',
        attributes: ['name'],
      },
      {
        model: Service,
        as: 'equipmentService',
        attributes: ['description'],
      },
    ],

    where: { id: id },
  }).then((data) => {
    if (data) {
      Result = data.map((data) => ({
        id: data.id,
        description: data.description,
        idservice: data.idservice,
        startdate: data.startdate,
        enddate: data.enddate,
        photo: data.photo,
        serviceDescription: data.equipmentService
          ? data.equipmentService.description
          : '', // Campo de descripción de la categoría
        nameCostumer: data.equipmentCostumer ? data.equipmentCostumer.name : '', // Campo de descripción de la categoría
        estado: data.estado,
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
  const {
    description,
    idservice,
    startdate,
    enddate,
    photo,
    idCostumer,
  } = req.body
  const newEquipment = Equipment.create({
    description,
    idservice,
    startdate: startdate,
    enddate: enddate,
    photo,
    idCostumer,
  })
  return newEquipment
}

export const Update = (id, req) => {
  const {
    description,
    idservice,
    startdate,
    enddate,
    photo,
    idCostumer,
  } = req.body
  const UpdateRow = Equipment.update(
    {
      description,
      idservice,
      startdate,
      enddate,
      photo,
      idCostumer,
    },
    {
      where: { id: id },
    },
  )
  return UpdateRow
}
