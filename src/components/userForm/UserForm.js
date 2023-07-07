import { useState } from "react";

const UserForm = ({changeStep}) => {
    const [info, setInfo] = useState({});
    const [errors, setErrors] = useState({});

    const  validate = e => {

        switch(e.target.name){
            case 'name' :
                if (!e.target.value) {
                    setErrors({...errors, [e.target.name] :  "Обов'язкове поле"});
                } else if (e.target.value.length <= 5) {
                    setErrors({...errors, [e.target.name] :  "Мінімум 6 символів для заповнення"});
                } else {
                    setErrors({...errors, [e.target.name] :  null});
                };
                break;
            case 'email' : 
                if (!e.target.value) {
                    setErrors({...errors, [e.target.name] :  "Обов'язкове поле"});
                } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(e.target.value)) {
                    setErrors({...errors, [e.target.name] :  "Невірна email адреса"});
                } else {
                    setErrors({...errors, [e.target.name] :  null});
                };
                break;
            case 'phone' :
                if (!e.target.value) {
                    setErrors({...errors, [e.target.name] :  "Обов'язкове поле"});
                } else if (!/^(\+?38)?0\d{9}$/.test(e.target.value)) {
                    setErrors({...errors, [e.target.name] :  "Невірний номер телефону"});
                } else {
                    setErrors({...errors, [e.target.name] :  null});
                };
                break;
            case 'datte' :
                console.log(e.target.value);
                if (!e.target.value) {
                    setErrors({...errors, [e.target.name] :  "Обов'язкове поле"});
                } else if (!/^\d{4}\/(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])$/.test(e.target.value)) {
                    setErrors({...errors, [e.target.name] :  "невірна дата"});
                } else {
                    setErrors({...errors, [e.target.name] :  null});
                };
                break;
            case 'comments' :
                if (!e.target.value) {
                    setErrors({...errors, [e.target.name] :  "Обов'язкове поле"});
                } else if (e.target.value.length <= 9) {
                    setErrors({...errors, [e.target.name] :  "Мінімум 10 символів для коментаря"});
                } else {
                    setErrors({...errors, [e.target.name] :  null});
                };
                break;
            default:
                setErrors({});
        }
    
        console.log(errors);
    }

    const onChangeInfo = (e) => {
        validate(e);
        setInfo({...info, [e.target.name] : e.target.value } );
    };

 
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(info);
    }

    return (
        <div>
            <h1>Ведіть данні UserForm</h1>
            <form   className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="What is yoy name?"
                        required
                        name="name"
                        value={info.name}
                        onChange={(e, name) => onChangeInfo(e, name)}/>
                        <br />
                    {errors.name ? <div>{errors.name}</div> : null}    
                    <input type="email"
                        className="form-control new-post-label"
                        placeholder="Your e-mail"
                        name="email"
                        value={info.email}
                        onChange={(e, name) => onChangeInfo(e, name)}/>
                        <br />
                        {errors.email ? <div>{errors.email}</div> : null}   
                    <input type="phone"
                        className="form-control new-post-label"
                        placeholder="Your phone number"
                        name="phone"
                        value={info.phone}
                        onChange={(e, name) => onChangeInfo(e, name)}/>
                        <br />
                    {errors.phone ? <div>{errors.phone}</div> : null}   
                    <input type="date"
                        className="form-control new-post-label"
                        placeholder="date of order receipt"
                        name="datte"
                        value={info.datte}
                        onChange={(e, name) => onChangeInfo(e, name)}/>
                        <br />
                    {errors.datte ? <div>{errors.datte}</div> : null}   
                    <textarea 
                        type='textarea'
                        name="comments" 
                        placeholder="Your comments"
                        value={info.comment}
                        onChange={(e, name) => onChangeInfo(e, name)}/>
                    {errors.comments ? <div>{errors.comments}</div> : null}  

                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={onSubmit}>Додати</button>
                </form>
            <button
                onClick={() => changeStep('userForm')}>Замовити прибирання, інформація з данними є в консолі</button>
        </div>
    )
    }

export default UserForm;