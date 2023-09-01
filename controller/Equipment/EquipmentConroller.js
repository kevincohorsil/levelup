import { Router } from 'express'
import * as EquipmentQuerys from './EquipmentQuerys.js'

const router = Router()

/* ******************
       Method GET
 *******************/
router.get('/equipment', async (req, res) => {
  const Result = await EquipmentQuerys.All()
  res.json(Result)
})

router.get('/equipment/search', async (req, res) => {
  const search = req.query.search
  const Result = await EquipmentQuerys.search(search)
  res.json(Result)
})

router.get('/equipment/:id', async (req, res) => {
  const id = req.params.id
  const Result = await EquipmentQuerys.Single(id)
  res.json(Result)
})

/* ******************
       Method POST
 *******************/

router.post('/equipment', async (req, res) => {
  try {
    const newRow = await EquipmentQuerys.InsertData(req)
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
router.put('/equipment/:id', async (req, res) => {
  try {
    const id = req.params.id
    const updateRow = await EquipmentQuerys.Update(id, req)
    let Result
    if (updateRow) {
      Result = await EquipmentQuerys.Single(id)
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
