import express from 'express'
import cors from 'cors'
import costumerController from '../controller/costumer/costumerController.js'
import categoryController from '../controller/categoryCostumer/categoryCostumerController.js'
import equipmentController from '../controller/Equipment/EquipmentConroller.js'
import serviceController from '../controller/service/serviceController.js'
import EquipmentTypeConroller from '../controller/EquipmentType/EquipmentTypeController.js'
import UpoadPhoto from '../controller/Photo/uploadPhoto.js'
import Diagnosis from '../controller/Diagnosis/diagnosisController.js'
import Sales from '../controller/Sales/salesController.js'
import Payment from '../controller/payment/paymnetController.js'

const app = express()

app.use(express.json())

app.use(cors())

app.use('/api', costumerController)
app.use('/api', categoryController)
app.use('/api', equipmentController)
app.use('/api', serviceController)
app.use('/api', EquipmentTypeConroller)
app.use('/api', UpoadPhoto)
app.use('/api', Diagnosis)
app.use('/api', Sales)
app.use('/api', Payment)

try {
  await sequelize.authenticate()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}

//app.listen(3000)
var port = process.env.PORT || 3000

app.listen(port, 'localhost', function () {
  console.log('Hola Node' + port + 'iniciada.//')
})
console.log('Server Port', port)
