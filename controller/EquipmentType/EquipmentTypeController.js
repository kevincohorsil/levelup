import { Router } from 'express'
import * as EquipmentTypeQuerys from './EquipmentTypeQuerys.js'

const router = Router()

/* ******************
       Method GET
 *******************/
router.get('/equipmentType', async (req, res) => {
  const Result = await EquipmentTypeQuerys.All()
  res.json(Result)
})

router.get('/equipmentType/search', async (req, res) => {
  const search = req.query.search
  const Result = await EquipmentTypeQuerys.search(search)
  res.json(Result)
})

router.get('/equipmentType/:id', async (req, res) => {
  const id = req.params.id
  const Result = await EquipmentTypeQuerys.Single(id)
  res.json(Result)
})

/* ******************
       Method POST
 *******************/

router.post('/equipmentType', async (req, res) => {
  try {
    const newRow = await EquipmentTypeQuerys.InsertData(req)
    res.json(newRow)
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(403)

      res.send({ status: 'error', message: 'Costumer ya Existe' })
    } else {
      res.status(500)
      res.send({ status: 'error', message: error.message })
    }
  }
})

/* ******************
       Method PUT
 *******************/
router.put('/equipmentType/:id', async (req, res) => {
  try {
    const id = req.params.id
    const updateRow = await EquipmentTypeQuerys.Update(id, req)
    let Result
    if (updateRow) {
      Result = await EquipmentTypeQuerys.Single(id)
    }

    res.json(Result)
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(403)

      res.send({ status: 'error', message: 'Costumer ya Existe' })
    } else {
      res.status(500)
      res.send({ status: 'error', message: error.message })
    }
  }
})
export default router
