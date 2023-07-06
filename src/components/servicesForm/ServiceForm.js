

const ServiceForm = ({changeStep}) => {

    return (
        <div>
            <h1>В цьому блоці будут розраховані додаткові послуги ServiceForm</h1>
            <button
                onClick={() => changeStep('initial')}>Натискаючи на цю кнопку повертаємось на початкову сторінку</button>
        </div>
    )
}

export default ServiceForm;