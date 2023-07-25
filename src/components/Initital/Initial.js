import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup'
import  MyCheckbox from '../MyCheckbox';
import { useTranslation } from 'react-i18next';

const initialValues = {
  typeOfCurrency: '',
  privacyPolicy: false 
}

const YupShema = () => {
  const { t } = useTranslation();
  
  return Yup.object({
      privacyPolicy: Yup.boolean()
                      .required(t("required"))
                      .oneOf([true], t("required")),
      typeOfCurrency: Yup.string()
                      .required(t("required")),
    });
}

const Initial = ({onChangePrivacyPolicy}) => {
  const { t } = useTranslation();

  const handleSubmit = (values) => {
    onChangePrivacyPolicy(values);
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={YupShema()}
      onSubmit={handleSubmit}
    >
      <Form className="form">  
        <h2>{t("calculate the cost")}</h2>
        <MyCheckbox
          name="privacyPolicy">{t("processing of personal data")}
        </MyCheckbox>
        <Field
          id="typeOfCurrency"
          name="typeOfCurrency"
          as='select'>
          <option value="">{t("currency")}</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
        </Field>
        <ErrorMessage className='error' name="typeOfCurrency" component={'div'} />
        <button className='button button_long'
          type="submit"
          >{t("continue")}</button>
      </Form>
    </Formik>
  )
}
export default Initial;