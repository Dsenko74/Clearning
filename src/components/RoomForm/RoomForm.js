import { Formik, Form, Field, ErrorMessage, } from 'formik';
import * as Yup from 'yup'
import MyTextInput from '../MyTextInput';
import MyCheckbox from '../MyCheckbox';

const initialValues = {
  roomNumber: "",
  totalArea: "",
  typeOfCleaning: "" ,
  addWishes: "",
  terms: false 
}

const YupShema = Yup.object({
  roomNumber: Yup.number()
          .min(1, "Щось мусимо ж прибрати?")
          .max(10, "Чи не дофіга у вас кімнат?")
          .required("Обов'язкове поле"),
  totalArea: Yup.number()
          .min(20, "Мінімальне замовлення від 20 кв. м")
          .max(200, "Ми не зможемо стільки прибрати")
          .required("Обов'язкове поле"),
  typeOfCleaning: Yup.string().required("Оберіть тип прибирання"),
  addWishes: Yup.string()
          .required("Обов'язкове поле")
          .min(10, 'Не менше 10 символів'),
  terms: Yup.boolean()
          .required("Потрібна згода")
          .oneOf([true], "Потрібна згода"),
    });



const RoomForm = ({onChangeRoomData}) => {
  return (
    <Formik
    initialValues = {initialValues}
    validationSchema =  {YupShema}
    onSubmit = {onChangeRoomData}
    >
      <Form className="form">  
        <h2>Заповніть основні параметри</h2>
        <MyTextInput
          label='Кількість кімнат'
          id="roomNumber"
          name="roomNumber"
          type="number"
        />
        <MyTextInput
          label='Загальна площа, кв.м.'
          id="totalArea"
          name="totalArea"
          type="number"
        />
        <label htmlFor="typeOfCleaning">Тип прибирання</label>
        <Field
          id="typeOfCleaning"
          name="typeOfCleaning"
          as='select'>
            <option value="">Оберить тип прибирання</option>
            <option value="weekCleaning">Щотижневе</option>
            <option value="generalCleaning">Генеральне</option>
            <option value="afterRepairCleaning">Після ремонту</option>
        </Field>
        <ErrorMessage className='error' name="typeOfCleaning" component={'div'} />
        <label htmlFor="text">Вкажіть ваші додаткові побажання</label>
        <Field 
          id="addWishes"
          name="addWishes"
          as='textarea'
        />
        <ErrorMessage className='error' name="addWishes" component={'div'} />
        <MyCheckbox
          name="terms">
              Всі дані введено коректно?
        </MyCheckbox>
        <button className='button button_long'
          type="submit"
          >відправити та перейти на наступний крок</button>
      </Form>
    </Formik>
  )
}

export default RoomForm;