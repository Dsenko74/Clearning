import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import  MyCheckbox  from '../MyCheckbox';
// let value ={};
const Finalize = ({setStep, roomData, serviceData, userData}) => {
//   const getCurrencyValue = async () => {
//     fetch ('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json')
//     .then(res => res.json())
//     .then(json => {
//       //value = json.filter(item => item.cc === 'USD')
//       value = json;
//       console.log(value);
//       console.log(`це value в середені fetch ${value[0].rate}`)
//       return value})
//     .then(onValue)
//     .catch(e =>  {throw e})
//     .finally(console.log(`It\`s working`));
//   }
// let x = 1;
// const onValue = (value) =>{
//   x = value.filter(item => item.cc === 'USD');
//   console.log(`в середені onValue  ${x[0].rate}}`)
// }

  return (
    <Formik
      initialValues = {{
        privacyPolicy: false 
      }}
      validationSchema = {Yup.object({
        privacyPolicy: Yup.boolean()
                        .required("Потрібна згода")
                        .oneOf([true], "Потрібна згода"),
      })}
      onSubmit = {values => {
        setStep('initital');
      }}
    >
      <Form className="form">  
        <h2>Ваша заявка</h2>
        <h3>`Прибирання квартири {roomData.typeOfCleaning}, яка складається з {roomData.roomNumber} кімнати, площєю {roomData.totalArea} кв.м та додатково помити {serviceData.bathRoomNumder} санвузол, {serviceData.windowNumber} вікон та відчистити {serviceData.removePellicle} вікон від плівки </h3>
        <MyCheckbox
          name="privacyPolicy">
              Натискаючи, ви даєте згоду на обробку персональних даних
        </MyCheckbox>
        <button className='button button_long'
          type="submit"
          >Якщо хочете почати — тиснить сюди</button>
      </Form>
    </Formik>
)
}
export default Finalize;