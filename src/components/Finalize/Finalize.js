import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import  MyCheckbox  from '../MyCheckbox';

const Finalize = ({setStep, roomData, serviceData, userData, currency, currencyValue}) => {
  let totalResult = serviceData.bathRoomNumder * 150 + serviceData.removePellicle * 200 + serviceData.windowNumber *250;
  let totalResultEquivalent = (Math.round(totalResult * 100/ (currencyValue.filter(item => item.cc === currency))[0].rate)) / 100;

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
        <h3>`Загальна вартість цього прибирання буде складати {totalResult} або еквівалент   {totalResultEquivalent} {(currencyValue.filter(item => item.cc === currency))[0].txt} `</h3>
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