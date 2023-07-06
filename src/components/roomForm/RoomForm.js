import { useState } from "react";
const RoomForm = ({changeStep}) => {
    const [roomsNumber, setRoomsNumber] = useState(0);
    const [apertamentsSquare, setApertamentsSquare] = useState(0);

    const changeRoomsNumber = (i) => {
        setRoomsNumber(roomsNumber + i);
    };

    const changeApertamentSquare = (e) => {
        setApertamentsSquare(apertamentsSquare => +e.target.value);
    }


    return (
        <div>
            <h1>В цьому блоці введіть основні параметри RoomForm</h1>
            <button
                onClick={() => changeRoomsNumber(-1)}
                >-</button> 
            <p1>кількість кімнат {roomsNumber}</p1>
            <button
                onClick={() => changeRoomsNumber(1)}
                >+</button>
            <br></br>
            <form>
                <label htmlFor="square">Введіть площу квартира</label>
                <input 
                    type="number"
                    id="square"
                    onChange={(event) => changeApertamentSquare(event)}></input>
            </form>
            <button
                onClick={() => changeStep('serviceForm')}
                >для переходу на наступний крок тиснить сюди</button>
        </div>
    )
}

export default  RoomForm;