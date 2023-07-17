import { Formik, Form, } from 'formik';
import * as Yup from 'yup'
import MyTextInput from '../MyTextInput_';

const YupShema = Yup.object({
  bathRoomNumder: Yup.number()
          .min(1, "Щось мусимо ж прибрати?")
          .max(10, "Чи не дофіга у вас кімнат?")
          .required("Обов'язкове поле"),
  windowNumber: Yup.number()
          .min(1, "Щось мусимо ж прибрати?")
          .max(10, "У вас  вікон менше")
          .required("Обов'язкове поле"),
  removePellicle: Yup.number()
          .min(1, "Щось мусимо ж прибрати?")
          .max(10, "У вас  вікон менше")
          .required("Обов'язкове поле"),
})
const ServiceForm = ({onChangeServiceData}) => {
  return (
    <Formik
    initialValues = {{
      bathRoomNumder: "",
      windowNumber: "",
      removePellicle: "",
    }}
    validationSchema = {YupShema}
    onSubmit = {onChangeServiceData}
    >
      {formikProps => (
        <Form className="form">  
          <h2>Додаткові послуги</h2>
          <MyTextInput
            label='Прибирання санвузів'
            id="bathRoomNumder"
            name="bathRoomNumder"
            type="number">
            <div>`Вартість прибирання санвузлів {formikProps.values.bathRoomNumder * 150} грн.'</div>
          </MyTextInput>
          <MyTextInput
            label='Миття вікон'
            id="windowNumber"
            name="windowNumber"
            type="number">
            <div>`Вартість миття всіх вікон {formikProps.values.windowNumber * 100} грн.'</div>
          </MyTextInput>
          <MyTextInput
            label='Видалення прикипілої плівки з віконних рам'
            id="removePellicle"
            name="removePellicle"
            type="number">
            <div>`Вартість видалення плівки з {formikProps.values.removePellicle} вікон складає {formikProps.values.removePellicle * 200} грн.'</div>
          </MyTextInput>
          <button className='button button_long'
            type="submit"
            >відправити та перейти на наступний крок</button>
        </Form>
      )}
    </Formik>
  )
}
export default ServiceForm;