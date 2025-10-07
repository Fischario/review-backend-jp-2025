import express from 'express'
import ControllerTemperatura from '../controllers/temperatura.js'

const router = express.Router()

// o primeiro parâmetro é o ENDPOINT (caminho)
router.post('/fah-to-cel', ControllerTemperatura.FahrenheitToCelsius)
router.post('/cel-to-fah', ControllerTemperatura.CelsiusToFahrenheit)

export default router