import { Formik, Form, } from 'formik';
import * as Yup from 'yup'
import  MyCheckbox from '../MyCheckbox';

const YupShema = Yup.object({
  privacyPolicy: Yup.boolean()
                  .required("Потрібна згода")
                  .oneOf([true], "Потрібна згода"),
});

const Initial = ({onChangePrivacyPolicy}) => {
  return (
    <Formik
    initialValues = {{
      privacyPolicy: false 
    }}
    validationSchema = {YupShema}
    onSubmit = {values => onChangePrivacyPolicy(values)}
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