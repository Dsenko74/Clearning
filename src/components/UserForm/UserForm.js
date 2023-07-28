import { Formik, Form, } from 'formik';
import * as Yup from 'yup'
import MyTextInput from '../MyTextInput';
import { useTranslation } from 'react-i18next'

const initialValues = {
  name: "",
  phone: "",
  email: "",
  date: ""
}

const YupShema = () => {
   const { t } = useTranslation();
  return Yup.object({
    name: Yup.string()
      .required(t("required"))
      .min(3, t("min3Symbol")),
    email: Yup.string()
      .email(t("wrongEmail"))
      .required(t("required")),
    phone:  Yup.string()
        .matches(/^\+?[1-9]\d{9}$/, t("wrongPhone"))
        .required(t("requiredPhone"))
  })
}

const UserForm = ({onChangeUserData}) => {
  const { t } = useTranslation();
  return (
    <Formik
      initialValues = {initialValues}
      validationSchema = {YupShema()}
      onSubmit = {onChangeUserData}
    >
      <Form className="form">  
        <h2>{t("fillDetails")}</h2>
        <MyTextInput
          label={t("name")}
          id="name"
          name="name"
          type="string" />
        <MyTextInput
          label={t("phoneNumber")}
          id="phone"
          name="phone"
          type="phone" />
        <MyTextInput
          label={t("email")}
          id="email"
          name="email"
          type="string" />
        <MyTextInput
          label={t("date")}
          id="date"
          name="date"
          type="date" />
        <button className='button button_long'
          type="submit"
          >{t("orderCleaning")}</button>
      </Form>
    </Formik>
  )
}

export default UserForm;