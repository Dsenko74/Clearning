import {useState, useEffect} from 'react'
import Initial from '../initital/Initial';
import RoomForm from '../roomForm/RoomForm';
import ServiceForm from '../servicesForm/ServiceForm';
import './App.css';

function App() {

	const [step, setStep] = useState('initial');

	const changeStep = (value) => {
		console.log('change');
		setStep(step => value);    
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
		default:
			renderItem = <Initial changeStep={changeStep}/>
			break;
	}
  
	// const renderItem = (step === 'initial') ? <Initial changeStep={changeStep}/> : (step === 'roomForm') ? <RoomForm changeStep={changeStep}/> : <ServiceForm changeStep={changeStep}/>

	return (
		<div className="App">
		{renderItem}
		{/* <Initial changeStep={changeStep}/>
		<RoomForm changeStep={changeStep}/>
		<ServiceForm changeStep={changeStep}/> */}
		</div>
	);
	}

export default App;
