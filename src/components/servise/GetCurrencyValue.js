const getCurrencyValue = () => fetch ('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json')
    .then(res => res.json())

export default getCurrencyValue;