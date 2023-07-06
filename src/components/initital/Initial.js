

const Initial = ({changeStep}) => {

    return (
        <div>
            <h1>Розрахувати приблизну вартість прибирання initial</h1>
            <button
                onClick={() => changeStep('roomForm')}>Якщо хочете почати — тиснить сюди</button>
        </div>
    )
}

export default Initial;