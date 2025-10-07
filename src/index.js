import express from 'express'
import router from './routes/temperatura.js'

const app = express()
app.use(express.json())

app.use('/api', router)

const porta = 9999

app.listen(porta, () => {
    console.log('servidor rodando na porta ' + porta)
})