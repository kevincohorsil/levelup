import { Router } from 'express'
import * as Category from './categoryCostumerQuerys.js'

const router = Router()

/* ******************
       Method GET
 *******************/
router.get('/category', async (req, res) => {
  const Result = await Category.All()
  res.json(Result)
})

router.get('/category/search', async (req, res) => {
  const search = req.query.search
  const Result = await Category.search(search)
  res.json(Result)
})

router.get('/category/:id', async (req, res) => {
  const id = req.params.id
  const Result = await Category.Single(id)
  res.json(Result)
})

/* ******************
       Method POST
 *******************/

router.post('/category', async (req, res) => {
  try {
    const newRow = await Category.InsertData(req)
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
router.put('/category/:id', async (req, res) => {
  try {
    const id = req.params.id
    const updateRow = await Category.Update(id, req)
    let Result
    if (updateRow) {
      Result = await Category.Single(id)
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
