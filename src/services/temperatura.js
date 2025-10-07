class ServiceTemperatura {
    FahrenheitToCelsius(fahrenheit) {
        if (fahrenheit == isNaN) {
            throw new Error('Favor informar somente números, animal');
        }
        return (fahrenheit - 32) * 5 / 9
    }
    CelsiusToFahrenheit(celsius) {
        if (celsius == isNaN) {
            throw new Error('Favor informar somente números, besta');
        }
        return (celsius * 9 / 5) + 32
    }
}

export default new ServiceTemperatura()