import {useState, useEffect} from 'react'
import Initial from '../initital/Initial';
import RoomForm from '../roomForm/RoomForm';
import ServiceForm from '../servicesForm/ServiceForm';
import UserForm from '../userForm/UserForm';
import './App.css';

function App() {

	const [step, setStep] = useState('initial');

	const changeStep = (step) => {
		setStep(step);    
	};



	let renderItem;
	switch(step) {
		case 'initial':
			renderItem = <Initial changeStep={changeStep}/>;
			break;
		case 'serviceForm':
			renderItem = <ServiceForm changeStep={changeStep}/>
			break;
		case 'roomForm': 
			renderItem = <RoomForm changeStep={changeStep}/>
			break;
		case 'userForm'	:
			renderItem = <UserForm changeStep={changeStep}/>
			break;
		default:
			renderItem = <Initial changeStep={changeStep}/>
			break;
	}
  


	return (
		<div className="App">
		{renderItem}
		</div>
	);
	}

export default App;
