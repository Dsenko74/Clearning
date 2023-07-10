import { useState } from "react";


export const  UseValidate = e => {
    const [errors, setErrors] = useState({});

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
    return (errors);
}