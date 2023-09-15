import { Router } from 'express'
import * as Payment from './paymentQuerys.js'

const router = Router()

/* ******************
       Method GET
 *******************/
router.get('/payment', async (req, res) => {
  const Result = await Payment.All()
  res.json(Result)
})

router.get('/payment/search', async (req, res) => {
  const search = req.query.search
  const Result = await Payment.search(search)
  res.json(Result)
})

router.get('/payment/:id', async (req, res) => {
  const id = req.params.id
  const Result = await Payment.Single(id)
  res.json(Result)
})

/* ******************
       Method POST
 *******************/

router.post('/payment', async (req, res) => {
  try {
    const newRow = await Payment.InsertData(req)
    res.json(newRow)
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(403)

      res.send({ status: 'error', message: 'payment ya Existe' })
    } else {
      res.status(500)
      res.send({ status: 'error', message: error.message })
    }
  }
})

/* ******************
       Method PUT
 *******************/
router.put('/payment/:id', async (req, res) => {
  try {
    const id = req.params.id
    const updateRow = await Payment.Update(id, req)
    let Result
    if (updateRow) {
      Result = await Payment.Single(id)
    }

    res.json(Result)
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(403)

      res.send({ status: 'error', message: 'payment ya Existe' })
    } else {
      res.status(500)
      res.send({ status: 'error', message: error.message })
    }
  }
})
export default router
