import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'

const Header = ({lng, setLanguage}) => {
  return (
    <Formik
    initialValues = {{
      lng: ""
    }}
    //validationSchema =  {YupShema}
    > 
      <Form className="form form__header">  
        <Field
          className='sm'
          id="lng"
          name="lng"
          onChange={(e)=> setLanguage(e.target.value)}
          as='select'
          value={lng}
          >
            <option value='ua'>ua</option>
            <option value='en'>en</option>
            <option value="de">de</option>
        </Field>
      </Form>
    </Formik>
  )

}

export default Header;