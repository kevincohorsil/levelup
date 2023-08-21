import express from 'express'
import cors from 'cors'
import costumerController from '../controller/costumerController.js'

const app = express()

app.use(express.json())

app.use(cors())

app.use('/api', costumerController)

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
