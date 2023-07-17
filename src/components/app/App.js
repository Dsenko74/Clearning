import { useState, useEffect } from 'react'
import  Initial  from '../Initital';
import  RoomForm  from '../RoomForm';
import  ServiceForm  from '../ServicesForm';
import 	UserForm  from '../UserForm';
import  Finalize  from '../Finalize';
import getCurrencyValue from '../servise/GetCurrencyValue';
import './App.scss';

function App() {
	const [step, setStep] = useState('initial');
	const [privacyPolicy, setPrivacyPolicy] = useState(false);
	const [roomData, setRoomData] = useState({});
	const [serviceData, setServiceData] = useState({});
	const [userData, setUserData] = useState({});
	const [currency, setCurrency] = useState('');
	const [currencyValue, setCurrencyValue] = useState({});

	useEffect(() => {
		getCurrencyValue()
			.then(res => setCurrencyValue(res));
	}, []);

	const onChangePrivacyPolicy = (values) => {
		setStep('roomForm');
		setPrivacyPolicy(values.privacyPolicy);
		setCurrency(values.typeOfCurrency)
	}

	const onChangeRoomData = (values) => {
		console.log(`onChangeRoomData`)
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
												onChangePrivacyPolicy={onChangePrivacyPolicy}/>;
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
								currency={currency}
								currencyValue={currencyValue}
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
		</div>
	);
}

export default App;
