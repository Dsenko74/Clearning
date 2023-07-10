import { Formik, Form, Field, ErrorMessage,useField } from 'formik';
import * as Yup from 'yup'
import { MyCheckbox } from '../roomForm/RoomForm';


const Initial = ({setStep, onChangePrivacyPolicy}) => {
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
            setStep('roomForm');
            onChangePrivacyPolicy(values);
        }}
        >
            <Form className="form">  
                <h2>Розрахувати приблизну вартість прибирання initial</h2>
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
export default Initial;