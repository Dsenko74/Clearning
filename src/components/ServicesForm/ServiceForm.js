import { Formik, Form, } from 'formik';
import * as Yup from 'yup'
import MyTextInput from '../MyTextInput';
import { useTranslation } from 'react-i18next'

const initialValues = {
  bathRoomNumder: "",
  windowNumber: "",
  removePellicle: "",
};

const YupShema = () => {
  const { t } = useTranslation();
  return Yup.object({
    bathRoomNumder: Yup.number()
            .min(1, t("what clean"))
            .max(5, t("how many toilet"))
            .required(t("required")),
    windowNumber: Yup.number()
            .min(1, t("what clean"))
            .max(10, t("how many window"))
            .required(t("required")),
    removePellicle: Yup.number()
            .min(1, t("what clean"))
            .max(10,  t("how many window"))
            .required(t("required")),
  })
}

const ServiceForm = ({onChangeServiceData}) => {
  const { t } = useTranslation();
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={YupShema()}
    onSubmit={onChangeServiceData}
    >
      {formikProps => (
        <Form className="form">  
          <h2>{t("additional services")}</h2>
          <MyTextInput
            label={t("cleaning bathrooms")}
            id="bathRoomNumder"
            name="bathRoomNumder"
            type="number">
            <div>`{t("The cost of cleaning bathrooms")} {formikProps.values.bathRoomNumder * 150} {t("uah")}'</div>
          </MyTextInput>
          <MyTextInput
            label={t("Window washing")}
            id="windowNumber"
            name="windowNumber"
            type="number">
            <div>`{t("The cost of washing all windows")} {formikProps.values.windowNumber * 100} {t("uah")}'</div>
          </MyTextInput>
          <MyTextInput
            label={t("removePellicle")}
            id="removePellicle"
            name="removePellicle"
            type="number">
            <div>`{t("costRemovePellicle")} {formikProps.values.removePellicle} {t("ofWindow")} {formikProps.values.removePellicle * 200} {"uah"}'</div>
          </MyTextInput>
          <button className='button button_long'
            type="submit"
            >{t("submit")}</button>
        </Form>
      )}
    </Formik>
  )
}
export default ServiceForm;