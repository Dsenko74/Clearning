import { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import MyTextInput from '../MyTextInput';
import MyCheckbox from '../MyCheckbox';
import i18n from '../locales/i18n';
import { useTranslation } from 'react-i18next';

const YupShema = (lng) => {
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    changeLanguage(lng)
    }, [lng]);

  const changeLanguage = (value) => {
    i18n.changeLanguage(value);
  };
  return  Yup.object({
      roomNumber: Yup.number()
              .min(1, t("what clean"))
              .max(10, t("How many rooms"))
              .required(t("required")),
      totalArea: Yup.number()
              .min(20, t("minOrderedRoom"))
              .max(200, t("maxOrderedRoom"))
              .required(t("required")),
      typeOfCleaning: Yup.string()
              .required(t("select the type of cleaning")),
      addWishes: Yup.string()
              .required(t("required"))
              .min(10, t("minSymbolAddWishes")),
      terms: Yup.boolean()
              .required(t("consent is required"))
              .oneOf([true], t("consent is required")),
        });
  
}

const RoomForm = ({lng, onChangeRoomData}) => {
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    changeLanguage(lng)
    }, [lng]);

  const changeLanguage = (value) => {
    i18n.changeLanguage(value);
  };

  return (
    <Formik
    initialValues = {{
      roomNumber: "",
      totalArea: "",
      typeOfCleaning: "" ,
      addWishes: "",
      terms: false 
    }}
    validationSchema =  {YupShema(lng)}// подумати над своєчасним оновленням lng
    onSubmit = {onChangeRoomData}
    >
      <Form className="form">  
        <h2>{t("fill parameters")}</h2>
        <MyTextInput
          label={t("number of rooms")}
          id="roomNumber"
          name="roomNumber"
          type="number"
        />
        <MyTextInput
          label={t("total area")}
          id="totalArea"
          name="totalArea"
          type="number"
        />
        <label htmlFor="typeOfCleaning">{t("type of cleaning")}</label>
        <Field
          id="typeOfCleaning"
          name="typeOfCleaning"
          as='select'>
            <option value="">{t("select the type of cleaning")}</option>
            <option value="weekCleaning">{t("weekly")}</option>
            <option value="generalCleaning">{t("general")}</option>
            <option value="afterRepairCleaning">{t("after repair")}</option>
        </Field>
        <ErrorMessage className='error' name="typeOfCleaning" component={'div'} />
        <label htmlFor="text">{t("add wishes")}</label>
        <Field 
          id="addWishes"
          name="addWishes"
          as='textarea'
        />
        <ErrorMessage className='error' name="addWishes" component={'div'} />
        <MyCheckbox
          name="terms">
              {t("check the data")}
        </MyCheckbox>
        <button className='button button_long'
          type="submit"
          >{t("submit")}</button>
      </Form>
    </Formik>
  )
}

export default RoomForm;