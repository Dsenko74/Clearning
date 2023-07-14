import { useState, useEffect } from 'react'
import  Initial  from '../Initital';
import  RoomForm  from '../RoomForm';
import  ServiceForm  from '../ServicesForm';
import 	UserForm  from '../UserForm';
import  Finalize  from '../Finalize';
import GetCurrencyValue from '../servise/GetCurrencyValue';
import './App.scss';

function App() {
	const [step, setStep] = useState('initial');
	const [privacyPolicy, setPrivacyPolicy] = useState({});
	const [roomData, setRoomData] = useState({});
	const [serviceData, setServiceData] = useState({});
	const [userData, setUserData] = useState({});
	const [currency, setCurrency] = useState('USD');
	const [currencyValue, setCurrencyValue] = useState({});

	useEffect(() => {
		GetCurrencyValue(setCurrencyValue, currency)

		
	}, [currency]);

	const onChangePrivacyPolicy = (value) => {
		setStep('roomForm');
		setPrivacyPolicy({...privacyPolicy, ...value});
	}

	const onChangeRoomData = (values) => {
		setStep('serviceForm');
		setRoomData({...roomData, ...values});
	}

	const onChangeServiceData = (values) => {
		setStep('userForm');
		setServiceData({...serviceData, ...values});
	}

	const onChangeUserData = (values) => {
		setStep('finalize');
		setUserData({...userData, ...values});
	}

	let renderItem;
		switch(step) {
			case 'initial':
				renderItem = <Initial 
												onChangePrivacyPolicy={onChangePrivacyPolicy}
												setCurrency={setCurrency}/>;
				break;
			case 'roomForm': 
				renderItem = <RoomForm 
												onChangeRoomData={onChangeRoomData}/>;
				break;
			case 'serviceForm':
				renderItem = <ServiceForm 
												onChangeServiceData={onChangeServiceData}/>;
				break;
			case 'userForm'	:
				renderItem = <UserForm 
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
								setCurrency={setCurrency}
								setStep={setStep}/>;
				break;
		}

	return (
		<div className="App">
		{renderItem}
		{/* <Finalize 
								setStep={setStep}
								roomData={roomData}
								serviceData={serviceData}
								userData={userData}
								/> */}
		</div>
	);
}

export default App;
