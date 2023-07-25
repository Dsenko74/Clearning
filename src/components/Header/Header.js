import { Formik, Form, Field } from 'formik';
import { useTranslation } from 'react-i18next';

const Header = ({lng, setLng}) => {
  const { i18n } = useTranslation();
  const handleSubmit = (e) => {
    setLng(e.target.value);
    i18n.changeLanguage(e.target.value);
  }
  return (
    <Formik
    initialValues = {{
      lng: ""
    }}
    >
      <Form className="form form__header">  
        <Field
          className='sm'
          id="lng"
          name="lng"
          onChange={handleSubmit}
          as='select'
          value={lng}
          >
            <option value='ua'>ua</option>
            <option value='en'>en</option>
            {/* <option value="de">de</option> */}
        </Field>
      </Form>
    </Formik>
  )
}

export default Header;