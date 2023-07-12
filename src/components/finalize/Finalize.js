import { Formik, Form, Field, ErrorMessage,useField } from 'formik';
import * as Yup from 'yup'
import { MyCheckbox } from '../roomForm/RoomForm';


const Finalize = ({setStep, ...props}) => {
  return (
    <Formik
      initialValues = {{
        privacyPolicy: false // політика конфіденціальності
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
          <h3>`Прибирання квартири {props.roomData.typeOfCleaning}, яка складається з {props.roomData.roomNumber} кімнати, площєю {props.roomData.totalArea} кв.м та додатково помити {props.serviceData.bathRoomNumder} санвузол, {props.serviceData.windowNumber} вікон та відчистити {props.serviceData.removePellicle} вікон від плівки </h3>
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