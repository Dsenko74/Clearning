const GetCurrencyValue = async (setCurrencyValue, currency) => {
  let value={}
  fetch ('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json')
  .then(res => res.json())
  .then(json => {
    value = json.filter(item => item.cc === currency);
    setCurrencyValue(value.filter(item => item.cc === currency));
    console.log(value);
    // console.log(value);
    //console.log(`це value в середені getCurrencyValue ${value[0].rate}`)
    return value})
  .catch(e =>  {throw e})
  .finally(console.log(`It\`s working`));
}
export default GetCurrencyValue;