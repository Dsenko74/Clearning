import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup'
import  MyCheckbox from '../MyCheckbox';

const YupShema = Yup.object({
  privacyPolicy: Yup.boolean()
                  .required("Потрібна згода")
                  .oneOf([true], "Потрібна згода"),
});

const Initial = ({onChangePrivacyPolicy, setCurrency}) => {

  const handleSubmit = (values) => {
    onChangePrivacyPolicy(values);
  }

  const initialValues = {
    typeOfCurrency: '',
    privacyPolicy: false 
  }

  return (
    <Formik
    initialValues = {initialValues}
    validationSchema = {YupShema}
    onSubmit = {handleSubmit}
   >
      <Form className="form">  
        <h2>Розрахувати приблизну вартість прибирання initial</h2>
        <MyCheckbox
          name="privacyPolicy">
              Натискаючи, ви даєте згоду на обробку персональних даних
        </MyCheckbox>
        <Field
          id="typeOfCurrency"
          name="typeOfCurrency"
          as='select'>
            <option value="">Оберить валюту розрахунку</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
        </Field>
        <button className='button button_long'
          type="submit"
          >Якщо хочете почати — тиснить сюди</button>
      </Form>
    </Formik>
  )
}
export default Initial;