import { Formik, Form } from 'formik';
import { useMemo} from 'react';
import * as Yup from 'yup'
import  MyCheckbox  from '../MyCheckbox';
import { useTranslation } from 'react-i18next'

const initialValues = {
  privacyPolicy: false 
};

const YupShema = () => {
  const { t } = useTranslation();
  return Yup.object({
    privacyPolicy: Yup.boolean()
                    .required(t("consent is required"))
                    .oneOf([true], t("consent is required")),
  });
}

const Finalize = ({lng, setStep, roomData, serviceData, userData, currency, currencyValue}) => {
  const  totalResult = useMemo(() => serviceData.bathRoomNumder * 150 + serviceData.removePellicle * 200 + serviceData.windowNumber *250, [serviceData]);
  const totalResultEquivalent = useMemo(() => (Math.round(totalResult * 100/ (currencyValue.filter(item => item.cc === currency))[0].rate)) / 100, [currency, totalResult, currencyValue]);
  
  const { t } = useTranslation();
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={YupShema()}
      onSubmit={() => setStep('initial')}
    >
      <Form className="form">  
        <h2>{t("dear")} {userData.name}! <br/> {t("application")}</h2>
        <h3>{roomData.typeOfCleaning} {t("cleanApartment")} {roomData.roomNumber} {t("roomArea")} {roomData.totalArea} {t("area")} {t("addWash")} {serviceData.bathRoomNumder} {t("bathroom")} {serviceData.windowNumber} {t("addWindow")} {serviceData.removePellicle}{t("addPillicle")}</h3>
        <h3>{t("totalCost")} {totalResult} {t("uah")} {t("equivalent")}   {totalResultEquivalent} {(currencyValue.filter(item => item.cc === currency))[0].txt}</h3>
        <MyCheckbox
          name="privacyPolicy">
            {t("processing of personal data")}
        </MyCheckbox>
        <button className='button button_long'
          type="submit"
          >{t("start")}</button>
      </Form>
    </Formik>
)
}
export default Finalize;