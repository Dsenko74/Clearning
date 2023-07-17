import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import  MyCheckbox  from '../MyCheckbox_';

const Finalize = ({setStep, roomData, serviceData, userData}) => {

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