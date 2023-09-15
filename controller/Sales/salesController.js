import { Router } from 'express'
import * as Sales from './salesQuerys.js'

const router = Router()

/* ******************
       Method GET
 *******************/
router.get('/sales', async (req, res) => {
  const Result = await Sales.All()
  res.json(Result)
})

router.get('/sales/search', async (req, res) => {
  const search = req.query.search
  const Result = await Sales.search(search)
  res.json(Result)
})

router.get('/sales/:id', async (req, res) => {
  const id = req.params.id
  const Result = await Sales.Single(id)
  res.json(Result)
})

/* ******************
       Method POST
 *******************/

router.post('/sales', async (req, res) => {
  try {
    const newRow = await Sales.InsertData(req)
    res.json(newRow)
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(403)

      res.send({ status: 'error', message: 'Sales ya Existe' })
    } else {
      res.status(500)
      res.send({ status: 'error', message: error.message })
    }
  }
})

/* ******************
       Method PUT
 *******************/
router.put('/sales/:id', async (req, res) => {
  try {
    const id = req.params.id
    const updateRow = await Sales.Update(id, req)
    let Result
    if (updateRow) {
      Result = await Sales.Single(id)
    }

    res.json(Result)
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(403)

      res.send({ status: 'error', message: 'Sales ya Existe' })
    } else {
      res.status(500)
      res.send({ status: 'error', message: error.message })
    }
  }
})
export default router
