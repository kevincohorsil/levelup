import { Router } from 'express'
import * as Service from './serviceQuerys.js'

const router = Router()

/* ******************
       Method GET
 *******************/
router.get('/service', async (req, res) => {
  const Result = await Service.All()
  res.json(Result)
})

router.get('/service/search', async (req, res) => {
  const search = req.query.search
  const Result = await Service.search(search)
  res.json(Result)
})

router.get('/service/:id', async (req, res) => {
  const id = req.params.id
  const Result = await Service.Single(id)
  res.json(Result)
})

/* ******************
       Method POST
 *******************/

router.post('/service', async (req, res) => {
  try {
    const newRow = await Service.InsertData(req)
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
router.put('/service/:id', async (req, res) => {
  try {
    const id = req.params.id
    const updateRow = await Service.Update(id, req)
    let Result
    if (updateRow) {
      Result = await Service.Single(id)
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
