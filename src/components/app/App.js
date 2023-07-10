import {useState } from 'react'
import Initial from '../initital/Initial';
import RoomForm from '../roomForm/RoomForm';
import ServiceForm from '../servicesForm/ServiceForm';
import UserForm from '../userForm/UserForm';
import './App.scss';

function App() {
	const [step, setStep] = useState('initial');
	const [privacyPolicy, setPrivacyPolicy] = useState({});
	const [roomData, setRoomData] = useState({});

	const onChangePrivacyPolicy = (value) => {
		setPrivacyPolicy({...privacyPolicy, ...value});
	}

	const onChangeRoomData = (values) => {
		setRoomData({...roomData, ...values});
	}
	let renderItem;
		switch(step) {
			case 'initial':
				renderItem = <Initial 
								setStep={setStep}
								onChangePrivacyPolicy={onChangePrivacyPolicy}/>;
				break;
			case 'serviceForm':
				renderItem = <ServiceForm setStep={setStep}/>;
				break;
			case 'roomForm': 
				renderItem = <RoomForm 
								setStep={setStep}
								onChangeRoomData={onChangeRoomData}
								/>;
				break;
			case 'userForm'	:
				renderItem = <UserForm setStep={setStep}/>;
				break;
			default:
				renderItem = <Initial setStep={setStep}/>;
				break;
		}

	return (
		<div className="App">
		{renderItem}
		</div>
	);
}

export default App;
