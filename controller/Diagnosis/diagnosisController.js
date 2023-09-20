import { Router } from 'express'
import * as Diagnosis from './diagnosisQuerys.js'

const router = Router()

/* ******************
       Method GET
 *******************/
router.get('/diagnosis', async (req, res) => {
  const Result = await Diagnosis.All()
  res.json(Result)
})

router.get('/diagnosis/search', async (req, res) => {
  const search = req.query.search
  const Result = await Diagnosis.search(search)
  res.json(Result)
})

router.get('/diagnosis/byEquipment', async (req, res) => {
  const idEquipment = req.query.idEquipment
  const Result = await Diagnosis.byEquipment(idEquipment)
  res.json(Result)
})

router.get('/diagnosis/:id', async (req, res) => {
  const id = req.params.id
  const Result = await Diagnosis.Single(id)
  res.json(Result)
})

/* ******************
       Method POST
 *******************/

router.post('/diagnosis', async (req, res) => {
  try {
    const newRow = await Diagnosis.InsertData(req)
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
router.put('/diagnosis/:id', async (req, res) => {
  try {
    const id = req.params.id
    const updateRow = await Diagnosis.Update(id, req)
    let Result
    if (updateRow) {
      Result = await Diagnosis.Single(id)
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
