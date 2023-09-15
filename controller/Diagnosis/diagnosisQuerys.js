import Diagnosis from '../../models/Diagnosis.js'
import Equipment from '../../models/Equipment.js'
import { Op } from 'sequelize'

export const All = async () => {
  let Result
  await Diagnosis.findAll({
    include: [
      {
        model: Equipment,
        as: 'equipment',
        attributes: ['description'],
      },
    ],
  }).then((data) => {
    if (data) {
      Result = data.map((data, index) => ({
        id: data.id,
        idEquipment: data.idEquipment,
        valor: data.valor,
        approximateTime: data.approximateTime,
        equipmentDescription: data.equipment ? data.equipment.description : '', // Campo de descripción de la categoría
      }))
    }
  })
  return Result
}

export const Single = async (id) => {
  let Result
  await Diagnosis.findOne({
    include: [
      {
        model: Equipment,
        as: 'equipment',
        attributes: ['description'],
      },
    ],
    where: { id: id },
  }).then((data) => {
    if (data) {
      Result = data.map((data, index) => ({
        id: data.id,
        idEquipment: data.idEquipment,
        valor: data.valor,
        approximateTime: data.approximateTime,
        equipmentDescription: data.equipment ? data.equipment.description : '', // Campo de descripción de la categoría
      }))
    }
  })
  return Result
}

export const search = async (search) => {
  let Result
  await Diagnosis.findAll({
    include: [
      {
        model: Equipment,
        as: 'equipment',
        attributes: ['description'],
      },
    ],
    where: { description: { [Op.like]: `%${search}%` } },
  }).then((data) => {
    if (data) {
      Result = data.map((data, index) => ({
        id: data.id,
        idEquipment: data.idEquipment,
        valor: data.valor,
        approximateTime: data.approximateTime,
        equipmentDescription: data.equipment ? data.equipment.description : '', // Campo de descripción de la categoría
      }))
    }
  })
  return Result
}

export const InsertData = (req) => {
  const { idEquipment, Valor, description, approximateTime } = req.body
  const newDiagnosis = Diagnosis.create({
    idEquipment,
    Valor,
    description,
    approximateTime,
  })
  return newDiagnosis
}

export const Update = (id, req) => {
  const { idEquipment, Valor, description, approximateTime } = req.body
  const UpdateRow = Diagnosis.update(
    {
      idEquipment,
      Valor,
      description,
      approximateTime,
    },
    {
      where: { id: id },
    },
  )
  return UpdateRow
}
