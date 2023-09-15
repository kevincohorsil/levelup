import Payment from '../../models/payment.js'
import Diagnosis from '../../models/Diagnosis.js'
import Costumer from '../../models/Costumer.js'
import Equipment from '../../models/Equipment.js'
import { Op } from 'sequelize'

export const All = async () => {
  let Result
  await Payment.findAll({
    include: [
      {
        model: Diagnosis,
        as: 'diagnosis',
        attributes: ['description'],
        include: [
          {
            model: Equipment,
            as: 'equipment',
            attributes: ['description'],
          },
        ],
      },
      {
        model: Costumer,
        as: 'costumer',
        attributes: ['name'],
      },
    ],
  }).then((data) => {
    console.log(data)
    if (data) {
      Result = data.map((data, index) => ({
        id: data.id,
        idDiagnosis: data.idDiagnosis,
        dateCreate: data.dateCreate,
        value: data.value,
        idCostumer: data.idCostumer,
        diagnosisDescription: data.diagnosis ? data.diagnosis.description : '', // Campo de descripción de la categoría
        costumerName: data.costumer ? data.costumer.name : '', // Campo de descripción de la categoría
        equipment: data.diagnosis.equipment
          ? data.diagnosis.equipment.description
          : '',
      }))
    }
  })
  return Result
}

export const Single = async (id) => {
  let Result
  await Payment.findAll({
    include: [
      {
        model: Diagnosis,
        as: 'diagnosis',
        attributes: ['description'],
      },
      {
        model: Costumer,
        as: 'costumer',
        attributes: ['name'],
      },
    ],
    where: { id: id },
  }).then((data) => {
    if (data) {
      Result = data.map((data, index) => ({
        id: data.id,
        idDiagnosis: data.idDiagnosis,
        dateCreate: data.dateCreate,
        value: data.value,
        idCostumer: data.idCostumer,
        diagnosisDescription: data.diagnosis ? data.diagnosis.description : '', // Campo de descripción de la categoría
        costumerName: data.costumer ? data.costumer.name : '', // Campo de descripción de la categoría
        equipment: data.diagnosis.equipment
          ? data.diagnosis.equipment.description
          : '',
      }))
    }
  })
  return Result
}

export const search = async (search) => {
  let Result
  await Payment.findAll({
    include: [
      {
        model: Diagnosis,
        as: 'diagnosis',
        attributes: ['description'],
      },
      {
        model: Costumer,
        as: 'costumer',
        attributes: ['name'],
      },
    ],
    where: { id: { [Op.like]: `%${search}%` } },
  }).then((data) => {
    if (data) {
      Result = data.map((data, index) => ({
        id: data.id,
        idDiagnosis: data.idDiagnosis,
        dateCreate: data.dateCreate,
        value: data.value,
        idCostumer: data.idCostumer,
        diagnosisDescription: data.diagnosis ? data.diagnosis.description : '', // Campo de descripción de la categoría
        costumerName: data.costumer ? data.costumer.name : '', // Campo de descripción de la categoría
        equipment: data.diagnosis.equipment
          ? data.diagnosis.equipment.description
          : '',
      }))
    }
  })
  return Result
}

export const InsertData = (req) => {
  const { idDiagnosis, dateCreate, value, idCostumer } = req.body
  const newPayment = Payment.create({
    idDiagnosis,
    dateCreate,
    value,
    idCostumer,
  })
  return newPayment
}

export const Update = (id, req) => {
  const { idDiagnosis, dateCreate, value, idCostumer } = req.body
  const UpdateRow = Payment.update(
    {
      idDiagnosis,
      dateCreate,
      value,
      idCostumer,
    },
    {
      where: { id: id },
    },
  )
  return UpdateRow
}
