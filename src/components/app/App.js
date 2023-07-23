import { useState, useEffect, useCallback, useMemo } from 'react'
import Header from '../Header';
import  Initial  from '../Initital';
import  RoomForm  from '../RoomForm';
import  ServiceForm  from '../ServicesForm';
import 	UserForm  from '../UserForm';
import  Finalize  from '../Finalize';
//import Currency from '../Currency';
import getCurrencyValue from '../servise/GetCurrencyValue';
import './App.scss';

function App() {
	const [step, setStep] = useState('initial');
	const [lng, setLanguage] = useState('en');
	const [privacyPolicy, setPrivacyPolicy] = useState(false);
	const [roomData, setRoomData] = useState({});
	const [serviceData, setServiceData] = useState({});
	const [userData, setUserData] = useState({});
	const [currency, setCurrency] = useState({});
	const [currencyValue, setCurrencyValue] = useState({});

	useEffect(() => {
		getCurrencyValue()
			.then(res => setCurrencyValue(res));
	}, []);

	const onChangePrivacyPolicy = useCallback((values) => {
		setStep('roomForm');
		setPrivacyPolicy(values.privacyPolicy);
		setCurrency(values.typeOfCurrency)
	}, []);

	const onChangeRoomData = useCallback((values) => {
		console.log(`onChangeRoomData`)
		setStep('serviceForm');
		setRoomData({...roomData, ...values});
	}, []);

	const onChangeServiceData = useCallback((values) => {
		console.log(`onChangeServiceData`)
		setStep('userForm');
		setServiceData({...serviceData, ...values});
	}, [])

	const onChangeUserData = useCallback((values) => {
		console.log(`onChangeUserData`);
		setStep('finalize');
		setUserData({...userData, ...values});
	}, [])
	
	const RenderComponent = useMemo(() => {
		switch(step) {
			case 'initial':
				return <Initial 
												lng={lng}
												onChangePrivacyPolicy={onChangePrivacyPolicy}/>;
			case 'roomForm': 
				return <RoomForm 
												lng={lng}
												onChangeRoomData={onChangeRoomData}/>;
			case 'serviceForm':
				return <ServiceForm 
												lng={lng}
												onChangeServiceData={onChangeServiceData}/>;
			case 'userForm'	:
				return <UserForm 
												lng={lng}
												onChangeUserData={onChangeUserData}/>;
			case 'finalize'	:
				return <Finalize 
								setStep={setStep}
								lng={lng}
								roomData={roomData}
								serviceData={serviceData}
								userData={userData}
								currency={currency}
								currencyValue={currencyValue}
								/>;
			default:
				return <Initial 
								lng={lng}
								setCurrency={setCurrency}
								setStep={setStep}/>;
		}
	}, [step, lng]);
	


	return (
		<div className="App">
			<Header 
				lng={lng} 
				setLanguage={setLanguage}/>	
			{RenderComponent}
		</div>
	);
}

export default App;
