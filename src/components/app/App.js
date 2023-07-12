import {useState } from 'react'
import Initial from '../initital/Initial';
import RoomForm from '../roomForm/RoomForm';
import ServiceForm from '../servicesForm/ServiceForm';
import UserForm from '../userForm/UserForm';
import Finalize from '../finalize/Finalize';
import './App.scss';

function App() {
	const [step, setStep] = useState('initial');
	const [privacyPolicy, setPrivacyPolicy] = useState({});
	const [roomData, setRoomData] = useState({});
	const [serviceData, setServiceData] = useState({});
	const [userData, setUserData] = useState({});


	const onChangePrivacyPolicy = (value) => {
		setPrivacyPolicy({...privacyPolicy, ...value});
	}

	const onChangeRoomData = (values) => {
		setRoomData({...roomData, ...values});
	}

	const onChangeServiceData = (values) => {
		setServiceData({...serviceData, ...values});
	}

	const onChangeUserData = (values) => {
		setUserData({...userData, ...values});
	}

	let renderItem;
		switch(step) {
			case 'initial':
				renderItem = <Initial 
								setStep={setStep}
								onChangePrivacyPolicy={onChangePrivacyPolicy}/>;
				break;
			case 'roomForm': 
				renderItem = <RoomForm 
								setStep={setStep}
								onChangeRoomData={onChangeRoomData}/>;
				break;
			case 'serviceForm':
				renderItem = <ServiceForm 
								setStep={setStep}
								onChangeServiceData={onChangeServiceData}/>;
				break;
			case 'userForm'	:
				renderItem = <UserForm 
								setStep={setStep}
								onChangeUserData={onChangeUserData}/>;
				break;
			case 'finalize'	:
				renderItem = <Finalize 
								setStep={setStep}
								roomData={roomData}
								serviceData={serviceData}
								userData={userData}
								/>;
				break;	
			default:
				renderItem = <Initial 
								setStep={setStep}/>;
				break;
		}

	return (
		<div className="App">
		{renderItem}
		</div>
	);
}

export default App;
