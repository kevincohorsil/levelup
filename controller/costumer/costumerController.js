import { Router } from 'express'
import * as Costumer from './costumerQuerys.js'

const router = Router()

/* ******************
       Method GET
 *******************/
router.get('/costumer', async (req, res) => {
  const Result = await Costumer.All()
  res.json(Result)
})

router.get('/costumer/search', async (req, res) => {
  const search = req.query.search
  const Result = await Costumer.search(search)
  res.json(Result)
})

router.get('/costumer/:id', async (req, res) => {
  const id = req.params.id
  const Result = await Costumer.Single(id)
  res.json(Result)
})

/* ******************
       Method POST
 *******************/

router.post('/costumer', async (req, res) => {
  try {
    const newRow = await Costumer.InsertData(req)
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
router.put('/costumer/:id', async (req, res) => {
  try {
    const id = req.params.id
    const updateRow = await Costumer.Update(id, req)
    let Result
    if (updateRow) {
      Result = await Costumer.Single(id)
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
