import { Formik, Form, } from 'formik';
import * as Yup from 'yup'
import MyTextInput from '../MyTextInput_';

const YupShema = Yup.object({
  name: Yup.string()
    .required("Обов'язкове поле")
    .min(3, 'Не менше 3 символів'),
  email: Yup.string()
    .email('Невірна email адреса')
    .required("Обов'язкове поле"),
  phone:  Yup.string()
      .matches(/^\+?[1-9]\d{9}$/, 'Номер телефона недійсний')
      .required('Номер телефона обов\'язковий')

})
const UserForm = ({onChangeUserData}) => {
  return (
    <Formik
      initialValues = {{
        name: "",
        phone: "",
        email: "",
        date: ""
      }}
      validationSchema = {YupShema}
      onSubmit = {values => onChangeUserData(values)}
    >
      <Form className="form">  
        <h2>Заповніть ваші дані</h2>
        <MyTextInput
          label='Ваше імя'
          id="name"
          name="name"
          type="string" />
        <MyTextInput
          label='номер мобільного телефону'
          id="phone"
          name="phone"
          type="phone" />
        <MyTextInput
          label='Ваш email'
          id="email"
          name="email"
          type="string" />
        <MyTextInput
          label='Дата прибирання'
          id="date"
          name="date"
          type="date" />
        <button className='button button_long'
          type="submit"
          >замовити прибирання</button>
      </Form>
    </Formik>
  )
}

export default UserForm;