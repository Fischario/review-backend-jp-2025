import { describe, expect, it } from '@jest/globals'
import ServiceTemperatura from '../src/services/temperatura.js'

describe('Testando Celsius to Fahrenheit', () => {
    it('Testando o valor zero', () => {
        const fah = ServiceTemperatura.CelsiusToFahrenheit(0)
        expect(fah).toBe(32)
    })
    it('Testando número com vírgula', () => {
        const fah = ServiceTemperatura.CelsiusToFahrenheit(3.5)
        expect(fah).toBe(38.3)
    })
    it('Testando número negativo', () => {
        const fah = ServiceTemperatura.CelsiusToFahrenheit(-30)
        expect(fah).toBe(-22)
    })
    it('Testando número negativo com vírgula', () => {
        const fah = ServiceTemperatura.CelsiusToFahrenheit(-33.5)
        expect(fah).toBe(-28.299999999999997)
    })
    it('Testando Not a Number', () => {
        const fah = ServiceTemperatura.CelsiusToFahrenheit('a')
        expect(fah).toBe(NaN)
    })
})

describe('Testando Fahrenheit to Celsius', () => {
    it('Testando o valor zero', () => {
        const cel = ServiceTemperatura.FahrenheitToCelsius(0)
        expect(cel).toBe(-17.77777777777778)
    })
    it('Testando número com vírgula', () => {
        const cel = ServiceTemperatura.FahrenheitToCelsius(3.5)
        expect(cel).toBe(-15.833333333333334)
    })
    it('Testando número negativo', () => {
        const cel = ServiceTemperatura.FahrenheitToCelsius(-30)
        expect(cel).toBe(-34.44444444444444)
    })
    it('Testando número negativo com vírgula', () => {
        const cel = ServiceTemperatura.FahrenheitToCelsius(-33.5)
        expect(cel).toBe(-36.388888888888886)
    })
    it('Testando Not a Number', () => {
        const cel = ServiceTemperatura.FahrenheitToCelsius('a')
        expect(cel).toBe(NaN)
    })
})