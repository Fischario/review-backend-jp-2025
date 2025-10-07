import ServiceTemperatura from '../services/temperatura.js'

class ControllerTemperatura {
    FahrenheitToCelsius(req, res) {
        try {
            const fahrenheit = req.body.fahrenheit
            const celsius = ServiceTemperatura.FahrenheitToCelsius(fahrenheit)
            res.status(200).send({
                data: {
                    celsius: celsius,
                    fahrenheit: fahrenheit
                }
            })
        }
        catch (error) {
            res.status(400).send({
                msg: `deu ruim mané: ${error.message}`
            })
        }
    }
    CelsiusToFahrenheit(req, res) {
        try {
            const celsius = req.body.celsius
            const fahrenheit = ServiceTemperatura.CelsiusToFahrenheit(celsius)
            res.status(200).send({
                data: {
                    celsius: celsius,
                    fahrenheit: fahrenheit
                }
            })
        }
        catch (error) {
            res.status(400).send({
                msg: `deu ruim mané: ${error.message}`
            })
        }
    }
}

export default new ControllerTemperatura()