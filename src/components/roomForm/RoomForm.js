import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup'


export const MyTextInput = ({children, label,...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input {...props} {...field}/>
            {children}
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </>
    )

};

export const MyCheckbox = ({children, ...props}) => {
    const [field, meta] = useField({...props, type: 'checkbox'});
    return (
        <>
            <label className='checkbox'>
                <input type = 'checkbox' {...props} {...field}/>
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </>
    )

};

const RoomForm = ({setStep, onChangeRoomData}) => {

    return (
        <Formik
        initialValues = {{
            roomNumber: "",
            totalArea: "",
            typeOfCleaning: "" ,
            addWishes: "",
            terms: false 
        }}
        validationSchema = {Yup.object({
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
        })}
        onSubmit = {values => {
            setStep('serviceForm');
            onChangeRoomData(values);
            console.log(`Кількість кімнат: ${values.roomNumber}, Загальна площа: ${values.totalArea} кв.м., Тип прибирання: ${values.typeOfCleaning}`);
        }}
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
                    // onClick={() => setStep('serviceForm')}
                    >відправити та перейти на наступний крок</button>
            </Form>
        </Formik>
        
    )
}

export default RoomForm;