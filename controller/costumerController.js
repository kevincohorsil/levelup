import { Router } from 'express'
import Costumer from '../models/Costumer.js'

const router = Router()

router.get('/costumer', async (req, res) => {
  const Result = await Costumer().findAll()
  res.json(Result)
})

router.post('/costumer', async (req, res) => {
  try {
    const { identityCostumer, name, phone, adress, photo, email } = req.body
    const newCostumer = await Costumer().create({
      identityCostumer,
      name,
      phone,
      adress,
      photo:
        'https://cdn.icon-icons.com/icons2/1508/PNG/512/systemusers_104569.png',
      email,
      category: 1,
    })
    res.json(newCostumer)
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
