

const ServiceForm = ({changeStep}) => {

    return (
        <div>
            <h1>В цьому блоці будут розраховані додаткові послуги ServiceForm</h1>
            <button
                onClick={() => changeStep('userForm')}>Натискаючи на цю кнопку переходимо на форму по заповненню особистої інформації</button>
        </div>
    )
}

export default ServiceForm;